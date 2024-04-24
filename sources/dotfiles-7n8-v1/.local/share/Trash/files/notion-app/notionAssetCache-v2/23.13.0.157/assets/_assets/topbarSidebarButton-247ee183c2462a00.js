"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7206],{39849:(e,t,n)=>{n.d(t,{N:()=>l,Z:()=>d});n(67294);var o=n(24405),r=n(31701),i=n(37810),a=n(85893);const s={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,fontSize:10,textAlign:"center",fontWeight:i.Z.fontWeight.semibold,borderRadius:4,color:r.ZP.white,position:"static",marginLeft:6,WebkitFontSmoothing:"auto"};let l=function(e){return e[e.Red=0]="Red",e[e.Gray=1]="Gray",e}({});const d=function(e){let{count:t,color:n,style:r,numberStyle:i}=e;const d=(0,o.Fg)(),u=n===l.Red;return!t||t<=0?null:(0,a.jsx)("div",{style:{...s,...r,...t>99&&{width:void 0,padding:2},background:u?d.redBadgeBackground:d.lightIconColor},children:(0,a.jsx)(c,{count:t,numberStyle:i})})};function c(e){let{count:t,numberStyle:n}=e;return t?1===t?(0,a.jsx)("span",{style:{marginLeft:-.5,...n},children:"1"}):t>99?(0,a.jsx)("span",{style:{letterSpacing:-.5,...n},children:"99+"}):t>9?(0,a.jsx)("span",{style:{letterSpacing:-.5,marginLeft:-.5,...n},children:t}):(0,a.jsx)("span",{style:{...n},children:t}):null}},92955:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var o=n(86628),r=n(1898),i=n(19034),a=n(39849),s=n(85893);function l(e){const{type:t,...n}=e,l=(0,o.VK)((()=>{switch(t){case"currentSpace":return i.Z.getUnreadCountForCurrentSpace().mentions;case"otherSpaces":return i.Z.getUnreadMentionsCountForOtherSpaces();case"allSpaces":return i.Z.getTotalUnreadMentionsCount();default:(0,r.t1)(t)}}),[t]);return(0,s.jsx)(a.Z,{count:l,...n})}},44332:(e,t,n)=>{n.r(t),n.d(t,{TopbarSidebarButton:()=>Z});n(67294);var o=n(480),r=n(86628),i=n(24405),a=n(7525),s=n(63261),l=n(78765),d=n(9291),c=n(43250),u=n(4708),h=n(61931),g=n(74948),C=n(19034),p=n(38676),b=n(80444),x=n(23063),m=n(64921),v=n(73063),y=n(58261),f=n(26388),S=n(39849),j=n(92955),k=n(54338),B=n(85893);function Z(e){const t=(0,o.O7)(),n=(0,d.useIntl)(),l=(0,o.MO)(),Z=(0,r.VK)((()=>{var e;return Boolean(null===(e=b.default.state.mainEditorCurrentBlockStore)||void 0===e?void 0:e.hasCover())}),[]),L=(0,r.VK)((()=>(0,u.kP)(t)),[t]),M=(0,r.VK)((()=>p.sidebarOpenStore.state),[]),F=(0,r.VK)((()=>C.Z.getTotalUnreadMentionsCount()),[]),I=(0,i.yK)((t=>{const n=12;return{root:{flexShrink:0,width:48,height:48,margin:-12,padding:n,marginRight:L&&F>99?0:-6},hamburgerButton:{position:"absolute",top:0,left:0,willChange:"opacity",display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:4,...e.isFloatingButton?{...(0,h.Er)({theme:t,isPhone:l,buttonState:"base",hasCover:Z}),width:28}:{}},sidebarButton:{position:"absolute",top:0,left:0,willChange:"opacity",...e.isFloatingButton?{...(0,h.Er)({theme:t,isPhone:l,buttonState:"base",hasCover:Z}),width:28}:{}},svg:{width:16,height:16,fill:t.regularIconColor,...e.isFloatingButton?{width:12,height:12}:{}},chevron:{...e.isFloatingButton?{width:14,height:14}:{width:16,height:16}},keyboardShortcut:{color:t.mediumInvertedTextColor},mentionBadge:{position:"absolute",top:-1,right:-4,...e.isFloatingButton?{top:-4}:{}},sidebarIcon:{width:21,height:21}}}),[Z,l,e.isFloatingButton,L,F]),H=n.formatMessage({defaultMessage:"Lock sidebar open",id:"sidebarExpandButton.tooltip"});return(0,B.jsx)(k.o,{style:I.root,children:(0,B.jsx)("div",{style:{position:"relative"},children:L?(0,B.jsx)(f.ZP,{renderTooltip:()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("div",{children:H}),(0,B.jsx)(y.Z,{style:I.keyboardShortcut,name:"toggleSidebar"})]}),placement:f.ug.Right,alignment:f.v2.Start,delayThreshold:0,originGap:6,render:e=>(0,B.jsx)(v.Z,{ariaLabel:H,icon:w,style:I.sidebarButton,hoveredStyle:I.sidebarButton,iconStyle:I.sidebarIcon,isDarkIconColor:!0,onClick:()=>g.setExpand({environment:t,isExpanded:!0,from:"topbar_sidebar_button"}),...e})}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(x.Z,{isVisible:!0,animationStyle:{opacity:M?0:1},render:()=>(0,B.jsxs)(m.Z,{style:I.hamburgerButton,children:[(0,s._)(I.svg),(0,B.jsx)(j.Z,{type:"allSpaces",color:S.N.Red,style:I.mentionBadge})]})}),(0,B.jsx)(x.Z,{isVisible:!0,animationStyle:{opacity:M?1:0},render:()=>(0,B.jsx)(f.ZP,{renderTooltip:()=>(0,B.jsxs)("div",{children:[(0,B.jsx)("div",{children:H}),(0,B.jsx)(y.Z,{style:I.keyboardShortcut,name:"toggleSidebar"})]}),placement:f.ug.Right,alignment:f.v2.Start,delayThreshold:0,originGap:6,render:e=>(0,B.jsx)(v.Z,{ariaLabel:H,icon:a.t,style:I.sidebarButton,hoveredStyle:I.sidebarButton,iconStyle:I.chevron,isDarkIconColor:!0,onClick:()=>g.setExpand({environment:t,isExpanded:!0,from:"topbar_sidebar_button"}),className:c.exn,...e})})})]})})})}function w(e){return(0,B.jsxs)(B.Fragment,{children:[(0,l.d)(e),(0,B.jsx)(j.Z,{type:"allSpaces",color:S.N.Red,style:{position:"absolute",top:-1,left:6}})]})}},54338:(e,t,n)=>{n.d(t,{o:()=>s});n(67294);var o=n(12534),r=n(74948),i=n(38676),a=n(85893);function s(e){let{children:t,style:n}=e;const s=e=>{(0,o.ZP)({event:e,context:o.Af.SidebarMouseMove,callback:()=>{const t=e.currentTarget.getBoundingClientRect();i.sidebarMousePeekXStore.setState(t.right),r.open({fromElectron:!1})}})};return(0,a.jsx)("div",{onMouseEnter:s,onMouseMove:s,style:n,children:t})}},61931:(e,t,n)=>{n.d(t,{$1:()=>v,A0:()=>h,A5:()=>u,Cm:()=>d,EP:()=>s,Er:()=>y,FK:()=>C,MI:()=>x,QF:()=>c,Uf:()=>l,Wx:()=>b,XX:()=>r,_U:()=>j,iO:()=>a,jO:()=>m,jX:()=>g,jq:()=>i,yc:()=>p});var o=n(1898);const r=80,i=40,a=24,s=20,l=270,d=405,c=480,u=16,h=8,g=44,C=144,p=144,b="linear-gradient(transparent 0%, black 10px)",x={backdropFilter:"blur(48px)",WebkitBackdropFilter:"blur(48px)"};function m(e){return{width:48,height:48,fill:e.lightIconColor}}function v(e){let{theme:t,isPhone:n}=e;return n?t.personalHomeBackgroundPhone:t.personalHomeBackgroundDesktop}function y(e){let{theme:t,isPhone:n,buttonState:o,hasCover:r}=e,i=t.whiteButtonBackground;switch(o){case"hovered":i=t.whiteButtonHoveredBackground;break;case"pressed":i=t.whiteButtonPressedBackground}return n&&(i=void 0),{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",background:i,...x,boxShadow:r?j({isPhone:n,theme:t}):void 0,width:28,height:28,borderRadius:4}}const f=1,S=.5;function j(e){let{isPhone:t,theme:n}=e;if("dark"===n.mode)return"unset";n.mode;const r=t?S:f,i=n.home.tile.border&&`0 0 0 ${r}px ${n.home.tile.border}`;return t?i:[i,"0 12px 40px rgba(0, 0, 0, 0.025)"].filter(o.$K).join(", ")}},7525:(e,t,n)=>{n.d(t,{t:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.IU)("doubleChevronRight",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M2.25781 14.1211C2.47656 14.1211 2.66797 14.0391 2.81836 13.8887L8.14355 8.67969C8.32812 8.49512 8.41699 8.29688 8.41699 8.06445C8.41699 7.8252 8.32812 7.62012 8.14355 7.44922L2.81836 2.24023C2.66797 2.08984 2.4834 2.00781 2.25781 2.00781C1.81348 2.00781 1.46484 2.35645 1.46484 2.80078C1.46484 3.0127 1.55371 3.21777 1.7041 3.375L6.50977 8.05762L1.7041 12.7539C1.55371 12.9043 1.46484 13.1094 1.46484 13.3281C1.46484 13.7725 1.81348 14.1211 2.25781 14.1211ZM8.36914 14.1211C8.58789 14.1211 8.77246 14.0391 8.92285 13.8887L14.2549 8.67969C14.4395 8.49512 14.5283 8.29688 14.5283 8.06445C14.5283 7.8252 14.4326 7.62012 14.2549 7.44922L8.92285 2.24023C8.77246 2.08984 8.58789 2.00781 8.36914 2.00781C7.9248 2.00781 7.56934 2.35645 7.56934 2.80078C7.56934 3.0127 7.66504 3.21777 7.81543 3.375L12.6211 8.05762L7.81543 12.7539C7.66504 12.9043 7.56934 13.1094 7.56934 13.3281C7.56934 13.7725 7.9248 14.1211 8.36914 14.1211Z"})})},63261:(e,t,n)=>{n.d(t,{_:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.IU)("hamburgerMenu",{viewBox:"0 0 14 14",svg:(0,r.jsx)("path",{d:"M0,1.25 L14,1.25 L14,2.75 L0,2.75 L0,1.25 Z M0,6.25 L14,6.25 L14,7.75 L0,7.75 L0,6.25 Z M0,11.25 L14,11.25 L14,12.75 L0,12.75 L0,11.25 Z"})})},78765:(e,t,n)=>{n.d(t,{d:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.IU)("sidebarLeft",{viewBox:"0 0 18 14",svg:(0,r.jsx)("path",{d:"M3.1416 13.4561C2.40332 13.4561 1.84505 13.2669 1.4668 12.8887C1.08854 12.515 0.899414 11.9635 0.899414 11.2344V2.91504C0.899414 2.18132 1.08854 1.6276 1.4668 1.25391C1.84505 0.880208 2.40332 0.693359 3.1416 0.693359H14.8447C15.5876 0.693359 16.1481 0.880208 16.5264 1.25391C16.9046 1.6276 17.0938 2.18132 17.0938 2.91504V11.2344C17.0938 11.9635 16.9046 12.515 16.5264 12.8887C16.1481 13.2669 15.5876 13.4561 14.8447 13.4561H3.1416ZM3.22363 12.1094H14.7695C15.084 12.1094 15.3255 12.0273 15.4941 11.8633C15.6628 11.6992 15.7471 11.4508 15.7471 11.1182V3.02441C15.7471 2.69629 15.6628 2.4502 15.4941 2.28613C15.3255 2.12207 15.084 2.04004 14.7695 2.04004H3.22363C2.90462 2.04004 2.66081 2.12207 2.49219 2.28613C2.32812 2.4502 2.24609 2.69629 2.24609 3.02441V11.1182C2.24609 11.4508 2.32812 11.6992 2.49219 11.8633C2.66081 12.0273 2.90462 12.1094 3.22363 12.1094ZM6.33398 12.3281V1.80762H7.6123V12.3281H6.33398ZM4.99414 4.54199H3.59277C3.47428 4.54199 3.36947 4.49642 3.27832 4.40527C3.19173 4.31413 3.14844 4.21387 3.14844 4.10449C3.14844 3.986 3.19173 3.88346 3.27832 3.79688C3.36947 3.71029 3.47428 3.66699 3.59277 3.66699H4.99414C5.11719 3.66699 5.22201 3.71029 5.30859 3.79688C5.39974 3.88346 5.44531 3.986 5.44531 4.10449C5.44531 4.21387 5.39974 4.31413 5.30859 4.40527C5.22201 4.49642 5.11719 4.54199 4.99414 4.54199ZM4.99414 6.37402H3.59277C3.47428 6.37402 3.36947 6.33073 3.27832 6.24414C3.19173 6.15299 3.14844 6.04818 3.14844 5.92969C3.14844 5.81576 3.19173 5.71549 3.27832 5.62891C3.36947 5.54232 3.47428 5.49902 3.59277 5.49902H4.99414C5.11719 5.49902 5.22201 5.54232 5.30859 5.62891C5.39974 5.71549 5.44531 5.81576 5.44531 5.92969C5.44531 6.04818 5.39974 6.15299 5.30859 6.24414C5.22201 6.33073 5.11719 6.37402 4.99414 6.37402ZM4.99414 8.19922H3.59277C3.47428 8.19922 3.36947 8.15592 3.27832 8.06934C3.19173 7.98275 3.14844 7.88249 3.14844 7.76855C3.14844 7.65007 3.19173 7.54753 3.27832 7.46094C3.36947 7.37435 3.47428 7.33105 3.59277 7.33105H4.99414C5.11719 7.33105 5.22201 7.37435 5.30859 7.46094C5.39974 7.54753 5.44531 7.65007 5.44531 7.76855C5.44531 7.88249 5.39974 7.98275 5.30859 8.06934C5.22201 8.15592 5.11719 8.19922 4.99414 8.19922Z"})})}}]);