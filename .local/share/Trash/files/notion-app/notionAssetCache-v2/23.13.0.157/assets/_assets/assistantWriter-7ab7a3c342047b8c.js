"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5584,8721],{22974:(e,t,n)=>{n.d(t,{VZ:()=>g,Y7:()=>p,LH:()=>m});var s=n(31701);const o="theme";var a=n(1898),i=n(30021),r=n(4926),l=n(47839);const c=10;function d(e,t){const{device:n,ThemeStore:a}=e,{mode:i,usingSystemTheme:d}=t,p={mode:i};a.setState(p),e.mobileNative&&e.mobileNative.setTheme(i,d),l.setTheme(function(e,t){const n=(0,s.gh)({theme:e});return{mode:e,usingSystemTheme:t,colors:{white:s.ZP.white,blue:s.ZP.blue},borderRadius:4,textColor:n.regularTextColor,popoverBackgroundColor:n.popoverBackground,popoverBoxShadow:n.mediumBoxShadow,inputBoxShadow:n.inputBoxShadow,inputBackgroundColor:n.inputBackground,dividerColor:n.darkDividerColor,shadowOpacity:n.shadowOpacity}}(i,d)),localStorage.setItem(o,JSON.stringify(p)),function(e,t){if(0===e.nativeScrollbarWidth)return;const n=document.getElementById("scroll-properties");n&&(n.innerHTML=`\n\t\t\t::-webkit-scrollbar {\n\t\t\t\twidth: ${c}px;\n\t\t\t\theight: ${c}px;\n\t\t\t}\n\t\t\t::-webkit-scrollbar {\n\t\t\t\tbackground: transparent;\n\t\t\t}\n\t\t\t::-webkit-scrollbar-track {\n\t\t\t\tbackground: ${u.scrollbarTrack[t]};\n\t\t\t}\n\t\t\t::-webkit-scrollbar-thumb {\n\t\t\t\tbackground:${u.scrollbarThumb[t]};\n\t\t\t}\n\t\t\t::-webkit-scrollbar-thumb:hover {\n\t\t\t\tbackground:${u.scrollbarThumbHover[t]};\n\t\t\t}\n\t\t`,r.Z.setState(c))}(n,i),"dark"===i?document.body.classList.add("dark"):document.body.classList.remove("dark")}const u={scrollbarTrack:{light:"#EDECE9",dark:"rgba(202, 204, 206, 0.04)"},scrollbarThumb:{light:"#D3D1CB",dark:"#474c50"},scrollbarThumbHover:{light:"#AEACA6",dark:"rgba(202, 204, 206, 0.3)"}};function p(e){i.Z.setState(e)}function m(e){const t=g(e);switch(t){case"dark":case"light":d(e,{mode:t,usingSystemTheme:!1});break;case"system":!async function(e){const{mobileNative:t}=e;let n="light";n=t&&t.api.getTheme?await t.api.getTheme():e.device.prefersDarkInterface?"dark":"light",d(e,{mode:n,usingSystemTheme:!0})}(e);break;default:(0,a.t1)(t)}}function g(e){const t=i.Z.state||"system";return"dark"===(n=t)||"light"===n||"system"===n?n:"system";var n}},9234:(e,t,n)=>{n.r(t),n.d(t,{AssistantWriterPopup:()=>_e,assistantWriterActions:()=>s});var s={};n.r(s),n.d(s,{acceptCursorCompletionAssistant:()=>C,cancelAssistantCompletion:()=>h,cancelCursorCompletionAssistant:()=>x,moveAssistantWriterToCorner:()=>k,refreshAssistantCompletion:()=>y,triggerAssistantCompletion:()=>S,triggerAssistantSkillCompletion:()=>v});var o=n(1302),a=n(53965),i=n(7032),r=n(1898),l=n(24677),c=n(98104),d=n(95580),u=n(72909),p=n(507),m=n(98180),g=n(16772),f=n(27724);async function v(e){const{environment:t,context:n,clientSkill:s,skillSettings:a,updater:i,sessionId:r,from:d}=e;"textSelection"===n.type&&i((()=>{c.ZH(t),l.ZH(t)}));const u={type:"assistantCompletionPopup",stage:"results",loading:!0,sessionId:r,context:n,from:d,hasErrored:!1,clientSkill:s,skillSettings:a};i((()=>{g.default.setState(u)})),await o.default.afterNextFlush(),await y({...e,updater:i})}async function y(e){var t;const{environment:n,updater:s,humanText:o}=e,l=g.default.state;if("assistantCompletionPopup"!==l.type||"results"!==l.stage)return;const{clientSkill:c,skillSettings:u}=l,p=l.sessionId;m.Z.getSessionContext(p)||await d.resetAndInitializeAssistantSession({environment:n,completionContext:l.context,clientSkill:c,skillSettings:u,sessionId:p,makeActiveSession:!1}),(0,r.$K)(o)?await d.commitHumanStep({environment:n,text:o,sessionId:p}):null!==(t=l.clientSkill)&&void 0!==t&&null!==(t=t.inAppSkillTrigger)&&void 0!==t&&t.requiresInput||await d.sampleNextAssistantSteps({environment:n,sessionId:p,inferenceId:(0,i.ZP)()}),await s((()=>{const e=g.default.state;if("assistantCompletionPopup"!==e.type||"results"!==e.stage)return;const t=a.Z$(f.default.state.stores);g.default.setState({...e,context:{...e.context,origin:t||e.context.origin},loading:!1})}))}function h(e){const{environment:t,completionState:n}=e;d.clearActiveAssistantSession({environment:t,sessionId:n.sessionId})}async function C(e){const{environment:t,selectInsertion:n,exitType:s}=e,o=g.default.state;if("assistantCompletionPopup"!==o.type)return;const a=o.sessionId;g.default.invalidateLastUpdater(),g.default.resetStore(e),await d.commitPreviewAssistantStep({environment:t,sessionId:a}),await d.applyUncommittedOperations({environment:t,sessionId:a,operationContext:(0,p.TO)()}),d.clearActiveAssistantSession({environment:t,sessionId:a})}function x(e){const{environment:t}=e,n=g.default.state;if("assistantCompletionPopup"!==n.type)return;const s=n.sessionId;g.default.invalidateLastUpdater(),g.default.resetStore(e),d.clearActiveAssistantSession({environment:t,sessionId:s})}function S(e){const{environment:t,context:n,prompt:s,additionalContext:o,updater:a,sessionId:i,from:r}=e;"textSelection"===n.type&&a((()=>{c.ZH(t),l.ZH(t)}));const d={type:"assistantCompletionPopup",stage:"initialPrompt",sessionId:i,context:n,from:r,loading:!1,hasErrored:!1};a((()=>{g.default.setState(d)}))}function k(e){const{environment:t}=e,n=g.default.state;"assistantCompletionPopup"===n.type&&(g.default.invalidateLastUpdater(),g.default.resetStore(e),u.openAssistantRightHandSideMenu({environment:t,makeActiveSessionId:n.sessionId,from:"assistant_writer"}))}var w=n(67294),b=n(480),I=n(86628),A=n(24405),T=n(41892),M=n(70203),P=n(9291),V=n(56863),j=n(92022),Z=n(57819),N=n(83982),E=n(47869),L=n(73435),K=n(38570),D=n(53084),_=n(48019),B=n(3386),H=n(78140),R=n(43250),$=n(68657),O=n(60709),W=n(21273),q=n(29798),U=n(19541),J=n(78141),F=n(55690),z=n(85893);function G(e){const{loadingState:t}=e,n=(0,A.yK)((()=>({wrap:{minHeight:36,paddingLeft:8,paddingRight:8,marginTop:3,marginBottom:3}})),[]);return(0,z.jsx)("div",{style:n.wrap,children:(0,z.jsx)(F.O,{loadingState:t})})}n(67635);var Q=n(84969),Y=n(54615),X=n(84952),ee=n(54402),te=n(17826),ne=n(74003),se=n(95330),oe=n(56348),ae=n(44500),ie=n(67973),re=n(57254),le=n(19124),ce=n(80444);const de={type:"chat"};function ue(e){const t=(0,P.useIntl)(),n=(0,b.Fy)(),s=(0,I.VK)((()=>ce.default.state.currentSpaceStore),[]),o=(0,I.VK)((()=>(0,J.J)()),[]),a=(0,I.VK)((()=>(0,le.lV)()),[]),i=(0,I.VK)((()=>(0,le.Gw)()),[]),r=(0,I.VK)((()=>null==o?void 0:o.sessionId),[o]),l=(0,I.VK)((()=>{if(!o)return;const e=o.temporaryClientSteps.findLast((e=>"assistantChat"===e.type));return e&&!(0,re.S)(e)?e:void 0}),[o],{useDeepEqual:!0}),c=(0,I.VK)((()=>o&&o.selectedSkill&&0===o.clientSteps.length&&ae.skillDefaultAssistantMessageMap[o.selectedSkill.skillType]),[o]),d=(0,I.VK)((()=>null==o?void 0:o.sessionId),[o]),u=(0,I.VK)((()=>(0,oe.em)()),[]),p=(0,I.VK)((()=>{if(!o||!u)return;return o.getCombinedSteps().filter((e=>"labelerModeTurnIndicator"===e.type))}),[u,o],{useDeepEqual:!0});(0,w.useEffect)((()=>{const e=m.Z.state.activeAiSessionId;return!d||e&&d===e||m.Z.setActiveSessionId(d),()=>{e&&m.Z.setActiveSessionId(e)}}),[d]);const f=(0,I.VK)((()=>g.default.state),[]),v=(0,I.VK)((()=>{if(!o||"assistantCompletionPopup"===f.type&&f.loading)return;const e=o.previewingStepObservations.some((e=>"observation"===e.type&&"error"===e.observationType)),n=t.formatMessage({id:"AssistantWriterPopupRenderer.error",defaultMessage:"I’m sorry, I’m having trouble completing this request. Please click “try again” or type a new command."});return e?n:null}),[f,t,o]),y=(0,I.qz)(void 0,ie.d),h=(0,A.yK)((e=>({messageWrap:{fontSize:n.isMobile?15:14,borderRadius:16,margin:"12px 10px 0 10px"},error:{fontSize:14,color:e.errorText,padding:8}})),[n]),C=(0,w.useRef)(null);if(!s)return null;const x=(0,z.jsxs)(z.Fragment,{children:[u&&(0,z.jsx)(Y.G,{}),(a||i)&&o&&(0,z.jsx)(te.Z,{sessionContext:o}),c&&(0,z.jsx)("div",{style:h.messageWrap,children:t.formatMessage(c)}),l&&(0,z.jsx)("div",{style:h.messageWrap,ref:C,children:(0,z.jsx)(Q.m,{clientStep:l,parentStore:s,isLatestStep:!0,priorSearchResultsStep:void 0,citationHoverStore:y,disableWrap:!0,sessionId:d,wrapperRef:C})}),r&&p&&p.length>0&&(0,z.jsx)(z.Fragment,{children:p.map(((e,t)=>(0,z.jsx)(se.Z,{clientStep:e,sessionId:r},t)))}),v?(0,z.jsx)("div",{style:h.error,children:v}):null,a&&o&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(X.y,{renderState:de,sessionContext:o}),(0,z.jsx)(ee.Z,{sessionContext:o})]})]});return(0,z.jsx)(ne.p,{origin:x})}n(21703);var pe=n(87205),me=n(89598),ge=n(41154),fe=n(30579),ve=n(88607),ye=n(13148),he=n(32240),Ce=n(47453),xe=n(98519),Se=n(55863),ke=n(31701),we=n(36154),be=n(46564),Ie=n(62967),Ae=n(993),Te=n(13447),Me=n(88202),Pe=n(72495),Ve=n(68204);const je=(0,P.defineMessages)({moveToCorner:{id:"getAssistantActionSections.moveToCorner",defaultMessage:"Move chat to corner"}}),Ze="This string should never show up in analytics";function Ne(e){const{filter:t,mockTextStore:n,state:s,from:o,context:i,intl:l,completionResultInfo:c}=e;let d;"initialPrompt"===s.stage?d=function(e){const{intl:t,from:n,type:s,mockTextStore:o}=e,i=(0,ae.getFilteredClientSkills)({showCustomSkills:!1,hasCurrentPage:!0}),r="blockSelection"===s||"textSelection"===s?ae.writerSelectionSections:ae.writerCursorSections;return a.oA(r.map((e=>{const s=a.oA(e.skills.map((e=>i.find((t=>t.skillType===e)))));if(0===s.length)return;const r=(0,Ie.$J)({key:e.key,title:e.title,render:e=>(0,z.jsx)(Pe.Z,{...e}),actions:s.map((e=>"translate"===e.skillType?function(e){const{clientSkill:t,intl:n,from:s}=e;if("translate"!==t.skillType)throw new Error("Expected translate skill");const o=pe.nI.map((e=>{let{key:o,name:a}=e;return(0,Ie.cN)({key:`assistant.translate.${o}`,analyticsName:`Assistant - translate - ${o}`,displayName:a,validators:[],closeParentMenu:!1,right:(0,be.cx)("submitPrompt"),action:async e=>{let{environment:a}=e;const i=g.default.state;i&&"assistantCompletionPopup"===i.type&&"initialPrompt"===i.stage&&await v({environment:a,context:i.context,clientSkill:t,skillSettings:{language:o},intl:n,updater:g.default.createUpdater(),sessionId:(0,ge.Oy)(),from:s})}})})),a=(0,Ie.$J)({key:"translate language actions",render:e=>(0,z.jsx)(Pe.Z,{...e}),actions:o}),i=()=>(0,z.jsx)(be.lA,{svg:Ee(ve.Q)});return(0,Ie.MV)({key:"translate",displayName:ae.skillMessages.translate,analyticsName:`Assistant - ${t.skillType}`,validators:[],svg:i,subActions:()=>[a]})}({clientSkill:e,intl:t,from:n}):"change_tone"===e.skillType?function(e){const{clientSkill:t,intl:n,from:s}=e;if("change_tone"!==t.skillType)throw new Error("Expected change_tone skill");const o=pe.vK.map((e=>{let{key:o,name:a}=e;return(0,Ie.cN)({key:`assistant.changeTone.${o}`,analyticsName:`Assistant - changeTone - ${o}`,displayName:a,validators:[],closeParentMenu:!1,right:(0,be.cx)("submitPrompt"),action:async e=>{let{environment:a}=e;const i=g.default.state;i&&"assistantCompletionPopup"===i.type&&"initialPrompt"===i.stage&&await v({environment:a,context:i.context,clientSkill:t,skillSettings:{tone:o},intl:n,updater:g.default.createUpdater(),sessionId:(0,ge.Oy)(),from:s})}})})),a=(0,Ie.$J)({key:"changeTone actions",render:e=>(0,z.jsx)(Pe.Z,{...e}),actions:o}),i=()=>(0,z.jsx)(be.lA,{svg:Ee(fe.p)});return(0,Ie.MV)({key:"changeTone",displayName:ae.skillMessages.changeTone,analyticsName:`Assistant - ${t.skillType}`,validators:[],svg:i,subActions:()=>[a]})}({clientSkill:e,intl:t,from:n}):(0,Ie.cN)({key:e.skillType,analyticsName:`Completions - ${e.skillType}`,displayName:ae.skillNameMap[e.skillType],validators:[],closeParentMenu:!1,svg:Ee(ae.skillIconMap[e.skillType]),right:(0,be.cx)("submitPrompt"),action:async s=>{let{environment:a}=s;const i=g.default.state;i&&"assistantCompletionPopup"===i.type&&"initialPrompt"===i.stage&&(await v({environment:a,context:i.context,clientSkill:e,skillSettings:{},intl:t,updater:g.default.createUpdater(),sessionId:(0,ge.Oy)(),from:n}),Te.createAndCommit({userAction:"AssistantWriterActions.skillTriggeredInputCleared",environment:a,perform:e=>{Ae.sO({environment:a,editorMode:"default",store:o,value:void 0,transaction:e})}}))}})))});return r})))}({intl:l,from:o,context:i,type:s.context.type,mockTextStore:n}):"results"===s.stage?d=s.loading?[]:function(e){const t=xe.k,n=(0,J.J)();if(!n)return[];const s=n.sampledSteps.length>0,o=n.getAllPendingOperations().length>0,i=n.temporaryClientSteps.findLast(me.qT),r=i?{key:"insert",analyticsName:Ze,displayName:Me.ow.insert,validators:[],closeParentMenu:!0,svg:Ce.R,action(){e.onInsert({chatStep:i})}}:void 0,l={key:"moveToCorner",analyticsName:Ze,displayName:je.moveToCorner,validators:[],closeParentMenu:!1,svg:he.y,action(){e.onMoveToCorner()}};return s?o?[(0,Ie.$J)({key:"main",render:e=>(0,z.jsx)(Pe.Z,{...e}),actions:a.oA([(0,Ie.cN)({key:"keep",analyticsName:Ze,displayName:Me.ow.accept,validators:[],closeParentMenu:!0,svg:t,action(){e.onAccept({exitType:"accept"})}}),(0,Ie.cN)({key:"tryAgain",analyticsName:Ze,displayName:Me.ow.tryAgain,validators:[],closeParentMenu:!1,svg:Se.s,action(){e.onRetry()}}),(0,Ie.cs)({key:"close",analyticsName:Ze,displayName:Me.ow.delete,validators:[],closeParentMenu:!0,svg:ye.U,shortcuts:["esc"],action(t,n){if(n&&(0,we.vd)(n)&&"Escape"===n.key)return e.onCancel({showDiscardModal:!0});e.onCancel({showDiscardModal:!1})}})])}),(0,Ie.$J)({key:"move_to_corner",render:e=>(0,z.jsx)(Pe.Z,{...e}),actions:[(0,Ie.cN)(l)]})]:[(0,Ie.$J)({key:"main",render:e=>(0,z.jsx)(Pe.Z,{...e}),actions:a.oA([r?(0,Ie.cN)(r):void 0,(0,Ie.cN)({key:"tryAgain",analyticsName:Ze,displayName:Me.ow.tryAgain,validators:[],closeParentMenu:!1,svg:Se.s,action(){e.onRetry()}}),(0,Ie.cs)({key:"close",analyticsName:Ze,displayName:Me.ow.close,validators:[],closeParentMenu:!0,svg:ye.U,shortcuts:["esc"],action(){e.onCancel({showDiscardModal:!0})}})])}),(0,Ie.$J)({key:"move_to_corner",render:e=>(0,z.jsx)(Pe.Z,{...e}),actions:[(0,Ie.cN)(l)]})]:[]}({...c}):(0,r.t1)(s.stage);return(0,Ve.sG)({sections:d,context:i,query:t})}function Ee(e){return function(){return(0,z.jsx)(be.lA,{svg:e,svgFill:ke.FN.light.purple[400]})}}var Le=n(10910);const Ke="notion-assistant-writer-ui",De=(0,P.defineMessages)({writeInputPlaceholder:{defaultMessage:"Ask or edit text…",id:"AssistantWriterPopup.writeInputPlaceholder"}});function _e(e){const{completionState:t}=e,n=(0,I.VK)((()=>W.Z.showAtMentionMenu()),[]),s=(0,I.VK)((()=>(0,J.J)()),[]),o=(0,I.VK)((()=>null==s?void 0:s.assistantConfigurationStore),[null==s?void 0:s.assistantConfigurationStore]),a=(0,I.VK)((()=>null==s?void 0:s.groupedPendingOperations.state),[s]);(0,L.pb)({groupedPendingOperations:a,assistantConfigurationStore:o}),(0,w.useEffect)((()=>{V.w()}),[]);const i=(0,b.O7)(),r=(0,P.useIntl)(),l=(0,I.VK)((()=>i.device.isMobile),[i]),p=(0,A.yK)((e=>({wrap:{display:"flex",borderRadius:22,background:e.popoverBackground,boxShadow:e.mediumBoxShadow,overflow:"hidden",isolation:"isolate",flexDirection:"column",gap:4,paddingTop:2,paddingBottom:2},inputWrap:{width:"100%",minHeight:l?50:42,padding:0,display:"flex",alignItems:"center",gap:8,fontSize:l?16:14},inputOverrides:{marginLeft:0,marginRight:0,boxShadow:"unset",borderRadius:0,padding:l?"0 16px 0 16px":"0 8px 0 8px"},faceImgWrap:{width:24,height:24,borderRadius:"100%",background:"white",boxShadow:e.largeLightBoxShadow,overflow:"hidden"},faceImg:{width:24,pointerEvents:"none"},chatWrap:{padding:8,fontSize:l?15:14},menuPopup:{marginTop:4,marginBottom:4,borderRadius:6,background:e.popoverBackground,boxShadow:e.mediumBoxShadow,width:l?"100%":320,overflow:"hidden",isolation:"isolate"}})),[l]),m=(0,I.VK)((()=>{const e=null==o?void 0:o.state;return Boolean((null==e?void 0:e.sampling)||(null==e?void 0:e.evaluating))}),[o]),{store:f}=(0,$.Cl)({initialValue:void 0}),v=(0,I.VK)((()=>f.getValue()),[f]),S=(0,I.VK)((()=>(0,M.Jcv)(v)),[v]),_=(0,w.useCallback)((async e=>{const{showDiscardModal:n}=e;(!n||await(0,u.canDismissAssistantBasedOnEdits)({environment:i,humanInput:v,isWriter:!0}))&&((0,Z.Tq)(i),(0,j.closeInitialPromptAndEndSession)(),"results"===t.stage&&h({environment:i,completionState:t}))}),[i,t,v]),H=(0,w.useCallback)((()=>{k({environment:i})}),[i]),O=(0,w.useCallback)((async e=>{e&&(g.default.setState({...t,stage:"results"}),await y({environment:i,updater:g.default.createUpdater(),humanText:e}))}),[t,i]);(0,w.useEffect)((()=>{m||c.N_({store:f})}),[i,f,m]);const U=(0,w.useMemo)((()=>({environment:i,blocks:[],publicEditMode:void 0})),[i]);(0,I.VK)((()=>{m!==t.loading&&g.default.setState({...t,loading:m})}),[m,t]),(0,I.VK)((()=>{s&&(0,J.g)(s.getAllPendingExecutableOperations())&&k({environment:i})}),[i,s]);const F=function(e){const{environment:t,sessionId:n}=e,s=(0,w.useCallback)((async e=>{let{exitType:s,selectInsertion:o}=e;const a=g.default.state;"assistantCompletionPopup"!==a.type||"results"!==a.stage||a.loading||(Le.HC(t,{session_id:n,inference_id:void 0,exit_type:s}),await C({environment:t,selectInsertion:o,exitType:s}))}),[t,n]),o=(0,w.useCallback)((e=>{const s=g.default.state;"assistantCompletionPopup"!==s.type||"results"!==s.stage||s.loading||((0,Z.Tq)(t),Le.HC(t,{session_id:n,inference_id:void 0,exit_type:"insert"}),Te.createAndCommit({userAction:"CompletionPopup.handleInsert",environment:t,perform:n=>{const o=s.sessionId;d.insertAssistantChatBelowSelection({environment:t,sessionId:o,transaction:n,chatStep:e.chatStep})}}),x({environment:t}))}),[t,n]),a=(0,w.useCallback)((()=>{console.warn("onReplace not implemented for assistant writer!")}),[]);return(0,w.useMemo)((()=>({onAccept:s,onInsert:o,onReplace:a})),[s,o,a])}({environment:i,sessionId:t.sessionId}),Q=(0,D.f)(s),Y=(0,w.useCallback)((async()=>{await N.f6({environment:i,sessionId:t.sessionId})}),[t,i]),X=(0,I.VK)((()=>Ne({intl:r,filter:S,mockTextStore:f,state:t,from:t.from,context:U,completionResultInfo:{...F,onRetry:Y,onCancel:()=>_({showDiscardModal:!1}),onMoveToCorner:H}})),[U,F,t,Y,_,H,S,r,f]),ee=X.length>0,te=(0,I.qz)(void 0,q.Z);let ne;return ee&&(ne=(0,z.jsx)("div",{style:p.menuPopup,className:Ke,children:(0,z.jsx)(Be,{sections:X,context:U,menuListStore:te})})),(0,w.useEffect)((()=>{function e(e){var t;(t=e.target)instanceof Element&&(t.closest(`.${Ke}`)||t.closest(`.${R.YPt}`))||("click"!==e.type&&"contextmenu"!==e.type||_({showDiscardModal:!0}))}return window.addEventListener("click",e,!0),window.addEventListener("contextmenu",e,!0),()=>{window.removeEventListener("click",e,!0),window.removeEventListener("contextmenu",e,!0)}}),[_]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(B.Z,{capture:!0,onEsc:_,debugName:"AssistantWriterPopup"}),(0,z.jsxs)(K.JU,{surface:K.FP.writer,children:[(0,z.jsxs)("div",{style:p.wrap,className:Ke,children:[(0,z.jsx)(ue,{}),Q?(0,z.jsx)(G,{loadingState:Q}):(0,z.jsx)("div",{style:p.inputWrap,children:(0,z.jsx)(E.H,{showAtMentionMenu:n,store:f,placeholder:r.formatMessage(De.writeInputPlaceholder),onSubmit:O,onEsc:()=>_({showDiscardModal:!0}),onBackspaceOnEmptyInput:()=>_({showDiscardModal:!0}),textInputOverrideStyles:p.inputOverrides,textContainerOverrideStyles:{padding:"8px 0 8px 4px"},suppressFocusable:!0,leftIcon:(0,z.jsx)("div",{style:p.faceImgWrap,children:(0,z.jsx)("img",{style:p.faceImg,src:T.Z.images.assistantStaticFacePng})})})})]}),ne]})]})}function Be(e){const{sections:t,context:n,menuListStore:s}=e,o=(0,b.O7)(),a=(0,I.VK)((()=>o.device.isPhone),[o]),i=(0,I.VK)((()=>U.Z.state.open),[]);return(0,z.jsx)(H.Z,{menuType:a?O.og.ActionSheet:O.og.Popup,width:"100%",maxHeight:a?"min(17vh, 160px)":"min(40vh, 320px)",maxWidth:"100%",children:(0,z.jsx)(_.Z,{keyboardPriority:1,disableKeyboard:i,menuListStore:s,sections:t,initialFocus:0,context:n})})}},11335:(e,t,n)=>{n.d(t,{Z:()=>m});n(67294);var s=n(86628),o=n(24405),a=n(80951),i=n(19255),r=n(32566),l=n(21202),c=n(1898),d=n(6258),u=n(14200),p=n(85893);function m(e){const t=e.propertySchema.type;switch(t){case"title":case"text":return(0,p.jsx)(g,{...e});case"relation":return(0,p.jsx)(f,{propertySchema:e.propertySchema,beforeValue:e.beforeValue,afterValue:e.afterValue,rootStore:e.rootStore});case"checkbox":case"number":case"person":case"file":case"url":case"email":case"phone_number":case"created_time":case"created_by":case"last_edited_time":case"last_edited_by":case"last_visited_time":case"formula":case"rollup":case"select":case"multi_select":case"date":case"button":case"status":case"auto_increment_id":case"location":case"verification":return(0,p.jsx)(v,{...e});default:(0,c.t1)(t)}}function g(e){const t={value:i.Mg({before:e.beforeValue.value,after:e.afterValue.value}),spaceId:e.beforeValue.spaceId};return(0,p.jsx)(u.Z,{value:t,propertySchema:e.propertySchema,rootStore:e.rootStore})}function f(e){const{beforeValue:t,afterValue:n,propertySchema:o,rootStore:i}=e,r=(0,s.VK)((()=>a.NT({beforeValue:t.value,afterValue:n.value,propertySchema:o,getRecordModel:i.getRecordModel,getBlockTitle:e=>d.G.createChildStore(i,{table:l.iU,id:e.id}).getPropertyValue("title")})),[t,n,o,i]);return(0,p.jsx)(u.Z,{value:{value:r,spaceId:t.spaceId},propertySchema:{type:"title",name:"Title"},rootStore:i})}function v(e){const t=(0,o.yK)((()=>({arrowDiffWrap:{display:"inline-flex",alignItems:"center"}})),[]);return(0,p.jsxs)("div",{style:t.arrowDiffWrap,children:[(0,p.jsx)(u.Z,{value:e.beforeValue,propertySchema:e.propertySchema,rootStore:e.rootStore}),(0,p.jsx)(y,{}),(0,p.jsx)(u.Z,{value:e.afterValue,propertySchema:e.propertySchema,rootStore:e.rootStore})]})}function y(){const e=(0,o.yK)((e=>({container:{padding:"0px 8px"},icon:{width:15,height:15,fill:e.mediumIconColor}})),[]);return(0,p.jsx)("div",{style:e.container,children:(0,r.k)(e.icon)})}},19255:(e,t,n)=>{n.d(t,{Mg:()=>p});n(30541),n(57658),n(21703);var s=n(67266),o=n.n(s),a=n(5242),i=n.n(a),r=n(53965),l=n(1898),c=n(15095),d=n(70203);let u=function(e){return e[e.removed=-1]="removed",e[e.added=1]="added",e[e.same=0]="same",e}({});function p(e){const{before:t,after:n,isIncompleteAfter:s,insertCursor:a}=e,p={count:0,encoding:{},decoding:{},annotationEncoding:{},annotationDecoding:{}},m=e=>{const t=p.encoding[e];if(t)return t;{const t=String.fromCharCode(p.count);return p.count++,p.encoding[e]=t,p.decoding[t]=e,t}},g=e=>{const t=o()(e),n=p.annotationEncoding[t];if(n)return n;{const n=String.fromCharCode(p.count);return p.count++,p.annotationEncoding[t]=n,p.annotationDecoding[n]=e,n}},f=e=>r.xH(d.lzi(e).map((e=>{const t=c.p4(e[0]).map(m);if(d.km_(e)){const n=d.hDy(e),s=d.I$B(n);s&&(t[0]=g({type:"mention",value:s}),n.forEach((e=>{d.ZAl(e)||d.kuv(e)||d.QVC(e)||(t.unshift(g({type:"start",value:e})),t.push(g({type:"end",value:e})))})))}else if(d.YrK(e)){const n=d.hDy(e),s=d.Ap(n);if(s){t[0]=g({type:"equation",value:s});for(const e of n)d.ZAl(e)||d.kuv(e)||d.QVC(e)||(t.unshift(g({type:"start",value:e})),t.push(g({type:"end",value:e})))}}else if(d.AJd(e)){d.hDy(e).forEach((e=>{t.unshift(g({type:"start",value:e})),t.push(g({type:"end",value:e}))}))}return t}))).join("");if(p.count>65535)throw new Error("This string has way too many different characters.");const v=function(e,t){const n=new(i())({timeout:2,editCost:6}),s=n.main(t,e);return n.cleanupSemantic(s),s}(f(n),f(t)),y=[];let h=[],C=0;const x=s?r.qr(v,(e=>0===e[0]||1===e[0])):0;let S=!1;const k=()=>e.insertedDeletedAnnotationEditId?["+",e.insertedDeletedAnnotationEditId]:["+"],w=()=>e.insertedDeletedAnnotationEditId?["-",e.insertedDeletedAnnotationEditId]:["-"];return v.forEach((e=>{let[t,n]=e;n.split("").forEach((e=>{if(p.decoding[e]){const n=p.decoding[e];t===u.added?y.push([n,[...h,k()]]):t===u.removed&&(!s||C<=x)?y.push([n,[...h,w()]]):(s&&a&&!S&&C===x+1&&(S=!0,y.push(["",[["tc"]]])),y.push([n,h]))}else{const n=p.annotationDecoding[e];if(t===u.added)if("mention"===n.type)y.push([d.qyI,[...h,k(),n.value]]);else if("start"===n.type)h=[...h,n.value];else if("end"===n.type)h=h.filter((e=>!r.Xy(e,n.value)));else if("equation"===n.type){const e=d.xey(n.value),t=d.qZ6(e,[...h,k()]);y.push(t)}else(0,l.t1)(n);else if(t===u.removed){if("mention"===n.type)y.push([d.qyI,[...h,w(),n.value]]);else if("equation"===n.type){const e=d.xey(n.value),t=d.qZ6(e,[...h,w()]);y.push(t)}}else if(t===u.same)if("mention"===n.type)y.push([d.qyI,[...h,n.value]]);else if("start"===n.type)h=[...h,n.value];else if("end"===n.type)h=h.filter((e=>!r.Xy(e,n.value)));else if("equation"===n.type){const e=d.xey(n.value),t=d.qZ6(e,h);y.push(t)}else(0,l.t1)(n)}})),s&&(C+=1)})),d.Zxt(y)}},32566:(e,t,n)=>{n.d(t,{k:()=>a});n(67294);var s=n(45238),o=n(85893);const a=(0,s.IU)("arrowRightSmaller",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M15.383 8.352a.877.877 0 01-.274.64l-5.156 5.14a.864.864 0 01-.617.266.831.831 0 01-.602-.234.795.795 0 01-.234-.586c0-.12.02-.232.063-.336a.912.912 0 01.187-.273l1.75-1.766 2.914-2.656.274.5-2.711.156H1.484c-.26 0-.471-.078-.632-.234a.851.851 0 01-.235-.617c0-.256.078-.461.235-.618a.856.856 0 01.632-.242h9.493l2.71.164-.273.508L10.5 5.5 8.75 3.727a.946.946 0 01-.188-.266.917.917 0 01-.062-.344c0-.234.078-.43.234-.586a.831.831 0 01.602-.234.79.79 0 01.328.07c.104.047.203.117.297.211l5.148 5.133a.877.877 0 01.274.64z"})})},30134:(e,t,n)=>{n.d(t,{c:()=>a});n(67294);var s=n(45238),o=n(85893);const a=(0,s.IU)("export",{viewBox:"0 0 16 16",svg:(0,o.jsx)("path",{d:"M3.0625 15.8174C2.32422 15.8174 1.76595 15.6305 1.3877 15.2568C1.00944 14.8831 0.820312 14.3294 0.820312 13.5957V6.86914C0.820312 6.13997 1.00944 5.58854 1.3877 5.21484C1.76595 4.83659 2.32422 4.64746 3.0625 4.64746H4.92871V5.99414H3.14453C2.82552 5.99414 2.58171 6.07845 2.41309 6.24707C2.24902 6.41113 2.16699 6.65951 2.16699 6.99219V13.4795C2.16699 13.8122 2.24902 14.0605 2.41309 14.2246C2.58171 14.3932 2.82552 14.4775 3.14453 14.4775H10.8486C11.1631 14.4775 11.4046 14.3932 11.5732 14.2246C11.7464 14.0605 11.833 13.8122 11.833 13.4795V6.99219C11.833 6.65951 11.7464 6.41113 11.5732 6.24707C11.4046 6.07845 11.1631 5.99414 10.8486 5.99414H9.07812V4.64746H10.9375C11.6758 4.64746 12.234 4.83659 12.6123 5.21484C12.9906 5.58854 13.1797 6.13997 13.1797 6.86914V13.5957C13.1797 14.3249 12.9906 14.8763 12.6123 15.25C12.234 15.6283 11.6758 15.8174 10.9375 15.8174H3.0625ZM7 11.3877C6.91797 11.3877 6.83822 11.374 6.76074 11.3467C6.68327 11.3148 6.60124 11.2578 6.51465 11.1758L4.21777 8.96094C4.10384 8.84245 4.04688 8.70801 4.04688 8.55762C4.04688 8.39811 4.09928 8.26823 4.2041 8.16797C4.31348 8.06771 4.44792 8.01758 4.60742 8.01758C4.7806 8.01758 4.92188 8.0791 5.03125 8.20215L5.98828 9.2207L6.43262 9.71973L6.36426 8.70117V1.61914C6.36426 1.45052 6.42578 1.30469 6.54883 1.18164C6.67643 1.05859 6.82682 0.99707 7 0.99707C7.17318 0.99707 7.32129 1.05859 7.44434 1.18164C7.57194 1.30469 7.63574 1.45052 7.63574 1.61914V8.70117L7.56738 9.71973L8.00488 9.2207L8.96191 8.20215C9.07585 8.0791 9.21712 8.01758 9.38574 8.01758C9.54069 8.01758 9.67285 8.06771 9.78223 8.16797C9.89616 8.26823 9.95312 8.39811 9.95312 8.55762C9.95312 8.70801 9.89388 8.84245 9.77539 8.96094L7.47852 11.1758C7.39648 11.2578 7.31673 11.3148 7.23926 11.3467C7.16178 11.374 7.08203 11.3877 7 11.3877Z"})})},19981:(e,t,n)=>{n.d(t,{V:()=>a});n(67294);var s=n(45238),o=n(85893);const a=(0,s.IU)("handWave",{viewBox:"0 0 14 15",svg:(0,o.jsx)("path",{d:"M12.223 12.396c.888-.893 1.406-1.886 1.551-2.98.15-1.098-.08-2.288-.69-3.568l-1.552-3.275a2.264 2.264 0 00-.417-.594 1.28 1.28 0 00-.95-.404c-.36 0-.677.135-.95.404a1.211 1.211 0 00-.335.628c-.05.247-.023.502.082.766l.383.91c.013.031.011.056-.007.074-.023.019-.048.016-.075-.006L5.537.625C5.232.32 4.897.167 4.532.167c-.36-.005-.688.144-.984.444a1.115 1.115 0 00-.219.308 1.13 1.13 0 00-.096.349c-.291-.2-.59-.288-.895-.26-.3.023-.574.157-.82.403a1.278 1.278 0 00-.397.827c-.023.306.057.6.24.882a.876.876 0 00-.602.287c-.278.274-.415.584-.41.93.004.346.148.66.43.943l.458.458a.877.877 0 00-.348.09 1.115 1.115 0 00-.308.218 1.32 1.32 0 00-.37.615 1.29 1.29 0 00.021.684 1.6 1.6 0 00.397.635l4.231 4.232c.78.775 1.6 1.294 2.461 1.559.866.264 1.72.28 2.564.047.843-.232 1.622-.706 2.338-1.421zm-.841-.793c-.579.58-1.197.957-1.853 1.135-.651.178-1.317.15-1.996-.082-.674-.228-1.335-.663-1.982-1.305L1.497 7.297a.452.452 0 01-.143-.308.38.38 0 01.13-.3.403.403 0 01.3-.137c.119 0 .223.045.315.136l2.495 2.489a.45.45 0 00.355.15.476.476 0 00.342-.15.478.478 0 00.164-.349.461.461 0 00-.15-.362l-3.733-3.74a.446.446 0 01-.143-.3.38.38 0 01.13-.301.425.425 0 01.307-.137.45.45 0 01.315.137l3.48 3.486c.104.1.225.148.361.144a.476.476 0 00.342-.15c.1-.1.153-.22.157-.356a.47.47 0 00-.143-.362L2.283 2.799a.477.477 0 01-.143-.315.41.41 0 01.136-.307.39.39 0 01.301-.123c.119.004.223.05.315.136l4.04 4.034a.434.434 0 00.348.15.5.5 0 00.349-.15c.1-.1.153-.22.157-.356a.46.46 0 00-.137-.355L4.218 2.08a.425.425 0 01-.137-.308c0-.113.041-.216.123-.307a.41.41 0 01.308-.123c.114 0 .218.045.314.136L9.64 6.292c.136.141.282.212.437.212a.577.577 0 00.403-.178.71.71 0 00.192-.342c.032-.136.011-.298-.062-.485L9.748 3.25a.52.52 0 01-.014-.37.42.42 0 01.22-.232.362.362 0 01.32 0c.1.05.185.149.253.294l1.586 3.377c.52 1.121.702 2.108.547 2.96-.155.853-.58 1.627-1.278 2.325z"})})},28495:(e,t,n)=>{n.d(t,{v:()=>a});n(67294);var s=n(45238),o=n(85893);const a=(0,s.IU)("personCircle",{viewBox:"0 0 18 17",svg:(0,o.jsx)("path",{d:"M8.99219 16.6797C10.0964 16.6797 11.1354 16.4688 12.1094 16.0469C13.0833 15.6302 13.9427 15.0495 14.6875 14.3047C15.4323 13.5599 16.0156 12.7005 16.4375 11.7266C16.8594 10.7526 17.0703 9.71354 17.0703 8.60938C17.0703 7.50521 16.8594 6.46615 16.4375 5.49219C16.0156 4.51823 15.4323 3.66146 14.6875 2.92188C13.9427 2.17708 13.0833 1.59375 12.1094 1.17188C11.1354 0.75 10.0938 0.539062 8.98438 0.539062C7.88021 0.539062 6.84115 0.75 5.86719 1.17188C4.89844 1.59375 4.04167 2.17708 3.29688 2.92188C2.55729 3.66146 1.97656 4.51823 1.55469 5.49219C1.13281 6.46615 0.921875 7.50521 0.921875 8.60938C0.921875 9.71354 1.13281 10.7526 1.55469 11.7266C1.97656 12.7005 2.55729 13.5599 3.29688 14.3047C4.04167 15.0495 4.90104 15.6302 5.875 16.0469C6.84896 16.4688 7.88802 16.6797 8.99219 16.6797ZM8.99219 15.0859C8.09635 15.0859 7.25521 14.9193 6.46875 14.5859C5.6875 14.2526 5 13.7891 4.40625 13.1953C3.81771 12.6016 3.35677 11.9141 3.02344 11.1328C2.6901 10.3516 2.52344 9.51042 2.52344 8.60938C2.52344 7.71354 2.6901 6.875 3.02344 6.09375C3.35677 5.30729 3.81771 4.61719 4.40625 4.02344C4.99479 3.42969 5.67969 2.96615 6.46094 2.63281C7.2474 2.29948 8.08854 2.13281 8.98438 2.13281C9.88542 2.13281 10.7266 2.29948 11.5078 2.63281C12.2943 2.96615 12.9844 3.42969 13.5781 4.02344C14.1719 4.61719 14.6354 5.30729 14.9688 6.09375C15.3021 6.875 15.4688 7.71354 15.4688 8.60938C15.4688 9.51042 15.3021 10.3516 14.9688 11.1328C14.6354 11.9141 14.1719 12.6016 13.5781 13.1953C12.9844 13.7891 12.2969 14.2526 11.5156 14.5859C10.7344 14.9193 9.89323 15.0859 8.99219 15.0859ZM14.2031 13.7656L14.1719 13.6328C14.0052 13.2474 13.6849 12.8776 13.2109 12.5234C12.7422 12.1641 12.1484 11.8724 11.4297 11.6484C10.7161 11.4193 9.90365 11.3047 8.99219 11.3047C8.09115 11.3047 7.28125 11.4193 6.5625 11.6484C5.84375 11.8724 5.2474 12.1641 4.77344 12.5234C4.30469 12.8776 3.98698 13.2448 3.82031 13.625L3.78906 13.7656C4.27865 14.2188 4.83333 14.599 5.45312 14.9062C6.07292 15.2188 6.69271 15.4557 7.3125 15.6172C7.9375 15.7786 8.4974 15.8594 8.99219 15.8594C9.49219 15.8594 10.0521 15.7786 10.6719 15.6172C11.2917 15.4557 11.9115 15.2188 12.5312 14.9062C13.151 14.599 13.7083 14.2188 14.2031 13.7656ZM8.99219 10.0156C9.4974 10.0208 9.95312 9.89583 10.3594 9.64062C10.7656 9.38021 11.0885 9.02604 11.3281 8.57812C11.5677 8.125 11.6875 7.61979 11.6875 7.0625C11.6875 6.54167 11.5651 6.0625 11.3203 5.625C11.0807 5.18229 10.7578 4.82812 10.3516 4.5625C9.95052 4.29688 9.4974 4.16406 8.99219 4.16406C8.49219 4.16406 8.03646 4.29688 7.625 4.5625C7.21875 4.82812 6.89583 5.18229 6.65625 5.625C6.41667 6.0625 6.29948 6.54167 6.30469 7.0625C6.3099 7.61979 6.42969 8.1224 6.66406 8.57031C6.90365 9.01302 7.22656 9.36458 7.63281 9.625C8.03906 9.88021 8.49219 10.0104 8.99219 10.0156Z"})})}}]);