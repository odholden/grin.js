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
  this.checkSection();
  setTimeout(function() {
    this.newScroll = $(window).scrollTop();
    if (this.newScroll > this.currentScroll) {
      this.scrollTo(this.currentSection+1);
    } else if (this.newScroll < this.currentScroll) {
      this.scrollTo(this.currentSection-1);
    }
    console.log("current scroll ====== " + this.currentScroll);
    console.log("new scroll ========== " + this.newScroll);
    console.log("current section ===== " + this.currentSection);
    this.currentScroll = this.newScroll;
  }.bind(this), 100);
  setTimeout(this.setScrollListener.bind(this), 1000);
}

Site.prototype.checkSection = function() {
  var windowRatio     = this.currentScroll / $(window).height();
  this.currentSection = Math.floor(windowRatio);
}

Site.prototype.scrollTo = function(section) {
  setTimeout($(window).scrollTop(section * $(window).height()).bind(this), 900);
}
