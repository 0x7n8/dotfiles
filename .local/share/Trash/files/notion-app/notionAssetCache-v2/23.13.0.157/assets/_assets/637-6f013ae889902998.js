"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[637],{45257:(e,t,i)=>{i.d(t,{Z:()=>l});i(67294);var n=i(480),s=i(24405),o=i(42853),a=i(64921),r=i(85893);function l(e){const{icon:t,title:i,on:l,hasDiff:c,wrapStyle:m,innerStyle:p,hideChevron:u}=e,h=(0,s.Fg)(),g=(0,n.O7)();return(0,r.jsxs)("div",{style:{borderRadius:14,marginRight:6,display:"inline-flex",...c&&{position:"relative"},...m},children:[(0,r.jsxs)(a.Z,{disabled:e.disabled,style:d(Boolean(l),h,p,g.device.isMobile),hoveredStyle:l?{background:h.outlineBlueButtonHoveredBackground}:void 0,pressedStyle:l?{background:h.outlineBlueButtonPressedBackground}:void 0,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onClick:e.onClick,onDoubleClick:e.onDoubleClick,children:[t,i,!u&&(0,o.i)({width:10,marginLeft:4,marginTop:1,fill:l?h.blueColor:h.lightIconColor})]}),c&&(0,r.jsx)("div",{style:{position:"absolute",top:-2,right:-2,background:"dark"===h.mode?h.accentColors.orange[500]:h.accentColors.orange[300],border:`1px solid ${h.contentBackground}`,width:9,height:9,borderRadius:9}})]})}function d(e,t,i,n){return{fontSize:14,display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",borderRadius:32,height:n?28:24,lineHeight:n?"28px":"24px",padding:"0 8px",border:`1px solid ${t.outlineButtonBorder}`,color:t.mediumTextColor,...e&&{color:t.blueColor,border:`1px solid ${t.filterPillBorder}`,background:t.filterPillBackground},...i}}},68611:(e,t,i)=>{i.r(t),i.d(t,{Section:()=>M,adminHeaderStyle:()=>P,adminItemStyle:()=>O,adminStyle:()=>A,adminWarningTextStyle:()=>E,adminWrapStyle:()=>D,default:()=>N});var n=i(67294),s=i(40782),o=i(480),a=i(86628),r=i(29654),l=i(37652),d=i(35840),c=i(89101),m=i(31701),p=i(53965),u=i(37810),h=i(77671),g=i(8055),f=(i(95477),i(35754)),S=i(28020),y=i(45023),v=i(48125),x=i(91203),C=i(81e3),b=i(31150),k=i(86867),j=i(74194),w=i(84076),R=i(63296),B=i(36360),I=(i(27369),i(85893));const O={width:500,padding:18,margin:8,border:`1px solid ${m.Vx().outlineButtonBorder}`,background:"white",position:"relative"},A={display:"flex",flexWrap:"wrap"},D={height:"100vh",overflow:"auto",background:m.Vx().sidebarBackground,padding:8},P={fontWeight:u.Z.fontWeight.bold,fontSize:36},E={fontWeight:u.Z.fontWeight.bold,color:"red"},M=(0,n.forwardRef)((function(e,t){const{title:i,children:n,id:s}=e;return!n||Array.isArray(n)&&!n.length?null:(0,I.jsxs)("div",{ref:t,id:s,style:{...A,marginTop:12,marginBottom:12,width:"100%"},children:[(0,I.jsx)("div",{style:{...P,width:"100%",marginLeft:O.margin},children:i}),n]})}));function N(){const e=(0,o.O7)(),t=(0,a.qz)(void 0,C.Z),[i,N]=(0,a.VK)((()=>{const t=(0,S.B7)(e);return[null==t?void 0:t.isDefined(),null==t?void 0:t.getEmail()]}),[e]);(0,v.Z)(t);const{apiOwnershipMap:U,currentUserPermissions:T,fetchPermissionsErrored:Z}=(0,a.VK)((()=>t.state),[t]),[V,_]=(0,n.useState)(""),[L,F]=(0,n.useState)(!1),[G,H]=(0,n.useState)(""),W=(0,n.useCallback)((e=>{_(e.target.value)}),[_]),z=(0,n.useCallback)((()=>{F((e=>!e))}),[F]),K=(0,n.useMemo)((()=>{const e=V.toLowerCase();if(!(e.length<=1))try{return new RegExp(e,"i")}catch(t){return void console.error(`Can't filter with invalid regex "${e}"`,t)}}),[V]),$=(0,n.useRef)(null),q=(0,n.useRef)(null),Y=(0,n.useMemo)((()=>({find:n.createRef(),findAdminLogs:n.createRef(),pricing:n.createRef(),subscriptions:n.createRef(),recovery:n.createRef(),security:n.createRef(),saml:n.createRef(),contentModeration:n.createRef(),rateLimits:n.createRef(),experiments:n.createRef(),utilities:n.createRef(),integrations:n.createRef(),marketing:n.createRef(),domainClaim:n.createRef(),workspaceConsolidation:n.createRef(),ai:n.createRef(),calendar:n.createRef()})),[]),J=(0,n.useMemo)((()=>Object.fromEntries(r.KC.map((e=>[e,()=>{F(!0),H(e)}])))),[F]);(0,n.useEffect)((()=>{if(G){const e=Y[G];e.current&&(e.current.scrollIntoView(),H(""))}}),[G,H,Y]);const Q=(0,n.useCallback)((()=>{h.B(e)}),[e]),X=(0,n.useCallback)((t=>{(0,y.Z)(e,t,"command+/")&&(t.preventDefault(),_(""),$.current&&$.current.focusInput())}),[e,$]);(0,n.useEffect)((()=>(window.addEventListener("keydown",X),()=>{window.removeEventListener("keydown",X)})),[X]);const ee=(0,n.useMemo)((()=>(void 0!==T?f.Fr:[]).filter((e=>(void 0===e.productionOnly||e.productionOnly)&&(void 0===e.localOnly||!1))).filter((e=>void 0===T||L||void 0!==K||T.has(e.apiName)))),[L,K,T]),te=(0,n.useMemo)((()=>void 0!==K?ee.filter((e=>(0,f.H2)(e,K))):ee),[ee,K]),ie=(0,a.VK)((()=>new Set(x.Z.state||[])),[]),ne=te.filter((e=>ie.has(e.apiName))).map((e=>{const t=U?U[e.apiName]:void 0;return(0,I.jsx)(b.Z,{style:O,api:e,owner:t,hasPermission:T?T.has(e.apiName):void 0},e.apiName)})),se=(0,I.jsx)(M,{id:"favorites",title:"⭐ Favorites",children:ne,ref:Y.favorites},"favorites");let oe=!0;const ae=r.KC.map((e=>{const t=r._c[e],i=new Set(t.tools),n=te.filter((e=>i.has(e.apiName))).map((e=>{const t=oe?q:void 0,i=U?U[e.apiName]:void 0;return oe=!1,(0,I.jsx)(b.Z,{style:O,ref:t,api:e,owner:i,hasPermission:T?T.has(e.apiName):void 0},e.apiName)}));return(0,I.jsx)(M,{id:e,title:r._c[e].title,children:n,ref:Y[e]},e)}));return(0,I.jsx)(B.Z,{title:"Notion Admin Mode",children:(0,I.jsxs)("div",{style:D,children:[(0,I.jsxs)("div",{style:A,children:[(0,I.jsxs)("div",{style:O,children:[(0,I.jsxs)("div",{style:P,children:["Notion Admin Mode"," ",void 0]}),(0,I.jsxs)("div",{style:{marginBottom:12},children:[(0,I.jsx)(w.Z,{href:"https://dev.notion.so/notion/Use-Admin-Mode-05f1e0ad9aa749a4b3dc07410b499465",external:!0,inline:!0,underline:!0,children:"Click here"})," ","to learn more about how to use Admin Mode."]}),(0,I.jsxs)("div",{style:{display:"flex"},children:[!i&&(0,I.jsx)("div",{style:E,children:(0,I.jsx)(w.Z,{innerStyle:{textDecoration:"underline"},href:c._j.login,children:"Please log in."})}),i&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)("div",{style:{flex:1},children:["Currently Logged in as: ",N]}),(0,I.jsx)(R.Z,{onClick:Q,style:{height:"auto"},children:"Log Out"})]})]}),T&&(0,I.jsx)("div",{style:{display:"flex",marginTop:10},children:(0,I.jsxs)(R.Z,{onClick:z,style:{height:"auto"},children:[L?"Hide":"Show"," tools without access"]})}),Z&&(0,I.jsx)("div",{style:E,children:"You do not have access to Admin Mode. Please get help in the #trust-safety-ask Slack channel."}),(0,I.jsx)("hr",{}),(0,I.jsx)(k.Z,{permissionsSet:T}),(0,I.jsxs)(R.Z,{onClick:()=>{g.c4({environment:e,url:"/"})},style:{marginTop:12,display:"flex",alignItems:"center"},children:[(0,l.V)({width:12,height:12,marginRight:12}),"Navigate to user workspace"]})]}),(0,I.jsxs)("div",{style:O,children:[(0,I.jsx)("div",{style:{fontWeight:u.Z.fontWeight.bold,fontSize:18,marginBottom:6},children:"Go to (cmd-/)"}),(0,I.jsx)("div",{style:{marginBottom:14,display:"flex"},children:(0,I.jsx)(j.Z,{showClearButton:!0,placeholder:"Filter, then press enter to jump",ref:$,focusInitial:!0,value:V,onChange:W,left:(0,d.R)({width:14,height:14,marginRight:6,flexGrow:0,flexShrink:0,fill:m.Vx().mediumIconColor}),onSubmit:()=>{q.current&&q.current.focus()}})}),r.KC.map((e=>(0,I.jsx)("div",{style:{marginTop:6},children:(0,I.jsx)(w.Z,{onClick:J[e],underline:!0,children:r._c[e].title})},e)))]}),se,ae,te.length<ee.length&&(0,I.jsxs)("div",{style:{opacity:.7,width:"100%",color:m.Vx().lightIconColor,margin:8,fontStyle:"italic"},children:[ee.length-te.length,' hidden. To show all, press Cmd-/ or click "Clear" above.',(0,I.jsx)("br",{}),p.UP(["Hi, spam duplicate","Your hair is looking so nice today!",'"The faster we are at getting botter, the faster we get botter" - Doug EngelBot',"You're doing a great job, keep it up!!","Computing for everyone","Remember to take a stretch break every once in a while"])]})]}),(0,I.jsx)(s.Ix,{hideProgressBar:!0,autoClose:1500,transition:s.Mi})]})})}},31150:(e,t,i)=>{i.d(t,{Z:()=>Y});i(57658),i(21703);var n=i(67294),s=i(83355),o=i(480),a=i(49085),r=i(29654),l=i(96711),d=i(89101),c=i(9291),m=i(31701),p=i(53965),u=i(7032),h=i(1898),g=i(37810),f=i(54642),S=i(92625),y=i(53471),v=i(35754),x=i(79947),C=i(77907);class b extends a.default{getInitialState(){return{inputValues:{}}}}const k=b;var j=i(91203),w=i(3104),R=i(93667),B=i(52275),I=i(60458),O=i(41358),A=i(74194),D=i(16354),P=i(84076),E=i(68785),M=i(50506),N=i(63296),U=i(14871),T=i(26388),Z=i(64369),V=i(62069),_=i(85893);const L={fontWeight:g.Z.fontWeight.bold,fontSize:20,display:"flex",alignItems:"center",marginBottom:6},F={background:"#F2F2F2",color:"#AAA"},G={width:"calc(100% - 120px)",height:"calc(100% - 120px)",padding:24,fontSize:"1.2em",overflow:"scroll"},H={fontSize:10,position:"absolute",bottom:7,right:20},W="__undefined",z={...["userId","spaceId","blockId","pageId","integrationId","spaceId","fileId","teamId","collectionId","botId"].reduce(((e,t)=>({[t]:v.b9,[`${t}s`]:v.uy,...e})),{}),...["userEmail","fromEmail","toEmail"].reduce(((e,t)=>({[t]:v.cL,[`${t}s`]:v.VX,...e})),{}),domain:v.Ic,domains:v.EJ,supportTicketLink:v.ZT};function K(e){const{fieldName:t,acceptMultiple:i,store:s}=e,[a,r]=(0,n.useState)((()=>({isUploading:!1,errorMessage:void 0,uploadedFileUrls:[]}))),l=(0,o.O7)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(N.Z,{isLarge:!0,style:{width:"fit-content",backgroundColor:"white"},onClick:()=>{y.cR({multiple:!!i,environment:l,onStart:()=>{r({...a,isUploading:!0,errorMessage:void 0,uploadedFileUrls:[]})},bucket:"public",onError:e=>{r({isUploading:!1,errorMessage:e.message,uploadedFileUrls:[]})},onComplete:e=>{r({isUploading:!1,errorMessage:void 0,uploadedFileUrls:e}),s.setState({response:void 0,inputValues:{...s.state.inputValues,[t]:i?e:e[0]}})},accept:"image/*"})},children:[i?"Upload images":"Upload image",a.isUploading&&(0,_.jsx)(E.Z,{style:{marginLeft:4}})]}),a.uploadedFileUrls&&(0,_.jsx)("div",{children:a.uploadedFileUrls.join(",")}),a.errorMessage&&(0,_.jsx)("div",{style:{color:m.ZP.red,display:"inline-flex",marginLeft:8},children:a.errorMessage})]})}const $=(0,c.defineMessages)({loading:{id:"adminAPIRequest.loadingMessage",defaultMessage:"Loading…"}});class q extends s.Z{constructor(){super(...arguments),this.firstInputRef=n.createRef(),this.fileInputRef=n.createRef(),this.storeTypes={store:k,fileNameStore:a.default.createClass("")},this.renderKey=(e,t,i)=>{const{store:n}=this.stores,s=n.state.inputValues[t],o=0===i?this.firstInputRef:void 0;let a;if(e.type===v.It.String)a=(0,_.jsx)(A.Z,{ref:o,value:"string"==typeof s?s:"",placeholder:te(t,e),showClearButton:!0,onChange:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e.target.value}})},onSubmit:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleSubmit,onClearButtonClick:()=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:void 0}})},disabled:!1===this.props.hasPermission});else if(e.type===v.It.Number)a=(0,_.jsx)(A.Z,{ref:o,type:"number",value:"number"==typeof s?s.toString():"",onChange:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:parseInt(e.target.value)}})},onSubmit:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleSubmit,disabled:!1===this.props.hasPermission});else if(e.type===v.It.Options){const i=[W,...e.options],o={menuTitle:t,items:i,selectedItem:s,onSelect:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e===W?void 0:e}})},getKey:e=>e,renderItem:e=>(0,_.jsx)(B.Z,{...e,title:e.value===W?"Empty":e.value}),renderOrigin:e=>(0,_.jsx)(N.Z,{isLarge:!0,style:{marginBottom:8},...e,children:s||"Empty"}),width:300,disabled:!1===this.props.hasPermission};a=(0,_.jsx)(U.Z,{...o})}else if(e.type===v.It.Boolean)a=(0,_.jsx)(I.Z,{checked:Boolean(s),size:20,onClick:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:!Boolean(s)}})},disabled:!1===this.props.hasPermission});else if(e.type===v.It.Csv)a=(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(N.Z,{isLarge:!0,onClick:()=>{var e;null===(e=this.fileInputRef)||void 0===e||null===(e=e.current)||void 0===e||e.click()},style:{marginRight:10},children:"Upload"}),this.stores.fileNameStore.state,(0,_.jsx)("input",{ref:this.fileInputRef,style:{display:"none"},type:"file",name:e.name||"csv file",onChange:e=>async function(e,t,i,n){const s=t.target.files;if(null==s||!s.length)return;const o=s[0],a=await o.text();n.setState(o.name),i.setState({response:void 0,inputValues:{...i.state.inputValues,[e]:a}})}(t,e,this.stores.store,this.stores.fileNameStore),disabled:!1===this.props.hasPermission})]});else if(e.type===v.It.Image||e.type===v.It.Images){const i=e.type===v.It.Images;a=(0,_.jsx)(K,{fieldName:t,acceptMultiple:i,store:n})}else if(e.type===v.It.Timezone)a=(0,_.jsx)(V.Z,{renderOrigin:e=>(0,_.jsx)(N.Z,{...e,children:s}),onSelect:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e}})}});else if(e.type===v.It.Multiselect){const i=e.options.map(((e,t)=>({key:String(t),value:e.value,title:e.displayName,caption:e.value}))),s=n.state.inputValues[t],o=e.defaultValue??[],r=Array.isArray(s)?s:o,d=r.length>0?`${r.length} selected`:"Empty";a=(0,_.jsx)(R.F,{pillTitle:d,pillIcon:l.V,setSelectedItems:e=>{n.setState({inputValues:{...n.state.inputValues,[t]:e}})},selectedItems:r,items:i})}else(0,h.t1)(e);return(0,_.jsxs)("div",{children:[(0,_.jsx)("div",{style:{marginTop:12,marginBottom:4},children:p.fl(t)}),e.comment&&(0,_.jsx)(Z.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4,marginBottom:8},children:e.comment}),a]},t)},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleSubmit=()=>re(this.environment,this.props.api,this.stores.store),this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleConfirmedSubmit=()=>oe(this.environment,this.props.api,this.stores.store),this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleCancel=()=>ae(this.stores.store),this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleModalDismiss=()=>le(this.props.api,this.props,this.stores.store)}UNSAFE_willMount(e){ne(e,this.stores.store)}didMount(){ee(this.props.showByDefault,this.props.singleRecordMode)&&re(this.environment,this.props.api,this.stores.store)}renderComponent(){const{api:e,owner:t,defaultParams:i,hasPermission:n}=this.props,{apiName:s,displayName:o,schema:a,description:r,emoji:l,isDestructive:d}=e,c=-1!==(j.Z.getState()||[]).indexOf(s),m=c?"⭐":"☆",u=(0,_.jsx)("a",{onClick:()=>function(e){const t=j.Z.getState()||[],i=t.indexOf(e.apiName);-1===i?t.push(e.apiName):t.splice(i,1);j.Z.setState(t)}(this.props.api),style:{cursor:"pointer"},children:(0,_.jsx)(O.Z,{size:18,emoji:m})}),h=c||!1!==n,g=(0,_.jsx)(T.ZP,{renderTooltip:()=>(0,_.jsxs)("div",{style:{width:320,whiteSpace:"normal"},children:["You do not have permission to ",(0,_.jsx)("i",{children:e.apiName}),". To receive temporary access, please follow"," ",(0,_.jsx)(D.Z,{href:"https://dev.notion.so/notion/Admin-Mode-Request-Temporary-Access-3e1c84d2859d4061a18046d49eda6086?pvs=4",external:!0,style:{textDecoration:"underline"},children:"these instructions."})]}),render:e=>(0,_.jsx)("div",{...e,children:(0,_.jsx)("span",{title:"No permission",children:(0,_.jsx)(O.Z,{size:18,emoji:"🚫",alt:"No permission"})})}),closeDelay:1e3,allowHover:!0}),{confirmationResponse:f,response:S}=this.stores.store.state,y={...this.props.style,...!1===n?F:{}};return(0,_.jsxs)("div",{style:y,children:[(0,_.jsxs)("div",{style:L,children:[(0,_.jsx)(O.Z,{size:24,emoji:l}),(0,_.jsx)("span",{style:{marginLeft:4},children:o||p.fl(s.replace(/^(admin)/,""))}),(0,_.jsx)("span",{style:{flexGrow:1}}),h&&u,!1===n&&g]}),r&&(0,_.jsx)(Z.Z,{isSmall:!0,isMultiline:!0,children:r}),!ee(this.props.showByDefault,this.props.singleRecordMode)&&(0,_.jsxs)(_.Fragment,{children:[Object.entries(a).map(((e,t)=>{let[n,s]=e;return i&&i[n]?void 0:this.renderKey(s,n,t)})),(0,_.jsx)(N.Z,{style:{marginTop:8,marginBottom:8},isLarge:!0,onClick:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleSubmit,isRed:d,disabled:!1===this.props.hasPermission,children:"Submit"})]}),ee(this.props.showByDefault,this.props.singleRecordMode)&&!S&&(0,_.jsxs)("div",{children:[(0,_.jsx)(E.Z,{style:{width:18,height:18}}),"Loading ..."]}),(0,_.jsx)(X,{response:f}),(0,_.jsx)(de,{api:this.props.api,store:this.stores.store,response:f}),(0,_.jsx)(X,{response:S}),(0,_.jsx)(ce,{adminAPIRequestProps:this.props,store:this.stores.store,response:S}),t&&(0,_.jsx)("div",{style:H,children:t&&(0,_.jsxs)("span",{children:["Owned by"," ",(0,_.jsx)("a",{href:`https://notion.slack.com/app_redirect?channel=${t.slackChannel}`,children:t.teamName})]})})]})}focus(){this.firstInputRef.current&&this.firstInputRef.current.focusInput()}}const Y=q;function J(e){if(n=e,Boolean("success"===n.type&&Array.isArray(null===(s=n.data)||void 0===s?void 0:s.rows)&&(null===(o=n.data)||void 0===o?void 0:o.rows.length)>0&&"string"==typeof(null===(a=n.data)||void 0===a?void 0:a.filename))){const{filename:n,rows:s}=e.data,o=Array.from(s.reduce(((e,t)=>(Object.keys(t).forEach((t=>e.add(t))),e)),new Set)),a=[o];for(const e of s){const t=new Array(o.length);for(let i=0;i<t.length;i++){const n=o[i];t[i]=e[n]}a.push(t)}const r=a.map((e=>e.join(","))).join("\n");var t=new Blob([r],{type:"data:text/csv"}),i=window.URL.createObjectURL(t);const l=document.createElement("a");return l.download=n,l.href=i,l.click(),!0}var n,s,o,a;return!1}function Q(e,t){const i={};for(const n of Object.keys(e)){const s=e[n];t[n]&&(p.HD(s)&&u.qn(s.trim())?i[n]=u.wr(s.trim()):i[n]=s)}return i}function X(e){var t;let{response:i}=e;if(!i)return null;if("success"===i.type)return null;const n=(0,x.pO)(i),s="admin_tool_insufficient_permissions"===(null===(t=i.body)||void 0===t||null===(t=t.clientData)||void 0===t?void 0:t.type),o={color:m.ZP.red,display:"inline-block",marginLeft:8};return 401!==i.status||s?(0,_.jsx)("div",{style:o,children:n}):(0,_.jsxs)("div",{style:o,children:[n," Likely fixed by"," ",(0,_.jsx)(P.Z,{innerStyle:{textDecoration:"underline"},href:d._j.login,children:"signing in."})]})}function ee(e,t){return e&&t}function te(e,t){return void 0!==t.placeholder?t.placeholder:e in z?z[e]:void 0}function ie(e){return r.Hj[e.apiName]}function ne(e,t){const{defaultParams:i}=e,n={};for(const s of Object.keys(e.api.schema)){const t=e.api.schema[s];i&&i[s]?n[s]=i[s]:t&&void 0!==t.defaultValue?n[s]=t.defaultValue:n[s]=void 0}t.setState({inputValues:n})}function se(e,t,i){const{schema:n}=t,{inputValues:s}=i.state,o=ie(t);if(!o)throw new Error("Should not have gotten here without a confirmationApi");const a=Q(s,n),r=f[o];if(!r)throw new Error(`Missing api handler for ${o} - likely either a typo in client/helpers/adminHelpers.tsx or missing declaration in client/actions/api.ts`);S.j({message:$.loading}),r(e,a).then((e=>{S.x(),J(e),i.setState({...i.state,confirmationResponse:e})}))}function oe(e,t,i){const{apiName:n,schema:s}=t,{inputValues:o}=i.state,a=Q(o,s);S.j({message:$.loading});const r=f[n];if(!r)throw new Error(`Missing api handler for ${n} - likely either a typo in client/helpers/adminHelpers.tsx or missing declaration in client/actions/api.ts`);r(e,a).then((e=>{S.x(),J(e)||i.setState({...i.state,confirmationResponse:void 0,response:e})}))}function ae(e){e.setState({inputValues:e.state.inputValues})}function re(e,t,i){ie(t)?se(e,t,i):oe(e,t,i)}function le(e,t,i){if(!i.state.response)return;"failed"===i.state.response.type||e.isReadOnly?i.setState({inputValues:i.state.inputValues}):ne(t,i)}function de(e){let{response:t,api:i,store:s}=e;const a=(0,o.O7)(),r=(0,n.useCallback)((()=>oe(a,i,s)),[a,i,s]),l=(0,n.useCallback)((()=>ae(s)),[s]);return t&&"success"===t.type?(0,_.jsx)(M.Z,{open:!0,innerStyle:G,onDismiss:l,disableAnimation:!0,render:()=>(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(Z.Z,{isSmall:!0,isMultiline:!0,style:{marginBottom:8},children:"Does this information about the action you're about to take look good to you? Hit Confirm if it does. Cancel if not."}),(0,_.jsx)(C.LazyAdminReactJson,{data:t.data}),(0,_.jsx)(N.Z,{style:{marginTop:8,marginBottom:8},isLarge:!0,onClick:r,children:"Confirm"}),(0,_.jsx)(N.Z,{style:{marginTop:8,marginBottom:8,marginLeft:8},isLarge:!0,onClick:l,children:"Cancel"})]})}):null}function ce(e){let{response:t,adminAPIRequestProps:i,store:s}=e;const{api:a,singleRecordMode:r,showByDefault:l}=i,d=(0,o.O7)(),c=(0,n.useCallback)((()=>le(a,i,s)),[a,i,s]);if(!t||"success"!==t.type)return null;const m=a.customResponseRenderer?(0,_.jsx)(a.customResponseRenderer,{data:t.data,environment:d,singleRecordMode:r}):(0,_.jsx)(w.Z,{data:t.data});return ee(l,r)?m:(0,_.jsx)(M.Z,{open:Boolean(t&&"success"===t.type),innerStyle:G,onDismiss:c,disableAnimation:!0,render:()=>m})}},46978:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(67294),s=i(24405),o=i(85893);function a(e,t){let{isSelected:i}=e;const{radioButtonStyle:n,dotStyle:a}=(0,s.yK)((e=>({radioButtonStyle:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,borderRadius:16,marginRight:8,background:i?e.blueColor:e.whiteButtonBackground,border:i?"none":`1px solid ${e.radioButtonBorder}`,transition:"background 100ms ease-out"},dotStyle:{width:6,height:6,borderRadius:6,background:e.regularInvertedTextColor,transition:"opacity 100ms ease-out",opacity:i?1:0}})),[i]);return(0,o.jsx)("div",{ref:t,style:n,children:(0,o.jsx)("div",{style:a})})}const r=n.forwardRef(a)},91642:(e,t,i)=>{i.d(t,{Z:()=>o});i(67294);var n=i(72495),s=i(85893);const o=function(e){const t={desktopTitleStyle:{marginBottom:4},marginAfter:{marginBottom:16}},{title:i,marginAfter:o,desktopStyle:a,desktopTitleStyle:r,...l}=e,d=(o||a)&&{...o&&t.marginAfter,...a},c=r?{...t.desktopTitleStyle,...r}:t.desktopTitleStyle;return(0,s.jsx)(n.Z,{isTitleUppercase:!0,disableDesktopPadding:!0,enableActionSheetTitle:!0,desktopStyle:d,desktopTitleStyle:c,shouldShowBottomDivider:!1,title:i,...l})}},48125:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(480),s=i(86628),o=i(59054),a=i(54642),r=i(28020);function l(e){const t=(0,n.O7)(),i=(0,s.VK)((()=>{const e=(0,r.B7)(t);return null==e?void 0:e.isDefined()}),[t]);(0,o.r5)((async()=>{if(!i||void 0!==e.state.currentUserPermissions)return;const n=await a.adminGetCurrentUserPermissions(t,{});if("failed"===n.type)e.setState({...e.state,fetchPermissionsErrored:!0});else{const t=n.data.permissions?new Set(n.data.permissions):void 0;e.setState({...e.state,currentUserPermissions:t,fetchPermissionsErrored:!1})}}),[i,e,t]),(0,o.r5)((async()=>{if(!i||!e||void 0!==e.state.apiOwnershipMap)return;const n=await a.adminGetOwnership(t,{});"failed"===n.type||n&&e.setState({...e.state,apiOwnershipMap:n.data})}),[i,e,t])}},91203:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(53809),s=i(30548);const o=new n.D({key:"adminFavoriteToolsSetting",namespace:s.$p,important:!1,trackingType:"preference"})},81e3:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(49085);class s extends n.default{getInitialState(){return{apiOwnershipMap:void 0,currentUserPermissions:void 0,fetchPermissionsErrored:!1}}}const o=s},29654:(e,t,i)=>{i.d(t,{Hj:()=>o,KC:()=>s,_c:()=>n});const n={find:{title:"Find user and workspace information",tools:["adminSearchUsers","adminSearchSpaces","adminSearchBlocks","adminSearchTeams","adminSearchCollections","adminSearchCollectionViews","adminSearchForUsersInSpaces","adminGetDataAccessConsent","adminSearchPermanentlyDeletedPages","adminSearchSpaceActivity","adminGetPublicPages","adminGetBulkSpaceIdsByDomain","adminGetBulkSpaceIdsByEmail","adminGetBulkUserIdsByEmail","isEmailEducation","adminGetSpaceMembershipUpdates","adminFindDeletedUser","adminCountWordsInPage","adminReadBlockPermissions","adminSearchAuditLog","adminGetAutomationsForRecordId","adminSearchOrganizations"]},findAdminLogs:{title:"Find Admin logs",tools:["getUserAdminApiLog","getAdminHistory","getSpaceAdminApiLog","getBlockAdminApiLog"]},pricing:{title:"Pricing and credits",tools:["adminAllowlistCreditDomain","adminCancelSubscription","adminReleaseSubscriptionSchedule","adminDowngradeFraudSubscription","getBillingHistory","adminGetUserBillingInformation","adminBulkApplyPromotionCodes","adminBulkUpgradeEduPlusUser","adminBulkCreateTimedTrials","adminExplainPaymentStatus","adminUpdatePaymentStatus","allowEducationEmails","adminRemoveAllowedEducationEmails","getPromoCode","adminBulkAddPromotionCodes","adminPartnerStackFixMissingProductKeys","adminMonetizationTaskRunnerEnqueue","adminBulkAddEduUniversitiesAndDomains"]},subscriptions:{title:"Subscriptions",tools:["adminUpdateSubscription","adminUpdateAddOnSubscription","adminSetSubscriptionBanner","adminBulkSetSubscriptionBanner","adminGetSubscriptionBannerHistory"]},recovery:{title:"Recovery",tools:["adminRemoveSpaceUsersAndTransferContent","recoverSpace","recoverUser","adminRecoverMfa","adminChangeEmail","adminSwapUserEmails","adminSwapUserDomains","adminModifyBlock","adminRestoreBlock","adminSetSpaceDomain","adminViewDeletedCollectionProperties","adminRestoreDeletedCollectionProperties","adminRestoreDeletedGuestPermissions","adminMergeUsers","adminRecoverUserContentInSpace"]},security:{title:"Security",tools:["adminDisableReverifyForUser","adminAddPublicEmailDomains","adminDeleteSpaces","adminResetAccounts","adminDeleteUser","revokeUserTokens","adminRevokeBotToken","adminDeleteFileFromS3","adminBlockEmailDomain","adminBanUser","adminBulkBanUsers","adminBypassEmailReputationChecks"]},saml:{title:"SAML",tools:["adminGetSamlConfig","adminGetSpacesForAllowedEmailDomain","adminSamlConfigForSpace","adminPrimaryWorkspaceChange"]},contentModeration:{title:"Content Moderation",tools:["adminSetPageContentClassification","adminSetDisableSpacePublicAccess"]},rateLimits:{title:"Rate limits",tools:["adminGetRateLimits","adminResetRateLimits"]},experiments:{title:"Experiments",tools:["adminGetStatsigExperiment","adminGetStatsigFeatureGate","adminCheckStatsigSegment","adminUpdateStatsigSegmentIds","adminGetClientExperiments","adminViewExperiments","adminUpdateExperiment"]},utilities:{title:"Utilities",tools:["adminSearchUserAdminToolRoles","adminCopyPageBetweenEnvironments","disableUserAnalytics","adminEditBlockPermissions","adminEditSpacePermissions","adminBulkRemoveSpaceGuests","adminOverridePremiumFeatureAvailability","adminOverrideInternalDomains","adminEditTeamMembership","adminUpdateTeamMember","adminUpdateUserSettings","adminShowCustomerInvoice","adminGetBulkIds","adminAddLinkPreviewToSpace"]},integrations:{title:"Integrations",tools:["adminGetIntegrationData","adminGetSlackIntegrationData","adminUpdateIntegrationData","adminGetSyncedDatabaseData","adminForceResyncExternalObjects","adminRemoveChildFromExternalCollection","adminJoinSpacesForOauthRedirect","adminGetWorkspaceWebhookSubscriptions","adminSearchBots"]},marketing:{title:"Marketing",tools:["adminCreateMarketingRoute"]},domainClaim:{title:"Domain Claim (Management)",tools:["adminGetDomainManagementSettings","adminIsSpaceDomainClaimEligible","adminGetDomainClaimEligibleSpaces","adminClaimAndUpgradeForSalesAssisted","adminDelayClaimSpaceDeletion"]},workspaceConsolidation:{title:"Workspace Consolidation",tools:["adminCancelSpaceConsolidation","adminRunSpaceConsolidation"]},ai:{title:"Notion AI",tools:["adminUpdateNotionAIAvailabilityForSpace","adminAddZeroRetentionSpace","adminCheckHIPAAComplianceStatus","adminOnboardAISlackQnA","adminOptOutNotionAIDataSharing","adminIsWorkspaceInQnA","adminQnACheckIndexingStatus"]},calendar:{title:"Notion Calendar",tools:["adminUpdateNotionCalendarAvailableForSpace"]}},s=Object.keys(n),o={adminRestoreBlock:"adminDescribeDeletedBlockPermissions",adminRestoreDeletedGuestPermissions:"adminDescribeRestoreDeletedGuestPermissions",adminDeleteSpaces:"adminDescribeSpacesToDelete",adminResetAccounts:"adminDescribeAccountsToReset",adminDeleteFileFromS3:"adminDescribeDeleteFileFromS3",adminEditSpacePermissions:"adminDescribeEditSpacePermission",adminRunSpaceConsolidation:"adminDescribeRunSpaceConsolidation"};Object.values(o)},37652:(e,t,i)=>{i.d(t,{V:()=>o});i(67294);var n=i(45238),s=i(85893);const o=(0,n.IU)("arrowLeft",{viewBox:"0 0 30 30",svg:(0,s.jsx)("polygon",{points:"29 14 4.813 14 13.406 5.406 12 4 1 15 12 26 13.406 24.594 4.813 16 29 16"})})},96711:(e,t,i)=>{i.d(t,{V:()=>o});i(67294);var n=i(45238),s=i(85893);const o=(0,n.IU)("checkboxSquareChecked",{viewBox:"0 0 14 14",svg:(0,s.jsx)("path",{d:"M2.85742 13.4561H11.1357C12.6123 13.4561 13.3779 12.6904 13.3779 11.2344V2.91504C13.3779 1.45215 12.6123 0.693359 11.1357 0.693359H2.85742C1.38086 0.693359 0.615234 1.45215 0.615234 2.91504V11.2344C0.615234 12.6973 1.38086 13.4561 2.85742 13.4561ZM2.93945 12.1162C2.30371 12.1162 1.95508 11.7812 1.95508 11.1182V3.02441C1.95508 2.36133 2.30371 2.0332 2.93945 2.0332H11.0537C11.6826 2.0332 12.0381 2.36133 12.0381 3.02441V11.1182C12.0381 11.7812 11.6826 12.1162 11.0537 12.1162H2.93945ZM6.26855 10.3115C6.51465 10.3115 6.72656 10.1885 6.87012 9.96973L9.92578 5.19141C10.0146 5.04785 10.0967 4.88379 10.0967 4.72656C10.0967 4.3916 9.7959 4.16602 9.47461 4.16602C9.26953 4.16602 9.08496 4.27539 8.94141 4.50781L6.24121 8.8418L4.96973 7.22168C4.80566 7.00977 4.6416 6.93457 4.43652 6.93457C4.10156 6.93457 3.8418 7.20117 3.8418 7.54297C3.8418 7.70703 3.90332 7.85742 4.01953 8.00098L5.63281 9.96973C5.81738 10.209 6.01562 10.3115 6.26855 10.3115Z"})})},27369:()=>{}}]);