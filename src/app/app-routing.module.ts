import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorComponent} from './share/error/error.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'me',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'uptime',
    loadChildren: () => import('./uptime/uptime.module').then(m => m.UptimeModule)
  },
  {
    path: 'terraform-module',
    loadChildren: () => import('./terraform-module/terraform-module.module').then(m => m.TerraformModuleModule)
  },
  {
    path: 'build',
    loadChildren: () => import('./build/build.module').then(m => m.BuildModule)
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**',   component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
