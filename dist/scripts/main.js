"use strict";$(document).ready(function(){var e=$("#header-pinned").outerHeight();$("div.title-content").css("margin-top",e+60);var t=window.location.hash,o=t+"-info",a=t+"-boxes";$(t+"-section").collapse("toggle"),""!=window.location.hash&&($(a).children().children().addClass("active-click"),$(o).toggleClass("active-click"),$(o+" > span").addClass("rotate-arrow-to-up")),function(e){var t={},o=e.indexOf("?"),a=e.substr(o+1).split("&"),i=a.length-1;if(-1!==o||-1!==e.indexOf("="))for(;0<=i;i--){var r=a[i].split("=");t[unescape(r[0])]=r.hasOwnProperty(1)?unescape(r[1]):null}return t}(window.location.search).hasOwnProperty("print")&&$("body").addClass("print");var i=4.534952263311797*$("#form-illo > svg").width();function r(e){var t=e+"-info";$(e+"-boxes"+"> a > rect").toggleClass("active-hover"),$("div.card-header").removeClass("active-hover"),$(t).addClass("active-hover")}function n(t){var e=t+"-boxes",o=t+"-info",a=t+"-section",i=$(event.currentTarget).hasClass("btn"),r=$(a).hasClass("show");i||$(t+"-section").collapse("toggle"),$("div.card-header").removeClass("active-click"),$(o).addClass("active-click"),$("div.card-header > span").removeClass("rotate-arrow-to-up"),$("g.form-link > a > rect").removeClass("active-click"),r?($("div.card-header").removeClass("active-click"),history.pushState("",document.title,window.location.pathname+window.location.search)):($(e).children().children().addClass("active-click"),$(o+" > span").addClass("rotate-arrow-to-up"),history.pushState("","",t)),$(a).on("shown.bs.collapse",function(){var e=document.querySelector(t).offsetTop;smoothScrollTo(0,e,500)})}$("#form-illo").height(i),$(window).resize(function(){var e=4.534952263311797*$("#form-illo > svg").width();$("#form-illo").height(e)}),window.smoothScrollTo=function(e,t,a){var i=window.scrollX||window.pageXOffset,r=window.scrollY||window.pageYOffset,n=e-i,s=t-r,c=(new Date).getTime(),l=function(e,t,o,a){return(e/=a/2)<1?o/2*e*e*e*e+t:-o/2*((e-=2)*e*e*e-2)+t},d=window.setInterval(function(){var e=(new Date).getTime()-c,t=l(e,i,n,a),o=l(e,r,s,a);a<=e&&window.clearInterval(d),window.scrollTo(t,o)},1e3/60)},$(".card-header").mouseenter(function(){r("#"+this.getAttribute("data-box").replace("-boxes",""))}),$(".card-header").mouseleave(function(){r("#"+this.getAttribute("data-box").replace("-boxes","")),$(this).removeClass("active-hover")}),$("g.form-link").mouseenter(function(){r("#"+$(this).attr("id").replace("-boxes",""))}),$("g.form-link").mouseleave(function(){var e="#"+$(this).attr("id").replace("-boxes",""),t=e+"-info";r(e),$(t).removeClass("active-hover")}),$(".card-header").on("click",function(e){e.preventDefault(),n(this.getAttribute("data-target").replace("-section",""))}),$(".form-link").on("click",function(e){e.preventDefault(),n("#"+this.getAttribute("data-target").replace("-section",""))})});