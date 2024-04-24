"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5203],{73657:(e,t,r)=>{r.d(t,{Z:()=>n});r(67294);var o=r(28992),i=r(85893);const n=function(e){return(0,i.jsx)(o.Z,{...e,style:{background:"none",borderBottom:"none",boxShadow:"",marginTop:2,marginBottom:6,paddingTop:4,paddingBottom:4,minHeight:"none",...e.style}})}},75203:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var o=r(67294),i=r(480),n=r(86628),s=r(24405),l=r(12396),p=r(56666),a=r(39132),d=r(61061),c=r(9291),y=r(53965),u=r(37810),h=r(36610),g=r(31869),m=r(96802),x=r(13447),b=r(60709),f=r(29376),v=r(4023),j=r(29798),S=r(73657),P=r(52275),k=r(31945),T=r(79131),Z=r(73063),C=r(78140),w=r(32163),M=r(53437),F=r(72495),O=r(26388),_=r(85893);const I=function(e){let{collectionStore:t,targetCollectionStore:r,property:l,disabled:a,rowType:d}=e;const y=(0,s.Fg)(),u=(0,i.O7)(),g=(0,n.qz)(void 0,j.Z),m=(0,n.VK)((()=>{const e=f.U1({collectionStore:t,property:l}),o=Object.keys(r.getSchema()).map((t=>e.find((e=>e.property===t))??{property:t,visible:!1})),i=e.map((e=>e.property)),n=e=>{const t=i.indexOf(e);return-1!==t?t:1/0};return o.sort(((e,t)=>n(e.property)-n(t.property))),o}),[t,r,l]),x=(0,o.useCallback)((e=>(0,_.jsx)(A,{parent:e,collectionStore:t,property:l,disabled:a,targetCollectionStore:r,menuListStore:g,allRelatedTargetProperties:m})),[t,l,a,r,g,m]);return(0,i.MO)()&&"section"!==d?null:(0,_.jsx)(O.ZP,{renderTooltip:()=>(0,_.jsx)(c.FormattedMessage,{id:"database.RelationCustomizeLayoutMenu.tooltip.button.message",defaultMessage:"Customize shown properties"}),placement:"section"===d?v.u.Top:v.u.Right,render:e=>(0,_.jsx)(k.ZP,{popupType:M.kQ.Popup,alignmentToOrigin:v.v.Start,...e,renderOrigin:t=>(0,_.jsx)(Z.Z,{icon:p.o,iconStyle:{width:16,color:y.mediumIconColor,fill:y.mediumIconColor},...t,...e}),onClick:()=>{h.gP(u,{from:"section"===d?"relation_section":"configure_relation_modal"})},originGap:16,render:x})})};function z(e){const{props:t,children:r}=e;return(0,_.jsx)(F.Z,{...t,noTextOverflow:!0,isTitleUppercase:!1,title:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Hidden in relation",id:"database.relationMenu.hiddenInRelationTitle"}),desktopTitleStyle:{height:19},children:r,disableDesktopPadding:!0})}function L(e,t,r,o,i,n,s){const{properties:p,visibility:c}=e;return y.oA(p.map((e=>function(e,t,r,o,i,n,s){const{propertyFormat:p,visibility:c}=e,y=!c,h=i.getSchema();if(!h)return;const m=h[p.property];return m?{key:p.property,render:e=>(0,_.jsx)(P.Z,{...e,showDragHandle:!s,title:(0,_.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,_.jsx)(l.ZP,{icon:m.icon,type:m.type,size:16,theme:r,style:{fill:r.regularIconColor}}),(0,_.jsx)("span",{style:{marginLeft:8,...u.Z.textOverflowStyle},children:m.name})]}),right:(0,_.jsx)("div",{style:{display:"flex",alignItems:"center"},children:(0,_.jsx)(Z.Z,{icon:y?d.B:a.c,iconStyle:{width:16,height:16},isDarkIconColor:!y,onClick:()=>{g.qK({propertyFormat:p,visibility:c,collectionStore:o,property:n,environment:t})},disabled:s||"title"===p.property})})}),action:()=>{}}:void 0}({propertyFormat:e,visibility:c},t,r,o,i,n,s))))}function R(e){const t=(0,i.O7)(),{collectionStore:r,property:o,menuListStore:n,disabled:s,visibleProperties:l,hiddenProperties:p,children:a}=e,d=y.oA([...l.map((e=>e.property)),l.length>0&&p.length>0&&{key:"group-header-hidden-property",draggable:!1},...p.map((e=>e.property))]);return(0,_.jsx)(T.ZP,{direction:"vertical",keys:d,renderKey:(e,t)=>a[t],onDrop:e=>{!function(e,t,r,o,i){const{newPropertyKeys:n}=e,s=f.U1({collectionStore:r,property:o}),l=n.indexOf("group-header-hidden-property"),p=y.oA(n.filter((e=>!e.startsWith("group-header-"))).map(((e,t)=>{const r=s.find((t=>t.property===e));return r?l>0?"title"===e&&t>=l?r:{...r,visible:Boolean(t<l)}:r:{property:e,visible:!(l>0)||Boolean(t<l)}}))),a=s.filter((e=>!n.includes(e.property))),d={...f.ZI(r)};d[o]||(d[o]={}),d[o].related_properties=[...p,...a],x.createAndCommit({userAction:"RelationPropertyCustomizeLayoutMenu.handlePropertyReorder",environment:t,perform:e=>{m.FH({stores:[r],update:{collection_relation_options:d},transaction:e})}}),i.reset()}({newPropertyKeys:e},t,r,o,n)},disabled:s})}function A(e){let{parent:t,collectionStore:r,property:o,disabled:l,targetCollectionStore:p,menuListStore:a,allRelatedTargetProperties:d}=e;const u=(0,s.Fg)(),h=(0,i.O7)(),g=d.filter((e=>e.visible)),m=d.filter((e=>!e.visible)),x=(0,n.VK)((()=>L({properties:g,visibility:!0},h,u,r,p,o,l)),[g,h,u,r,p,o,l]),f=(0,n.VK)((()=>L({properties:m,visibility:!1},h,u,r,p,o,l)),[m,h,u,r,p,o,l]);return d?(0,_.jsxs)(C.Z,{menuType:b.og.Popup,maxWidth:240,maxHeight:500,children:[0===d.length&&(0,_.jsx)(F.Z,{children:(0,_.jsx)(S.Z,{caption:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"No properties",id:"database.relationMenu.noProperties"})})}),d.length>0&&(0,_.jsx)(w.Z,{type:w.i.Vertical,store:a,initialFocus:void 0,sections:y.oA([g.length>0&&{key:"visible_and_hidden_properties",render:e=>(0,_.jsx)(F.Z,{...e,noTextOverflow:!0,isTitleUppercase:!1,title:(0,_.jsx)(c.FormattedMessage,{defaultMessage:"Shown in relation",id:"database.relationMenu.shownInRelationTitle"}),desktopTitleStyle:{height:18},children:(0,_.jsx)(R,{collectionStore:r,property:o,disabled:l,menuListStore:a,visibleProperties:g,hiddenProperties:m,children:e.children})}),items:y.oA([...x,m.length>0&&{key:"group-header-hidden-property",render:e=>(0,_.jsx)(z,{props:e,children:(0,_.jsx)(_.Fragment,{})}),action:()=>{}},...f])},0===g.length&&m.length>0&&{key:"hidden_properties",render:e=>(0,_.jsx)(z,{props:e,children:(0,_.jsx)(R,{collectionStore:r,property:o,disabled:l,menuListStore:a,visibleProperties:g,hiddenProperties:m,children:e.children})}),items:f}])})]}):null}},39132:(e,t,r)=>{r.d(t,{c:()=>n});r(67294);var o=r(45238),i=r(85893);const n=(0,o.IU)("eye",{viewBox:"0 0 32 32",svg:(0,i.jsx)("path",{d:"M16.006 25.812c8.863 0 14.994-7.17 14.994-9.406C31 14.16 24.858 7 16.006 7 7.252 7 1 14.16 1 16.406c0 2.236 6.252 9.406 15.006 9.406zm0-3.242a6.194 6.194 0 01-6.197-6.164c-.012-3.452 2.744-6.164 6.197-6.164 3.419 0 6.185 2.711 6.185 6.164 0 3.364-2.766 6.164-6.185 6.164zm0-3.94c1.228 0 2.246-1.007 2.246-2.224 0-1.228-1.018-2.235-2.246-2.235-1.24 0-2.258 1.007-2.258 2.235 0 1.217 1.018 2.224 2.258 2.224z"})})}}]);