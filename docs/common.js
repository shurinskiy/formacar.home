/*! For license information please see common.js.LICENSE.txt */
(()=>{var t={804:()=>{},959:()=>{var t;(t=Element.prototype).matches=t.matches||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector,t.closest=t.closest||function(t){return this?this.matches(t)?this:this.parentElement?this.parentElement.closest(t):null:null},function(t){var e=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;t.matches=t.matchesSelector=e||function(t){var e=document.querySelectorAll(t),n=this;return Array.prototype.some.call(e,(function(t){return t===n}))}}(Element.prototype)},914:()=>{!function(t,e){"use strict";"function"!=typeof t.CustomEvent&&(t.CustomEvent=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var r=e.createEvent("CustomEvent");return r.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),r},t.CustomEvent.prototype=t.Event.prototype),e.addEventListener("touchstart",(function(t){"true"!==t.target.getAttribute("data-swipe-ignore")&&(c=t.target,s=Date.now(),n=t.touches[0].clientX,r=t.touches[0].clientY,a=0,o=0,l=t.touches.length)}),!1),e.addEventListener("touchmove",(function(t){if(n&&r){var e=t.touches[0].clientX,s=t.touches[0].clientY;a=n-e,o=r-s}}),!1),e.addEventListener("touchend",(function(t){if(c===t.target){var u=parseInt(i(c,"data-swipe-threshold","20"),10),h=i(c,"data-swipe-unit","px"),d=parseInt(i(c,"data-swipe-timeout","500"),10),p=Date.now()-s,m="",v=t.changedTouches||t.touches||[];if("vh"===h&&(u=Math.round(u/100*e.documentElement.clientHeight)),"vw"===h&&(u=Math.round(u/100*e.documentElement.clientWidth)),Math.abs(a)>Math.abs(o)?Math.abs(a)>u&&p<d&&(m=a>0?"swiped-left":"swiped-right"):Math.abs(o)>u&&p<d&&(m=o>0?"swiped-up":"swiped-down"),""!==m){var b={dir:m.replace(/swiped-/,""),touchType:(v[0]||{}).touchType||"direct",fingers:l,xStart:parseInt(n,10),xEnd:parseInt((v[0]||{}).clientX||-1,10),yStart:parseInt(r,10),yEnd:parseInt((v[0]||{}).clientY||-1,10)};c.dispatchEvent(new CustomEvent("swiped",{bubbles:!0,cancelable:!0,detail:b})),c.dispatchEvent(new CustomEvent(m,{bubbles:!0,cancelable:!0,detail:b}))}n=null,r=null,s=null}}),!1);var n=null,r=null,a=null,o=null,s=null,c=null,l=0;function i(t,n,r){for(;t&&t!==e.documentElement;){var a=t.getAttribute(n);if(a)return a;t=t.parentNode}return r}}(window,document)}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}(()=>{"use strict";n(959),n(804),n(914)})()})();