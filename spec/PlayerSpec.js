describe("the player", function() {
  
  var player;

  beforeEach(function(){
    player = new Player();
  });

  it("should be initialised with a playlist", function(){
    expect(Object.keys(player.playlist).length).toEqual(5);
  });

  it("should start playing from track one", function(){
    expect(player.currentTrack).toEqual(1);
  });

  it("can be skip forward to the next track", function(){
    player.skipForward();
    expect(player.currentTrack).toEqual(2);
  });

  it("can be skip backward to the previous track", function(){
    player.skipForward();
    expect(player.currentTrack).toEqual(2);
    player.skipBack();
    expect(player.currentTrack).toEqual(1);
  });

  it("cannot skip backward if it is on the first track", function(){
    player.skipBack();
    expect(player.currentTrack).toEqual(1);
  });

  it("is initialised on not looping mode", function(){
    expect(player.looping).toEqual(false);
  });

  it("should know what the last track is", function(){
    player.currentTrack=player.lastTrack;
    expect(player.currentTrack).toEqual(5);
  });

  it("if it is not looping then it cannot skip forward past the last track", function(){
    player.currentTrack=player.lastTrack;
    player.skipForward();
    expect(player.currentTrack).toEqual(player.lastTrack);
  });

  it("if it is looping then it can skip from the last track to the first", function(){
    player.looping = true;
    player.currentTrack=player.lastTrack;
    player.skipForward();
    expect(player.currentTrack).toEqual(1);
  });

  it("if it is looping and on track 2 it should skip to track 3", function(){
    player.looping = true;
    player.currentTrack=2;
    player.skipForward();
    expect(player.currentTrack).toEqual(3);
  });


  it("when it is initialised the shuffle option is off", function(){
    expect(player.shuffle).toEqual(false);
  });

  it("when the shuffle button is on and a track is skipped a random track is started", function(){
    spyOn(player, 'randomTrack').andReturn(4);
    player.shuffle = true;
    player.currentTrack=2;
    player.skipForward();
    expect(player.randomTrack).toEqual(4);
  })

});
 