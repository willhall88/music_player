function Player() {
  this.playlist = {1: 'one', 
                   2: 'two',
                   3: 'three',
                   4: 'four',
                   5: 'five'
                  };
  this.currentTrack = 1 ;
  this.looping = false;
  this.lastTrack = parseInt(Object.keys(this.playlist).pop());
};

Player.prototype.skipForward = function() {
  if(this.looping == true && this.currentTrack == this.lastTrack){
    return this.currentTrack = 1;
};
  if (this.currentTrack == this.lastTrack) return false;
  this.currentTrack++;
};

Player.prototype.skipBack = function() {
  if (this.currentTrack == 1) return false;
  this.currentTrack--;
};
