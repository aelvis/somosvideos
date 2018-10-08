import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string,icon: string, component: any}>;

  constructor(private socialSharing: SocialSharing,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Tv en VIVO', icon: 'videocam' , component: HomePage },
      { title: 'Contactos', icon: 'list-box', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
  shareImg() {   
            //Common sharing event will open all available application to share
            this.socialSharing.share("Descarga nuestra App en Play Store como Somos Música","Tema", "https://somosmusica.pe/assets/descargar.jpeg", "https://play.google.com/store/apps/details?id=io.somos.musica")
              .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ' + JSON.stringify(error));
              });
  }
}
