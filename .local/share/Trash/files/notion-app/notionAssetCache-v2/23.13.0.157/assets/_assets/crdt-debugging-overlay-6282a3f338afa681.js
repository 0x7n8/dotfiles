"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7125],{32025:(t,e,n)=>{n.r(e),n.d(e,{CrdtDebuggingOverlay:()=>l});n(57658);var o=n(67294),i=n(86628),r=n(51454),s=n(28685),f=n(15723),h=n(34187),c=n(85893);function l(t){return(0,i.VK)((()=>h.Z.state.open),[],{debugName:"CrdtDebuggingOverlay.isOpen"})?(0,c.jsx)(d,{}):null}function d(t){const[e,n]=(0,o.useState)([]);return(0,o.useEffect)((()=>{let t=!1,e=window.requestAnimationFrame((function o(){const i=[];s.E.forEach((t=>{const e=t.props.store.getRecordStoreAtRootPath();if("block"!==e.table||!e.useCrdt())return;const n=e.getTextSliceTree();if(!n)return;const o=t.getContentEditableLeaf();if(!o)return;const r=o.getNode();r&&i.push(...a(e.id,n,r))})),n(i),t||(e=window.requestAnimationFrame(o))}));return()=>{t=!0,window.cancelAnimationFrame(e)}}),[]),(0,c.jsx)("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,pointerEvents:"none",zIndex:r.mJ},children:e.map(((t,e)=>(0,c.jsxs)(o.Fragment,{children:[(0,c.jsx)("div",{style:{position:"absolute",top:t.rect.top,left:t.rect.left,width:t.rect.width,height:t.rect.height,backgroundColor:"rgba(0, 0, 255, 0.25)"}}),(0,c.jsx)("div",{style:{position:"absolute",top:t.rect.bottom,left:t.rect.left,color:"blue",fontSize:10},children:t.clock})]},e)))})}function u(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{textOffset:0};if(e-n.textOffset==0)return{container:t,offset:0};for(let o=0;o<t.childNodes.length;o++){const i=t.childNodes[o];if(i.nextSibling,i.nodeType===i.TEXT_NODE){if(null===i.nodeValue)continue;if(i.nodeValue.length+n.textOffset>=e)return{container:i,offset:e-n.textOffset};n.textOffset+=i.nodeValue.length}else if(i instanceof Element){const t=u(i,e,n);if(t)return t}}}function a(t,e,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{infos:[],textOffset:0};const i=e.getTextSlice(),r=u(n,o.textOffset),s=u(n,o.textOffset+1);if(r&&s){const{textInstanceId:e}=i;try{const n=document.createRange();n.setStart(r.container,r.offset),n.setEnd(s.container,s.offset),o.infos.push({blockId:t,textInstanceId:e,clock:i.opClock.getValue(),rect:f.iL.from(n.getBoundingClientRect())})}catch(h){console.log("Error attempting to find bounding box for beginning of text slice",e,"in block",t,h)}}o.textOffset+=i.getText().length;for(const f of e.children)a(t,f,n,o);return o.infos}},34187:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(49085);class i extends o.default{getInitialState(){return{open:!1}}}const r=new i},28685:(t,e,n)=>{n.d(e,{E:()=>r});var o=n(35431);class i extends o.Z{findEditableWithinSelectable(t){return this.find((e=>e.getContextClosestSelectable()===t))}findEditableWithStore(t){return this.find((e=>e.props.store===t))}findNodeFromStore(t){const e=this.findEditableWithStore(t);if(e)return e.getNode()}findStoreFromNode(t){const e=this.find((e=>e.getNode()===t));if(e)return e.props.store}}const r=new i},15723:(t,e,n)=>{n.d(e,{Ep:()=>s,Kr:()=>d,MU:()=>g,TF:()=>h,bM:()=>r,dQ:()=>u,iL:()=>i,jn:()=>a,kK:()=>l,kL:()=>c,uh:()=>f});var o=n(53965);class i{static from(t){return new i(t.left,t.top,t.width,t.height)}constructor(t,e,n,o){this.x=t,this.y=e,this.width=n,this.height=o,this.top=this.height<0?this.y+this.height:this.y,this.bottom=this.height<0?this.y:this.y+this.height,this.left=this.width<0?this.x+this.width:this.x,this.right=this.width<0?this.x:this.x+this.width}toJSON(){return{...this}}}const r=new i(0,0,0,0);function s(t){return Boolean(t&&(o.hj(t.top)||o.hj(t.left)))}function f(t,e,n){return t.left<=e&&e<=t.right&&t.top<=n&&n<=t.bottom}function h(t,e){return t.left<=e.left&&t.right>=e.right}function c(t,e){return t.top<=e.top&&t.bottom>=e.bottom}function l(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function d(t,e){return!(t.right<=e.left||e.right<=t.left)}function u(t,e){return!(t.bottom<=e.top||e.bottom<=t.top)}function a(t,e){return new i(t.left-e,t.top-e,t.width+2*e,t.height+2*e)}function g(t){const e=t.top+t.height/2,n=t.left+t.width/2;return new i(n,e,0,0)}},51454:(t,e,n)=>{n.d(e,{A_:()=>R,Bh:()=>P,D_:()=>h,Dy:()=>Z,E:()=>$,Eo:()=>A,Gt:()=>k,I5:()=>a,I8:()=>z,IK:()=>m,LI:()=>M,LN:()=>E,MC:()=>p,Mo:()=>V,Nm:()=>F,Nn:()=>D,O9:()=>d,Qm:()=>s,RJ:()=>x,S1:()=>L,VT:()=>b,Wd:()=>H,Wi:()=>o,XB:()=>W,XP:()=>i,Y6:()=>B,YO:()=>J,_:()=>G,_Y:()=>N,ag:()=>et,bF:()=>T,eU:()=>f,eu:()=>_,fQ:()=>v,hT:()=>X,hc:()=>j,iO:()=>w,jM:()=>q,ke:()=>nt,l6:()=>r,lB:()=>Y,lI:()=>K,mJ:()=>U,mK:()=>y,nD:()=>c,ov:()=>O,p8:()=>tt,py:()=>u,sL:()=>I,t8:()=>S,vt:()=>Q,wx:()=>g,xP:()=>l,y:()=>C});const o=1,i=2,r=2,s=2,f=3,h=9,c=9,l=30,d=80,u=81,a=83,g=83,p=84,b=85,x=85,m=85,w=86,E=85,O=85,S=85,y=86,k=86,v=86,N=86,C=86,I=b+2,T=b+2,j=b+2,F=87,L=88,_=89,D=99,V=99,A=99,B=99,K=100,M=100,R=101,W=102,J=109,P=110,Q=111,X=111,Y=113,Z=200,q=105,z=201,U=999,G=9999,H=9999999,$=1e6,tt=1,et=2,nt=4}}]);