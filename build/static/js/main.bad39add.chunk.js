(this["webpackJsonpauth-app"]=this["webpackJsonpauth-app"]||[]).push([[0],{56:function(e,a,t){e.exports=t(70)},61:function(e,a,t){},66:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(52),r=t(0),o=t.n(r),l=t(8),i=t.n(l),c=(t(61),t(24)),m=t(21),s=t(25);t(66);var u=function(){var e=Object(s.b)();return o.a.createElement("form",{className:"reg-form"},o.a.createElement("input",{type:"text",placeholder:"Nickname",id:"nickname",required:!0}),o.a.createElement("input",{type:"email",placeholder:"Email",id:"email",required:!0}),o.a.createElement("input",{type:"password",placeholder:"Password",id:"password",required:!0}),o.a.createElement("button",{onClick:function(a){a.preventDefault(),e(J({nickname:document.getElementById("nickname").value,email:document.getElementById("email").value,password:document.getElementById("password").value}))}},"Register"),o.a.createElement(c.b,{to:"/",className:"nav-item nav-link navbar__item"},"Already signed up? Log in"))};var p=function(){var e=Object(s.c)().getState(),a=Object(m.e)();return o.a.createElement("form",{className:"login-form"},o.a.createElement("input",{type:"email",placeholder:"Email",id:"email",required:!0}),o.a.createElement("input",{type:"password",placeholder:"Password",id:"password",required:!0}),o.a.createElement("button",{onClick:function(t){t.preventDefault(),Array.isArray(e)&&e.length?e.forEach((function(e){e.email===document.getElementById("email").value&&a.push({pathname:"/dashboard",state:{email:e.email,password:e.password,nickname:e.nickname}})})):document.getElementsByClassName("error")[0].innerHTML="User not found"}},"Log in"),o.a.createElement("p",{className:"error"}),o.a.createElement(c.b,{to:"/sign_up",className:"nav-item nav-link navbar__item"},"Does not have an account? Sign up"))},d=t(37),E=t(49),g=t(4),f=t(50),h=t(110),v=t(111),b=t(112),y=t(72),w=t(116),O=t(113),j=t(114),k=t(73),x=t(109),B=t(51),N=t.n(B),S=t(104),I=t(108),P=t(107),D=t(105),R=t(106);function C(e){return o.a.createElement(y.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)}function _(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(C,null,"User info"),o.a.createElement(S.a,{size:"small"},o.a.createElement(D.a,null,o.a.createElement(R.a,null,o.a.createElement(P.a,null,"Email"),o.a.createElement(P.a,null,"Nickname"),o.a.createElement(P.a,null,"Password"))),o.a.createElement(I.a,null,o.a.createElement(R.a,{key:1},o.a.createElement(P.a,null,e.data.email),o.a.createElement(P.a,null,e.data.nickname),o.a.createElement(P.a,null,e.data.password)))))}var q=t(115),z=Object(f.a)((function(e){return{popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}));function L(e){console.log(e);var a=z(),t=o.a.useState(null),n=Object(d.a)(t,2),r=n[0],l=n[1],i=function(){l(null)},c=Boolean(r);return o.a.createElement("div",null,o.a.createElement(y.a,{"aria-owns":c?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){l(e.currentTarget)},onMouseLeave:i},e.nickname),o.a.createElement(q.a,{id:"mouse-over-popover",className:a.popover,classes:{paper:a.paper},open:c,anchorEl:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:i,disableRestoreFocus:!0},o.a.createElement(y.a,null,e.nickname,o.a.createElement("br",null),e.email)))}function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function F(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(t,!0).forEach((function(a){Object(E.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function G(){return o.a.createElement(y.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(x.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var H=Object(f.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:F({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{left:0,zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:0,width:"100%",transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}));function A(e){var a=H(),t=o.a.useState(!0),n=Object(d.a)(t,2),r=n[0],l=n[1];return o.a.createElement("div",{className:a.root},o.a.createElement(h.a,null),o.a.createElement(v.a,{position:"absolute",className:Object(g.a)(a.appBar,r&&a.appBarShift)},o.a.createElement(b.a,{className:a.toolbar},o.a.createElement(w.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},className:Object(g.a)(a.menuButton,r&&a.menuButtonHidden)},o.a.createElement(N.a,null)),o.a.createElement(y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:a.title},"Dashboard"),o.a.createElement(L,{email:e.location.state.email,nickname:e.location.state.nickname}))),o.a.createElement("main",{className:a.content},o.a.createElement("div",{className:a.appBarSpacer}),o.a.createElement(O.a,{maxWidth:"lg",className:a.container},o.a.createElement(j.a,{container:!0,spacing:3},o.a.createElement(j.a,{item:!0,xs:12},o.a.createElement(k.a,{className:a.paper},o.a.createElement(_,{data:e.location.state}))))),o.a.createElement(G,null)))}var M=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(m.a,{path:"/",exact:!0,component:p}),o.a.createElement(m.a,{path:"/sign_up",component:u}),o.a.createElement(m.a,{path:"/dashboard",component:A})))},W=t(32);t.d(a,"register",(function(){return J}));var J=function(e){return{type:"REGISTER",data:e}},U=Object(W.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"REGISTER":return[].concat(Object(n.a)(e),[a.data]);default:return e}}));i.a.render(o.a.createElement(s.a,{store:U},o.a.createElement(M,null)),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.bad39add.chunk.js.map