// slider
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  nextArrow: '<div class="prev"><img src="img/rig.svg" alt=""></div>',
  prevArrow: '<div class="next"><img src="img/lef.svg" alt=""></div>',
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
});
$('.testimonialsSlider').slick({
  // centerMode: true,
  centerPadding: '160px',
  slidesToShow: 4,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

// $('.lightbox').slickLightbox({
//   src: 'src',
//   itemSelector: '.item img'
// });
// $('.certification-lightbox').slickLightbox();
// menu
(function () {
    var a = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    !function (b, c) {
        var d, e, f, g;
        return e = function () {
            function c(c) {
                this.element = c, this._clickEvent = a(this._clickEvent, this), this.element = b(this.element), this.dropdown = this.element.parent().find(".dropdown-menu"), this.element.on("click", this._clickEvent)
            }

            return c.prototype._clickEvent = function (a) {
                return this.dropdown.hasClass("shown") || a.preventDefault(), this.dropdown.toggleClass("shown"), this.element.parent().toggleClass("active")
            }, c
        }(), f = function () {
            function d(c, d, e, f) {
                this.button = c, this.element = d, this.location = e, this.offcanvas = f, this._getFade = a(this._getFade, this), this._getCss = a(this._getCss, this), this._touchEnd = a(this._touchEnd, this), this._touchMove = a(this._touchMove, this), this._touchStart = a(this._touchStart, this), this.endThreshold = 130, this.startThreshold = this.element.hasClass("navbar-offcanvas-right") ? b("body").outerWidth() - 60 : 20, this.maxStartThreshold = this.element.hasClass("navbar-offcanvas-right") ? b("body").outerWidth() - 20 : 60, this.currentX = 0, this.fade = this.element.hasClass("navbar-offcanvas-fade") ? !0 : !1, b(document).on("touchstart", this._touchStart), b(document).on("touchmove", this._touchMove), b(document).on("touchend", this._touchEnd)
            }

            return d.prototype._touchStart = function (a) {
                return this.startX = a.originalEvent.touches[0].pageX, this.element.height(b(c).outerHeight())
            }, d.prototype._touchMove = function (a) {
                var c;
                if (b(a.target).parents(".navbar-offcanvas").length > 0) return !0;
                if (this.startX > this.startThreshold && this.startX < this.maxStartThreshold) {
                    if (a.preventDefault(), c = a.originalEvent.touches[0].pageX - this.startX, c = this.element.hasClass("navbar-offcanvas-right") ? -c : c, Math.abs(c) < this.element.outerWidth()) return this.element.css(this._getCss(c)), this.element.css(this._getFade(c))
                } else if (this.element.hasClass("in") && (a.preventDefault(), c = a.originalEvent.touches[0].pageX + (this.currentX - this.startX), c = this.element.hasClass("navbar-offcanvas-right") ? -c : c, Math.abs(c) < this.element.outerWidth())) return this.element.css(this._getCss(c)), this.element.css(this._getFade(c))
            }, d.prototype._touchEnd = function (a) {
                var c, d;
                return b(a.target).parents(".navbar-offcanvas").length > 0 ? !0 : (d = a.originalEvent.changedTouches[0].pageX, c = this.element.hasClass("navbar-offcanvas-right") ? Math.abs(d) > this.endThreshold + 50 : d < this.endThreshold + 50, this.element.hasClass("in") && c ? (this.currentX = 0, this.element.removeClass("in").css(this._clearCss()), this.button.removeClass("is-open")) : Math.abs(d - this.startX) > this.endThreshold && this.startX > this.startThreshold && this.startX < this.maxStartThreshold ? (this.currentX = this.element.hasClass("navbar-offcanvas-right") ? -this.element.outerWidth() : this.element.outerWidth(), this.element.toggleClass("in").css(this._clearCss()), this.button.toggleClass("is-open")) : this.element.css(this._clearCss()), this.offcanvas.bodyOverflow())
            }, d.prototype._getCss = function (a) {
                return a = this.element.hasClass("navbar-offcanvas-right") ? -a : a, {
                    "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-webkit-transition-duration": "0s",
                    "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-moz-transition": "0s",
                    "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                    "-o-transition": "0s",
                    transform: "translate3d(" + a + "px, 0px, 0px)",
                    transition: "0s"
                }
            }, d.prototype._getFade = function (a) {
                return this.fade ? {opacity: a / this.element.outerWidth()} : {}
            }, d.prototype._clearCss = function () {
                return {
                    "-webkit-transform": "",
                    "-webkit-transition-duration": "",
                    "-moz-transform": "",
                    "-moz-transition": "",
                    "-o-transform": "",
                    "-o-transition": "",
                    transform: "",
                    transition: "",
                    opacity: ""
                }
            }, d
        }(), c.Offcanvas = d = function () {
            function d(c) {
                var d, g;
                this.element = c, this.bodyOverflow = a(this.bodyOverflow, this), this._sendEventsAfter = a(this._sendEventsAfter, this), this._sendEventsBefore = a(this._sendEventsBefore, this), this._documentClicked = a(this._documentClicked, this), this._clicked = a(this._clicked, this), this._navbarHeight = a(this._navbarHeight, this), g = this.element.attr("data-target") ? this.element.attr("data-target") : !1, g ? (this.target = b(g), this.target.length && !this.target.hasClass("js-offcanvas-done") && (this.element.addClass("js-offcanvas-has-events"), this.location = this.target.hasClass("navbar-offcanvas-right") ? "right" : "left", this.target.addClass(transform ? "offcanvas-transform js-offcanvas-done" : "offcanvas-position js-offcanvas-done"), this.target.data("offcanvas", this), this.element.on("click", this._clicked), this.target.on("transitionend", function (a) {
                    return function () {
                        return a.target.is(":not(.in)") ? a.target.height("") : void 0
                    }
                }(this)), b(document).on("click", this._documentClicked), this.target.hasClass("navbar-offcanvas-touch") && (d = new f(this.element, this.target, this.location, this)), this.target.find(".dropdown-toggle").each(function () {
                    var a;
                    return a = new e(this)
                }), this.target.on("offcanvas.toggle", function (a) {
                    return function (b) {
                        return a._clicked(b)
                    }
                }(this)))) : console.warn("Offcanvas: `data-target` attribute must be present.")
            }

            return d.prototype._navbarHeight = function () {
                return this.target.is(".in") ? this.target.height(b(c).outerHeight()) : void 0
            }, d.prototype._clicked = function (a) {
                return a.preventDefault(), this._sendEventsBefore(), b(".navbar-offcanvas").not(this.target).removeClass("in"), this.target.toggleClass("in"), this.element.toggleClass("is-open"), this._navbarHeight(), this.bodyOverflow()
            }, d.prototype._documentClicked = function (a) {
                var c;
                return c = b(a.target), c.hasClass("offcanvas-toggle") || 0 !== c.parents(".offcanvas-toggle").length || 0 !== c.parents(".navbar-offcanvas").length || c.hasClass("navbar-offcanvas") || !this.target.hasClass("in") ? void 0 : (a.preventDefault(), this._sendEventsBefore(), this.target.removeClass("in"), this.element.removeClass("is-open"), this._navbarHeight(), this.bodyOverflow())
            }, d.prototype._sendEventsBefore = function () {
                return this.target.hasClass("in") ? this.target.trigger("show.bs.offcanvas") : this.target.trigger("hide.bs.offcanvas")
            }, d.prototype._sendEventsAfter = function () {
                return this.target.hasClass("in") ? this.target.trigger("shown.bs.offcanvas") : this.target.trigger("hidden.bs.offcanvas")
            }, d.prototype.bodyOverflow = function () {
                return this.target.is(".in") ? b("body").addClass("offcanvas-stop-scrolling") : b("body").removeClass("offcanvas-stop-scrolling"), this._sendEventsAfter()
            }, d
        }(), g = function (a) {
            return function () {
                var b, c, d, e;
                return c = document.createElement("div"), e = "translate3d(0px, 0px, 0px)", d = /translate3d\(0px, 0px, 0px\)/g, c.style.cssText = "-webkit-transform: " + e + "; -moz-transform: " + e + "; -o-transform: " + e + "; transform: " + e, b = c.style.cssText.match(d), a.transform = null != b.length
            }
        }(this), b(function () {
            return g(), b('[data-toggle="offcanvas"]').each(function () {
                var a;
                return a = new d(b(this))
            }), b(c).on("resize", function () {
                return b(".navbar-offcanvas.in").each(function () {
                    return b(this).height("").removeClass("in")
                })
            }), b(".offcanvas-toggle").each(function () {
                return b(this).on("click", function (a) {
                    var c, d;
                    return !b(this).hasClass("js-offcanvas-has-events") && (d = b(this).attr("data-target"), c = b(d)) ? (c.height(""), c.removeClass("in"), b("body").css({
                        overflow: "",
                        position: ""
                    })) : void 0
                })
            })
        })
    }(window.jQuery, window)
}).call(this);

// $(document).ready(function(){
//   $("#menu").on("click","a:not(.color_red)", function (event) {
//     event.preventDefault();
//     var id  = $(this).attr('href'),
//         top = $(id).offset().top;
//     $('body,html').animate({scrollTop: top}, 900);
//   });
// });
// $(function(){ 
//   if ($(window).width() < 768){
//     var navMain = $(".navbar-offcanvas"); avoid dependency on #id
//     "a:not([data-toggle])" - to avoid issues caused
//     when you have dropdown inside navbar
//     navMain.on("click", "a:not([data-toggle])",  null, function () {
//         navMain.collapse('toggle');
//         $(".navbar-toggle").toggleClass('is-open');
//         $("body").toggleClass('offcanvas-stop-scrolling');
//     })
//   }
//  });

/*login*/
// var openTabb = document.querySelector('#openTabb');
			var tabForLogin = document.querySelector('.tabForLogin');
			var login = document.querySelector('.login');
			var loginButton = document.querySelector('#loginButton');
			var signupButton = document.querySelector('#signupButton');
			function addActive(){
			login.style.display = "block";
			}
			// window.onload = tabForLogin.style.display = "none";
			window.onload=addActive();
			function openThisTab(){
			tabForLogin.style.display = "flex";
			openTabb.style.display = "none";
			}
			function closeThisTab(){
			tabForLogin.style.display = "none";
			openTabb.style.display = "block";
			}
			function openAct(evt, act) {
			var i, tabcontent, tablinks;
			tabcontent = document.getElementsByClassName("tabcontent");
			for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
			}
			tablinks = document.getElementsByClassName("tablinks");
			for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
			}
			document.getElementById(act).style.display = "block";
			evt.currentTarget.className += " active";
            }
     /*episode*/       
    var currentFile = window.location.href.split('/').pop();
    var logo = document.querySelector('.navbar-brand img');
    var episodeLis = document.querySelectorAll('.navbar-nav li a'), i, len;
    var ava = document.querySelector('.episodeOtst a img');
    var shopButton = document.querySelector('.episodeNavbar-nav li a.shopButton');
    var episodeInput = document.querySelector('#episodeCode');
    if(currentFile == "episode.html"){
    logo.src = "img/whiteLogo.png";
    for (i = 0, len = episodeLis.length; i < len; i++) {
    episodeLis[i].style.color = '#fff';
    }
    ava.style.border = "2px solid rgb(247, 189, 41) !important";
    shopButton.style.border = "2px solid rgb(247, 189, 41) !important";
    }
    // для инпута кода
    for (var i in ['input', 'change', 'blur', 'keyup']) {
    episodeCode.addEventListener('input', formatCardCode, false);
    }
    function formatCardCode() {
    var episodeCode = this.value.replace(/[^\\w]/g, '').substring(0,16);
    episodeCode = episodeCode != '' ? episodeCode.match(/.{1,4}/g).join(' ') : '';
    this.value = episodeCode;
    episodeForm.number.value=this.value.split(" ").join("");
    }
    // для копирования инпута кода
    function copyText() {
    episodeInput.select();
    document.execCommand("copy");
    }