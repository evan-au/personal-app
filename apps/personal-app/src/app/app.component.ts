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

  sentences$: Observable<string[]> = of([
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

  isViewOnMobile!: boolean;
  activateRed = false;

  noDisplacementScale$!: Observable<number>;
  displacementScale$!: Observable<number>;

  ngOnInit(): void {
    gsap.registerPlugin(TextPlugin, EasePack);
    this.animateContent();

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

    this.noDisplacementScale$ = of(-0.5);
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

    this.sentences$
      .pipe(
        map((sentences) =>
          sentences.map((sentence) => {
            const timeline = gsap.timeline({
              repeat: 1,
              yoyo: true,
              repeatDelay: 1,
              delay: 1,
            });
            timeline.to('.text', {
              duration: 3,
              text: sentence,
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
}
