import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, map, Observable, of } from 'rxjs';

import { gsap } from 'gsap';

import TextPlugin from 'gsap/TextPlugin';
import { EasePack } from 'gsap/all';
import { Object3D } from 'three';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'digital-flyer',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('main', { static: true }) main!: ElementRef<HTMLElement>;
  @ViewChild('name', { static: true }) name!: ElementRef<HTMLElement>;
  @ViewChild('intro', { static: true }) intro!: ElementRef<HTMLElement>;
  @ViewChild('last', { static: true }) last!: ElementRef<HTMLElement>;

  words$: Observable<string[]> = of([
    'Angular frontend developer.',
    'Elf | NgRx',
    'Supabase | Firebase',
    'Angular  + Nx = 🙌😎',
    'Angular Three (NGT)',
    'lived on an island!',
  ]);

  introTimeline = gsap.timeline().pause();
  textTimeline = gsap.timeline({ repeat: -1 }).pause();
  cursorTimeline = gsap.timeline().pause();

  cameraPositionX$!: Observable<number>;
  cameraPositionY$!: Observable<number>;

  cameraPositionX = 0;
  cameraPositionY = 0;

  isViewOnMobile!: boolean;
  activateRed = false;

  noDisplacementScale$!: Observable<number>;
  displacementScale$!: Observable<number>;

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin, EasePack);
    this.animateContent();

    this.noDisplacementScale$ = of(-0.5);

    const displacementScaleMouseXEvents$ = fromEvent(
      this.main.nativeElement,
      'mousemove'
    ).pipe(
      map((event) => {
        const windowHalfX = window.innerWidth / 2;
        const { clientX } = event as MouseEvent;
        const mouseY = (clientX / windowHalfX) * 2 - 2;

        return mouseY / 2.5;
      })
    );

    const particlesMouseXEvents$ = fromEvent(
      this.main.nativeElement,
      'mousemove'
    ).pipe(
      map((event) => {
        const windowHalfY = window.innerHeight / 2;
        const { clientY } = event as MouseEvent;
        const mouseY = (clientY / windowHalfY) * 2 - 1;

        this.cameraPositionX = mouseY / 2;
        return mouseY / 2;
      })
    );
    const particlesMouseYEvents$ = fromEvent(
      this.main.nativeElement,
      'mousemove'
    ).pipe(
      map((event) => {
        const windowHalfX = window.innerWidth / 2;
        const { clientX } = event as MouseEvent;
        const mouseX = (clientX / windowHalfX) * 2 - 1;

        this.cameraPositionY = -mouseX / 2;
        return -mouseX / 2;
      })
    );

    this.cameraPositionX$ = particlesMouseXEvents$;
    this.cameraPositionY$ = particlesMouseYEvents$;
    this.displacementScale$ = displacementScaleMouseXEvents$;
  }

  ngAfterViewInit(): void {
    gsap.from('.link', {
      delay: 3.2,
      duration: 0.5,
      stagger: 0.15,
      ease: 'power3.inOut',
      x: 100,
    });

    if (!this.isViewOnMobile) {
      this.cameraPositionX$.subscribe();
      this.cameraPositionY$.subscribe();
    }
  }

  isBreakpointMatching(payload: boolean) {
    this.isViewOnMobile = payload;
  }

  animateContent() {
    this.introTimeline
      .to('.flicker', {
        duration: 2,
        autoAlpha: 0.1,
        yoyo: true,
        repeat: -1,
        ease: EasePack.RoughEase.config({
          template: 'none.out',
          strength: 1,
          points: 20,
          taper: 'none',
          randomize: true,
          clamp: false,
        }),
      })
      .from(this.intro.nativeElement, {
        duration: 1,
        x: -300,
        ease: 'sine.in',
        onComplete: () => {
          this.cursorTimeline.play();
        },
      });

    // Cursor;
    this.cursorTimeline
      .from('.cursor', {
        delay: 0.5,
        opacity: 0,
        ease: 'sine.in',
        onComplete: () => {
          this.textTimeline.play();
        },
      })
      .to('.cursor', {
        opacity: 0,
        ease: 'power2.inOut',
        duration: 1,
        repeat: -1,
      });

    this.words$
      .pipe(
        map((words) =>
          words.map((word) => {
            const timeline = gsap.timeline({
              repeat: 1,
              yoyo: true,
              repeatDelay: 1,
              delay: 1,
            });
            timeline.to('.text', {
              duration: 3,
              text: word,
            });
            this.textTimeline.add(timeline);
          })
        )
      )
      .subscribe();

    gsap.from(this.name.nativeElement, {
      duration: 1.5,
      delay: 0.2,
      y: -100,
      opacity: 0,
      ease: 'sine.in',
      onComplete: () => {
        this.introTimeline.play();
      },
    });

    gsap.from(this.last.nativeElement, {
      delay: 3,
      duration: 0.5,
      opacity: 0,
      ease: 'sine.in',
      x: -100,
    });
  }

  moveCamera(object: Object3D) {
    gsap.to(object.rotation, {
      x: this.cameraPositionX,
      y: this.cameraPositionY,
      duration: 0.8,
    });
  }
}
