app.filter('myFilter', function() {
  return function(x) {
    var i, c, txt = "";
    for (i = 0; i < x.length; i++) {
      c = x[i];
      if (!/[a-zA-Z ]+/.test(x[i]) ) {
        c = "";
      } else if ( x[i-1] == " " || i == 0 || txt == "" || txt.slice(-1)==" ") {
        c = c.toUpperCase();
      } else {
        c = c.toLowerCase();
      }
      txt += c;
    }
    return txt;
  };
});