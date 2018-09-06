import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  video: string = "https://secure-playlist.livestream.com/streams/13907141_4117932_lsiuzh3hv37qvmycbrw_1/media/13907141_4117932_lsiuzh3hv37qvmycbrw_1@678000pb.m3u8?dw=14400&token=1536346305_436d326fae2c1f82ce27383f5e9ee380bf797b9d&ts=1536170400";
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
