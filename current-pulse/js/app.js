$(init);

var Site = function() {
  console.log(this);
  this.colors = ["#FF4d4d","#ff894d","#ffd34d","#4AF08E","#4dadff", "#a44dff"];
  this.colors = this.randomize(this.colors);
  this.colorize();
};

Site.prototype.randomize = function(colors) {
  var randomized = [];
  while (randomized.length < 6) {
    var n = Math.floor(Math.random() * colors.length);
    if (randomized.indexOf(colors[n]) === -1) {
      randomized.push(colors[n]);
    }
  }
  return randomized;
}

Site.prototype.colorize = function() {
  $('div').each(function(i, div) {
    $(div).css("background-color", this.colors[i]);
  })
}

function init() {
  var site = new Site();
  console.log(site);
}
