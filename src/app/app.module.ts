import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdministracionPage } from '../pages/administracion/administracion';
import { ProgramacionPage } from '../pages/programacion/programacion';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';
import { VideoPlayer } from '@ionic-native/video-player';
import { InicioService } from '../servicios/index.services';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdministracionPage,
    ProgramacionPage
  ],
  imports: [
    BrowserModule,
        HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdministracionPage,
    ProgramacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    File,
    InicioService,
    FileOpener,
    SocialSharing,
    VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
