(window.webpackJsonpupcjmi=window.webpackJsonpupcjmi||[]).push([[3],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"h",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"a",(function(){return l}));var r="/",a="/contact/",c="/sign-in/",i="/sign-up/",o="/privacy-policy/",u="/terms-and-conditions/",s="/student/portal/",l="/company/portal/"},141:function(e,t,n){"use strict";n(70);var r=n(41),a=n(0),c=n.n(a),i=n(28),o=n(17),u=n(12),s=n(185);t.a=Object(i.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}))((function(e){return e.isAuthenticated?c.a.createElement(s.a,null):c.a.createElement(o.b,{to:u.e},c.a.createElement(r.a,{type:"primary",size:"large",icon:"login"},"Sign In"))}))},185:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(28),i=(n(70),n(41)),o=n(142),u=n(49),s=n(80),l=n(61),f=Object(u.g)(Object(c.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{signOut:function(t){return e(Object(l.e)(t))}}}))((function(e){var t=e.history,n=e.redirect;return a.a.createElement(o.GoogleLogout,{clientId:s.b||"",onLogoutSuccess:function(){},render:function(r){return a.a.createElement(i.a,{onClick:function(){var a=n?t.push:function(){};e.signOut(a),r.onClick()},icon:"logout",type:"link"},"Sign Out")}})}))),d=Object(u.g)(Object(c.b)((function(e){return{}}),(function(e){return{signOut:function(t){return e(Object(l.e)(t))}}}))((function(e){var t=e.signOut,n=e.history,r=e.redirect,c=void 0===r||r;return a.a.createElement(i.a,{onClick:function(){var e=c?n.push:function(){};t(e)},icon:"logout",type:"link"},"Sign Out")})));t.a=Object(c.b)((function(e){return{signedWith:e.auth.signedWith}}))((function(e){var t=e.signedWith,n=void 0!==t&&t,r=e.redirect,c=void 0===r||r;switch(n){case"G":return a.a.createElement(f,{redirect:c});case"E":case"U":default:return a.a.createElement(d,{redirect:c})}}))},206:function(e,t,n){e.exports=n.p+"static/media/jamia-logo.1b80d421.svg"},210:function(e,t,n){e.exports=n(353)},23:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r="SIGN_IN_INITIATED",a="SIGN_IN_SUCCESS",c="SIGN_OUT",i="SIGNING_IN_FAILED",o="CONNECTED_WITH_SERVER"},315:function(e,t){},34:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"i",(function(){return f})),n.d(t,"a",(function(){return d})),n.d(t,"j",(function(){return p})),n.d(t,"h",(function(){return m})),n.d(t,"g",(function(){return h}));n(289);var r=n(131),a=n(190),c=n.n(a),i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r.a[e]({message:t,description:n})},o=function(){return i("warning","Please, SignIn Again","We SignOut user after 24hr of login")},u=function(){return i("error","Please, SignIn Again","We are having error in getting your info")},s=function(e){return i("success","Welcome ".concat(e),"You successfully signed in.")},l=function(){return i("success","Thank you for giving your time.","You successfully signed out.")},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"An unknown error occurred during sign in";return i("error",e,"Create a new account.")},d=function(){return r.a.error({message:"Error connecting to server",description:"Try refreshing page. After refresh if problem persist clear data and cookies. If problem doesnt resolve mail to faisalmanzer11@gmail.com.",duration:1e3,placement:"bottomRight"})},p=function(e){return i("error","Email ".concat(e," is associated with another account."),"Try signing in or try forgetting password.")},m=function(){return i("success","Account created you successfull")},h=function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";i(e,t,c()(n.replace(/(?:\r\n|\r|\n)/g,"<br />")))}("error","Failed to create account",e)}},352:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),i=n.n(c),o=n(57),u=n(58),s=n(62),l=n(59),f=n(63),d=n(53),p=n(28),m=n(188),h=n(17),b=n(55),v=n(23);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={isAuthenticated:!1,inProgress:!1,signedWith:"U"},E=n(12);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={routes:[{path:E.c,title:"Welcome to University Placement Cell, Jamia Millia Islamia",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7),n.e(6)]).then(n.bind(null,622))}))},{path:E.b,title:"Contact US || UPC JMI",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,423))}))},{path:E.g,title:"Student Home || UPC JMI",screen:Object(r.lazy)((function(){return n.e(15).then(n.bind(null,625))}))},{path:E.a,title:"Company Home || UPC JMI",screen:Object(r.lazy)((function(){return n.e(14).then(n.bind(null,617))}))},{path:E.e,title:"Sign In to UPC Portal",screen:Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,618))}))},{path:E.f,title:"Create new student account || UPC JMI",screen:Object(r.lazy)((function(){return Promise.all([n.e(2),n.e(8),n.e(18)]).then(n.bind(null,623))}))},{path:E.h,title:"Terms and Conditions || UPC JMI",screen:Object(r.lazy)((function(){return n.e(19).then(n.bind(null,619))}))},{path:E.d,title:"Privacy policy || UPC JMI",screen:Object(r.lazy)((function(){return n.e(17).then(n.bind(null,620))}))}],connected:!1},P=Object(d.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,n=function(t){return O({},e,{},t)};switch(t.type){case v.d:return n({isAuthenticated:!0,user:t.user,signedWith:t.signedWith,inProgress:!1});case v.c:return O({},y,{inProgress:!0});case v.e:return y;case v.b:return n({inProgress:!1});default:return e}},navigator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n=function(t){return j({},e,{},t)};switch(t.type){case v.a:return n({connected:!0});default:return e}}}),x=n(49),S=n(92),C=(n(197),n(138)),I=(n(70),n(41)),U=function(){return a.a.createElement("div",{className:"full-page center-hv"},a.a.createElement(C.a,{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:a.a.createElement(h.b,{to:E.c},a.a.createElement(I.a,{type:"primary"},"Back Home"))}))},D=(n(134),n(81)),L=(n(135),n(65)),A=n(96),N=(n(104),n(9)),z=(n(269),n(130)),T=n(141),M=z.a.Item,W=function(e){var t=e.mode,n=void 0===t?"horizontal":t;return a.a.createElement("div",null,a.a.createElement("div",{className:"header-pill center-hv",style:{height:"100%"}},a.a.createElement(T.a,null)),a.a.createElement("div",{className:"header-pill"},a.a.createElement(z.a,{mode:n,style:{border:0}},a.a.createElement(M,{key:"contact"},a.a.createElement(h.b,{to:E.b},a.a.createElement(N.a,{type:"phone"}),"Contact Us")),a.a.createElement(M,{key:"appstore"},a.a.createElement(h.b,{to:E.g},a.a.createElement(N.a,{type:"appstore"}),"Placement Portal")),a.a.createElement(M,{key:"sign-up"},a.a.createElement(h.b,{to:E.f},a.a.createElement(N.a,{type:"user-add"}),"Create New Account")))))},J=(n(343),n(193)),_=(n(132),n(79)),G=_.a.Title,H=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n.state={visible:!1},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("hashchange",this.onClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this.onClose)}},{key:"render",value:function(){var e=Object(A.a)(!0,!0,!1),t=this.state.visible;return e?a.a.createElement("div",null,a.a.createElement("div",{className:"drawer-handel"},a.a.createElement(N.a,{type:"double-left",onClick:this.showDrawer})),a.a.createElement(J.a,{placement:"right",closable:!1,onClose:this.onClose,visible:t},a.a.createElement("div",{className:"center-hv"},a.a.createElement(h.b,{to:E.c},a.a.createElement(G,null,"UPC JMI"))),a.a.createElement(W,{mode:"vertical"}))):null}}]),t}(a.a.Component),F=n(206),R=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).handelScroll=function(){var e=n.state.prevScrollPos,t=window.pageYOffset,r=document,a=r.body,c=r.documentElement,i=Math.max(a.scrollHeight,a.offsetHeight,c.clientHeight,c.scrollHeight,c.offsetHeight),o=e>t||t<64||i-window.innerHeight-t<64;n.setState({prevScrollPos:t,visible:o})},n.state={prevScrollPos:window.pageYOffset,visible:!0},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handelScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handelScroll)}},{key:"render",value:function(){var e=this.state.visible;return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",{className:"".concat(e?"":"nav-up")},a.a.createElement(D.a,{style:{flex:1}},a.a.createElement(h.b,{to:E.c},a.a.createElement(L.a,{xs:24,md:6,xxl:4,className:"logo-container",style:{justifyContent:Object(A.a)("center","center",null)}},a.a.createElement("img",{src:F,alt:"University Placement Cell, Logo"}),"\xa0\xa0\xa0",a.a.createElement("div",{style:{color:"#000000",fontSize:"0.9rem"}},a.a.createElement("b",null,"University Placement Cell"),a.a.createElement("br",null),"Jamia Millia Islamia"))),a.a.createElement(L.a,{xs:0,md:18,xxl:20},a.a.createElement(W,{mode:"horizontal"})))),a.a.createElement(H,null))}}]),t}(r.Component),B=n(61),q=function(e){var t=e.title,n=e.screen;return Object(r.useEffect)((function(){document.title=t||"University Placement Cell, Jamia Millia Islamia"}),[t]),a.a.createElement(r.Suspense,{fallback:a.a.createElement(S.a,null)},a.a.createElement(n,null))},Y=n(39),V=n(40),$=_.a.Title,K=function(e){return a.a.createElement("footer",null,a.a.createElement(D.a,null,a.a.createElement(L.a,{xs:24,md:12},a.a.createElement($,{level:4},"External links"),a.a.createElement(Y.a,{href:V.h},"Placement cell on Jamia's officail site"),a.a.createElement(Y.a,{href:V.c},"Jamia Millia Islamia"),a.a.createElement(Y.a,{href:V.e},"Privacy policy"),a.a.createElement(Y.a,{href:V.g},"Terms and Condition")),a.a.createElement(L.a,{xs:24,md:12},a.a.createElement($,{level:4},"Application"),"This is site is an open source application licened under \xa0",a.a.createElement(Y.a,{href:V.d},"Apache License 2.0"),a.a.createElement(Y.a,{href:V.f},a.a.createElement(N.a,{type:"github"}),"\xa0 GitHub Repository"),a.a.createElement(Y.a,{href:V.a},"Report a Bug"),a.a.createElement(Y.a,{href:V.b},"Request feature"))),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("div",{className:"center-hv"},a.a.createElement($,{level:4},"\xa9 2019 University Placement Cell, Jamia Millia Islamia")))},Q=Object(p.b)((function(e){return{routes:e.navigator.routes}}),(function(e){return{checkUser:function(){return e(Object(B.a)())}}}))((function(e){var t=e.routes,n=e.checkUser;return Object(r.useEffect)((function(){n()}),[n]),a.a.createElement(r.Suspense,{fallback:a.a.createElement(S.a,null)},a.a.createElement(R,null),a.a.createElement("main",null,a.a.createElement(x.d,null,t.map((function(e,t){return a.a.createElement(x.b,{exact:void 0===e.exact||e.exact,path:e.path,component:function(){return a.a.createElement(q,{title:e.title,screen:e.screen})},key:t.toString()})})),a.a.createElement(x.b,{component:U}))),a.a.createElement(K,null))})),X=Object(d.d)(P,Object(d.a)(m.a)),Z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).componentDidMount=function(){window.addEventListener("resize",n.updateDimensions),window.addEventListener("hashchange",n.scrollTop)},n.componentWillUnmount=function(){window.removeEventListener("resize",n.updateDimensions),window.removeEventListener("hashchange",n.scrollTop)},n.updateDimensions=function(){n.setState({width:window.innerWidth})},n.scrollTop=function(){window.scrollTo(0,0)},n.state={width:window.innerWidth},n}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement(p.a,{store:X},a.a.createElement(h.a,null,a.a.createElement(Q,null)))}}]),t}(r.Component);n(352),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="APITokens",a="SignedType"},39:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.href,n=e.children,r=e.newLine,c=void 0===r||r;return a.a.createElement("span",null,a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},n),c?a.a.createElement("br",null):null)}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"h",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return s})),n.d(t,"e",(function(){return l}));var r="https://github.com/Faisal-Manzer/upcjmi-react-app/issues/new?assignees=alhaqhassan&labels=bug&template=bug_report.md&title=",a="https://github.com/Faisal-Manzer/upcjmi-react-app/issues/new?assignees=Faisal-Manzer&labels=enhancement&template=feature_request.md&title=",c="https://github.com/Faisal-Manzer/upcjmi-react-app",i="https://github.com/Faisal-Manzer/upcjmi-react-app/blob/master/LICENCE",o="https://www.jmi.ac.in/studyatjamia/cell/upc/introduction",u="https://jmi.ac.in",s="/#/terms-and-conditions/",l="/#/privacy-policy/"},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return v}));var r=n(55),a=n(15),c=n.n(a),i=n(33),o=n(102),u=n.n(o),s=n(37),l=n(38),f=n(34),d=n(80);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}u.a.defaults.baseURL=d.a,u.a.defaults.headers.get["Content-Type"]="application/x-www-urlencoded";var h=function(){var e=Object(i.a)(c.a.mark((function e(t){var n,r=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",new Promise((function(e,r){u()(t,n).then((function(t){return e(t.data)})).catch((function(e){return r(e.response)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){return new Promise(function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,a,i,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=s.reactLocalStorage.getObject(l.a)){e.next=3;break}return e.abrupt("return",n("No User found"));case 3:if(a="",i=new Date(1e3*r.expires),o=new Date,!(i>o)){e.next=10;break}a=r.tokens.access,e.next=23;break;case 10:return e.prev=10,e.next=13,h("auth/token/refresh/",{method:"post",data:{refresh:r.tokens.refresh}});case 13:u=e.sent,a=u.access,i=new Date(1e3*u.expires),s.reactLocalStorage.setObject(l.a,{tokens:m({},r.tokens,{access:a}),expires:i}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(10);try{"token_not_valid"===e.t0.data.code?Object(f.d)():Object(f.b)()}catch(c){}return e.abrupt("return",n("Error refreshing token"));case 23:return e.abrupt("return",t(a));case 24:case"end":return e.stop()}}),e,null,[[10,19]])})));return function(t,n){return e.apply(this,arguments)}}())},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(){var n=Object(i.a)(c.a.mark((function n(r,a){var i;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.t0=h,n.t1=e,n.t2=m,n.t3={},n.t4=t,n.t5="Bearer ",n.next=9,b();case 9:return n.t6=n.sent,n.t7=n.t5.concat.call(n.t5,n.t6),n.t8={Authorization:n.t7},n.t9={headers:n.t8},n.t10=(0,n.t2)(n.t3,n.t4,n.t9),n.next=16,(0,n.t0)(n.t1,n.t10);case 16:return i=n.sent,n.abrupt("return",r(i));case 20:return n.prev=20,n.t11=n.catch(0),n.abrupt("return",a(n.t11));case 23:case"end":return n.stop()}}),n,null,[[0,20]])})));return function(e,t){return n.apply(this,arguments)}}())}},61:function(e,t,n){"use strict";n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return y}));var r=n(15),a=n.n(r),c=n(33),i=n(37),o=n(76),u=n(23),s=n(38),l=n(34),f=n(12),d=function(e){},p=function(e){i.reactLocalStorage.setObject(s.a,{tokens:e,expires:e.expires})},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"U";return function(){var n=Object(c.a)(a.a.mark((function n(r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r({type:u.d,user:e,signedWith:t}),i.reactLocalStorage.set(s.b,t),Object(l.e)(e.name);case 3:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"U";return function(){var n=Object(c.a)(a.a.mark((function n(r,c){var i,o,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r({type:u.c}),n.next=4,e();case 4:i=n.sent,o=i.user,s=i.token,p(s),r({type:u.d,user:o,signedWith:t}),m(o,t)(r,c),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),r({type:u.b}),Object(l.i)(n.t0.data&&n.t0.data.detail||void 0);case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(e,t){return n.apply(this,arguments)}}()},b=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h((function(){return Object(o.d)(e,t)}),"E")(r,c);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},v=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r,c){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:h((function(){return Object(o.e)(e,t)}),"G")(r,c);case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},g=function(e){return function(t,n){switch(e.type){case"E":b(e.email,e.password)(t,n);break;case"G":v(e.id,e.token)(t,n);break;default:Object(l.c)("error","Unkown signing")}}},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!i.reactLocalStorage.get(s.a)){e.next=8;break}return e.next=4,Object(o.b)();case 4:r=e.sent,m(r,i.reactLocalStorage.get(s.b))(t,n),e.next=10;break;case 8:return e.next=10,Object(o.c)();case 10:t({type:u.a}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),Object(l.a)();case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}()},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;return function(t){i.reactLocalStorage.remove(s.a),t({type:u.e}),Object(l.f)(),e(f.c)}}},76:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var r=n(54),a=function(){return Object(r.a)("ping/")},c=function(e){return Object(r.a)("student/sign-up/",{method:"post",data:e})},i=function(e,t){return Object(r.a)("auth/sign-in/email/",{method:"post",data:{email:e,password:t}})},o=function(e,t){return Object(r.a)("auth/sign-in/google/",{method:"post",data:{id:e,token:t}})},u=function(){return Object(r.b)("auth/user/meta/")},s=function(e){return Object(r.a)("auth/user/exists/",{params:{email:e}})}},80:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c}));var r="619494214325-1vm9ip6isq1rn74f9ksa7tl26k1c2agg.apps.googleusercontent.com",a="6LcUrrgUAAAAALddS7fuPA7GG6jgTR_gpCkGwVD0",c="https://api.upcjmi.com"},92:function(e,t,n){"use strict";n(201);var r=n(149),a=n(0),c=n.n(a);t.a=function(){return c.a.createElement("div",{className:"loading-screen"},c.a.createElement(r.a,{size:"large",tip:"Loading..."}))}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=function(e){return e<576?"xs":e<768?"sm":e<992?"md":e<1200?"xl":"xxl"},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:void 0,o=r(window.innerWidth);switch(void 0===t&&(t=e),void 0===n&&(n=t),void 0===a&&(a=n),void 0===c&&(c=a),void 0===i&&(i=c),o){case"xs":return e;case"sm":return t;case"md":return n;case"lg":return a;case"xl":return c;case"xxl":return i;default:return 0}}}},[[210,4,5]]]);
//# sourceMappingURL=main.91b382a3.chunk.js.map