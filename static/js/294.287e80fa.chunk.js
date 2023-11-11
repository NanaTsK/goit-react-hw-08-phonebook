"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[294],{8294:function(e,n,t){t.r(n),t.d(n,{default:function(){return ve}});var r=t(4165),o=t(5861),i=t(8036),a=t(9434),u="NOT_FOUND";var c=function(e,n){return e===n};function s(e,n){var t="object"===typeof n?n:{equalityCheck:n},r=t.equalityCheck,o=void 0===r?c:r,i=t.maxSize,a=void 0===i?1:i,s=t.resultEqualityCheck,l=function(e){return function(n,t){if(null===n||null===t||n.length!==t.length)return!1;for(var r=n.length,o=0;o<r;o++)if(!e(n[o],t[o]))return!1;return!0}}(o),f=1===a?function(e){var n;return{get:function(t){return n&&e(n.key,t)?n.value:u},put:function(e,t){n={key:e,value:t}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(l):function(e,n){var t=[];function r(e){var r=t.findIndex((function(t){return n(e,t.key)}));if(r>-1){var o=t[r];return r>0&&(t.splice(r,1),t.unshift(o)),o.value}return u}return{get:r,put:function(n,o){r(n)===u&&(t.unshift({key:n,value:o}),t.length>e&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(a,l);function p(){var n=f.get(arguments);if(n===u){if(n=e.apply(null,arguments),s){var t=f.getEntries(),r=t.find((function(e){return s(e.value,n)}));r&&(n=r.value)}f.put(arguments,n)}return n}return p.clearCache=function(){return f.clear()},p}function l(e){var n=Array.isArray(e[0])?e[0]:e;if(!n.every((function(e){return"function"===typeof e}))){var t=n.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return n}function f(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i,a=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=u,f=s.memoizeOptions,p=void 0===f?t:f,v=Array.isArray(p)?p:[p],d=l(r),h=e.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(v)),m=e((function(){for(var e=[],n=d.length,t=0;t<n;t++)e.push(d[t].apply(null,arguments));return i=h.apply(null,e)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),m};return o}var p=f(s),v=function(e){return e.filter.filter},d=function(e){return e.contacts.items},h=function(e){return e.contacts.error},m=function(e){return e.contacts.isLoading},x=p([d,v],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))})),y=t(5313),g=t(5518),Z=t(6487),b=(0,Z.zo)("h4")((function(){return{color:"#424D55",textAlign:"center",opacity:"0.6"}})),j=(0,Z.zo)(b)((function(){return{opacity:"1",color:"#4db6ac"}})),w=t(184),k=function(e){var n=e.children;return(0,w.jsx)(b,{children:n})},C=function(e){var n=e.children;return(0,w.jsx)(j,{children:n})},S=t(4554),z=t(890),A=t(4942),M=t(3366),N=t(7462),E=t(2791),P=t(3733),R=t(2466),T=t(4419),_=t(1217),F=t(3457),I=t(7078),O=t(8519),D=t(5080),q=t(1184),G=t(5682),L=["component","direction","spacing","divider","children","className","useFlexGap"],V=(0,D.Z)(),H=(0,F.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}});function B(e){return(0,I.Z)({props:e,name:"MuiStack",defaultTheme:V})}function $(e,n){var t=E.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,o){return e.push(r),o<t.length-1&&e.push(E.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var K=function(e){var n=e.ownerState,t=e.theme,r=(0,N.Z)({display:"flex",flexDirection:"column"},(0,q.k9)({theme:t},(0,q.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var o=(0,G.hB)(t),i=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof n.spacing&&null!=n.spacing[t]||"object"===typeof n.direction&&null!=n.direction[t])&&(e[t]=!0),e}),{}),a=(0,q.P$)({values:n.direction,base:i}),u=(0,q.P$)({values:n.spacing,base:i});"object"===typeof a&&Object.keys(a).forEach((function(e,n,t){if(!a[e]){var r=n>0?a[t[n-1]]:"column";a[e]=r}}));r=(0,R.Z)(r,(0,q.k9)({theme:t},u,(function(e,t){return n.useFlexGap?{gap:(0,G.NA)(o,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,A.Z)({},"margin".concat((r=t?a[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,G.NA)(o,e))};var r})))}return r=(0,q.dt)(t.breakpoints,r)};var U=t(6934),W=t(1402),Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.createStyledComponent,t=void 0===n?H:n,r=e.useThemeProps,o=void 0===r?B:r,i=e.componentName,a=void 0===i?"MuiStack":i,u=function(){return(0,T.Z)({root:["root"]},(function(e){return(0,_.Z)(a,e)}),{})},c=t(K),s=E.forwardRef((function(e,n){var t=o(e),r=(0,O.Z)(t),i=r.component,a=void 0===i?"div":i,s=r.direction,l=void 0===s?"column":s,f=r.spacing,p=void 0===f?0:f,v=r.divider,d=r.children,h=r.className,m=r.useFlexGap,x=void 0!==m&&m,y=(0,M.Z)(r,L),g={direction:l,spacing:p,useFlexGap:x},Z=u();return(0,w.jsx)(c,(0,N.Z)({as:a,ownerState:g,ref:n,className:(0,P.Z)(Z.root,h)},y,{children:v?$(d,v):d}))}));return s}({createStyledComponent:(0,U.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return n.root}}),useThemeProps:function(e){return(0,W.Z)({props:e,name:"MuiStack"})}}),J=Y,Q=t(7621),X=t(3044),ee=t(3400),ne=t(5218),te=t(7665),re=t(1273),oe=t(3622),ie=function(){var e=(0,a.I0)();return(0,w.jsx)(S.Z,{mb:"10px",children:(0,w.jsx)(te.Z,{label:"\ud83d\udd0dSearch contact",placeholder:"Enter name",sx:(0,oe.y)("primary.light"),onChange:function(n){var t=n.target.value;e((0,re.T)(t))},fullWidth:!0})})},ae=function(){var e=(0,a.I0)(),n=(0,a.v9)(d),t=(0,a.v9)(x),u=(0,a.v9)(h),c=(0,a.v9)(m),s=(0,a.v9)(v),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(t,o){return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e((0,y.GK)(t)).unwrap();case 3:ne.ZP.success("".concat(o," deleted!")),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),ne.ZP.error("Something went wrong. Error: ".concat(n.t0,"."));case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,w.jsxs)(S.Z,{sx:{width:"100%",padding:"40px 0"},children:[(0,w.jsx)(z.Z,{variant:"h5",mb:"10px",sx:{textAlign:"center",fontWeight:"600",opacity:"0.6"},children:"Contacts"}),(0,w.jsx)(ie,{}),c&&(0,w.jsx)(g.a,{}),!c&&t.length>0&&(0,w.jsx)(J,{spacing:2,children:t.map((function(e){var n,t=e.id,r=e.name,o=e.number;return(0,w.jsxs)(Q.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[(0,w.jsx)(X.Z,{sx:{bgcolor:"primary.light"},children:null===r||void 0===r||null===(n=r.at(0))||void 0===n?void 0:n.toUpperCase()}),(0,w.jsxs)(z.Z,{variant:"body",children:[r,": ",o]}),(0,w.jsx)(ee.Z,{"aria-label":"delete",size:"large",color:"error",onClick:function(){l(t,r)},children:(0,w.jsx)(i.Z,{fontSize:"inherit"})})]},t)}))}),!u&&!c&&0===n.length&&(0,w.jsx)(k,{children:"Your contact list is empty!"}),s&&!c&&0===t.length&&(0,w.jsxs)(C,{children:['"',s,'" is not in your contact list.']})]})},ue=t(9439),ce=t(4294),se=t(675),le="",fe="",pe=function(){var e=(0,E.useState)(le),n=(0,ue.Z)(e,2),t=n[0],i=n[1],u=(0,E.useState)(fe),c=(0,ue.Z)(u,2),s=c[0],l=c[1],f=(0,a.I0)(),p=(0,a.v9)(d),v=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!p.some((function(e){return e.name===t}))){e.next=5;break}return alert("".concat(t," is already in contacts!")),h(),e.abrupt("return");case 5:return e.prev=5,e.next=8,f((0,y.uK)({name:t,number:s})).unwrap();case 8:ne.ZP.success("".concat(t," added!")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),ne.ZP.error("Something went wrong. Error: ".concat(e.t0,"."));case 14:h();case 15:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){i(le),l(fe)};return(0,w.jsxs)(S.Z,{component:"form",sx:{"& > :not(style)":{marginTop:"10px",width:"100%"}},noValidate:!0,onSubmit:v,children:[(0,w.jsx)(te.Z,{required:!0,label:"Name",placeholder:"\ud83e\uddd1   Alex Alex",sx:(0,oe.y)("primary.light"),value:t,onChange:function(e){var n=e.target;i(n.value)}}),(0,w.jsx)(te.Z,{required:!0,label:"Number",placeholder:"\ud83d\udcde   222-22-22",sx:(0,oe.y)("primary.light"),type:"tel",value:s,onChange:function(e){var n=e.target;l(n.value)}}),(0,w.jsx)(ce.Z,{variant:"outlined",type:"submit",size:"large",startIcon:(0,w.jsx)(se.Z,{}),children:"Add contact"})]})},ve=function(){var e=(0,a.I0)();return(0,E.useEffect)((function(){e((0,y.CL)())}),[e]),(0,w.jsxs)("section",{children:[(0,w.jsx)(pe,{}),(0,w.jsx)(ae,{})]})}},8036:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)([(0,i.jsx)("path",{d:"M8 9h8v10H8z",opacity:".3"},"0"),(0,i.jsx)("path",{d:"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"},"1")],"DeleteTwoTone");n.Z=a},675:function(e,n,t){var r=t(4836);n.Z=void 0;var o=r(t(5649)),i=t(184),a=(0,o.default)((0,i.jsx)("path",{d:"M13 8c0-2.21-1.79-4-4-4S5 5.79 5 8s1.79 4 4 4 4-1.79 4-4zm2 2v2h3v3h2v-3h3v-2h-3V7h-2v3h-3zM1 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4z"}),"PersonAddAlt1");n.Z=a},7621:function(e,n,t){t.d(n,{Z:function(){return x}});var r=t(7462),o=t(3366),i=t(2791),a=t(3733),u=t(4419),c=t(6934),s=t(1402),l=t(5527),f=t(5878),p=t(1217);function v(e){return(0,p.Z)("MuiCard",e)}(0,f.Z)("MuiCard",["root"]);var d=t(184),h=["className","raised"],m=(0,c.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),x=i.forwardRef((function(e,n){var t=(0,s.Z)({props:e,name:"MuiCard"}),i=t.className,c=t.raised,l=void 0!==c&&c,f=(0,o.Z)(t,h),p=(0,r.Z)({},t,{raised:l}),x=function(e){var n=e.classes;return(0,u.Z)({root:["root"]},v,n)}(p);return(0,d.jsx)(m,(0,r.Z)({className:(0,a.Z)(x.root,i),elevation:l?8:void 0,ref:n,ownerState:p},f))}))}}]);
//# sourceMappingURL=294.287e80fa.chunk.js.map