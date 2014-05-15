function Player() {
  this.playlist = {1: 'one', 
                   2: 'two',
                   3: 'three',
                   4: 'four',
                   5: 'five'
                  };
  this.currentTrack = 1 ;
  this.lastTrack = parseInt(Object.keys(this.playlist).pop());
  this.looping = false;
  this.shuffle = false;
};

Player.prototype.skipForward = function() {
  if(this.shuffle === true){
    return this.currentTrack = this.randomTrack();
  };
  if(this.currentTrack === this.lastTrack){
    if(this.looping === true) return this.currentTrack = 1;
    else return false;
  }
  return this.currentTrack++;


};

Player.prototype.skipBack = function() {
  if (this.currentTrack === 1) return false;
  this.currentTrack--;
};

Player.prototype.randomTrack = function() {
  return (Math.ceil(Math.random() * this.lastTrack));
};
