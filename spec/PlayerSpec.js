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
  })
});
 