import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { BreakpointCheckMobileDirective } from './utils/directives/breakpoint-check-mobile.directive';

@NgModule({
  declarations: [BreakpointCheckMobileDirective],
  imports: [CommonModule],
  exports: [UiModule, BreakpointCheckMobileDirective],
})
export class NgThreeModule {}
