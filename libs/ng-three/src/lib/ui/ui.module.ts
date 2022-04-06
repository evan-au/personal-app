import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { NgtCoreModule } from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtMeshStandardMaterialModule } from '@angular-three/core/materials';
import { NgtPlaneGeometryModule } from '@angular-three/core/geometries';
import {
  NgtPointLightModule,
  NgtAmbientLightModule,
} from '@angular-three/core/lights';

// Components
import { SliderComponent } from './slider/slider.component';
import { TerrainCanvasComponent } from './terrain-canvas/terrain-canvas.component';

@NgModule({
  declarations: [TerrainCanvasComponent, SliderComponent],
  imports: [
    CommonModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtPlaneGeometryModule,
    NgtPointLightModule,
    NgtAmbientLightModule,
    NgtMeshStandardMaterialModule,
  ],
  exports: [TerrainCanvasComponent, SliderComponent],
})
export class UiModule {}
