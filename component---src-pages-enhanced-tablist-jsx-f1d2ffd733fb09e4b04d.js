(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{696:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0),a=n(699),d=n(160);n(6);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}var c=function(e){var t=e.items,n=void 0===t?[]:t,a=Object(o.useState)(!1),d=a[0],c=a[1];return Object(o.useEffect)(function(){c(!0)},[]),Object(i.d)("ul",d&&{role:"tablist"},n.map(function(e){return Object(i.d)("li",s({key:e.id},d&&{role:"tab"}),e.label)}))};t.default=function(){return Object(i.d)(a.a,null,Object(i.d)(d.a,{title:"Progressive Enhancement demos",keywords:["javascript","accessibility","react"]}),Object(i.d)("div",null,Object(i.d)("h2",null,"Progressive Enhancement Demo"),Object(i.d)("p",null,"This widget outputs an unordered list in HTML at build time, with ARIA role enhancements when JavaScript loads."),Object(i.d)("p",null,"To test this demo: run ",Object(i.d)("code",null,"gatsby build && gatsby serve")," and turn off JavaScript in your browser"),Object(i.d)("p",null,Object(i.d)("strong",null,"[",Object(i.d)("a",{href:"https://github.com/marcysutton/js-a11y-workshop/blob/master/src/components/better/enhancing-list.js"},"component source"),"]")),Object(i.d)(c,{items:[{id:0,label:"tab 1"},{id:1,label:"tab 2"}]})))}},697:function(e){e.exports={data:{site:{siteMetadata:{title:"Accessibility in JavaScript Applications"}}}}},698:function(e,t,n){!function(){"use strict";function e(e){var t=!0,n=!1,i=null,o={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function d(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function s(e){t=!1}function c(){document.addEventListener("mousemove",l),document.addEventListener("mousedown",l),document.addEventListener("mouseup",l),document.addEventListener("pointermove",l),document.addEventListener("pointerdown",l),document.addEventListener("pointerup",l),document.addEventListener("touchmove",l),document.addEventListener("touchstart",l),document.addEventListener("touchend",l)}function l(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",l),document.removeEventListener("mousedown",l),document.removeEventListener("mouseup",l),document.removeEventListener("pointermove",l),document.removeEventListener("pointerdown",l),document.removeEventListener("pointerup",l),document.removeEventListener("touchmove",l),document.removeEventListener("touchstart",l),document.removeEventListener("touchend",l))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(a(e.activeElement)&&d(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",s,!0),document.addEventListener("pointerdown",s,!0),document.addEventListener("touchstart",s,!0),document.addEventListener("visibilitychange",function(e){"hidden"==document.visibilityState&&(n&&(t=!0),c())},!0),c(),e.addEventListener("focus",function(e){var n,i,s;a(e.target)&&((t||(n=e.target,i=n.type,"INPUT"==(s=n.tagName)&&o[i]&&!n.readOnly||"TEXTAREA"==s&&!n.readOnly||n.isContentEditable))&&d(e.target))},!0),e.addEventListener("blur",function(e){var t;a(e.target)&&((e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(i),i=window.setTimeout(function(){n=!1,window.clearTimeout(i)},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added"))))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&document.documentElement.classList.add("js-focus-visible")}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(n){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},699:function(e,t,n){"use strict";var i=n(1),o=n(697),a=(n(0),n(72)),d=function(e){var t=e.siteTitle;return Object(i.d)("header",{className:"globalHeader"},Object(i.d)("ul",{className:"skip-link"},Object(i.d)("li",null,Object(i.d)("a",{href:"#main"},"Skip to main"))),Object(i.d)("h1",null,Object(i.d)(a.Link,{to:"/"},t)))};d.defaultProps={siteTitle:""};var s=d,c=n(686),l=n.n(c),u=function(){return Object(i.d)("nav",{className:"nav "+l.a.nav},Object(i.d)("h2",{className:"visually-hidden"},"Navigation"),Object(i.d)("ul",null,Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/"},"App Home")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/slides"},"Slide deck")),Object(i.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(i.d)("h3",{className:"navHeading "+l.a.navHeading},"Demos"),Object(i.d)("ul",null,Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/dropdown"},"Dropdown")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/async-form"},"Async Form")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/layout"},"Layout")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/animation"},"Animation")),Object(i.d)("li",null,Object(i.d)(a.Link,{to:"/enhanced-tablist"},"Enhanced Tablist")))),Object(i.d)("li",{className:"navItemGroup "+l.a.navItemGroup+" "},Object(i.d)("h3",{className:"navHeading "+l.a.navHeading},"Concepts"),Object(i.d)("ul",null,Object(i.d)("li",null,"Focus management"),Object(i.d)("li",null,"Announcements"),Object(i.d)("li",null,"Semantic HTML"),Object(i.d)("li",null,"Unobtrusive motion"),Object(i.d)("li",null,"Progressive enhancement")))))};n(687),n(698),t.a=function(e){var t=e.children,n=o.data;return Object(i.d)("div",{className:"js-workshop-app"},Object(i.d)(s,{siteTitle:n.site.siteMetadata.title}),Object(i.d)(u,null),Object(i.d)("main",{className:"app",id:"main",tabIndex:"-1"},t))}}}]);
//# sourceMappingURL=component---src-pages-enhanced-tablist-jsx-f1d2ffd733fb09e4b04d.js.map