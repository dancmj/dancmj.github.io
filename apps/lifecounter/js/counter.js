$(function() {
  var isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) || false;
  var p1Life = $('#PlayerOneLife');
  var p2Life = $('#PlayerTwoLife');
  $("body").on(isMobile ? 'touchend' : 'click',function(e) {
    switch(e.target.id){
        case("PlayerOneBtnPlus"):
          p1Life.text(parseInt(p1Life.text()) + (e.shiftKey ? 5 : 1));
          break;
        case("PlayerOneBtnMinus"):
          p1Life.text(parseInt(p1Life.text()) - (e.shiftKey ? 5 : 1));
          break;
        case("PlayerTwoBtnPlus"):
          p2Life.text(parseInt(p2Life.text()) + (e.shiftKey ? 5 : 1));
          break;
        case("PlayerTwoBtnMinus"):
          p2Life.text(parseInt(p2Life.text()) - (e.shiftKey ? 5 : 1));
          break;
      }
    });
})