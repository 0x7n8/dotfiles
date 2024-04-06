"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4931],{64453:(e,t,n)=>{n.d(t,{P:()=>h});n(57658),n(67294);var i=n(480),a=n(86628),o=n(24405),s=n(15070),r=n(84169),l=n(9291),g=n(37810),d=n(12714),c=n(73063),u=n(12981),m=n(64369),p=n(23189),f=n(85893);function h(e){const{integrationModel:t,integrationConfig:n,spaceStore:h}=e,C=(0,o.yK)((e=>({integrationIcon:{width:40,height:40,borderRadius:6,overflow:"hidden"},title:{marginTop:4,fontSize:17,fontWeight:590,lineHeight:"22px"},subTitle:{fontWeight:g.Z.fontWeight.regular,fontSize:g.Z.fontSize.UISmall.desktop,color:e.lightTextColor,lineHeight:"17px",marginTop:6.5}})),[]),x=(0,i.O7)(),v=(0,l.useIntl)(),j=(0,a.VK)((()=>t.getName()||"Unknown"),[t]),I=(0,a.VK)((()=>t.getCapabilities()),[t]),y=(0,a.VK)((()=>t.getInfo().icon),[t]),w=(0,a.VK)((()=>h.getName()),[h]);let S;(0,s.ms)(I)&&I.webhooks?S=(0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationDescriptionDlp",defaultMessage:"Connect to {integrationName} for real-time monitoring and protection of sensitive content.",values:{integrationName:j}}):I.webhooks&&(S=(0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationDescriptionSiem",defaultMessage:"Connect to {integrationName} for real-time monitoring, alerting, and analysis of your workspace event logs.",values:{integrationName:j}}));const Z=(0,s.ms)(I);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{style:C.integrationIcon,children:(0,f.jsx)(u.Z,{style:C.integrationIcon,src:y})}),(0,f.jsxs)(p.Z,{large:!0,style:C.title,children:[(0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationName",defaultMessage:"Connect {integrationName} to Notion",values:{integrationName:j}}),(0,f.jsx)(c.Z,{icon:r.m,ariaLabel:v.formatMessage({defaultMessage:"Workspace connections settings help button, which navigates to the Notion integration gallery",id:"integrations.configureIntegrationModal.helpButton.label"}),onClick:()=>d.D({environment:x,url:n.integrationGalleryUrl})})]}),(0,f.jsx)(m.Z,{style:C.subTitle,isMultiline:!0,children:(0,f.jsx)("div",{children:S})}),(0,f.jsx)(m.Z,{style:C.subTitle,isMultiline:!0,children:(0,f.jsxs)("div",{children:[I.webhooks&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationScope.webhooks",defaultMessage:"{integrationName} will be authorized to receive event logs on all activity in {spaceName}.",values:{integrationName:j,spaceName:w}})," "]}),Z&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationScope.contentCapabilities",defaultMessage:"{hasPrevious, select, true {For <b>all</b> pages, {integrationName} will also be able to {formattedContentCapabilities}} other {For <b>all</b> pages, {integrationName} will be able to {formattedContentCapabilities}}}.",values:{hasPrevious:I.webhooks,b:e=>(0,f.jsx)("span",{style:{fontWeight:g.Z.fontWeight.semibold},children:e}),integrationName:j,formattedContentCapabilities:b(I)}})," "]}),I.read_user_without_email&&(0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationScope.userCapabilities",defaultMessage:"{hasPrevious, select, true {{integrationName} will also be able to see basic information about all workspace members and guests, including their {formattedUserCapabilities}} other {{integrationName} will be able to see basic information about all workspace members and guests, including their {formattedUserCapabilities}}}.",values:{hasPrevious:I.webhooks||Z,b:e=>(0,f.jsx)("span",{style:{fontWeight:g.Z.fontWeight.semibold},children:e}),integrationName:j,formattedUserCapabilities:M(I)}})]})})]})}function b(e){const t=[];return e.read_content&&t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readContent",defaultMessage:"view content"})),e.read_comment&&t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readComment",defaultMessage:"view comments"})),e.update_content&&t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.updateContent",defaultMessage:"edit content"})),e.insert_comment&&t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.updateComment",defaultMessage:"edit comments"})),e.insert_content&&t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.insertContent",defaultMessage:"create content"})),e.insert_comment&&t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.insertComment",defaultMessage:"create comments"})),(0,f.jsx)(l.FormattedList,{value:t,type:"conjunction"})}function M(e){const t=[];return e.read_user_without_email&&(t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readUserNames",defaultMessage:"names"})),t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readUserProfileImages",defaultMessage:"profile images"}))),e.read_user_with_email&&t.push((0,f.jsx)(l.FormattedMessage,{id:"integrations.configureIntegrationModal.integrationCapabilities.readUserEmails",defaultMessage:"email addresses"})),(0,f.jsx)(l.FormattedList,{value:t,type:"conjunction"})}},78144:(e,t,n)=>{n.r(t),n.d(t,{ConnectOAuthIntegrationModal:()=>Z,useConnectIntegrationModalStyles:()=>N});var i=n(67294),a=n(480),o=n(86628),s=n(24405),r=n(64275),l=n(45238),g=n(85893);const d=(0,l.IU)("redirect",{viewBox:"0 0 13 13.5",svg:(0,g.jsx)("path",{d:"M2.35742 13.2061H10.6357C11.374 13.2061 11.9323 13.0169 12.3105 12.6387C12.6888 12.265 12.8779 11.7135 12.8779 10.9844V2.66504C12.8779 1.93132 12.6888 1.3776 12.3105 1.00391C11.9323 0.630208 11.374 0.443359 10.6357 0.443359H2.35742C1.61914 0.443359 1.06087 0.630208 0.682617 1.00391C0.304362 1.3776 0.115234 1.93132 0.115234 2.66504V10.9844C0.115234 11.7135 0.304362 12.265 0.682617 12.6387C1.06087 13.0169 1.61914 13.2061 2.35742 13.2061ZM2.43945 11.8594C2.12044 11.8594 1.87663 11.7773 1.70801 11.6133C1.54395 11.4492 1.46191 11.2008 1.46191 10.8682V2.77441C1.46191 2.44629 1.54395 2.2002 1.70801 2.03613C1.87663 1.87207 2.12044 1.79004 2.43945 1.79004H10.5537C10.8682 1.79004 11.1097 1.87207 11.2783 2.03613C11.4469 2.2002 11.5312 2.44629 11.5312 2.77441V10.8682C11.5312 11.2008 11.4469 11.4492 11.2783 11.6133C11.1097 11.7773 10.8682 11.8594 10.5537 11.8594H2.43945ZM8.63965 8.5918C8.80827 8.5918 8.94271 8.53483 9.04297 8.4209C9.14779 8.30241 9.2002 8.15202 9.2002 7.96973V4.79785C9.2002 4.55632 9.13867 4.38086 9.01562 4.27148C8.89258 4.16211 8.72396 4.10742 8.50977 4.10742H5.31055C5.12826 4.10742 4.98014 4.15983 4.86621 4.26465C4.75684 4.36491 4.70215 4.49935 4.70215 4.66797C4.70215 4.8457 4.75684 4.9847 4.86621 5.08496C4.98014 5.18522 5.13053 5.23535 5.31738 5.23535H6.47266L7.40918 5.12598L6.39746 6.05566L3.99805 8.45508C3.87044 8.58268 3.80664 8.72624 3.80664 8.88574C3.80664 9.06803 3.86133 9.21387 3.9707 9.32324C4.08464 9.43262 4.22819 9.4873 4.40137 9.4873C4.58366 9.4873 4.73861 9.4235 4.86621 9.2959L7.25879 6.91016L8.1748 5.91211L8.07227 6.88965V7.97656C8.07227 8.16797 8.1224 8.31836 8.22266 8.42773C8.32747 8.53711 8.46647 8.5918 8.63965 8.5918Z",fill:"white"})});var c=n(9844),u=n(94826),m=n(9291),p=n(57549),f=n(89475),h=n(33929),b=n(80444),M=n(17549),C=n(6258),x=n(64453),v=n(73063),j=n(58297),I=n(26388),y=n(61753),w=n(92660);const S=(0,m.defineMessages)({createButton:{id:"integrations.connectOAuthIntegrationModal.submitButton.create",defaultMessage:"Connect to {integrationName}"},waiting:{id:"integrations.connectOAuthIntegrationModal.submitButton.waiting",defaultMessage:"Waiting for changes in {integrationName}"},waitingTooltip:{id:"integrations.connectOAuthIntegrationModal.submitButton.waitingTooltip",defaultMessage:"You need to complete some steps in {integrationName} to continue"},closeModalAriaLabel:{id:"integrations.connectOAuthIntegrationModal.closeButtonLabel",defaultMessage:"Close integration installation modal"}});function Z(){const e=(0,a.O7)(),t=N(),n=(0,o.VK)((()=>M.Z.state.open?M.Z.state.integrationId:void 0),[]),s=(0,o.VK)((()=>b.default.state.currentSpaceStore),[]),l=n&&s?C.y2.createChildStore(s,{id:n,table:c.K2}):void 0,[Z,k]=i.useState(!1),_=(0,o.VK)((()=>{if(l)return l.getModel()}),[l]),F=(0,o.VK)((()=>null==_?void 0:_.getInfo()),[_]),L=(0,u.I$)(n);if(!(_&&F&&L&&s&&n))return null;const T=async()=>{Z||(k(!0),await f.$$({environment:e,integration:_,spaceId:s.id,from:"compliance_connected_apps_settings"}),p.IG(e,{integration_id:n}),U())},U=()=>{M.Z.setState({open:!1}),k(!1)};return(0,g.jsx)(w.Z,{innerStyle:t.modal,requireOnline:!0,modalStore:M.Z,onDismiss:U,render:()=>(0,g.jsxs)("div",{style:t.mobileModal,children:[(0,g.jsxs)("div",{style:t.innerModal,children:[(0,g.jsx)(v.Z,{icon:r.D,onClick:U,style:t.cancelButton,hoveredStyle:t.hovered,ariaLabel:h.default.formatMessage(S.closeModalAriaLabel)}),(0,g.jsx)(x.P,{integrationModel:_,integrationConfig:L,spaceStore:s}),(0,g.jsx)(I.ZP,{placement:I.ug.Top,renderTooltip:()=>(0,g.jsx)(m.FormattedMessage,{...S.waitingTooltip,values:{integrationName:F.developer_name}}),disableTooltip:!Z,render:e=>(0,g.jsx)(j.Z,{style:t.connect,onClick:T,disabled:Z,...e,children:Z?(0,g.jsx)("span",{children:h.default.formatMessage(S.waiting,{integrationName:F.developer_name})}):(0,g.jsxs)("span",{style:t.createButton,children:[h.default.formatMessage(S.createButton,{integrationName:F.developer_name}),d(t.redirectIcon)]})})})]}),L.website_url&&(0,g.jsx)(y.W,{signupUrl:L.signupUrl??L.website_url})]})})}function N(){return(0,s.yK)((e=>({modal:{maxWidth:400,padding:"40px 20px 24px",fontSize:14,textAlign:"center",borderRadius:10},connect:{marginTop:40,padding:"0px 12px",width:360,height:32},innerStyle:{borderRadius:10},mobileModal:{fontSize:14,textAlign:"center"},innerModal:{display:"flex",flexDirection:"column",alignItems:"center"},hovered:{background:e.buttonPressedBackground},cancelButton:{position:"absolute",top:"10px",right:"10px",background:e.buttonHoveredBackground,borderRadius:"100%",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},createButton:{display:"flex",alignItems:"center"},redirectIcon:{width:14,height:14,marginLeft:8}})),[])}},61753:(e,t,n)=>{n.d(t,{W:()=>g});n(67294);var i=n(24405),a=n(9291),o=n(37810),s=n(64369),r=n(42402),l=n(85893);function g(e){const{signupUrl:t}=e,n=(0,i.yK)((e=>({subTitle:{fontWeight:o.Z.fontWeight.regular,fontSize:o.Z.fontSize.UISmall.desktop,color:e.lightTextColor,lineHeight:"17px",marginTop:16}})),[]);return(0,l.jsx)(s.Z,{style:n.subTitle,isMultiline:!0,children:(0,l.jsx)(a.FormattedMessage,{id:"integrations.configureIntegrationModal.partnerAccountPrompt",defaultMessage:"Don't have an account? <partnerAccountLink>Sign up</partnerAccountLink>",values:{partnerAccountLink:e=>(0,l.jsx)(r.Z,{href:t,external:!0,children:e})}})})}},92660:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var i=n(480),a=n(86628),o=n(50506),s=n(53437),r=n(85893);function l(e){const t=(0,i.O7)(),{modalStore:n,render:l}=e,{device:g}=t,d=(0,a.VK)((()=>n.state.open),[n]);return g.isMobile?(0,r.jsx)(s.ZP,{ariaLabel:e.ariaLabel,open:d,popupType:s.ZP.PopupType.SlideUp,origin:e.origin,onDismiss:e.onDismiss,render:l,style:e.style}):(0,r.jsx)(o.Z,{ariaLabel:e.ariaLabel,open:d,preventHideChildrenWhileOpening:!0,render:l,onDismiss:e.onDismiss,style:e.style,innerStyle:e.innerStyle})}},17549:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(49085);class a extends i.default{getInitialState(){return{open:!1}}}const o=new a}}]);