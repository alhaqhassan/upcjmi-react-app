(window.webpackJsonpupcjmi=window.webpackJsonpupcjmi||[]).push([[20],{493:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(509);t.a=function(e){var t=e.description,n=e.title;return r.a.createElement(o.Helmet,{title:n,meta:[{name:"description",content:t},{property:"og:title",content:n},{property:"og:description",content:t},{property:"og:type",content:"website"}]})}},494:function(e,t,n){"use strict";n(25),n(502)},498:function(e,t,n){"use strict";var a=n(0),r=n(3),o=n.n(r),c=n(87),l=n(13),i=n(79),s=n(8);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){var t,n=e.child,r=e.bordered,c=e.colon,l=e.type,i=e.layout,s=n.props,m=s.prefixCls,p=s.label,f=s.className,d=s.children,b=s.span,y=void 0===b?1:b,E={className:o()("".concat(m,"-item-label"),f,(t={},u(t,"".concat(m,"-item-colon"),c),u(t,"".concat(m,"-item-no-label"),!p),t)),key:"label"};return"vertical"===i&&(E.colSpan=2*y-1),r?"label"===l?a.createElement("th",E,p):a.createElement("td",{className:o()("".concat(m,"-item-content"),f),key:"content",colSpan:2*y-1},d):"vertical"===i?"content"===l?a.createElement("td",{colSpan:y,className:o()("".concat(m,"-item"),f)},a.createElement("span",{className:"".concat(m,"-item-content"),key:"content"},d)):a.createElement("td",{colSpan:y,className:o()("".concat(m,"-item"),f)},a.createElement("span",{className:o()("".concat(m,"-item-label"),u({},"".concat(m,"-item-colon"),c)),key:"label"},p)):a.createElement("td",{colSpan:y,className:o()("".concat(m,"-item"),f)},a.createElement("span",E,p),a.createElement("span",{className:"".concat(m,"-item-content"),key:"content"},d))};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return!t||"object"!==f(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=b(this,y(t).apply(this,arguments))).state={screens:{}},e}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props.column;this.token=i.a.subscribe((function(n){"object"===f(t)&&e.setState({screens:n})}))}},{key:"componentWillUnmount",value:function(){i.a.unsubscribe(this.token)}},{key:"getColumn",value:function(){var e=this.props.column;if("object"===f(e))for(var t=0;t<i.b.length;t++){var n=i.b[t];if(this.state.screens[n]&&void 0!==e[n])return e[n]||v[n]}return"number"===typeof e?e:3}},{key:"render",value:function(){var e=this;return a.createElement(s.a,null,(function(t){var n,r=t.getPrefixCls,i=e.props,s=i.className,u=i.prefixCls,f=i.title,d=i.size,b=i.children,y=i.bordered,E=void 0!==y&&y,v=i.layout,h=void 0===v?"horizontal":v,w=i.colon,g=void 0===w||w,O=i.style,k=r("descriptions",u),j=e.getColumn(),N=function(e,t){var n,r=[],o=null,i=Object(c.a)(e);return i.forEach((function(e,c){var s=e;o||(n=t,o=[],r.push(o));var u=!0;c===i.length-1&&(u=!s.props.span||s.props.span===n,s=a.cloneElement(s,{span:n}));var m=s.props.span,p=void 0===m?1:m;o.push(s),(n-=p)<=0&&(o=null,Object(l.a)(0===n&&u,"Descriptions","Sum of column `span` in a line exceeds `column` of Descriptions."))})),r}(Object(c.a)(b).map((function(e){return a.isValidElement(e)?a.cloneElement(e,{prefixCls:k}):null})).filter((function(e){return e})),j);return a.createElement("div",{className:o()(k,s,(n={},p(n,"".concat(k,"-").concat(d),"default"!==d),p(n,"".concat(k,"-bordered"),!!E),n)),style:O},f&&a.createElement("div",{className:"".concat(k,"-title")},f),a.createElement("div",{className:"".concat(k,"-view")},a.createElement("table",null,a.createElement("tbody",null,N.map((function(e,t){return function(e,t,n,r,o,l){var i=n.prefixCls,s=function(e,t,n){return a.createElement(m,{child:e,bordered:r,colon:l,type:t,key:"".concat(t,"-").concat(e.key||n),layout:o})},u=[],p=[];return Object(c.a)(e).forEach((function(e,t){u.push(s(e,"label",t)),"vertical"===o?p.push(s(e,"content",t)):r&&u.push(s(e,"content",t))})),"vertical"===o?[a.createElement("tr",{className:"".concat(i,"-row"),key:"label-".concat(t)},u),a.createElement("tr",{className:"".concat(i,"-row"),key:"content-".concat(t)},p)]:a.createElement("tr",{className:"".concat(i,"-row"),key:t},u)}(e,t,{prefixCls:k},E,h,g)}))))))}))}}])&&d(n.prototype,r),u&&d(n,u),t}(a.Component);h.defaultProps={size:"default",column:v},h.Item=function(e){return e.children};t.a=h},502:function(e,t,n){},554:function(e,t,n){"use strict";n(398);var a=n(400),r=(n(108),n(58)),o=n(0),c=n.n(o),l=r.a.Title;t.a=function(e){return c.a.createElement("div",null,c.a.createElement(l,{level:3},"Notice Board"),c.a.createElement(a.a,{style:{height:300,overflow:"scroll"}}))}},798:function(e,t,n){"use strict";n.r(t);n(494);var a=n(498),r=(n(140),n(84)),o=(n(141),n(65)),c=(n(398),n(400)),l=(n(63),n(31)),i=(n(108),n(58)),s=n(0),u=n.n(s),m=n(23),p=n(543),f=n(554),d=n(493),b=i.a.Title,y=i.a.Text;t.default=Object(m.b)((function(e){return{user:e.auth.user,isAuthenticated:e.auth.isAuthenticated}}),(function(e){return{}}))((function(e){var t=e.user;return e.isAuthenticated?t&&"C"!==t.type?u.a.createElement(p.a,null):u.a.createElement("div",{className:"container"},u.a.createElement(d.a,{title:"Home",description:"Home Company Screen"}),u.a.createElement(r.a,{gutter:24},u.a.createElement(o.a,{sm:24,md:12},u.a.createElement(c.a,null,u.a.createElement("div",null,u.a.createElement(b,null,"Hike Pvt. Ltd.")),u.a.createElement(y,null,"OYO Homes & Hotels, commonly known as OYO, is the world\u2019s third-largest, one of China\u2019s top two and the fastest growing hospitality chain of leased and franchised hotels, homes & living spaces. Founded in 2013 by Ritesh Agarwal, OYO initially consisted mainly of budget hotels."),u.a.createElement(l.a,{type:"link",icon:"edit",style:{float:"right"}},"Edit"))),u.a.createElement(o.a,{sm:24,md:12},u.a.createElement(f.a,null))),u.a.createElement("br",null),u.a.createElement(b,{level:2},"Drafts"),u.a.createElement(c.a,null,u.a.createElement(a.a,{title:"Android developer"},u.a.createElement(a.a.Item,{label:"Type"},"Recruitment"),u.a.createElement(a.a.Item,{label:"Last updated at"},new Date("").toLocaleString()),u.a.createElement(a.a.Item,{label:"Rounds"},"5"),u.a.createElement(a.a.Item,{label:"Last updated at"},"Courses Allowed"),u.a.createElement(a.a.Item,{label:"Application opens on"},new Date("").toLocaleString()),u.a.createElement(a.a.Item,{label:"Application closes on"},new Date("").toLocaleString())),u.a.createElement(l.a,{type:"primary"},"Edit/Publish Draft"))):u.a.createElement(p.a,null)}))}}]);
//# sourceMappingURL=20.3e7a7d29.chunk.js.map