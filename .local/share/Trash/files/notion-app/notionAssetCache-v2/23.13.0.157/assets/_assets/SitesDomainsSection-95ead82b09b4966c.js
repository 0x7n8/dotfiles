"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[226],{46978:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(67294),a=i(24405),s=i(85893);function o(e,t){let{isSelected:i}=e;const{radioButtonStyle:n,dotStyle:o}=(0,a.yK)((e=>({radioButtonStyle:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,borderRadius:16,marginRight:8,background:i?e.blueColor:e.whiteButtonBackground,border:i?"none":`1px solid ${e.radioButtonBorder}`,transition:"background 100ms ease-out"},dotStyle:{width:6,height:6,borderRadius:6,background:e.regularInvertedTextColor,transition:"opacity 100ms ease-out",opacity:i?1:0}})),[i]);return(0,s.jsx)("div",{ref:t,style:n,children:(0,s.jsx)("div",{style:o})})}const d=n.forwardRef(o)},18938:(e,t,i)=>{i.r(t),i.d(t,{default:()=>lt});var n=i(67294),a=i(480),s=i(86628),o=i(24405),d=i(21202),l=i(9291),r=i(64369),c=i(23189),u=i(40235),m=i(6258),p=i(5873),x=i(45238);const g=(0,x.CZ)("trash",{default:{loader:()=>i.e(9983).then(i.bind(i,79983)),size:20},small:{loader:()=>i.e(4088).then(i.bind(i,80407)),size:16},mini:{loader:()=>i.e(7817).then(i.bind(i,17817)),size:14},large:{loader:()=>i.e(3029).then(i.bind(i,93029)),size:24}});var f=i(90334),y=i(31945),C=i(73063),h=i(26388),j=i(98742),v=i(4023),b=i(54642),D=i(47307),w=i(29974),M=i(4708),I=i(81236);async function k(e){const{environment:t,spaceId:i,domainName:n,domainType:a}=e,s=await b.createPublicDomain(t,{spaceId:i,domainName:n,domainType:a,isAutogenerated:!1,isDefault:!1});if("success"===s.type)return I.Z.getData(t,{spaceId:i},!0),s.data.domainId;D.showError(s)}async function S(e){const{environment:t,spaceId:i,domainId:n,publicHomePageId:a,isDefault:s}=e;if(M.Nm()&&s)return void(await w.BR({environment:t,spaceId:i,publicHomePage:a}));const o=await b.updatePublicDomainHomePage(t,{spaceId:i,domainId:n,publicHomePage:a});"success"===o.type?I.Z.getData(t,{spaceId:i},!0):D.showError(o)}var B=i(50506),N=i(82914),Z=i(1853),T=i(85893);function F(e){const{iconGroup:t,title:i,description:n,descriptionValues:a,confirmationButton:s,onConfirm:o,onClose:d}=e;return(0,T.jsx)(B.Z,{open:!0,showCloseIcon:!0,render:()=>(0,T.jsx)(Z.gv.Provider,{value:d,children:(0,T.jsx)(P,{iconGroup:t,title:i,description:n,descriptionValues:a,confirmationButton:s,onConfirm:o})})})}function P(e){const{iconGroup:t,title:i,description:n,descriptionValues:a,confirmationButton:s,onConfirm:d}=e,l=(0,o.yK)((()=>({container:{width:300}})),[]);return(0,T.jsx)("div",{style:l.container,children:(0,T.jsx)(N.sR,{header:(0,T.jsx)(R,{iconGroup:t,title:i,description:n,descriptionValues:a}),footer:(0,T.jsx)(L,{confirmationButton:s,onConfirm:d})})})}function R(e){const{iconGroup:t,title:i,description:n,descriptionValues:a}=e;return(0,T.jsx)(N.vI,{iconAndTitle:(0,T.jsx)(N.kC,{iconGroup:t,iconColorName:"uiRedPrimary",title:(0,T.jsx)(l.FormattedMessage,{...i})}),description:(0,T.jsx)(l.FormattedMessage,{...n,values:a})})}function L(e){const{confirmationButton:t,onConfirm:i}=e;return(0,T.jsx)(N.a6,{layout:"vertical",primaryButtons:[{buttonType:"destructive",label:(0,T.jsx)(l.FormattedMessage,{...t}),onClick:i}],secondaryButtons:[{buttonType:"dismiss"}]})}i(57658);var V=i(25651);const A=(0,x.IU)("squareArrowCycle",{viewBox:"0 0 30 22",svg:(0,T.jsx)("path",{d:"M0.773438 8.39062C0.578125 8.19531 0.484375 7.96875 0.492188 7.71094C0.5 7.45312 0.605469 7.22656 0.808594 7.03125L4.75781 3.09375C5.14062 2.71875 5.53516 2.53125 5.94141 2.53125C6.35547 2.53125 6.75391 2.71875 7.13672 3.09375L11.0859 7.03125C11.2891 7.22656 11.3906 7.45312 11.3906 7.71094C11.3984 7.96875 11.3047 8.19531 11.1094 8.39062C10.9062 8.59375 10.6797 8.69141 10.4297 8.68359C10.1797 8.66797 9.95312 8.5625 9.75 8.36719L8.625 7.25391L6.87891 5.39062V18.1172C6.87891 18.7266 7.03516 19.1875 7.34766 19.5C7.66797 19.8047 8.12109 19.957 8.70703 19.957H18.2109C18.5469 19.957 18.8047 20.0391 18.9844 20.2031C19.1641 20.3672 19.2539 20.6016 19.2539 20.9062C19.2617 21.2031 19.1719 21.4336 18.9844 21.5977C18.8047 21.7617 18.5469 21.8438 18.2109 21.8438H8.67188C7.45312 21.8438 6.53516 21.5391 5.91797 20.9297C5.30078 20.3281 4.99219 19.4219 4.99219 18.2109V5.41406L3.25781 7.25391L2.13281 8.36719C1.9375 8.5625 1.71094 8.66797 1.45312 8.68359C1.20312 8.69141 0.976562 8.59375 0.773438 8.39062ZM10.7461 1.20703C10.7383 0.910156 10.8281 0.679688 11.0156 0.515625C11.2031 0.351562 11.4609 0.269531 11.7891 0.269531H21.3281C22.5547 0.269531 23.4727 0.574219 24.082 1.18359C24.6992 1.78516 25.0078 2.69141 25.0078 3.90234V16.6992L26.7422 14.8477L27.8672 13.7461C28.0703 13.5508 28.2969 13.4492 28.5469 13.4414C28.7969 13.4258 29.0234 13.5156 29.2266 13.7109C29.4219 13.9141 29.5156 14.1445 29.5078 14.4023C29.5 14.6523 29.3945 14.8789 29.1914 15.082L25.2539 19.0078C24.8711 19.3906 24.4727 19.582 24.0586 19.582C23.6445 19.582 23.2461 19.3906 22.8633 19.0078L18.9141 15.082C18.7109 14.8789 18.6055 14.6523 18.5977 14.4023C18.5977 14.1445 18.6953 13.9141 18.8906 13.7109C19.0938 13.5156 19.3203 13.4258 19.5703 13.4414C19.8203 13.4492 20.0469 13.5508 20.25 13.7461L21.375 14.8477L23.1211 16.7227V3.99609C23.1211 3.38672 22.9648 2.92969 22.6523 2.625C22.3398 2.3125 21.8906 2.15625 21.3047 2.15625H11.7891C11.4609 2.15625 11.207 2.07422 11.0273 1.91016C10.8477 1.74609 10.7539 1.51172 10.7461 1.20703Z"})});var H=i(37612),K=i(52275),O=i(78140),_=i(32163),G=i(72495),z=i(60709);function U(e){const{domain:t,parent:i,onEditClick:n,onValidateClick:a,onDeleteClick:s}=e,d=(0,o.yK)((()=>({actionIcon:{width:14,height:14}})),[]),l=[];return"default"===t.domain_type?l.push({key:"edit",render:e=>(0,T.jsx)(E,{...e,iconStyle:d.actionIcon}),action:()=>{n(),i.close()}}):"custom"===t.domain_type&&"active"!==t.domain_status&&l.push({key:"validate",render:e=>(0,T.jsx)(W,{...e,iconStyle:d.actionIcon}),action:()=>{a(),i.close()}}),l.push({key:"delete",render:e=>(0,T.jsx)($,{...e,disabled:t.is_default,iconStyle:d.actionIcon}),action:()=>{s(),i.close()}}),(0,T.jsx)(T.Fragment,{children:(0,T.jsx)(O.Z,{menuType:z.og.Popup,width:160,children:(0,T.jsx)(_.Z,{initialFocus:0,type:_.i.Vertical,sections:[{key:0,render:e=>(0,T.jsx)(G.Z,{...e}),items:l}]})})})}const E=n.forwardRef((e=>{const{iconStyle:t}=e;return(0,T.jsx)(K.Z,{...e,icon:(0,V.R)(t),title:(0,T.jsx)(l.FormattedMessage,{id:"sites.domainActions.edit",defaultMessage:"Edit"})})}));E.displayName="EditAction";const $=n.forwardRef((e=>{const{iconStyle:t,disabled:i}=e;return i?(0,T.jsx)(h.ZP,{renderTooltip:()=>(0,T.jsx)(l.FormattedMessage,{id:"sites.domainActions.deleteDefaultDomain",defaultMessage:"Default domain of the workspace cannot be deleted."}),placement:h.ug.Bottom,render:i=>(0,T.jsx)(K.Z,{...(0,j.Z)(i,e),icon:(0,H.y)(t),title:(0,T.jsx)(l.FormattedMessage,{id:"sites.domainActions.delete",defaultMessage:"Delete"})})}):(0,T.jsx)(K.Z,{...e,icon:(0,H.y)(t),title:(0,T.jsx)(l.FormattedMessage,{id:"sites.domainActions.delete",defaultMessage:"Delete"})})}));$.displayName="DeleteAction";const W=n.forwardRef((e=>{const{iconStyle:t}=e;return(0,T.jsx)(K.Z,{...e,icon:A(t),title:(0,T.jsx)(l.FormattedMessage,{id:"sites.domainActions.validate",defaultMessage:"Validate"})})}));W.displayName="ValidateAction";var q=i(84096),Y=i(7184),Q=i(91315),X=i(54497),J=i(31701),ee=i(53965),te=i(37810),ie=i(74194),ne=i(68785),ae=i(33929),se=i(48779);const oe=(0,l.defineMessages)({workspaceDomainInputPlaceholder:{id:"sites.domainInput.placeholder",defaultMessage:"Your domain"}});function de(e){const{spaceId:t,existingDomainName:i,domainName:s,setDomainName:d,domainAvailabilityStatus:l,setDomainAvailabilityStatus:r}=e,c=(0,a.O7)(),u=(0,n.useCallback)((async e=>{const n=e.target.value;if(!e.target.value)return void r(void 0);const a=(0,se.$U)(n);if(d(a),a!==i){if(r("loading"),a){const e=await async function(e){const{environment:t,spaceId:i,domainName:n}=e,a=await b.validatePublicDomainAvailability(t,{spaceId:i,domainName:n});return"success"===a.type?a.data.domainAvailabilityStatus:"loading"}({environment:c,spaceId:t,domainName:a});r(e)}}else r(void 0)}),[c,t,i,d,r]),m=(0,n.useMemo)((()=>ee.Ds(u,500)),[u]),x=(0,o.yK)((e=>({container:{display:"flex",flexDirection:"column",maxHeight:50,fontSize:14,lineHeight:"20px"},inputContainer:{flex:1,display:"flex",alignItems:"center",background:e.inputBackground,borderRadius:4,marginBottom:6,boxShadow:"rgb(15 15 15 / 10%) 0px 0px 0px 1px inset",maxHeight:28},input:{flexGrow:1,background:"none",boxShadow:"none",padding:"4px 6px",width:"70%",maxWidth:"70%"},configDomainName:{paddingTop:4,paddingBottom:4,paddingLeft:8,paddingRight:4,width:"30%",maxWidth:"30%",borderLeft:`1px solid ${e.regularDividerColor}`,...te.Z.textOverflowStyle}})),[]);return(0,T.jsxs)("div",{style:x.container,children:[(0,T.jsxs)("div",{style:x.inputContainer,children:[(0,T.jsx)(ie.Z,{type:"text",style:x.input,value:s,placeholder:ae.default.formatMessage(oe.workspaceDomainInputPlaceholder),onChange:m}),(0,T.jsx)("div",{style:x.configDomainName,children:p.g2()}),(0,T.jsx)(le,{status:l})]}),(0,T.jsx)(ue,{domainName:s,status:l})]})}function le(e){const{status:t}=e,i=(0,o.yK)((()=>({statusIcon:{minWidth:12,marginRight:6}})),[]);return(0,T.jsxs)("div",{style:i.statusIcon,children:["available"===t&&(0,T.jsx)(re,{}),("inuse"===t||"current-space"===t||"disallowed"===t)&&(0,T.jsx)(ce,{}),"loading"===t&&(0,T.jsx)(ne.Z,{})]})}function re(){const e=(0,o.yK)((e=>({icon:{height:12,width:12,color:e.invoiceGreen}})),[]);return(0,Q.r)(e.icon)}function ce(){const e=(0,o.yK)((()=>({icon:{height:12,width:12,color:J.ZP.red}})),[]);return(0,X.t)(e.icon)}function ue(e){const{domainName:t,status:i}=e,n=(0,o.yK)((()=>({container:{display:"flex",flexDirection:"row",alignItems:"center",fontSize:12,gap:4,minHeight:20,width:"100%",color:J.ZP.red}})),[]);let a;return t&&("inuse"===i||"current-space"===i?a=(0,T.jsx)(l.FormattedMessage,{id:"sites.domainInput.inuse",defaultMessage:"{domainName} is not available.",values:{domainName:p.Bk({domainName:t,domainType:"default"})}}):"disallowed"===i&&(a=(0,T.jsx)(l.FormattedMessage,{id:"sites.domainInput.disallowed",defaultMessage:"{domainName} is not allowed.",values:{domainName:p.Bk({domainName:t,domainType:"default"})}}))),(0,T.jsx)("div",{style:n.container,children:a})}function me(e){const{spaceId:t,domain:i,onClose:n}=e;return(0,T.jsx)(Y.c,{isOpen:!0,onDismiss:n,areaConstraint:{width:{min:450,max:450}},children:(0,T.jsx)(pe,{spaceId:t,domain:i,onClose:n})})}function pe(e){const{spaceId:t,domain:i,onClose:s}=e,o=(0,a.O7)(),d=i.domain_name,[l,r]=(0,n.useState)(d),[c,u]=(0,n.useState)(),m=d!==l&&"available"===c,p=(0,n.useCallback)((async()=>{m&&l&&(await async function(e){const{environment:t,spaceId:i,domainId:n,domainName:a,isDefault:s}=e;if(M.Nm()&&s)return void(await w.u3({environment:t,spaceId:i,domain:a}));const o=await b.updatePublicDomain(t,{spaceId:i,domainId:n,domainName:a,isAutogenerated:!1});"success"===o.type?I.Z.getData(t,{spaceId:i},!0):D.showError(o)}({environment:o,spaceId:t,domainId:i.id,domainName:l,isDefault:i.is_default}),s())}),[m,o,t,i,l,s]);return(0,T.jsx)(Z.gv.Provider,{value:s,children:(0,T.jsx)(N.sR,{header:(0,T.jsx)(xe,{}),footer:(0,T.jsx)(ge,{isDisabled:!m,onClick:p}),children:(0,T.jsx)(de,{spaceId:t,domainName:l,setDomainName:r,domainAvailabilityStatus:c,setDomainAvailabilityStatus:u})})})}function xe(){return(0,T.jsx)(N.vI,{iconAndTitle:(0,T.jsx)(N.kC,{iconGroup:q.U,title:(0,T.jsx)(l.FormattedMessage,{id:"sites.editDomain.title",defaultMessage:"Edit existing domain"})}),description:(0,T.jsx)(l.FormattedMessage,{id:"sites.editDomain.subtitle",defaultMessage:"This domain change will apply to all sites that currently use this domain."})})}function ge(e){const{isDisabled:t,onClick:i}=e;return(0,T.jsx)(N.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,T.jsx)(l.FormattedMessage,{id:"sites.editDomain.save",defaultMessage:"Save changes"}),isDisabled:t,onClick:i}],secondaryButtons:[{buttonType:"dismiss"}]})}var fe=i(75553),ye=i(23512),Ce=i(893),he=i(95477);function je(e){const{domainName:t,domainId:i}=e,s=(0,a.O7)(),d=(0,l.useIntl)(),c=function(e){if("local"===e.env){const t=e.publicDomainName.indexOf(":");return`external.${-1===t?e.publicDomainName:e.publicDomainName.substring(0,t)}`}return`external.${e.publicDomainName}`}(he.default),u=t?function(e){return`_notion-dcv.${e}`}(t):"",m=(0,o.yK)((e=>({instructionList:{display:"flex",flexDirection:"column",marginTop:16},instructionRow:{display:"flex",flexDirection:"row",marginBottom:24},instructionNumber:{background:e.surface.wash,borderRadius:"100%",height:24,width:24,minWidth:24,display:"flex",justifyContent:"center",alignItems:"center"},instructionContainer:{display:"flex",flexDirection:"column",rowGap:10,marginLeft:10,marginRight:6,minWidth:0,width:"100%",maxWidth:"100%"},inputLabel:{paddingBottom:2},inputRow:{display:"flex",flexDirection:"row",alignItems:"center",border:`1px solid ${e.regularDividerColor}`,borderRadius:6,height:32,background:e.inputBackground,cursor:"text"},fakeInput:{flexGrow:1,fontFamily:"monospace",paddingLeft:8,paddingTop:6,paddingBottom:6,...te.Z.textOverflowStyle},copyButton:{boxShadow:void 0,borderRadius:"0px 6px 6px 0px",height:"100%",width:32,borderLeft:`1px solid ${e.regularDividerColor}`}})),[]),p=(0,n.useCallback)((e=>Ce.RD({environment:s,stringValue:e,copiedMessage:Ce.tq.copiedToClipboard})),[s]);return(0,T.jsxs)("div",{style:m.instructionList,children:[(0,T.jsxs)("div",{style:m.instructionRow,children:[(0,T.jsx)("div",{style:m.instructionNumber,children:(0,ye.uf)(1,void 0,d)}),(0,T.jsxs)("div",{style:m.instructionContainer,children:[(0,T.jsx)(r.Z,{isMultiline:!0,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setCnameInstructions",defaultMessage:"Go to your DNS provider and add a CNAME record for the domain you want to connect. Set the CNAME target to:"})}),(0,T.jsxs)("div",{style:m.inputRow,children:[(0,T.jsx)(r.Z,{isSecondaryColor:!0,style:m.fakeInput,children:c}),(0,T.jsx)(C.Z,{onClick:()=>p(c),style:m.copyButton,ariaLabel:"copy",hasBackground:!0,icon:fe.U,showShadow:!0})]})]})]}),(0,T.jsxs)("div",{style:m.instructionRow,children:[(0,T.jsx)(r.Z,{style:m.instructionNumber,children:(0,ye.uf)(2,void 0,d)}),(0,T.jsxs)("div",{style:m.instructionContainer,children:[(0,T.jsx)(r.Z,{isMultiline:!0,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setTxtValueInstructions",defaultMessage:"Also add a TXT record for the domain."})}),(0,T.jsxs)("div",{children:[(0,T.jsx)(r.Z,{isSmall:!0,style:m.inputLabel,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setTxtNameLabel",defaultMessage:"TXT Record Name"})}),(0,T.jsxs)("div",{style:m.inputRow,children:[(0,T.jsx)(r.Z,{isSecondaryColor:!0,style:m.fakeInput,children:u}),(0,T.jsx)(C.Z,{onClick:()=>p(u),style:m.copyButton,ariaLabel:"copy",hasBackground:!0,icon:fe.U,showShadow:!0})]})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(r.Z,{isSmall:!0,style:m.inputLabel,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.setTxtValueLabel",defaultMessage:"TXT Record Value"})}),(0,T.jsxs)("div",{style:m.inputRow,children:[(0,T.jsx)(r.Z,{isSecondaryColor:!0,style:m.fakeInput,children:i}),(0,T.jsx)(C.Z,{onClick:()=>p(i),style:m.copyButton,ariaLabel:"copy",hasBackground:!0,icon:fe.U,showShadow:!0})]})]})]})]}),(0,T.jsxs)("div",{style:m.instructionRow,children:[(0,T.jsx)(r.Z,{style:m.instructionNumber,children:(0,ye.uf)(3,void 0,d)}),(0,T.jsx)("div",{style:m.instructionContainer,children:(0,T.jsx)(r.Z,{isMultiline:!0,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.notifyVerifyLiveDelay",defaultMessage:"It’ll take a couple minutes to verify your domain. Notion will send you an email once everything is set."})})})]})]})}function ve(e){const{domain:t,onClose:i}=e;return(0,T.jsx)(Y.c,{isOpen:!0,onDismiss:i,areaConstraint:{width:{min:450,max:450}},children:(0,T.jsx)(be,{domain:t,onClose:i})})}function be(e){const{domain:t,onClose:i}=e;return(0,T.jsx)(Z.gv.Provider,{value:i,children:(0,T.jsx)(N.sR,{header:(0,T.jsx)(De,{}),footer:(0,T.jsx)(we,{onClick:i}),children:(0,T.jsx)(je,{domainId:t.id,domainName:t.domain_name})})})}function De(){return(0,T.jsx)(N.vI,{iconAndTitle:(0,T.jsx)(N.kC,{iconGroup:q.U,title:(0,T.jsx)(l.FormattedMessage,{id:"sites.validateCustomDomain.title",defaultMessage:"Verification Instructions"})}),description:(0,T.jsx)(l.FormattedMessage,{id:"sites.validateCustomDomain.subtitle",defaultMessage:"Follow the instructions below"})})}function we(e){const{onClick:t}=e;return(0,T.jsx)(N.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,T.jsx)(l.FormattedMessage,{id:"sites.validateCustomDomain.done",defaultMessage:"Done"}),onClick:t}]})}const Me=(0,l.defineMessages)({deleteConfirmationTitle:{id:"sites.deleteDomain.confirmationTitle",defaultMessage:"Delete domain?"},deleteConfirmationDescription:{id:"sites.deleteDomain.confirmationCaption",defaultMessage:"You will no longer be able to use {domainName} for publishing."},deleteConfirmationButton:{id:"sites.deleteDomain.deleteButton",defaultMessage:"Delete domain"}});function Ie(e){const{spaceId:t,domain:i,disabled:s}=e,[d,r]=(0,n.useState)(),c=(0,a.O7)(),u=(0,o.yK)((()=>({editButtonIcon:{width:18,height:18}})),[]);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(y.ZP,{alignmentToOrigin:v.v.End,renderOrigin:e=>(0,T.jsx)(h.ZP,{disableTooltip:!s,renderTooltip:()=>(0,T.jsx)(l.FormattedMessage,{id:"sites.editDomain.noEditAccess",defaultMessage:"Only workspace owners can edit the domain."}),placement:v.u.Bottom,render:t=>(0,T.jsx)(C.Z,{...(0,j.Z)(t,e),iconStyle:u.editButtonIcon,ariaLabel:"Edit domain",icon:f.O,disabled:s})}),popupType:y.Z4.Popup,render:e=>(0,T.jsx)(U,{spaceId:t,domain:i,parent:e,onEditClick:()=>r("edit"),onValidateClick:()=>r("validate"),onDeleteClick:()=>r("confirmDelete")})}),"edit"===d&&(0,T.jsx)(me,{spaceId:t,domain:i,onClose:()=>r(void 0)}),"validate"===d&&(0,T.jsx)(ve,{domain:i,onClose:()=>r(void 0)}),"confirmDelete"===d&&(0,T.jsx)(F,{iconGroup:g,title:Me.deleteConfirmationTitle,description:Me.deleteConfirmationDescription,descriptionValues:{domainName:p.Bk({domainName:i.domain_name,domainType:i.domain_type})},confirmationButton:Me.deleteConfirmationButton,onConfirm:async()=>{await async function(e){const{environment:t,spaceId:i,domainId:n}=e,a=await b.deletePublicDomain(t,{spaceId:i,domainId:n});"success"===a.type?I.Z.getData(t,{spaceId:i},!0):D.showError(a)}({environment:c,spaceId:t,domainId:i.id})},onClose:()=>r(void 0)})]})}var ke=i(90309);function Se(e,t,i){return"invalid"===e?t.accentColors.red[i]:"active"===e?t.accentColors.green[i]:t.accentColors.yellow[i]}function Be(e){const{domainStatus:t}=e;return"invalid"===t?(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusInvalid",defaultMessage:"Invalid"}):"active"===t?(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusLive",defaultMessage:"Live"}):(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.domainStatusPending",defaultMessage:"Pending"})}function Ne(e){const{domainStatus:t}=e,i=(0,o.yK)((e=>({container:{display:"flex",alignItems:"center",gap:4,width:"fit-content",paddingLeft:8,paddingRight:8,borderRadius:10,backgroundColor:Se(t,e,100)},dot:{borderRadius:99,height:8,width:8,backgroundColor:Se(t,e,500)}})),[t]);return(0,T.jsxs)("div",{style:i.container,children:[(0,T.jsx)("div",{style:i.dot}),(0,T.jsx)(Be,{domainStatus:t})]})}var Ze=i(86854),Te=i(64921);function Fe(){return(0,T.jsx)(N.vI,{iconAndTitle:(0,T.jsx)(N.kC,{iconGroup:q.U,title:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomain.title",defaultMessage:"Connect new domain"})}),description:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.subtitle",defaultMessage:"Follow the instructions below"})})}function Pe(e){const{onClick:t}=e;return(0,T.jsx)(N.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomainDnsSettings.done",defaultMessage:"Done"}),onClick:t}]})}const Re=(0,l.defineMessages)({customDomainInputPlaceholder:{id:"sites.customDomainInput.placeholder",defaultMessage:"Your domain"}});function Le(){return(0,T.jsx)(N.vI,{iconAndTitle:(0,T.jsx)(N.kC,{iconGroup:q.U,title:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomain.title",defaultMessage:"Connect new domain"})}),description:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomain.subtitle",defaultMessage:"Your workspace can own up to 1 free Notion domains"})})}function Ve(e){const{isDisabled:t,onClick:i}=e;return(0,T.jsx)(N.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,T.jsx)(l.FormattedMessage,{id:"sites.newCustomDomain.create",defaultMessage:"Continue"}),isDisabled:t,onClick:i}],secondaryButtons:[{buttonType:"dismiss"}]})}function Ae(){return(0,T.jsx)(N.vI,{iconAndTitle:(0,T.jsx)(N.kC,{iconGroup:q.U,title:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDefaultDomain.title",defaultMessage:"Create a new Notion domain"})}),description:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDefaultDomain.subtitle",defaultMessage:"Your workspace can own up to 5 free Notion domains"})})}function He(e){const{isDisabled:t,onClick:i}=e;return(0,T.jsx)(N.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.create",defaultMessage:"Create domain"}),isDisabled:t,onClick:i}],secondaryButtons:[{buttonType:"dismiss"}]})}const Ke=(0,x.IU)("plusWithBorder",{viewBox:"0 0 22 22",svg:(0,T.jsx)("path",{d:"M20.4336 1.61719C21.0273 2.21094 21.4023 2.92187 21.5586 3.75C21.7227 4.57031 21.8047 5.48047 21.8047 6.48047V15.5859C21.8047 16.5938 21.7227 17.5078 21.5586 18.3281C21.4023 19.1484 21.0273 19.8594 20.4336 20.4609C19.832 21.0547 19.1172 21.4336 18.2891 21.5977C17.4609 21.7617 16.5469 21.8438 15.5469 21.8438H6.44141C5.44141 21.8438 4.52734 21.7617 3.69922 21.5977C2.87891 21.4336 2.16797 21.0547 1.56641 20.4609C0.964844 19.8594 0.585938 19.1484 0.429688 18.3281C0.273438 17.5078 0.195312 16.5938 0.195312 15.5859V6.45703C0.195312 5.47266 0.273438 4.57031 0.429688 3.75C0.59375 2.92969 0.972656 2.21875 1.56641 1.61719C2.16797 1.02344 2.87891 0.644531 3.69922 0.480469C4.52734 0.316406 5.43359 0.234375 6.41797 0.234375H15.5469C16.5469 0.234375 17.4609 0.316406 18.2891 0.480469C19.1172 0.644531 19.832 1.02344 20.4336 1.61719ZM19.918 6.16406C19.918 5.5625 19.8633 4.97266 19.7539 4.39453C19.6445 3.81641 19.4102 3.35156 19.0508 3C18.6992 2.64062 18.2305 2.40625 17.6445 2.29688C17.0664 2.17969 16.4766 2.12109 15.875 2.12109H6.16016C5.54297 2.12109 4.9375 2.17969 4.34375 2.29688C3.75781 2.40625 3.28906 2.63672 2.9375 2.98828C2.58594 3.34766 2.35547 3.82031 2.24609 4.40625C2.13672 4.98438 2.08203 5.58203 2.08203 6.19922V15.9141C2.08203 16.5156 2.13672 17.1055 2.24609 17.6836C2.35547 18.2617 2.58594 18.7266 2.9375 19.0781C3.29688 19.4297 3.76562 19.6641 4.34375 19.7812C4.92969 19.8984 5.52344 19.957 6.125 19.957H15.875C16.4766 19.957 17.0664 19.8984 17.6445 19.7812C18.2305 19.6719 18.6992 19.4375 19.0508 19.0781C19.4023 18.7266 19.6328 18.2617 19.7422 17.6836C19.8594 17.1055 19.918 16.5156 19.918 15.9141V6.16406ZM5.57422 11.0391C5.57422 10.7422 5.66406 10.5039 5.84375 10.3242C6.03125 10.1367 6.27734 10.043 6.58203 10.043H10.0273V6.59766C10.0273 6.30078 10.1172 6.05859 10.2969 5.87109C10.4766 5.68359 10.707 5.58984 10.9883 5.58984C11.2852 5.58984 11.5234 5.68359 11.7031 5.87109C11.8906 6.05078 11.9844 6.29297 11.9844 6.59766V10.043H15.4414C15.7383 10.043 15.9766 10.1367 16.1562 10.3242C16.3438 10.5039 16.4375 10.7422 16.4375 11.0391C16.4375 11.3203 16.3438 11.5508 16.1562 11.7305C15.9766 11.9102 15.7383 12 15.4414 12H11.9844V15.457C11.9844 15.7539 11.8906 15.9961 11.7031 16.1836C11.5234 16.3633 11.2852 16.4531 10.9883 16.4531C10.707 16.4531 10.4766 16.3633 10.2969 16.1836C10.1172 15.9961 10.0273 15.7539 10.0273 15.457V12H6.58203C6.28516 12 6.04297 11.9102 5.85547 11.7305C5.66797 11.5508 5.57422 11.3203 5.57422 11.0391Z"})});var Oe=i(63296),_e=i(46978);function Ge(){return(0,T.jsx)(N.vI,{iconAndTitle:(0,T.jsx)(N.kC,{iconGroup:q.U,title:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.title",defaultMessage:"New domain"})}),description:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.subtitle",defaultMessage:"Create a unique domain for your Notion site"})})}function ze(e){const{isDomainTypeDefault:t,setDomainCreateStep:i}=e;return(0,T.jsx)(N.a6,{layout:"vertical",primaryButtons:[{buttonType:"primary",label:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.continue",defaultMessage:"Continue"}),onClick:()=>{i(t?"NewDefaultDomain":"NewCustomDomain")}}],secondaryButtons:[{buttonType:"dismiss"}]})}function Ue(e){const{domainType:t,setDomainType:i}=e,n="default"===t,a="custom"===t,s=(0,o.yK)((e=>({buttonIcon:{alignSelf:"start",color:e.mediumTextColor,height:14,width:14,marginTop:3,marginLeft:-4,marginRight:6},newDomainButtonContainer:{width:"100%",display:"flex",flexDirection:"column",gap:6},newDomainButton:{display:"flex",flexDirection:"row",flex:1,width:"100%",paddingTop:13,paddingBottom:10},buttonHoverClickStyle:{background:"transparent"},defaultDomainButtonBorder:{borderColor:n?e.blueColor:e.outlineButtonBorder},customDomainButtonBorder:{borderColor:a?e.blueColor:e.outlineButtonBorder},newDomainButtonLabel:{display:"flex",flexDirection:"column",flex:1}})),[n,a]);return(0,T.jsxs)("div",{style:s.newDomainButtonContainer,children:[(0,T.jsxs)(Oe.Z,{style:{...s.newDomainButton,...s.defaultDomainButtonBorder},hoveredStyle:s.buttonHoverClickStyle,pressedStyle:s.buttonHoverClickStyle,onClick:()=>i("default"),children:[Ke(s.buttonIcon),(0,T.jsxs)("div",{style:s.newDomainButtonLabel,children:[(0,T.jsx)(r.Z,{children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.notionButtonTitle",defaultMessage:"Notion domain"})}),(0,T.jsx)(r.Z,{isSmall:!0,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.notionButtonDescription",defaultMessage:"Create a new .notion.site"})})]}),(0,T.jsx)(_e.Z,{isSelected:n})]}),(0,T.jsxs)(Oe.Z,{style:{...s.newDomainButton,...s.customDomainButtonBorder},hoveredStyle:s.buttonHoverClickStyle,pressedStyle:s.buttonHoverClickStyle,onClick:()=>i("custom"),children:[A(s.buttonIcon),(0,T.jsxs)("div",{style:s.newDomainButtonLabel,children:[(0,T.jsx)(r.Z,{children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.customButtonTitle",defaultMessage:"Custom domain"})}),(0,T.jsx)(r.Z,{isSmall:!0,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.newDomain.customButtonDescription",defaultMessage:"Connect an existing domain you own"})})]}),(0,T.jsx)(_e.Z,{isSelected:a})]})]})}const Ee={SelectDomainType:function(e){const{onClose:t,setDomainCreateStep:i}=e,[a,s]=(0,n.useState)("default");return(0,T.jsx)(Z.gv.Provider,{value:t,children:(0,T.jsx)(N.sR,{header:(0,T.jsx)(Ge,{}),footer:(0,T.jsx)(ze,{isDomainTypeDefault:"default"===a,setDomainCreateStep:i}),children:(0,T.jsx)(Ue,{domainType:a,setDomainType:s})})})},NewDefaultDomain:function(e){const{spaceId:t,onClose:i,domainName:s,setDomainName:o}=e,d=(0,a.O7)(),[l,r]=(0,n.useState)(),c=s&&"available"===l,u=(0,n.useCallback)((async()=>{s&&(await k({environment:d,spaceId:t,domainName:s,domainType:"default"}),i())}),[t,d,s,i]);return(0,T.jsx)(Z.gv.Provider,{value:i,children:(0,T.jsx)(N.sR,{header:(0,T.jsx)(Ae,{}),footer:(0,T.jsx)(He,{isDisabled:!c,onClick:u}),children:(0,T.jsx)(de,{spaceId:t,domainName:s,setDomainName:o,domainAvailabilityStatus:l,setDomainAvailabilityStatus:r})})})},NewCustomDomain:function(e){const{spaceId:t,onClose:i,setDomainCreateStep:s,setDomainId:d,domainName:l,setDomainName:r}=e,c=(0,a.O7)(),u=Boolean(l),m=(0,o.yK)((()=>({input:{padding:"4px 6px",width:"100%"}})),[]),p=(0,n.useCallback)((async()=>{if(l){const e=await k({environment:c,spaceId:t,domainName:l,domainType:"custom"});if(!e)return;d(e),s("CustomDomainValidation")}}),[t,c,l,d,s]);return(0,T.jsx)(Z.gv.Provider,{value:i,children:(0,T.jsx)(N.sR,{header:(0,T.jsx)(Le,{}),footer:(0,T.jsx)(Ve,{isDisabled:!u,onClick:p}),children:(0,T.jsx)(ie.Z,{type:"text",style:m.input,value:l,placeholder:ae.default.formatMessage(Re.customDomainInputPlaceholder),onChange:e=>r(e.target.value)})})})},CustomDomainValidation:function(e){const{onClose:t,domainId:i="",domainName:n=""}=e;return(0,T.jsx)(Z.gv.Provider,{value:t,children:(0,T.jsx)(N.sR,{header:(0,T.jsx)(Fe,{}),footer:(0,T.jsx)(Pe,{onClick:t}),children:(0,T.jsx)(je,{domainId:i,domainName:n})})})}};function $e(e){const{spaceId:t,onClose:i}=e,[a,s]=(0,n.useState)(void 0),[o,d]=(0,n.useState)(void 0),[l,r]=(0,n.useState)("SelectDomainType"),c=Ee[l];return(0,T.jsx)(Y.c,{isOpen:!0,onDismiss:i,areaConstraint:{width:{min:450,max:450}},children:(0,T.jsx)(c,{spaceId:t,domainId:a,domainName:o,setDomainId:s,setDomainName:d,setDomainCreateStep:r,onClose:i})})}function We(e){const{spaceStore:t}=e,i=(0,a.O7)(),[d,r]=(0,n.useState)(!1),c=(0,s.VK)((()=>t.canAdmin()),[t]),u=(0,s.VK)((()=>{var e;return(null===(e=I.Z.getData(i,{spaceId:t.getSpaceId()}))||void 0===e||null===(e=e.publicDomains)||void 0===e?void 0:e.length)||0}),[i,t])===Ze.BQ,m=!c||u,p=(0,o.yK)((e=>({newDomainButton:{paddingTop:5,paddingBottom:5,paddingLeft:12,paddingRight:12,borderRadius:6,border:`1px solid ${e.regularDividerColor}`}})),[]),x=(0,n.useCallback)((()=>{r(!0)}),[r]),g=(0,n.useCallback)((()=>{r(!1)}),[r]);if(!(0,s.VK)((()=>M.uR()),[]))return null;const f=c?u?(0,T.jsx)(l.FormattedMessage,{id:"sites.createDomain.maxDomainsCreated",defaultMessage:"Only {maximumDomains} domains can be created for this workspace.",values:{maximumDomains:Ze.BQ}}):null:(0,T.jsx)(l.FormattedMessage,{id:"sites.createDomain.noCreateAccess",defaultMessage:"Only workspace owners can create a domain."});return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(h.ZP,{disableTooltip:!m,renderTooltip:()=>f,placement:h.ug.Bottom,render:e=>(0,T.jsx)(Te.Z,{...e,onClick:x,disabled:m,style:p.newDomainButton,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.createDomain.new",defaultMessage:"New domain"})})}),d&&(0,T.jsx)($e,{spaceId:t.id,onClose:g})]})}var qe=i(13148),Ye=i(32081),Qe=i(59054),Xe=i(35840),Je=i(53437),et=i(11470),tt=i(28020),it=i(68973);function nt(e){const{initialFocus:t,onSiteSelection:i}=e,[a,s]=(0,n.useState)(""),[d,l]=(0,n.useState)(!1),r=(0,o.yK)((()=>({resultsPopup:{width:250}})),[]),c=(0,n.useCallback)((e=>{i(e),l(!1)}),[i,l]),u=(0,n.useCallback)((()=>{l(!1)}),[l]);return(0,T.jsx)(Je.ZP,{alignmentToOrigin:Je.ZP.Alignment.Start,origin:(0,T.jsx)(at,{initialFocus:t,query:a,setQuery:s,setShowResults:l}),originGap:3,open:d,popupType:Je.ZP.PopupType.Popup,style:r.resultsPopup,render:()=>(0,T.jsx)(st,{query:a,onSelection:c}),onDismiss:u})}function at(e){const{initialFocus:t,query:i,setQuery:a,setShowResults:s}=e,d=(0,l.useIntl)(),r=(0,o.yK)((e=>({input:{display:"flex",flex:1,paddingLeft:4},icon:{fill:e.mediumIconColor,width:12,height:12}})),[]),c=(0,n.useCallback)((e=>{a(e.target.value),s(!0)}),[a,s]),u=(0,n.useCallback)((()=>{s(!0)}),[s]),m=(0,n.useCallback)((e=>{"Escape"===e.key&&s(!1)}),[s]);return(0,T.jsx)(ie.Z,{type:"text",focusInitial:t,onChange:c,onFocus:u,onKeyDown:m,format:ie.B.Transparent,style:r.input,value:i,left:(0,Xe.R)(r.icon),placeholder:d.formatMessage({id:"sites.siteSearchInput.placeholder",defaultMessage:"Select a page"})})}function st(e){const{query:t,onSelection:i}=e,n=(0,a.O7)(),c=(0,o.yK)((()=>({loadingSpinner:{textAlign:"center",visibility:"visible",display:"inline",marginLeft:8}})),[]),u=(0,s.VK)((()=>(0,tt.RM)()),[]),[{value:p,status:x}]=(0,Qe.r5)((()=>it.a2(t,n)),[t,n]);if(!(t||p&&0!==p.length))return null;return(0,T.jsx)(_.Z,{type:_.i.Vertical,sections:[{key:"sites-search-results",render:e=>(0,T.jsx)(G.Z,{...e}),items:"idle"===x||"pending"===x?[{key:"results-loading-spinner",render:()=>(0,T.jsx)(ne.Z,{style:c.loadingSpinner}),action:()=>{}}]:u&&p&&0!==p.length?p.map((e=>{const t=m.G.createChildStore(u,{table:d.iU,id:e.id});return{key:e.id,render:e=>(0,T.jsx)(et.Z,{store:t,...e}),action:()=>{i(e.id)}}})):[{key:"empty-results",render:()=>(0,T.jsx)(r.Z,{isSmall:!0,style:{marginLeft:8},children:(0,T.jsx)(l.FormattedMessage,{id:"sites.publicHomePageSearch.noResults",defaultMessage:"No results"})}),action:()=>{}}]}],initialFocus:void 0})}function ot(e){const{spaceId:t,domain:i,publicHomePageStore:s,disabled:d,style:l}=e,r=(0,a.O7)(),[c,u]=(0,n.useState)(!1),m=(0,o.yK)((()=>({previewContainer:{display:"flex"},closeIcon:{marginRight:12}})),[]),p=(0,n.useCallback)((()=>{u(!0)}),[u]),x=(0,n.useCallback)((async e=>{e.stopPropagation(),await S({environment:r,spaceId:t,domainId:i.id,publicHomePageId:void 0,isDefault:i.is_default})}),[r,t,i.id,i.is_default]),g=(0,n.useCallback)((async e=>{e&&await S({environment:r,spaceId:t,domainId:i.id,publicHomePageId:e,isDefault:i.is_default}),u(!1)}),[r,t,i.id,u,i.is_default]);return d?(0,T.jsx)(Ye.Z,{store:s,disableNavigationToPageOnClick:!0,style:l}):s&&!c?(0,T.jsxs)("div",{style:m.previewContainer,onClick:p,children:[(0,T.jsx)(Ye.Z,{store:s,disableNavigationToPageOnClick:!0,style:l}),(0,T.jsx)(C.Z,{icon:qe.U,ariaLabel:"Clear home page",onClick:x,style:m.closeIcon})]}):(0,T.jsx)(nt,{initialFocus:c,onSiteSelection:g})}const dt=[{key:"name",header:(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.domainColumnHeader",defaultMessage:"Domain"}),style:{width:"40%"}},{key:"home-page",header:(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.homePageColumnHeader",defaultMessage:"Home page"}),style:{width:"40%"}},{key:"status",header:(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.statusColumnHeader",defaultMessage:"Status"}),style:{width:"15%"}},{key:"edit",header:(0,T.jsx)(T.Fragment,{}),style:{width:"5%"}}];function lt(e){const{spaceStore:t}=e,i=(0,o.yK)((()=>({header:{display:"flex",justifyContent:"space-between",alignItems:"center"},title:{display:"flex",flexDirection:"column",flex:1},tableBox:{tableLayout:"fixed"}})),[]),n=function(e){const t=(0,a.O7)(),i=(0,s.VK)((()=>e.canAdmin()),[e]),n=(0,s.VK)((()=>p.Vg({environment:t,spaceId:e.id})),[t,e]),l=(0,o.yK)((()=>({publicHomePageContainer:{paddingLeft:0,paddingRight:0,maxWidth:"100%"}})),[]),r=n.map((t=>{const n=t.id,a=t.domain_name,s=t.domain_status,o=t.domain_type,r=t.public_home_page?m.G.createChildStore(e,{table:d.iU,id:t.public_home_page}):void 0;return{key:a,columns:[(0,T.jsx)(ke.Z,{domainName:a,domainType:o},`${n}`),(0,T.jsx)(ot,{spaceId:e.id,domain:t,publicHomePageStore:r,disabled:!i,style:l.publicHomePageContainer},`${n}-home-page`),(0,T.jsx)(Ne,{domainStatus:s},`${n}-status`),(0,T.jsx)(Ie,{spaceId:e.id,domain:t,disabled:!i},`${n}-actions`)]}}));return r}(t);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(c.Z,{style:i.header,children:[(0,T.jsxs)("div",{style:i.title,children:[(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.title",defaultMessage:"Domains"}),(0,T.jsx)(r.Z,{isSmall:!0,children:(0,T.jsx)(l.FormattedMessage,{id:"sites.domains.caption",defaultMessage:"Pages shared to web will be under one of the domains below."})})]}),(0,T.jsx)(We,{spaceStore:t})]}),(0,T.jsx)(u.Z,{columns:dt,rows:n,tableStyle:i.tableBox})]})}},14581:(e,t,i)=>{i.d(t,{h:()=>n});const n=(0,i(45238).CZ)("exclamationMarkTriangle",{default:{loader:()=>i.e(5187).then(i.bind(i,15187)),size:20},small:{loader:()=>i.e(9250).then(i.bind(i,79250)),size:16},mini:{loader:()=>i.e(3173).then(i.bind(i,93173)),size:14},large:{loader:()=>i.e(3339).then(i.bind(i,43339)),size:24}})},84096:(e,t,i)=>{i.d(t,{U:()=>n});const n=(0,i(45238).CZ)("globe",{default:{loader:()=>i.e(5978).then(i.bind(i,5978)),size:20},small:{loader:()=>i.e(7024).then(i.bind(i,46057)),size:16},mini:{loader:()=>i.e(1545).then(i.bind(i,11545)),size:14},large:{loader:()=>i.e(2669).then(i.bind(i,62669)),size:24}})},91315:(e,t,i)=>{i.d(t,{r:()=>s});i(67294);var n=i(45238),a=i(85893);const s=(0,n.IU)("circleCheckFilled",{viewBox:"0 0 16 16",svg:(0,a.jsx)("path",{d:"M8 16c4.377 0 8-3.631 8-8 0-4.376-3.631-8-8.008-8C3.624 0 0 3.624 0 8c0 4.369 3.631 8 8 8zm-.886-4.165c-.267 0-.487-.11-.69-.384l-1.97-2.416a.852.852 0 01-.187-.51c0-.352.274-.643.627-.643.228 0 .4.07.596.33l1.592 2.055 3.35-5.38c.148-.236.352-.362.556-.362.345 0 .667.236.667.604 0 .173-.102.353-.196.518l-3.686 5.804c-.165.259-.393.384-.66.384z"})})},90334:(e,t,i)=>{i.d(t,{O:()=>s});i(67294);var n=i(45238),a=i(85893);const s=(0,n.IU)("ellipsis",{viewBox:"0 0 16 16",svg:(0,a.jsx)("path",{d:"M2.887 9.014c.273 0 .52-.064.738-.192.219-.132.394-.307.526-.526.133-.219.199-.46.199-.725 0-.405-.142-.747-.424-1.025a1.41 1.41 0 00-1.04-.417c-.264 0-.505.066-.724.198a1.412 1.412 0 00-.718 1.244c0 .265.064.506.192.725.132.219.307.394.526.526.219.128.46.192.725.192zm5.113 0a1.412 1.412 0 001.244-.718c.132-.219.198-.46.198-.725 0-.405-.14-.747-.423-1.025A1.386 1.386 0 008 6.129c-.264 0-.506.066-.725.198a1.412 1.412 0 00-.718 1.244c0 .265.064.506.192.725.132.219.308.394.526.526.22.128.46.192.725.192zm5.106 0c.265 0 .506-.064.725-.192.219-.132.394-.307.526-.526.133-.219.199-.46.199-.725 0-.405-.142-.747-.424-1.025a1.394 1.394 0 00-1.026-.417 1.474 1.474 0 00-1.265.718c-.127.218-.19.46-.19.724 0 .265.063.506.19.725.133.219.308.394.527.526.223.128.47.192.738.192z"})})}}]);