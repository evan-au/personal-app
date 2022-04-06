import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import * as THREE from 'three';
import { Object3D } from 'three';
import { generateRandomNumbers } from '../../utils/helpers/random-numbers';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'ng-three-snowflakes-canvas',
  templateUrl: './snowflakes-canvas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnowflakesCanvasComponent {
  @Input() inputCameraPositionX!: number;
  @Input() inputCameraPositionY!: number;
  @Output() outputMoveCamera: EventEmitter<Object3D> = new EventEmitter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  configControls(controls: any) {
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = generateRandomNumbers(0, 1);

    controls.object.up = new THREE.Vector3(
      generateRandomNumbers(-1, 0),
      generateRandomNumbers(-1, 1),
      0
    );
  }

  moveCamera(object: Object3D) {
    this.outputMoveCamera.emit(object);
  }
}
