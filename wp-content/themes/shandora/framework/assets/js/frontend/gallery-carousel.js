+function(t){"use strict";var e=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},e.prototype.to=function(e){var i=this,s=this.getActiveIndex();return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid",function(){i.to(e)}):s==e?this.pause().cycle():this.slide(e>s?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(e,i){var s=this.$element.find(".item.active"),n=i||s[e](),o=this.interval,a="next"==e?"left":"right",r="next"==e?"first":"last",l=this;if(!n.length){if(!this.options.wrap)return;n=this.$element.find(".item")[r]()}this.sliding=!0,o&&this.pause();var d=t.Event("slide.bs.carousel",{relatedTarget:n[0],direction:a});if(!n.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(d),d.isDefaultPrevented())return;n.addClass(e),n[0].offsetWidth,s.addClass(a),n.addClass(a),s.one(t.support.transition.end,function(){n.removeClass([e,a].join(" ")).addClass("active"),s.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(d),d.isDefaultPrevented())return;s.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return o&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=function(i){return this.each(function(){var s=t(this),n=s.data("bs.carousel"),o=t.extend({},e.DEFAULTS,s.data(),"object"==typeof i&&i),a="string"==typeof i?i:o.slide;n||s.data("bs.carousel",n=new e(this,o)),"number"==typeof i?n.to(i):a?n[a]():o.interval&&n.pause().cycle()})},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var i,s=t(this),n=t(s.attr("data-target")||(i=s.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),o=t.extend({},n.data(),s.data()),a=s.attr("data-slide-to");a&&(o.interval=!1),n.carousel(o),(a=s.attr("data-slide-to"))&&n.data("bs.carousel").to(a),e.preventDefault()}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);e.carousel(e.data())})})}(window.jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]}}t.fn.emulateTransitionEnd=function(e){var i=!1,s=this;t(this).one(t.support.transition.end,function(){i=!0});var n=function(){i||t(s).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e()})}(window.jQuery);