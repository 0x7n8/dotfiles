"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6154],{36154:(e,t,a)=>{a.d(t,{L6:()=>jt,aU:()=>ut,vd:()=>xe,Yw:()=>Qe});var n=a(27537),s=a.n(n),o=a(48317),i=a(15145),r=a(41432),l=a(61061),c=a(27714),d=a(38491),m=a(55863),u=a(70203),g=a(9291),v=a(19719),y=a(66324),p=a(1302),f=a(27724),N=a(44886),k=a(61045),M=a(24677);var h=a(6404),b=a(893),S=a(30188),P=a(42239),A=a(47839),D=a(36280),w=a(45990),T=a(91376),U=a(17659),I=a(87420),C=a(52423),L=a(75754),O=a(8055),R=a(1357),E=a(87531),x=a(42858),F=a(29974),Z=a(993),_=a(22974),q=a(29373),B=a(13447),K=a(68422),G=a(19037),V=a(28020),z=a(92783),Q=a(18514),j=a(95697),J=a(77907),Y=a(50770),H=a(62967),W=a(94841),X=a(30806);const $=(0,H.cs)({key:"open home",displayName:void 0,analyticsName:"openHome",validators:[G.jlf],shortcuts:["openHome"],closeParentMenu:!0,action:async e=>{const t=e.environment,a=W.J2("main");a&&(await a.load(),a.canRead()&&((0,X.$X)({environment:t,from:"keyboard_shortcut"}),L._c({environment:t,store:a,pageVisitSource:i.tY.SidebarHome})))}});var ee=a(57345),te=a(74948),ae=a(24646),ne=a(38676),se=a(36391),oe=a(80444),ie=a(21273),re=a(98180),le=a(85526),ce=a(88923),de=a(29026),me=a(62820),ue=a(9867),ge=a(21797),ve=a(95554),ye=a(89941),pe=a(52922),fe=a(82763),Ne=a(35067),ke=a(93685),Me=a(29768),he=a(20422),be=a(2295),Se=a(12988),Pe=a(6471),Ae=a(98604),De=a(10906),we=a(58202),Te=a(69316);const Ue=(0,g.defineMessages)({searchName:{id:"action.search.name",defaultMessage:"Search"}}),Ie=(0,H.cs)({key:"search",displayName:Ue.searchName,analyticsName:Ue.searchName.defaultMessage,validators:[G.jlf,G.daU,G.ffD(G.QLY("native-find-in-page"))],shortcuts:["search"],closeParentMenu:!0,action:e=>{const t=ce.default.isCenterPeekOpen();A.inPageSearch.start(t)}}),Ce=(0,H.cs)({key:"search",displayName:Ue.searchName,analyticsName:Ue.searchName.defaultMessage,validators:[G.jlf,G.QLY("native-find-in-page"),G.lvA,G.ffD(G.hrD)],shortcuts:["search"],closeParentMenu:!0,action:()=>{var e,t;const a=(0,V.np)();if(!a)return;const n=a.isCollectionView(),s=(0,De.fm)(a),o="page"===(null==s||null===(e=s.collectionViewStore())||void 0===e?void 0:e.getType());if(n&&!o){const e=we.R.findCollectionViewBlockFromStore(a);return void(null==e||e.collectionContextStore.searchOpen.setState(!0))}const{open:i,focused:r}=Te.Z.state,l=Te.Z.hasFindQuery(),c=null===(t=window.getSelection())||void 0===t?void 0:t.toString();if(i){if(i&&r)return void Ae.xv({clearQuery:!1})}else Ae.bA({currentTextSelection:c,shouldSelectAllInput:l&&0===(null==c?void 0:c.length)})}});var Le=a(41670),Oe=a(11732);function Re(e){return void 0!==e.shortcuts}const Ee=(0,g.defineMessages)({enterName:{id:"action.enter.name",defaultMessage:"Enter"},syncPageName:{id:"action.syncPage.name",defaultMessage:"Save for offline"},resyncPageName:{id:"action.resyncPage.name",defaultMessage:"Refresh offline data"},unsyncPageName:{id:"action.unsyncPage.name",defaultMessage:"Remove from offline"},edit:{id:"action.edit.name",defaultMessage:"Edit"},quickFindName:{id:"action.quickFind.name",defaultMessage:"Quick find"},copyLinktoViewName:{id:"action.copyLinktoView.name",defaultMessage:"Copy link to view"},zoomInName:{id:"action.zoomIn.name",defaultMessage:"Zoom in"},zoomOutName:{id:"action.zoomOut.name",defaultMessage:"Zoom out"},resetZoomName:{id:"action.resetZoom.name",defaultMessage:"Reset zoom"},blockSelectionCompletionName:{id:"action.blockSelectionCompletionName.name",defaultMessage:"Ask AI"},copyFormattedLinkNavigableTypeName:{id:"action.copyFormattedLinkNavigableType.name",defaultMessage:"Copy linked title"},copyLinkToCurrentPageSnackBarMessage:{id:"action.copyLinkToCurrentPage.snackBarMessage",defaultMessage:"Link to current page copied to clipboard"},pasteName:{id:"action.paste.name",defaultMessage:"Paste"},moveUpName:{id:"action.moveUp.name",defaultMessage:"Move up"},moveDownName:{id:"action.moveDown.name",defaultMessage:"Move down"},propertyVisibilityLabel:{id:"action.propertyVisibility.label",defaultMessage:"Toggle property visibility"},databaseLockLabel:{id:"action.databaseLock.label",defaultMessage:"Database lock"},wrapCellsName:{id:"action.wrapAllColumns.name",defaultMessage:"Wrap all columns"},createLinkName:{id:"action.createLink.name",defaultMessage:"Create link"},createEquationName:{id:"action.createEquation.name",defaultMessage:"Create equation"},filterName:{id:"action.filter.name",defaultMessage:"Filter"},sortName:{id:"action.sort.name",defaultMessage:"Sort"},legacyGroupByName:{id:"action.legacyGroupBy.name",defaultMessage:"Group by"},groupByName:{id:"action.groupBy.name",defaultMessage:"Group"},subGroupByName:{id:"action.subGroupBy.name",defaultMessage:"Sub-group"},propertiesName:{id:"action.properties.name",defaultMessage:"Properties"},templatesName:{id:"action.templates.name",defaultMessage:"Templates"},calendarByName:{id:"action.calendarBy.name",defaultMessage:"Calendar by"},timelineByName:{id:"action.timelineBy.name",defaultMessage:"Timeline by"},noDateName:{id:"action.noDate.name",defaultMessage:"No date"},boldName:{id:"action.bold.name",defaultMessage:"Bold"},italicName:{id:"action.italic.name",defaultMessage:"Italic"},strikeThroughName:{id:"action.strikeThrough.name",defaultMessage:"Strike-through"},underlineName:{id:"action.underline.name",defaultMessage:"Underline"},darkModeName:{id:"action.darkMode.name",defaultMessage:"Dark mode"},openAsPageName:{id:"action.openAsPage.name",defaultMessage:"Open as page"},openAllTogglesName:{id:"action.openAllToggles.name",defaultMessage:"Open all toggles"},toggleRecordingInputLatencyName:{id:"action.toggleRecordingInputLatency.name",defaultMessage:"Toggle recording input latency"},suggestedSlashMenuSection:{id:"slashMenu.suggestedSection.title",defaultMessage:"Suggested"},more:{defaultMessage:"See more",id:"slashMenu.more.title"},toggleSidePeekMessage:{defaultMessage:"Toggle side peek",id:"searchModal.Sidepeek.name"},toggleQnAMessage:{defaultMessage:"Toggle QnA",id:"action.toggleQnA.name"}});function xe(e){return"key"in e}function Fe(e){return"clipboardData"in e}const Ze=[G.J5S,G.ffD(G.OPg),G.FSO];function _e(e){return(0,H.cs)({...e,validators:Ze,closeParentMenu:!0,action:t=>{let{environment:a,blocks:n}=t;B.createAndCommit({userAction:"actionRegistry.createAnnotationAction",environment:a,perform:t=>{Z.Du({environment:a,blocks:n,annotation:e.annotation,transaction:t})}})}})}const qe=(0,H.cs)({key:"quick find",displayName:Ee.quickFindName,analyticsName:Ee.quickFindName.defaultMessage,validators:[G.lvA],shortcuts:["quickFind"],closeParentMenu:!0,action:e=>{let{environment:t}=e;E.Kf({environment:t,analyticsFrom:"keyboard-shortcut"})}}),Be=(0,H.cs)({key:"toggle side peek",displayName:Ee.toggleSidePeekMessage,analyticsName:Ee.toggleSidePeekMessage.defaultMessage,validators:[G.ATo,G.FOc,G.QLY("search_toggle_side_peek")],closeParentMenu:!0,shortcuts:["toggleSidebar"],action:()=>E.bn()}),Ke=(0,H.cs)({key:"quick find (alternative)",displayName:Ee.quickFindName,analyticsName:Ee.quickFindName.defaultMessage,validators:[G.or([G.lvA,G.MpE]),G.ffD(G.xDy([G.DaG,G.KLp]))],shortcuts:["openLinkMenuOrOpenSearch"],closeParentMenu:!0,action:e=>{let{environment:t}=e;E.Kf({environment:t,analyticsFrom:"keyboard-shortcut-command-k"})}}),Ge=(0,H.cs)({key:"toggle all updates",displayName:void 0,analyticsName:"toggleAllUpdates",validators:[G.jlf],shortcuts:["toggleAllUpdates"],closeParentMenu:!0,action:e=>{if((0,Y.H7)(e.environment))return void U.w1(e.environment);const t=!me.Z.state.open;me.Z.setState({open:t}),t?v.GP({environment:e.environment,forceRestartSession:!0,from:"keyboard-shortcut"}):v.nI(e.environment)}}),Ve=(0,H.cs)({key:"toggle all teams",displayName:void 0,analyticsName:"toggleAllTeams",validators:[G.jlf,j.bq],shortcuts:["toggleAllTeams"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return ue.tn(t,{from:"sidebar_browse_team_item"})}}),ze=(0,H.cs)({key:"open share menu",displayName:void 0,analyticsName:"openShareMenu",validators:[G.jlf],shortcuts:["openShareMenu"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return ee.lG(t)}}),Qe=(0,H.cs)({key:"undo",displayName:H.RE.undoName,analyticsName:H.RE.undoName.defaultMessage,svg:m.s,validators:[G.jlf,G.ffD(G.tqC),G.ffD(G.P99(r.Ti.externalObjectInstancePage)),G.ffD(G.Q_M),G.ffD(G.uY7)],shortcuts:["undo"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return C.Yw(t)}}),je=(0,H.cs)({key:"redo",displayName:H.RE.redoName,analyticsName:H.RE.redoName.defaultMessage,svg:d.N,validators:[],shortcuts:["redo"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return C.KX(t)}}),Je=(0,H.cs)({key:"up",analyticsName:"Up",displayName:void 0,validators:[],shortcuts:["up"],closeParentMenu:!0,action:(e,t)=>{let{environment:a}=e;if(t&&xe(t))return t.metaKey||t.ctrlKey?M.w5(a):void M.zJ({environment:a,shiftKey:Boolean(t&&t.shiftKey),altKey:Boolean(t&&t.altKey)})}}),Ye=(0,H.cs)({key:"left",analyticsName:"Left",displayName:void 0,validators:[],shortcuts:["left"],closeParentMenu:!0,action:(e,t)=>{let{environment:a}=e;t&&xe(t)&&M.e2(a)}}),He=(0,H.cs)({key:"down",analyticsName:"Down",displayName:void 0,validators:[],shortcuts:["down"],closeParentMenu:!0,action:(e,t)=>{let{environment:a}=e;if(t&&xe(t))return t.metaKey||t.ctrlKey?M.hn(a):void M.DI({environment:a,shiftKey:Boolean(t&&t.shiftKey),altKey:Boolean(t&&t.altKey)})}}),We=(0,H.cs)({key:"right",analyticsName:"Right",displayName:void 0,validators:[],shortcuts:["right"],closeParentMenu:!0,action:e=>{let{environment:t}=e;M.FC(t)}}),Xe=(0,H.cs)({key:"context menu",analyticsName:"Context menu",displayName:void 0,validators:[G.KHO,G.ffD(G.OPg)],shortcuts:["commandSlash"],closeParentMenu:!0,action:e=>{let{environment:t}=e;const{stores:a}=f.default.state;h.$Z({environment:t,stores:a,actionSectionGroupKey:"default",analyticsFrom:"command_slash_menu"})}}),$e=(0,H.cs)({key:"indent",analyticsName:"Indent",displayName:void 0,validators:[G.J5S,G.ffD(G.OPg),G.Eok,G.ffD(G.AKv)],shortcuts:["tab"],closeParentMenu:!0,action:e=>{let{environment:t}=e;B.createAndCommit({userAction:"actionRegistry.indent",environment:t,perform:e=>{!function(e){const t=f.default.state.stores;if(t.length>0){const a=N.WY({environment:e.environment,blocks:t,transaction:e.transaction});a&&M.Z5({environment:e.environment,stores:a})}}({environment:t,transaction:e})}})}}),et=(0,H.cs)({key:"subitemIndent",analyticsName:"Toggle By Indent",displayName:void 0,validators:[G.J5S,G.ffD(G.OPg),G.Eok,G.AKv,G.y9X,G.v_H],shortcuts:["tab"],closeParentMenu:!0,action:e=>{let{blocks:t,environment:a}=e;B.createAndCommit({userAction:"actionRegistry.subitemIndent",environment:a,perform:e=>{S.wA({environment:a,transaction:e,blocks:t,action:"indentSelfAndSubtree"})}})}}),tt=(0,H.cs)({key:"unindent",analyticsName:"Unindent",displayName:void 0,validators:[G.J5S,G.ffD(G.OPg),G.Eok,G.ffD(G.AKv)],shortcuts:["untab"],closeParentMenu:!0,action:e=>{let{environment:t}=e;B.createAndCommit({userAction:"actionRegistry.unindent",environment:t,perform:e=>{!function(e){const t=f.default.state.stores;if(t.length>0){const a=N.rB({environment:e.environment,blocks:t,transaction:e.transaction});a&&M.Z5({environment:e.environment,stores:a})}}({environment:t,transaction:e})}})}}),at=(0,H.cs)({key:"subitemUnindent",analyticsName:"Toggle By Unindent",displayName:void 0,validators:[G.J5S,G.ffD(G.OPg),G.Eok,G.AKv,G.y9X,G.v_H],shortcuts:["untab"],closeParentMenu:!0,action:e=>{let{blocks:t,environment:a}=e;B.createAndCommit({userAction:"actionRegistry.subitemUnindent",environment:a,perform:e=>{S.wA({environment:a,transaction:e,blocks:t,action:"unindentSelf"})}})}}),nt=(0,H.cs)({key:"escape",analyticsName:"Escape",displayName:void 0,validators:[G.ffD(G.lPL)],shortcuts:["esc"],closeParentMenu:!0,action:e=>{let{environment:t}=e;P.cQ(t),M.ZH(t),I.jG(t)}}),st=(0,H.cs)({key:"escape",analyticsName:"Quick Search Escape",displayName:void 0,validators:[G.lPL],shortcuts:["esc"],closeParentMenu:!0,action:()=>{de.ZP.state.query.text.length>0?de.ZP.updateQueryText(""):A.closeQuickSearch()}}),ot=(0,H.cs)({key:"select all",analyticsName:"Select all",displayName:void 0,validators:[],shortcuts:["selectAll"],closeParentMenu:!0,action:e=>{let{environment:t}=e;M.td(t)}}),it=(0,H.cs)({key:"cut",analyticsName:"Cut",displayName:void 0,validators:[G.J5S,G.ffD(G.OPg),G.ryx],shortcuts:["cut"],closeParentMenu:!0,action:(e,t)=>{let{environment:a,lazyDependencies:{markdownLinkifyIt:n}}=e;t&&Fe(t)&&b.by({environment:a,event:t,markdownLinkifyIt:n})}}),rt=(0,H.cs)({key:"copy",analyticsName:"Copy",displayName:void 0,validators:[],shortcuts:["copy"],closeParentMenu:!0,action:(e,t)=>{let{environment:a,lazyDependencies:{markdownLinkifyIt:n}}=e;t&&Fe(t)&&b.JG({environment:a,event:t,markdownLinkifyIt:n})}}),lt=(0,H.cs)({key:"zoom in",displayName:Ee.zoomInName,analyticsName:Ee.zoomInName.defaultMessage,validators:[G.daU,G.ffD(G.ar_)],shortcuts:["zoomIn"],closeParentMenu:!0,action:()=>{A.zoomIn()}}),ct=(0,H.cs)({key:"zoom out",displayName:Ee.zoomOutName,analyticsName:Ee.zoomOutName.defaultMessage,validators:[G.daU,G.ffD(G.ar_)],shortcuts:["zoomOut"],closeParentMenu:!0,action:()=>{A.zoomOut()}}),dt=(0,H.cs)({key:"zoom reset",displayName:Ee.resetZoomName,analyticsName:Ee.resetZoomName.defaultMessage,validators:[G.daU,G.ffD(G.ar_)],shortcuts:["zoomReset"],closeParentMenu:!0,action:()=>{A.zoomReset()}});function mt(){const{mainEditorCurrentBlockStore:e}=oe.default.state;return ce.default.state.open&&ce.default.state.target||e}const ut=(0,H.cs)({key:"copy link to current page",displayName:H.RE.copyLinkNavigableTypeName,analyticsName:H.RE.copyLinkNavigableTypeName.defaultMessage,svg:c.N,validators:[G.daU,G.ffD(G.uY7)],shortcuts:["copyLinkToCurrentPage"],closeParentMenu:!0,action:(e,t)=>{let{environment:a}=e;const n=mt();n&&b.Hs({environment:a,blocks:[n],event:t})}}),gt=(0,H.cs)({key:"copy linkified page title to current page",displayName:Ee.copyFormattedLinkNavigableTypeName,analyticsName:Ee.copyFormattedLinkNavigableTypeName.defaultMessage,svg:c.N,validators:[],shortcuts:["copyCurrentPageLinkifiedBlockTitle"],closeParentMenu:!0,action:(e,t)=>{let{environment:a}=e;const n=mt();n&&b.VG({environment:a,blocks:[n],event:t})}}),vt=(0,H.cs)({key:"paste",displayName:Ee.pasteName,analyticsName:Ee.pasteName.defaultMessage,validators:[G.J5S,G.ffD(G.OPg),G.ryx,G.jlf],shortcuts:["paste"],closeParentMenu:!0,action:(e,t)=>{let{environment:a,lazyDependencies:{markdownLinkifyIt:n,tinyMceMicrosoftWordPasteFilter:s}}=e;t&&Fe(t)&&B.createAndCommit({userAction:"actionRegistry.paste",environment:a,perform:e=>{b.v({environment:a,event:t,disableEmbedMenu:!0,transaction:e,onPasteFiles:b.AL,markdownLinkifyIt:n,tinyMceMicrosoftWordPasteFilter:s})}})}}),yt=(0,H.cs)({key:"move up",displayName:Ee.moveUpName,analyticsName:Ee.moveUpName.defaultMessage,validators:[G.J5S,G.Eok,G.ffD(G.AKv)],shortcuts:["moveUp"],closeParentMenu:!0,action:e=>{let{environment:t}=e;B.createAndCommit({userAction:"actionRegistry.moveUp",environment:t,perform:e=>{!async function(e){const t=N.A1({transaction:e.transaction,blocks:f.default.state.stores});t&&(M.Z5({environment:e.environment,stores:t}),await p.default.afterNextFlush(),k.Zv())}({environment:t,transaction:e})}})}}),pt=(0,H.cs)({key:"move down",displayName:Ee.moveDownName,analyticsName:Ee.moveDownName.defaultMessage,validators:[G.J5S,G.Eok,G.ffD(G.AKv)],shortcuts:["moveDown"],closeParentMenu:!0,action:e=>{let{environment:t}=e;B.createAndCommit({userAction:"actionRegistry.moveDown",environment:t,perform:e=>{!async function(e){const t=N.vi({transaction:e.transaction,blocks:f.default.state.stores});t&&(M.Z5({environment:e.environment,stores:t}),await p.default.afterNextFlush(),k.Zv())}({environment:t,transaction:e})}})}}),ft=(0,H.cs)({key:"property visibility",displayName:Ee.propertyVisibilityLabel,analyticsName:Ee.propertyVisibilityLabel.defaultMessage,svg:l.B,shortcuts:["togglePropertyVisibility"],validators:[G.J5S,G.ffD(G.YGm)],closeParentMenu:!0,action:e=>{le.Z.setState({...le.Z.state,forceShowProperties:!le.Z.state.forceShowProperties})}}),Nt=(0,H.cs)({key:"enter",displayName:Ee.enterName,analyticsName:Ee.enterName.defaultMessage,validators:[G.J5S,G.ffD(G.OPg)],shortcuts:["enter"],closeParentMenu:!0,action:e=>{let{environment:t,blocks:a}=e;B.createAndCommit({userAction:"actionRegistry.enter",environment:t,perform:e=>{x.mp({blocks:a,transaction:e})}})}}),kt=(0,H.cs)({key:"activate",analyticsName:"Activate",displayName:void 0,validators:[G.J5S,G.nWT],shortcuts:["commandEnter"],closeParentMenu:!0,action:e=>x.QZ(e)}),Mt=(0,H.cs)({key:"open tab",analyticsName:"open tab",displayName:void 0,validators:[G.fy9],shortcuts:["commandEnter"],closeParentMenu:!0,action:e=>x.Ah(e)}),ht=(0,H.cs)({key:"toggle sidebar",analyticsName:"Toggle sidebar",displayName:void 0,validators:[G.ffD(G.ATo)],shortcuts:["toggleSidebar"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return te.setExpand({environment:t,isExpanded:!ne.sidebarExpandedStore.state,from:"action_registry"})}}),bt=(0,H.cs)({key:"toggle favorite",analyticsName:"Toggle favorite",displayName:void 0,validators:[G.jlf,G.ffD(G.tls)],shortcuts:["toggleFavorite"],closeParentMenu:!0,action:e=>{let{environment:t}=e;const{currentSpaceViewStore:a}=oe.default.state,n=mt();if(!a||!n)return;const s=(0,z.Z)({spaceViewStore:a,pageId:n.id})?te.unbookmarkPage:te.bookmarkPage;B.createAndCommit({userAction:"actionRegistry.toggleFavorite",environment:t,perform:e=>s({spaceViewStore:a,store:n,transaction:e})})}}),St=(0,H.cs)({key:"toggle update sidebar",analyticsName:"Toggle update sidebar",displayName:void 0,validators:[],shortcuts:["toggleUpdateSidebar"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return te.setUpdateExpand({environment:t,isExpanded:!(0,ae.Sx)(t),from:"keyboard_default"})}}),Pt=(0,H.cs)({key:"toggle both sidebars",analyticsName:"Toggle both sidebars",displayName:void 0,validators:[],shortcuts:["toggleBothSidebars"],closeParentMenu:!0,action:e=>{let{environment:t}=e;te.toggleBothSidebars(t)}}),At=(0,H.cs)({key:"open comments tab in update sidebar",analyticsName:"Open comments tab in update sidebar",displayName:void 0,validators:[],shortcuts:["openCommentsTabInUpdateSidebar"],closeParentMenu:!0,action:e=>{let{environment:t}=e;te.setUpdateExpand({environment:t,isExpanded:!0,from:"keyboard_comments"}),te.setUpdateSidebarTab(se.gY.Comments)}}),Dt=(0,H.cs)({key:"open updates tab in update sidebar",analyticsName:"Open updates tab in update sidebar",displayName:void 0,validators:[],shortcuts:["openUpdatesTabInUpdateSidebar"],closeParentMenu:!0,action:e=>{let{environment:t}=e;te.setUpdateExpand({environment:t,isExpanded:!0,from:"keyboard_updates"}),te.setUpdateSidebarTab(se.gY.Updates)}}),wt=(0,H.cs)({key:"open link annotation menu",displayName:Ee.createLinkName,analyticsName:Ee.createLinkName.defaultMessage,validators:[G.DaG,G.KLp,G.U4I,G.ryx,G.ffD(G.tls)],shortcuts:["openLinkMenuOrOpenSearch"],closeParentMenu:!0,action:()=>w.dz({type:"focusOnly",focus:!0})}),Tt=(0,H.cs)({key:"open equation annotation menu",displayName:Ee.createEquationName,analyticsName:Ee.createEquationName.defaultMessage,validators:[G.DaG,G.ffD(G.or([G.Khw,G.T29,G.QYD,G.DUX]))],shortcuts:["openEquationMenu"],closeParentMenu:!0,action:e=>D.qn({environment:e.environment,analyticsFrom:"input_keyboard_shortcut"})}),Ut=(0,H.cs)({key:"exit app",analyticsName:"Exit app",displayName:void 0,validators:[G.ffD(G.NWv),G.DtP],shortcuts:["backbutton"],closeParentMenu:!0,action:e=>{let{environment:t}=e;if(t.mobileNative)if((0,Q.__)(t)){const{TabbedRouterStore:e}=t;"home"!==e.state.activeTab?R.S({environment:t,tab:"home",navigationAction:"pop",navigationSource:"mobile-back-navigation"}):t.mobileNative.exitApp()}else t.mobileNative.exitApp()}}),It=(0,H.cs)({key:"command left",analyticsName:"Go back",displayName:void 0,validators:[G.NWv,G.ffD(G.DaG)],shortcuts:["commandLeft"],closeParentMenu:!0,action:(e,t)=>O.op(e.environment)}),Ct=(0,H.cs)({key:"command right",analyticsName:"Go forward",displayName:void 0,validators:[G.vyP,G.ffD(G.DaG)],shortcuts:["commandRight"],closeParentMenu:!0,action:()=>O.eH()}),Lt=(0,H.cs)({key:"go back",analyticsName:"Go back",displayName:void 0,validators:[G.NWv],shortcuts:["goBack","backbutton"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return O.op(t)}}),Ot=(0,H.cs)({key:"go forward",analyticsName:"Go forward",displayName:void 0,validators:[G.vyP],shortcuts:["goForward"],closeParentMenu:!0,action:()=>O.eH()}),Rt=(0,H.cs)({key:"go up",analyticsName:"Go up",displayName:void 0,validators:[()=>O.LU()],shortcuts:["goUp"],closeParentMenu:!0,action:e=>{let{environment:t}=e;return O.up(t)}}),Et=(0,H.cs)({key:"switch spaces pre tabs",analyticsName:"Switch spaces pre tabs",displayName:void 0,validators:[G.daU,G.ffD(G.VcC)],shortcuts:["switchSpacesPreTabs"],closeParentMenu:!0,action:(e,t)=>{let{environment:a}=e;if(!t||!xe(t))return;t.preventDefault();const n=parseInt(s()(t.keyCode)),{currentUserRootStore:o,currentUserSettingsStore:i}=oe.default.state;o&&i&&(F.Yi({environment:a,index:n-1,userRootStore:o,userSettingsStore:i}),y.so(a))}}),xt=(0,H.cs)({key:"switch spaces post tabs",analyticsName:"Switch spaces post tabs",displayName:void 0,validators:[G.daU,G.VcC],shortcuts:["switchSpacesPostTabs"],closeParentMenu:!0,action:(e,t)=>{let{environment:a}=e;if(!t||!xe(t))return;t.preventDefault();const n=parseInt(s()(t.keyCode)),{currentUserRootStore:o,currentUserSettingsStore:i}=oe.default.state;o&&i&&(F.Yi({environment:a,index:n-1,userRootStore:o,userSettingsStore:i}),y.so(a))}}),Ft=(0,H.cs)({key:"open settings",analyticsName:"Open settings",displayName:void 0,validators:[G.daU,G.EDF],shortcuts:["settings"],closeParentMenu:!0,action:e=>{T.r$()}}),Zt=(0,H.cs)({key:"new page",analyticsName:"New page",displayName:void 0,validators:[G.ROK,G.jlf,G.or([G.daU,G.Fxc])],shortcuts:["newPage"],closeParentMenu:!0,action:e=>{let{environment:t}=e;te.quickAddPage({environment:t,from:"cmd_n"})}}),_t=(0,H.cs)({key:"turn into type",displayName:H.RE.turnIntoName,analyticsName:H.RE.turnIntoName.defaultMessage,validators:[G.J5S,G.ffD(G.OPg),G.XQy,G.wFS],shortcuts:["turnIntoType"],closeParentMenu:!0,action:(e,t)=>{let{blocks:a,environment:n}=e;if(!t||!xe(t))return;t.preventDefault();const o=parseInt(s()(t.keyCode)),i=r.PH[o];B.createAndCommit({userAction:"actionRegistry.turnIntoTypeViaKeyboard",environment:n,perform:e=>{K.Cj({environment:n,blocks:a,blockType:i,transaction:e})}})}}),qt=[_e({key:"toggle bold",displayName:Ee.boldName,analyticsName:Ee.boldName.defaultMessage,shortcuts:["toggleBold"],annotation:["b"]}),_e({key:"toggle italics",displayName:Ee.italicName,analyticsName:Ee.italicName.defaultMessage,shortcuts:["toggleItalics"],annotation:["i"]}),_e({key:"toggle strike",displayName:Ee.strikeThroughName,analyticsName:Ee.strikeThroughName.defaultMessage,shortcuts:["toggleStrike"],annotation:["s"]}),_e({key:"toggle underline",displayName:Ee.underlineName,analyticsName:Ee.underlineName.defaultMessage,shortcuts:["toggleUnderline"],annotation:[u.GKr.Underline]})],Bt=(0,H.cs)({key:"toggle dark mode",displayName:Ee.darkModeName,analyticsName:Ee.darkModeName.defaultMessage,validators:[],shortcuts:["toggleDarkMode"],closeParentMenu:!0,action:e=>{let{environment:t}=e;const a="light"===t.ThemeStore.state.mode?"dark":"light";_.Y7(a)}}),Kt=(0,H.cs)({key:"open peek view as page",displayName:Ee.openAsPageName,analyticsName:Ee.openAsPageName.defaultMessage,validators:[G.Txk],shortcuts:["commandEnter"],closeParentMenu:!0,action:e=>{let{environment:t}=e;ce.default.peekTarget.state&&L._c({environment:t,store:ce.default.peekTarget.state,pageVisitSource:i.tY.Expand})}}),Gt=(0,H.cs)({key:"toggle all toggles",displayName:Ee.openAllTogglesName,analyticsName:Ee.openAllTogglesName.defaultMessage,validators:[],shortcuts:["toggleAllToggles"],closeParentMenu:!0,action:e=>{let{environment:t}=e;const a=V.np();a&&q.X_(t,a)}});function Vt(e){return e.actions.filter(Re).map((t=>({...t,searchName:[e.title,t.displayName].filter(Boolean).join(" ")})))}const zt=(0,H.cs)({key:"toggle recording input latency",displayName:Ee.toggleRecordingInputLatencyName,analyticsName:Ee.toggleRecordingInputLatencyName.defaultMessage,validators:[],shortcuts:["toggleRecordingInputLatency"],closeParentMenu:!0,action:()=>{o.toggleRecordingInputLatency()}}),Qt=(0,H.cs)({key:"toggle qna in corner",displayName:Ee.toggleQnAMessage,analyticsName:"toggleQnAPane",validators:[G.lvA,G.ffD(G.DaG),G.ffD(G.KHO),...ye.fF],shortcuts:["commandJ"],closeParentMenu:!0,action:async e=>{let{environment:t}=e;const{assistantMenuStore:a,assistantOriginElementStore:n,assistantAnalyticsActions:s,assistantMenuActions:o}=await J.deps.assistant.loader();if(ie.Z.shouldShowAssistantInCorner(t.device))if(a.state.open){await o.closeAssistantRightHandSideMenu({environment:t}),n.setAssistantLastViewedTime();const e=re.Z.getActiveSession();e&&s.trackQnaClosed(t,{sessionContext:e,from:"button"})}else o.openAssistantRightHandSideMenu({environment:t,from:"shortcut"})}}),jt=[Gt,qe,Ke,Ne.G,...Me.UO.actions,Me.o1,he.d,Nt,kt,Mt,Se.KB,Se.Jw,Le.B,Le.L9,Pe.$,Pe.g,ve.UI,ve.VJ,Qe,je,Ie,Ce,$e,et,at,tt,ot,nt,st,yt,pt,it,rt,vt,Je,Ye,He,We,Qt,Xe,pe.O,fe.H,pe.N,wt,Tt,Ut,Lt,Ot,It,Ct,lt,ct,dt,Rt,be.A,be.Q,Et,xt,ut,gt,_t,Se.Qk,Se.OW,ht,Pt,St,At,Dt,Ft,Zt,Bt,Kt,ft,zt,bt,Ge,Ve,ze,Be,$,ke.g,...qt,...Vt(Oe.g),...Vt(ge.te)]},57345:(e,t,a)=>{a.d(t,{Cv:()=>A,a6:()=>P,lG:()=>S,qg:()=>T,zd:()=>w});a(67294);var n=a(33728),s=a(68626),o=a(72141),i=a(9291),r=a(52629),l=a(7032),c=a(36610),d=a(47307),m=a(13659),u=a(64964),g=a(19306),v=a(26907),y=a(46654),p=a(18245),f=a(88923),N=a(99332),k=a(29677),M=a(66708),h=a(28578),b=a(85893);function S(e){f.default.state.open?N.Z.setState({...N.Z.state,open:!0}):M.Z.setState({...M.Z.state,open:!0}),c.DB(e,{share_menu_session_id:h.ZP.state.sessionId})}function P(e){f.default.state.open?N.Z.setState({...N.Z.state,open:!1}):M.Z.setState({...M.Z.state,open:!1}),c.Rb(e,{share_menu_session_id:h.ZP.state.sessionId}),h.ZP.reset()}function A(e){const{success:t,inviteTargets:a,requestedUserEmails:n}=e;if(0!==a.length){if(!t||0!==(null==n?void 0:n.length))return t&&n.length>0?n.length===a.length?void u.oV({label:(0,b.jsx)(i.FormattedMessage,{id:"shareMenu.inviteSuccess.snackbarMessage.requestedUsersOnly",defaultMessage:"Sent request to invite {users} to this page",values:{users:D(a)}})}):void u.oV({label:(0,b.jsx)(i.FormattedMessage,{id:"shareMenu.inviteSuccess.snackbarMessage.requestedAndInvitedUsers",defaultMessage:"Invited {users} and requested inviting {numberOfRequestedUsers, plural, one {{numberOfRequestedUsers} guest} other {{numberOfRequestedUsers} guests}}",values:{users:D(a.filter((e=>!(0,k.fZ)(e)&&!(0,k.cl)(e)||!n.includes(e.value.email)))),numberOfRequestedUsers:n.length}})}):void u.oV({label:(0,b.jsx)(i.FormattedMessage,{id:"shareMenu.inviteFailure.snackbarMessage",defaultMessage:"Failed to invite {users}",values:{users:D(a)}})});u.oV({label:(0,b.jsx)(i.FormattedMessage,{id:"shareMenu.inviteSuccess.snackbarMessage",defaultMessage:"Successfully invited {users}",values:{users:D(a)}})})}}function D(e){return(0,g.W)(e.map((e=>"group"===e.type?e.value.name??"group":"invalidUser"===e.type?e.value.text:e.value.email)))}async function w(e){const{inviteTargetsStore:t}=e,a=(0,b.jsx)(i.FormattedMessage,{id:"shareMenu.closeInviteDialog.confirmationMessage",defaultMessage:"Your changes have not been saved. Discard changes?"}),n=(0,b.jsx)(i.FormattedMessage,{id:"shareMenu.closeInviteDialog.confirmationButton.label",defaultMessage:"Yes"}),s=(0,b.jsx)(i.FormattedMessage,{id:"shareMenu.closeInviteDialog.cancelButton.label",defaultMessage:"Cancel"});if(t.state.inviteTargets.length>0){return(await d.confirmUserActionV2({message:a,acceptLabel:n,cancelLabel:s})).accept}return!1}async function T(e){const t=p.default.mark("share_menu.invite_user_lag"),{environment:a,blockStore:i,inviteTargetsStore:c,sudoModeStore:d,onInviteClick:u,onInviteComplete:g,inviteOrigin:f,role:N,emailMessage:k,flowId:M}=e;let h={success:!1,requestedUserEmails:[]};try{h=await async function(e){const{environment:t,blockStore:a,sudoModeStore:s,inviteTargetsStore:i,role:r,inviteOrigin:c,emailMessage:d,onInviteStart:u}=e,g=e.flowId||(0,l.ZP)();if(!(0,o.iC)(r))return{success:!1,requestedUserEmails:[]};const{tokenQuery:p,inviteTargets:f}=i.state;if((0,n.oH)(p.trim())&&0===f.length){const e={type:"newUser",value:{email:p.trim()},source:"email"};v.H({target:e,inviteTargetsStore:i})||i.setState({inviteTargets:[...i.state.inviteTargets,e],tokenQuery:""})}const N=await y.mU(a,v.B({inviteTargetsStore:i}));null==u||u();const k=await m.n_({environment:t,store:a,sudoModeStore:s,inviteTargets:N,inviteRole:r,isOnboarding:!1,invite:{inviteFlowId:g,inviteMessage:d,inviteOrigin:c}});return{success:k.success,requestedUserEmails:k.success?Object.keys(k.requestedUsers):[]}}({environment:a,blockStore:i,sudoModeStore:d,inviteTargetsStore:c,role:N,emailMessage:k,inviteOrigin:f,onInviteStart:u,flowId:M})}catch(b){s.log({level:"error",from:"shareMenuActions",type:"handleInviteClick",error:(0,r.Ui)(b)})}finally{null==g||g(h.success,h.requestedUserEmails)}p.default.measure(t,{environment:a})}}}]);