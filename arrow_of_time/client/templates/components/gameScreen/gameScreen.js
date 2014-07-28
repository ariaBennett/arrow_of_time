Template.gameScreen.helpers({
  screenWidth : function() {
    var width = Session.get('gameScreenWidth');
    return width;
  },
  screenHeight : function() {
    var height = Session.get('gameScreenHeight');
    return height;
  }
});
