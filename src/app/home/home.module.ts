import { Comp3Component } from './../comp3/comp3.component';
import { Comp2Component } from './../comp2/comp2.component';
import { Comp1Component } from './../comp1/comp1.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';

@NgModule({
  declarations: [HomePage, Comp1Component, Comp2Component, Comp3Component],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule
  ], entryComponents: [
    HomePage
  ]
})
export class HomePageModule {}
