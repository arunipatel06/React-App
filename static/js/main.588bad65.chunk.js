(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{85:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c.n(n),a=c(10),s=c.n(a),l=(c(85),c(63)),r=c(64),o=c(75),j=c(74),d=c(35),b=c(8),x=c(15),h=c(137),O=c(125),m=Object(O.a)((function(e){return{navbar:{height:"50px",width:"100%",color:"black",position:"fixed",zIndex:5,alignItems:"center"},mobileNavbar:{height:"50px",width:"100%",color:"black",zIndex:5,position:"fixed"},siteList:{marginTop:"40px"},sitePage:{paddingTop:"60px"}}})),u=c(127),f=c(69),p=Object(O.a)((function(e){return{root:Object(f.a)({width:"100%",maxWidth:450,alignItems:"left",backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:700},e.breakpoints.up("md"),{maxWidth:300,maxHeight:700}),list:{"&:hover":{color:"black",backgroundColor:"#b2d2f7"}},itemSelected:{color:"#5e5f63",backgroundColor:"#fcd8b1",borderRight:"4px solid #2b68d6"},arrowIcon:{marginLeft:"8px"},button:{fontSize:"18px",fontStyle:900,float:"right",borderRadius:"25px",padding:"7px 40px",textTransform:"none","&:hover":{color:"white",backgroundColor:"#b2d2f7"},color:"#5e5f63",backgroundColor:"#dbdbdb",border:"none",outline:"none"}}})),v=c(55),g=c.n(v),N=c(70),y=function(){var e=Object(N.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://tracktik-challenge.staffr.com/sites",{method:"GET"}).then((function(e){return e.json()})).catch(console.error));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=c(128),w=c(129),C=c(131),T=c(130),S=c(132),B=c(38),I=c.n(B),E=c(56),L=c.n(E),F=c(1),A=function(e){var t=e.setClientDetails,c=p(),a=Object(u.a)("(min-width:1280px)"),s=Object(n.useState)([]),l=Object(x.a)(s,2),r=l[0],o=l[1],j=Object(n.useState)(1),b=Object(x.a)(j,2),h=b[0],O=b[1],m=Object(n.useState)([]),f=Object(x.a)(m,2),v=f[0],g=f[1],N=i.a.useState(0),B=Object(x.a)(N,2),E=B[0],A=B[1],D=function(){O(h+1),A(0)};Object(n.useEffect)((function(){y().then((function(e){o(e)}))}),[]),Object(n.useEffect)((function(){g(r.slice(10*(h-1),10*h))}),[r,h]),Object(n.useEffect)((function(){t(v[E])}),[v,E]);var z=function(e,t){A(t)},P=Object(F.jsxs)("div",{className:c.root,children:[Object(F.jsx)(k.a,{children:0!==v.length&&v.map((function(e,t){return Object(F.jsxs)(w.a,{className:E===t?c.itemSelected:c.list,button:!0,selected:E===t,onClick:function(e){return z(0,t)},children:[Object(F.jsx)(T.a,{children:Object(F.jsx)(I.a,{})}),Object(F.jsx)(C.a,{primary:e.title,secondary:Object(F.jsxs)("div",{children:[e.address.city,", ",e.address.country,e.contacts.main.phoneNumber]})}),Object(F.jsx)(S.a,{children:Object(F.jsx)(L.a,{})})]})}))}),Object(F.jsx)("button",{className:c.button,onClick:function(){D()},children:"Next Page >>"})]}),H=Object(F.jsxs)("div",{className:c.root,children:[Object(F.jsx)(k.a,{children:0!==v.length&&v.map((function(e,t){return Object(F.jsx)(d.b,{to:{pathname:"/site/".concat(v[t].id),state:v[t]},children:Object(F.jsxs)(w.a,{className:E===t?c.itemSelected:c.list,button:!0,selected:E===t,onClick:function(e){return z(0,t)},children:[Object(F.jsx)(T.a,{children:Object(F.jsx)(I.a,{})}),Object(F.jsx)(C.a,{primary:e.title,secondary:Object(F.jsxs)("div",{children:[e.address.city,", ",e.address.country,e.contacts.main.phoneNumber]})}),Object(F.jsx)(S.a,{children:Object(F.jsx)(L.a,{})})]})})}))}),Object(F.jsx)("button",{className:c.button,onClick:function(){D()},children:"Next Page >>"})]});return Object(F.jsx)(n.Fragment,{children:a?P:H})},D=c(141),z=c(134),P=c(135),H=c(136),W=c(133),M=c(39),R=c(47),J=c.n(R),U=c(48),G=c.n(U),X=c(49),q=c.n(X),K=c(50),Q=c.n(K),V=c.p+"static/media/Profile.f6a93b73.jpg",Y=Object(O.a)((function(e){return{paper:{height:"100%",width:"100%"},mobileList:{backgroundColor:"#2a78e5"},parent:{display:"flex",flexDirection:"column",margin:"30px auto 20px",width:"300px"},icon:{fontSize:"30px",width:"10%",marginRight:"20px"},iconAndText:{display:"flex",flexDirection:"row",margin:"10px auto 10px"},detailsText:{fontSize:"20px",align:"left"},mobileBackIcon:{padding:"0px 15px 0px",color:"white"},image:{width:"100%",height:"100%"}}})),Z=function(e){var t=e.clientDetails,c=Y(),i=Object(n.useState)(!0),a=Object(x.a)(i,2),s=a[0],l=a[1],r=Object(n.useState)(),o=Object(x.a)(r,2),j=o[0],d=o[1];Object(n.useEffect)((function(){void 0!==t&&0!==Object.keys(t).length&&(d(t),l(!1))}),[t]);var b=Object(F.jsxs)(D.a,{onClose:function(){l(!1)},open:s,children:[Object(F.jsx)(z.a,{children:"Loading... "}),Object(F.jsx)(P.a,{children:Object(F.jsx)("div",{className:c.circularDialog,children:Object(F.jsx)(H.a,{})})})]}),O=j&&Object(F.jsx)(W.a,{elevation:1,children:Object(F.jsx)(h.a,{container:!0,children:Object(F.jsxs)(h.a,{xs:12,children:[Object(F.jsx)("div",{children:Object(F.jsx)("img",{alt:"ProfileImage",className:c.image,src:V})}),Object(F.jsxs)("div",{className:c.parent,children:[Object(F.jsxs)("div",{className:c.iconAndText,children:[Object(F.jsx)(J.a,{disableElevation:!0,className:c.icon}),Object(F.jsxs)("div",{children:[Object(F.jsxs)(M.a,{className:c.detailsText,children:[j.contacts.main.firstName," ",j.contacts.main.lastName]}),Object(F.jsx)(M.a,{variant:"Subtitle",children:j.contacts.main.jobTitle})]})]}),Object(F.jsxs)("div",{className:c.iconAndText,children:[Object(F.jsx)(G.a,{disableElevation:!0,className:c.icon}),Object(F.jsx)(M.a,{className:c.detailsText,children:j.contacts.main.phoneNumber})]}),Object(F.jsxs)("div",{className:c.iconAndText,children:[Object(F.jsx)(q.a,{disableElevation:!0,className:c.icon}),Object(F.jsx)(M.a,{className:c.detailsText,children:j.contacts.main.email})]}),Object(F.jsxs)("div",{className:c.iconAndText,children:[Object(F.jsx)(Q.a,{disableElevation:!0,className:c.icon}),Object(F.jsx)(M.a,{className:c.detailsText,children:j.contacts.main.address.street})]})]})]})})});return Object(F.jsxs)(n.Fragment,{children:[b,O]})},$=c(138),_=c(139),ee=c(140),te=Object(O.a)((function(e){return{mobileButtonContainer:{textAlign:"center"},mobileButton:{fontStyle:"normal",fontWeight:500,fontSize:25,lineHeight:"53px",color:"#3F3F3F"}}})),ce=function(e){e.mobileOverlay;var t=e.setMobileOverlay,c=te();return Object(F.jsx)(n.Fragment,{children:Object(F.jsxs)("section",{children:[Object(F.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:Object(F.jsx)($.a,{onClick:function(){return t((function(e){return!e}))},children:Object(F.jsx)(_.a,{})})}),Object(F.jsx)("div",{className:c.mobileButtonContainer,children:Object(F.jsx)(ee.a,{className:c.mobileButton,children:"Home"})}),Object(F.jsx)("div",{className:c.mobileButtonContainer,children:Object(F.jsx)(ee.a,{className:c.mobileButton,children:"Log In"})}),Object(F.jsx)("div",{className:c.mobileButtonContainer,children:Object(F.jsx)(ee.a,{className:c.mobileButton,children:"Sign Up"})})]})})},ne=c(71),ie=c.n(ne),ae=c(72),se=c.n(ae),le=Object(O.a)((function(e){return{root:{width:"100%",height:"40px",backgroundColor:"#2a78e5",color:"white"},parent:{display:"flex",flexDirection:"row",float:"right",justifyContent:"center"},menuButton:{transition:"0.5s",color:"#ffffff",fontSize:"25px",fontWeight:"normal",margin:"0px","&:hover":{color:"#e31b6d"},marginLeft:"10px"},mobileNav:{opacity:1,height:"100vh",width:"100%",position:"fixed",zIndex:1100,left:0,top:0,backgroundColor:"#efefef"},navText:{color:"#ffffff",fontWeight:500},accountIcon:{color:"#ffffff",marginLeft:"90px"}}})),re=function(e){var t=le(),c=Object(u.a)("(min-width:1280px)"),i=Object(n.useState)(!1),a=Object(x.a)(i,2),s=a[0],l=a[1],r=Object(F.jsx)("div",{className:t.root,children:Object(F.jsxs)("div",{className:t.parent,children:[Object(F.jsx)(M.a,{style:{margin:"10px"},children:"Home"}),Object(F.jsx)(M.a,{style:{margin:"10px"},children:"Login"}),Object(F.jsx)(M.a,{style:{margin:"10px"},children:"Sign Up"})]})}),o=Object(F.jsxs)("div",{className:t.root,children:[Object(F.jsxs)($.a,{style:{display:s?"none":"block",padding:"0px"},onClick:function(){l((function(e){return!e}))},children:[Object(F.jsx)(ie.a,{className:t.menuButton}),Object(F.jsx)("div",{style:{marginLeft:"90px ",marginTop:"0px"},children:Object(F.jsx)(M.a,{variant:"h6",className:t.navText,children:"Scheduling"})}),Object(F.jsx)($.a,{children:Object(F.jsx)(se.a,{edge:"end",className:t.accountIcon})})]}),Object(F.jsx)("div",{style:{display:s?"block":"none"},className:t.mobileNav,children:Object(F.jsx)(ce,{mobileOverlay:s,setMobileOverlay:l})})]});return Object(F.jsx)(n.Fragment,{children:c?r:o})},oe=function(){var e=m(),t=Object(u.a)("(min-width:1280px)"),c=Object(n.useState)({}),i=Object(x.a)(c,2),a=i[0],s=i[1],l=Object(F.jsx)("div",{children:Object(F.jsxs)(h.a,{container:!0,children:[Object(F.jsx)(h.a,{xs:12,children:Object(F.jsx)("div",{className:e.navbar,children:Object(F.jsx)(re,{})})}),Object(F.jsx)(h.a,{md:4,xs:12,children:Object(F.jsx)("div",{className:e.siteList,children:Object(F.jsx)(A,{setClientDetails:s})})}),Object(F.jsx)(h.a,{md:6,xs:12,children:Object(F.jsx)("div",{className:e.sitePage,children:Object(F.jsx)(Z,{clientDetails:a})})})]})}),r=Object(F.jsx)("div",{children:Object(F.jsxs)(h.a,{container:!0,children:[Object(F.jsx)(h.a,{xs:12,children:Object(F.jsx)("div",{className:e.mobileNavbar,children:Object(F.jsx)(re,{})})}),Object(F.jsx)(h.a,{xs:12,children:Object(F.jsx)("div",{className:e.siteList,children:Object(F.jsx)(A,{setClientDetails:s})})})]})});return Object(F.jsx)(n.Fragment,{children:Object(F.jsx)("div",{children:t?l:r})})},je=c(73),de=c.n(je),be=function(){var e=Object(b.g)(),t=Y(),c=Object(b.f)(),i=Object(n.useState)(e.state),a=Object(x.a)(i,2),s=a[0],l=(a[1],0!==Object.keys(s).length&&Object(F.jsx)(h.a,{container:!0,children:Object(F.jsxs)(h.a,{xs:12,children:[Object(F.jsx)("div",{style:{borderBottom:"1px solid black"},children:Object(F.jsx)(re,{})}),Object(F.jsx)(k.a,{className:t.mobileList,children:Object(F.jsxs)(w.a,{children:[Object(F.jsx)($.a,{edge:"start",className:t.mobileBackIcon,onClick:function(){return c.goBack()},children:Object(F.jsx)(de.a,{})}),Object(F.jsx)(T.a,{children:Object(F.jsx)(I.a,{style:{color:"#ffffff",fontSize:"30px"}})}),Object(F.jsx)(C.a,{primary:Object(F.jsx)("div",{style:{color:"#ffffff"},children:s.title}),secondary:Object(F.jsxs)("div",{style:{color:"#000000"},children:[Object(F.jsxs)("div",{children:[s.address.city,", ",s.address.country]}),Object(F.jsx)("div",{children:s.contacts.main.phoneNumber})]})})]})}),Object(F.jsx)("div",{children:Object(F.jsx)("img",{alt:"ProfileImage",width:"100%",height:"100%",src:V})}),Object(F.jsxs)("div",{className:t.parent,children:[Object(F.jsxs)("div",{className:t.iconAndText,children:[Object(F.jsx)(J.a,{disableElevation:!0,className:t.icon}),Object(F.jsxs)("div",{style:{textAlign:"left"},children:[Object(F.jsxs)(M.a,{className:t.detailsText,children:[s.contacts.main.firstName," ",s.contacts.main.lastName]}),Object(F.jsx)(M.a,{variant:"Subtitle",children:s.contacts.main.jobTitle})]})]}),Object(F.jsxs)("div",{className:t.iconAndText,children:[Object(F.jsx)(G.a,{disableElevation:!0,className:t.icon}),Object(F.jsx)(M.a,{className:t.detailsText,children:s.contacts.main.phoneNumber})]}),Object(F.jsxs)("div",{className:t.iconAndText,children:[Object(F.jsx)(q.a,{disableElevation:!0,className:t.icon}),Object(F.jsx)(M.a,{className:t.detailsText,children:s.contacts.main.email})]}),Object(F.jsxs)("div",{className:t.iconAndText,children:[Object(F.jsx)(Q.a,{disableElevation:!0,className:t.icon}),Object(F.jsx)(M.a,{className:t.detailsText,children:s.contacts.main.address.street})]})]})]})}));return Object(F.jsx)(n.Fragment,{children:l})},xe=function(e){Object(o.a)(c,e);var t=Object(j.a)(c);function c(e){return Object(l.a)(this,c),t.call(this,e)}return Object(r.a)(c,[{key:"render",value:function(){return Object(F.jsx)("div",{children:Object(F.jsx)("div",{style:{width:"100%",overflowX:"hidden"},children:Object(F.jsx)(d.a,{children:Object(F.jsxs)(b.c,{children:[Object(F.jsx)(b.a,{exact:!0,path:"/",component:oe}),Object(F.jsx)(b.a,{path:"/site/:id",component:be})]})})})})}}]),c}(n.Component),he=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,142)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(F.jsx)(i.a.StrictMode,{children:Object(F.jsx)(xe,{})}),document.getElementById("root")),he()}},[[97,1,2]]]);
//# sourceMappingURL=main.588bad65.chunk.js.map