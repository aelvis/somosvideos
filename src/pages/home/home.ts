import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //video: string = "https://secure-playlist.livestream.com/streams/13907141_4117932_lsiuzh3hv37qvmycbrw_1/media/13907141_4117932_lsiuzh3hv37qvmycbrw_1@678000pb.m3u8?dw=14400&token=1536346305_436d326fae2c1f82ce27383f5e9ee380bf797b9d&ts=1536170400";
  //video: string = "https://secure-playlist.livestream.com/streams/888332_931293_lsieeuprxuswytz7wtt_1/media/888332_931293_lsieeuprxuswytz7wtt_1@2320000p.m3u8?dw=14400&token=1536438713_ea67a9ee2d0da48d05735053d1fd7bfabd3bc6ac&ts=1536264000";
  //video: string = "https://secure-playlist.livestream.com/streams/14174136_8329774_lsiul6xv22hwjlbjyml_1/media/14174136_8329774_lsiul6xv22hwjlbjyml_1@678000pb.m3u8?dw=14400&token=1536439756_02eff3b81fe63853898ce97a5ddc6590abf0a93c&ts=1536264000";
  video:string ="https://livestream.com/accounts/16944724/events/5883280/videos/130121633";
  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia) {

  }
  loadvideo(){
    
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo(this.video, options);
  }
}