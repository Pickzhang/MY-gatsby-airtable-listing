(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{3346:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("q1tI"),r=a("Jv69");t.mockMediaQueryList={media:"",matches:!1,onchange:r.noop,addListener:r.noop,removeListener:r.noop,addEventListener:r.noop,removeEventListener:r.noop,dispatchEvent:function(e){return!0}};var l=function(e){return function(a,l){void 0===l&&(l=!1);var o=n.useState(l),i=o[0],c=o[1],s=r.queryObjectToString(a);return e((function(){var e=!0,a="undefined"==typeof window?t.mockMediaQueryList:window.matchMedia(s),n=function(){e&&c(Boolean(a.matches))};return a.addListener(n),c(a.matches),function(){e=!1,a.removeListener(n)}}),[s]),i}};t.useMedia=l(n.useEffect),t.useMediaLayout=l(n.useLayoutEffect),t.default=t.useMedia},"8FPV":function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("q1tI"),r=a.n(n),l=a("v8IA"),o=(a("1LhQ"),a("8Lv4"),a("Wbzz")),i=a("Kvkj"),c=a("krAY"),s=a.n(c);function u(){var e,t,a,r,l,o=(e="dark-mode-enabled",a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),r=a[0],l=a[1],[r,function(t){try{var a=t instanceof Function?t(r):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]),i=o[0],c=o[1],u=s()("(prefers-color-scheme: dark)"),d=void 0!==i?i:u;return Object(n.useEffect)((function(){var e=window.document.body;d?e.classList.add("dark"):e.classList.remove("dark")}),[d]),[d,c]}var d=function(e){var t=e.children,a=u(),n=a[0],l=a[1];return r.a.createElement("div",{className:"bg-gray-100 dark:bg-gray-900"},r.a.createElement("header",{className:"bg-white dark:bg-transparent py-6"},r.a.createElement("div",{className:"container text-center"},r.a.createElement("div",{className:"relative"},r.a.createElement(o.Link,{to:"/",className:"inline-block"},r.a.createElement("img",{alt:"Logo",src:"/logo.svg"})),r.a.createElement("div",{className:"absolute top-0 right-0"},r.a.createElement(i.c,{onChange:l,checked:n}))))),t,r.a.createElement("div",{className:"bg-white dark:bg-transparent border-t border-b border-transparent py-8 lg:py-16 mt-8"},r.a.createElement("div",{className:"container"},r.a.createElement(i.g,null))),r.a.createElement(i.e,null))},m=a("ma3e"),v=function(e){var t=e.children,a=e.closeTo,i=e.navigation,c=void 0===i?{}:i,s=c.current,u=void 0===s?-1:s,d=c.items,v=void 0===d?[]:d,f=v[u-1]?v[u-1]:null,b=v[u+1]?v[u+1]:null,g=function(){Object(o.navigate)(a,{state:{noScroll:!0}})},h=function(e){switch(e.keyCode){case 37:f&&Object(o.navigate)(f,{state:{navigation:{current:u-1,items:v},modal:!0}});break;case 39:b&&Object(o.navigate)(b,{state:{navigation:{current:u+1,items:v},modal:!0}});break;case 27:g()}};return Object(n.useEffect)((function(){return window.addEventListener("keydown",h),function(){window.removeEventListener("keydown",h)}})),r.a.createElement("div",{className:"flex relative h-screen"},r.a.createElement("div",{className:"flex flex-wrap items-end md:items-center justify-center mx-auto w-full max-w-screen-xl"},r.a.createElement("div",{className:"order-3 md:order-first pb-2 w-8 mx-2 md:mx-4"},f&&r.a.createElement(l.Link,{asModal:!0,className:"inline-block w-10 h-10 px-2 text-white dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-200",state:{navigation:{current:u-1,items:v}},to:f},r.a.createElement(m.a,{className:"w-full h-full fill-current transition-colors duration-200"}))),r.a.createElement("div",{className:"w-full mt-12 md:mt-0 mx-3 md:mx-0 md:flex-1 bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden"},t),r.a.createElement("div",{className:"order-last pb-2 w-8 mx-2 md:mx-4"},b&&r.a.createElement(l.Link,{asModal:!0,className:"inline-block w-10 h-10 px-2 text-white dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-200",state:{navigation:{current:u+1,items:v}},to:b},r.a.createElement(m.b,{className:"w-full h-full fill-current transition-colors duration-200"})))),r.a.createElement("button",{className:"absolute top-0 right-0 m-3 lg:m-6 focus:outline-none",onClick:g},r.a.createElement(m.f,{className:"w-8 h-8 fill-current text-white dark:text-blue-300 hover:text-blue-400 dark:hover:text-blue-200 transition-colors duration-200"})))},f=function(e){var t=e.children,a=e.navigation;return r.a.createElement(l.ModalRoutingContext.Consumer,null,(function(e){var n=e.modal,l=e.closeTo;return n?r.a.createElement(v,{closeTo:l,navigation:a},t):r.a.createElement(d,null,t)}))}},"8meJ":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("nKC+");t.default=function(e){return"string"==typeof e?e:Object.entries(e).map((function(e){var t=e[0],a=e[1],r=n.default(t),l=a;return"boolean"==typeof l?l?r:"not "+r:("number"==typeof l&&/[height|width]$/.test(r)&&(l+="px"),"("+r+": "+l+")")})).join(" and ")}},Jv69:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("nKC+");t.camelToHyphen=n.default;var r=a("8meJ");t.queryObjectToString=r.default;var l=a("ZQ31");t.noop=l.default},ZQ31:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){}},krAY:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("3346");t.default=n.default,t.useMedia=n.useMedia,t.useMediaLayout=n.useMediaLayout},"nKC+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},voWF:function(e,t,a){"use strict";a.r(t);var n=a("9eSz"),r=a.n(n),l=a("q1tI"),o=a.n(l),i=a("Kvkj"),c=a("v8IA");var s=a("8FPV");t.default=function(e){var t=e.data,a=e.location,n=t.item.data,l=n.country,u=n.description,d=n.image.localFiles[0],m=n.name,v=n.summary,f=n.tags,b=n.url,g=a.state?a.state.navigation:null,h=function(){var e=o.a.useContext(c.ModalRoutingContext);if(void 0===e)throw new Error("useModal must be used within an ModalRoutingContext.Provider");return e}().modal;return o.a.createElement(s.a,{navigation:g},o.a.createElement(i.h,{title:m,description:v,image:d.url}),o.a.createElement("article",{className:h&&"max-h-80vh md:max-h-90vh overflow-auto"},o.a.createElement("div",{className:h?"p-4 lg:p-8":"container py-8"},o.a.createElement("h1",{className:"text-2xl lg:text-3xl text-blue-500 dark:text-blue-400 font-bold leading-tight"},m),o.a.createElement("p",{className:"text-base lg:text-lg text-blue-800 dark:text-blue-500 font-medium mb-4"},v),o.a.createElement("div",{className:"flex flex-wrap"},o.a.createElement("div",{className:"w-full pb-4 lg:w-3/5 lg:pr-4 lg:pb-0"},o.a.createElement(r.a,{fluid:d.childImageSharp.fluid,alt:m})),o.a.createElement("div",{className:"w-full lg:w-2/5 lg:pl-4"},o.a.createElement(i.d,{label:"Country",value:l}),o.a.createElement(i.d,{label:"What to see?",value:f}),o.a.createElement(i.d,{label:"More info",value:b}),o.a.createElement("p",{className:"mt-4 whitespace-pre-line text-sm lg:text-base leading-normal text-blue-900 dark:text-blue-600"},u))))))}}}]);
//# sourceMappingURL=component---src-templates-single-item-jsx-60000451d968f5a22d8d.js.map