(self.webpackChunkfilmes=self.webpackChunkfilmes||[]).push([[3528],{86961:(I,h,e)=>{var t=e(13578),u=e(27138),l="[object Boolean]";function p(i){return i===!0||i===!1||u(i)&&t(i)==l}I.exports=p},92249:(I,h,e)=>{var t=e(37997);function u(l){return t(l)&&l!=+l}I.exports=u},37997:(I,h,e)=>{var t=e(13578),u=e(27138),l="[object Number]";function p(i){return typeof i=="number"||u(i)&&t(i)==l}I.exports=p},76368:(I,h,e)=>{"use strict";e.d(h,{D:()=>i});var t=e(74081),u=e(93415),l=e(67621);function p(A,R,E){if(!A||!R||!E)return{display:"none"};const{x:C,y:M}=E;return{transform:`translate(${C}px, ${M}px)`}}const i=({renderItem:A})=>{const{itemType:R,isDragging:E,item:C,initialOffset:M,currentOffset:d,mouseOffset:K}=(0,l.useDragLayer)(f=>({item:f.getItem(),itemType:f.getItemType(),initialOffset:f.getInitialSourceClientOffset(),currentOffset:f.getSourceClientOffset(),isDragging:f.isDragging(),mouseOffset:f.getClientOffset()}));return E?(0,t.jsx)(u.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:(0,t.jsx)(u.x,{style:p(M,d,K),children:A({type:R,item:C})})}):null}},52058:(I,h,e)=>{"use strict";e.d(h,{a:()=>T,b:()=>P,c:()=>W,d:()=>y,g:()=>f,i:()=>O,m:()=>$,s:()=>U,u:()=>D});var t=e(27279),u=e(67621),l=e(57150),p=e(47599),i=e(15530),A=e(98934),R=e(86961),E=e(10124),C=e(92249),M=e(51527),d=e(47853);const f=r=>`content-manager.${r}`;(0,t.createContext)();const _=(r,o,{onCancel:s,onDropItem:n,onGrabItem:c,onMoveItem:m})=>{const[a,x]=(0,t.useState)(!1),L=j=>{a&&(j==="UP"?m(o-1,o):j==="DOWN"&&m(o+1,o))},b=()=>{a?(n&&n(o),x(!1)):(c&&c(o),x(!0))},g=()=>{a&&(x(!1),s&&s(o))};return j=>{if(r&&!(j.key==="Tab"&&!a))switch(j.preventDefault(),j.key){case" ":case"Enter":b();break;case"Escape":g();break;case"ArrowDown":case"ArrowRight":L("DOWN");break;case"ArrowUp":case"ArrowLeft":L("UP");break}}},D=(r,{type:o="STRAPI_DND",index:s,item:n={},onStart:c,onEnd:m,onGrabItem:a,onDropItem:x,onCancel:L,onMoveItem:b,dropSensitivity:g="regular"})=>{const B=(0,t.useRef)(null),[{handlerId:j},Z]=(0,u.useDrop)({accept:o,collect(w){return{handlerId:w.getHandlerId()}},hover(w,Q){if(!B.current)return;const z=w.index,F=s;if(z!==F){if(g==="regular"){const J=B.current.getBoundingClientRect(),H=(J.bottom-J.top)/2,V=Q.getClientOffset().y-J.top;if(z<F&&V<H||z>F&&V>H)return}b(F,z),w.index=F}}}),[{isDragging:v},X,Y]=(0,u.useDrag)({type:o,item(){c&&c();const{width:w}=B.current?.getBoundingClientRect()??{};return{index:s,width:w,...n}},end(){m&&m()},canDrag:r,isDragging:n.id?w=>n.id===w.getItem().id:void 0,collect:w=>({isDragging:w.isDragging()})}),G=_(r,s,{onGrabItem:a,onDropItem:x,onCancel:L,onMoveItem:b});return[{handlerId:j,isDragging:v,handleKeyDown:G},B,Z,X,Y]},y=()=>r=>r["content-manager_app"]||p.J,P=()=>(0,l.P1)(y(),r=>({collectionTypeLinks:r.collectionTypeLinks,singleTypeLinks:r.singleTypeLinks})),$=()=>(0,l.P1)(y(),({components:r,models:o})=>({schemas:[...r,...o]})),U=(0,l.P1)(y(),r=>r.fieldSizes),k=(r,o)=>{typeof r=="function"?r(o):r!=null&&(r.current=o)},W=(...r)=>o=>r.forEach(s=>k(s,o));function O(r){return["integer","biginteger","decimal","float","number"].includes(r)}d.kM(d.nK,"defined",function(){return this.test("defined",i.I0.required,r=>r!==void 0)}),d.kM(d.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",i.I0.min,o=>E(o)?!0:o.length>=r)}),d.kM(d.Z_,"isInferior",function(r,o){return this.test("isInferior",r,function(s){return!s||Number.isNaN(M(s))?!0:M(o)>=M(s)})}),d.kM(d.Z_,"isSuperior",function(r,o){return this.test("isSuperior",r,function(s){return!s||Number.isNaN(M(s))?!0:M(s)>=M(o)})});const S=r=>A(r,["attributes"],{}),T=(r,{components:o},s={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1,isJSONTestDisabled:!1})=>{const n=S(r);return d.Ry().shape(Object.keys(n).reduce((c,m)=>{const a=n[m];if(a.type!=="relation"&&a.type!=="component"&&a.type!=="dynamiczone"){const x=N(a.type,a,s);c[m]=x}if(a.type==="relation"&&(c[m]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(a.relationType)?d.Ry().nullable():d.IX().nullable()),a.type==="component"){const x=T(o[a.component],{components:o},{...s,isFromComponent:!0});if(a.repeatable===!0){const{min:b,max:g,required:B}=a;let j=d.Vo(Z=>{let v=d.IX().of(x);return b?B?v=v.min(b,i.I0.min):B!==!0&&E(Z)?v=v.nullable():v=v.min(b,i.I0.min):B&&!s.isDraft&&(v=v.min(1,i.I0.required)),g&&(v=v.max(g,i.I0.max)),v});return c[m]=j,c}const L=d.Vo(b=>b!==void 0?a.required===!0&&!s.isDraft?x.defined():x.nullable():a.required===!0?d.Ry().defined():d.Ry().nullable());return c[m]=L,c}if(a.type==="dynamiczone"){let x=d.IX().of(d.Vo(({__component:g})=>T(o[g],{components:o},{...s,isFromComponent:!0})));const{max:L,min:b}=a;b?a.required?x=x.test("min",i.I0.min,g=>s.isCreatingEntry?g&&g.length>=b:g===void 0?!0:g!==null&&g.length>=b).test("required",i.I0.required,g=>s.isCreatingEntry?g!==null||g!==void 0:g===void 0?!0:g!==null):x=x.notEmptyMin(b):a.required&&!s.isDraft&&(x=x.test("required",i.I0.required,g=>s.isCreatingEntry?g!==null||g!==void 0:g===void 0?!0:g!==null)),L&&(x=x.max(L,i.I0.max)),c[m]=x}return c},{}))},N=(r,o,s)=>{let n=d.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(n=d.Z_()),r==="blocks"&&(n=d.nK().test("isJSON",i.I0.json,c=>s.isJSONTestDisabled||s.isDraft?!0:!(c&&!Array.isArray(c)))),r==="json"&&(n=d.nK(i.I0.json).test("isJSON",i.I0.json,c=>{if(s.isJSONTestDisabled||!c||!c.length)return!0;try{return JSON.parse(c),!0}catch{return!1}}).nullable().test("required",i.I0.required,c=>!(o.required&&(!c||!c.length)))),r==="email"&&(n=n.email(i.I0.email)),["number","integer","float","decimal"].includes(r)&&(n=d.Rx().transform(c=>C(c)?void 0:c).typeError()),r==="biginteger"&&(n=d.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(n=d.hT()),Object.keys(o).forEach(c=>{const m=o[c];if(m||!R(m)&&Number.isInteger(Math.floor(m))||m===0)switch(c){case"required":{s.isDraft||(r==="password"&&s.isCreatingEntry&&(n=n.required(i.I0.required)),r!=="password"&&(s.isCreatingEntry?n=n.required(i.I0.required):n=n.test("required",i.I0.required,a=>a===void 0&&!s.isFromComponent?!0:O(r)?a===0?!0:!!a:r==="boolean"?a!=null:r==="date"||r==="datetime"?typeof a=="string"?!E(a):!E(a?.toString()):!E(a))));break}case"max":{r==="biginteger"?n=n.isInferior(i.I0.max,m):n=n.max(m,i.I0.max);break}case"maxLength":n=n.max(m,i.I0.maxLength);break;case"min":{r==="biginteger"?n=n.isSuperior(i.I0.min,m):n=n.min(m,i.I0.min);break}case"minLength":{s.isDraft||(n=n.min(m,i.I0.minLength));break}case"regex":n=n.matches(new RegExp(m),{message:i.I0.regex,excludeEmptyString:!o.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(n=n.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(n=n.strict().uppercase());break;case"positive":O(r)&&(n=n.positive());break;case"negative":O(r)&&(n=n.negative());break;default:n=n.nullable()}}),n}},45322:(I,h,e)=>{"use strict";e.d(h,{U:()=>K,y:()=>M});var t=e(74081),u=e(27279),l=e(19003),p=e(39267),i=e(74513),A=e(32370),R=e(10701),E=e(93415);const C=({theme:f,expanded:_,variant:D,disabled:y,error:P})=>P?`1px solid ${f.colors.danger600} !important`:y?`1px solid ${f.colors.neutral150}`:_?`1px solid ${f.colors.primary600}`:D==="primary"?`1px solid ${f.colors.neutral0}`:`1px solid ${f.colors.neutral100}`,M=(0,l.ZP)(A.Z)``,d=(0,l.ZP)(E.x)`
  border: ${C};

  &:hover:not([aria-disabled='true']) {
    border: 1px solid ${({theme:f})=>f.colors.primary600};

    ${M} {
      color: ${({theme:f,expanded:_})=>_?void 0:f.colors.primary700};
    }

    ${A.Z} {
      color: ${({theme:f,expanded:_})=>_?void 0:f.colors.primary600};
    }

    & > ${R.k} {
      background: ${({theme:f})=>f.colors.primary100};
    }

    [data-strapi-dropdown='true'] {
      background: ${({theme:f})=>f.colors.primary200};
    }
  }
`,K=({children:f,disabled:_=!1,error:D,expanded:y=!1,hasErrorMessage:P=!0,id:$,onToggle:U,toggle:k,size:W="M",variant:O="primary",shadow:S})=>{const T=(0,i.M)($),N=u.useMemo(()=>({expanded:y,onToggle:U,toggle:k,id:T,size:W,variant:O,disabled:_}),[_,y,T,U,W,k,O]);return(0,t.jsxs)(p.S.Provider,{value:N,children:[(0,t.jsx)(d,{"data-strapi-expanded":y,disabled:_,"aria-disabled":_,expanded:y,hasRadius:!0,variant:O,error:D,shadow:S,children:f}),D&&P&&(0,t.jsx)(E.x,{paddingTop:1,children:(0,t.jsx)(A.Z,{variant:"pi",textColor:"danger600",children:D})})]})}},34642:(I,h,e)=>{"use strict";e.d(h,{v:()=>p});var t=e(74081),u=e(39267),l=e(93415);const p=({children:i,...A})=>{const{expanded:R,id:E}=(0,u.A)();if(!R)return null;const C=`accordion-content-${E}`,M=`accordion-label-${E}`,d=`accordion-desc-${E}`;return(0,t.jsx)(l.x,{role:"region",id:C,"aria-labelledby":M,"aria-describedby":d,...A,children:i})}},39267:(I,h,e)=>{"use strict";e.d(h,{A:()=>l,S:()=>u});var t=e(27279);const u=(0,t.createContext)({disabled:!1,expanded:!1,id:"",size:"M",variant:"primary"}),l=()=>(0,t.useContext)(u)},24920:(I,h,e)=>{"use strict";e.d(h,{B:()=>f});var t=e(74081),u=e(10411),l=e(19003),p=e(45322),i=e(39267);const A=({expanded:_,disabled:D,variant:y})=>{let P="neutral100";return _?P="primary100":D?P="neutral150":y==="primary"&&(P="neutral0"),P};var R=e(1782),E=e(50703),C=e(10701),M=e(32370);const d=(0,l.ZP)(R.A)`
  text-align: left;

  // necessary to make the ellipsis prop work on the title
  > span {
    max-width: 100%;
  }

  svg {
    width: ${14/16}rem;
    height: ${14/16}rem;

    path {
      fill: ${({theme:_,expanded:D})=>D?_.colors.primary600:_.colors.neutral500};
    }
  }
`,K=(0,l.ZP)(C.k)`
  min-height: ${({theme:_,size:D})=>_.sizes.accordions[D]};
  border-radius: ${({theme:_,expanded:D})=>D?`${_.borderRadius} ${_.borderRadius} 0 0`:_.borderRadius};

  &:hover {
    svg {
      path {
        fill: ${({theme:_})=>_.colors.primary600};
      }
    }
  }
`,f=({title:_,description:D,as:y="span",togglePosition:P="right",action:$,...U})=>{const{onToggle:k,toggle:W,expanded:O,id:S,size:T,variant:N,disabled:r}=(0,i.A)(),o=`accordion-content-${S}`,s=`accordion-label-${S}`,n=`accordion-desc-${S}`,c=T==="M"?6:4,m=T==="M"?c:c-2,a=A({expanded:O,disabled:r,variant:N}),L={as:y,fontWeight:T==="S"?"bold":void 0,id:s,textColor:O?"primary600":"neutral700",ellipsis:!0,variant:T==="M"?"delta":void 0},b=O?"primary600":"neutral600",g=O?"primary200":"neutral200",B=T==="M"?`${32/16}rem`:`${24/16}rem`,j=()=>{r||(W&&!k?(console.warn('Deprecation warning: Usage of "toggle" prop in Accordion component is deprecated. This is discouraged and will be removed in the next major release. Please use "onToggle" instead'),W()):k&&k())},Z=(0,t.jsx)(C.k,{justifyContent:"center",borderRadius:"50%",height:B,width:B,transform:O?"rotate(180deg)":void 0,"data-strapi-dropdown":!0,"aria-hidden":!0,as:"span",background:g,cursor:r?"not-allowed":"pointer",onClick:j,shrink:0,children:(0,t.jsx)(E.J,{as:u.Z,width:T==="M"?`${11/16}rem`:`${8/16}rem`,color:O?"primary600":"neutral600"})});return(0,t.jsx)(K,{paddingBottom:m,paddingLeft:c,paddingRight:c,paddingTop:m,background:a,expanded:O,size:T,justifyContent:"space-between",cursor:r?"not-allowed":"",children:(0,t.jsxs)(C.k,{gap:3,flex:1,maxWidth:"100%",children:[P==="left"&&Z,(0,t.jsx)(d,{onClick:j,"aria-disabled":r,"aria-expanded":O,"aria-controls":o,"aria-labelledby":s,"data-strapi-accordion-toggle":!0,expanded:O,type:"button",flex:1,minWidth:0,...U,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.y,{...L,children:_}),D&&(0,t.jsx)(M.Z,{as:"p",id:n,textColor:b,children:D})]})}),P==="right"&&(0,t.jsxs)(C.k,{gap:3,children:[Z,$]}),P==="left"&&$]})})}},76827:(I,h,e)=>{"use strict";e.d(h,{Z:()=>l});var t=e(74081);const u=p=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...p,children:(0,t.jsx)("path",{fill:"#212134",d:"M24 13.3a.2.2 0 0 1-.2.2H5.74l8.239 8.239a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L.14 12.14a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L13.98 1.98a.2.2 0 0 1 0 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6Z"})}),l=u},33039:(I,h,e)=>{"use strict";e.d(h,{Z:()=>l});var t=e(74081);const u=p=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...p,children:[(0,t.jsx)("path",{fill:"#212134",d:"M16.563 5.587a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 3.083c-.012.788-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574A1.943 1.943 0 0 1 14.9 2.11c.4-.684 1.2-1.066 1.981-.927a1.954 1.954 0 0 1 1.606 1.9c.011.748 1.17.748 1.158 0A3.138 3.138 0 0 0 17.565.17c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM16.563 14.372a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 11.867c-.012.789-.487 1.513-1.229 1.797a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.968 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.675 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.005ZM16.563 23.392a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M18.487 20.89c-.012.787-.487 1.512-1.229 1.796a1.954 1.954 0 0 1-2.184-.574 1.943 1.943 0 0 1-.174-2.196c.4-.684 1.2-1.066 1.981-.927.928.156 1.588.967 1.606 1.9.011.748 1.17.748 1.158 0a3.138 3.138 0 0 0-2.08-2.914c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.284 3.575.678 1.124 1.993 1.674 3.273 1.431 1.432-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.158-.006ZM7.378 5.622a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 3.119c-.011.788-.486 1.512-1.228 1.796a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38.205c-1.176-.423-2.567-.029-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.005ZM7.378 14.406a2.503 2.503 0 1 0 0-5.006 2.503 2.503 0 0 0 0 5.006Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 11.902c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927a1.943 1.943 0 0 1 1.605 1.9c.012.748 1.17.748 1.16 0A3.138 3.138 0 0 0 8.38 8.988c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.575.678 1.124 1.994 1.674 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.753-1.147-.753-1.159-.006ZM7.378 23.427a2.503 2.503 0 1 0 0-5.007 2.503 2.503 0 0 0 0 5.007Z"}),(0,t.jsx)("path",{fill:"#212134",d:"M9.302 20.924c-.011.788-.486 1.513-1.228 1.797a1.954 1.954 0 0 1-2.185-.574 1.943 1.943 0 0 1-.173-2.196c.4-.684 1.199-1.066 1.981-.927.933.156 1.594.967 1.605 1.9.012.748 1.17.748 1.16 0A3.139 3.139 0 0 0 8.38 18.01c-1.176-.423-2.567-.03-3.36.933-.83 1.002-.968 2.45-.285 3.569.678 1.124 1.994 1.675 3.274 1.431 1.431-.272 2.428-1.593 2.451-3.019.012-.747-1.147-.747-1.159 0Z"})]}),l=u},75438:(I,h,e)=>{"use strict";e.d(h,{Z:()=>l});var t=e(74081);const u=p=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...p,children:(0,t.jsx)("path",{fill:"#32324D",d:"M3.5 14.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Zm8.5 0a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"})}),l=u},77225:(I,h,e)=>{"use strict";e.d(h,{Z:()=>l});var t=e(74081);const u=p=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...p,children:[(0,t.jsx)("circle",{cx:12,cy:12,r:12,fill:"#212134"}),(0,t.jsx)("path",{fill:"#F6F6F9",d:"M17 12.569c0 .124-.1.224-.225.224h-3.981v3.982c0 .124-.101.225-.226.225h-1.136a.225.225 0 0 1-.226-.225v-3.981H7.226A.225.225 0 0 1 7 12.567v-1.136c0-.125.1-.226.225-.226h3.982V7.226c0-.124.1-.225.224-.225h1.138c.124 0 .224.1.224.225v3.982h3.982c.124 0 .225.1.225.224v1.138Z"})]}),l=u},53532:(I,h,e)=>{"use strict";e.d(h,{d7:()=>l});var t=e(5466);const{Axios:u,AxiosError:l,CanceledError:p,isCancel:i,CancelToken:A,VERSION:R,all:E,Cancel:C,isAxiosError:M,spread:d,toFormData:K,AxiosHeaders:f,HttpStatusCode:_,formToJSON:D,getAdapter:y,mergeConfig:P}=t.default}}]);
