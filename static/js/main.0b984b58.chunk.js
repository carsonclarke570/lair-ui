(window["webpackJsonplair-ui"]=window["webpackJsonplair-ui"]||[]).push([[0],{33:function(e){e.exports=JSON.parse('{"domain":"lair.auth0.com","clientId":"KNS2ftm0cDUjJMs4wz4D7DHjzxb6LW7o"}')},40:function(e,t,a){e.exports=a.p+"static/media/logo.25e47b12.png"},47:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(93),i=a(20),s=a.n(i),u=a(29),m=a(25),p=a(2),d=a(36),b=a.n(d),h=r.a.createContext(),f=function(){return Object(n.useContext)(h)},E=a(37),g=a(88),x=a(89),v=a(38),k=a.n(v),w=Object(E.a)({root:{position:"fixed",width:"100%"},box:{width:"15%",minWidth:"175px"},toolbar:{backgroundColor:k.a[300]},button:{marginLeft:"20px",color:"#FFFFFF"},bar:{width:"100%",textAlign:"right"}});var y=function(){var e=w(),t=f(),a=t.isAuthenticated,n=t.loginWithRedirect,c=t.logout;return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{className:e.toolbar},r.a.createElement("div",{className:e.box}),r.a.createElement("div",{className:e.bar},!a&&r.a.createElement(x.a,{variant:"disabled",className:e.button,onClick:function(){return n({})}},"Log In"),a&&r.a.createElement(x.a,{variant:"disabled",className:e.button,onClick:function(){return c()}},"Log Out"))))},N=a(94),O=a(90),j=a(91),C=a(92),W=a(95),R=a(41),S=a.n(R),F=a(42),P=a.n(F),I=a(26),T=a.n(I),U=a(40),L=a.n(U),A=Object(E.a)({root:{},drawerPaper:{borderRight:"none"},logo:{width:"15vw",minWidth:"175px",margin:"0 auto"},links:{margin:"50px auto"},icon:{color:"#757575"},text:{fontFamily:"'Roboto', sans-serif",color:"#757575"},active:{fontFamily:"'Roboto', sans-serif",fontWeight:"700",color:"#757575"}});var J=function(){var e=A();return r.a.createElement(N.a,{variant:"permanent",anchor:"left",className:e.root,classes:{paper:e.drawerPaper}},r.a.createElement("img",{src:L.a,alt:"Logo",className:e.logo}),r.a.createElement(O.a,{className:e.links},r.a.createElement(j.a,{button:!0,key:"Home"},r.a.createElement(C.a,{className:e.icon},r.a.createElement(S.a,null)),r.a.createElement(W.a,{primary:"Home",className:e.active})),r.a.createElement(j.a,{button:!0,key:"Characters"},r.a.createElement(C.a,{className:e.icon},r.a.createElement(P.a,null)),r.a.createElement(W.a,{primary:"Characters",className:e.text})),r.a.createElement(j.a,{button:!0,key:"Compendium"},r.a.createElement(C.a,{className:e.icon},r.a.createElement(T.a,null)),r.a.createElement(W.a,{primary:"Compendium",className:e.text})),r.a.createElement(j.a,{button:!0,key:"Example1"},r.a.createElement(C.a,{className:e.icon},r.a.createElement(T.a,null)),r.a.createElement(W.a,{primary:"Example",className:e.text})),r.a.createElement(j.a,{button:!0,key:"Example2"},r.a.createElement(C.a,{className:e.icon},r.a.createElement(T.a,null)),r.a.createElement(W.a,{primary:"Example",className:e.text})),r.a.createElement(j.a,{button:!0,key:"Example3"},r.a.createElement(C.a,{className:e.icon},r.a.createElement(T.a,null)),r.a.createElement(W.a,{primary:"Example",className:e.text}))))};var D=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(y,null),r.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(33);o.a.render(r.a.createElement(function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?"https://carsonclarke570.github.io/lair-ui/":a,o=Object(p.a)(e,["children","onRedirectCallback"]),l=Object(n.useState)(),i=Object(m.a)(l,2),d=i[0],f=i[1],E=Object(n.useState)(),g=Object(m.a)(E,2),x=g[0],v=g[1],k=Object(n.useState)(),w=Object(m.a)(k,2),y=w[0],N=w[1],O=Object(n.useState)(!0),j=Object(m.a)(O,2),C=j[0],W=j[1],R=Object(n.useState)(!1),S=Object(m.a)(R,2),F=S[0],P=S[1];Object(n.useEffect)(function(){(function(){var e=Object(u.a)(s.a.mark(function e(){var t,a,n,r,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()(o);case 2:if(t=e.sent,N(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,c(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,f(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,v(l);case 19:W(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var I=function(){var e=Object(u.a)(s.a.mark(function e(){var t,a,n=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},P(!0),e.prev=2,e.next=5,y.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,P(!1),e.finish(10);case 13:return e.next=15,y.getUser();case 15:a=e.sent,v(a),f(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return W(!0),e.next=3,y.handleRedirectCallback();case 3:return e.next=5,y.getUser();case 5:t=e.sent,W(!1),f(!0),v(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{isAuthenticated:d,user:x,loading:C,popupOpen:F,loginWithPopup:I,handleRedirectCallback:T,getIdTokenClaims:function(){return y.getIdTokenClaims.apply(y,arguments)},loginWithRedirect:function(){return y.loginWithRedirect.apply(y,arguments)},getTokenSilently:function(){return y.getTokenSilently.apply(y,arguments)},getTokenWithPopup:function(){return y.getTokenWithPopup.apply(y,arguments)},logout:function(){return y.logout.apply(y,arguments)}}},t)},{domain:H.domain,client_id:H.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.0b984b58.chunk.js.map