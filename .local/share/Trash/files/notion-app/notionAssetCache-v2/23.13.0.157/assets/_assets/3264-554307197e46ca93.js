"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3264],{66653:(e,t,i)=>{i.d(t,{Z:()=>b});var n=i(67294),r=i(480),o=i(86628),a=i(24405),l=i(40506),s=i(53877),d=i(84795),u=i(9291),p=i(1898),c=i(17335),g=i(97638),v=i(67950),f=i(74194),y=i(68894),h=i(26388),m=i(85893);const b=function(e){const t=(0,u.useIntl)(),i=(0,o.qz)(void 0,v.Z),{value:r}=e;(0,n.useEffect)((()=>{i.reset()}),[r,i]);const a=(0,n.useCallback)((()=>(0,m.jsx)(F,{dateInputMenuItemProps:e,store:i})),[e,i]),l=(0,o.VK)((()=>R(t,i)),[t,i]);return l?(0,m.jsx)(h.ZP,{renderTooltip:()=>l,forceVisibleState:!0,placement:h.ug.Left,render:a,originGap:-8}):(0,m.jsx)(F,{dateInputMenuItemProps:e,store:i})};function x(e,t){const{device:i}=e;return i.isMobile?"YYYY-MM-DD":t??l.sF}function M(e,t){const{device:i}=e;return!!i.isMobile||!t}function S(e){return{inputDefault:{background:e.inputBackground,boxShadow:e.inputBoxShadow},inputFocused:{background:e.inputBackground,boxShadow:e.outlineBlueInputBoxShadow},inputError:{background:e.inputBackground,boxShadow:e.outlineRedInputBoxShadow},placeholder:{color:e.lightTextColor}}}function j(e,t){return{menuItem:{marginBottom:e.device.isMobile?1:8},inputWrapper:{borderRadius:4,height:28,paddingRight:M(e,t)?8:0,position:"relative"},inputEditRegion:{width:M(e,t)?"calc(100% - 14px)":"87%"},inputEditRegionMobile:{padding:"2px 6px",position:"relative"},placeholder:{position:"absolute",left:e.device.isIpad?26:12,top:e.device.isIpad?void 0:"50%",transform:"translateY(-50%)"}}}function k(e){let{inputType:t,placeholder:i,value:n,hideClearButton:o}=e;const l=(0,a.Fg)(),s=j((0,r.O7)(),o),d=S(l);return"date"!==t||n?null:(0,m.jsx)("div",{style:{...s.placeholder,...d.placeholder},children:i})}function R(e,t){if(t.state.error)switch(t.state.error){case v.B.INVALID_DATE:return e.formatMessage({id:"dateInputError.invalidDateError.tooltip",defaultMessage:"Invalid date"});case v.B.INVALID_RANGE:return e.formatMessage({id:"dateInputError.invalidDateRangeError.tooltip",defaultMessage:"Invalid range"});default:(0,p.t1)(t.state.error)}}function w(e,t,i,n,r){const o=function(e,t,i,n){if(!i.state.edited)return;if(!i.state.temporary)return{value:void 0};const r=(0,d.f_)(i.state.temporary,e.device.isMobile?s.Iq:x(e,n),t);return r?{value:{type:"date",start_date:r}}:{error:v.B.INVALID_DATE}}(e,t,i,r);if(o)return n?n(o):o}function D(e,t,i,n,r){const o=S(e),a=R(n,r);if(!t)return a?o.inputError:i?o.inputFocused:o.inputDefault}function I(e,t,i,n,r,o,a,l){const s=w(e,i,n,o,a);s?(t(s),s.error?n.setState({...n.state,edited:!1,error:s.error}):n.reset()):n.setState({...n.state,edited:!1}),l&&r&&r(l)}function F(e){let{dateInputMenuItemProps:t,store:i}=e;const{store:l,hideClearButton:d,focused:p,value:v,...h}=t,{onBlur:b,onClearButtonClick:S,onFocus:R,onSubmit:F,onUpdate:B,placeholder:Z,validate:C,desktopDateFormat:L,inputStyle:O,inputOuterStyle:P,style:T,disabled:U}=t,E=(0,u.useIntl)(),W=(0,a.Fg)(),_=(0,r.O7)(),Y=(0,n.useCallback)((e=>I(_,B,E,i,b,C,L)),[_,B,E,i,b,C,L]),A=(0,n.useCallback)((e=>function(e,t,i,n,r,o,a,l){const s=w(t,n,r,a,l);s&&(i(s),s.error?r.setState({...r.state,edited:!1,error:s.error}):r.reset()),o&&o(e,s)}(e,_,B,E,i,F,C,L)),[_,B,E,i,F,C,L]),V=(0,n.useCallback)((e=>function(e,t,i,n,r,o,a,l){const{device:s}=t;r.setState({...r.state,edited:!0,temporary:e.target.value||""}),s.isAndroid&&I(t,i,n,r,o,a,l)}(e,_,B,E,i,b,C,L)),[_,B,E,i,b,C,L]),Q=(0,n.useCallback)((()=>function(e,t,i,n,r,o,a){r.setState({...r.state,edited:!0,temporary:"",error:void 0});const l=w(e,n,r,o,a);l&&i(l),r.setState({...r.state,edited:!1}),t&&t()}(_,S,B,E,i,C,L)),[_,S,B,E,i,C,L]),q=(0,n.useCallback)((e=>function(e,t,i){i.setState({...i.state,edited:!1}),t&&t(e)}(e,R,i)),[R,i]),{device:K}=_,N=K.isMobile&&"relative"!==(null==v?void 0:v.type)?"date":"text",G="date"===N?f.B.Transparent:f.B.Large,z=K.isMobile?void 0:p,$=(0,o.VK)((()=>function(e,t,i,n,r){const{device:o}=e;if(t&&"relative"===t.type)return(0,c.x)(t);const a=t&&"date"!==t.type?s.Id(t):t;return o.isMobile?a?g.p6(a,i,x(e,r)):"":n.state.temporary||n.state.edited?n.state.temporary:a?g.p6(a,i,x(e,r)):""}(_,v,E,i,L)),[_,v,E,i,L]),H=(0,o.VK)((()=>function(e,t,i,n,r,o,a,l,s,d){const{device:u}=e,p=j(e,d);return{style:{...p.menuItem,...r,marginRight:0},inputOuterStyle:{...D(t,o,a,l,s),...p.inputWrapper,...n},inputStyle:{...p.inputEditRegion,...u.isMobile&&p.inputEditRegionMobile,...i}}}(_,W,O,P,T,U,p,E,i,d)),[_,W,O,P,T,U,p,E,i,d]);return(0,m.jsx)(y.ZP,{...h,type:N,format:G,left:(0,m.jsx)(k,{placeholder:Z,value:v,hideClearButton:d,inputType:N}),showClearButton:M(_,d),focus:z,onFocus:q,onClearButtonClick:Q,onChange:V,onSubmit:A,onBlur:Y,value:$,disableInput:"relative"===(null==v?void 0:v.type),...H})}},41209:(e,t,i)=>{i.d(t,{Z:()=>f});i(67294);var n=i(480),r=i(76205),o=i(17335),a=i(33929),l=i(60709),s=i(52275),d=i(31945),u=i(78140),p=i(32163),c=i(53437),g=i(72495),v=i(85893);function f(e){const{filterValue:t,renderOrigin:i,buttonPopupStore:f}=e,y=(0,n.O7)(),h=e=>"relative"===e.filter.type&&"custom"===e.filter.value?a.default.formatMessage(o.HL[e.filter.value]):"date"===e.type?(0,o.x)(e.filter):(0,o.ip)(e.filter);return(0,v.jsx)(d.ZP,{popupType:y.device.isMobile?c.kQ.SlideUp:c.kQ.Popup,buttonPopupStore:f,render:()=>{let i;i=y.device.isMobile?{menuType:l.og.ActionSheet}:{menuType:l.og.Popup};const n="date"===e.type?(()=>{const e=r.tO;return[...e.filter((e=>"relative"===e.type)),...e.filter((e=>"exact"===e.type))]})().map((i=>({key:"relative"===i.type?i.value:i.type,render:e=>(0,v.jsx)(s.Z,{...e,title:h({type:"date",filter:i}),checkState:i.type===t.type&&(void 0===i.value||i.value===t.value)}),action:()=>{e.onUpdate(i),f.setState({open:!1})}}))):(()=>{const e=(0,r.v8)();return[...e.filter((e=>"relative"===e.type)),...e.filter((e=>"exact"===e.type))]})().map((i=>({key:(0,r.eX)(i),render:e=>(0,v.jsx)(s.Z,{...e,title:h({type:"daterange",filter:i}),checkState:i.type===t.type&&(void 0===i.value||i.value===t.value)}),action:()=>{e.onUpdate(i),f.setState({open:!1})}})));return(0,v.jsx)(u.Z,{...i,children:(0,v.jsx)(p.Z,{type:p.i.Vertical,sections:[{key:"filterOperators",render:e=>(0,v.jsx)(g.Z,{disableMobilePadding:!0,...e}),items:n}],initialFocus:void 0})})},renderOrigin:i,style:{width:240},originGap:2,placementToOrigin:d.pO.Bottom,alignmentToOrigin:d.vR.Center,disabled:e.disabled})}},83264:(e,t,i)=>{i.d(t,{Z:()=>F});var n=i(67294),r=i(480),o=i(86628),a=i(24405),l=i(76205),s=i(53877),d=i(42875),u=i(9291),p=i(1898),c=i(28020),g=i(33929),v=i(60709),f=i(97638),y=i(67950),h=i(41558),m=i(78140),b=i(40721),x=i(72495),M=i(64369),S=i(66653),j=i(41209),k=i(46945),R=i(14390),w=i(85893);const D={calendarWrapper:{display:"flex",justifyContent:"center",alignItems:"center"},pickerSection:{paddingLeft:16,paddingRight:16},pickerSectionMobile:{paddingTop:16,paddingBottom:8},firstDateInput:{marginTop:2}},I=(0,u.defineMessages)({startingMessage:{defaultMessage:"Starting",id:"search.dateRangeMenu.startingMessage"},endingMessage:{defaultMessage:"Ending",id:"search.dateRangeMenu.endingMessage"}});const F=function(e){let{disableMenuWrap:t,hideDateInputMenuItems:i,value:n,relativeRangePopupStore:a,onUpdateRelativeFilter:l,disabled:s,allowRelativeRangeFilter:d,onUpdate:p,onDismiss:c,title:g,store:v}=e;const f=(0,r.O7)(),y=(0,u.useIntl)(),b=(0,o.qz)(v,h.Z),{device:x}=f;return t?(0,w.jsxs)(w.Fragment,{children:[!i&&(0,w.jsx)(U,{value:n,relativeRangePopupStore:a,onUpdateRelativeFilter:l,disabled:s,allowRelativeRangeFilter:d,intl:y,onUpdate:p,onDismiss:c,store:b}),(0,w.jsx)(O,{value:n,onUpdate:p,store:b})]}):(0,w.jsxs)(m.Z,{...E(f,g,n,y,p,b,c,a,l,s,d),children:[!x.isMobile&&!i&&(0,w.jsx)(U,{value:n,relativeRangePopupStore:a,onUpdateRelativeFilter:l,disabled:s,allowRelativeRangeFilter:d,intl:y,onUpdate:p,onDismiss:c,store:b}),(0,w.jsx)(O,{value:n,onUpdate:p,store:b})]})};function B(e){return{type:"date",start_date:s.gQ(Date.now(),s.aN(),e).toFormat(s.Iq)}}function Z(e){return"custom"===e.value?function(e,t,i){const n=(0,l.Fo)(e,t,i,(0,d.r)());switch(e){case"past":return{starting:s.ME(n),ending:s.Lg((0,d.r)())};case"future":return{starting:s.Lg((0,d.r)()),ending:s.ME(n)};default:(0,p.t1)(e)}}(e.direction,e.count,e.unit):"surrounding"===e.value?function(e){const{start:t,end:i}=(0,l.je)(e,(0,d.r)(),c.AK.state);return{starting:s.ME(t),ending:s.ME(i)}}(e.unit):function(e){switch(e.value){case"this_week":return{starting:(t=(0,d.r)(),{type:"date",start_date:s.em(Date.now(),s.aN(),t).toFormat(s.Iq)}),ending:B((0,d.r)())};case"the_past_month":return{starting:s.dj((0,d.r)()),ending:s.Lg((0,d.r)())};case"the_past_week":return{starting:s.Oo((0,d.r)()),ending:s.Lg((0,d.r)())};case"the_past_year":return{starting:s.b8((0,d.r)()),ending:s.Lg((0,d.r)())};case"the_next_month":return{starting:s.Lg((0,d.r)()),ending:s.nD((0,d.r)())};case"the_next_week":return{starting:s.Lg((0,d.r)()),ending:s.Kq((0,d.r)())};case"the_next_year":return{starting:s.Lg((0,d.r)()),ending:s.NJ((0,d.r)())};default:(0,p.t1)(e)}var t}(e)}function C(e){let{events:t,onUpdateFilter:i,filter:n}=e;const o=(0,r.O7)();return(0,w.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:o.device.isMobile?"wrap":void 0,marginBottom:12},children:(0,w.jsx)("div",{style:{width:"92%",marginLeft:10,marginRight:10},children:(0,w.jsx)(R.b,{onUpdate:i,filter:n})})})}function L(e,t,i){if("type"in i)return{value:{starting:void 0,ending:void 0}};if(t.error)return t;const n=t.value&&"date"!==t.value.type?s.Id(t.value):t.value;return function(e){if(e.starting&&e.ending){const t=s.OQ.notionDateToLuxon(e.starting);return s.OQ.notionDateToLuxon(e.ending)>=t?{value:e}:{error:y.B.INVALID_RANGE}}return{value:e}}({...i,[e]:n})}function O(e){let{value:t,onUpdate:i,store:n}=e;const l=(0,a.Fg)(),s=(0,r.O7)(),d=(0,o.qz)(n,h.Z),{device:p}=s,c=function(e){return{pickerSectionMobile:{background:e.popoverBackground,boxShadow:`0 1px 0 ${e.regularDividerColor}`,marginBottom:1}}}(l),g={...D.pickerSection,...p.isMobile&&D.pickerSectionMobile,...p.isMobile&&c.pickerSectionMobile},v=(0,o.VK)((()=>"type"in t?Z(t):t),[t]);return(0,w.jsx)(x.Z,{style:D.calendarWrapper,children:(0,w.jsxs)("div",{style:g,children:[(0,w.jsx)(k.Z,{value:v,store:d,onUpdate:i,validate:(e,i)=>L(e,i,t),readonly:"type"in t}),"type"in t&&(0,w.jsx)(M.Z,{isSmall:!0,style:{marginLeft:4,marginTop:4},children:(0,w.jsx)(u.FormattedMessage,{id:"collectionFilterMenu.dateRangeFilter.relativeDateRangeFilter.description",defaultMessage:"Filter will update with the current date"})})]})})}function P(e,t){t.setState({...t.state,focus:e})}function T(e){let{events:t,value:i,disabled:a,allowRelativeRangeFilter:l,onUpdate:s,onDismiss:d,store:p}=e;const c=(0,r.O7)(),v=(0,u.useIntl)(),y=(0,n.useCallback)(((e,t)=>function(e,t,i){t&&t.error||i.setState({...i.state,focus:"ending"})}(0,t,p)),[p]),h=(0,o.VK)((()=>p.getFocus()),[p]),m=function(e,t){if("type"in e)return;return{earliestValidEnding:e.starting&&f.p6(e.starting,t,"YYYY-MM-DD"),latestValidStarting:e.ending&&f.p6(e.ending,t,"YYYY-MM-DD")}}(i,v),b="type"in i?{starting:void 0,ending:void 0}:i;return(0,w.jsxs)("div",{...t,style:{display:"flex",flexDirection:l&&!c.device.isMobile?"row":"column",alignItems:"center",width:c.device.isMobile?void 0:280},children:[(0,w.jsx)(S.Z,{disabled:a,placeholder:c.device.isMobile?void 0:g.default.formatMessage(I.startingMessage),focused:"starting"===h,value:b.starting,validate:e=>function(e,t){const i=L("starting",e,t);return i.error?i:{value:i.value.starting}}(e,i),onUpdate:e=>function(e,t){e.error||t({value:{starting:e.value}})}(e,s),onFocus:()=>P("starting",p),onSubmit:y,inputElementAttributes:m?{max:m.latestValidStarting}:void 0,inputOuterStyle:D.firstDateInput,textWrapperStyle:l&&!c.device.isMobile?{marginRight:2}:{},desktopDateFormat:l?"YYYY/MM/DD":void 0}),(0,w.jsx)(S.Z,{disabled:a,placeholder:c.device.isMobile?void 0:g.default.formatMessage(I.endingMessage),focused:"ending"===h,value:b.ending,validate:e=>function(e,t){const i=L("ending",e,t);return i.error?i:{value:i.value.ending}}(e,i),onUpdate:e=>function(e,t){e.error||t({value:{ending:e.value}})}(e,s),onFocus:()=>P("ending",p),onSubmit:(e,t)=>function(e,t,i){t&&t.error||i&&i(e)}(e,t,d),inputElementAttributes:m?{min:m.earliestValidEnding}:void 0,textWrapperStyle:l&&!c.device.isMobile?{marginLeft:2}:{},desktopDateFormat:l?"YYYY/MM/DD":void 0})]})}function U(e){let{value:t,relativeRangePopupStore:i,onUpdateRelativeFilter:n,disabled:r,allowRelativeRangeFilter:o,intl:a,onUpdate:l,onDismiss:s,store:d}=e;if(i&&n){const e="type"in t?t:{type:"exact",value:void 0};return(0,w.jsx)(j.Z,{type:"daterange",filterValue:e,onUpdate:n,renderOrigin:i=>"exact"===e.type?(0,w.jsx)(T,{value:t,disabled:r,allowRelativeRangeFilter:o,onUpdate:l,onDismiss:s,store:d,events:i}):"relative"!==e.type||"surrounding"!==e.value&&"custom"!==e.value?void 0:(0,w.jsx)(C,{events:i,onUpdateFilter:n,filter:e}),disabled:"exact"===e.type,buttonPopupStore:i})}return(0,w.jsx)(T,{value:t,disabled:r,allowRelativeRangeFilter:o,onUpdate:l,onDismiss:s,store:d})}function E(e,t,i,n,r,o,a,l,s,d,u){const{device:p}=e;if(p.isMobile){return{menuType:v.og.Modal,title:t,right:(0,w.jsx)(b.DoneMenuText,{}),onClickRight:a,header:(0,w.jsx)(U,{value:i,relativeRangePopupStore:l,onUpdateRelativeFilter:s,disabled:d,allowRelativeRangeFilter:u,intl:n,onUpdate:r,onDismiss:a,store:o})}}return{menuType:v.og.Popup,onClickOutside:a}}},62045:(e,t,i)=>{i.d(t,{Z:()=>p});i(67294);var n=i(480),r=i(24405),o=i(42853),a=i(31701),l=i(52275),s=i(8982),d=i(63296),u=i(85893);const p=function(e){let{title:t,disabled:i,innerStyle:p,placeholder:c,onClick:g,disableMargins:v,desktopStyle:f}=e;const y=(0,r.Fg)(),h=(0,n.O7)(),{device:m}=h,b=Boolean(t);if(m.isMobile)return(0,u.jsx)(l.Z,{showExtensionArrow:!i,focused:!1,title:b?(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",...p},children:t}):(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",color:a.ZP.uiGray,...p},children:c}),onClick:g});{const e="dark"===y.mode?y.lightTextColor:y.mediumTextColor;return(0,u.jsx)(s.i,{action:()=>function(e){e&&e()}(g),disabled:i,render:n=>(0,u.jsxs)(d.Z,{...n,hovered:n.focused,isLarge:!0,backgroundColor:y.buttonBackground,style:{marginRight:8,maxWidth:180,padding:"0 8px",...n.disabled&&{opacity:.5},...v&&{marginRight:0,maxWidth:"100%",justifyContent:"space-between"},...f},children:[(0,u.jsx)("div",{style:{display:"flex",minWidth:0,color:b?y.regularTextColor:e,...p},children:b?t:c}),!i&&(0,o.i)({width:10,marginLeft:6,fill:y.lightIconColor})]})})}}},14390:(e,t,i)=>{i.d(t,{b:()=>w});i(67294);var n=i(480),r=i(86628),o=i(24405),a=i(42853),l=i(9291),s=i(19584),d=i(17335),u=i(33929),p=i(60709),c=i(61766),g=i(52275),v=i(31945),f=i(73063),y=i(68894),h=i(78140),m=i(32163),b=i(63296),x=i(53437),M=i(72495),S=i(64369),j=i(62045),k=i(85893);function R(e){const{humanReadableLabel:t,placeholder:i,outlineButtonStyle:n,buttonWrapperStyle:r,renderAsQueryDropdown:l,events:s,isMobile:d}=e,u=(0,o.yK)((e=>({iconStyle:{...!d&&{height:12,width:12},color:e.mediumIconColor},textStyle:{marginLeft:6,color:e.regularTextColor}})),[d]);return l?(0,k.jsx)(j.Z,{...s,placeholder:i,title:(0,k.jsx)(S.Z,{isMobile:d,children:t}),disableMargins:!0}):(0,k.jsx)("div",{style:r,...s,children:(0,k.jsxs)(b.Z,{isLarge:d,style:n,children:[(0,k.jsx)("div",{style:u.textStyle,children:t}),(0,k.jsx)(f.Z,{disableBackground:!0,icon:a.i,iconStyle:u.iconStyle})]})})}function w(e){const{onUpdate:t,filter:i,renderAsQueryDropdown:a}=e,f=(0,n.Fy)(),b=(0,l.useIntl)(),S=(0,r.qz)(void 0,c.Z),j=(0,r.qz)(void 0,c.Z),w="count"in i,D=(0,o.yK)((e=>({directionButtonStyle:{paddingLeft:4,paddingRight:4,minWidth:70,justifyContent:"space-between",...f.isMobile&&{marginTop:12,width:"100%",paddingLeft:12,marginBottom:6},...!w&&{marginRight:4}},unitButtonStyle:{paddingLeft:4,paddingRight:4,minWidth:90,justifyContent:"space-between",width:"100%",...f.isMobile&&{paddingLeft:12,marginTop:6}},directionButtonWrapperStyle:{...f.isMobile&&{width:"100%"},flexGrow:0},unitButtonWrapperStyle:{...f.isMobile&&{width:"100%"},flexGrow:2},inputStyle:{minWidth:35,height:16},inputOuterStyle:{minWidth:60,height:32},container:{display:"flex",justifyContent:"start",alignItems:"center",flexDirection:f.isMobile?"column":"row",width:"100%"},textWrapper:{marginRight:6,marginLeft:a?16:6}})),[f.isMobile,a,w]);function I(e){return"this"===e?u.default.formatMessage(d.Fc[e]):u.default.formatMessage(d.Sj[e])}function F(e,t){return t&&t>1?u.default.formatMessage(d.D0[e]):u.default.formatMessage(d.Sb[e])}const B=["day","week","month","year"].map((e=>({key:e,render:t=>(0,k.jsx)(g.Z,{...t,title:F(e,w?i.count:void 0),checkState:e===i.unit}),action:n=>{t({...i,unit:e}),S.setState({open:!1})}}))),Z=["past","future","this"].map((e=>({key:e,render:t=>(0,k.jsx)(g.Z,{...t,checkState:"surrounding"===i.value?"this"===e:e===i.direction,title:I(e)}),action:n=>{"this"===e&&"custom"===i.value?t({type:"relative",value:"surrounding",unit:i.unit}):"this"!==e&&"surrounding"===i.value?t({type:"relative",value:"custom",count:1,direction:e,unit:i.unit}):"this"!==e&&"custom"===i.value&&t({...i,direction:e}),j.setState({open:!1})}})));return(0,k.jsxs)("div",{style:D.container,children:[(0,k.jsx)(v.ZP,{buttonPopupStore:j,popupType:f.isMobile?x.kQ.SlideUp:x.kQ.Popup,renderOrigin:e=>(0,k.jsx)(R,{events:e,placeholder:b.formatMessage(d.$7.direction),renderAsQueryDropdown:a,isMobile:f.isMobile,outlineButtonStyle:D.directionButtonStyle,buttonWrapperStyle:D.directionButtonWrapperStyle,humanReadableLabel:I("direction"in i?i.direction:"this")}),render:()=>(0,k.jsx)(h.Z,{menuType:f.isMobile?p.og.ActionSheet:p.og.Popup,children:(0,k.jsx)(m.Z,{initialFocus:void 0,type:m.i.Vertical,sections:[{key:"directionOptions",render:e=>(0,k.jsx)(M.Z,{disableMobilePadding:!0,...e}),items:Z}]})})}),w&&(0,k.jsx)(y.ZP,{type:"number",style:D.inputStyle,textWrapperStyle:D.textWrapper,inputOuterStyle:D.inputOuterStyle,min:"1",value:i.count.toString(),onChange:e=>{const n=parseInt(e.target.value);!(0,s.hj)(n)||n<1||t({...i,count:n})}}),(0,k.jsx)(v.ZP,{buttonPopupStore:S,popupType:f.isMobile?x.kQ.SlideUp:x.kQ.Popup,renderOrigin:e=>(0,k.jsx)(R,{events:e,placeholder:b.formatMessage(d.$7.unit),renderAsQueryDropdown:a,isMobile:f.isMobile,outlineButtonStyle:D.unitButtonStyle,buttonWrapperStyle:D.unitButtonWrapperStyle,humanReadableLabel:F(i.unit,"count"in i?i.count:void 0)}),render:()=>(0,k.jsx)(h.Z,{menuType:f.isMobile?p.og.ActionSheet:p.og.Popup,children:(0,k.jsx)(m.Z,{initialFocus:void 0,type:m.i.Vertical,sections:[{key:"unitOptions",render:e=>(0,k.jsx)(M.Z,{disableMobilePadding:!0,...e}),items:B}]})})})]})}}}]);