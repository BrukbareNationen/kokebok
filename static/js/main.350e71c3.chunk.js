(this.webpackJsonphowtoo=this.webpackJsonphowtoo||[]).push([[0],[,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),i=n.n(c),r=n(6),a=n.n(r),l=(n(16),n(2));n(4),n(17);var o=function(){return Object(s.jsx)("div",{className:"nat-header",children:Object(s.jsx)("h1",{children:"NATIONENS KOKEBOK"})})},j=(n(18),function(e){return Object(s.jsx)("nav",{className:"navbar",children:Object(s.jsx)("ul",{className:"navbar-nav",children:e.children})})}),b=(n(19),n(7)),d=n(8),m=n(10),u=n(9),O=n.p+"static/media/logo.6ce24c58.svg";var h=function(){return Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("img",{src:O,className:"App-logo",alt:"logo"}),Object(s.jsxs)("p",{children:["Edit ",Object(s.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(s.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})},v=function(){return Object(s.jsxs)("header",{className:"App-header",children:[Object(s.jsx)("img",{src:O,className:"App-logo",alt:"logo"}),Object(s.jsxs)("p",{children:["Edit ",Object(s.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(s.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(s.jsx)("h4",{children:"Dette er ReactComp2"})]})},p=(n(20),function(){return Object(s.jsx)("div",{className:"velkommen",children:Object(s.jsxs)("div",{className:"wrapper",children:[Object(s.jsx)("h1",{children:"Velkommen til Nationens kokebok"}),Object(s.jsx)("h3",{children:"Her vil det komme mengder av grafisk snadder man kan bruke i artiklene sine"})]})})}),x=function(){return Object(s.jsx)("div",{className:"velkommen",children:Object(s.jsxs)("div",{className:"forklaring",children:[Object(s.jsx)("p",{children:"P\xe5 denne siden vil det komme detaljert beskriveles av hvordan man bruker elementene som er vist til venstre"}),Object(s.jsx)("p",{children:"P\xe5 denne siden vil det komme detaljert beskriveles av hvordan man bruker elementene som er vist til venstre"}),Object(s.jsx)("p",{children:"P\xe5 denne siden vil det komme detaljert beskriveles av hvordan man bruker elementene som er vist til venstre"})]})})},f=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).components={ReactComp:h,ReactComp2:v,Velkommen:p,Velkommen2:x},e}return Object(d.a)(n,[{key:"render",value:function(){if(this.components[this.props.visible]){var e=this.components[this.props.visible];return Object(s.jsx)("div",{className:"content-container",children:Object(s.jsx)(e,{})})}var t=this.components.Velkommen;return Object(s.jsx)("div",{className:"content-container",children:Object(s.jsx)(t,{})})}}]),n}(c.Component),k=function(e){return Object(s.jsxs)("div",{className:"nat-content",children:[Object(s.jsx)(f,{visible:e.visible}),Object(s.jsx)(f,{visible:e.visible+"2"})]})};n(21);var N=function(e){return Object(s.jsxs)("li",{className:"nav-item",children:[Object(s.jsx)("button",{className:"icon-button",onClick:function(){return e.setOpen(!e.open)},children:Object(s.jsx)("p",{children:e.title})}),e.open&&e.children]})},g=(n(5),n(22),function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("button",{className:"menu-item",onClick:function(){e.setVisible(e.title)},children:[Object(s.jsx)("span",{className:"icon-button",children:e.leftIcon}),e.title]})})}),V=function(e){var t=Object(c.useRef)();Object(c.useEffect)((function(){return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[]);var n=function(n){t.current.contains(n.target)?console.log("inside Click"):(console.log("outside Click"),e.setOpen(!1))};return Object(s.jsx)("div",{ref:t,className:"dropdown",children:e.items.map((function(t){return Object(s.jsx)(g,{leftIcon:"\ud83d\udc38",setVisible:e.setVisible,visible:e.visible,title:t})}))})};var C=function(){var e=Object(c.useState)("Velkommen"),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),a=Object(l.a)(r,2),b=a[0],d=a[1],m=Object(c.useState)(!1),u=Object(l.a)(m,2),O=u[0],h=u[1],v=Object(c.useState)(!1),p=Object(l.a)(v,2),x=p[0],f=p[1],g=Object(c.useState)(!1),C=Object(l.a)(g,2),A=C[0],w=C[1],E=["Velkommen","ReactComp","Gjenbruk","Kart","Bendiks Verden"];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(o,{}),Object(s.jsxs)(j,{children:[Object(s.jsx)(N,{title:"Meny",open:b,setOpen:d,children:Object(s.jsx)(V,{setOpen:d,visible:n,setVisible:i,items:E})}),Object(s.jsx)(N,{open:O,setOpen:h,title:"Grafikk",children:Object(s.jsx)(V,{setOpen:h,visible:n,setVisible:i,items:["Grafikk","Gjennbruk","Kart","Embed"]})}),Object(s.jsx)(N,{open:x,setOpen:f,title:"Kart",children:Object(s.jsx)(V,{setOpen:f,visible:n,setVisible:i,items:E})}),Object(s.jsx)(N,{open:A,setOpen:w,title:"Gjennbruk",children:Object(s.jsx)(V,{setOpen:w,visible:n,setVisible:i,items:E})})]}),Object(s.jsx)(k,{visible:n})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),A()}],[[23,1,2]]]);
//# sourceMappingURL=main.350e71c3.chunk.js.map