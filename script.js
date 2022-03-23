$(".progres").each(function(){
  
  var $bar = $(this).find(".bar");
  var $val = $(this).find("span");
  var perc = parseInt( $val.text(), 10);

  $({p:0}).animate({p:perc}, {
    duration: 3000,
    easing: "swing",
    step: function(p) {
      $bar.css({
        transform: "rotate("+ (45+(p*12.0)) +"deg)", // 100%=180° so: ° = % * 1.8
        // 45 is to add the needed rotation to have the green borders at the bottom
      });
      $val.text(p|0);
    }
  });
});

function updateClock(){
  var now = new Date();
  var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

    if(hou >= 12){
    pe = "PM";
    }
    if(hou == 0){
    hou = 12;
    }
    if(hou > 12){
    hou = hou - 12;
    }

    Number.prototype.pad = function(digits){
    for(var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dname], months[mo], dnum.pad(2), yr, hou.pad(2), min.pad(2), sec.pad(2), pe];
    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock(){
  updateClock();
  window.setInterval("updateClock()", 1);
}