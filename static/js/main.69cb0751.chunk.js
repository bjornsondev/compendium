(this.webpackJsonpcompendium=this.webpackJsonpcompendium||[]).push([[0],{56:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"warm",(function(){return W})),e.d(r,"cold",(function(){return X}));var c=e(1),o=e(0),a=e.n(o),i=e(17),u=e.n(i),p=e(13),s=e(2);var f=function(n){return Object(c.jsx)("h1",{children:"Home"})},d=e(5),l=e(4),b=e(31),j=e(14),x=e(26);var h=function(n){var t=n.children.split("").map((function(n){return n.charCodeAt()}));return t.map((function(e,r){return Object(c.jsx)(x.Spring,{from:{offset:Math.floor(100*Math.random()),display:"none"},to:{offset:0,display:"inline"},delay:n.duration/t.length*r,config:{duration:n.duration/t.length},children:function(n){return Object(c.jsx)("span",{style:n,children:String.fromCharCode(e+n.offset)})}},r)}))};function m(){var n=Object(d.a)(["\n  background-color: #000;\n  height: 100%;\n  width: 100%;\n  padding: 5px 10px;\n  border: none;\n  color: ",";\n  font-size: 18px;\n  transition: .3s;\n\n  clip-path: polygon(\n    0 9px, 9px 0, calc(100% - 9px) 0, 100% 9px,\n    100% calc(100% - 9px), calc(100% - 9px) 100%, 9px 100%, 0 calc(100% - 9px)\n  );\n\n  ::placeholder {\n    color: inherit;\n    opacity: .6;\n    font-size: 16px;\n  }\n\n  :focus {\n    outline: none;\n    background-color: #000000aa;\n    ::placeholder {\n      opacity: 0;\n    }\n  }\n"]);return m=function(){return n},n}function O(){var n=Object(d.a)(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 2px;\n\n  clip-path: polygon(\n    0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px,\n    100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px)\n  );\n  background-color: ",";\n"]);return O=function(){return n},n}function g(){var n=Object(d.a)(['\n  position: relative;\n  padding: 10px;\n  height: 70px;\n  ::before, ::after {\n    content: "";\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 10px;\n\n    clip-path: polygon(\n      0 100%, 10px 0, calc(100% - 10px) 0, 100% 100%, \n      calc(100% - 2.5px) 100%, calc(100% - 10.5px) 2px, 11px 2px, 2.5px 100%\n    );\n    background-image: linear-gradient(to right, transparent 50%, '," 50%);\n    background-size: 200% 100%;\n    background-position: 100% 0;\n    \n  } \n  ::after {\n    transform: scale(-1);\n    top: auto;\n    bottom: 0;\n  }\n"]);return g=function(){return n},n}var v=function(n){return Object(c.jsx)(w,Object(j.a)({},n))},y=l.c.div(g(),(function(n){return n.theme.warm})),k=l.c.div(O(),(function(n){return n.theme.cold})),w=l.c.input(m(),(function(n){return n.theme.cold}));function C(){var n=Object(d.a)(["\n    animation: "," 1.2s ease-in 1;\n"]);return C=function(){return n},n}function z(){var n=Object(d.a)(["\n  ::before, ::after {\n    animation: "," 1.2s ease-out 1;\n  }\n"]);return z=function(){return n},n}function A(){var n=Object(d.a)(["\n  from{\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n"]);return A=function(){return n},n}function I(){var n=Object(d.a)(["\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 100% 0;\n  }\n"]);return I=function(){return n},n}var S=function(n){var t=n.value,e=n.onValueChange;return Object(c.jsx)(M,{children:Object(c.jsx)(N,{children:Object(c.jsx)(v,{type:"email",placeholder:"E-mail",onChange:function(n){return e(n.target.value)},value:t})})})},E=Object(l.d)(I()),B=Object(l.d)(A()),M=Object(l.c)(y)(z(),E),N=Object(l.c)(k)(C(),B);function D(){var n=Object(d.a)(["\n  text-transform: uppercase;\n  font-size: 18px;\n  margin-bottom: 10px;\n  transition: .3s;\n  height: 30px;\n"]);return D=function(){return n},n}function F(){var n=Object(d.a)(["\n  position: absolute;\n  top: 30%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n\n  width: 600px;\n"]);return F=function(){return n},n}var H=function(n){return Object(c.jsxs)(J,{children:[Object(c.jsx)(P,{children:Object(c.jsx)(h,{duration:"1200",children:"Please identify your person"})}),Object(c.jsx)(S,Object(j.a)({},n))]})},J=l.c.div(F()),P=l.c.div(D());var V=function(n){var t=Object(o.useState)(""),e=Object(b.a)(t,2),r=e[0],a=e[1];return Object(c.jsx)(H,{value:r,onValueChange:function(n){a((function(t){return n}))}})};var Z=function(n){return Object(c.jsx)("div",{children:Object(c.jsx)(V,{})})};function q(){var n=Object(d.a)(["\n  display: block;\n"]);return q=function(){return n},n}var G=function(n){return Object(c.jsxs)(K,{children:[Object(c.jsx)(s.a,{to:"/auth/login"}),Object(c.jsx)(s.b,{path:"/auth/login",render:function(){return Object(c.jsx)(Z,{})}})]})},K=l.c.div(q());var L=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(s.a,{to:"/auth"}),Object(c.jsx)(s.b,{path:"/home",render:function(){return Object(c.jsx)(f,{})}}),Object(c.jsx)(s.b,{path:"/auth",render:function(){return Object(c.jsx)(G,{})}})]})},R=e(30),U={apiKey:"AIzaSyDa00XZpjC-xINlaIAWZG2PqEeBCNAo0xk",authDomain:"compendium-aeafb.firebaseapp.com",databaseURL:"https://compendium-aeafb.firebaseio.com",projectId:"compendium-aeafb",storageBucket:"compendium-aeafb.appspot.com",messagingSenderId:"222813943879",appId:"1:222813943879:web:a83671bf1d6b60c8c1d962"},W="#FF9340",X="#33CEC3",Q=e.p+"static/media/osca.e9adc3c9.woff2";function T(){var n=Object(d.a)(["\n  @font-face {\n    font-family: 'osc';\n    src: url(",");\n  }\n  *, *::after, *::before {\n    box-sizing: border-box;\n    font-family: 'osc', Arial, Helvetica, sans-serif;\n  }\n  body {\n    background-color: #000;\n    color: ",";\n  }\n"]);return T=function(){return n},n}var Y=Object(l.b)(T(),Q,(function(n){return n.theme.cold}));R.initializeApp(U),u.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(p.a,{children:Object(c.jsxs)(l.a,{theme:r,children:[Object(c.jsx)(Y,{}),Object(c.jsx)(L,{})]})})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.69cb0751.chunk.js.map