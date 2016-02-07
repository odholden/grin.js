$(init);

function init() {
  loops = {
    serious: ["Coding Teacher", "Full-Stack Developer"],
    other:   ["Beanies", "Bannoffee Pie", "Burgers", "Fentiman's Ginger Beer",
    "Hitchhiking", "Hot Tubs", "Indie Movies", "Backpacking", "The Economist",
    "Old Cars", "Australia", "Teaching", "Coding", "Theatre"]
  };
  var site = new Site(loops);
  site.setScrollListener();
  // loopText();
}

function Site(loops) {
  this.loops = loops;
  this.currentSection;
  this.currentScroll = 0;
  this.newScroll = 0;
}

Site.prototype.setScrollListener = function() {
  $(window).one("scroll", this.detectScroll.bind(this));
}

Site.prototype.detectScroll = function() {
  this.newScroll = $(window).scrollTop();
  this.checkSection();
  console.log(this.currentScroll, this.newScroll, this.currentSection);
  if (this.newScroll > this.currentScroll) {
    $(window).scrollTop((this.currentSection+1) * $(window).height());
  } else if (this.newScroll < this.currentScroll) {
    $(window).scrollTop((this.currentSection-1) * $(window).height());
  }
  this.currentScroll = this.newScroll;
  setTimeout(this.setScrollListener.bind(this), 1000);
}

Site.prototype.checkSection = function() {
  var windowRatio     = this.currentScroll / $(window).height();
  this.currentSection = Math.floor(windowRatio);
}
