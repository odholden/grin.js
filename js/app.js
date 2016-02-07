$(init);

function init() {
  loops = {
    serious: ["Coding Teacher", "Full-Stack Developer"],
    other:   ["Beanies", "Bannoffee Pie", "Burgers", "Fentiman's Ginger Beer",
    "Hitchhiking", "Hot Tubs", "Indie Movies", "Backpacking", "The Economist",
    "Old Cars", "Australia", "Teaching", "Coding", "Theatre"]
  };
  var site = new Site(loops);
  site.checkScroll();
  // loopText();
}

function Site(loops) {
  this.loops = loops;
  this.currentSection;
  this.currentScroll = 0;
  this.newScroll = 0;
}

Site.prototype.checkScroll = function() {
  $(window).on("scroll", this.detectScroll.bind(this));
}

Site.prototype.detectScroll = function() {
  this.newScroll = $(window).scrollTop();
  this.checkSection();
  console.log(this.currentScroll, this.newScroll, this.currentSection);
  if (this.newScroll > this.currentScroll) {
    $(window).scrollTop(this.currentScroll + $(window).height());
  } else {
    $(window).scrollTop(this.currentScroll - $(window).height());
  }
  this.currentScroll = this.newScroll;
}

Site.prototype.checkSection = function() {
  var windowRatio     = this.currentScroll / $(window).height();
  this.currentSection = Math.floor(windowRatio);
}

Site.prototype.scrollTo = function() {

}
