aot.startup = {};

aot.attachNoScroll = function(){
  window.onscroll = function() {
    window.scrollTo(0, 0)
  };
};

// Code execution
aot.attachNoScroll();
