import { RfComponent } from './rf/rf.component';
import { TdfComponent } from './tdf/tdf.component';
import { DeactivateGuard } from './deactivate.guard';
import { AuthGuardGuard } from './auth-guard.guard';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ErrorComponent } from './error/error.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/component1', pathMatch: 'full' },
  { path: 'component1', component: ComponentOneComponent },
  { path: 'component2', component: ComponentTwoComponent,
    children: [
      { path: 'child1', component: ChildOneComponent },
      { path: 'child2', component: ChildTwoComponent }
    ],
    canActivate: [AuthGuardGuard],
    canDeactivate: [DeactivateGuard]
  },
  { path: 'tdf', component: TdfComponent },
  { path: 'rf', component: RfComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
