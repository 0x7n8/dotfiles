"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8567],{10912:(e,t,o)=>{o.d(t,{Z:()=>I});o(57658),o(67294);var r=o(83355),i=o(27531),n=o(86628),s=o(24405),a=o(41432),l=o(80951),d=o(95538),c=o(21202),p=o(1898),h=o(10906),u=o(12457),m=o(17311),g=o(35328),v=o(6258),y=o(9672),f=o(12981),x=o(43568),S=o(81865),j=o(35541),b=o(85893);function k(e){return"number"==typeof e}class C extends r.Z{constructor(){super(...arguments),this.renderContentBlock=e=>{const{store:t,renderAdditionalBlocks:o,rendererBlockStyle:r}=this.props,n=v.G.createChildStore(t,{table:c.iU,id:e}),s=n.getType(),a=o&&void 0!==s,l=this.blockIdsToRenderStore.state,d="table_row"===s?n.getParentBlockStore():n,p=a?d&&(0,j.u)({store:d,restrictedBlockIds:l,tableRenderMode:this.getTableRenderMode()}):(0,y.h)(n);if(p)return(0,b.jsx)(i.D,{value:this.restrictedContentStore,children:(0,b.jsx)(p,{store:n,disabled:!0,disableCommentMenu:!0,disableHoverMenu:!0,hideContent:(0,g.BX)(n),style:{fontSize:12,opacity:.8,pointerEvents:"none",...r},isQuickFind:!0,numberedListCounterStore:this.createComputedStore((()=>({depth:0,numberedListBlockIdsWithFormat:V(e,this.numberedLists)})))})},e)},this.coverStore=this.createComputedStore((()=>{const{store:e,renderAdditionalBlocks:t=!1,startBlockId:o}=this.props,{ThemeStore:r}=this.environment,i=o?(0,h.wK)({rootStore:e,renderAdditionalBlocks:t,startBlockId:o,tableRenderMode:this.getTableRenderMode()}):(0,h.NU)({rootStore:e,renderAdditionalBlocks:t,theme:r.state.mode});return i.image?i.image:!(this.props.showLoadingShimmer&&0===i.blockIds.length&&!i.isDefined)&&i.blockIds})),this.restrictedContentStore=this.createComputedStore((()=>{const{store:e,renderAdditionalBlocks:t=!1,startBlockId:o}=this.props,r=(0,h.wK)({rootStore:e,renderAdditionalBlocks:t,startBlockId:o,tableRenderMode:this.getTableRenderMode()});return r.image?void 0:r.blockIds})),this.blockIdsToRenderStore=this.createComputedStore((()=>{const e=this.coverStore.state,t=this.restrictedContentStore.state;return e&&Array.isArray(e)?e.filter((e=>!t||t.includes(e))):[]})),this.numberedLists=this.createComputedStore((()=>{const{store:e}=this.props,t=this.coverStore.state,o=[];if(Array.isArray(t)){let r=0;for(;r<t.length;){let i=t[r],n=v.G.createChildStore(e,{table:c.iU,id:i});if(n.getType()===a.Ti.numberedList){const s=[{blockId:i,idx:1}],l=[{id:i,format:void 0,depth:s.length-1,index:s[0].idx}];for(r+=1;r<t.length&&(i=t[r],n=v.G.createChildStore(e,{table:c.iU,id:i}),n.getType()===a.Ti.numberedList);){{const e=n.getParentId();if(n.getParentId()===s[s.length-1].blockId)s.push({blockId:i,idx:1});else{let t=s[s.length-1].idx;for(;s.length>0&&s[s.length-1].blockId!==e;)t=s[s.length-1].idx,s.pop();s.push({blockId:i,idx:t+1})}l.push({id:i,format:void 0,depth:s.length-1,index:s[s.length-1].idx})}r+=1}o.push(l)}else r+=1}}return o}))}didUpdate(e){this.props.coverFormat.type!==e.coverFormat.type&&this.props.onLoadProxiedImage()}renderComponent(){const{coverFormat:e}=this.props;return"page_cover"===e.type?(0,b.jsx)(W,{store:this.props.store,coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,imageCoverWrapStyle:this.props.imageCoverWrapStyle,coverWidth:this.props.coverWidth,onLoadProxiedImage:this.props.onLoadProxiedImage,style:this.props.style,variant:this.props.variant,coverAspectFormat:this.props.coverAspectFormat,coverPosition:this.props.coverPosition,showEmptyGalleryCover:this.props.showEmptyGalleryCover,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle}):"page_content"===e.type?this.renderPageContent():"property"===e.type?(0,b.jsx)(H,{store:this.props.store,coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,imageCoverWrapStyle:this.props.imageCoverWrapStyle,onLoadProxiedImage:this.props.onLoadProxiedImage,coverWidth:this.props.coverWidth,style:this.props.style,variant:this.props.variant,coverAspectFormat:this.props.coverAspectFormat,coverPosition:this.props.coverPosition,showEmptyGalleryCover:this.props.showEmptyGalleryCover,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle,property:e.property}):void 0}renderPageContent(){const e=this.coverStore.state,t=this.restrictedContentStore.state,o=this.props.renderAdditionalBlocks&&this.props.store.isCollectionView();if(!1===e)return(0,b.jsx)(z,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,loadingShimmerStyle:this.props.loadingShimmerStyle});if(e){if(!Array.isArray(e))return o?(0,b.jsxs)("div",{style:L(this.props.variant,this.environment,this.theme,this.props.coverHeight,this.props.coverSizeFormat,this.props.coverContentFadedOverlay,this.props.contentWrapStyle,this.props.isInlineCompactView),children:[(0,b.jsx)(S.Z,{url:e.url,onFinishedLoadingProxyUrl:e=>this.props.onLoadProxiedImage(e),isAuthenticated:!0,permissionRecord:e.pointer,width:F(),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...B(),...E({renderCollectionImage:!0},this.props.variant,this.theme,this.props.coverHeight,this.props.coverSizeFormat),...Z(),objectPosition:`center ${100*(1-w(this.props.store,this.props.coverPosition))}%`},placeholderLoadedStyle:{display:"flex",justifyContent:"center",alignItems:"end"},src:t})}}),(0,b.jsx)(A,{variant:this.props.variant}),(0,b.jsx)("div",{style:_(this.theme,this.props.coverContentFadedOverlayStyle)})]}):(0,b.jsxs)("div",{style:T(this.props.coverHeight,this.props.coverSizeFormat,this.props.imageCoverWrapStyle),children:[(0,b.jsx)(S.Z,{url:e.url,onFinishedLoadingProxyUrl:e=>this.props.onLoadProxiedImage(e),isAuthenticated:!0,permissionRecord:e.pointer,width:F(this.props.coverWidth,this.props.coverSizeFormat),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...B(this.props.style),...E({renderCollectionImage:!1},this.props.variant,this.theme,this.props.coverHeight,this.props.coverSizeFormat),...Z(this.props.coverAspectFormat),objectPosition:`center ${100*(1-w(this.props.store,this.props.coverPosition))}%`},src:t,loading:"lazy"})}}),(0,b.jsx)(A,{variant:this.props.variant})]});if(e.length>0)return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{style:L(this.props.variant,this.environment,this.theme,this.props.coverHeight,this.props.coverSizeFormat,this.props.coverContentFadedOverlay,this.props.contentWrapStyle,this.props.isInlineCompactView),children:[t?e.filter((e=>t.indexOf(e)>=0)).map(this.renderContentBlock):e.map(this.renderContentBlock),this.props.coverContentFadedOverlay&&(0,b.jsx)("div",{style:_(this.theme,this.props.coverContentFadedOverlayStyle)})]})});if(this.props.showEmptyGalleryCover)return(0,b.jsx)(M,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle??L(this.props.variant,this.environment,this.theme,this.props.coverHeight,this.props.coverSizeFormat,this.props.coverContentFadedOverlay,this.props.contentWrapStyle,this.props.isInlineCompactView)})}else if(this.props.showEmptyGalleryCover)return(0,b.jsx)(M,{coverHeight:this.props.coverHeight,coverSizeFormat:this.props.coverSizeFormat,emptyGalleryCoverStyle:this.props.emptyGalleryCoverStyle})}getTableRenderMode(){return this.props.renderAdditionalBlocks&&this.props.startBlockId?"table":"image"}}C.displayName="CollectionItemCover";const I=C;function w(e,t){if(k(t))return t;if(e.getFormatStore().isDefined()){const{page_cover_position:t,card_cover_position:o}=e.getFormat();if(k(o))return o;if(k(t))return t}return.5}function B(e){return e||{}}function P(e,t){if(e)return e;switch(t){case"large":return m.Z.card.desktop.large.height;case"small":return m.Z.card.desktop.small.height;default:return m.Z.card.desktop.medium.height}}function F(e,t){return e||(0,h.rD)(t)}function Z(e){return{objectFit:void 0===e?"cover":e}}function T(e,t,o){return{height:P(e,t),position:"relative",pointerEvents:"none",overflow:"hidden",...o}}function M(e){let{coverHeight:t,coverSizeFormat:o,emptyGalleryCoverStyle:r}=e;return(0,b.jsx)("div",{style:{height:P(t,o),...r}})}function z(e){let{coverHeight:t,coverSizeFormat:o,loadingShimmerStyle:r}=e;return(0,b.jsx)("div",{style:{height:P(t,o),...r},children:(0,b.jsx)(u.Z,{show:!0,showDelay:100,showHold:0,render:e=>e?(0,b.jsx)(x.Z,{paragraphs:[{lineHeight:12,lineMargin:6,sectionWidths:[100,100,50],repeat:1,sectionMargin:0}]}):void 0})})}function R(e,t,o,r,i){const{ThemeStore:n}=t,s="dark"===n.state.mode,a=i?o.lightDividerColor:o.regularDividerColor;switch(e){case"default":return{};case"gallery":return{background:o.collectionGalleryPreviewCardCover,padding:"8px 8px 0",boxShadow:s?"transparent":`inset 0 -1px 0 0 ${a}`,...r};default:(0,p.t1)(e)}}function _(e,t){return{width:"100%",height:40,position:"absolute",bottom:0,left:0,background:`linear-gradient(to bottom, transparent, ${e.accentColors.gray[30]} 100%)`,...t}}function K(e,t){switch(e){case"default":return{border:`1px solid ${t.stroke.regular}`,borderTopLeftRadius:4,borderTopRightRadius:4,borderBottomRightRadius:4,borderBottomLeftRadius:4};case"gallery":return{borderRadius:0,borderTopLeftRadius:1,borderTopRightRadius:1};default:(0,p.t1)(e)}}function A(e){let{variant:t}=e;const o=(0,s.Fg)();switch(t){case"default":return null;case"gallery":return(0,b.jsx)("div",{style:{position:"absolute",left:0,right:0,bottom:0,borderBottom:`1px solid ${o.regularDividerColor}`}});default:(0,p.t1)(t)}return null}function L(e,t,o,r,i,n,s,a){return{height:P(r,i),pointerEvents:"none",overflow:"hidden",position:n?"relative":"static",...R(e,t,o,s,a),...s}}function U(e,t,o,r){return{width:"100%",height:P(o,r),...K(e,t),objectPosition:"center"}}function W(e){let{store:t,coverHeight:o,coverSizeFormat:r,imageCoverWrapStyle:i,coverWidth:a,onLoadProxiedImage:l,style:d,variant:c,coverAspectFormat:p,coverPosition:h,showEmptyGalleryCover:u,emptyGalleryCoverStyle:m}=e;const g=(0,s.Fg)(),v=(0,n.VK)((()=>{var e;return null===(e=t.getCover())||void 0===e?void 0:e.cover}),[t]),y=(0,n.VK)((()=>t.pointer),[t]),x=(0,n.VK)((()=>w(t,h)),[h,t]);return v?(0,b.jsxs)("div",{style:T(o,r,i),children:[(0,b.jsx)(S.Z,{url:v,isAuthenticated:!0,permissionRecord:y,width:F(a,r),onFinishedLoadingProxyUrl:e=>l(e),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...B(d),...U(c,g,o,r),...Z(p),objectPosition:`center ${100*(1-x)}%`},src:t,loading:"lazy"})}}),(0,b.jsx)(A,{variant:c})]}):u?(0,b.jsx)(M,{coverHeight:o,coverSizeFormat:r,emptyGalleryCoverStyle:m}):null}function H(e){let{property:t,store:o,coverHeight:r,coverSizeFormat:i,imageCoverWrapStyle:a,onLoadProxiedImage:c,coverWidth:p,style:h,variant:u,coverAspectFormat:m,coverPosition:g,showEmptyGalleryCover:v,emptyGalleryCoverStyle:y}=e;const x=(0,s.Fg)(),j=(0,n.VK)((()=>(0,l.g)(o.getPropertyValue(t)).find((e=>(0,d.SR)({url:e.url})))),[t,o]),k=(0,n.VK)((()=>o.pointer),[o]),C=(0,n.VK)((()=>w(o,g)),[g,o]);return j?(0,b.jsxs)("div",{style:T(r,i,a),children:[(0,b.jsx)(S.Z,{onFinishedLoadingProxyUrl:e=>c(e),url:j.url,isAuthenticated:!0,permissionRecord:k,width:F(p,i),render:(e,t)=>{if(t)return(0,b.jsx)(f.Z,{style:{...B(h),...U(u,x,r,i),...Z(m),objectPosition:`center ${100*(1-C)}%`},src:t,loading:"lazy"})}}),(0,b.jsx)(A,{variant:u})]}):v?(0,b.jsx)(M,{coverHeight:r,coverSizeFormat:i,emptyGalleryCoverStyle:y}):null}function E(e,t,o,r,i){const{renderCollectionImage:n}=e;return{...U(t,o,r,i),objectPosition:"center center",...n&&{height:void 0,border:`1px solid ${o.lightDividerColor}`,borderBottom:"none",borderBottomLeftRadius:0,borderBottomRightRadius:0}}}function V(e,t){const o=t.state;for(const r of o)if(r.find((t=>t.id===e)))return r;return[]}},69255:(e,t,o)=>{o.r(t),o.d(t,{default:()=>k});o(57658);var r=o(67294),i=o(480),n=o(86628),s=o(77657),a=o(62208),l=o(60291),d=o(77420),c=o(9291),p=o(1898),h=o(49386),u=o(13447),m=o(61202),g=o(60709),v=o(77907),y=o(30874),f=o(93405),x=o(78140),S=o(32163),j=o(72495),b=o(85893);const k=function(e){const{titleForReloadMenuOption:t,store:o,parentBlockStore:k,onAccept:C,onDismiss:I,extraSecondaryItemKey:w,token:B}=e,P=(0,i.O7)(),{value:F}=(0,v.useDependency)(v.deps.markdownLinkifyIt),{value:Z}=(0,v.useDependency)(v.deps.tinyMceMicrosoftWordPasteFilter),T=(0,r.useCallback)((e=>{const t={blocks:[o],environment:P,publicEditMode:void 0,lazyDependencies:{markdownLinkifyIt:F,tinyMceMicrosoftWordPasteFilter:Z}};return{key:e.key,render:(o,r)=>e.render(o,t,{onAccept:C,onFocus:r.onFocus}),action:o=>{let{event:r}=o;return e.action(t,r)}}}),[C,P,o,F,Z]),M=[];(0,n.VK)((()=>{const e=o.getFormat().bot_id,t=y.Z.getBotsAsRecordMap();if(e&&!0===y.Z.state.loaded){const o=t.getValue({table:d.cZ,id:e});if(o&&o.integration_id&&o.integration_id===s.U9)return!1}return!0}),[o])&&M.push({key:0,render:e=>(0,b.jsx)(j.Z,{...e,style:{paddingTop:0,paddingBottom:0}}),items:[{key:"reload external instance object",render:e=>(0,b.jsx)(f.Z,{...e,title:t,svg:l.b}),action:()=>{o&&(o.isExternalObjectInstanceBlockStore()||o.isExternalObjectInstancePageBlockStore())&&m.qK({environment:P,from:"page_more_menu",store:o,spaceId:o.getSpaceId()})}}]});const z=(0,n.VK)((()=>{switch(w){case"preview_to_mention":return[T(h.OH)];case"mention_to_preview":if(!o.isExternalObjectInstanceBlockStore())return[];const e={key:"turn preview into block",render:e=>(0,b.jsx)(f.Z,{...e,title:(0,b.jsx)(c.FormattedMessage,{id:"hoverPreviewOverlay.action.turnPreviewIntoPreview",defaultMessage:"Turn into preview"}),svg:a.z}),action:()=>{k&&B&&u.createAndCommit({userAction:"HoverPreviewOverlay.transformExternalObjectInstanceMentionIntoBlock",environment:P,perform:e=>{m.aV({block:o,parentStore:k,transaction:e,token:B}),e.postSubmitCallbacks.push((e=>{e||null==I||I()}))}})}};return[e];default:(0,p.t1)(w)}}),[w,T,o,k,B,P,I]);return M.push({key:1,render:e=>(0,b.jsx)(j.Z,{...e,style:{paddingTop:0,paddingBottom:0}}),items:[...z,T(h.IK)]}),(0,b.jsx)(x.Z,{menuType:g.og.Popup,children:(0,b.jsx)(S.Z,{type:S.i.Vertical,initialFocus:void 0,onAccept:C,sections:M,style:{paddingTop:3,paddingBottom:3}})})}},98567:(e,t,o)=>{o.d(t,{D5:()=>Be,E5:()=>Te,s6:()=>je,Tq:()=>Ze});var r=o(67294),i=o(1302),n=o(480),s=o(86628),a=o(24405),l=o(15145),d=o(1800),c=o(7057),p=o(78601),h=o(66673),u=o(69651),m=o(75553),g=o(56666),v=o(40462),y=o(64572),f=o(76725),x=o(99405),S=o(21202),j=o(70279),b=o(70203),k=o(38585),C=o(44876),I=o(9291),w=o(53965),B=o(7032),P=o(37810),F=o(26189),Z=o(893),T=o(45990),M=o(993),z=o(32741),R=o(30583),_=o(95477),K=o(60682),A=o(24990),L=o(49616),U=o(4708),W=o(73744),H=o(41232),E=o(6398),V=o(88804),O=o(75024),D=o(4023),G=o(15723),q=o(80444),N=o(96049),$=o(42653),Y=o(72014),J=o(6258),X=o(48588),Q=o(92559),ee=o(10912),te=o(18746),oe=o(64921),re=o(31945),ie=o(51077),ne=o(73063),se=o(12981),ae=o(53437),le=o(31278),de=o(76798),ce=o(94096),pe=o(19987),he=o(69255),ue=o(25735),me=o(19889),ge=o(12740),ve=o(85893);function ye(e){const t=(0,s.VK)((()=>q.default.state.currentSpaceStore),[]),o=(0,s.VK)((()=>{var t;return null===(t=e.state)||void 0===t?void 0:t.annotation}),[e.state]),r=(0,h.Rm)(o,void 0,600,Object.is),i=(0,s.VK)((()=>{if(t&&r)return J.U6.createChildStore(t,{id:r[1],table:me.KJ})}),[t,r]),n=(0,s.VK)((()=>!!i&&i.isDefined()),[i]);return i&&n&&t?(0,ve.jsx)(ge.Z,{targetUserStore:i}):null}var fe=o(29551),xe=o(65496);const Se=20;function je(e){const t=(0,n.O7)(),o=(0,s.Kw)(N.Z,{debugName:"HoverPreviewOverlay"}),{state:i,pinPopup:a,unpinPopup:l,hasBeenHovering:d,isPinned:c,dismissPopup:p}=function(){const[e,t]=(0,r.useState)(!1),[o]=(0,s.AF)(X.Z),i=(0,h.Kt)(o,400,Object.is),[n,a]=(0,r.useState)(void 0),l=n||(e?void 0:i),d=(0,r.useCallback)((()=>a(l)),[l]),c=(0,r.useCallback)((()=>{a(void 0)}),[]),p=(0,r.useCallback)((()=>{c(),t(!0)}),[c]);return(0,r.useEffect)((()=>{t(!1)}),[i]),{state:l,pinPopup:d,unpinPopup:c,hasBeenHovering:o&&o===l,isPinned:Boolean(n),dismissPopup:p}}(),u=(0,s.VK)((()=>(0,U.En)()),[]),m=function(e){const t=(0,n.O7)();return(0,s.VK)((()=>!!e&&(0,V.E)(t,e.store)),[e,t])}(i),g=(0,r.useMemo)((()=>Boolean(i&&function(e,t){return e.annotations.some(b.j0F)||t&&e.annotations.some(b.nSN)||e.annotations.some(b.IWo)}(i,m))),[i,m]),v=(0,r.useMemo)((()=>i&&i.token.node.getBoundingClientRect()),[i]),y=v&&0===v.width&&0===v.height&&0===v.left&&0===v.top,f=g?!y:Boolean(!o&&d&&!y),[,x]=(0,s.AF)($.Z);(0,r.useEffect)((()=>(x({isPinned:c}),()=>x({isPinned:!1}))),[c,x]);const S=!(null!=i&&i.annotations.some(b.nSN)||null!=i&&i.annotations.some(b.STW)),j=(u&&(null==i?void 0:i.annotations.some(b.IWo)))??!1,k=(0,s.VK)((()=>t.RouterStore.state),[t.RouterStore]);return(0,r.useEffect)((()=>{p()}),[k,p]),(0,r.useEffect)((()=>{const e=w.P2((()=>{z.lY(),p()}),200,{leading:!0});return W.lj(window,"scroll",e,!0),()=>W.ZV(window,"scroll",e,!0)}),[p]),(0,ve.jsx)(ae.ZP,{disableMouseCapture:!0,preventCaptureEsc:!0,preventPointerEvents:!g,preventScaleTransition:!0,preventOpacityTransition:!0,popupType:ae.ZP.PopupType.Popup,open:f,originRect:v,originGap:6,alignmentToOrigin:j?ae.ZP.Alignment.End:ae.ZP.Alignment.Start,placementToOrigin:j?ae.ZP.Placement.Top:ae.ZP.Placement.Bottom,useLightBoxShadow:S,render:()=>i&&(0,ve.jsx)("div",{onMouseEnter:a,onMouseLeave:l,children:(0,ve.jsx)(be,{state:i,isHoveredTokenEditable:m,onDismiss:l})})})}function be(e){const t=(0,s.VK)((()=>(0,U.En)()),[]),o=(0,n.Fy)(),r=(0,s.VK)((()=>{const{currentSpaceStore:e}=q.default.state;return e?e.getPermissionGroups():[]}),[]),i=(0,a.yK)((e=>({noMembersInGroupStyle:{fontSize:P.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"}})),[]),l=e.state.annotations,d=l.find(b.j0F),c=l.find(b.fpG),p=l.find(b._bk),h=l.find(b.aq),u=b.frE(l),m=l.find(b.STW),g=t?l.find(b.IWo):void 0;if(d&&e.state.store.table!==j.x_)return(0,ve.jsx)(ke,{...e,state:{...e.state,annotation:d}});if(c)return(0,ve.jsx)(Ce,{...e,state:{...e.state,annotation:c}});if(p){const e=b.kxk(p);if(e){const t=e.groupId,o=r.find((e=>e.id===t));if(o)return(0,ve.jsx)(ue.Y,{group:o,limit:10,color:"white_background",trackHover:!0,noMembersMessage:(0,ve.jsx)(fe.gq,{style:i.noMembersInGroupStyle,children:(0,ve.jsx)("div",{style:P.Z.textOverflowStyle,children:(0,ve.jsx)(I.FormattedMessage,{id:"groupPreview.noUsers",defaultMessage:"No users in this group"})})})})}}return h?(0,ve.jsx)(Ie,{...e,state:{...e.state,annotation:h}}):u&&!o.isMobile?(0,ve.jsx)(Be,{...e,state:{...e.state,annotation:u},onDismiss:e.onDismiss}):m&&!o.isMobile?(0,ve.jsx)(Fe,{...e,state:{...e.state,annotation:m},onDismiss:e.onDismiss}):g&&!o.isMobile?(0,ve.jsx)(ye,{...e,state:{...e.state,annotation:g},onDismiss:e.onDismiss}):null}function ke(e){const{onDismiss:t}=e,{annotation:o,store:c,token:p}=e.state,h=(0,n.O7)(),u=(0,a.Fg)(),g=b.zW$(o),f=(0,y.A5)({url:g,baseUrl:_.default.domainBaseUrl,publicDomainName:_.default.publicDomainName}),j=(0,r.useCallback)((async()=>{t(),M.AE({token:p,store:c,readOnly:!1}),await i.default.afterNextFlush(),T.dz({type:"focusOnly",focus:!0})}),[t,c,p]),C=(0,r.useCallback)((async()=>{t(),await i.default.afterNextFlush();const e=Z.tq.copiedLinkToClipboard;let o=g;const r=(0,x.Wj)({url:g,baseUrl:_.default.domainBaseUrl,publicDomainName:_.default.publicDomainName,isMobile:h.device.isMobile,protocol:_.default.protocol,currentUrl:window.location.href});if("page"===r.name){const e=J.G.createChildStore(c,{table:S.iU,id:r.blockId});o=(0,d.Z)({pageId:r.blockId,pageModel:e.getModel(),baseUrl:_.default.domainBaseUrl,discussionId:r.discussionId,scrollToBlockId:r.scrollToBlockId,peekViewBlockId:r.peekViewBlockId,peekMode:r.peekMode,pageVisitSource:l.tY.CopyLink})}Z.RD({environment:h,stringValue:o,copiedMessage:e})}),[h,t,c,g]),w=(0,a.yK)((e=>({wrapper:{fontSize:P.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,fontWeight:P.Z.fontWeight.regular,fill:e.mediumIconColor},destination:{padding:"4px 0 4px 6px"},button:{display:"flex",alignItems:"center",padding:"2px 6px",whiteSpace:"nowrap",marginRight:2,borderRadius:4,color:e.regularTextColor},destinationText:{paddingRight:6,maxWidth:250,...P.Z.textOverflowStyle},icon:{height:"1em",width:"1em",marginRight:"0.25em",fill:e.mediumIconColor}})),[]),B=(0,I.useIntl)(),F=(0,I.defineMessages)({copyLink:{defaultMessage:"Copy link",id:"hoverPreviewOverlay.copyLink"}}),z=(0,s.VK)((()=>{if(!f)return;const e=J.G.createChildStore(c,{table:S.iU,id:f});return{pageIcon:(0,k.tp)({pageModel:e.getModel(),pageRole:e.getRole(),baseUrl:_.default.domainBaseUrl,getRecordModel:c.getRecordModel,emojiType:(0,K.e_)(h),isSafariOrIOS:h.device.isSafari||h.device.isIOS,isClient:!0,showEmojiInline:h.device.isWindows,currentUserId:h.currentUser.id,theme:u,emojiData:A.Z.state}),title:(0,ve.jsx)(de.Z,{style:w.destinationText,store:e})}}),[h,c,f,w,u])||{pageIcon:(0,v.o)(w.icon),title:(0,ve.jsx)("div",{style:w.destinationText,children:g})};return(0,ve.jsxs)(fe.gq,{style:w.wrapper,alignItems:"center",children:[(0,ve.jsxs)(fe.gq,{style:w.destination,alignItems:"center",children:[z.pageIcon,z.title]}),(0,ve.jsx)(ne.Z,{onClick:C,icon:m.U,isDarkIconColor:!0,ariaLabel:B.formatMessage(F.copyLink)}),e.isHoveredTokenEditable&&(0,ve.jsx)(oe.Z,{style:w.button,onClick:j,children:(0,ve.jsx)(I.FormattedMessage,{defaultMessage:"Edit",id:"hoverPreviewOverlay.editButton.label"})})]})}function Ce(e){const{annotation:t}=e.state,o=b.zyO(t),r=(0,a.yK)((e=>({container:{fontSize:P.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"},icon:{height:"1em",width:"1em",marginRight:"0.25em",fill:e.mediumIconColor}})),[]),i=(0,I.useIntl)(),n="relative"===o.date_format?"ll":"relative",s=(0,c.ZV)({value:o,date_format:n,time_format:"h:mm A",allowRelativeDates:!0,intl:i});return s===(0,c.ZV)({value:o,date_format:o.date_format,time_format:o.time_format,allowRelativeDates:!0,intl:i})?null:(0,ve.jsxs)(fe.gq,{style:r.container,alignItems:"center",children:[(0,u.C)(r.icon),(0,ve.jsx)("div",{style:P.Z.textOverflowStyle,children:s})]})}function Ie(e){const{annotation:t}=e.state,o=b.fsE(t),r=(0,I.useIntl)(),i=b.Z08(o.type,r),n=(0,a.yK)((e=>({container:{fontSize:P.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"}})),[]);return(0,ve.jsx)(fe.gq,{style:n.container,alignItems:"center",children:(0,ve.jsx)("div",{style:P.Z.textOverflowStyle,children:i})})}function we(e){var t;const{renderConfig:o,store:r}=e,i=(0,a.yK)((e=>({title:{color:e.regularTextColor,fontWeight:P.Z.fontWeight.semibold,whiteSpace:"initial",fontSize:13,padding:"4px 0",width:"100%"},header:{color:e.mediumTextColor,fontSize:P.Z.fontSize.UISmall.desktop},dictionaryKey:{color:e.lightTextColor,fontWeight:P.Z.fontWeight.regular,fontSize:P.Z.fontSize.UISmall.desktop},dictionaryValue:{color:e.mediumTextColor,fontSize:P.Z.fontSize.UISmall.desktop,whiteSpace:"normal",wordBreak:"break-word"}})),[]);return(0,ve.jsxs)(ve.Fragment,{children:[o.title&&(0,ve.jsx)(fe.gq,{children:(0,ve.jsx)(E.ox,{...o.title,store:r,style:i.title})}),o.headerAttributes&&o.headerAttributes.length>0&&(0,ve.jsx)(fe.gq,{alignItems:"center",style:{...i.header,marginBottom:8},children:(0,f.Z)(o.headerAttributes.map(((e,t)=>(0,ve.jsx)(E.ox,{...e,store:r,style:{...i.header,...P.Z.textOverflowStyle}},`attribute-${t}`)))||[],(e=>(0,ve.jsxs)("span",{children:[" ","·"," "]},`dot-${e}`)))}),o.dictionaryAttributes&&o.dictionaryAttributes.length>0&&(0,ve.jsx)(fe.Ht,{children:o.dictionaryAttributes.map(((e,t)=>{var n;let{key:s,value:a}=e;return(0,ve.jsxs)(fe.gq,{style:{marginBottom:t!==((null===(n=o.dictionaryAttributes)||void 0===n?void 0:n.length)??0)-1?4:8},children:[(0,ve.jsx)("div",{style:{marginRight:8,width:"30%",display:"flex",alignItems:"center"},children:(0,ve.jsx)("span",{style:i.dictionaryKey,children:(0,ve.jsx)(I.FormattedMessage,{...s.formatter,values:{value:a.attribute.name}})})}),(0,ve.jsxs)("div",{style:{width:"70%",display:"flex",alignItems:"center"},children:[a.icon&&(0,C.li)(a.icon)&&(0,ve.jsx)(ie.Z,{type:"image_url",imageURL:a.icon.values[0],size:16,style:{marginRight:6}}),(0,ve.jsx)(E.ox,{...a,store:r,style:i.dictionaryValue,avatarStyle:{marginRight:6}})]})]},t)}))}),o.bodyAttribute&&!(0,C.O0)(o.bodyAttribute)&&(0,ve.jsx)(fe.gq,{style:((null===(t=o.dictionaryAttributes)||void 0===t?void 0:t.length)??0)>0?{marginTop:3}:{},children:(0,ve.jsx)(E.hx,{attribute:o.bodyAttribute,store:r})}),o.previewImageAttribute&&(0,ve.jsx)("div",{style:{marginTop:o.dictionaryAttributes?6:0,marginBottom:4,display:"flex",justifyContent:"center"},children:(0,ve.jsx)("div",{children:(0,ve.jsx)(se.Z,{src:o.previewImageAttribute.values[0],style:{width:"100%",maxHeight:200}})})})]})}function Be(e){const{state:{annotation:t,store:o,token:i},onDismiss:l}=e,d=b.frW(t),c=(0,n.O7)(),h=(0,a.Fg)(),u=(0,r.useRef)(null),m=(0,s.VK)((()=>{const t=J.G.createChildStore(o,{table:S.iU,id:d,spaceId:o.pointer.spaceId}),r=t.canEdit(),n=(0,H._F)({store:t,isInDarkMode:"dark"===h.mode,canEdit:r,currentUserId:c.currentUser.id,getRenderFn:e=>t=>{var o,r;return(null===(o=e.hover)||void 0===o?void 0:o.call(e,t))||(null===(r=p.j.hover)||void 0===r?void 0:r.call(p.j,t))},showAction:void 0});if(!n)return;const{renderConfig:s,integration:a}=n,m=Boolean(n.action),v=e.isHoveredTokenEditable,y=o.recordStoreUIParentStore&&o.recordStoreUIParentStore instanceof J.G?o.recordStoreUIParentStore:void 0;return(0,ve.jsxs)("div",{style:{display:"flex",flexDirection:"column"},ref:u,children:[(0,ve.jsxs)(fe.gq,{alignItems:"center",style:{fontSize:12},children:[(0,ve.jsx)(ie.Z,{type:"image_url",imageURL:a.icon,size:16,style:{margin:4}}),(0,ve.jsx)("div",{style:{flexGrow:1,fontWeight:P.Z.fontWeight.medium},children:a.name}),i&&!m&&v&&(0,ve.jsx)("div",{children:(0,ve.jsx)(re.ZP,{popupType:re.Z4.Popup,placementToOrigin:D.u.Right,alignmentToOrigin:D.v.Start,originGap:4,onClose:()=>{let e=!1;const t=u.current;t&&(e=(0,G.uh)(t.getBoundingClientRect(),R.IL.x,R.IL.y)),e||null==l||l()},renderOrigin:e=>(0,ve.jsx)(oe.Z,{style:{display:"flex",alignItems:"center",justifyContent:"center",width:24,height:24,borderRadius:4,fill:h.lightIconColor},...e,children:(0,g.o)({width:14})}),render:e=>(0,ve.jsx)(he.default,{titleForReloadMenuOption:(0,ve.jsx)(I.FormattedMessage,{id:"linkMention.reload",defaultMessage:"Reload mention"}),parentBlockStore:y,store:t,token:i,onAccept:()=>e.close(),extraSecondaryItemKey:"mention_to_preview"})})})]}),m&&v?(0,ve.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",margin:"6px 0"},children:(0,ve.jsx)(pe.Z,{canEdit:r,store:t,isHoverPreview:!0,postActionCallback:l})}):(0,ve.jsx)(we,{renderConfig:s,store:t})]})}),[d,o,c,h,i,l,e.isHoveredTokenEditable,u]);return m?(0,ve.jsx)("div",{style:{padding:"12px 16px",minWidth:260,maxWidth:320},children:m}):null}function Pe(e){const t=(0,n.O7)(),{store:o,startBlockId:i,renderAdditionalBlocks:l,size:d}=e,c=(0,s.VK)((()=>L.TP(o)),[o]),p=(0,a.yK)((e=>({icon:{height:16,width:16,fill:e.icon.purple,marginRight:2},title:{fontSize:12,color:e.icon.purple},summary:{...(0,O.pd)(4),fontSize:12,lineHeight:1.35,color:e.text.secondary,marginBottom:12},contentCover:{color:e.text.primary,fontSize:11,lineHeight:1.5,marginBottom:0,width:"110%",transform:"translateX(-13px) translateY(-2px) scale(0.91)"},contentCoverEmpty:{height:16},imageCoverWrap:{marginBottom:16},contentCoverFade:{height:48,background:`linear-gradient(to bottom, transparent, ${e.surface.elevated} 100%)`},loadingShimmer:{marginBottom:0},rendererBlockStyle:{fontSize:9}})),[]),h=c&&b.Vkf(c)>=Se,u=(0,r.useMemo)((()=>(0,B.ZP)()),[]);return(0,r.useEffect)((()=>{const e=Y.$g.getCurrentPageVisitId();return F.pi(t,{hover_session_id:u,mentioned_page_id:o.pointer.id,hover_content_type:h?"ai_summary":"content_preview",page_visit_id:e}),()=>{F.Yo(t,{hover_session_id:u,hover_content_type:h?"ai_summary":"content_preview",mentioned_page_id:o.pointer.id,page_visit_id:e})}}),[t,u,h,o.pointer.id]),h?(0,ve.jsx)("div",{children:(0,ve.jsx)("div",{style:p.summary,children:(0,ve.jsx)(te.A,{textValue:c,parentStore:o})})}):(0,ve.jsx)(ee.Z,{variant:"default",store:o,coverFormat:{type:"page_content"},coverContentFadedOverlay:!0,coverContentFadedOverlayStyle:p.contentCoverFade,coverHeight:"tall"===d?200:84,startBlockId:i,contentWrapStyle:p.contentCover,imageCoverWrapStyle:p.imageCoverWrap,emptyGalleryCoverStyle:p.contentCoverEmpty,loadingShimmerStyle:p.loadingShimmer,showLoadingShimmer:!0,showEmptyGalleryCover:!0,onLoadProxiedImage:()=>{},rendererBlockStyle:p.rendererBlockStyle,renderAdditionalBlocks:l})}function Fe(e){const{store:t,contentBlockStart:o}=(0,s.VK)((()=>{const t=q.default.state.currentSpaceStore;if(!t)return{store:void 0,contentBlockStart:void 0};const o=J.G.createChildStore(t,{id:e.state.annotation[1],table:"block"});if(!o.isNavigableBlock()){return{store:o.getNavigableBlockStore(),contentBlockStart:o}}return o.isDefined()?{store:o}:{store:void 0,contentBlockStart:void 0}}),[e.state.annotation]);return(0,ve.jsx)(Te,{store:t,contentBlocks:o&&[o]})}const Ze=260;function Te(e){const{store:t,contentBlocks:o,events:r,size:i="regular"}=e,n=(0,a.yK)((e=>({wrapper:{width:Ze},coverContainer:{height:36},content:{padding:"0 16px"},breadcrumb:{color:e.text.tertiary,fontSize:11,marginBottom:-2},pageTitle:{display:"inline",fontWeight:P.Z.fontWeight.semibold,color:e.text.primary,fontSize:13,lineHeight:1.15},pageTitleIcon:{position:"relative",marginLeft:16,marginTop:-15,marginBottom:8},pageTitleContainer:{...(0,O.pd)(2),verticalAlign:"top",lineHeight:1.15},description:{fontSize:P.Z.fontSize.UISmall.desktop,color:e.icon.primary,lineHeight:1.2},empty:{height:16},highlightedBlockWrapper:{display:"flex",marginBottom:8}})),[]),{icon:l,isEmptyPage:d,content:c}=(0,s.VK)((()=>{if(!t)return{icon:void 0,isEmptyPage:!1,content:null};const e=t.isEmptyPage(),r=Boolean(o),s=e?(0,ve.jsx)("div",{style:{height:24}}):o?o.map(((e,o)=>(0,ve.jsxs)("div",{style:n.highlightedBlockWrapper,children:[(0,ve.jsx)(Q.Z,{}),(0,ve.jsx)(Pe,{store:t,startBlockId:null==e?void 0:e.id,renderAdditionalBlocks:r,size:i})]},`${e.id}_${o}`))):(0,ve.jsx)(Pe,{store:t,renderAdditionalBlocks:r,size:i});return{icon:t.getIcon(),isEmptyPage:e,content:s}}),[t,o,n.highlightedBlockWrapper,i]);return t?(0,ve.jsxs)("div",{style:n.wrapper,...r,children:[(0,ve.jsx)("div",{style:n.coverContainer,children:(0,ve.jsx)(xe.Z,{store:t,disabled:!0,paddingLeft:0,paddingRight:0,height:36,proxyWidth:260})}),(0,ve.jsx)(le.Z,{disabled:!0,icon:l,isEmptyPage:d,isLarge:!0,disableShrinking:!0,size:26,emojiSize:26,largeIcon:!0,style:n.pageTitleIcon}),(0,ve.jsxs)(fe.Ht,{gap:4,style:n.content,children:[(0,ve.jsxs)(fe.Ht,{gap:2,children:[(0,ve.jsx)(ce.Z,{store:t,style:n.breadcrumb}),(0,ve.jsx)("div",{style:n.pageTitleContainer,children:(0,ve.jsx)(de.Z,{shouldWrap:!0,maxLines:2,store:t,style:n.pageTitle})})]}),c]})]}):null}},12740:(e,t,o)=>{o.d(t,{Z:()=>A});o(57658);var r=o(67294),i=o(480),n=o(86628),s=o(24405),a=o(6695),l=o(9999),d=o(69651),c=o(21202),p=o(19889),h=o(9291),u=o(53965),m=o(7032),g=o(37810),v=(o(95477),o(66890)),y=o(80444),f=o(77556),x=o(88632),S=o(77080),j=o(19671),b=o(6258),k=o(76117),C=o(88893),I=o(88280),w=o(97039),B=o(78030),P=o(45653),F=o(29551),Z=o(99036),T=(o(51365),o(33929)),M=(o(61766),o(13023),o(24118)),z=(o(53876),o(12867),o(85893));M.Ae;function R(e){return(0,n.VK)((()=>{if(!e)return{collectionStore:void 0,schema:void 0,format:void 0};const t=e.getAssociatedCollectionStore();let o,r;return o=t?t.getSchema():Z.Kc(T.default.getIntl()),t&&(r=a.iB(t.getFormat(),o,void 0,a.j5.Collection)),{collectionStore:t,schema:o,format:r}}),[e])}const _=["Title","Pronoun","Teams (via Teams DB)","Office","Manager","Languages (Fluency)","Tenure"],K={"Teams (via Teams DB)":"Teams","Languages (Fluency)":"Languages"};function A(e){let{targetUserStore:t}=e;const o=(0,s.yK)((e=>({wrapper:{minWidth:100,maxWidth:300},profile:{padding:"10px 12px 12px 10px"},content:{padding:"8px 10px 10px"},breadcrumb:{color:e.text.secondary},profileTitle:{paddingLeft:20,fontSize:18,lineHeight:1.25,fontWeight:g.Z.fontWeight.semibold,color:e.text.primary},profileSubtitle:{paddingLeft:20,paddingTop:2,fontSize:g.Z.fontSize.UISmall.desktop,color:e.icon.primary,paddingBottom:1},profileMeetingContainer:{display:"flex",alignItems:"center",paddingLeft:20,paddingTop:2,cursor:"pointer"},profileMeetingLeftIcon:{},profileMeetingText:{paddingLeft:4,paddingRight:4,fontSize:g.Z.fontSize.UISmall.desktop,lineHeight:1.25,color:e.text.primary},profileMeetingRightIcon:{},profileKeyRow:{minWidth:80},profileKeyText:{textTransform:"capitalize",fontWeight:500},description:{padding:"6px 8px 12px 20px",fontSize:g.Z.fontSize.UISmall.desktop,color:e.icon.primary,borderTop:`1px solid ${e.regularDividerColor}`}})),[]),l=(0,n.VK)((()=>y.default.state.currentSpaceStore),[]),d=(0,n.VK)((()=>y.default.state.currentUserStore),[]),p=(0,n.VK)((()=>!!t&&t.isDefined()),[t]),h=(0,n.VK)((()=>{if(!t)return;const e=t.getEmail();if(!e)return;const o=S.default.getConfigKey("notion_people_block_id","data")[e];if(!o)return;return b.G.createChildStore(t,{table:c.iU,id:(0,m.Mt)(o)})}),[t]),{collectionStore:u,schema:x,format:k}=R(h),C=function(e){let{collectionStore:t,format:o,schema:r,userPeopleCollectionPage:i}=e;return(0,n.VK)((()=>{var e;if(!(t&&o&&r&&i))return;const n=a.iB(o,r,void 0,a.j5.Collection),s=null==n||null===(e=n.collection_page_properties)||void 0===e?void 0:e.filter((e=>{var t;const o=null===(t=r[e.property])||void 0===t?void 0:t.name;return void 0!==o&&_.includes(o)}));if(!s)return;const l={};return s.forEach((e=>{var o;l[(null===(o=r[e.property])||void 0===o?void 0:o.name)||""]=(0,z.jsx)(w.Z,{store:i,property:e.property,locked:!0,disabled:!0,format:B.C.Page,onTab:()=>{},onUntab:()=>{},tableWrap:!1,blockPropertyValueOverlayStore:j.Z,collectionStore:t})})),l}),[t,r,o,i])}({collectionStore:u,format:k,schema:x,userPeopleCollectionPage:h}),I=(0,i.O7)(),P=(0,r.useMemo)((()=>new f.Z(I)),[I]);(0,r.useEffect)((()=>{u&&P.setContext({type:"collectionPage",collectionStore:u})}),[P,u]);const Z=(0,n.VK)((()=>!!(t&&d&&p)&&t.id===d.id),[t,d,p]);return t&&p&&l?h&&P&&C?(0,z.jsx)("div",{style:o.wrapper,children:(0,z.jsx)(v.L1,{value:P,children:(0,z.jsxs)(F.Ht,{children:[(0,z.jsx)(F.gq,{gap:3,alignItems:"center",style:o.profile,children:(0,z.jsx)(L,{userStore:t,styles:o})}),(0,z.jsxs)("div",{style:o.description,children:[(0,z.jsx)(U,{userProfile:C,styles:o}),Z?(0,z.jsx)(F.gq,{gap:1,alignItems:"center",children:(0,z.jsx)(W,{spaceStore:l,limit:5,styles:o})}):void 0]})]})})}):(0,z.jsx)("div",{style:o.wrapper,children:(0,z.jsxs)(F.Ht,{children:[(0,z.jsx)(F.gq,{gap:3,alignItems:"center",style:o.profile,children:(0,z.jsx)(L,{userStore:t,styles:o})}),Z?(0,z.jsx)("div",{style:o.description,children:(0,z.jsx)(F.gq,{gap:1,alignItems:"center",children:(0,z.jsx)(W,{spaceStore:l,limit:5,styles:o})})}):void 0]})}):null}function L(e){let{userStore:t,styles:o}=e;const r=(0,h.useIntl)(),{name:i,email:s,firstName:a}=(0,n.VK)((()=>{var e;return{name:t.getFullName(r),email:t.getEmail(),firstName:null===(e=t.getFullName(r))||void 0===e?void 0:e.split(" ")[0]}}),[t,r]);return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(P.Z,{userStore:t,size:70,borderStyle:"none"}),(0,z.jsxs)(F.Ht,{gap:1,children:[(0,z.jsx)("div",{style:o.profileTitle,children:i}),(0,z.jsx)("div",{style:o.profileSubtitle,children:s}),a?(0,z.jsxs)("div",{style:o.profileMeetingContainer,onClick:()=>{window.open(`https://calendar.notion.so/meet-with/${s}`,"_blank")},children:[(0,z.jsx)("div",{style:o.profileMeetingLeftIcon,children:(0,d.C)({width:12,height:12})}),(0,z.jsx)("div",{style:o.profileMeetingText,children:(0,z.jsx)(h.FormattedMessage,{id:"people.profile.setMeeting",defaultMessage:"Meet with {name}",values:{name:a}})}),(0,z.jsx)("div",{style:o.profileMeetingRightIcon,children:(0,l.J)({width:12,height:12})})]}):void 0]})]})}function U(e){let{userProfile:t,styles:o}=e;return t?(0,z.jsx)(z.Fragment,{children:_.filter((e=>t[e])).map((e=>(0,z.jsxs)(F.gq,{gap:1,alignItems:"center",children:[(0,z.jsx)(F.Ht,{children:(0,z.jsx)(F.gq,{style:o.profileKeyRow,children:(0,z.jsx)("div",{style:o.profileKeyText,children:K[e]?K[e]:e})})}),(0,z.jsx)(F.Ht,{style:{transform:"scale(0.9)",transformOrigin:"center left"},children:t[e]})]},e)))}):null}function W(e){let{spaceStore:t,limit:o,styles:r}=e;const{userSimilarityList:i}=(0,n.VK)((()=>{const e=I.subscriptionDataStoreInstance.state,r=e?C.CM(e):[],i=k.p.state||{},n=r.map((e=>{const t=i[e.userId];return{id:e.userId,similarity:t||0}})).sort(((e,t)=>t.similarity-e.similarity)).slice(0,o),s=[],a=u.yW(n.map((e=>{const o=b.U6.createChildStore(t,{table:p.KJ,id:e.id});return s.push({id:e.id,similarity:e.similarity,userStore:o}),o.isReady()})));return{isOnline:x.Z.state.online,subscriptionDataStoreData:e,userSimilarityData:k.p.state||{},visibleUsersLoaded:a,visibleUsers:r,userSimilarityList:s}}),[t,o]);return t&&i&&0!==i.length?(0,z.jsxs)(F.gq,{gap:1,alignItems:"center",style:{paddingTop:4},children:[(0,z.jsx)(F.Ht,{children:(0,z.jsx)(F.gq,{style:r.profileKeyRow,children:(0,z.jsx)("div",{style:r.profileKeyText,children:"Coworkers"})})}),(0,z.jsx)(F.Ht,{children:(0,z.jsx)(F.gq,{gap:5,children:(0,z.jsx)("div",{children:(0,z.jsx)("div",{style:{display:"flex",position:"relative",float:"right"},children:i.map((e=>(0,z.jsx)("div",{style:{marginLeft:1.5},children:(0,z.jsx)(P.Z,{userStore:e.userStore,size:18})},e.id)))})})})})]}):null}},92559:(e,t,o)=>{o.d(t,{Z:()=>s});o(67294);var r=o(24405),i=o(31701),n=o(85893);function s(){const e=(0,r.yK)((()=>({blockContext:{flexShrink:0,display:"flex",width:3,borderRadius:4,marginLeft:2,marginRight:8,minHeight:24,background:i.DB}})),[]);return(0,n.jsx)("div",{style:e.blockContext})}},25735:(e,t,o)=>{o.d(t,{Y:()=>u});o(67294);var r=o(480),i=o(86628),n=o(24405),s=o(9291),a=o(37810),l=o(26189),d=o(16639),c=o(80444),p=o(29302),h=o(85893);function u(e){const{group:t,limit:o,noMembersMessage:u,color:m,trackHover:g}=e,v=(0,n.yK)((e=>({container:{marginBottom:4,..."white_background"===m?{fontSize:a.Z.fontSize.UISmall.desktop,color:e.mediumTextColor,padding:"4px 8px"}:{}},userContainer:{display:"flex",alignContent:"flex-end",minWidth:140,width:"100%",marginTop:4},user:{flexGrow:1},moreMessage:{marginLeft:2,marginTop:4,..."white_background"===m?{fontSize:a.Z.fontSize.UISmall.desktop,color:e.mediumTextColor}:{color:e.mediumInvertedTextColor}}})),[m]),y=(0,i.VK)((()=>c.default.state.currentSpaceStore),[]),f=(0,r.O7)();(0,i.VK)((()=>{g&&l.iH(f,{group_id:t.id})}),[g,t.id,f]);const{countRemainingUsers:x,limitedUserStores:S}=(0,i.VK)((()=>(0,d.rm)({group:t,spaceStore:y,limit:o})),[t,y,o]);return 0===S.length?(0,h.jsx)(h.Fragment,{children:u}):(0,h.jsxs)("div",{style:v.container,children:[S.map((e=>(0,h.jsx)("div",{style:v.userContainer,children:(0,h.jsx)(p.Z,{style:v.user,userStore:e,avatarSize:18})},e.id))),x>0&&(0,h.jsx)("div",{style:v.moreMessage,children:(0,h.jsx)(s.FormattedMessage,{id:"blockPermissionsSettings.groupPermissionUsers.tooltip",defaultMessage:"{countRemainingUsers} more…",values:{countRemainingUsers:x}})})]})}},88804:(e,t,o)=>{o.d(t,{E:()=>l,N:()=>a});var r=o(83212),i=o(6258),n=o(98165),s=o(46654);function a(e,t){const o=t.getRecordStoreUIRoot(),a=o instanceof i.G&&o.isPageBlock()&&o.isNonEditableState(),l=(0,n.n3)(o)&&r.Z.getMode(e,o),d=Boolean((0,s.YF)(l));return!t.canEdit()||d||a}function l(e,t){return!a(e,t)}}}]);