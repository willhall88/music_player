function Player() {
  this.playlist = {1: 'one', 
                   2: 'two',
                   3: 'three',
                   4: 'four',
                   5: 'five'
                  };
  this.currentTrack = 1;
  this.looping = false;
}

Player.prototype.skipForward = function() {
  this.currentTrack++;
};

Player.prototype.skipBack = function() {
  if (this.currentTrack == 1) return false;
  this.currentTrack--;
};
