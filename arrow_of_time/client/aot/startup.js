aot.startup = {};

aot.initSessions = function() {
  Session.set('gameScreenWidth', '640');
  Session.set('gameScreenHeight', '360');
};

aot.attachNoScroll = function() {
  window.onscroll = function() {
    window.scrollTo(0, 0)
  };
};

// Code execution
aot.attachNoScroll();
aot.initSessions();
