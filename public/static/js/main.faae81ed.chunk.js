(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{254:function(e,t,n){},427:function(e,t,n){"use strict";n.r(t);n(253),n(254);var a=n(0),c=n(34),s=n.n(c),r=n(19),i=n(69),o=n(213),l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return t.payload;default:return e}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"home",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PAGE":return t.payload;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SESSIONS":return t.payload;default:return e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APPSTATUS":return t.payload;default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHCHANGE":return t.payload;default:return e}},h=Object(i.c)({login:l,page:u,sessions:d,appStatus:j,fetchAll:b}),p=n(24),O=n.n(p),f=n(27),m=n(58),g={url:"https://localhost:3000",options:{headers:{"Content-Type":"application/json"},credentials:"include"}},x=function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g.url+"/logout",Object(f.a)(Object(f.a)({},g.options),{},{method:"POST"})).then((function(e){return e.json()})).then((function(e){t({type:"LOGIN",payload:!1}),t({type:"CHANGE_PAGE",payload:"login"})})).catch((function(e){t({type:"APPSTATUS",payload:500}),t({type:"LOGIN",payload:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(e){return function(t){t({type:"APPSTATUS",payload:null}),t({type:"CHANGE_PAGE",payload:e})}},v=function(){return function(e){e({type:"APPSTATUS",payload:null})}},S=n(9),N=n(2),T=Object(r.b)((function(e){return{login:e.login,page:e.page}}),{logout:x,changePage:y})((function(e){var t=e.login,n=e.logout,c=(e.page,e.changePage),s=Object(a.useState)(!1),r=Object(S.a)(s,2),i=r[0],o=r[1],l=Object(a.useRef)();return Object(a.useEffect)((function(){var e=function(e){l.current&&l.current.contains(e.target)||o(!1)};return document.body.addEventListener("click",e),function(){document.removeEventListener("click",e)}}),[]),Object(N.jsxs)("div",{className:"navbar",id:"navbar",children:[t?Object(N.jsx)("div",{children:Object(N.jsx)("i",{className:"home icon large",onClick:function(){return c("login")}})}):null,Object(N.jsxs)("div",{ref:l,className:"ui dropdown",onClick:function(){return o(!i)},children:[Object(N.jsx)("i",{className:"bars icon large"}),Object(N.jsxs)("div",{className:"cust_menu menu transition ".concat(i?"visible active":""),children:[Object(N.jsx)("div",{className:"item",onClick:function(){return c("about")},children:"About"}),t?Object(N.jsx)("div",{className:"item",onClick:function(){return n()},children:"Log Out"}):null]})]})]})})),k=function(){return Object(N.jsxs)("div",{id:"logo-container",children:[Object(N.jsx)("h1",{children:"Cycle Tracker"}),Object(N.jsxs)("div",{id:"logo-wheel",className:"wheel",children:[Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes1"}),Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes2"}),Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes3"}),Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes4"})]})]})},A=Object(r.b)(null,{login:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"APPSTATUS",payload:"loading"}),t.next=3,fetch(g.url+"/login",Object(f.a)(Object(f.a)({},g.options),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()})).then((function(e){202===e.status&&"Logged In"===e.message?(n({type:"APPSTATUS",payload:null}),n({type:"LOGIN",payload:!0})):(n({type:"APPSTATUS",payload:e.status}),n({type:"LOGIN",payload:!1}))})).catch((function(e){n({type:"APPSTATUS",payload:500}),n({type:"LOGIN",payload:!1})}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changePage:y})((function(e){var t=e.login,n=e.changePage,c=Object(a.useState)(""),s=Object(S.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),l=Object(S.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(""),b=Object(S.a)(j,2),h=b[0],p=b[1],O=Object(a.useState)(""),f=Object(S.a)(O,2),m=f[0],g=f[1],x=Object(a.useState)(!1),y=Object(S.a)(x,2),v=y[0],T=y[1];Object(a.useEffect)((function(){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(r.toLowerCase());e&&h?(d(""),g("")):e&&!h?(d(""),g("error")):!e&&h?(d("error"),g("")):(d("error"),g("error"))}),[r,h]),Object(a.useEffect)((function(){T(!(!u&&!m))}),[u,m]);return Object(N.jsxs)("div",{className:"ui container",children:[Object(N.jsx)(k,{}),Object(N.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),v||t({email:r,pword:h})},children:[Object(N.jsxs)("div",{className:"field ".concat(u),children:[Object(N.jsx)("label",{children:"Email:"}),Object(N.jsx)("input",{type:"text",name:"email",placeholder:"Email...",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(N.jsxs)("div",{className:"field ".concat(m),children:[Object(N.jsx)("label",{children:"Password:"}),Object(N.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:h,onChange:function(e){return p(e.target.value)}})]}),Object(N.jsx)("button",{className:"ui button ".concat(v?"":"positive"),type:"submit",children:"Log In"}),Object(N.jsx)("p",{className:"fakeLink",onClick:function(){return n("signup")},children:"Create an account"})]})]})})),w=function(e){var t=e.readTandC;return Object(N.jsx)("div",{className:"tandc-popup",onClick:function(e){return function(e){"tandcButton"===e.target.id?t(!0):t(!1)}(e)},children:Object(N.jsxs)("div",{className:"tandc-contents",children:[Object(N.jsx)("h1",{children:"Terms And Conditions"}),Object(N.jsx)("p",{children:'These Terms And Conditions relate to the use of this website/web app ("The Cycle Tracker App, The Site, The App")'}),Object(N.jsx)("p",{children:"By using The Cycle Tracker App you agree to these Terms And Conditions in their entirety."}),Object(N.jsx)("p",{children:"The users of The Cycle Tracker App understand and agree that:"}),Object(N.jsxs)("ol",{children:[Object(N.jsx)("li",{children:"The developers and adminstrators of The Cycle Tracker App created it for their own amusement, and it shouldn't be treated as a serious service."}),Object(N.jsx)("li",{children:"Use of The App is entirely at The User's own risk, including the security of any data they submit to The App."}),Object(N.jsx)("li",{children:"No liablity will be taken by the developers, administrators, or owners of The Cycle Tracker App for any losses of any kind resulting from the use of The App."}),Object(N.jsx)("li",{children:"The developers, administrators, and owners of The Cycle Tracker App reserve the right to refuse access to The App entirely at their discretion."}),Object(N.jsx)("li",{children:"The developers and owners of The Cycle Tracker App reserve the right to amend or delete any data held by The App at any time without prior notice."}),Object(N.jsx)("li",{children:"The developers, adminstrators, and owners of The Cycle Tracker App reserve the right to use the data you submit to The App for any purpose."}),Object(N.jsx)("li",{children:"The developers, administrators, and owners of The Cycle Tracker App reserve the right to delete The App at any time without prior warning."})]}),Object(N.jsx)("button",{id:"tandcButton",children:"I have read and agree to this"})]})})},P=Object(r.b)(null,{signUp:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(f.a)(Object(f.a)({},e),{},{tandc:"1.0"}),n({type:"APPSTATUS",payload:"loading"}),t.next=4,fetch(g.url+"/signup",Object(f.a)(Object(f.a)({},g.options),{},{method:"POST",body:JSON.stringify(a)})).then((function(e){return e.json()})).then((function(e){201===e.status&&"User Added"===e.message?(n({type:"APPSTATUS",payload:null}),n({type:"LOGIN",payload:!0})):409===e.status?(n({type:"APPSTATUS",payload:e.status}),n({type:"CHANGE_PAGE",payload:"home"}),n({type:"LOGIN",payload:!1})):(n({type:"APPSTATUS",payload:e.status}),n({type:"LOGIN",payload:!1}))})).catch((function(e){n({type:"APPSTATUS",payload:500}),n({type:"LOGIN",payload:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},changePage:y})((function(e){var t=e.signUp,n=e.changePage,c=Object(a.useState)(""),s=Object(S.a)(c,2),r=s[0],i=s[1],o=Object(a.useState)(""),l=Object(S.a)(o,2),u=l[0],d=l[1],j=Object(a.useState)(""),b=Object(S.a)(j,2),h=b[0],p=b[1],O=Object(a.useState)(""),f=Object(S.a)(O,2),m=f[0],g=f[1],x=Object(a.useState)(""),y=Object(S.a)(x,2),v=y[0],T=y[1],k=Object(a.useState)(""),A=Object(S.a)(k,2),P=A[0],C=A[1],E=Object(a.useState)(""),U=Object(S.a)(E,2),I=U[0],G=U[1],L=Object(a.useState)(""),_=Object(S.a)(L,2),D=_[0],F=_[1],H=Object(a.useState)(!1),W=Object(S.a)(H,2),K=W[0],R=W[1],Y=Object(a.useState)(""),M=Object(S.a)(Y,2),B=M[0],J=M[1],z=Object(a.useState)(!1),Z=Object(S.a)(z,2),$=Z[0],V=Z[1],q=Object(a.useState)(!1),X=Object(S.a)(q,2),Q=X[0],ee=X[1];Object(a.useEffect)((function(){d(r?"":"error")}),[r]),Object(a.useEffect)((function(){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(h.toLowerCase())?g(""):g("error")}),[h]),Object(a.useEffect)((function(){v&&v===I?(C(""),F("")):v&&v!==I?(C(""),F("error")):v||(C("error"),F("error"),G(""))}),[v,I]),Object(a.useEffect)((function(){J(!0===K?"":"error")}),[K]),Object(a.useEffect)((function(){V(!!(u||m||P||D||B))}),[u,m,P,D,B]);return Object(N.jsxs)("div",{className:"ui container",children:[Q?Object(N.jsx)(w,{readTandC:function(e){return function(e){!0===e&&R(!0),ee(!1)}(e)}}):null,Object(N.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),$||t({name:r,email:h,pword:v})},children:[Object(N.jsxs)("div",{className:"field ".concat(u),children:[Object(N.jsx)("label",{children:"What should we call you?"}),Object(N.jsx)("input",{placeholder:"Freddles",type:"text",value:r,onChange:function(e){return i(e.target.value)}})]}),Object(N.jsxs)("div",{className:"field ".concat(m),children:[Object(N.jsx)("label",{children:"Your email?"}),Object(N.jsx)("input",{placeholder:"winifred@email.com",type:"email",value:h,onChange:function(e){return p(e.target.value)}})]}),Object(N.jsxs)("div",{className:"field ".concat(P),children:[Object(N.jsx)("label",{children:"Password"}),Object(N.jsx)("input",{placeholder:"Password",type:"password",value:v,onChange:function(e){return T(e.target.value)}})]}),P?null:Object(N.jsxs)("div",{className:"field ".concat(D),children:[Object(N.jsx)("label",{children:"Confirm password"}),Object(N.jsx)("input",{placeholder:"Confirm password",type:"password",value:I,onChange:function(e){return G(e.target.value)}})]}),u||m||P||D?null:Object(N.jsx)("div",{className:"inline field ".concat(B),children:Object(N.jsxs)("div",{className:"ui checkbox",children:[Object(N.jsx)("input",{type:"checkbox",checked:K,onChange:function(e){R(!K)}}),Object(N.jsxs)("label",{children:["I have read and agree to the ",Object(N.jsx)("span",{className:"fakeLink",onClick:function(){return ee(!0)},children:"Terms And Conditions"})]})]})}),$?null:Object(N.jsx)("button",{className:"ui button positive",type:"submit",children:"Sign Up!"}),Object(N.jsx)("button",{className:"ui button red",onClick:function(){return n("login")},children:"Cancel"})]})]})})),C=Object(r.b)(null,{changePage:y})((function(e){var t=e.changePage;return Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("div",{className:"cust_half_height",children:Object(N.jsx)("div",{className:"cust_button",onClick:function(){return t("createSession")},children:"Create A Session"})}),Object(N.jsx)("div",{className:"cust_half_height",children:Object(N.jsx)("div",{className:"cust_button",onClick:function(){return t("viewData")},children:"View Session Data"})})]})})),E=n(214),U=Object(r.b)(null,{changePage:y,createSession:function(e){return function(){var t=Object(m.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"APPSTATUS",payload:"loading"}),e.date=e.date.split("-").reverse().join("-"),t.next=4,fetch(g.url+"/createSession",Object(f.a)(Object(f.a)({},g.options),{},{method:"POST",body:JSON.stringify(e)})).then((function(e){return e.json()})).then((function(e){201===e.status?(n({type:"APPSTATUS",payload:null}),n({type:"CHANGE_PAGE",payload:"home"})):401===e.status?(n({type:"APPSTATUS",payload:e.status}),n({type:"LOGIN",payload:!1})):(n({type:"APPSTATUS",payload:e.status}),n({type:"CHANGE_PAGE",payload:"home"}))})).catch((function(e){n({type:"APPSTATUS",payload:500}),n({type:"LOGIN",payload:!1})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.changePage,n=e.createSession,c=function(e){return e<10?"0"+e:e},s=new Date,r=Object(a.useState)(c(s.getDate())+"-"+c(s.getMonth()+1)+"-"+s.getFullYear()),i=Object(S.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)(""),d=Object(S.a)(u,2),j=d[0],b=d[1],h=Object(a.useState)(""),p=Object(S.a)(h,2),O=p[0],f=p[1],m=Object(a.useState)(""),g=Object(S.a)(m,2),x=g[0],y=g[1],v=Object(a.useState)(""),T=Object(S.a)(v,2),k=T[0],A=T[1],w=Object(a.useState)(""),P=Object(S.a)(w,2),C=P[0],U=P[1],I=Object(a.useState)(""),G=Object(S.a)(I,2),L=G[0],_=G[1],D=Object(a.useState)(""),F=Object(S.a)(D,2),H=F[0],W=F[1],K=Object(a.useState)(""),R=Object(S.a)(K,2),Y=R[0],M=R[1],B=Object(a.useState)(""),J=Object(S.a)(B,2),z=J[0],Z=J[1],$=Object(a.useState)(""),V=Object(S.a)($,2),q=V[0],X=V[1],Q=Object(a.useState)(""),ee=Object(S.a)(Q,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(!1),ce=Object(S.a)(ae,2),se=ce[0],re=ce[1];Object(a.useEffect)((function(){/^\d{2}-\d{2}-\d{4}$/.test(o)?b(""):b("error")}),[o]),Object(a.useEffect)((function(){!isNaN(O)&&O>0&&/^[0-9]{0,3}[.]{0,1}[0-9]{0,3}$/.test(O)?y(""):y("error")}),[O]),Object(a.useEffect)((function(){if((!isNaN(L)||!isNaN(C)||!isNaN(k))&&Number(L)>=0&&Number(C)>=0&&Number(k)>=0&&Number(L)+Number(C)+Number(k)>0&&Number(L)%1===0&&Number(C)%1===0&&Number(k)%1===0){if(Number(C)>59){var e=Number(C)%60,t=(Number(C)-e)/60;_((Number(L)+t).toString()),U(e.toString())}if(Number(k)>59){var n=Number(k)%60,a=(Number(k)-n)/60;U((Number(C)+a).toString()),A(n.toString())}W("")}else W("error")}),[L,C,k]),Object(a.useEffect)((function(){!isNaN(Y)&&Y?Z(""):Z("error")}),[Y]),Object(a.useEffect)((function(){ne(q?"":"error")}),[q]),Object(a.useEffect)((function(){re(!!(j||x||H||z||te))}),[j,x,H,z,te]);return Object(N.jsx)("div",{className:"ui container",children:Object(N.jsxs)("form",{className:"ui form",onSubmit:function(e){e.preventDefault(),se||n({date:o,distance:O,hours:L,mins:C,secs:k,weight:Y,route:q})},children:[Object(N.jsxs)("div",{className:"field ".concat(j),children:[Object(N.jsx)("label",{children:"Session Date"}),Object(N.jsx)(E.DateInput,{name:"date",placeholder:"Date",value:o,autoComplete:"off",onChange:function(e,t){t.name;var n=t.value;l(n)},closable:!0})]}),Object(N.jsxs)("div",{className:"field ".concat(x),children:[Object(N.jsx)("label",{children:"Distance (km.mmm)"}),Object(N.jsx)("input",{type:"number",placeholder:"km.mm",value:O,onChange:function(e){return f(e.target.value)}})]}),Object(N.jsxs)("div",{className:"field time-field ".concat(H),children:[Object(N.jsx)("label",{children:"Session Duration"}),Object(N.jsx)("input",{className:"time-input",type:"number",placeholder:"hh",value:L,onChange:function(e){return _(e.target.value)}}),Object(N.jsx)("span",{children:"h"}),Object(N.jsx)("input",{className:"time-input",type:"number",placeholder:"mm",value:C,onChange:function(e){return U(e.target.value)}}),Object(N.jsx)("span",{children:"m"}),Object(N.jsx)("input",{className:"time-input",type:"number",placeholder:"ss",value:k,onChange:function(e){return A(e.target.value)}}),Object(N.jsx)("span",{children:"s"})]}),Object(N.jsxs)("div",{className:"field ".concat(z),children:[Object(N.jsx)("label",{children:"Weight (kg)"}),Object(N.jsx)("input",{type:"number",placeholder:"kg",value:Y,onChange:function(e){return M(e.target.value)}})]}),Object(N.jsxs)("div",{className:"field ".concat(te),children:[Object(N.jsx)("label",{children:"Route"}),Object(N.jsx)("input",{placeholder:"JBBL and back",value:q,onChange:function(e){return X(e.target.value)}})]}),!1===se?Object(N.jsx)("button",{className:"ui button positive",type:"submit",children:"Add Session!"}):null,Object(N.jsx)("button",{className:"ui button red",onClick:function(){return t("login")},children:"Cancel"})]})})})),I=n(471),G=n(472),L=n(476),_=n(102),D=n(232),F=n(233),H=n(235),W=Object(r.b)((function(e){return{sessions:e.sessions,fetchAll:e.fetchAll}}),{getMonthSessions:function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"APPSTATUS",payload:"loading"}),e.next=3,fetch(g.url+"/getMonthSessions",Object(f.a)(Object(f.a)({},g.options),{},{method:"GET"})).then((function(e){return e.json()})).then((function(e){200===e.status?(t({type:"APPSTATUS",payload:null}),t({type:"SET_SESSIONS",payload:e.sessions})):404===e.status?(t({type:"APPSTATUS",payload:e.status}),t({type:"SET_SESSIONS",payload:null})):401===e.status?(t({type:"APPSTATUS",payload:e.status}),t({type:"LOGIN",payload:!1})):(t({type:"APPSTATUS",payload:e.status}),t({type:"SET_SESSIONS",payload:null}))})).catch((function(e){t({type:"APPSTATUS",payload:500}),t({type:"LOGIN",payload:!1})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},getAllSessions:function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"APPSTATUS",payload:"loading"}),t({type:"FETCHCHANGE",payload:!1}),e.next=4,fetch(g.url+"/getAllSessions",Object(f.a)(Object(f.a)({},g.options),{},{method:"GET"})).then((function(e){return e.json()})).then((function(e){200===e.status?(t({type:"APPSTATUS",payload:null}),t({type:"SET_SESSIONS",payload:e.sessions})):401===e.status?(t({type:"APPSTATUS",payload:e.status}),t({type:"LOGIN",payload:!1})):(t({type:"APPSTATUS",payload:e.status}),t({type:"SET_SESSIONS",payload:null}))})).catch((function(e){t({type:"APPSTATUS",payload:500}),t({type:"LOGIN",payload:!1})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.sessions,n=e.getMonthSessions,c=e.getAllSessions,s=e.fetchAll,r=Object(a.useState)([]),i=Object(S.a)(r,2),o=i[0],l=i[1],u=Object(a.useState)("speed"),d=Object(S.a)(u,2),j=d[0],b=d[1],h=Object(a.useState)("month"),p=Object(S.a)(h,2),O=p[0],f=p[1];Object(a.useEffect)((function(){"month"===O?n():c()}),[n,c,O]),Object(a.useEffect)((function(){!0===s&&f("all")}),[s]),Object(a.useEffect)((function(){t&&t.forEach((function(e){e.unix=new Date(e.date).getTime()})),l(t)}),[t]);var m=function(e){var t=new Date(e);return[t.getDate(),t.getMonth()+1,t.getFullYear()].join("-")},g=function(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60);return"".concat(t,"h ").concat(n,"m")};return o&&0!==o.length?Object(N.jsxs)("div",{className:"ui container data",children:[Object(N.jsx)("h2",{children:"Your session data:"}),function(e){var t,n={dataKey:"time",label:"Time (s)",tickCount:3,tickFormatter:function(e){return g(e)}};switch(e){case"time":t=n;break;case"speed":t={dataKey:"speed",label:"Avg. Speed (km/h)",tickCount:5,tickFormatter:function(e){return e}};break;case"weight":t={dataKey:"weight",label:"Weight (kg)",tickCount:3,tickFormatter:function(e){return e}};break;default:t=n}var a=[o[0].unix,o[o.length-1].unix];return Object(N.jsx)(I.a,{width:"100%",height:430,children:Object(N.jsxs)(G.a,{data:o,margin:{top:10,right:10,bottom:100,left:10},children:[Object(N.jsx)(L.a,{}),Object(N.jsx)(_.a,{content:function(e){var t=e.active,n=e.payload;if(e.label,t&&n.length){var a=n[0].payload;return Object(N.jsxs)("div",{className:"custom-tooltip",children:[Object(N.jsx)("p",{className:"label",children:"Date: ".concat(m(a.unix))}),Object(N.jsx)("p",{className:"desc",children:"Distance: ".concat(a.distance,"km")}),Object(N.jsx)("p",{className:"desc",children:g(a.time)}),Object(N.jsx)("p",{className:"desc",children:"Avg. Speed: ".concat(a.speed,"km/h")}),Object(N.jsx)("p",{className:"desc",children:"Route: ".concat(a.route)})]})}return null}}),Object(N.jsx)(D.a,{dataKey:"unix",scale:"time",domain:["auto","auto"],tickFormatter:function(e){return m(e)},ticks:[a[0],a[1]],interval:"preserveStartEnd",type:"number",dy:30,angle:45,padding:{left:10,right:10}}),Object(N.jsx)(F.a,{padding:{top:10,bottom:10},yAxisId:"left",orientation:"left",type:"number",domain:["auto","auto"],interval:"preserveStartEnd",label:{value:"Distance (km)",angle:-90,position:"left",fill:"rgba(0, 0, 255, 1)"}}),Object(N.jsx)(H.a,{dataKey:"distance",yAxisId:"left",type:"monotone",stroke:"#0000FF"}),Object(N.jsx)(F.a,{padding:{top:10,bottom:10},yAxisId:"right",orientation:"right",type:"number",domain:["auto","auto"],tickCount:t.tickCount,tickFormatter:function(e){return t.tickFormatter(e)},label:{value:t.label,angle:90,position:"right",fill:"rgba(255, 0, 0, 1"}}),Object(N.jsx)(H.a,{dataKey:t.dataKey,yAxisId:"right",type:"monotone",stroke:"#FF0000"})]})})}(j),function(){var e=function(e){return e===j?"blue":"green"};return Object(N.jsxs)("div",{className:"graph-bottom",children:[Object(N.jsxs)("div",{className:"graph-buttons",children:[Object(N.jsx)("button",{className:"ui button ".concat(e("speed")),onClick:function(e){return b("speed")},children:"Speed"}),Object(N.jsx)("button",{className:"ui button ".concat(e("time")),onClick:function(e){return b("time")},children:"Time"}),Object(N.jsx)("button",{className:"ui button ".concat(e("weight")),onClick:function(e){return b("weight")},children:"Weight"})]}),Object(N.jsx)("div",{children:"month"===O?Object(N.jsx)("button",{className:"ui button green",onClick:function(){return f("all")},children:"Show All"}):Object(N.jsx)("button",{className:"ui button green",onClick:function(){return f("month")},children:"Show 30 days"})})]})}()]}):null})),K=function(){return Object(N.jsx)("div",{className:"container status",children:Object(N.jsxs)("div",{className:"ui segment",children:[Object(N.jsxs)("div",{id:"loading",children:[Object(N.jsxs)("div",{id:"loading-pump",children:[Object(N.jsx)("div",{id:"loading-pump-body"}),Object(N.jsx)("div",{id:"loading-pump-handle"}),Object(N.jsx)("div",{id:"loading-pump-base"}),Object(N.jsx)("svg",{id:"loading-pump-hose",width:"345",height:"100",children:Object(N.jsx)("path",{d:"M -5 5 C 100 100, 100 80, 150 70 S 320 20, 340 90",stroke:"red",fill:"transparent",strokeWidth:"10"})})]}),Object(N.jsxs)("div",{id:"loading-wheel",className:"wheel",children:[Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes1"}),Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes2"}),Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes3"}),Object(N.jsx)("div",{className:"logo-spokes",id:"logo-spokes4"}),Object(N.jsxs)("div",{id:"loading-leak",children:[Object(N.jsx)("div",{className:"loading-leak-air",id:"loading-leak1"}),Object(N.jsx)("div",{className:"loading-leak-air",id:"loading-leak2"}),Object(N.jsx)("div",{className:"loading-leak-air",id:"loading-leak3"})]})]})]}),Object(N.jsxs)("div",{className:"status-field",children:[Object(N.jsxs)("h2",{children:["Loading",Object(N.jsx)("span",{className:"loading-dot",id:"loading-dot1",children:"."}),Object(N.jsx)("span",{className:"loading-dot",id:"loading-dot2",children:"."}),Object(N.jsx)("span",{className:"loading-dot",id:"loading-dot3",children:"."})]}),Object(N.jsx)("h4",{children:"This might take a few seconds for the server to start..."})]})]})})},R=Object(r.b)(null,{changePage:y,fetchChange:function(e){return function(t){t({type:"FETCHCHANGE",payload:e})}},clearError:v})((function(e){var t=e.clearError,n=e.changePage,a=e.page,c=e.fetchChange;return Object(N.jsx)("div",{className:"container status",onClick:function(e){e.preventDefault(),"fakeLink"!==e.target.classList[0]&&(t(),"viewData"===a&&n("home"))},children:Object(N.jsxs)("div",{className:"ui segment",children:[Object(N.jsx)("div",{className:"status-field",children:Object(N.jsx)("h2",{children:"Womp womp!"})}),"viewData"===a?Object(N.jsxs)("div",{className:"status-field",children:[Object(N.jsx)("h2",{children:"There are no sessions to view..."}),Object(N.jsxs)("h2",{children:[Object(N.jsx)("span",{className:"fakeLink",onClick:function(){return n("createSession")},children:"Add a new session"}),Object(N.jsx)("br",{}),"or",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"fakeLink",onClick:function(){return c(!0)},children:"get all session data"})]})]}):null,Object(N.jsx)("div",{className:"status-field",children:Object(N.jsx)("p",{children:"*touch anywhere else to dismiss...*"})})]})})})),Y=Object(r.b)(null,{clearError:v,changePage:y})((function(e){var t=e.clearError,n=e.changePage,a=e.status;return Object(N.jsx)("div",{className:"container status",onClick:function(e){e.preventDefault(),n("home"),t()},children:Object(N.jsxs)("div",{className:"ui segment",children:[Object(N.jsx)("div",{className:"status-field",children:Object(N.jsx)("h2",{children:"Womp womp!"})}),Object(N.jsx)("div",{className:"status-field",children:Object(N.jsx)("h2",{children:function(){switch(a){case 401:return"Login Details Incorrect :(";case 406:return"Unacceptable Inputs :(";case 409:return"Duplication...";case 500:return"It looks like the server caught fire :(";default:return"Non-specific errors :("}}()})}),Object(N.jsx)("div",{className:"status-field",children:Object(N.jsx)("p",{children:"*touch anywhere to dismiss...*"})})]})})})),M=Object(r.b)((function(e){return{appStatus:e.appStatus,page:e.page}}))((function(e){var t=e.appStatus,n=e.page;switch(t){case"loading":return Object(N.jsx)(K,{});case 404:return Object(N.jsx)(R,{page:n});default:return Object(N.jsx)(Y,{status:t})}})),B=Object(r.b)(null,{changePage:y})((function(e){var t=e.changePage;return Object(N.jsxs)("div",{className:"ui container about",children:[Object(N.jsx)("h2",{children:"About Cycle Tracker"}),Object(N.jsx)("p",{children:"Hi there, and welcome to this app designed to track you cycling and fitness progression."}),Object(N.jsx)("p",{children:'After you have created and account and/or logged in, click "Create A Session" to add some data.'}),Object(N.jsx)("p",{children:'You will need to enter the date of your session, the distance you rode, the session duration in hours, minutes and seconds, your weight, and a quick blurb about the route you took (eg. "Work and back").'}),Object(N.jsx)("p",{children:'Once you have entered at least one session, you can go back to the main screen and click "View Session Data" to see a graph of your sessions over time.'}),Object(N.jsx)("p",{children:'The default setting is to see the last 30 days worth of sessions, but you can see all of your data by clicking "Show All".'}),Object(N.jsx)("p",{children:"The default graph is time on the X-axis, Distance on the left Y-axis (blue), and Average Speed on the right Y-axis (red). You can change right Y-axis to show your total time or weight progression over time instead of speed."}),Object(N.jsx)("hr",{}),Object(N.jsxs)("p",{children:[Object(N.jsx)("span",{children:"This App was created by "}),Object(N.jsx)("a",{href:"mailto:sam@iamasamwich.com",target:"_blank",rel:"noreferrer",children:"Sam Humphreys"}),Object(N.jsx)("span",{children:", using "}),Object(N.jsx)("a",{href:"https://reactjs.org/",target:"_blank",rel:"noreferrer",children:"React"}),Object(N.jsx)("span",{children:" and "}),Object(N.jsx)("a",{href:"https://redux.js.org",target:"_blank",rel:"noreferrer",children:"Redux"}),Object(N.jsx)("span",{children:", "}),Object(N.jsx)("a",{href:"https://semantic-ui.com/",target:"_blank",rel:"noreferrer",children:"Semantic UI"}),Object(N.jsx)("span",{children:", and "}),Object(N.jsx)("a",{href:"https://recharts.org",target:"_blank",rel:"noreferrer",children:"Recharts"})]}),Object(N.jsx)("button",{className:"ui button green",onClick:function(){return t("home")},children:"Home"})]})})),J=Object(r.b)((function(e){return{login:e.login,page:e.page,appStatus:e.appStatus}}),{ping:function(){return function(){var e=Object(m.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(g.url+"/ping",Object(f.a)(Object(f.a)({},g.options),{},{method:"GET"})).then((function(e){return e.json()})).then((function(e){200===e.status&&"ok"===e.message?t({type:"LOGIN",payload:!0}):t({type:"LOGIN",payload:!1})})).catch((function(e){t({type:"APPSTATUS",payload:500}),t({type:"LOGIN",payload:!1})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},changePage:y,logout:x})((function(e){var t=e.login,n=e.page,c=e.appStatus,s=e.ping;Object(a.useEffect)((function(){s()}),[s]);return Object(N.jsxs)(a.Fragment,{children:[Object(N.jsx)(T,{}),null!==c?Object(N.jsx)(M,{}):null,t?function(){switch(n){case"home":return Object(N.jsx)(C,{});case"createSession":return Object(N.jsx)(U,{});case"viewData":return Object(N.jsx)(W,{});case"about":return Object(N.jsx)(B,{});default:return Object(N.jsx)(C,{})}}():function(){switch(n){case"signup":return Object(N.jsx)(P,{});case"about":return Object(N.jsx)(B,{});default:return Object(N.jsx)(A,{})}}()]})})),z=Object(i.d)(h,Object(i.a)(o.a));console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),s.a.render(Object(N.jsx)(r.a,{store:z,children:Object(N.jsx)(J,{})}),document.querySelector("#root"))}},[[427,1,2]]]);
//# sourceMappingURL=main.faae81ed.chunk.js.map