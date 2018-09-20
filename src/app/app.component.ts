import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdministracionPage } from '../pages/administracion/administracion';
import { ProgramacionPage } from '../pages/programacion/programacion';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string,icon: string, component: any}>;

  constructor(private file: File, 
    private fileOpener: FileOpener, 
    private socialSharing: SocialSharing,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Tv en VIVO', icon: 'videocam' , component: HomePage },
      { title: 'Contactos', icon: 'list-box', component: ListPage },
      { title: 'Programación', icon: 'paper', component: ProgramacionPage },
      { title: 'Administración', icon: 'settings', component: AdministracionPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  saveImg() {
    let imageName = "descargar.jpeg";
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'tempDownloadFolder';
    
    //Create a folder in memory location
    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {
 
        //Copy our asset/img/FreakyJolly.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
          .then((entries) => {
 
            //Open copied file in device's default viewer
            this.fileOpener.open(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, 'image/jpeg')
              .then(() => console.log('File is opened'))
              .catch(e => alert('Error' + JSON.stringify(e)));
          })
          .catch((error) => {
            alert('error ' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('error' + JSON.stringify(error));
      });
  }
 
  shareImg() { 
    let imageName = "descargar.jpeg";
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'tempDownloadFolder';
    
    //Create a folder in memory location
    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {
 
        //Copy our asset/img/FreakyJolly.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
          .then((entries) => {
 
            //Common sharing event will open all available application to share
            this.socialSharing.share("Mensaje","Tema", ROOT_DIRECTORY + downloadFolderName + "/" + imageName, imageName)
              .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ' + JSON.stringify(error));
              });
          })
          .catch((error) => {
            alert('error ' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('error ' + JSON.stringify(error));
      });
  }
}
