$(function() {
        $("body").click(function(e) {
          switch(e.target.id){
            case("PlayerOneBtnPlus"):
              e.shiftKey ? document.getElementById("PlayerOneLife").innerHTML = parseInt(document.getElementById("PlayerOneLife").innerHTML) + 5 : document.getElementById("PlayerOneLife").innerHTML++;
              break;
            case("PlayerOneBtnMinus"):
              e.shiftKey ? document.getElementById("PlayerOneLife").innerHTML = parseInt(document.getElementById("PlayerOneLife").innerHTML) - 5 : document.getElementById("PlayerOneLife").innerHTML--;
              break;
            case("PlayerTwoBtnPlus"):
              e.shiftKey ? document.getElementById("PlayerTwoLife").innerHTML = parseInt(document.getElementById("PlayerTwoLife").innerHTML) + 5 : document.getElementById("PlayerTwoLife").innerHTML++;
              break;
            case("PlayerTwoBtnMinus"):
              e.shiftKey ? document.getElementById("PlayerTwoLife").innerHTML = parseInt(document.getElementById("PlayerTwoLife").innerHTML) - 5 : document.getElementById("PlayerTwoLife").innerHTML--;
              break;
          }
    });
})