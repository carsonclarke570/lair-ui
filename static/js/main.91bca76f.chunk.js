(window["webpackJsonplair-ui"]=window["webpackJsonplair-ui"]||[]).push([[0],{33:function(e){e.exports=JSON.parse('{"domain":"lair.auth0.com","clientId":"KNS2ftm0cDUjJMs4wz4D7DHjzxb6LW7o"}')},40:function(e,t,a){e.exports=a.p+"static/media/logo.25e47b12.png"},47:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=a(93),i=a(20),s=a.n(i),u=a(29),m=a(25),p=a(2),d=a(36),b=a.n(d),f=function(){return window.history.replaceState({},document.title,window.location.pathname)},h=r.a.createContext(),E=function(){return Object(n.useContext)(h)},g=a(37),x=a(88),v=a(89),w=a(38),k=a.n(w),y=Object(g.a)({root:{position:"fixed",width:"100%"},box:{width:"15%",minWidth:"175px"},toolbar:{backgroundColor:k.a[300]},button:{marginLeft:"20px",color:"#FFFFFF"},bar:{width:"100%",textAlign:"right"}});var N=function(){var e=y(),t=E(),a=t.isAuthenticated,n=t.loginWithRedirect,c=t.logout;return r.a.createElement("div",{className:e.root},r.a.createElement(x.a,{className:e.toolbar},r.a.createElement("div",{className:e.box}),r.a.createElement("div",{className:e.bar},!a&&r.a.createElement(v.a,{variant:"disabled",className:e.button,onClick:function(){return n({})}},"Log In"),a&&r.a.createElement(v.a,{variant:"disabled",className:e.button,onClick:function(){return c()}},"Log Out"))))},O=a(94),j=a(90),C=a(91),W=a(92),R=a(95),S=a(41),F=a.n(S),P=a(42),I=a.n(P),T=a(26),U=a.n(T),L=a(40),A=a.n(L),J=Object(g.a)({root:{},drawerPaper:{borderRight:"none"},logo:{width:"15vw",minWidth:"175px",margin:"0 auto"},links:{margin:"50px auto"},icon:{color:"#757575"},text:{fontFamily:"'Roboto', sans-serif",color:"#757575"},active:{fontFamily:"'Roboto', sans-serif",fontWeight:"700",color:"#757575"}});var D=function(){var e=J();return r.a.createElement(O.a,{variant:"permanent",anchor:"left",className:e.root,classes:{paper:e.drawerPaper}},r.a.createElement("img",{src:A.a,alt:"Logo",className:e.logo}),r.a.createElement(j.a,{className:e.links},r.a.createElement(C.a,{button:!0,key:"Home"},r.a.createElement(W.a,{className:e.icon},r.a.createElement(F.a,null)),r.a.createElement(R.a,{primary:"Home",className:e.active})),r.a.createElement(C.a,{button:!0,key:"Characters"},r.a.createElement(W.a,{className:e.icon},r.a.createElement(I.a,null)),r.a.createElement(R.a,{primary:"Characters",className:e.text})),r.a.createElement(C.a,{button:!0,key:"Compendium"},r.a.createElement(W.a,{className:e.icon},r.a.createElement(U.a,null)),r.a.createElement(R.a,{primary:"Compendium",className:e.text})),r.a.createElement(C.a,{button:!0,key:"Example1"},r.a.createElement(W.a,{className:e.icon},r.a.createElement(U.a,null)),r.a.createElement(R.a,{primary:"Example",className:e.text})),r.a.createElement(C.a,{button:!0,key:"Example2"},r.a.createElement(W.a,{className:e.icon},r.a.createElement(U.a,null)),r.a.createElement(R.a,{primary:"Example",className:e.text})),r.a.createElement(C.a,{button:!0,key:"Example3"},r.a.createElement(W.a,{className:e.icon},r.a.createElement(U.a,null)),r.a.createElement(R.a,{primary:"Example",className:e.text}))))};var H=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(N,null),r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(33);o.a.render(r.a.createElement(function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?f:a,o=Object(p.a)(e,["children","onRedirectCallback"]),l=Object(n.useState)(),i=Object(m.a)(l,2),d=i[0],E=i[1],g=Object(n.useState)(),x=Object(m.a)(g,2),v=x[0],w=x[1],k=Object(n.useState)(),y=Object(m.a)(k,2),N=y[0],O=y[1],j=Object(n.useState)(!0),C=Object(m.a)(j,2),W=C[0],R=C[1],S=Object(n.useState)(!1),F=Object(m.a)(S,2),P=F[0],I=F[1];Object(n.useEffect)(function(){(function(){var e=Object(u.a)(s.a.mark(function e(){var t,a,n,r,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()(o);case 2:if(t=e.sent,O(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,c(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,E(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,w(l);case 19:R(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var T=function(){var e=Object(u.a)(s.a.mark(function e(){var t,a,n=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},I(!0),e.prev=2,e.next=5,N.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,I(!1),e.finish(10);case 13:return e.next=15,N.getUser();case 15:a=e.sent,w(a),E(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,N.handleRedirectCallback();case 3:return e.next=5,N.getUser();case 5:t=e.sent,R(!1),E(!0),w(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.Provider,{value:{isAuthenticated:d,user:v,loading:W,popupOpen:P,loginWithPopup:T,handleRedirectCallback:U,getIdTokenClaims:function(){return N.getIdTokenClaims.apply(N,arguments)},loginWithRedirect:function(){return N.loginWithRedirect.apply(N,arguments)},getTokenSilently:function(){return N.getTokenSilently.apply(N,arguments)},getTokenWithPopup:function(){return N.getTokenWithPopup.apply(N,arguments)},logout:function(){return N.logout.apply(N,arguments)}}},t)},{domain:z.domain,client_id:z.clientId,redirect_uri:window.location.href,onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[47,1,2]]]);
//# sourceMappingURL=main.91bca76f.chunk.js.map