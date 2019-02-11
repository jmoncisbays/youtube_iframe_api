import { Directive, OnInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appYoutube]'
})
export class YoutubeDirective implements OnInit {
  public player: any;
  public YT: any;
  public video: any;

  @Output("video-ended")
  videoEnded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.YT = window['YT'];
    this.player = new this.YT.Player('player', {
      height: '390',
      width: '640',
      events: {
        'onReady': () => {},
        'onStateChange': (event) => {
          if (event.data == window['YT'].PlayerState.PLAYING && !window['done']) {
            setTimeout(window['YT'].stopVideo, 6000);
            window['done'] = true;
          }

          if(event.data == window['YT'].PlayerState.ENDED) {
            this.videoEnded.emit();
          }        
        }
      }
    });
  }

  loadVideo(id: string) {
    this.player.loadVideoById(id);
  }
}