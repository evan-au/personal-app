import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { timer, map, repeat, take, Observable } from 'rxjs';
import * as THREE from 'three';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'ng-three-terrain-canvas',
  templateUrl: './terrain-canvas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TerrainCanvasComponent implements OnInit {
  @Input() inputDisplacementScale!: number | null;

  color$!: Observable<string>;

  loader = new THREE.TextureLoader();
  texture = this.loader.load('assets/texture-4.jpg');
  height = this.loader.load('assets/height.png');
  alpha = this.loader.load('assets/alpha-2.png');

  ngOnInit(): void {
    this.color$ = timer(0, 100).pipe(
      take(360),
      map((time) => {
        return `hsl(${time}, 50%, 50%)`;
      }),
      repeat()
    );
  }

  onAnimate(mesh: THREE.Object3D) {
    mesh.rotation.z += 0.002;
  }
}
