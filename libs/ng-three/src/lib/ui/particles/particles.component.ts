import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable, repeat, take, timer } from 'rxjs';
import * as THREE from 'three';

@Component({
  selector: 'ng-three-particles',
  templateUrl: './particles.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticlesComponent implements OnInit {
  disc = new THREE.TextureLoader().load('assets/snowflake.svg');
  vertices: number[] = [];
  particlesAmount = 2500;

  color$!: Observable<string>;

  ngOnInit(): void {
    for (let i = 0; i < this.particlesAmount; i++) {
      const x = 2000 * Math.random() - 1000;
      const y = 2000 * Math.random() - 1000;
      const z = 2000 * Math.random() - 1000;

      this.vertices.push(x, y, z);
    }

    this.color$ = timer(0, 100).pipe(
      take(360),
      map((time) => {
        return `hsl(${time}, 50%, 50%)`;
      }),
      repeat()
    );
  }
}
