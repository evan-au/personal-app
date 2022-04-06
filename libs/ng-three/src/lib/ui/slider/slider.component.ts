import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';

import gsap from 'gsap';
import { Observable } from 'rxjs';
import Swiper, { Autoplay, SwiperOptions } from 'swiper';
import { Object3D } from 'three';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'ng-three-slider',
  templateUrl: './slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLElement>;
  @Output() outputMoveCamera: EventEmitter<Object3D> = new EventEmitter();
  @Input() inputCameraPositionX!: number;
  @Input() inputCameraPositionY!: number;
  @Input() inputDisplacementScale$!: Observable<number>;

  config: SwiperOptions = {
    autoplay: { delay: 15000 },
  };

  ngOnInit(): void {
    Swiper.use([Autoplay]);
  }

  ngAfterViewInit(): void {
    gsap.from(this.canvas.nativeElement, {
      opacity: 0,
      duration: 3,
    });
  }

  moveCamera(object: Object3D) {
    this.outputMoveCamera.emit(object);
  }
}
