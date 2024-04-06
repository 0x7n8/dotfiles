"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2904],{93481:(e,t,n)=>{n.d(t,{Z:()=>D});var o=n(67294),i=n(480),s=n(84747),a=n(86628),l=n(24405),r=n(69651),d=n(9291),c=n(1898),u=n(45257),C=n(97638),p=n(41558),m=n(52275),g=n(3386),h=n(89728),v=n(53437),f=n(58297),b=n(83264),x=n(255),M=n(75689),k=n(91642),j=n(8319),Z=n(85893);const D=function(e){let{onChange:t,onMenuDismiss:n,showButtons:o,title:l,value:r,disabled:d,dateFormat:c,icon:u,mode:C,focused:m}=e;const g=(0,i.O7)(),h=(0,a.qz)(void 0,p.Z);(0,s.Z)((()=>{P({value:r},h)}));const{device:v}=g;return v.isMobile?(0,Z.jsx)(V,{onChange:t,onMenuDismiss:n,showButtons:o,title:l,value:r,disabled:d,dateFormat:c,icon:u,mode:C,store:h}):(0,Z.jsx)(L,{onChange:t,onMenuDismiss:n,showButtons:o,title:l,value:r,disabled:d,dateFormat:c,focused:m,icon:u,mode:C,store:h})};function y(e){const{device:t}=e;return t.isMobile?v.ZP.PopupType.SlideUp:v.ZP.PopupType.Popup}function w(e){return{buttonMenuItem:{color:e.mediumTextColor},activeMenuItem:{color:e.regularTextColor}}}function I(e){e.preventDefault&&e.preventDefault()}function T(e){e({starting:void 0,ending:void 0})}function B(e){return{menuItem:{minHeight:void 0,paddingTop:e.device.isMobile?12:4,paddingBottom:e.device.isMobile?12:4},icon:{height:14,width:14,fill:"currentColor"},iconActiveDesktop:{height:14,width:14,fill:"currentColor",alignSelf:"flex-start",marginTop:2,marginRight:2},iconActiveDesktopWrapper:{marginTop:0},iconActiveMobile:{height:14,width:14,fill:"currentColor",marginTop:1,marginRight:6},popup:{paddingTop:12,paddingBottom:8},menuItemTitleDesktop:{width:"100%"},sectionMenuItem:{display:"flex"},summary:{display:"inline-flex"}}}function F(e,t){t||e.setState({...e.state,isOpen:!0,focus:"starting"})}function S(e,t,n,o,i){const{temporaryDateRange:s}=n.state;C.zD(e)||(i||t(s),n.setState({...n.state,isOpen:!1,temporaryDateRange:{starting:void 0,ending:void 0}}),o&&o())}function P(e,t){if(!e.error)return t.setState({...t.state,temporaryDateRange:{...t.state.temporaryDateRange,...e.value}})}function O(e){let{disabled:t,icon:n,title:s,store:a}=e;const l=(0,i.O7)(),r=(0,o.useCallback)((()=>F(a,t)),[a,t]),d=B(l);return(0,Z.jsx)(m.Z,{disabled:t,focused:!1,icon:n(d.icon),title:s,onClick:r})}function R(e){let{disabled:t,title:n,value:s,dateFormat:a,onChange:l,store:c}=e;const u=(0,d.useIntl)(),p=(0,i.O7)(),m=(0,o.useCallback)((()=>F(c,t)),[c,t]),g=B(p),h=(0,Z.jsxs)("div",{style:g.summary,children:[(0,r.C)(g.iconActiveMobile),C._Q(s,u,a)]});return(0,Z.jsx)(M.Z,{disabled:t,onClick:m,onClickClear:()=>T(l),label:n,title:h})}function H(e){let{disabled:t,value:n,dateFormat:s,focused:a,onChange:c,store:u}=e;const p=(0,d.useIntl)(),g=(0,l.Fg)(),h=(0,i.O7)(),v=(0,o.useCallback)((()=>F(u,t)),[u,t]),f=B(h),b=w(g),M={...f.menuItem,...b.activeMenuItem},k=C._Q(n,p,s),j=(0,Z.jsx)(x.Z,{onClick:()=>T(c),disabled:t});return(0,Z.jsx)(m.Z,{focused:a,disabled:t,icon:(0,r.C)(f.iconActiveDesktop),title:k,right:j,isTokenTitle:!0,alignIconTop:!0,onClick:v,desktopTitleStyle:f.menuItemTitleDesktop,desktopIconStyle:f.iconActiveDesktopWrapper,style:M})}function A(e){let{disabled:t,title:n,icon:s,focused:a,mode:r,store:d}=e;const c=(0,l.Fg)(),u=(0,i.O7)(),C=(0,o.useCallback)((()=>F(d,t)),[d,t]),p=B(u),g=w(c),h={...p.menuItem,...g.buttonMenuItem,...r===j.z.Pill?{width:"fit-content",border:"solid 1px",paddingLeft:0,paddingRight:0,borderRadius:20,fontSize:12}:{}};return(0,Z.jsx)(m.Z,{focused:a,disabled:t,icon:s(p.icon),title:n,onClick:C,style:h})}function z(e){let{disabled:t,value:n,title:i,store:s}=e;const a=(0,o.useCallback)((()=>F(s,t)),[s,t]);return(0,Z.jsx)(u.Z,{on:Boolean(n.starting||n.ending),icon:(0,r.C)({width:16,marginRight:6,fill:"currentColor"}),title:(0,Z.jsx)("span",{children:i}),onClick:a})}function U(e){let{onChange:t,onMenuDismiss:n,showButtons:i,title:s,value:l,store:r}=e;const c=(0,o.useCallback)((e=>S(e,t,r,n,i)),[t,r,n,i]),u=(0,o.useCallback)((e=>P(e,r)),[r]),C=(0,a.VK)((()=>function(e,t){const{temporaryDateRange:n}=t.state;return{...e,...n}}(l,r)),[r,l]);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(b.Z,{title:s,value:C,onUpdate:u,store:r,onDismiss:c}),i&&(0,Z.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",padding:"0px 10px"},children:[(0,Z.jsx)(h.Z,{isGray:!0,style:{marginLeft:"auto",marginRight:8},onClick:c,children:(0,Z.jsx)(d.FormattedMessage,{defaultMessage:"Cancel",id:"searchDateFilter.cancelButton.label"})}),(0,Z.jsx)(f.Z,{onClick:()=>t(r.state.temporaryDateRange),children:(0,Z.jsx)(d.FormattedMessage,{defaultMessage:"Accept",id:"searchDateFilter.acceptButton.label"})})]})]})}function L(e){let{mode:t,onChange:n,onMenuDismiss:s,showButtons:l,title:r,value:d,disabled:u,dateFormat:C,focused:p,icon:m,store:h}=e;const f=(0,i.O7)(),b=(0,o.useCallback)((e=>S(e,n,h,s,l)),[n,h,s,l]),x=(0,o.useCallback)((()=>(0,Z.jsx)(U,{onChange:n,onMenuDismiss:s,showButtons:l,title:r,value:d,store:h})),[n,s,l,r,d,h]),M=B(f),D=t===j.z.Section,w=D?r:void 0,T=t===j.z.Section?(0,Z.jsx)(H,{disabled:u,value:d,dateFormat:C,focused:p,onChange:n,store:h}):t===j.z.Button?(0,Z.jsx)(A,{disabled:u,title:r,icon:m,focused:p,mode:t,store:h}):t===j.z.Pill?(0,Z.jsx)(z,{disabled:u,value:d,title:r,store:h}):void(0,c.t1)(t),F=(0,a.VK)((()=>h.state.isOpen),[h]);return(0,Z.jsx)(k.Z,{title:w,marginAfter:D,children:(0,Z.jsx)(g.Z,{debugName:"SearchDateFilter",capture:F,onUp:I,onDown:I,onEnter:I,children:(0,Z.jsx)(v.ZP,{popupType:y(f),open:F,origin:T,render:x,onDismiss:b,placementToOrigin:v.ZP.Placement.Bottom,alignmentToOrigin:v.ZP.Alignment.Start,keepFocus:!0,style:M.popup})})})}function V(e){let{mode:t,onChange:n,onMenuDismiss:i,showButtons:s,title:l,value:r,disabled:d,dateFormat:c,icon:u,store:C}=e;const p=(0,a.VK)((()=>C.state.isOpen),[C]),m=(0,o.useCallback)((e=>S(e,n,C,i,s)),[n,C,i,s]),g=(0,o.useCallback)((()=>(0,Z.jsx)(U,{onChange:n,onMenuDismiss:i,showButtons:s,title:l,value:r,store:C})),[n,i,s,l,r,C]),h=t===j.z.Section?(0,Z.jsx)(R,{disabled:d,title:l,value:r,dateFormat:c,onChange:n,store:C}):(0,Z.jsx)(O,{disabled:d,icon:u,title:l,store:C});return(0,Z.jsx)(v.ZP,{popupType:v.ZP.PopupType.SlideUp,open:p,origin:h,render:g,onDismiss:m,preventScaleTransition:!0})}},63334:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(49085);class i extends o.default{getInitialState(){return{}}}const s=i},45325:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(49085);class i extends o.default{getInitialState(){return{discussionIdToExpansionStartPointMap:{}}}}const s=new i},6637:(e,t,n)=>{n.d(t,{I:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.IU)("filterCircled",{viewBox:"0 0 16 16",svg:(0,i.jsx)("path",{d:"M8 15.126C11.8623 15.126 15.0615 11.9336 15.0615 8.06445C15.0615 4.20215 11.8623 1.00293 7.99316 1.00293C4.13086 1.00293 0.938477 4.20215 0.938477 8.06445C0.938477 11.9336 4.1377 15.126 8 15.126ZM8 13.7383C4.85547 13.7383 2.33301 11.209 2.33301 8.06445C2.33301 4.91992 4.84863 2.39746 7.99316 2.39746C11.1377 2.39746 13.667 4.91992 13.6738 8.06445C13.6738 11.209 11.1445 13.7383 8 13.7383ZM4.41797 6.75879H11.5889C11.9307 6.75879 12.1699 6.54688 12.1699 6.22559C12.1699 5.9043 11.9307 5.68555 11.5889 5.68555H4.41797C4.07617 5.68555 3.84375 5.9043 3.84375 6.22559C3.84375 6.54688 4.07617 6.75879 4.41797 6.75879ZM5.36816 9.02148H10.6455C10.9805 9.02148 11.2197 8.80273 11.2197 8.48145C11.2197 8.16016 10.9805 7.94141 10.6455 7.94141H5.36816C5.02637 7.94141 4.78711 8.16016 4.78711 8.48145C4.78711 8.80273 5.02637 9.02148 5.36816 9.02148ZM6.35254 11.2773H9.6543C9.99609 11.2773 10.2354 11.0654 10.2354 10.7441C10.2354 10.4229 9.99609 10.2041 9.6543 10.2041H6.35254C6.01074 10.2041 5.77148 10.4229 5.77148 10.7441C5.77148 11.0654 6.01074 11.2773 6.35254 11.2773Z"})})},53392:(e,t,n)=>{n.d(t,{K:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.IU)("hamburgerMenuRound",{viewBox:"0 0 20 20",svg:(0,i.jsx)("path",{d:"M17.266 5.758H2.734a.713.713 0 0 1-.523-.219A.719.719 0 0 1 2 5.023a.737.737 0 0 1 .734-.75h14.532c.209 0 .383.073.523.22.14.145.211.322.211.53 0 .204-.07.378-.21.524a.71.71 0 0 1-.524.21ZM17.266 10.742H2.734a.713.713 0 0 1-.523-.219.719.719 0 0 1-.211-.515.737.737 0 0 1 .734-.75h14.532c.209 0 .383.073.523.219.14.145.211.322.211.53 0 .204-.07.378-.21.524a.71.71 0 0 1-.524.211ZM17.266 15.727H2.734a.713.713 0 0 1-.523-.22.719.719 0 0 1-.211-.515c0-.208.07-.385.21-.531a.713.713 0 0 1 .524-.219h14.532c.209 0 .383.073.523.219.14.146.211.323.211.531 0 .203-.07.378-.21.524a.71.71 0 0 1-.524.21Z"})})},22962:(e,t,n)=>{n.d(t,{O:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.IU)("mention",{viewBox:"0 0 20 20",svg:(0,i.jsx)("path",{d:"M1 9.86523C1 15.2939 4.72705 18.6807 9.98975 18.6807C11.3511 18.6807 12.4634 18.5312 13.1606 18.2905C13.6919 18.1079 13.8828 17.8174 13.8828 17.4521C13.8828 17.0537 13.6089 16.7715 13.1523 16.7715C13.0195 16.7715 12.8784 16.7881 12.6958 16.8213C11.9238 16.9873 11.2266 17.1118 10.2637 17.1118C5.74805 17.1118 2.74316 14.4058 2.74316 9.91504C2.74316 5.56543 5.61523 2.56055 9.88184 2.56055C13.7417 2.56055 16.7383 4.97607 16.7383 9.11816C16.7383 11.3511 15.9995 12.8452 14.8125 12.8452C14.0239 12.8452 13.5757 12.3472 13.5757 11.4839V6.44531C13.5757 5.84766 13.252 5.49072 12.6709 5.49072C12.0981 5.49072 11.7578 5.84766 11.7578 6.44531V7.10107H11.6333C11.21 6.09668 10.2305 5.49072 9.01855 5.49072C6.90186 5.49072 5.43262 7.28369 5.43262 9.89844C5.43262 12.5547 6.91846 14.3892 9.11816 14.3892C10.3799 14.3892 11.3013 13.7417 11.7578 12.6045H11.8823C12.1147 13.7168 13.0942 14.3809 14.4307 14.3809C16.8877 14.3809 18.3984 12.1895 18.3984 8.96045C18.3984 4.1626 14.8706 1 9.89014 1C4.66064 1 1 4.56104 1 9.86523ZM9.5415 12.7207C8.26318 12.7207 7.46631 11.6499 7.46631 9.92334C7.46631 8.21338 8.27148 7.14258 9.5498 7.14258C10.8364 7.14258 11.6582 8.20508 11.6582 9.89844C11.6582 11.625 10.8281 12.7207 9.5415 12.7207Z"})})},18101:(e,t,n)=>{n.d(t,{b:()=>s});n(67294);var o=n(45238),i=n(85893);const s=(0,o.IU)("reopen",{viewBox:"0 0 14 14",svg:(0,i.jsx)("path",{d:"M1.64844 7.88477C1.64844 10.791 3.98047 13.1289 6.88086 13.1289C9.78125 13.1289 12.1133 10.791 12.1133 7.88477C12.1133 7.53906 11.873 7.29297 11.5273 7.29297C11.1934 7.29297 10.9707 7.53906 10.9707 7.88477C10.9707 10.1582 9.14844 11.9805 6.88086 11.9805C4.61328 11.9805 2.79688 10.1582 2.79688 7.88477C2.79688 5.59961 4.60156 3.78906 6.86328 3.78906C7.25 3.78906 7.60742 3.81836 7.90625 3.88281L6.3125 5.46484C6.20703 5.57617 6.1543 5.69922 6.1543 5.85156C6.1543 6.17383 6.39453 6.41992 6.71094 6.41992C6.875 6.41992 7.00977 6.36719 7.10938 6.26172L9.51758 3.83594C9.64062 3.71289 9.69922 3.57227 9.69922 3.41406C9.69922 3.26172 9.63477 3.10938 9.51758 2.99219L7.10938 0.548828C7.00977 0.4375 6.875 0.378906 6.71094 0.378906C6.39453 0.378906 6.1543 0.636719 6.1543 0.953125C6.1543 1.10547 6.20703 1.24023 6.30664 1.3457L7.72461 2.74609C7.4668 2.69336 7.16797 2.66406 6.86328 2.66406C3.96875 2.66406 1.64844 4.98438 1.64844 7.88477Z"})})}}]);