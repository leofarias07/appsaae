import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesContaPage } from './detalhes-conta';

@NgModule({
  declarations: [
    DetalhesContaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesContaPage),
  ],
})
export class DetalhesContaPageModule {}
