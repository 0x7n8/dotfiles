"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4114],{83265:(e,t,a)=>{a.d(t,{Ce:()=>s,IC:()=>d,Jv:()=>p,QF:()=>u,Yc:()=>n,az:()=>o,eO:()=>c,s4:()=>l,ti:()=>i});var r=a(97978);function n(e,t){r.j(e,"workspace_creation_ability",t)}function i(e,t){r.j(e,"workspace_creation_setting_updated",t)}function s(e,t){r.j(e,"claimable_spaces_viewed",t)}function o(e,t){r.j(e,"space_transfer_requested",t)}function l(e,t){r.j(e,"space_transfer_completed",t)}function c(e,t){r.j(e,"space_claim_upgrade_requested",t)}function d(e,t){r.j(e,"space_claim_upgrade_completed",t)}function u(e,t){r.j(e,"space_claim_deletion_started",t)}function p(e,t){r.j(e,"space_claim_deletion_canceled",t)}},85059:(e,t,a)=>{a.r(t),a.d(t,{TransferWorkspaceModal:()=>P});var r=a(67294),n=a(480),i=a(86628),s=a(24405),o=a(15145),l=a(33728),c=a(9291),d=a(1898),u=a(83265),p=a(54642),m=a(47307),g=a(29974),f=a(28020),h=a(78861),C=a(80444),x=a(1743),y=a(50506),S=a(19889),v=a(37810),j=a(6258),k=a(61519),w=a(74194),M=a(89728),b=a(58297),I=a(64369),T=a(33907),U=a(45238),W=a(85893);const _=(0,U.IU)("commentReply",{viewBox:"0 0 12 12",svg:(0,W.jsx)("path",{d:"M11.2324 7.2832C11.2324 4.95117 9.66211 3.33984 7.00195 3.33984H3.32227L1.96875 3.4043L2.99414 2.53711L4.48242 1.08398C4.59961 0.972656 4.67578 0.826172 4.67578 0.632812C4.67578 0.263672 4.41797 0 4.03711 0C3.87305 0 3.69141 0.0761719 3.5625 0.199219L0.205078 3.50977C0.0703125 3.63867 0 3.81445 0 3.99609C0 4.17188 0.0703125 4.34766 0.205078 4.47656L3.5625 7.78711C3.69141 7.91016 3.87305 7.98633 4.03711 7.98633C4.41797 7.98633 4.67578 7.72266 4.67578 7.35352C4.67578 7.16016 4.59961 7.01953 4.48242 6.90234L2.99414 5.44922L1.96875 4.58789L3.32227 4.64648H7.03125C8.90625 4.64648 9.94336 5.71289 9.94336 7.23633C9.94336 8.75977 8.90625 9.87305 7.03125 9.87305H5.66016C5.27344 9.87305 4.99805 10.166 4.99805 10.5234C4.99805 10.8809 5.27344 11.1738 5.66602 11.1738H7.07812C9.69141 11.1738 11.2324 9.63281 11.2324 7.2832Z"})});var V=a(84169);const Z=(0,U.IU)("questionMark",{viewBox:"0 0 20 20",svg:(0,W.jsx)("path",{d:"M9.645 12.826c.26 0 .457-.073.594-.219a.935.935 0 00.233-.574v-.212a2 2 0 01.15-.71c.091-.197.24-.386.444-.568.21-.187.5-.401.869-.643.601-.396 1.07-.831 1.408-1.305.342-.479.512-1.046.512-1.702 0-.693-.173-1.283-.52-1.77a3.258 3.258 0 00-1.394-1.129c-.588-.264-1.246-.396-1.975-.396-.547 0-1.057.08-1.531.239-.47.16-.885.39-1.245.69-.355.301-.63.661-.827 1.08a2.38 2.38 0 00-.17.486 2.205 2.205 0 00-.048.444c0 .237.068.43.205.581.14.146.337.219.588.219a.847.847 0 00.519-.157.905.905 0 00.314-.445c.114-.387.272-.7.472-.936.205-.237.447-.408.725-.513.282-.11.59-.164.923-.164.41 0 .777.073 1.1.219.324.141.581.346.773.615.196.269.294.583.294.943 0 .31-.06.581-.178.814a2.17 2.17 0 01-.513.642c-.223.196-.49.402-.8.616a6.68 6.68 0 00-.922.738 2.965 2.965 0 00-.63.84c-.15.306-.225.65-.225 1.033v.369c0 .26.073.472.219.636.15.16.362.24.636.24zm.013 3.808c.205 0 .392-.05.56-.15.174-.1.31-.235.41-.404a.998.998 0 00.158-.554c0-.2-.052-.385-.157-.553a1.071 1.071 0 00-.41-.397 1.08 1.08 0 00-.56-.15c-.21 0-.4.05-.568.15a1.085 1.085 0 00-.554.95c0 .205.05.39.15.554.1.169.235.303.404.403.168.1.358.15.567.15z"})});var B=a(54497),L=a(96902),E=a(18514),K=a(73063),q=a(16354),F=a(45653);const N={inputLabel:{fontWeight:v.Z.fontWeight.medium,fontSize:14,letterSpacing:-.15,textAlign:"left",width:"100%"},input:{width:"100%",marginTop:8}};function R(e){const t=(0,s.yK)((e=>({avatarContainer:{display:"flex",justifyContent:"center",alignItems:"center"},avatarContainerBadged:{position:"relative"},avatarBadgeIcon:{position:"absolute",left:26,top:26,height:20,width:20},exclamationMarkIcon:{width:"100%",height:18,fill:e.accentColors.yellow[500],stroke:e.modalBackground,strokeWidth:3,paintOrder:"stroke fill",overflow:"visible"},arrowRightIcon:{width:16,height:16,marginLeft:12,marginRight:12,fill:e.mediumIconColor},questionMarkIcon:{width:20,height:20,fill:e.mediumIconColor},userIconPlaceholder:{width:40,height:40,borderRadius:"50%",backgroundColor:e.modalBackground,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:L.v.avatarBoxShadow.light,boxSizing:"content-box",border:`1px solid ${e.lightDividerColor}`},headerStyle:{textAlign:"center"},titleContainer:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:15},title:{fontSize:16,fontWeight:v.Z.fontWeight.medium},description:{marginTop:5,fontWeight:v.Z.fontWeight.regular,textAlign:"center",fontSize:13,lineHeight:"16px",letterSpacing:-.08}})),[]);return(0,W.jsxs)("div",{style:t.headerStyle,children:[(0,W.jsxs)("div",{style:t.avatarContainer,children:[(0,W.jsxs)("div",{style:t.avatarContainerBadged,children:[(0,W.jsx)(F.Z,{size:40,userValue:e.fromUserValue,avatarShouldShowShadow:!0}),(0,W.jsx)("div",{style:t.avatarBadgeIcon,children:(0,B.t)(t.exclamationMarkIcon)})]}),(0,T.n)(t.arrowRightIcon),e.targetUserValue?(0,W.jsx)(F.Z,{size:40,userValue:e.targetUserValue,avatarShouldShowShadow:!0}):(0,W.jsx)("div",{style:t.userIconPlaceholder,children:Z(t.questionMarkIcon)})]}),(0,W.jsxs)("div",{style:t.titleContainer,children:[(0,W.jsx)(I.Z,{style:t.title,children:(0,W.jsx)(c.FormattedMessage,{defaultMessage:"Change workspace account",id:"transferWorkspaceModal.changeAccount.title"})}),(0,W.jsx)(q.Z,{href:(0,E.UY)("guides.domainManagement"),children:(0,W.jsx)(K.Z,{icon:V.m})})]}),(0,W.jsx)(I.Z,{isSecondaryColor:!0,isMultiline:!0,style:t.description,children:e.description})]})}function z(){const e=(0,n.O7)(),t=(0,s.yK)((e=>({backIconStyle:{width:12,height:12,marginRight:7,fill:e.mediumIconColor},secondaryButton:{marginTop:12,justifyContent:"center",fontWeight:v.Z.fontWeight.medium,color:e.lightTextColor,letterSpacing:"-0.154px"}})),[]),a=(0,i.VK)((()=>C.default.state.currentUserRootStore),[]),l=(0,i.VK)((()=>C.default.state.currentUserSettingsStore),[]),d=(0,i.VK)((()=>a&&l),[a,l]),u=(0,r.useCallback)((async()=>{a&&l&&await g.L5({environment:e,userRootStore:a,userSettingsStore:l,skipPendingTransferWorkspaces:!0,pageVisitSource:o.tY.BackForward})}),[e,a,l]);return(0,W.jsxs)(M.Z,{style:t.secondaryButton,onClick:u,disabled:!d,children:[_(t.backIconStyle),(0,W.jsx)(c.FormattedMessage,{id:"transferWorkspaceModal.backToMyWorkspacesButton.label",defaultMessage:"Back to my workspaces"})]})}function D(e){const{currentSpaceStore:t,currentUserValue:a,targetUserId:n,handleConfirm:o,handleBack:l,intl:d}=e,u=(0,s.yK)((e=>({primaryButton:{width:"100%",marginBottom:"10px",marginTop:32},secondaryButton:{color:e.mediumTextColor,fontWeight:v.Z.fontWeight.medium},emailFieldCaption:{textAlign:"center",marginTop:"5px",lineHeight:"15px",fontSize:12,color:e.lightTextColor},inputLabel:N.inputLabel,verificationCodeInputContainer:{marginTop:13},input:N.input,inputContainer:{marginTop:27,width:"100%"},dividerContainer:{marginTop:29},dividerInner:{borderBottomColor:e.regularDividerColor}})),[]),p=(0,i.VK)((()=>t.getName()),[t]),m=(0,i.VK)((()=>j.U6.createChildStore(t,{id:n,table:S.KJ}).getValue()),[t,n]),g=(0,i.VK)((()=>j.U6.createChildStore(t,{id:n,table:S.KJ}).getEmail()),[t,n]),[f,h]=(0,r.useState)(""),C=(0,r.useCallback)((e=>{h(e.currentTarget.value)}),[h]),x=(0,r.useCallback)((async()=>{await o(f)}),[f,o]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(R,{fromUserValue:a,targetUserValue:m,description:(0,W.jsx)(c.FormattedMessage,{defaultMessage:"Transfer {currentSpaceName} to the Notion account associated with {targetUserEmail}.",id:"transferWorkspaceModal.confirmTransfer.description",values:{currentSpaceName:p,targetUserEmail:g}})}),(0,W.jsx)(k.Z,{size:"100%",innerStyle:u.dividerInner,style:u.dividerContainer}),(0,W.jsxs)("div",{style:u.inputContainer,children:[(0,W.jsx)(I.Z,{style:u.inputLabel,children:(0,W.jsx)(c.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.emailLabel",defaultMessage:"Email"})}),(0,W.jsx)(w.Z,{style:u.input,value:g,disabled:!0}),(0,W.jsx)(I.Z,{isSecondaryColor:!0,style:u.emailFieldCaption,children:(0,W.jsx)(c.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.emailDescription",defaultMessage:"We just sent you a temporary verification code.{br}Please check your inbox.",values:{br:(0,W.jsx)("br",{})}})}),(0,W.jsx)("div",{style:u.verificationCodeInputContainer,children:(0,W.jsx)(I.Z,{style:u.inputLabel,children:(0,W.jsx)(c.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.passcodeLabel",defaultMessage:"Verification code"})})})]}),(0,W.jsx)(w.Z,{style:u.input,value:f,onChange:C,onSubmit:x,placeholder:d.formatMessage({id:"transferWorkspaceModal.confirmTransfer.passcodePlaceholder",defaultMessage:"Enter verification code..."}),focusInitial:!0}),(0,W.jsx)(b.Z,{style:u.primaryButton,onClick:x,children:(0,W.jsx)(c.FormattedMessage,{defaultMessage:"Confirm transfer",id:"transferWorkspaceModal.confirmTransfer.confirmButton"})}),(0,W.jsx)(M.Z,{style:u.secondaryButton,onClick:l,children:(0,W.jsx)(c.FormattedMessage,{defaultMessage:"Cancel",id:"transferWorkspaceModal.confirmTransfer.cancelButton"})})]})}var H=a(75246);function O(e){const{currentUserValue:t,currentSpaceStore:a,workspaceTransfer:n,intl:o,handleSubmitEmail:l}=e,d=(0,s.yK)((e=>({primaryButton:{width:"100%",marginTop:32},emailLabel:N.inputLabel,emailInput:N.input,dividerContainer:{marginTop:29},dividerInner:{borderBottomColor:e.regularDividerColor},emphasizedDescriptionText:{fontWeight:v.Z.fontWeight.medium},inputContainer:{marginTop:27,width:"100%"}})),[]),u=(0,i.VK)((()=>t.email),[t]),p=(0,i.VK)((()=>null==a?void 0:a.getName()),[a]),m=(0,i.VK)((()=>j.H2.createChildStore(a,{table:H.bx,id:n.requested_from_space_id}).getName()),[a,n]),[g,f]=(0,r.useState)(""),h=(0,r.useCallback)((()=>{l(g)}),[g,l]);return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(R,{fromUserValue:t,description:(0,W.jsx)(c.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.description",defaultMessage:"{currentWorkspaceName} is associated with {currentUserEmail}. {requestingWorkspaceName} owns {currentUserEmailDomain} and requires that you switch to a personal Notion account to continue using this workspace.{br}{br}Contact {contactEmail} for assistance.",values:{br:(0,W.jsx)("br",{}),currentWorkspaceName:p,currentUserEmail:u,currentUserEmailDomain:u.split("@")[1],requestingWorkspaceName:m,contactEmail:(0,W.jsx)("span",{style:d.emphasizedDescriptionText,children:n.contact_email})}})}),(0,W.jsx)(k.Z,{size:"100%",innerStyle:d.dividerInner,style:d.dividerContainer}),(0,W.jsxs)("div",{style:d.inputContainer,children:[(0,W.jsx)(I.Z,{style:d.emailLabel,children:(0,W.jsx)(c.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.emailLabel",defaultMessage:"Email"})}),(0,W.jsx)(w.Z,{style:d.emailInput,value:g,onChange:e=>{f(e.currentTarget.value)},onSubmit:h,placeholder:o.formatMessage({id:"transferWorkspaceModal.transferRequested.emailPlaceholder",defaultMessage:"Personal-use, Notion account email address..."}),focusInitial:!0})]}),(0,W.jsx)(b.Z,{isLarge:!0,style:d.primaryButton,onClick:h,children:(0,W.jsx)(c.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.continueButton",defaultMessage:"Continue with email"})}),(0,W.jsx)(z,{})]})}function P(e){const{workspaceTransfer:t}=e,a=(0,n.O7)(),S=(0,c.useIntl)(),v=(0,i.VK)((()=>C.default.state.currentSpaceStore),[]),j=(0,i.VK)((()=>C.default.state.currentUserStore),[]),k=(0,i.VK)((()=>C.default.state.currentUserRootStore),[]),w=(0,i.VK)((()=>C.default.state.currentUserSettingsStore),[]),[M,b]=(0,r.useState)({type:"requested"}),I=(0,i.VK)((()=>{var e;return null===(e=(0,f.B7)(a))||void 0===e?void 0:e.getValue()}),[a]),T=(0,s.yK)((e=>({modalInnerStyle:{width:406,padding:"24px 20px 16px 20px",display:"flex",flexDirection:"column",alignItems:"center"}})),[]);if(!v||!j||!I)return null;let U;switch(M.type){case"requested":const e=async e=>{const t=await p.sendVerifyTransferEmail(a,{email:e});"failed"!==t.type?b({type:"confirm",targetUserId:t.data.userId,targetUserEmailDomain:(0,l.Gd)(e)}):m.showError(t)};U=(0,W.jsx)(O,{currentUserValue:I,currentSpaceStore:v,workspaceTransfer:t,handleSubmitEmail:e,intl:S});break;case"confirm":const r=async e=>{const r=M.targetUserId,n=await p.transferWorkspaceToUser(a,{targetUserId:r,spaceId:v.id,transferEmailPasscode:e});if("failed"===n.type)return m.showError(n),void b({type:"requested"});u.s4(a,{newOwner:r,newEmailDomain:M.targetUserEmailDomain||"__UNKNOWN_EMAIL_DOMAIN__",requestingSpaceId:t.requested_from_space_id});const i=h.Z.getSpaceViewStores(a,r).find((e=>e.getSpaceId()===v.id));return i?void(await g.y3({environment:a,userRootStore:k,userSettingsStore:w,spaceViewStore:i,pageVisitSource:o.tY.SwitchSpace,navigationType:"switchingToOrLoadingSpace"})):k&&w?(await g.L5({environment:a,userRootStore:k,userSettingsStore:w,skipPendingTransferWorkspaces:!0,pageVisitSource:o.tY.SwitchSpace}),void b({type:"requested"})):void 0};U=(0,W.jsx)(D,{currentSpaceStore:v,currentUserValue:I,targetUserId:M.targetUserId,handleBack:()=>b({type:"requested"}),handleConfirm:r,intl:S});break;default:(0,d.t1)(M)}return(0,W.jsx)(x.Z,{debugName:"TransferWorkspaceModal",capture:!0,children:(0,W.jsx)(y.Z,{open:!0,innerStyle:T.modalInnerStyle,onDismiss:()=>{},render:()=>U})})}},22686:(e,t,a)=>{a.d(t,{f:()=>i});a(67294);var r=a(45238),n=a(85893);const i=(0,r.IU)("person",{viewBox:"0 0 16 16",svg:(0,n.jsx)("path",{d:"M7.7832 8.00195C9.27344 8.00195 10.5381 6.67578 10.5381 4.95996C10.5381 3.28516 9.2666 2 7.7832 2C6.29297 2 5.01465 3.30566 5.02148 4.97363C5.02148 6.67578 6.28613 8.00195 7.7832 8.00195ZM3.51758 14.3594H12.0352C13.1631 14.3594 13.5527 14.0176 13.5527 13.3887C13.5527 11.6318 11.3242 9.21191 7.77637 9.21191C4.23535 9.21191 2 11.6318 2 13.3887C2 14.0176 2.38965 14.3594 3.51758 14.3594Z"})})},14734:(e,t,a)=>{a.d(t,{X:()=>i});a(67294);var r=a(45238),n=a(85893);const i=(0,r.IU)("personCrossedOut",{viewBox:"0 0 44 44",svg:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("path",{d:"M5.4857 44H0L44 8.56549V13.0061L5.4857 44Z"}),(0,n.jsx)("path",{d:"M39.8048 44H8.66491L25.6448 30.4378C26.9394 30.6489 28.1581 30.9719 29.3009 31.4067C31.5362 32.2374 33.4346 33.326 34.9964 34.6723C36.5725 36.0044 37.7761 37.4367 38.6071 38.9692C39.4525 40.5018 39.8752 41.9555 39.8752 43.3305C39.8752 43.5675 39.8517 43.7906 39.8048 44Z"}),(0,n.jsx)("path",{d:"M30.3971 16.7973C30.3971 16.8668 30.3965 16.9359 30.3952 17.0048L19.3828 25.9192C18.7467 25.7134 18.1339 25.4228 17.5446 25.0473C16.2408 24.2023 15.1876 23.0708 14.3853 21.6528C13.5972 20.2205 13.2032 18.6163 13.2032 16.8403C13.2032 15.0929 13.5972 13.5174 14.3853 12.1137C15.1876 10.7101 16.2408 9.60007 17.5446 8.78366C18.8485 7.96725 20.267 7.55905 21.8001 7.55905C23.3332 7.55905 24.7517 7.96009 26.0556 8.76218C27.3595 9.56426 28.4054 10.6671 29.1935 12.0708C29.9959 13.4601 30.3971 15.0356 30.3971 16.7973Z"})]})})}}]);