import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalAppService } from './services/personal-app.service';

@NgModule({
  imports: [CommonModule],
  providers: [PersonalAppService],
})
export class SupabaseModule {}
