import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import {
  NgtCoreModule,
  NgtColorPipeModule,
  NgtFogPipeModule,
} from '@angular-three/core';
import { NgtMeshModule } from '@angular-three/core/meshes';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import {
  NgtMeshBasicMaterialModule,
  NgtMeshStandardMaterialModule,
  NgtPointsMaterialModule,
} from '@angular-three/core/materials';
import {
  NgtBoxGeometryModule,
  NgtBufferGeometryModule,
  NgtPlaneGeometryModule,
} from '@angular-three/core/geometries';
import {
  NgtPointLightModule,
  NgtAmbientLightModule,
  NgtSpotLightModule,
} from '@angular-three/core/lights';
import { NgtPointLightHelperModule } from '@angular-three/core/helpers';
import { NgtPointsModule } from '@angular-three/core/points';
import { NgtFloat32BufferAttributeModule } from '@angular-three/core/attributes';
import { NgtGroupModule } from '@angular-three/core/group';

// Swiper
import { SwiperModule } from 'swiper/angular';

// Components
import { SliderComponent } from './slider/slider.component';
import { ParticlesComponent } from './particles/particles.component';
import { TerrainCanvasComponent } from './terrain-canvas/terrain-canvas.component';
import { SnowflakesCanvasComponent } from './snowflakes-canvas/snowflakes-canvas.component';

@NgModule({
  declarations: [
    TerrainCanvasComponent,
    SliderComponent,
    SnowflakesCanvasComponent,
    ParticlesComponent,
  ],
  imports: [
    CommonModule,
    NgtCoreModule,
    NgtMeshModule,
    NgtMeshBasicMaterialModule,
    NgtBoxGeometryModule,
    NgtPlaneGeometryModule,
    NgtBufferGeometryModule,
    NgtPointLightModule,
    NgtAmbientLightModule,
    NgtMeshStandardMaterialModule,
    NgtSpotLightModule,
    NgtPointLightHelperModule,
    NgtSobaOrbitControlsModule,
    NgtPointsModule,
    NgtFloat32BufferAttributeModule,
    NgtPointsMaterialModule,
    NgtColorPipeModule,
    NgtFogPipeModule,
    NgtGroupModule,
    SwiperModule,
  ],
  exports: [
    TerrainCanvasComponent,
    SliderComponent,
    SnowflakesCanvasComponent,
    ParticlesComponent,
  ],
})
export class UiModule {}
