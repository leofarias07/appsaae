import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WpProvider } from '../providers/wp/wp';
import { WpApiModule, WpApiLoader,WpApiStaticLoader } from 'wp-api-angular';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HttpClientModule } from '@angular/common/http';
import { ContasPage } from '../pages/contas/contas';
import { DetalhesContaPage } from '../pages/detalhes-conta/detalhes-conta';

export function WpApiLoaderFactory(http) {
  return new WpApiStaticLoader(http, 'http://saae.caxias.ma.gov.br//wp-json/');
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContasPage,
    DetalhesContaPage
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    WpApiModule.forRoot({
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [Http]
    }),
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContasPage,
    DetalhesContaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WpProvider
  ]
})
export class AppModule {}
