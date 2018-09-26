import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioService } from '../../servicios/index.services';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cursos:string;
  //video: string = "https://secure-playlist.livestream.com/streams/13907141_4117932_lsinhs97bz54fswkcw8_1/media/13907141_4117932_lsinhs97bz54fswkcw8_1@678000p.m3u8?dw=14400&token=1537288210_2e3c0c9d22001f453d271a7951b10be2e60ce9c5&ts=1537113600";
constructor(public navCtrl: NavController,
    private streamingMedia: StreamingMedia,
    private _nav: InicioService){
      this.sd();

  }
  sd(){
        this._nav.getCursos().subscribe(

      data => { 
          if(data.error){
        }else{
            this.cursos =  data.data.video;
          }
        }  
    );
  }
  loadvideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: false,
      controls: true
    };
    
    this.streamingMedia.playVideo(this.cursos, options);
  }
}

