import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing.module').then((m) => m.LandingModule),
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('./features/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('./features/editor/editor.module').then((m) => m.EditorModule),
      },
      // {
      //   path: 'sign-up',
      //   loadChildren: () => import('./features/landing/landing.module').then(m=>m.LandingModule),
      // },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DigitalFlyerModule {}
