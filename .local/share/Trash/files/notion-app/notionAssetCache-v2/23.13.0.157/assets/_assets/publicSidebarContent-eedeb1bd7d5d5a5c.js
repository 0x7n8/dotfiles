"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1407],{55587:(e,t,i)=>{i.d(t,{j:()=>l});var o=i(89101),n=i(32441),r=i(69915);async function l(e){n.T3(e,{variant:"open_notion"}),n.eb(e,{target:"open_notion"}),await r.yF(e,{utmContent:"topbar_cta",nextRoute:o._j.root})}},14694:(e,t,i)=>{i.d(t,{Z:()=>h});i(67294);var o=i(480),n=i(86628),r=i(24405),l=i(39567),a=i(50659),d=i(77080),s=i(85893);function c(){const e=(0,r.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,s.jsx)("div",{children:(0,l.Y)(e.icon)})}function h(e){var t;const i=(0,o.O7)(),l=i.device.isMobile,h=(0,n.VK)((()=>{var t,o;if(l)return i.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(o=e.style)||void 0===o?void 0:o.paddingLeft:10)}),[i.WindowSizeStore,l,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),u=(0,n.VK)((()=>d.default.checkGate("sidebar_redesign")),[]),g=(0,r.yK)((t=>({wrapper:{...l?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:h,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,color:u?e.isBottomItem?t.mediumTextColor:t.v2.text.primary:void 0,fontWeight:u?450:void 0,minHeight:e.isBottomItem?24:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,a.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:l?28:22,height:l?24:18,marginLeft:u?void 0:-3,marginRight:u?8:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:4,color:t.mediumTextColor,width:l?26:22,height:l?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!l?"clip":"ellipsis",...e.childrenStyle}})),[l,h,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.isBottomItem,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle,u]);return(0,s.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:g.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,s.jsx)("div",{style:g.left,children:e.left}),e.icon&&(0,s.jsxs)("div",{style:g.icon,children:[e.icon,e.isAlias&&(0,s.jsx)(c,{})]}),(0,s.jsx)("div",{style:g.children,children:e.children}),e.right&&(0,s.jsx)("div",{style:g.right,children:e.right})]})}},37712:(e,t,i)=>{i.d(t,{A:()=>l});i(67294);var o=i(86628),n=i(24405),r=i(85893);function l(e){let{scrollerStore:t}=e;const i=(0,o.VK)((()=>0===t.state.scrollTop),[t]),l=(0,n.yK)((e=>({border:{width:"100%",boxShadow:i?"0 0 0 transparent":`0 1px 0 ${e.regularDividerColor}`,transition:"box-shadow 300ms",height:2,marginTop:-2,zIndex:99}})),[i]);return(0,r.jsx)("div",{style:l.border})}},22165:(e,t,i)=>{i.d(t,{C:()=>y,V:()=>C});i(67294);var o=i(480),n=i(86628),r=i(24405),l=i(97439),a=i(9291),d=i(28020),s=i(43250),c=i(16746),h=i(74948),u=i(38676),g=i(24042),p=i(23063),x=i(73063),b=i(58261),f=i(26388),m=i(85893);function C(e){let{}=e;const t=(0,o.O7)(),i=(0,o.Fy)(),r=(0,a.useIntl)(),s=(0,n.VK)((()=>!u.sidebarMouseEnteredStore.state),[]),p=(0,n.VK)((()=>g.Z.state.isShowingTabBar||!1),[]),x=(0,n.VK)((()=>d.tu.state),[]),b=r.formatMessage({defaultMessage:"Close sidebar",id:"sidebarUnexpandButton.closeSidebar.tooltip"});return(0,m.jsx)(y,{shouldHide:i.isElectronMac&&x||p||s,icon:l.D,caption:b,onClick:()=>{h.setExpand({environment:t,isExpanded:!1,from:"topbar_sidebar_unexpand_button"}),c.Z.isVisible()&&h.close()},keyboardShortcutName:"toggleSidebar",isElectron:i.isElectron})}function y(e){const t=(0,o.Fy)(),i=(0,r.yK)((e=>({keyboardShortcut:{color:e.mediumInvertedTextColor}})),[]),n=e.isElectron&&!e.shouldHide?1:0,l=e.shouldHide?0:1,a=e.keyboardShortcutName;return(0,m.jsx)(f.ZP,{disableTooltip:e.shouldHide,renderTooltip:()=>(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:e.caption}),a&&(0,m.jsx)(b.Z,{style:i.keyboardShortcut,name:a})]}),originGap:6,render:i=>(0,m.jsx)(p.Z,{isVisible:!0,animationStyle:{opacity:l},enterAnimationStyle:{opacity:n},render:()=>(0,m.jsx)(x.Z,{ariaLabel:e.caption,disabled:e.shouldHide,icon:e.icon,style:{position:"relative",marginLeft:10,...t.isMobile&&{height:"100%"},...e.style},iconStyle:{width:16,height:16},mobileFeedback:t.isMobile,onClick:e.onClick,className:s.Mfh,...i})})})}},50659:(e,t,i)=>{i.d(t,{G$:()=>l,MF:()=>a,Z3:()=>r});var o=i(77080);const n=4;function r(e){let{isMobile:t}=e;const i=o.default.checkGate("sidebar_redesign");return{...!t&&{borderRadius:i?12:3}}}function l(e){let{isMobile:t}=e;return t?{}:{...r({isMobile:t}),display:"flex",marginLeft:n,marginRight:n,width:`calc(100% - ${2*n}px)`,transition:"background 100ms ease-out"}}function a(){return{paddingLeft:14-n,paddingRight:14-n}}},77479:(e,t,i)=>{i.r(t),i.d(t,{PublicPageSidebarContent:()=>B});i(67294);var o=i(86628),n=i(75246),r=i(51),l=i(80444),a=i(6258),d=i(480),s=i(24405),c=i(60651),h=i(80503),u=i(37810),g=i(55587),p=i(89728),x=i(22165),b=i(85893);function f(e){const t=(0,d.O7)(),i=(0,s.yK)((e=>({header:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:h.TT,flexShrink:0,flexGrow:0,paddingLeft:16,paddingRight:16},notionLogoContainer:{fontWeight:u.Z.fontWeight.semibold,fontSize:15,padding:0,cursor:"pointer"},notionLogoStyle:{width:20,height:20,marginRight:6}})),[]);return(0,b.jsxs)("div",{style:i.header,children:[(0,b.jsx)("span",{onClick:async()=>{await g.j(t)},children:(0,b.jsx)(p.Z,{style:i.notionLogoContainer,disabled:!0,icon:()=>(0,c.h)(i.notionLogoStyle),children:"Notion"})}),(0,b.jsx)(x.V,{})]})}var m=i(69246),C=i(21202),y=i(9291),v=i(53336),S=i(37712),L=i(52337),w=i(34859),j=i(45589),k=i(3392);function M(e){const t=(0,o.qz)(void 0,j.Z),i=(0,o.VK)((()=>r.Z.state.publicPageData),[]),n=(0,o.VK)((()=>l.default.state.mainEditorCurrentBlockStore),[]),d=(0,o.VK)((()=>{var e;return n&&null!=i&&null!==(e=i.template)&&void 0!==e&&e.blockId?[a.t1.createChildStore(n,{table:C.iU,id:i.template.blockId,spaceId:i.spaceId})]:[]}),[n,i]),c=(0,s.yK)((e=>({scroller:{height:"100%"},outliner:{display:"block"},adjustAlignmentForScrollBorder:{marginTop:-1}})),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{style:c.adjustAlignmentForScrollBorder,children:(0,b.jsx)(S.A,{scrollerStore:t})}),(0,b.jsx)(v.Z,{type:w.Z.Y,store:t,style:c.scroller,children:(0,b.jsx)(L.Z,{type:m.g$,sectionLabel:(0,b.jsx)(y.FormattedMessage,{id:"publicPageSidebarScrollableOutliner.templateSectionLabel",defaultMessage:"Template includes"}),shouldPersistToggleState:!0,spaceStore:e.spaceStore,spaceViewStore:void 0,showAddButton:!1,labelTooltip:null,renderSidebar:()=>(0,b.jsx)(k.Z,{id:m.g$,type:m.g$,childStores:d,parentStore:void 0,disabled:!0,style:c.outliner,itemDepth:0,itemOpenByDefault:!0,"aria-labelledby":"template-includes",isHeaderless:!1})})},m.g$)]})}function B(e){const t=(0,o.VK)((()=>l.default.state.mainEditorCurrentBlockStore),[]),i=(0,o.VK)((()=>r.Z.state.publicPageData),[]),d=(0,o.VK)((()=>{if(t&&null!=i&&i.spaceId)return a.t1.createChildStore(t,{table:n.bx,id:i.spaceId})}),[t,i]);return d?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{}),(0,b.jsx)(M,{spaceStore:d})]}):null}},64878:(e,t,i)=>{i.d(t,{h:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.IU)("dot",{viewBox:"0 0 5 4",svg:(0,n.jsx)("circle",{cx:"2.5",cy:"2",r:"2"})})},97439:(e,t,i)=>{i.d(t,{D:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.IU)("doubleChevronLeft",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.07031 13.8887C7.2207 14.0391 7.40527 14.1211 7.62402 14.1211C8.06836 14.1211 8.41699 13.7725 8.41699 13.3281C8.41699 13.1094 8.32812 12.9043 8.17773 12.7539L3.37207 8.05762L8.17773 3.375C8.32812 3.21777 8.41699 3.0127 8.41699 2.80078C8.41699 2.35645 8.06836 2.00781 7.62402 2.00781C7.40527 2.00781 7.2207 2.08984 7.07031 2.24023L1.73828 7.44922C1.56055 7.62012 1.46484 7.8252 1.46484 8.06445C1.46484 8.29688 1.55371 8.49512 1.73828 8.67969L7.07031 13.8887ZM13.1748 13.8887C13.3252 14.0391 13.5098 14.1211 13.7354 14.1211C14.1797 14.1211 14.5283 13.7725 14.5283 13.3281C14.5283 13.1094 14.4395 12.9043 14.2891 12.7539L9.4834 8.05762L14.2891 3.375C14.4395 3.21777 14.5283 3.0127 14.5283 2.80078C14.5283 2.35645 14.1797 2.00781 13.7354 2.00781C13.5098 2.00781 13.3252 2.08984 13.1748 2.24023L7.84961 7.44922C7.66504 7.62012 7.57617 7.8252 7.56934 8.06445C7.56934 8.29688 7.66504 8.49512 7.84961 8.67969L13.1748 13.8887Z"})})},60651:(e,t,i)=>{i.d(t,{h:()=>r});i(67294);var o=i(45238),n=i(85893);const r=(0,o.IU)("notionLogo",{viewBox:"0 0 120 126",svg:(0,n.jsx)("path",{d:"M 20.6927 21.9315C 24.5836 25.0924 26.0432 24.8512 33.3492 24.3638L 102.228 20.2279C 103.689 20.2279 102.474 18.7705 101.987 18.5283L 90.5477 10.2586C 88.3558 8.55699 85.4356 6.60818 79.8387 7.09563L 13.1433 11.9602C 10.711 12.2014 10.2251 13.4175 11.1939 14.3924L 20.6927 21.9315ZM 24.8281 37.9835L 24.8281 110.456C 24.8281 114.351 26.7745 115.808 31.1553 115.567L 106.853 111.187C 111.236 110.946 111.724 108.267 111.724 105.103L 111.724 33.1169C 111.724 29.958 110.509 28.2544 107.826 28.4976L 28.721 33.1169C 25.8018 33.3622 24.8281 34.8225 24.8281 37.9835ZM 99.5567 41.8711C 100.042 44.0622 99.5567 46.2512 97.3618 46.4974L 93.7143 47.2241L 93.7143 100.728C 90.5477 102.43 87.6275 103.403 85.1942 103.403C 81.2983 103.403 80.3226 102.186 77.4044 98.54L 53.5471 61.087L 53.5471 97.3239L 61.0964 99.0275C 61.0964 99.0275 61.0964 103.403 55.0057 103.403L 38.2148 104.377C 37.727 103.403 38.2148 100.973 39.9179 100.486L 44.2996 99.2717L 44.2996 51.36L 38.2158 50.8725C 37.728 48.6815 38.9431 45.5225 42.3532 45.2773L 60.3661 44.0631L 85.1942 82.0036L 85.1942 48.4402L 78.864 47.7136C 78.3781 45.0351 80.3226 43.0902 82.7569 42.849L 99.5567 41.8711ZM 7.5434 5.39404L 76.9175 0.285276C 85.4366 -0.445402 87.6285 0.0440428 92.983 3.93368L 115.128 19.4982C 118.782 22.1747 120 22.9034 120 25.8211L 120 111.187C 120 116.537 118.051 119.701 111.237 120.185L 30.6734 125.05C 25.5584 125.294 23.124 124.565 20.4453 121.158L 4.13735 99.9994C 1.21516 96.1048 0 93.191 0 89.7819L 0 13.903C 0 9.5279 1.94945 5.8785 7.5434 5.39404Z"})})}}]);