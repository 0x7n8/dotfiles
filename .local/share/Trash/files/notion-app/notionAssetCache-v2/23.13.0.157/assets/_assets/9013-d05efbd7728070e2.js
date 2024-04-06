"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9013],{60442:(e,t,a)=>{a.d(t,{Z:()=>n});a(67294);var r=a(37810),i=a(47853),o=a(85893);const n=function(e){let{imageURL:t,imageWidth:a,imageHeight:r,caption:n,title:s}=e;if(t){const e=(0,i.D)(t);return(0,o.jsxs)("div",{style:{width:a||200,marginTop:4,marginBottom:4},children:[(0,o.jsx)("div",{style:{width:"100%",height:r||100,borderRadius:4,backgroundImage:`url(${e})`,backgroundSize:"cover",marginBottom:6}}),(0,o.jsx)(l,{caption:n,title:s})]})}return(0,o.jsx)(l,{caption:n,title:s,style:{width:a}})};function l(e){let{style:t,caption:a,title:i}=e;return(0,o.jsxs)("div",{style:{whiteSpace:"normal",lineHeight:1.4,...t},children:[i&&(0,o.jsx)("header",{style:{fontWeight:r.Z.fontWeight.bold,marginBottom:4},children:i}),a]})}},75546:(e,t,a)=>{a.d(t,{o:()=>c});a(67294);var r=a(480),i=a(86628),o=a(24405),n=a(37810),l=a(95697),s=a(43488),d=a(85893);function c(e){let{teamStore:t,withSelectedStyle:a,style:c}=e;const u=(0,r.Fy)(),m=(0,i.VK)((()=>{var e;return{teamName:t.getName()??"",shouldShowLock:(0,l.C2)(null==t||null===(e=t.getSettingsStore())||void 0===e?void 0:e.getValue())}}),[t]),g=(0,o.yK)((e=>({container:{display:"flex",alignItems:"center",overflow:"hidden"},lockIcon:{width:15,marginLeft:6,marginBottom:1,fill:e.mediumIconColor},labelText:{...n.Z.textOverflowStyle,...a?{color:e.regularTextColor,fontWeight:n.Z.fontWeight.semibold}:{color:e.darkTextColor,fontWeight:n.Z.fontWeight.medium},fontSize:u.isMobile?n.Z.fontSize.UIRegular.mobile:n.Z.fontSize.UIRegular.desktop,...c}})),[u.isMobile,a,c]);return m?(0,d.jsxs)("div",{style:g.container,children:[(0,d.jsx)("div",{style:g.labelText,children:m.teamName}),m.shouldShowLock&&(0,d.jsx)(s.Z,{iconStyle:g.lockIcon})]}):null}},29165:(e,t,a)=>{a.d(t,{O:()=>k});var r=a(67294),i=a(480),o=a(86628),n=a(24405),l=a(29369),s=a(9291),d=a(52337),c=a(80444),u=a(77080),m=a(70704),g=a(75546),p=a(75071),S=a(14720),h=a(64921),y=a(31945),b=a(68785),f=a(14694),v=a(85893);function x(e){let{teamStore:t}=e;const a=(0,i.Fy)(),l=(0,o.VK)((()=>t.canAddOrRemoveTopLevelPages()),[t]),[d,c]=(0,r.useState)(void 0),m=(0,o.VK)((()=>u.default.checkGate("sidebar_redesign")),[]),g=(0,n.yK)((e=>({emptyPlaceholder:{color:e.lightTextColor,paddingLeft:12,...!a.isMobile&&{fontSize:14},...a.isMobile&&{display:"flex",alignItems:"center",height:32},display:"flex",alignItems:"center"},addPageButtonText:{color:e.mediumTextColor},addPageButton:m?{borderRadius:12,height:32,display:"flex"}:{borderRadius:4,marginLeft:4,marginRight:4},addPageButtonHovered:{background:m?e.newSidebarItemSelectedBackground:e.sidebarItemSelectedBackground},addPageIconContainer:{display:"flex",alignItems:"center",justifyContent:"center"},addPageIcon:{fill:e.mediumIconColor,width:16,height:16}})),[a.isMobile,m]),x=(0,o.VK)((()=>u.default.checkGate("sidebar_redesign")),[]);return l?(0,v.jsx)(y.ZP,{popupType:y.Z4.Popup,alignmentToOrigin:y.vR.Start,originGap:2,originRect:d,renderOrigin:e=>(0,v.jsx)(h.Z,{mobileFeedback:a.isMobile,style:g.addPageButton,...e,hoveredStyle:x?g.addPageButtonHovered:void 0,onClick:t=>{c(new DOMRect(t.clientX,t.clientY)),e.onClick(t)},children:(0,v.jsx)(f.Z,{style:g.addPageButtonText,disableMobileBorder:!0,left:(0,v.jsx)("div",{style:g.addPageIconContainer,children:(0,p.f)(g.addPageIcon)}),children:(0,v.jsx)(s.FormattedMessage,{id:"teamOutliner.addPage",defaultMessage:"Add a page"})})}),render:e=>(0,v.jsx)(S.p7,{renderLoading:e=>(0,v.jsx)("div",{style:S.Ry.LazyTeamAddAppTemplateMenu,children:e&&(0,v.jsx)(b.Z,{})}),teamStore:t,closePopup:e.close,from:"sidebar_team_empty_new_page"})}):(0,v.jsx)(f.Z,{disableMobileBorder:!0,children:(0,v.jsx)("div",{style:g.emptyPlaceholder,children:(0,v.jsx)("span",{children:(0,v.jsx)(s.FormattedMessage,{defaultMessage:"No pages inside",id:"teamOutliner.noOverflowEmptyMessage"})})})})}var j=a(54396),T=a(32006);function k(e){let{teamStore:t,sidebarState:a,isLastTeam:r,initialToggleState:p,shouldPersistToggleState:S,customToggleStore:h,teamOutlinerType:y,onNavigate:b,onTeamJoinComplete:f,sidebarTourStep:j}=e;const{currentSpaceStore:k,currentSpaceViewStore:w,currentUserSettingsStore:I}=(0,o.VK)((()=>{const{currentSpaceStore:e,currentSpaceViewStore:t,currentUserSettingsStore:a}=c.default.state;return{currentSpaceStore:e,currentSpaceViewStore:t,currentUserSettingsStore:a}}),[]),M=(0,o.qz)(void 0,m.Z),B=h??M,C=(0,o.VK)((()=>t.getTeamPagesStores()),[t]),P=(0,i.Fy)(),Z=(0,o.VK)((()=>{const e=c.default.state.mainEditorCurrentBlockStore;return(null==e?void 0:e.getParentTable())===l.e0&&(null==e?void 0:e.getParentId())===t.id&&!P.isMobile&&B.state.isHidden}),[P.isMobile,t.id,B]),K=(0,o.VK)((()=>u.default.checkGate("sidebar_redesign")),[]),L=(0,n.yK)((e=>({label:K?{color:e.v2.text.primary}:{}})),[K]);return k&&w&&I?(0,v.jsx)(d.Z,{type:"team",customToggleButtonStore:B,forceHoveredButtonStyle:Z,initialToggleState:p,shouldPersistToggleState:S,teamHeaderLabel:(0,v.jsx)(g.o,{teamStore:t,withSelectedStyle:Z,style:L.label}),teamStore:t,spaceStore:k,spaceViewStore:w,showAddButton:!1,isLastTeam:r,teamOutlinerType:y,labelTooltip:(0,v.jsx)(s.FormattedMessage,{defaultMessage:"One of your teams",id:"sidebar.teamSection.tooltip"}),onTeamJoinComplete:f,marginBottomOverrideWhenExpanded:P.isMobile?0:16,marginBottomOverrideWhenCollapsed:P.isMobile?0:1,renderSidebar:e=>{let{labelAriaId:r,contentsAriaId:i}=e;if(!t)return;const o=new Set(C.map((e=>e.id))),n=(0,v.jsxs)("div",{style:K?{marginLeft:8}:{},children:[(0,v.jsx)(V,{teamSectionType:y,sidebarState:a,teamStore:t,onNavigate:b,labelAriaId:r,contentsAriaId:i}),0===o.size&&(0,v.jsx)(x,{teamStore:t})]});return j?(0,v.jsx)(T.$,{step:j,children:n}):n}}):null}const V=r.memo((e=>{const{teamSectionType:t,teamStore:a,sidebarState:i,contentsAriaId:o,onNavigate:n,labelAriaId:l}=e,s=(0,r.useMemo)((()=>({type:"team",teamSectionType:t,teamStore:a})),[t,a]),d=(0,r.useMemo)((()=>({id:o,"aria-labelledby":l})),[o,l]);return(0,v.jsx)(j.r,{state:s,sidebarState:i,onNavigate:n,additionalOutlinerProps:d})}))},54396:(e,t,a)=>{a.d(t,{r:()=>y});var r=a(67294),i=a(480),o=a(86628),n=a(24405),l=a(1898),s=a(83105),d=a(35026),c=a(80444),u=a(77080),m=a(46735),g=a(99757),p=a(3392),S=a(58929),h=a(85893);function y(e){const{state:t,sidebarState:a,onNavigate:y,additionalOutlinerProps:b,id:f,isHeaderless:v}=e,x=(0,o.VK)((()=>c.default.state.currentSpaceStore),[]),j=(0,o.VK)((()=>c.default.state.currentSpaceViewStore),[]),T=(0,i.O7)(),k=(0,i.Fy)().isMobile,V=(0,o.VK)((()=>!g.n.state),[]),w=(0,o.VK)((()=>(null==x?void 0:x.canEdit())&&V),[x,V]),I=(0,o.VK)((()=>t),[t]),M=(0,o.VK)((()=>{if(j)return(0,d.EE)({currentSpaceViewStore:j,typeWithTeam:I,environment:T,sidebarState:a})}),[j,T,a,I]),B=(0,o.VK)((()=>{if(j&&x)return(0,d.P4)({currentSpaceStore:x,currentSpaceViewStore:j,typeWithTeam:I})}),[x,j,I]),C=(0,r.useCallback)((e=>{switch(I.type){case"bookmarks":m.Z.recordVisit({id:e.id,systemBlockType:e.getSystemBlockTypeStore().getValue(),type:s.vu.Favorite,currentUserId:T.currentUser.id});break;case"team":case"workspace":case"shared":m.Z.recordVisit({id:e.id,systemBlockType:e.getSystemBlockTypeStore().getValue(),type:s.vu.Link,currentUserId:T.currentUser.id});break;case"private":break;default:(0,l.t1)(I)}null==y||y()}),[T.currentUser.id,y,I]),P=(0,o.VK)((()=>u.default.checkGate("sidebar_redesign")),[]),Z=(0,n.yK)((()=>({outliner:{display:"block"},outlinerItem:{...P?{paddingTop:5,paddingBottom:5,paddingLeft:10}:{},...k&&"team"===I.type?{paddingLeft:S.gZ+S.aZ}:void 0}})),[k,I.type,P]);return x&&j&&M?(0,h.jsx)(p.Z,{type:I.type,disabled:!w,itemDepth:0,childStores:M,parentStore:B,style:Z.outliner,itemStyle:Z.outlinerItem,onNavigate:C,id:f,"aria-labelledby":e["aria-labelledby"],isHeaderless:v,...b}):null}},32006:(e,t,a)=>{a.d(t,{$:()=>d});var r=a(67294),i=a(86628),o=a(14720),n=a(28451),l=a(77999),s=a(85893);function d(e){let{children:t,step:a}=e;const d=(0,i.VK)((()=>l.default.state),[]),u=r.useRef(null);return"inactive"===d.type?t:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{ref:u,children:t}),(0,s.jsx)(n.g,{calloutId:"sidebar_tour",shouldShow:d.step===a,children:(0,s.jsx)(o.cG,{step:d.step,contentRef:u})})]})}const c=r.forwardRef(((e,t)=>{let{children:a}=e;return(0,s.jsx)("div",{ref:t,children:a})}))},43488:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var r=a(16184),i=a(9291),o=a(26388),n=a(85893);function l(e){let{iconStyle:t}=e;return(0,n.jsx)(o.ZP,{textWrap:!0,style:{width:210},placement:o.ug.Bottom,renderTooltip:()=>(0,n.jsx)(i.FormattedMessage,{id:"teamLockIcon.tooltip",defaultMessage:"Private teamspaces can only be accessed or joined by invitation"}),render:e=>(0,n.jsx)("div",{...e,children:(0,r.Q)(t)})})}},82593:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(480),i=a(86628),o=a(30397);function n(){const e=(0,r.O7)().currentUser.id,t=(0,i.Kw)(o.Z);return(0,i.VK)((()=>t.teams.filter((t=>e&&t.isDefined()&&!t.isNonGuestMember(e)))),[e,t.teams])}},16184:(e,t,a)=>{a.d(t,{Q:()=>o});a(67294);var r=a(45238),i=a(85893);const o=(0,r.IU)("lockedFilled",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M4.69141 14.6338H11.3018C12.2178 14.6338 12.6689 14.1826 12.6689 13.1914V8.08496C12.6689 7.18945 12.293 6.72461 11.541 6.64941V4.96094C11.541 2.36328 9.81152 1.1123 7.99316 1.1123C6.18164 1.1123 4.45215 2.36328 4.45215 4.96094V6.67676C3.74805 6.78613 3.32422 7.2373 3.32422 8.08496V13.1914C3.32422 14.1826 3.77539 14.6338 4.69141 14.6338ZM5.75098 4.83105C5.75098 3.22461 6.76953 2.35645 7.99316 2.35645C9.2168 2.35645 10.2422 3.22461 10.2422 4.83105V6.64258L5.75098 6.64941V4.83105Z"})})},35840:(e,t,a)=>{a.d(t,{R:()=>o,T:()=>i});a(67294);var r=a(45238);const i=(0,a(85893).jsx)("path",{d:"M.281 6.438c0-.875.164-1.696.492-2.461a6.484 6.484 0 011.375-2.032A6.237 6.237 0 016.64.078 6.2 6.2 0 019.11.57c.77.328 1.447.787 2.03 1.375a6.374 6.374 0 011.368 2.032c.333.765.5 1.586.5 2.46 0 .688-.107 1.342-.32 1.961a6.28 6.28 0 01-.868 1.696l3.563 3.578c.11.104.19.226.242.367.057.14.086.29.086.445 0 .22-.05.417-.149.594a1.122 1.122 0 01-1 .57c-.156 0-.307-.028-.453-.086a1.058 1.058 0 01-.382-.25l-3.586-3.585c-.5.333-1.047.596-1.641.789a6.089 6.089 0 01-1.86.28 6.237 6.237 0 01-2.468-.491 6.4 6.4 0 01-2.024-1.367A6.509 6.509 0 01.773 8.913a6.256 6.256 0 01-.492-2.476zm1.664 0c0 .65.12 1.26.36 1.828a4.775 4.775 0 001.015 1.5c.433.427.933.763 1.5 1.007a4.548 4.548 0 001.82.368c.652 0 1.261-.123 1.829-.368a4.747 4.747 0 002.508-2.507 4.567 4.567 0 00.367-1.829c0-.645-.123-1.252-.367-1.82a4.776 4.776 0 00-1.016-1.5A4.578 4.578 0 008.469 2.11a4.567 4.567 0 00-1.828-.367c-.646 0-1.253.123-1.82.367a4.667 4.667 0 00-1.5 1.008c-.433.432-.772.932-1.016 1.5a4.633 4.633 0 00-.36 1.82z"}),o=(0,r.IU)("search",{viewBox:"0 0 16 16",svg:i})}}]);