$(function() {
  var isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) || false;
  var p1Life = document.getElementById("PlayerOneLife");
  var p2Life = document.getElementById("PlayerTwoLife");
  $("body").on(isMobile ? 'touchend' : 'click',function(e) {
    switch(e.target.id){
        case("PlayerOneBtnPlus"):
          p1Life.innerHTML = parseInt(p1Life.innerHTML) + (e.shiftKey ? 5 : 1);
          break;
        case("PlayerOneBtnMinus"):
          p1Life.innerHTML = parseInt(p1Life.innerHTML) - (e.shiftKey ? 5 : 1);
          break;
        case("PlayerTwoBtnPlus"):
          p2Life.innerHTML = parseInt(p2Life.innerHTML) + (e.shiftKey ? 5 : 1);
          break;
        case("PlayerTwoBtnMinus"):
          p2Life.innerHTML = parseInt(p2Life.innerHTML) - (e.shiftKey ? 5 : 1);
          break;
      }
    });
})