"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7509],{69255:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});n(57658);var o=n(67294),r=n(480),i=n(86628),s=n(77657),a=n(62208),c=n(60291),d=n(77420),l=n(9291),C=n(1898),p=n(49386),u=n(13447),v=n(61202),k=n(60709),m=n(77907),L=n(30874),g=n(93405),x=n(78140),y=n(32163),b=n(72495),f=n(85893);const w=function(e){const{titleForReloadMenuOption:t,store:n,parentBlockStore:w,onAccept:I,onDismiss:j,extraSecondaryItemKey:M,token:Z}=e,h=(0,r.O7)(),{value:B}=(0,m.useDependency)(m.deps.markdownLinkifyIt),{value:_}=(0,m.useDependency)(m.deps.tinyMceMicrosoftWordPasteFilter),O=(0,o.useCallback)((e=>{const t={blocks:[n],environment:h,publicEditMode:void 0,lazyDependencies:{markdownLinkifyIt:B,tinyMceMicrosoftWordPasteFilter:_}};return{key:e.key,render:(n,o)=>e.render(n,t,{onAccept:I,onFocus:o.onFocus}),action:n=>{let{event:o}=n;return e.action(t,o)}}}),[I,h,n,B,_]),S=[];(0,i.VK)((()=>{const e=n.getFormat().bot_id,t=L.Z.getBotsAsRecordMap();if(e&&!0===L.Z.state.loaded){const n=t.getValue({table:d.cZ,id:e});if(n&&n.integration_id&&n.integration_id===s.U9)return!1}return!0}),[n])&&S.push({key:0,render:e=>(0,f.jsx)(b.Z,{...e,style:{paddingTop:0,paddingBottom:0}}),items:[{key:"reload external instance object",render:e=>(0,f.jsx)(g.Z,{...e,title:t,svg:c.b}),action:()=>{n&&(n.isExternalObjectInstanceBlockStore()||n.isExternalObjectInstancePageBlockStore())&&v.qK({environment:h,from:"page_more_menu",store:n,spaceId:n.getSpaceId()})}}]});const F=(0,i.VK)((()=>{switch(M){case"preview_to_mention":return[O(p.OH)];case"mention_to_preview":if(!n.isExternalObjectInstanceBlockStore())return[];const e={key:"turn preview into block",render:e=>(0,f.jsx)(g.Z,{...e,title:(0,f.jsx)(l.FormattedMessage,{id:"hoverPreviewOverlay.action.turnPreviewIntoPreview",defaultMessage:"Turn into preview"}),svg:a.z}),action:()=>{w&&Z&&u.createAndCommit({userAction:"HoverPreviewOverlay.transformExternalObjectInstanceMentionIntoBlock",environment:h,perform:e=>{v.aV({block:n,parentStore:w,transaction:e,token:Z}),e.postSubmitCallbacks.push((e=>{e||null==j||j()}))}})}};return[e];default:(0,C.t1)(M)}}),[M,O,n,w,Z,h,j]);return S.push({key:1,render:e=>(0,f.jsx)(b.Z,{...e,style:{paddingTop:0,paddingBottom:0}}),items:[...F,O(p.IK)]}),(0,f.jsx)(x.Z,{menuType:k.og.Popup,children:(0,f.jsx)(y.Z,{type:y.i.Vertical,initialFocus:void 0,onAccept:I,sections:S,style:{paddingTop:3,paddingBottom:3}})})}},56638:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(49085);class r extends o.default{getInitialState(){return{open:!1}}}const i=new r},13148:(e,t,n)=>{n.d(t,{U:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.IU)("close",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M2.89795 13.3428C3.18799 13.6262 3.6626 13.6262 3.93945 13.3494L7.99341 9.29541L12.0474 13.3494C12.3308 13.6262 12.8054 13.6328 13.0889 13.3428C13.3723 13.0593 13.3723 12.5847 13.0955 12.3079L9.0415 8.24731L13.0955 4.19336C13.3723 3.9165 13.3789 3.4353 13.0889 3.15845C12.7988 2.875 12.3308 2.875 12.0474 3.15186L7.99341 7.20581L3.93945 3.15186C3.6626 2.875 3.1814 2.86841 2.89795 3.15186C2.6145 3.44189 2.62109 3.9231 2.89795 4.19336L6.9519 8.24731L2.89795 12.3079C2.62109 12.5781 2.6145 13.0659 2.89795 13.3428Z"})})},27714:(e,t,n)=>{n.d(t,{N:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.IU)("link",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M7.69922 10.8945L8.73828 9.84863C7.91797 9.77344 7.34375 9.51367 6.91992 9.08984C5.76465 7.93457 5.76465 6.29395 6.91309 5.14551L9.18262 2.87598C10.3379 1.7207 11.9717 1.7207 13.127 2.87598C14.2891 4.04492 14.2822 5.67188 13.1338 6.82031L11.958 7.99609C12.1768 8.49512 12.2451 9.10352 12.1289 9.62988L14.0908 7.6748C15.7725 6 15.7793 3.62109 14.084 1.92578C12.3887 0.223633 10.0098 0.237305 8.33496 1.91211L5.95605 4.29785C4.28125 5.97266 4.26758 8.35156 5.96289 10.0469C6.36621 10.4434 6.90625 10.7441 7.69922 10.8945ZM8.30078 5.13184L7.26855 6.17773C8.08203 6.25293 8.66309 6.51953 9.08008 6.93652C10.2422 8.09863 10.2422 9.73242 9.08691 10.8809L6.81738 13.1504C5.66211 14.3057 4.03516 14.3057 2.87305 13.1504C1.71094 11.9883 1.71777 10.3545 2.87305 9.20605L4.04199 8.03027C3.83008 7.53125 3.75488 6.92969 3.87109 6.39648L1.91602 8.35156C0.234375 10.0264 0.227539 12.4121 1.92285 14.1074C3.61816 15.8027 5.99707 15.7891 7.67188 14.1143L10.0439 11.7354C11.7256 10.0537 11.7324 7.6748 10.0371 5.98633C9.64062 5.58301 9.10059 5.28223 8.30078 5.13184Z"})})},70663:(e,t,n)=>{n.d(t,{h:()=>i});n(67294);var o=n(45238),r=n(85893);const i=(0,o.IU)("replace",{viewBox:"0 0 16 16",svg:(0,r.jsx)("path",{d:"M3.26465 3.96094C2.95996 4.26562 2.979 4.66553 3.23291 4.8877C3.49316 5.12256 3.86133 5.12256 4.16602 4.83057C5.11182 3.80225 6.48291 3.15479 8 3.15479C10.6851 3.15479 12.856 5.12891 13.2051 7.66162H12.2466C11.7642 7.66162 11.6309 8.01709 11.9102 8.41064L13.4209 10.5435C13.6494 10.8608 13.9985 10.8608 14.2334 10.5435L15.7441 8.41699C16.0298 8.02344 15.8965 7.66162 15.4077 7.66162H14.519C14.1445 4.44336 11.3516 1.85986 8 1.85986C6.13379 1.85986 4.43262 2.68506 3.26465 3.96094ZM0.249512 8.42334C-0.0297852 8.81689 0.097168 9.17871 0.585938 9.17871H1.4873C1.85547 12.397 4.64844 14.9805 8 14.9805C9.87256 14.9805 11.5737 14.1553 12.748 12.873C13.0464 12.5684 13.0273 12.1685 12.7734 11.9399C12.5132 11.7051 12.1514 11.7114 11.8403 12.0034C10.9009 13.0381 9.52979 13.6855 8 13.6855C5.32129 13.6855 3.14404 11.7178 2.79492 9.17871H3.74707C4.22949 9.17871 4.36279 8.82324 4.0835 8.42969L2.57275 6.29688C2.34424 5.97949 1.99512 5.97949 1.7666 6.29688L0.249512 8.42334Z"})})}}]);