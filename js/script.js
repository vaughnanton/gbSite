$(document).ready(function() {
    block1();
    block2();
    block3();
    block4();
    block5();
    block6();
    block7();
    block8();

    setInterval(function(){
      block1();
    }, 6000);
    setInterval(function(){
      block2();
    }, 3900);
    setInterval(function(){
      block3();
    }, 3000);
    setInterval(function(){
      block4();
    }, 6000);
    setInterval(function(){
      block5();
    }, 6000);
    setInterval(function(){
      block6();
    }, 6500);
    setInterval(function(){
      block7();
    }, 4800);
    setInterval(function(){
      block8();
    }, 2800);

    function block1() {
      $('.img1').addClass('active');
    setTimeout(function() {
      $('.img1').removeClass('active');
    }, 1500);
    setTimeout(function() {
      $('.img2').addClass('active');
    }, 1500);
    setTimeout(function() {
      $('.img2').removeClass('active');
    }, 3000);
    setTimeout(function() {
      $('.img3').addClass('active');
    }, 3000);
    setTimeout(function() {
      $('.img3').removeClass('active');
    }, 4500);
    setTimeout(function() {
      $('.img4').addClass('active');
    }, 4500);
    setTimeout(function() {
      $('.img4').removeClass('active');
    }, 6000);
    }

    function block2() {
      $('.img5').addClass('active');
    setTimeout(function() {
      $('.img5').removeClass('active');
    }, 1300);
    setTimeout(function() {
      $('.img6').addClass('active');
    }, 1300);
    setTimeout(function() {
      $('.img6').removeClass('active');
    }, 2600);
    setTimeout(function() {
      $('.img7').addClass('active');
    }, 2600);
    setTimeout(function() {
      $('.img7').removeClass('active');
    }, 3900);
    }

    function block3() {
      $('.img8').addClass('active');
    setTimeout(function() {
      $('.img8').removeClass('active');
    }, 1500);
    setTimeout(function() {
      $('.img9').addClass('active');
    }, 1500);
    setTimeout(function() {
      $('.img9').removeClass('active');
    }, 3000);
    }

    function block4() {
      $('.img10').addClass('active');
    setTimeout(function() {
      $('.img10').removeClass('active');
    }, 1600);
    setTimeout(function() {
      $('.img11').addClass('active');
    }, 1600);
    setTimeout(function() {
      $('.img11').removeClass('active');
    }, 3200);
    setTimeout(function() {
      $('.img12').addClass('active');
    }, 3200);
    setTimeout(function() {
      $('.img12').removeClass('active');
    }, 4800);
    setTimeout(function() {
      $('.img13').addClass('active');
    }, 4800);
    setTimeout(function() {
      $('.img13').removeClass('active');
    }, 6400);
    }

    function block5() {
      $('.img14').addClass('active');
    setTimeout(function() {
      $('.img14').removeClass('active');
    }, 1500);
    setTimeout(function() {
      $('.img15').addClass('active');
    }, 1500);
    setTimeout(function() {
      $('.img15').removeClass('active');
    }, 3000);
    setTimeout(function() {
      $('.img16').addClass('active');
    }, 3000);
    setTimeout(function() {
      $('.img16').removeClass('active');
    }, 4500);
    setTimeout(function() {
      $('.img17').addClass('active');
    }, 4500);
    setTimeout(function() {
      $('.img17').removeClass('active');
    }, 6000);
    }

    function block6() {
      $('.img18').addClass('active');
    setTimeout(function() {
      $('.img18').removeClass('active');
    }, 1300);
    setTimeout(function() {
      $('.img19').addClass('active');
    }, 1300);
    setTimeout(function() {
      $('.img19').removeClass('active');
    }, 2600);
    setTimeout(function() {
      $('.img20').addClass('active');
    }, 2600);
    setTimeout(function() {
      $('.img20').removeClass('active');
    }, 3900);
    setTimeout(function() {
      $('.img21').addClass('active');
    }, 3900);
    setTimeout(function() {
      $('.img21').removeClass('active');
    }, 5200);
    setTimeout(function() {
      $('.img22').addClass('active');
    }, 5200);
    setTimeout(function() {
      $('.img22').removeClass('active');
    }, 6500);
    }

    function block7() {
      $('.img25').addClass('active');
    setTimeout(function() {
      $('.img25').removeClass('active');
    }, 1600);
    setTimeout(function() {
      $('.img26').addClass('active');
    }, 1600);
    setTimeout(function() {
      $('.img26').removeClass('active');
    }, 3200);
    setTimeout(function() {
      $('.img27').addClass('active');
    }, 3200);
    setTimeout(function() {
      $('.img27').removeClass('active');
    }, 4800);
    }

    function block8() {
      $('.img28').addClass('active');
    setTimeout(function() {
      $('.img28').removeClass('active');
    }, 1400);
    setTimeout(function() {
      $('.img29').addClass('active');
    }, 1400);
    setTimeout(function() {
      $('.img29').removeClass('active');
    }, 2800);
    }

});

