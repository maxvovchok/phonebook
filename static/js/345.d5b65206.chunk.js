"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[345],{1345:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var o=n(9439),a=n(2791),r=n(9434),i=n(9273),s=n(1614),l=n(1123),c=n(7645),d=n(3466),u=n(3400),p=n(6151),v=n(3710),m=n(9569),h="RegisterForm_form__JiBti",Z=n(184),f=function(){var e=(0,a.useState)(""),t=(0,o.Z)(e,2),n=t[0],f=t[1],g=(0,a.useState)(""),b=(0,o.Z)(g,2),z=b[0],x=b[1],y=(0,a.useState)(""),S=(0,o.Z)(y,2),w=S[0],R=S[1],j=(0,a.useState)(!1),C=(0,o.Z)(j,2),P=C[0],E=C[1],M=(0,r.I0)(),k=function(e){var t=e.target,n=t.name,o=t.value;switch(n){case"name":return f(o);case"email":return x(o);case"password":return R(o);default:return}};return(0,Z.jsx)(s.Z,{children:(0,Z.jsxs)("form",{onSubmit:function(e){e.preventDefault(),M((0,i.z2)({name:n,email:z,password:w})),f(""),x(""),R("")},className:h,children:[(0,Z.jsx)(l.Z,{variant:"h6",children:"Register"}),(0,Z.jsx)(c.Z,{label:"Name",variant:"outlined",name:"name",value:n,onChange:k,required:!0}),(0,Z.jsx)(c.Z,{label:"Email",variant:"outlined",type:"email",name:"email",value:z,onChange:k,required:!0}),(0,Z.jsx)(c.Z,{label:"Password",variant:"outlined",type:P?"text":"password",name:"password",value:w,onChange:k,required:!0,InputProps:{endAdornment:(0,Z.jsx)(d.Z,{position:"end",children:(0,Z.jsx)(u.Z,{onClick:function(){E((function(e){return!e}))},children:P?(0,Z.jsx)(v.Z,{}):(0,Z.jsx)(m.Z,{})})})}}),(0,Z.jsx)(p.Z,{variant:"contained",color:"primary",type:"submit",children:"Sign Up"})]})})},g=function(){return(0,Z.jsx)(f,{})}},3710:function(e,t,n){var o=n(9201),a=n(184);t.Z=(0,o.Z)((0,a.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,t,n){var o=n(9201),a=n(184);t.Z=(0,o.Z)((0,a.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3400:function(e,t,n){n.d(t,{Z:function(){return x}});var o=n(4942),a=n(3366),r=n(7462),i=n(2791),s=n(3733),l=n(4419),c=n(2065),d=n(6934),u=n(1402),p=n(637),v=n(4036),m=n(5878),h=n(7225);function Z(e){return(0,h.Z)("MuiIconButton",e)}var f=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),g=n(184),b=["edge","children","className","color","disabled","disableFocusRipple","size"],z=(0,d.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"default"!==n.color&&t["color".concat((0,v.Z)(n.color))],n.edge&&t["edge".concat((0,v.Z)(n.edge))],t["size".concat((0,v.Z)(n.size))]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.activeChannel," / ").concat(t.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(function(e){var t,n=e.theme,a=e.ownerState,i=null==(t=(n.vars||n).palette)?void 0:t[a.color];return(0,r.Z)({},"inherit"===a.color&&{color:"inherit"},"inherit"!==a.color&&"default"!==a.color&&(0,r.Z)({color:null==i?void 0:i.main},!a.disableRipple&&{"&:hover":(0,r.Z)({},i&&{backgroundColor:n.vars?"rgba(".concat(i.mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,c.Fq)(i.main,n.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===a.size&&{padding:5,fontSize:n.typography.pxToRem(18)},"large"===a.size&&{padding:12,fontSize:n.typography.pxToRem(28)},(0,o.Z)({},"&.".concat(f.disabled),{backgroundColor:"transparent",color:(n.vars||n).palette.action.disabled}))})),x=i.forwardRef((function(e,t){var n=(0,u.Z)({props:e,name:"MuiIconButton"}),o=n.edge,i=void 0!==o&&o,c=n.children,d=n.className,p=n.color,m=void 0===p?"default":p,h=n.disabled,f=void 0!==h&&h,x=n.disableFocusRipple,y=void 0!==x&&x,S=n.size,w=void 0===S?"medium":S,R=(0,a.Z)(n,b),j=(0,r.Z)({},n,{edge:i,color:m,disabled:f,disableFocusRipple:y,size:w}),C=function(e){var t=e.classes,n=e.disabled,o=e.color,a=e.edge,r=e.size,i={root:["root",n&&"disabled","default"!==o&&"color".concat((0,v.Z)(o)),a&&"edge".concat((0,v.Z)(a)),"size".concat((0,v.Z)(r))]};return(0,l.Z)(i,Z,t)}(j);return(0,g.jsx)(z,(0,r.Z)({className:(0,s.Z)(C.root,d),centerRipple:!0,focusRipple:!y,disabled:f,ref:t,ownerState:j},R,{children:c}))}))},3466:function(e,t,n){n.d(t,{Z:function(){return S}});var o=n(4942),a=n(3366),r=n(7462),i=n(2791),s=n(3733),l=n(4419),c=n(4036),d=n(1123),u=n(3840),p=n(2930),v=n(6934),m=n(5878),h=n(7225);function Z(e){return(0,h.Z)("MuiInputAdornment",e)}var f,g=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),b=n(1402),z=n(184),x=["children","className","component","disablePointerEvents","disableTypography","position","variant"],y=(0,v.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["position".concat((0,c.Z)(n.position))],!0===n.disablePointerEvents&&t.disablePointerEvents,t[n.variant]]}})((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(t.vars||t).palette.action.active},"filled"===n.variant&&(0,o.Z)({},"&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),S=i.forwardRef((function(e,t){var n=(0,b.Z)({props:e,name:"MuiInputAdornment"}),o=n.children,v=n.className,m=n.component,h=void 0===m?"div":m,g=n.disablePointerEvents,S=void 0!==g&&g,w=n.disableTypography,R=void 0!==w&&w,j=n.position,C=n.variant,P=(0,a.Z)(n,x),E=(0,p.Z)()||{},M=C;C&&E.variant,E&&!M&&(M=E.variant);var k=(0,r.Z)({},n,{hiddenLabel:E.hiddenLabel,size:E.size,disablePointerEvents:S,position:j,variant:M}),I=function(e){var t=e.classes,n=e.disablePointerEvents,o=e.hiddenLabel,a=e.position,r=e.size,i=e.variant,s={root:["root",n&&"disablePointerEvents",a&&"position".concat((0,c.Z)(a)),i,o&&"hiddenLabel",r&&"size".concat((0,c.Z)(r))]};return(0,l.Z)(s,Z,t)}(k);return(0,z.jsx)(u.Z.Provider,{value:null,children:(0,z.jsx)(y,(0,r.Z)({as:h,ownerState:k,className:(0,s.Z)(I.root,v),ref:t},P,{children:"string"!==typeof o||R?(0,z.jsxs)(i.Fragment,{children:["start"===j?f||(f=(0,z.jsx)("span",{className:"notranslate",children:"\u200b"})):null,o]}):(0,z.jsx)(d.Z,{color:"text.secondary",children:o})}))})}))}}]);
//# sourceMappingURL=345.d5b65206.chunk.js.map