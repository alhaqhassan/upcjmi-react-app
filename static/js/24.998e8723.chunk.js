(window.webpackJsonpupcjmi=window.webpackJsonpupcjmi||[]).push([[24],{428:function(e,t,n){"use strict";n(22),n(537)},537:function(e,t,n){},540:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return o}));var a=n(38),r=function(){return Object(a.b)("courses/")},c=function(e){return Object(a.b)("".concat("courses/").concat(e,"/"))},u=function(e,t){return Object(a.b)("courses/".concat(t,"/apply/"),{method:"post",data:e})},o=function(){return Object(a.b)("courses/applied/")}},804:function(e,t,n){"use strict";n.r(t);n(60);var a=n(21),r=(n(505),n(509)),c=(n(409),n(411)),u=(n(428),n(76)),o=(n(506),n(508)),i=n(15),l=n.n(i),s=n(33),d=n(381),f=(n(114),n(61)),p=n(0),b=n.n(p),m=n(18),j=n(30),E=n(540),w=f.a.Title;t.default=function(e){var t=Object(p.useState)([{id:0,title:"",details:"",open:"",close:"",duration:"",start_date:"",end_date:""}]),n=Object(d.a)(t,2),i=n[0],f=n[1],O=Object(p.useState)(!0),v=Object(d.a)(O,2),h=v[0],y=v[1];return Object(p.useEffect)((function(){(function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.d)();case 3:t=e.sent,f(t),y(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(j.d)("error","Some unknown error occurred","Try refreshing the page");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),h?b.a.createElement("div",{className:"container"},b.a.createElement(o.a,null)):b.a.createElement("div",{className:"container"},b.a.createElement(w,null,"Courses offered"),0!==i.length||h?null:b.a.createElement(c.a,null,b.a.createElement(u.a,{description:"No courses are available for now"})),i.map((function(e){return b.a.createElement(c.a,null,b.a.createElement(r.a,{title:e.title},b.a.createElement(r.a.Item,{label:"Duration"},e.duration),b.a.createElement(r.a.Item,{label:"Apply By"},new Date(e.close).toLocaleString())),b.a.createElement(m.c,{to:"/courses/".concat(e.id,"/")},b.a.createElement(a.a,{type:"primary"},"View all details")))})))}}}]);
//# sourceMappingURL=24.998e8723.chunk.js.map