"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5998],{42807:(e,t,o)=>{o.r(t),o.d(t,{default:()=>$});var i=o(67294),s=o(83355),n=o(86628),r=o(24405),a=o(15145),l=o(92996),d=o(84619),p=o(22225),c=o(13148),u=o(12217),h=o(58810),g=o(17683),m=o(32240),S=o(47453),M=o(98519),f=o(9291),k=o(53965),x=o(37810),y=o(36610),R=o(26999),b=o(28651),C=o(48543),v=o(73744),P=o(12534),O=o(33929),w=o(39500),j=o(29376),_=o(86098),T=o(19671),I=o(88923),L=o(97039),B=o(78030),N=o(53876),E=o(64921),D=o(5145),F=o(50478),Z=o(73063),A=o(11470),V=o(26388),U=o(25845),H=o(85893);const z=(0,f.defineMessages)({openAsPageTitle:{defaultMessage:"Open",id:"database.navigateButton.openAsPageTitle"}});class W extends s.Z{constructor(){var e;super(...arguments),e=this,this.outerRef=i.createRef(),this.relationTokenBlockStoreRef=i.createRef(),this.storeTypes={mouseStore:b.Z},this.isSprintsTypedProperty=this.createComputedStore((()=>this.props.targetCollectionStore.getFormatStore().getKeyStore("app_config_uri").getValue()===l.p$)),this.renderOuterDesktopRelationRow=(e,t,o,i,s,n,r)=>{const{mediumInvertedTextColor:l}=this.theme;return(0,H.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"100%"},ref:this.outerRef,children:["section"===t&&this.stores.mouseStore.state.mouseEntered&&o&&(0,H.jsx)(V.ZP,{renderTooltip:()=>(0,H.jsx)(f.FormattedMessage,{defaultMessage:"Drag <medium>to move</medium>",id:"database.relationMenuRow..dragPrompt.text",values:{medium:e=>(0,H.jsx)("span",{style:{color:l},children:e})}}),render:e=>(0,H.jsx)(Z.Z,{hasBackground:!1,ariaLabel:"Drag to move a related page",icon:u.D,iconStyle:{width:14,height:14,fill:this.theme.lightIconColor},hoveredStyle:{borderRadius:4},style:{cursor:"grab",width:F.C$+4,marginLeft:-(F.C$+4),height:24,borderRadius:4},...e})}),"section"===t?(0,H.jsx)("div",{style:K(this.props.rowType,this.theme,i),onContextMenu:e=>Q(e,this.environment),onMouseEnter:n,onMouseLeave:r,onClick:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleRelationSectionRelationMenuRowClick,role:"button","aria-label":"Editable title","aria-disabled":this.props.disabled,tabIndex:this.props.disabled?-1:0,children:e}):(0,H.jsx)("div",{style:K(this.props.rowType,this.theme,i),onContextMenu:e=>Q(e,this.environment),onMouseEnter:n,onMouseLeave:r,role:"button",tabIndex:this.props.disabled?-1:0,"aria-disabled":this.props.disabled,onClick:e=>{(0,P.ZP)({event:e,context:P.Af.EditorClick,callback:()=>{(0,w.uG)(e)||(s?s(this.outerRef.current):function(e,t,o,i,s,n,r,l,d,p,c,u){if(l||p){if(t)return;const r=v.DJ(e),l=i.id===s.id?I.default.state.resultsStore:void 0,p=i.id===s.id?I.default.state.collectionContextStore:void 0,h=I.default.isSidePeekOpen();if(R.CH({environment:o,store:n,peekMode:c.state,openInNew:r,resultsStore:l,collectionContextStore:p,pageVisitSource:a.tY.PeekOpen}),y.XX(o,{from:"inline"===d||"section"===d?"property_value":"configure_relation_modal",meta_click:Boolean(r)}),"popup"===d&&!h){(u??T.Z).setState({isOpen:!1})}}else r(e)}(e,this.isSprintsTypedProperty.state,this.environment,this.props.collectionStore,this.props.targetCollectionStore,this.props.relatedPageStore,this.props.onActionButtonClick,this.props.disabled,this.props.rowType,this.props.isSelected,this.peekModeStore,this.props.blockPropertyValueOverlayStore))}})},children:e})]})},this.renderInnerRelationMenuRow=(e,t,o,i,s,n,r,a,l,d,c)=>{const u="section"===o&&!this.props.disabled&&t.canEdit()&&!i.isMobile,h=j.BI(this.props.collectionStore.getSchema(),this.props.property);let g,m;return g=a?h?(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.removePR.message",defaultMessage:"Unlink PR"}):(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.removePage.message",defaultMessage:"Unlink page"}):h?(0,H.jsx)(f.FormattedMessage,{defaultMessage:"Link PR",id:"database.relationMenuRow.tooltip.addPR.message"}):(0,H.jsx)(f.FormattedMessage,{defaultMessage:"Link page",id:"database.relationMenuRow.tooltip.addPage.message"}),m="section"===o&&a?h?(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.insertPRInline.message",defaultMessage:"Insert new PR"}):(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.insertPageInline.message",defaultMessage:"Insert new page"}):h?(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.insertPR.message",defaultMessage:"Link another PR"}):(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.insertPage.message",defaultMessage:"Link another page"}),(0,H.jsxs)(H.Fragment,{children:[e&&"popup"===o&&(0,H.jsx)(D.ZP,{iconSize:12,style:{marginLeft:2,height:20}}),i.isPhone?this.renderRelationToken(i,u):this.renderRelationProperties(i,u),(s||n)&&(0,H.jsxs)("div",{style:Y(this.theme,s||n,!1),children:[s&&(0,H.jsx)(X,{isOpenPage:!1,ariaLabel:a?"Unlink page":"Link page",onClick:l,style:{borderRadius:3},icon:a?p.g:S.R,tooltipMessage:g}),n&&d&&(0,H.jsx)(X,{isOpenPage:!1,ariaLabel:"section"===o&&a?"Insert new page":"Link another page",onClick:()=>d(this.outerRef.current),style:{borderRadius:0},icon:S.R,tooltipMessage:m})]}),r&&c&&(0,H.jsx)(q,{peekModeStore:this.peekModeStore,showPrimaryButton:s,showSecondaryButton:n,onOpenPageButtonClick:c})]})},this.renderSprintsInnerRelationMenuRow=(e,t,o,i,s,n,r,a,l,d,c)=>{const u="section"===o&&!this.props.disabled&&t.canEdit()&&!i.isMobile;return(0,H.jsxs)(H.Fragment,{children:[e&&"popup"===o&&(0,H.jsx)(D.ZP,{iconSize:12,style:{marginLeft:2,height:20}}),i.isPhone?this.renderRelationToken(i,u):this.renderRelationProperties(i,u),a&&"popup"===o&&(0,H.jsx)("div",{style:{display:"inline-flex",marginLeft:"auto",alignItems:"center",justifyContent:"center",padding:0,height:24},children:(0,M.k)({width:16,height:16,fill:this.theme.regularIconColor,display:"inline-flex",alignItems:"center",justifyContent:"center"})}),(s||n)&&(0,H.jsxs)("div",{style:Y(this.theme,s||n,!1),children:[s&&(0,H.jsx)(X,{isOpenPage:!1,ariaLabel:a?"Remove this sprint":"Add this sprint",onClick:l,style:{borderRadius:3},icon:a?p.g:S.R,tooltipMessage:a?(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.removePage.messageSprints",defaultMessage:"Remove this sprint"}):(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.addPage.messageSprints",defaultMessage:"Add this sprint"})}),n&&d&&(0,H.jsx)(X,{isOpenPage:!1,ariaLabel:"section"===o&&a?"Insert new page":"Move to a different sprint",onClick:()=>d(this.outerRef.current),style:{borderRadius:0},icon:S.R,tooltipMessage:"section"===o&&a?(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.insertPageInline.message",defaultMessage:"Insert new page"}):(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.insertPage.messageSprints",defaultMessage:"Move to a different sprint"})})]}),r&&c&&(0,H.jsx)(q,{peekModeStore:this.peekModeStore,showPrimaryButton:s,showSecondaryButton:n,onOpenPageButtonClick:c})]})},this.renderRelationToken=function(t,o){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];const{relatedPageStore:s,rowType:n,pageStore:r}=e.props;return(0,H.jsx)("div",{style:{display:"flex",alignItems:"center",flex:"0 1 auto",minHeight:0,...!i&&{minWidth:40},paddingLeft:"section"===n?4:6},children:(0,H.jsx)(U.Z,{ref:e.relationTokenBlockStoreRef,format:d.lo.Inline,blockId:s.id,isSingle:!0,parentStore:r,noUnderline:e.isSprintsTypedProperty.state,style:{display:"flex",alignItems:"center",margin:0,whiteSpace:"nowrap",marginRight:"section"===n?0:t.isTablet?8:0,minWidth:0},titleStyle:{...x.Z.textOverflowStyle,maxWidth:"100%"},clickTitleBehavior:o?"edit":void 0,onTitleEnter:e.props.onInsertInline,index:e.props.index},s.id)})},this.renderRelationProperties=(e,t)=>{const{relatedPageStore:o,targetCollectionStore:s,blockPropertyValueOverlayStore:n,rowType:r}=this.props,a=this.targetPropertiesToDisplay.state;if(k.xb(a))return;const l="section"!==r||(this.props.disabled||!o.canEdit()||this.environment.device.isMobile),d=a.map((a=>{if("title"===a.property){const o=this.isSprintsTypedProperty.state;return(0,H.jsx)(i.Fragment,{children:this.renderRelationToken(e,t,o)},"title")}return(0,H.jsx)(L.Z,{store:o,property:a.property,disabled:l,locked:!1,format:"section"===r?B.C.RelationSection:B.C.Relation,tableWrap:!1,blockPropertyValueOverlayStore:n??T.Z,collectionStore:s},a.property)}));return(0,H.jsx)("div",{style:{display:"flex",marginRight:8,maxHeight:22,alignItems:"center",...x.Z.textOverflowStyle},children:d})},this.targetPropertiesToDisplay=this.createComputedStore((()=>{const{collectionStore:e,targetCollectionStore:t,property:o}=this.props,i=t.getSchema();return i?j.U1({collectionStore:e,property:o}).filter((e=>e.visible&&("title"===e.property||i[e.property]))):[]}),!0),this.peekModeStore=this.createComputedStore((()=>{if(I.default.state.open)return I.default.state.mode;const{blockPropertyValueOverlayStore:e}=this.props,t=null==e?void 0:e.state;if(null==t||!t.isOpen||null==t||!t.collectionContextStore)return I.default.state.mode;const o=t.collectionContextStore,i=null==o?void 0:o.collectionViewStore(),s=null==i?void 0:i.getType();return i&&s?i.getFormat().collection_peek_mode??C.Ls[s]:I.default.state.mode})),this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleMouseMove=()=>{var e;(e=this.stores.mouseStore).setState({...e.state,mouseEntered:!0})},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleMouseLeave=()=>{var e;(e=this.stores.mouseStore).setState({...e.state,mouseEntered:!1})},this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleRelationSectionRelationMenuRowClick=e=>function(e,t,o,i,s,n,r,l,d){(0,P.ZP)({event:e,context:P.Af.EditorClick,callback:()=>{if(!(0,w.uG)(e))if(s||l){const s=v.DJ(e),r=o.id===i.id?I.default.state.resultsStore:void 0,l=o.id===i.id?I.default.state.collectionContextStore:void 0;R.CH({environment:t,store:n,peekMode:d.state,openInNew:s,resultsStore:r,collectionContextStore:l,pageVisitSource:a.tY.PeekOpen}),y.XX(t,{from:"relation_section",meta_click:Boolean(s)})}else r(e)}})}(e,this.environment,this.props.collectionStore,this.props.targetCollectionStore,this.props.isSelected,this.props.relatedPageStore,this.props.onActionButtonClick,this.props.disabled,this.peekModeStore)}get registries(){return[_.Z]}renderComponent(){const{device:e}=this.environment;return e.isPhone&&"popup"===this.props.rowType?(0,H.jsx)(J,{...this.props}):this.renderDesktopMenuItem()}renderDesktopMenuItem(){const{disabled:e,locked:t,canDrag:o,relatedPageStore:i,focused:s,isSelected:n,rowType:r,targetCollectionStore:a,onActionButtonClick:l,onSecondaryButtonClick:d,onOpenPageButtonClick:p,onMouseEnter:c,onMouseLeave:u}=this.props,{device:h}=this.environment,g=(h.isMobile||s)&&!t&&!e;if(this.isSprintsTypedProperty.state)return this.renderSprintsDesktopMenuItem();const m="section"!==r?(h.isMobile||s)&&!t&&!e:g,M=!t&&!e&&"section"===r&&!h.isMobile&&!(1===this.props.propertyLimit)&&a.canEdit(),x=!h.isMobile&&!t&&s&&!e&&("inline"===r||"section"===r)&&!k.o8(d),y=!h.isMobile&&s&&!e&&"section"===r&&!k.o8(p),R=this.renderInnerRelationMenuRow(o,i,r,h,m,x&&"section"!==r,y,n,l,d,p),b=this.theme.mediumInvertedTextColor;return(0,H.jsxs)("div",{style:{display:"flex",alignItems:"center",width:"calc(100% + 48px)",paddingLeft:48,position:"relative",left:-48},onMouseEnter:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleMouseMove,onMouseLeave:this.CLASS_COMPONENT_CONVERSION_DO_NOT_TOUCH_handleMouseLeave,ref:this.outerRef,children:[this.stores.mouseStore.state.mouseEntered&&M&&(0,H.jsx)(V.ZP,{renderTooltip:()=>(0,H.jsx)(f.FormattedMessage,{defaultMessage:"Click <medium>to insert a page below</medium>",id:"database.relationMenuRow.tooltip.floatingAddPageButton.message",values:{medium:e=>(0,H.jsx)("span",{style:{color:b},children:e})}}),render:e=>(0,H.jsx)(Z.Z,{hasBackground:!1,ariaLabel:"Create a new related page",icon:S.R,iconStyle:{width:16,height:16,fill:this.theme.lightIconColor},onClick:this.props.onInsertInline,hoveredStyle:{borderRadius:4},style:{marginLeft:o?-44:-22,position:"absolute",marginRight:4},...e})}),this.renderOuterDesktopRelationRow(R,r,o,s,void 0,c,u)]})}renderSprintsDesktopMenuItem(){const{disabled:e,locked:t,canDrag:o,relatedPageStore:i,focused:s,isSelected:n,rowType:r,onActionButtonClick:a,onSecondaryButtonClick:l,onOpenPageButtonClick:d,onMouseEnter:p,onMouseLeave:c,propertyLimit:u}=this.props,{device:h}=this.environment,g=(h.isMobile||s)&&!t&&!e,m="section"!==r?(h.isMobile||s)&&!t&&!e&&1!==u&&"popup"===r&&n:g,S=!h.isMobile&&!t&&s&&!e&&!k.o8(l),M=!h.isMobile&&s&&!e&&("section"===r||"inline"===r)&&!k.o8(d),f=M,x=this.renderSprintsInnerRelationMenuRow(o,i,r,h,m,S&&!f&&"section"!==r,M,n,a,l,d);return this.renderOuterDesktopRelationRow(x,r,o,s,l,p,c)}}function X(e){const{isOpenPage:t,onClick:o,style:i,icon:s,tooltipMessage:n,ariaLabel:r}=e;return(0,H.jsx)(V.ZP,{renderTooltip:()=>n,render:e=>(0,H.jsx)(Z.Z,{hasBackground:!1,ariaLabel:r,icon:s,onClick:o,caption:t&&O.default.formatMessage(z.openAsPageTitle),hoveredStyle:{borderRadius:4},style:{height:20,width:20,flex:"0 0 auto",...i},...e})})}W.displayName="RelationMenuRow";const $=W;function G(e){let{onActionButtonClick:t}=e;return(0,H.jsx)(E.Z,{mobileFeedback:!0,onClick:t,style:{padding:12,marginRight:-12},children:(0,c.U)({width:20,height:20})})}function J(e){const t=!e.disabled&&e.isSelected;return(0,H.jsx)(A.Z,{...e,store:e.relatedPageStore,hidePath:!0,right:t?(0,H.jsx)(G,{onActionButtonClick:e.onActionButtonClick}):void 0})}function K(e,t,o){return{...x.Z.textOverflowStyle,display:"flex",alignItems:"center",position:"relative",borderRadius:4,width:"100%",height:j.Mu,paddingTop:2,paddingRight:4,paddingBottom:2,paddingLeft:0,fontSize:N.z6,margin:"popup"===e?"0px 4px":0,cursor:"pointer",background:o?t.buttonHoveredBackground:void 0,userSelect:"none"}}function Y(e,t,o){return{position:"absolute",right:o?t?36:6:6,top:4,display:"inline-flex",flexShrink:0,borderRadius:4,overflow:"hidden",padding:2,gap:1,background:e.popoverBackground,boxShadow:e.lightBoxShadow}}function Q(e,t){const{device:o}=t;o.isAndroid&&o.isPhone&&e.preventDefault()}function q(e){let{showPrimaryButton:t,showSecondaryButton:o,onOpenPageButtonClick:i,peekModeStore:s}=e;const a=(0,r.Fg)(),l=(0,n.VK)((()=>s.state),[s]);return(0,H.jsx)("div",{style:Y(a,t||o,!0),children:(0,H.jsx)(X,{isOpenPage:!0,ariaLabel:"side_peek"===l?"Open in side peek":"center_peek"===l?"Open in center peek":"Open as page",onClick:i,style:{width:60},icon:"side_peek"===l?m.y:"center_peek"===l?g.Q:h.Z,tooltipMessage:"side_peek"===l?(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.openPageSidePeek.message",defaultMessage:"Open in side peek"}):"center_peek"===l?(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.openPageCenterPeek.message",defaultMessage:"Open in center peek"}):(0,H.jsx)(f.FormattedMessage,{id:"database.relationMenuRow.tooltip.openPage.message",defaultMessage:"Open as page"})})})}},64275:(e,t,o)=>{o.d(t,{D:()=>n});o(67294);var i=o(45238),s=o(85893);const n=(0,i.IU)("closeSmall",{viewBox:"0 0 16 16",svg:(0,s.jsx)("path",{d:"M3.732 11.052c-.303.308-.32.877.011 1.202.33.33.894.32 1.203.011L8 9.21l3.05 3.05c.32.325.872.32 1.197-.011a.857.857 0 00.01-1.197L9.21 8.002l3.05-3.056a.857.857 0 00-.01-1.197.857.857 0 00-1.198-.01L8 6.788 4.946 3.732c-.31-.303-.878-.32-1.203.01-.325.331-.314.895-.01 1.203l3.055 3.056-3.056 3.05z"})})}}]);