import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

import gsap from 'gsap';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-three-slider',
  templateUrl: './slider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLElement>;

  @Input() inputDisplacementScale$!: Observable<number>;

  ngAfterViewInit(): void {
    gsap.from(this.canvas.nativeElement, {
      opacity: 0,
      duration: 3,
    });
  }
}
