"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6526],{13658:(e,t,i)=>{i.d(t,{Z:()=>u});var n=i(67294),o=i(86628),r=i(24405),s=i(49085),l=i(9291),a=i(64921),d=i(85893);const c=s.default.createClass(!1);const u=function(e){let{items:t,visible:i}=e;const s=(0,r.Fg)(),u=(0,o.qz)(void 0,c),f=(0,o.VK)((()=>u.state),[u]),g=(0,n.useCallback)((()=>function(e){e.setState(!0)}(u)),[u]);return f||t.length<=i?(0,d.jsx)("div",{children:t}):(0,d.jsxs)("div",{children:[t.slice(0,i),(0,d.jsx)(a.Z,{onClick:g,style:h(s),children:(0,d.jsx)(l.FormattedMessage,{defaultMessage:"View {moreCount} more",id:"activity.viewMoreButton.label",values:{moreCount:t.length-i}})})]})};function h(e){return{display:"flex",alignItems:"center",height:28,fontSize:12,color:e.lightTextColor,padding:0,paddingLeft:52,paddingRight:16}}},12472:(e,t,i)=>{i.d(t,{D:()=>h,Z:()=>u});i(67294);var n=i(24405),o=i(9291),r=i(19719),s=i(17659),l=i(13447),a=i(62385),d=i(22649),c=i(85893);function u(e){var t;const{isMobile:i,environment:o,rootStore:r,activity:s,tabArgs:l}=e,{source:a}=l,u=Boolean(null===(t=l.notification)||void 0===t?void 0:t.visited),f=(0,n.yK)((()=>({container:{paddingLeft:(0,d.c3)({source:a,isMobile:i})-8,paddingTop:4}})),[i,a]);return u?(0,c.jsx)("div",{style:f.container,children:(0,c.jsx)(h,{tabArgs:l,environment:o,rootStore:r,activity:s})}):null}function h(e){const{tabArgs:t,environment:i,rootStore:u,activity:h}=e,{notification:f,tab:g}=t,m=(0,n.yK)((e=>({secondaryButton:(0,d._W)(e)})),[]);return Boolean(null==f?void 0:f.visited)?(0,c.jsx)(a.Z,{onClick:()=>{f&&(l.createAndCommit({userAction:"Activity.handleUnarchive",environment:i,perform:e=>{s.E1({notificationId:f.id,visited:!1,rootStore:u,transaction:e})}}),r.F5({environment:i,activity:h,tab:g,notificationId:f.id,alreadyRead:f.read}))},style:m.secondaryButton,children:(0,c.jsx)(o.FormattedMessage,{defaultMessage:"Unarchive",id:"activity.actions.unarchiveButton.label"})}):null}},78976:(e,t,i)=>{i.d(t,{Z:()=>w});var n=i(67294),o=i(480),r=i(86628),s=i(24405),l=i(15145),a=i(1800),d=i(86517),c=i(21202),u=i(6287),h=i(75246),f=i(29369),g=i(9291),m=i(1898),v=i(62820),b=i(9867),x=i(84076),p=i(31278),y=i(76798),C=i(64369),j=i(17022),S=i(22649),k=i(85893);function A(e){const{titledRecordStore:t,getRecordModel:i,activity:A,tabArgs:w,permissionRole:M,shouldRenderEmpty:T}=e,I=(0,r.VK)((()=>t.getModel()),[t]),Z=(0,o.O7)(),B=(0,g.useIntl)(),V=(0,r.VK)((()=>null==I?void 0:I.getRenderIcon({getRecordModel:i})),[I,i]),R=(0,s.yK)((()=>({container:M?{...S.lS,display:"flex",alignItems:"center"}:S.lS,icon:S.e9,recordTitle:(0,S.TL)(void 0!==V),role:{marginLeft:4,padding:0},titleAndRole:{display:"flex",flexFlow:"row",padding:1}})),[V,M]),L=(0,n.useCallback)((()=>{const e=t.table;switch(e){case c.iU:case u.vF:case h.bx:(0,j.V3)({environment:Z,activity:A,...w});break;case f.e0:(0,j.dG)({environment:Z,activity:A,...w}),b.hI({environment:Z,teamStore:t,shouldScroll:!0}),v.Z.setState({...v.Z.state,open:!1});break;default:(0,m.t1)(e)}}),[A,Z,w,t]),U=(0,r.VK)((()=>I&&I.table!==f.e0?I.getRenderUrl({getRecordModel:i,pageVisitSource:l.tY.Notification}):T&&t.table===c.iU?(0,a.Z)({pageId:t.id,pageVisitSource:l.tY.LinkInPage}):void 0),[I,i,T,t.table,t.id]);if(!I&&!T)return null;const _=M?(0,k.jsxs)("div",{style:R.titleAndRole,children:[(0,k.jsx)(y.Z,{store:t,style:R.recordTitle}),(0,k.jsx)(C.Z,{style:R.role,isSecondaryColor:!0,children:`(${B.formatMessage((0,d.kD)(M,c.iU)).toLocaleLowerCase()})`})]}):(0,k.jsx)(y.Z,{store:t,style:R.recordTitle});return(0,k.jsxs)(x.Z,{href:U,onClick:L,external:!1,innerStyle:R.container,inline:!0,children:[(V||T)&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(p.Z,{disabled:!0,icon:V,isEmptyPage:!1,size:18,style:R.icon}),(0,k.jsx)("span",{children:" "})]}),_]})}const w=n.memo(A)},74970:(e,t,i)=>{i.d(t,{BE:()=>P,Hy:()=>K,ZP:()=>$,_c:()=>z,hZ:()=>N,jr:()=>W,of:()=>H,yI:()=>E});var n=i(67294),o=i(480),r=i(86628),s=i(24405),l=i(49085),a=i(36700),d=i(65422),c=i(69651),u=i(30134),h=i(7220),f=i(23925),g=i(94308),m=i(8504),v=i(54497),b=i(21202),x=i(9291),p=i(31701),y=i(1898),C=i(37834),j=i(43250),S=i(16402),k=i(6258),A=i(73063),w=i(86176),M=i(26388),T=i(70301),I=i(45653),Z=i(67706),B=i(32469),V=i(85893);const R=16,L={paddingTop:12},U={fontSize:14,lineHeight:1.4,flexGrow:1,minWidth:0},_=l.default.createClass(!1);const F={marginTop:2,marginRight:8,flexShrink:0};function O(e){let{actor:t,environment:i}=e;const n=i.currentUser.id===t.id;return Number(t.isBot())+Number(n)}function P(e){const{authors:t,size:i,style:n,iconStyle:r,showAvatarShadow:l,showWarningIcon:a}=e,d=(0,o.O7)(),c=(0,s.yK)((e=>({container:{position:"relative"},icon:{position:"absolute",right:5,bottom:-3,fill:e.icon.yellow,height:12,width:12}})),[]),u=t.sort(((e,t)=>O({actor:e,environment:d})-O({actor:t,environment:d})))[0],h=i,f={...F,...n},g={...c.icon,...r};return u?u.isBot()?(0,V.jsxs)("div",{style:c.container,children:[(0,V.jsx)(T.Z,{botValue:u,style:f,size:h}),a&&(0,v.t)(g)]}):u.isUser()?(0,V.jsxs)("div",{style:c.container,children:[(0,V.jsx)(I.Z,{userValue:u,style:f,size:h,avatarShouldShowShadow:l??!0}),a&&(0,v.t)(g)]}):u.isAgent()?null:void(0,y.t1)(u):null}function N(){return(0,V.jsx)("div",{style:{display:"flex",backgroundColor:p.ZP.red,height:28,width:28,borderRadius:"100%",...F},children:(0,a.m)({height:16,width:16,fill:p.ZP.white,marginLeft:6,marginTop:5})})}function H(){return(0,V.jsx)("div",{style:{height:25,width:25,...F},children:(0,g.f)({height:25,width:25})})}function K(){return(0,V.jsx)("div",{style:{height:25,width:25,...F},children:(0,u.c)({height:25,width:25})})}function z(){return(0,V.jsx)("div",{style:{height:25,width:25,...F},children:(0,h.l)({height:25,width:25})})}function E(){const e=(0,o.O7)(),t=(0,r.VK)((()=>"dark"===e.ThemeStore.state.mode),[e]),i=(0,s.yK)((e=>({icon:{height:20,width:20,fill:t?e.primaryBlack:e.blueColor}})),[t]);return(0,V.jsx)("div",{style:{...F},children:(0,f.k)(i.icon)})}function W(){return(0,V.jsx)("div",{style:{display:"flex",height:28,width:28,...F},children:(0,d.K)({height:16,width:16,marginLeft:4,marginTop:4,color:p.ZP.mediumIconColor})})}const $=function(e){let{children:t,icon:i,timestamp:s,header:l,navigableBlockId:a,rootStore:d,onBacklinkClicked:c,showSnapshotButton:u,isPrivate:h,isLast:f}=e;const g=(0,o.O7)(),m=(0,r.qz)(void 0,_),v=(0,n.useCallback)((()=>{m.setState(!1)}),[m]),b=(0,n.useCallback)((()=>{m.setState(!0)}),[m]),x=(0,n.useId)(),p=(0,r.VK)((()=>g.WindowSizeStore.state.paddingLeftCSS),[g]),y=(0,r.VK)((()=>g.WindowSizeStore.state.paddingRightCSS),[g]);return(0,V.jsxs)("article",{onMouseOver:b,onMouseLeave:v,"aria-labelledby":x,tabIndex:0,children:[(0,V.jsxs)("div",{style:{...L,paddingBottom:t?12:8,paddingLeft:g.device.isMobile?p:0,paddingRight:g.device.isMobile?y:0},children:[(0,V.jsxs)("div",{style:{display:"flex",paddingLeft:R,paddingRight:R},children:[(0,V.jsxs)("div",{className:j.FoE,style:{display:"flex",alignItems:"flex-start",position:"relative"},children:[(0,V.jsx)("div",{style:{marginRight:4}}),i]}),(0,V.jsx)(te,{timestamp:s,header:l,children:t,navigableBlockId:a,rootStore:d,onBacklinkClicked:c,titleAriaId:x}),(0,V.jsx)(ee,{showSnapshotButton:u,timestamp:s,navigableBlockId:a,rootStore:d}),(0,V.jsx)(D,{isPrivate:h})]}),t&&(0,V.jsx)(G,{children:t})]}),(0,V.jsx)(Q,{isLast:f})]})};function D(e){let{isPrivate:t}=e;return t?(0,V.jsx)(B.Z,{style:{marginTop:1,marginBottom:4,marginLeft:8}}):null}function G(e){let{children:t}=e;return(0,V.jsx)("div",{className:j.nU_,children:t})}function J(e){return{borderBottom:`1px solid ${e.regularDividerColor}`}}function Y(e){return{fontSize:12,color:e.lightTextColor}}function q(e){return{fontSize:12,color:e.lightTextColor,whiteSpace:"nowrap"}}function X(e){return{fontSize:12,color:e.lightTextColor,marginLeft:4,marginRight:4}}function Q(e){let{isLast:t}=e;const i=(0,s.Fg)();return t?null:(0,V.jsx)("div",{style:J(i)})}function ee(e){let{showSnapshotButton:t,timestamp:i,navigableBlockId:n,rootStore:r}=e;const s=(0,o.O7)(),l=(0,x.useIntl)();if(!t)return null;if(i<new Date("2018-10-26").getTime())return null;const a=l.formatMessage({defaultMessage:"View version for this update",id:"activitySection.viewVersionForUpdate.tooltip"});return n?(0,V.jsx)(M.ZP,{renderTooltip:()=>a,render:e=>(0,V.jsx)(A.Z,{ariaLabel:a,onClick:()=>function(e,t,i,n){if(n){const o=k.G.createChildStore(e,{table:b.iU,id:n});C.jN({environment:i,blockStore:o,openSnapshotNearTimestamp:t.toString(),from:"activity"})}}(r,i,s,n),icon:m.J,...e})}):null}function te(e){let{titleAriaId:t,timestamp:i,header:o,children:r,navigableBlockId:l,rootStore:a,onBacklinkClicked:d}=e;const u=(0,s.Fg)(),h=(0,S.IS)(i),f=(0,S.uy)(i),g=(0,n.useMemo)((()=>l?k.G.createChildStore(a,{table:b.iU,id:l}):void 0),[l,a]);return(0,V.jsxs)("div",{style:U,children:[(0,V.jsx)("div",{id:t,className:j.NFf,children:o}),(0,V.jsxs)("div",{style:{display:"flex",marginTop:4,marginBottom:r?8:4},children:[(0,V.jsx)("div",{style:q(u),className:j.CZG,children:(0,V.jsx)(Z.Z,{text:h,tooltipText:f,icon:c.C})}),a&&g&&(0,V.jsx)(w.Z,{isLink:!0,innerStyle:Y(u),store:g,left:(0,V.jsx)("div",{style:X(u),children:"·"}),onClick:d})]})]})}},17022:(e,t,i)=>{i.d(t,{BE:()=>g,JJ:()=>b,ME:()=>u,V3:()=>f,dG:()=>h,h9:()=>v});var n=i(15145),o=i(82813),r=i(18265),s=i(19719),l=i(97978),a=i(41549),d=i(50770),c=i(4761);function u(e){return(0,r.SK)(e,{[n.$X]:n.tY.Notification})}function h(e){const t=e.mightCloseTab??!0;m({target:"body",...e,mightCloseTab:t})}function f(e){const t=e.mightCloseTab??!0;m({target:"title",...e,mightCloseTab:t})}function g(e){m({target:"add_reaction",...e,mightCloseTab:!1})}function m(e){const{target:t,environment:i,activity:n,notification:r,source:a,tab:d,mightCloseTab:u}=e,h="notifications_tab"===a?c.ZP.state.sessionId:void 0,f="notifications_tab"===a?c.ZP.isFilteredToUnreadOnly():void 0;s.Cg(i,{target:t,activity_id:n.id,notification_id:null==r?void 0:r.id,sessionId:h,is_filtered:f,tab:d}),u&&s.pw({environment:i,target:t}),r&&o.e((0,l.mc)(i),{alreadyRead:r.read,notificationId:r.id,activityId:r.activity_id,from:t,sessionId:h})}function v(e){const{notification:t,activity:i,environment:n,tab:o}=e,r={environment:n,activity:i,notificationId:null==t?void 0:t.id,alreadyRead:Boolean(null==t?void 0:t.read),tab:o};return{onBacklinkClicked:e=>s.EQ({...r,backlinkPageId:e}),onNotificationFrameClicked:()=>s.ix(r),...b({notification:t,activity:i,environment:n,tab:o})}}function b(e){const{notification:t,activity:i,environment:n,tab:o}=e,r={environment:n,activity:i,notificationId:null==t?void 0:t.id,alreadyRead:Boolean(null==t?void 0:t.read),tab:o},l=()=>{if(!d.H7(n))return{};const e={notification_type:null==t?void 0:t.type,notification_page_id:null==t?void 0:t.navigable_block_id,tab:a.Fz()};return"commented"===(null==t?void 0:t.type)&&(e.discussion_id=null==i?void 0:i.discussion_id),e};return{onArchiveClicked:()=>s._b({...r,otherArgs:l()}),onUnarchiveClicked:()=>s.F5({...r,otherArgs:l()}),onMarkAsReadClicked:()=>s.cC({...r,otherArgs:l()}),onMarkAsUnreadClicked:()=>s.u_({...r,otherArgs:l()}),onNotificationBodyClicked:()=>s._H({...r,otherArgs:l()})}}},90060:(e,t,i)=>{i.d(t,{uA:()=>H,XW:()=>N,P6:()=>P,cr:()=>E,jC:()=>z,N8:()=>K});var n=i(66897),o=i(67294),r=i(9291),s=i(31701),l=(i(1898),i(37810)),a=(i(41892),i(7057)),d=(i(65422),i(30134),i(7220),i(94308),i(24211)),c=(i(54368),i(77420)),u=i(19889),h=i(53965),f=i(15145),g=i(76725),m=i(59753),v=i(63306),b=i(18265),x=i(85893);const p=function(e){const t={display:e.inline?"inline":"block",color:s.ZP.inherit,textDecoration:"none",cursor:"pointer",...e.style},{href:i}=e;return(0,x.jsx)("a",{href:(0,b.Nm)({str:i,allowNoProtocol:!0}),style:t,className:"notion-email-button-hover",onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,children:e.children})};function y(e){let{getRecordValue:t,blockId:i,userTimeZone:n,baseUrl:o,left:s,right:a}=e;const d=function(e,t,i,n,o){const r=v.uJ({table:"block",id:t},e),s=m.om.fromGetRecordValueFn(e);return h.nn(r.reverse()).map((e=>{const t=m.kk.fromBlock(e),r=t.getRenderTitle({getRecordModel:s,userTimeZone:n,intl:i})||i.formatMessage({id:"recordPath.untitledBlock.placeholder",defaultMessage:"Untitled"}),a=t.getRenderUrl({getRecordModel:s,pageVisitSource:f.tY.Email});return(0,x.jsx)(p,{href:`${o}${a}`,style:{display:"inline-block",maxWidth:120,verticalAlign:"top",...l.Z.textOverflowStyle},children:r},e.id)}))}(t,i,(0,r.useIntl)(),n,o);return d.length>0?(0,x.jsxs)("div",{children:[s,(0,g.Z)(d,(e=>(0,x.jsx)("span",{style:{paddingLeft:4,paddingRight:4},children:"/"},`slash:${e}`))),a]}):null}const C=o.memo(y);i(43593),i(17755),i(58102);const j={fontSize:14,lineHeight:1.4};const S={fontWeight:l.Z.fontWeight.semibold};(0,r.injectIntl)((function(e){let{children:t,icon:i,timestamp:n,header:o,intl:r,userTimeZone:s,navigableBlockId:l,getRecordValue:a,baseUrl:d,theme:c,isLast:u}=e;return(0,x.jsxs)("table",{style:{paddingTop:12,paddingBottom:t?0:8,borderSpacing:0,width:"100%",borderCollapse:"separate"},children:[(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{style:{verticalAlign:"top",width:34,minWidth:34,paddingTop:2},children:i}),(0,x.jsx)("td",{children:(0,x.jsx)(I,{timestamp:n,header:o,intl:r,userTimeZone:s,children:t,navigableBlockId:l,getRecordValue:a,baseUrl:d,theme:c})})]}),(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{}),(0,x.jsx)("td",{style:{maxWidth:400},children:t&&(0,x.jsx)(w,{children:t})})]}),(0,x.jsx)(A,{isLast:u,theme:c})]})}));function k(e){return{borderBottom:`1px solid ${e.regularDividerColor}`,marginBottom:4}}function A(e){let{isLast:t,theme:i}=e;return t?null:(0,x.jsx)("tr",{children:(0,x.jsx)("td",{colSpan:2,children:(0,x.jsx)("div",{style:k(i)})})})}function w(e){let{children:t}=e;return(0,x.jsx)("div",{children:t})}function M(e){return{fontSize:12,color:e.lightTextColor,whiteSpace:"nowrap"}}function T(e){return{color:e.lightTextColor,marginLeft:4,marginRight:4}}function I(e){let{timestamp:t,header:i,intl:n,userTimeZone:o,children:r,navigableBlockId:s,getRecordValue:l,baseUrl:c,theme:u}=e;const h=(0,a.Yx)(Math.min(t,Date.now()),"medium_with_time",(0,d.E2)(n),o);return(0,x.jsxs)("div",{style:j,children:[(0,x.jsx)("div",{children:i}),(0,x.jsx)("table",{style:{...M(u),marginTop:4,marginBottom:r?8:4,borderSpacing:0},children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:h}),(0,x.jsx)("td",{children:s&&(0,x.jsx)(C,{getRecordValue:l,blockId:s,baseUrl:c,left:(0,x.jsx)("span",{style:T(u),children:"·"}),userTimeZone:o})})]})})]})}var Z=i(21202),B=i(6287),V=i(33709),R=i(75246),L=i(70203),U=i(33929),_=i(46654),F=i(80444),O=i(6258);function P(e){const{edits:t,rootStore:i}=e,n=h.sv(t.flatMap((e=>e.authors||[])),h.Xy);return h.oA(n.map((e=>H(e,i))))}function N(e,t){const{currentUserStore:i}=F.default.state,o=null==i?void 0:i.id;return function(e,t,i,o){const s=t.find((e=>e.id===i)),l=t.map((t=>(0,n.$4)(e,t))),a={...S,...o};if(1===t.length)return s?(0,x.jsx)("span",{children:(0,x.jsx)(r.FormattedMessage,{defaultMessage:"You",id:"activitySection.authorPhrase.forOneAuthorCurrentUser.label",values:{b:e=>(0,x.jsx)("span",{style:a,children:e})}})}):(0,x.jsx)("span",{children:(0,x.jsx)(r.FormattedMessage,{defaultMessage:"<b>{author}</b>",id:"activitySection.authorPhrase.forOneAuthor.label",values:{author:l[0],b:e=>(0,x.jsx)("span",{style:a,children:e})}})});if(2===t.length){if(s){const i=t.filter((e=>e!==s)).map((t=>(0,n.$4)(e,t)));return(0,x.jsx)("span",{children:(0,x.jsx)(r.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and you",id:"activitySection.authorPhrase.forTwoAuthorsCurrentUser.label",values:{firstAuthor:i[0],b:e=>(0,x.jsx)("span",{style:a,children:e})}})})}return(0,x.jsx)("span",{children:(0,x.jsx)(r.FormattedMessage,{defaultMessage:"<b>{firstAuthor}</b> and <b>{secondAuthor}</b>",id:"activitySection.authorPhrase.forTwoAuthors.label",values:{firstAuthor:l[0],secondAuthor:l[1],b:e=>(0,x.jsx)("span",{style:a,children:e})}})})}if(l.length>2){if(s){const i=t.filter((e=>e!==s)).map((t=>(0,n.$4)(e,t))),o=(0,x.jsx)(r.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, =0 {<b>{firstAuthor}</b>, <b>{secondAuthor}</b> and you} one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, you and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthorsCurrentUser.label",values:{numberOfOtherAuthors:i.length-2,firstAuthor:i[0],secondAuthor:i[1],b:e=>(0,x.jsx)("span",{style:a,children:e})}});return(0,x.jsx)("span",{children:o})}{const e=(0,x.jsx)(r.FormattedMessage,{defaultMessage:"{numberOfOtherAuthors, plural, one {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} other} other {<b>{firstAuthor}</b>, <b>{secondAuthor}</b>, and {numberOfOtherAuthors} others}}",id:"activitySection.authorPhrase.forMoreThanTwoAuthors.label",values:{numberOfOtherAuthors:l.length-2,firstAuthor:l[0],secondAuthor:l[1],b:e=>(0,x.jsx)("span",{style:a,children:e})}});return(0,x.jsx)("span",{children:e})}}return(0,x.jsx)("span",{style:a,children:(0,x.jsx)(r.FormattedMessage,{defaultMessage:"Nobody",id:"activitySection.authorPhrase.forNoAuthors.label"})})}(U.default.getIntl(),e,o,t)}function H(e,t){if(e.table===u.KJ){const i=K(e.id,t);if(i)return(0,n.dp)(i)}else{const i=function(e,t){const i=(0,O.Kv)(t,{table:c.cZ,id:e});return i.getValue()}(e.id,t);if(i)return(0,n.D$)(i)}}function K(e,t){return O.U6.createChildStore(t,{table:u.KJ,id:e}).getValue()}function z(e){const{tab:t,recordId:i,recordType:n,rootStore:o,environment:r}=e;if("all"===t){if(!i)return!1;let e;return e="block"===n?O.G.createChildStore(o,{table:Z.iU,id:i}):"collection"===n?O.NW.createChildStore(o,{table:B.vF,id:i}):O.H2.createChildStore(o,{table:R.bx,id:i}),(0,_.yi)(r,e)}return!1}function E(e){const{activity:t,rootStore:i}=e;if("commented"!==t.type)return;const n=i.getRecordModel({table:V.qF,id:t.discussion_id,spaceId:t.space_id});if(!n)return;const o=n.getPersistedContext();if(!o)return;const r=(0,L.VP_)(o,(e=>!(0,L.xw5)(e)||(0,L.h19)(e)===n.id));return{id:n.id,context:r}}},30134:(e,t,i)=>{i.d(t,{c:()=>r});i(67294);var n=i(45238),o=i(85893);const r=(0,n.IU)("export",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M3.0625 15.8174C2.32422 15.8174 1.76595 15.6305 1.3877 15.2568C1.00944 14.8831 0.820312 14.3294 0.820312 13.5957V6.86914C0.820312 6.13997 1.00944 5.58854 1.3877 5.21484C1.76595 4.83659 2.32422 4.64746 3.0625 4.64746H4.92871V5.99414H3.14453C2.82552 5.99414 2.58171 6.07845 2.41309 6.24707C2.24902 6.41113 2.16699 6.65951 2.16699 6.99219V13.4795C2.16699 13.8122 2.24902 14.0605 2.41309 14.2246C2.58171 14.3932 2.82552 14.4775 3.14453 14.4775H10.8486C11.1631 14.4775 11.4046 14.3932 11.5732 14.2246C11.7464 14.0605 11.833 13.8122 11.833 13.4795V6.99219C11.833 6.65951 11.7464 6.41113 11.5732 6.24707C11.4046 6.07845 11.1631 5.99414 10.8486 5.99414H9.07812V4.64746H10.9375C11.6758 4.64746 12.234 4.83659 12.6123 5.21484C12.9906 5.58854 13.1797 6.13997 13.1797 6.86914V13.5957C13.1797 14.3249 12.9906 14.8763 12.6123 15.25C12.234 15.6283 11.6758 15.8174 10.9375 15.8174H3.0625ZM7 11.3877C6.91797 11.3877 6.83822 11.374 6.76074 11.3467C6.68327 11.3148 6.60124 11.2578 6.51465 11.1758L4.21777 8.96094C4.10384 8.84245 4.04688 8.70801 4.04688 8.55762C4.04688 8.39811 4.09928 8.26823 4.2041 8.16797C4.31348 8.06771 4.44792 8.01758 4.60742 8.01758C4.7806 8.01758 4.92188 8.0791 5.03125 8.20215L5.98828 9.2207L6.43262 9.71973L6.36426 8.70117V1.61914C6.36426 1.45052 6.42578 1.30469 6.54883 1.18164C6.67643 1.05859 6.82682 0.99707 7 0.99707C7.17318 0.99707 7.32129 1.05859 7.44434 1.18164C7.57194 1.30469 7.63574 1.45052 7.63574 1.61914V8.70117L7.56738 9.71973L8.00488 9.2207L8.96191 8.20215C9.07585 8.0791 9.21712 8.01758 9.38574 8.01758C9.54069 8.01758 9.67285 8.06771 9.78223 8.16797C9.89616 8.26823 9.95312 8.39811 9.95312 8.55762C9.95312 8.70801 9.89388 8.84245 9.77539 8.96094L7.47852 11.1758C7.39648 11.2578 7.31673 11.3148 7.23926 11.3467C7.16178 11.374 7.08203 11.3877 7 11.3877Z"})})},23925:(e,t,i)=>{i.d(t,{k:()=>r});i(67294);var n=i(45238),o=i(85893);const r=(0,n.IU)("jira",{viewBox:"0 0 20 20",svg:(0,o.jsx)("path",{d:"M16.8784 2.5H9.65698C9.65698 4.3 11.1141 5.75714 12.9141 5.75714H14.2427V7.04288C14.2427 8.84288 15.6998 10.3 17.4998 10.3V3.12143C17.4998 2.77857 17.2212 2.5 16.8784 2.5Z M13.3001 6.10001H6.07861C6.07861 7.9 7.53574 9.35713 9.33574 9.35713H10.6643V10.6429C10.6643 12.4429 12.1215 13.9 13.9215 13.9V6.72144C13.9215 6.37856 13.6429 6.10001 13.3001 6.10001Z M9.72144 9.70001H2.5C2.5 11.5 3.95714 12.9571 5.75714 12.9571H7.08569V14.2429C7.08569 16.0429 8.54287 17.5 10.3429 17.5V10.3214C10.3429 9.97857 10.0643 9.70001 9.72144 9.70001Z"})})}}]);