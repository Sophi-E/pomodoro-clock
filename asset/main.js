//jshint esversion: 6
var app = new Vue({
  el: '#app',
  data: {
    timer : null,
    totalTime : (60 * 25),
    time : 0
  },
  created(){
    this.time = this.totalTime;
  },
  methods: {
    padNum(num){
      return (num < 10 ? '0' : '') + num.toString();
    },
    getMinutes(){
      return this.padNum(Math.floor(this.time / 60));
    },
    getSeconds(){
      return this.padNum(this.time % 60);
    },
    playPause(){
      if(!this.timer){
        this.play();
      }else{
        this.pause();
      }
    },
    play(){
      if(this.time <= 0) this.time = this.totalTime;
      this.timer = setInterval(() => {
        this.time -= 1;
        if(this.time <= 0) this.playPause();
      }, 1000);
    },
    pause(){
      clearInterval(this.timer);
      this.timer = null;
    },
    reset(){
      this.time = this.totalTime;
    },
    getPlayState(){
      return !!this.timer;
    }
  }
});