$(".logo").on("click", function(){
  window.location.reload();
});

//email encode
$("a.mail").html($("a.mail").html().replace("*", "@").replace(/~/g, ".").split("").reverse().join(""));

$("a.mail").on("click", function(){
    var href = $(this).attr("href");
    $(this).attr("href", href.replace("dont-spam-me-bro", "gkbagdasaryan18"));
});

// overlay
function openNav() {
    document.getElementById("overlay").style.width = "100%";
}

function closeNav() {
    document.getElementById("overlay").style.width = "0%";
}

$('#contact, .burger').click(function() {
  openNav();
});

//scroll to top on refresh
window.onbeforeunload = function () {
        window.scrollTo(0,0);
}

//animate scroll to secondary page
$("#getstarted").click(function() {
    $("html, body").animate({
        scrollTop: $("#my-block-1").offset().top
    }, 1500);
});

//detect mobile safari ONLY

var isIphone = /(iPhone)/i.test(navigator.userAgent);

var isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);



if(isIphone && isSafari){
    console.log("Mobile Safari!");
    $('.link-wrapper').css("bottom", "135px");
} else {
    console.log("Not Mobile Safari...");
}


//typewriter for land
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


    window.sr = ScrollReveal({ reset: false });
    sr.reveal('.block-1', { duration: 500, rotate: {y: 65, x: 30, z: 30}, opacity: .7, scale: .6, easing: 'ease-in-out', mobile: true, useDelay: 'always'});
    sr.reveal('.block-3', { duration: 500, rotate: {y: 65, x: 30, z: 30}, opacity: .7, scale: .6, easing: 'ease-in-out', mobile: true, useDelay: 'always'});
    sr.reveal('.block-5', { duration: 500, rotate: {y: 65, x: 30, z: 30}, opacity: .7, scale: .6, easing: 'ease-in-out', mobile: true, useDelay: 'always'});
    sr.reveal('.block-7', { duration: 500, rotate: {y: 65, x: 30, z: 30}, opacity: .7, scale: .6, easing: 'ease-in-out', mobile: true, useDelay: 'always'});
    sr.reveal('.block-2', { duration: 500, rotate: {y: -65, x: -30, z: -30}, opacity: .7, scale: .6, easing: 'linear', mobile: true, useDelay: 'always'});
    sr.reveal('.block-4', { duration: 500, rotate: {y: -65, x: -30, z: -30}, opacity: .7, scale: .6, easing: 'linear', mobile: true, useDelay: 'always'});
    sr.reveal('.block-6', { duration: 500, rotate: {y: -65, x: -30, z: -30}, opacity: .7, scale: .6, easing: 'linear', mobile: true, useDelay: 'always'});
    sr.reveal('.block-8', { duration: 500, rotate: {y: -65, x: -30, z: -30}, opacity: .7, scale: .6, easing: 'linear', mobile: true, useDelay: 'always'});
