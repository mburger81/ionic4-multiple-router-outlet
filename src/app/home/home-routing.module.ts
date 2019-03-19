import { Comp1Component } from './../comp1/comp1.component';
import { Comp2Component } from './../comp2/comp2.component';
import { Comp3Component } from './../comp3/comp3.component';
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
     path: '',
     component: HomePage
  },
  {
    path: 'comp1',
    component: Comp1Component,
    outlet: 'secondary'
  },
  {
    path: 'comp2',
    component: Comp2Component,
    outlet: 'secondary'
  },
  {
    path: 'comp3',
    component: Comp3Component,
    outlet: 'secondary'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
