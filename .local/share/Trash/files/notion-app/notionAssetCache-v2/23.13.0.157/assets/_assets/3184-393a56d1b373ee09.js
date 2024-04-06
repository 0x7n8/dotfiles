"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3184],{85215:(e,t,s)=>{s.d(t,{l:()=>c});s(67294);var i=s(86628),n=s(9291),o=s(16639),r=s(80444),a=s(52275),l=s(12793),d=s(31278),u=s(85893);function c(e){const{group:t,menuListItemProps:s}=e,c=(0,i.VK)((()=>{const e=r.default.state.currentSpaceStore;if(e&&t.icon)return{pointer:{table:e.table,id:e.id},icon:t.icon}}),[t]),g=(0,n.useIntl)(),m=(0,o.kF)({intl:g,group:t});return(0,u.jsx)(a.Z,{...s,icon:c?(0,u.jsx)(d.Z,{disabled:!0,size:22,icon:c,isEmptyPage:!1,title:m}):(0,u.jsx)(l.Z,{size:22}),title:m})}},39849:(e,t,s)=>{s.d(t,{N:()=>l,Z:()=>d});s(67294);var i=s(24405),n=s(31701),o=s(37810),r=s(85893);const a={display:"inline-flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:16,height:16,fontSize:10,textAlign:"center",fontWeight:o.Z.fontWeight.semibold,borderRadius:4,color:n.ZP.white,position:"static",marginLeft:6,WebkitFontSmoothing:"auto"};let l=function(e){return e[e.Red=0]="Red",e[e.Gray=1]="Gray",e}({});const d=function(e){let{count:t,color:s,style:n,numberStyle:o}=e;const d=(0,i.Fg)(),c=s===l.Red;return!t||t<=0?null:(0,r.jsx)("div",{style:{...a,...n,...t>99&&{width:void 0,padding:2},background:c?d.redBadgeBackground:d.lightIconColor},children:(0,r.jsx)(u,{count:t,numberStyle:o})})};function u(e){let{count:t,numberStyle:s}=e;return t?1===t?(0,r.jsx)("span",{style:{marginLeft:-.5,...s},children:"1"}):t>99?(0,r.jsx)("span",{style:{letterSpacing:-.5,...s},children:"99+"}):t>9?(0,r.jsx)("span",{style:{letterSpacing:-.5,marginLeft:-.5,...s},children:t}):(0,r.jsx)("span",{style:{...s},children:t}):null}},24145:(e,t,s)=>{s.d(t,{Z:()=>v});var i=s(67294),n=s(480),o=s(86628),r=s(9291),a=s(45101),l=s(65598),d=s(26781),u=s(4023),c=s(26388),g=s(91487),m=s(47082),p=s(85893);const v=function(e){const{origin:t,permissionsInviteStore:s,store:v,handleClickRemoveToken:h,handleInputChange:f,handleInputSubmit:x,defaultRoleForNonBot:y,isTeamsEnabled:M,right:S,focus:b,handleFocus:I}=e,j="share_menu"===t||"add_members"===t,k="add_members"===t,[w,T]=(0,o.AF)(s),R=(0,n.O7)(),{device:C}=R,Z=(0,r.useIntl)(),{tokenQuery:A}=w,B=(0,d.S)(v),L=w.inviteTargets.map((e=>{const t="newUser"===e.type?e.value.email:`${e.type}-${e.value.id}`,s=(0,a.OA)(e),n="newUser"===e.type||"existingUser"===e.type?e.value.email:void 0,o=s?B:void 0,l={key:t,target:e,onClickRemove:h,role:w.inviteRole,shouldWrap:j,showInfoIcon:Boolean(o)};return j&&n?(0,p.jsx)(c.ZP,{placement:u.u.Top,disableTooltip:k,renderTooltip:()=>s?o||(0,p.jsx)(r.FormattedMessage,{defaultMessage:"{email} will be invited as a guest",id:"ContextualInvite.permissions_invites.guest.tooltip",values:{email:n}}):n,render:s=>(0,i.createElement)("span",{...s,key:t},(0,p.jsx)(g.Z,{...l,backgroundColor:(0,a.gQ)(e)}))},t):(0,i.createElement)(g.Z,{...l,key:t})}));return(0,p.jsx)(m.Z,{focus:C.isMobile?void 0:b,focusInitial:C.isMobile,focusAfterAnimation:!0,onClick:()=>{C.isMobile||null==I||I()},format:m.U.Share,value:A,onChange:f,type:"email",tokens:L,disabled:!1,autoComplete:"off",placeholder:j?M?Z.formatMessage({defaultMessage:"Add people, groups, or emails…",id:"ContexualInvites.inviteUserModal.searchInput.placeholderWithTeams"}):Z.formatMessage({defaultMessage:"Add emails or people",id:"ContexualInvites.inviteUserModal.searchInput.placeholderWithoutBots"}):(0,l.Mm)(v)?Z.formatMessage({id:"inviteUserModal.searchInput.placeholder",defaultMessage:"Search name or emails"}):Z.formatMessage({id:"permissionsInvite.searchInput.placeholder",defaultMessage:"Search emails, names, or groups"}),onRemoveLastToken:()=>{const e={...w};e.inviteTargets=e.inviteTargets.slice(0,-1),0===e.inviteTargets.length&&(e.isInviteTargetsEmpty=!0,e.inviteRole=y),T(w)},right:S,inputFullWidth:!0,inputAndTokenWrapRightStyle:{paddingTop:R.device.isMobile?0:w.isInviteTargetsEmpty?7:6,paddingBottom:R.device.isMobile||j?0:4},onEmptySubmit:()=>x(),dontShowBorderBottom:C.isAndroid,showBorder:j,...!j&&{style:{padding:"4px 9px"}},...j&&{style:{borderRadius:4,paddingTop:w.isInviteTargetsEmpty?3:0,paddingBottom:0,...b&&{background:"none"}}}})}},43579:(e,t,s)=>{s.d(t,{Z:()=>A});s(57658);var i=s(67294),n=s(480),o=s(86628),r=s(24405),a=s(66897),l=s(33728),d=s(8843),u=s(7928),c=s(9291),g=s(37810),m=s(91219),p=s(95209),v=s(23586),h=s(45101),f=s(65598),x=s(29677),y=s(35057),M=s(52275),S=s(32163),b=s(43765),I=s(72495),j=s(26388),k=s(85215),w=s(69507),T=s(97680),R=s(85893);const C=(0,c.defineMessages)({invited_page:{id:"PermissionsInviteSearchRequest.userTooltip.invited_page",defaultMessage:"{userNameAndEmail} is invited to this page already"},invited_space:{id:"PermissionsInviteSearchRequest.userTooltip.invited_space",defaultMessage:"{userNameAndEmail} is invited to this workspace already"},invited_team:{id:"PermissionsInviteSearchRequest.userTooltip.invited_team",defaultMessage:"{userNameAndEmail} is invited to this team already"},not_in_space:{id:"PermissionsInviteSearchRequest.userTooltip.admin",defaultMessage:"Click to invite {userNameAndEmail}"}});function Z(e,t){return e.filter(((e,s)=>s<t))}const A=function(e){const{store:t,shouldShowBots:s,shouldShowGroups:A,sectionRenderLimit:B,membersOnly:L,hideUserTypeToken:F,disableInvitedUsers:q,guestsMustBeRequested:_}=e,[G,U,E]=(0,o.AF)(e.permissionsInviteStore),P=(0,n.O7)(),{device:D}=P,W=(0,c.useIntl)(),{tokenQuery:N}=G,z=(0,i.useMemo)((()=>h.ZK({environment:{device:D}})),[D]),O=(0,r.yK)((e=>({roleBadge:{...z},invitedBadge:{...z,backgroundColor:e.defaultBadgeBackground}})),[z]),V="invitee",K={request:N,performRequest:e=>p.jL({query:e,sectionLimit:{userLimit:10,botLimit:s?10:0,groupLimit:A?10:0,importContactLimit:0},membersOnly:L,environment:P,intl:W}),render:(e,s,i)=>{if(e)return(0,R.jsx)(w.l,{loading:!i,children:(0,R.jsx)(b.Z,{title:(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.searchInput.errorMessage",defaultMessage:"Something went wrong"})})});const n=s&&{...s,importedContacts:(0,h.Bu)(s.inviteUsers,s.importedContacts)},o=n&&(null==N?void 0:N.length)>0,{inviteUsers:r,inviteGroups:p,importedContacts:v=[]}=o?n:(0,h.NN)({currentInviteActors:n,permissionsInviteStore:E,targetStore:t}),L=[...Z(r,B),...Z(v,10)].map(((e,s)=>{const i="newUser"===e.type?e.value.email:e.value.id,n=(0,h.fR)(e),r=Boolean(o&&(0,h.cm)({permissionsInviteStore:E,userTarget:e,targetStore:t}));return{key:i,render:s=>{const{tooltip:i,userTypeToken:o}=function(e){const{userTarget:t,targetStore:s,isInvited:i,userSpaceRole:n,styles:o,intl:r}=e,a="newUser"!==t.type&&t.value.name?`${t.value.name} (${t.value.email})`:t.value.email,l=n&&"not_in_space"!==n;if(i)return{tooltip:(0,f.Mm)(s)?r.formatMessage(C.invited_space,{userNameAndEmail:a}):(0,f.OY)(s)?r.formatMessage(C.invited_page,{userNameAndEmail:a}):r.formatMessage(C.invited_team,{userNameAndEmail:a}),userTypeToken:(0,R.jsx)("div",{style:{...o.invitedBadge},children:(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.userRole.invitedBadge.label",defaultMessage:"Invited"})})};if(l){const e=h.Ji({role:n,intl:r,nameOrEmail:a});return{tooltip:e.tooltip,userTypeToken:(0,R.jsx)("div",{style:{...o.roleBadge},children:e.userRoleBadge})}}return{tooltip:r.formatMessage(C.not_in_space,{userNameAndEmail:a}),userTypeToken:void 0}}({userTarget:e,targetStore:t,userSpaceRole:n,isInvited:r,styles:O,intl:W});return"existingUser"===e.type?(0,R.jsx)(T.Z,{...s,actor:(0,a.dp)(e.value),right:F?void 0:o,tooltip:i,tooltipPlacement:j.ug.Left,disabled:q&&r}):(0,R.jsx)(j.ZP,{placement:j.ug.Left,alignment:j.v2.Start,textWrap:!0,render:t=>(0,R.jsx)(M.Z,{...s,...t,icon:(0,d.h)({width:24,height:24}),right:o,title:e.value.email.trim(),disabled:q&&r}),disableTooltip:!i,renderTooltip:()=>i})},action:()=>{if(r)return;if(!G.isInviteTargetsEmpty&&(0,x.ow)(G))return;const t={...e,..."existingUser"===e.type&&{spaceRole:n}};m.hE(P,{subscription_tier:(0,y.zt)(),invite_token_query:N,selected_user_token:e,selected_user_token_rank:s,from:"permission_invite"}),E.setState({...G,inviteTargets:[...G.inviteTargets,t],isInviteTargetsEmpty:!1,tokenQuery:"",inputFocus:V})}}})),U=Z(p,B).map((e=>{const{value:t}=e;return{key:t.id,render:e=>(0,R.jsx)(k.l,{group:t,menuListItemProps:e}),action:()=>{!G.isInviteTargetsEmpty&&(0,x.ow)(G)||E.setState({...G,inviteTargets:[...G.inviteTargets,e],isInviteTargetsEmpty:!1,tokenQuery:"",inputFocus:V})}}})),D=[],z=G.isInviteTargetsEmpty||!(0,x.ow)(G);if(L.length>0&&z&&D.push({key:"user results",render:e=>(0,R.jsx)(w.l,{...e,loading:!i}),items:L}),A&&U.length>0&&z&&D.push({key:"group results",render:e=>(0,R.jsx)(I.Z,{...e,title:(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.searchDropdown.selectGroupTitle",defaultMessage:"Select a group"}),loading:!i}),items:U}),0===D.length&&z){const e=(0,l.H3)(G.tokenQuery);if((0,l.oH)(e)){const n={type:"newUser",value:{email:e},source:"email"},o=(0,h.Nd)({target:n,permissionsInviteStore:E});if(!o)return;if(o)return(0,R.jsx)(w.l,{loading:!i,children:(0,R.jsx)(b.Z,{title:(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.userAlreadyInvitedMessage",defaultMessage:"Already inviting {user}.",values:{user:(0,R.jsx)("span",{style:{fontWeight:g.Z.fontWeight.bold},children:(0,h.DF)({intl:W,target:o})})}})})});const r=(s&&s.inviteUsers||[]).find((t=>"existingUser"===t.type&&t.value.email===e));if(r&&"existingUser"===r.type&&(0,h.Zp)({store:t,target:r}))return(0,R.jsx)(w.l,{loading:!i,children:(0,R.jsx)(b.Z,{title:(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.userAlreadyHasPermissionMessage",defaultMessage:"{user} already has permission.",values:{user:(0,R.jsx)("span",{style:{fontWeight:g.Z.fontWeight.bold},children:(0,u.Nz)(W,r.value)})}})})})}else{if(!G.tokenQuery)return(0,R.jsx)(w.l,{loading:!i,children:(0,R.jsx)(b.Z,{title:(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.searchPersonDropdown.noSearchResultsMessage",defaultMessage:"Type or paste in emails above, separated by commas."})})});D.push({key:"user results",render:e=>(0,R.jsx)(w.l,{...e,loading:!i,title:_?(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.searchDropdown.requestPeople",defaultMessage:"Keep typing to request inviting an email"}):(0,R.jsx)(c.FormattedMessage,{id:"inviteUserModal.searchDropdown.addPeople",defaultMessage:"Keep typing to invite email"})}),items:[{key:G.tokenQuery,render:e=>(0,R.jsx)(M.Z,{icon:(0,d.h)({width:24,height:24}),title:G.tokenQuery,...e}),action:()=>{}}]})}}return(0,R.jsx)(S.Z,{type:S.i.Vertical,initialFocus:N.length>0?0:void 0,sections:D})}};return(0,R.jsx)(v.Z,{...K})}},91487:(e,t,s)=>{s.d(t,{Z:()=>v});s(67294);var i=s(480),n=s(86628),o=s(15070),r=s(84619),a=s(44495),l=s(7928),d=s(9291),u=s(1898),c=s(16639),g=s(26388),m=s(85567),p=s(85893);const v=function(e){let{isStrikedThrough:t,backgroundColor:s,onClickRemove:a,target:v,disabled:f,role:x,showInfoIcon:y,style:M,shouldWrap:S}=e;const b=(0,i.O7)(),I=(0,d.useIntl)(),{device:j}=b,k=(0,n.VK)((()=>function(e,t,s,i){if("group"===e.type&&"owner"===s)return(0,p.jsx)(g.ZP,{renderTooltip:()=>(0,p.jsx)(d.FormattedMessage,{id:"permissionInviteToken.groupRole.ownerAlert.tooltip",defaultMessage:"Groups cannot be added as teamspace owners."}),render:s=>(0,p.jsx)("div",{...s,children:h((0,c.kF)({intl:t,group:e.value}))})});let n;switch(e.type){case"newUser":n=e.value.email.trim();break;case"existingUser":n=(0,l.Nz)(t,e.value);break;case"bot":n=(0,o.Mh)(e.value);break;case"group":n=(0,c.kF)({intl:t,group:e.value});break;default:(0,u.t1)(e)}return i?h(n):n}(v,I,x,y)),[v,I,x,y]);return(0,p.jsx)(m.Z,{showRemoveButton:!0,isSingle:!1,isStrikedThrough:t,backgroundColor:s,format:j.isMobile?r.lo.Large:r.lo.Medium,onClickRemove:e=>function(e,t,s){e.stopPropagation(),t(s)}(e,a,v),disabled:f,disabledFeedback:!0,value:k,style:M,shouldWrap:S})};function h(e){return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,a.D)({marginRight:4,width:14,height:14}),e]})}},29825:(e,t,s)=>{s.d(t,{Z:()=>R});var i=s(67294),n=s(480),o=s(86628),r=s(24405),a=s(9291),l=s(31701),d=s(37810),u=s(91219),c=s(95209),g=s(64964),m=s(79817),p=s(60709),v=s(45101),h=s(52878),f=s(1743),x=s(74194),y=s(78140),M=s(9019),S=s(53437),b=s(58297),I=s(64369),j=s(24145),k=s(43579),w=s(85893);const T=(0,a.defineMessages)({reason_placeholder:{id:"RequestMembersModal.reason.placeholder",defaultMessage:"Add a reason (optional)"}});const R=function(e){const t=(0,n.O7)(),{store:s,origin:R,analyticsFrom:C}=e,[Z,A]=(0,i.useState)(!1),[B,L]=(0,i.useState)("none"),F=(0,o.qz)(void 0,h.Z),q=(0,a.useIntl)(),_=(0,r.yK)((()=>({modalStyle:{alignSelf:"center",overflow:"visible",top:0,width:420},container:{padding:20},title:{fontWeight:d.Z.fontWeight.medium,marginBottom:10},reasonTitle:{color:l.ZP.mediumTextColor,marginTop:10,marginBottom:5},footer:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:15},requestInvitesButton:{marginLeft:20}})),[]),G=e=>{e.currentTarget===e.target&&L("none")},U=async()=>{u.ci(t,{...m.Oh(t,F.state.contextualInviteStore),from:C}),c.eH({permissionsInviteStore:F.state.permissionsInviteStore,contextualInviteStore:F.state.contextualInviteStore}),F.state.contextualInviteStore.startRequestMembership();const e=F.state.contextualInviteStore.state.invitedUsers;A(!1);const i=await m.fC({environment:t,spaceStore:s,originId:void 0,originType:C,reasonMessage:F.state.permissionsInviteStore.state.emailMessage,contextualInviteStore:F.state.contextualInviteStore,intl:q});E({success:i,intl:q,users:e}),F.reset()},E=e=>{const{success:t,intl:s,users:i}=e;0!==i.length&&(t?g.oV({label:s.formatMessage({id:"requestMembersModal.requestSuccess.toast",defaultMessage:"Successfully requested membership for {users} to your workspace admins."},{users:m.uJ(i,s)})}):g.oV({label:s.formatMessage({id:"requestMembersModal.requestFail.toast",defaultMessage:"Failed to invite {users} to the workspace."},{users:m.uJ(i,s)})}))};return(0,w.jsx)(M.Z,{modalStyle:_.modalStyle,open:Z,onDismiss:async()=>{await(0,v.Aw)({environment:t,permissionsInviteStoreState:F.state.permissionsInviteStore.state,from:"space_settings_add_members"})||(A(!1),F.reset()),L("none")},renderContent:()=>(0,w.jsxs)("div",{style:_.container,onClick:G,children:[(0,w.jsx)("div",{style:_.title,onClick:G,children:(0,w.jsx)(a.FormattedMessage,{id:"requestMembersModal.title",defaultMessage:"Request to invite members"})}),(0,w.jsx)(S.ZP,{popupType:S.kQ.Popup,alignmentToOrigin:S.ZP.Alignment.Start,placementToOrigin:S.ZP.Placement.Bottom,open:"invites"===B,sameWidthAsOrigin:!0,originGap:10,disableMouseCapture:!0,origin:(0,w.jsx)(j.Z,{permissionsInviteStore:F.state.permissionsInviteStore,store:s,handleClickRemoveToken:e=>{c.PV({targetToRemove:e,permissionsInviteStore:F.state.permissionsInviteStore,defaultRoleForNonBot:"read_and_write"})},handleInputChange:async e=>{L("invites"),await c.jC({environment:t,event:e,permissionsInviteStore:F.state.permissionsInviteStore})},handleInputSubmit:async()=>{},origin:"add_members",defaultRoleForNonBot:"read_and_write",isTeamsEnabled:!1,right:(0,w.jsx)("div",{}),focus:"invites"===B,handleFocus:()=>L("invites")}),onDismiss:()=>L("none"),render:()=>{const e=(0,w.jsx)(k.Z,{permissionsInviteStore:F.state.permissionsInviteStore,store:s,defaultRoleForSpaceBot:"editor",shouldShowBots:!1,shouldShowGroups:!1,sectionRenderLimit:10,membersOnly:!1}),t={menuType:p.og.Popup,disableScroller:!1};return(0,w.jsx)("div",{children:(0,w.jsx)(y.Z,{...t,width:380,children:e})})},style:{width:"100%"}}),(0,w.jsx)("div",{style:_.reasonTitle,onClick:G,children:(0,w.jsx)(a.FormattedMessage,{id:"requestMembersModal.reasonForRequest.title",defaultMessage:"Reason for request"})}),(0,w.jsx)(f.Z,{debugName:"RequestMembersModal",capture:!0,allowEsc:!0,children:(0,w.jsx)(x.Z,{textarea:!0,style:{padding:8},value:F.state.permissionsInviteStore.state.emailMessage,focus:"reason"===B,onFocus:()=>L("reason"),onChange:e=>{F.state.permissionsInviteStore.setState({...F.state.permissionsInviteStore.state,emailMessage:e.target.value})},placeholder:q.formatMessage(T.reason_placeholder)})}),(0,w.jsxs)("div",{style:_.footer,onClick:G,children:[(0,w.jsx)(I.Z,{isSecondaryColor:!0,isSmall:!0,isMultiline:!0,children:(0,w.jsx)(a.FormattedMessage,{id:"RequestMembersModal.caption",defaultMessage:"Your admins will approve or decline your request."})}),(0,w.jsx)(b.Z,{isLarge:!0,style:_.requestInvitesButton,onClick:U,children:(0,w.jsx)(a.FormattedMessage,{id:"requestMembersModal.requestInvitesButton.label",defaultMessage:"Request invites"})})]})]}),origin:(0,w.jsx)("div",{onClick:()=>{A(!0)},children:R})})}},14694:(e,t,s)=>{s.d(t,{Z:()=>c});s(67294);var i=s(480),n=s(86628),o=s(24405),r=s(39567),a=s(50659),l=s(77080),d=s(85893);function u(){const e=(0,o.yK)((e=>({icon:{position:"absolute",width:"50%",height:"50%",right:0,bottom:0,fill:"dark"===e.mode?e.regularTextColor:"#3E3C38",stroke:"dark"===e.mode?e.sidebarBackground:"white",strokeWidth:"dark"===e.mode?"1.85px":"1.5px"}})),[]);return(0,d.jsx)("div",{children:(0,r.Y)(e.icon)})}function c(e){var t;const s=(0,i.O7)(),r=s.device.isMobile,c=(0,n.VK)((()=>{var t,i;if(r)return s.WindowSizeStore.getSafePaddingLeftCSS("number"==typeof(null===(t=e.style)||void 0===t?void 0:t.paddingLeft)?null===(i=e.style)||void 0===i?void 0:i.paddingLeft:10)}),[s.WindowSizeStore,r,null===(t=e.style)||void 0===t?void 0:t.paddingLeft]),g=(0,n.VK)((()=>l.default.checkGate("sidebar_redesign")),[]),m=(0,o.yK)((t=>({wrapper:{...r?{display:"flex",alignItems:"center",width:"100%",minHeight:26,fontSize:16,paddingTop:8,paddingBottom:8,paddingLeft:c,paddingRight:10,userSelect:"none",WebkitUserSelect:"none",boxShadow:e.disableMobileBorder?void 0:`0 1px 0 ${t.regularDividerColor}`,marginBottom:e.shouldShowMobileMarginBottom?12:1}:{display:"flex",alignItems:"center",width:"100%",fontSize:14,color:g?e.isBottomItem?t.mediumTextColor:t.v2.text.primary:void 0,fontWeight:g?450:void 0,minHeight:e.isBottomItem?24:27,paddingTop:2,paddingBottom:2,marginTop:1,marginBottom:1,...(0,a.MF)()},...e.style},icon:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,width:r?28:22,height:r?24:18,marginLeft:g?void 0:-3,marginRight:g?8:4,position:"relative"},right:{display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,flexGrow:0,height:"100%",...e.rightStyle},left:{flexShrink:0,flexGrow:0,borderRadius:4,color:t.mediumTextColor,width:r?26:22,height:r?24:22,display:"flex",alignItems:"center",justifyContent:"center",marginRight:e.icon?0:8},children:{flexGrow:1,flexShrink:1,flexBasis:"auto",whiteSpace:"nowrap",minWidth:0,overflow:"hidden",textOverflow:e.right&&!r?"clip":"ellipsis",...e.childrenStyle}})),[r,c,e.disableMobileBorder,e.shouldShowMobileMarginBottom,e.isBottomItem,e.style,e.rightStyle,e.icon,e.right,e.childrenStyle,g]);return(0,d.jsxs)("div",{role:e.role,"aria-current":e["aria-current"],"aria-expanded":e["aria-expanded"],"aria-owns":e["aria-owns"],"aria-labelledby":e["aria-labelledby"],style:m.wrapper,onFocus:e.onFocus,onBlur:e.onBlur,onMouseMove:e.onMouseMove,onMouseLeave:e.onMouseLeave,onClick:e.onClick,className:e.className,children:[e.left&&(0,d.jsx)("div",{style:m.left,children:e.left}),e.icon&&(0,d.jsxs)("div",{style:m.icon,children:[e.icon,e.isAlias&&(0,d.jsx)(u,{})]}),(0,d.jsx)("div",{style:m.children,children:e.children}),e.right&&(0,d.jsx)("div",{style:m.right,children:e.right})]})}},97680:(e,t,s)=>{s.d(t,{Z:()=>f});var i=s(67294),n=s(480),o=s(86628),r=s(66897),a=s(9291),l=s(1898),d=s(98742),u=s(4023),c=s(52275),g=s(26388),m=s(70301),p=s(45653),v=s(85893);const h=i.forwardRef(((e,t)=>{const{actor:s,userTitle:i,useEmailAsTooltip:h,tooltip:f,tooltipPlacement:x}=e,y=(0,n.O7)(),M=(0,a.useIntl)(),S=(0,o.VK)((()=>s.asActor&&s.isUser()?s.email:void 0),[s]),b=h&&S?S:f,I=y.device.isMobile?24:20;let j;return(0,r.YU)(s)?j=(0,v.jsx)(m.Z,{botValue:null==s?void 0:s.asActor,size:I}):(0,r.$S)(s)?j=(0,v.jsx)(p.Z,{userValue:null==s?void 0:s.asActor,size:I}):(0,r.Iq)(s)?j=(0,v.jsx)(p.Z,{userValue:void 0,size:I}):(0,l.t1)(s),(0,v.jsx)(g.ZP,{ref:t,placement:x??u.u.Bottom,alignment:u.v.Start,textWrap:!0,render:t=>(0,v.jsx)(c.Z,{...(0,d.Z)(t,e),icon:j,title:i??(0,r.$4)(M,s),className:"notranslate",right:e.right}),disableTooltip:!b,renderTooltip:()=>b})}));h.displayName="UserMenuItem";const f=h},46457:(e,t,s)=>{s.d(t,{_:()=>m});var i=s(67294),n=s(480),o=s(86628),r=s(24405),a=s(9291),l=s(77907),d=s(34859),u=s(7184),c=s(53336),g=s(85893);function m(e){let{loginModalStore:t,loginStore:s,title:r,description:a,isSignup:d,disableLoginLink:c,redirectURL:m,className:f,onDismiss:x}=e;const y=(0,n.O7)(),M=(0,o.VK)((()=>t.state.open),[t]),S=(0,i.useId)(),b=(0,i.useId)(),I={loginStore:s,title:r,description:a,isSignup:d,redirectURL:m,disableLoginLink:c,titleAriaId:S,descriptionAriaId:b};return(0,g.jsx)(u.c,{ariaLabelledBy:S,ariaDescribedBy:b,isOpen:M,onDismiss:()=>{h({loginModalStore:t,loginStore:s,onDismiss:x})},areaConstraint:{width:{min:480,max:480},height:{scroll:!0}},children:(0,g.jsx)(p,{children:(0,g.jsxs)("div",{className:f,children:[!y.device.isMobile&&(0,g.jsx)(v,{loginModalStore:t,loginStore:s,onDismiss:x}),(0,g.jsx)(l.LazyLoginModalContent,{...I})]})})})}function p(e){let{children:t}=e;return(0,n.O7)().device.isMobile?(0,g.jsx)(c.Z,{type:d.Z.Y,children:t}):t}function v(e){let{loginModalStore:t,loginStore:s,onDismiss:i}=e;const n=(0,r.Fg)();return(0,g.jsx)("div",{style:{fontSize:14,color:n.mediumTextColor,position:"absolute",right:0,marginTop:16,marginRight:16,cursor:"pointer"},onClick:()=>{h({loginModalStore:t,loginStore:s,onDismiss:i})},children:(0,g.jsx)(a.FormattedMessage,{defaultMessage:"Cancel",id:"sidebarSwitcherMultiAccount.addAccountModal.cancelButton.label"})})}function h(e){const{loginModalStore:t,loginStore:s,onDismiss:i}=e;s.reset(),t.setState({open:!1}),i&&i()}},50659:(e,t,s)=>{s.d(t,{G$:()=>r,MF:()=>a,Z3:()=>o});var i=s(77080);const n=4;function o(e){let{isMobile:t}=e;const s=i.default.checkGate("sidebar_redesign");return{...!t&&{borderRadius:s?12:3}}}function r(e){let{isMobile:t}=e;return t?{}:{...o({isMobile:t}),display:"flex",marginLeft:n,marginRight:n,width:`calc(100% - ${2*n}px)`,transition:"background 100ms ease-out"}}function a(){return{paddingLeft:14-n,paddingRight:14-n}}},53353:(e,t,s)=>{s.d(t,{Z:()=>d});var i=s(86628),n=s(98165),o=s(65598),r=s(48779),a=s(80444);function l(e,t){return(0,r.Q6)(e)?{isGuestRequestRequired:!0}:t?{isStoreInTeam:!0,teamAllowsGuests:!0,spaceAllowsGuests:!0,isGuestRequestRequired:!1}:{isStoreInTeam:!1,spaceAllowsGuests:!0,isGuestRequestRequired:!1}}const d=function(e){return(0,i.VK)((()=>{if(!(0,o.OY)(e))return(0,r.kt)(e)?l(e,void 0):{isStoreInTeam:!1,spaceAllowsGuests:!0,isGuestRequestRequired:!1};const t=(0,n.VP)(e),s=(0,n.Pj)(e),i=s||a.default.state.currentSpaceStore;if((0,r.kt)(i))return l(i,t);const d=!(null!=s&&s.getDisableGuests());return t?{isStoreInTeam:!0,teamAllowsGuests:!t.getDisableGuests(),spaceAllowsGuests:d,isGuestRequestRequired:!1}:{isStoreInTeam:!1,spaceAllowsGuests:d,isGuestRequestRequired:!1}}),[e])}},26781:(e,t,s)=>{s.d(t,{S:()=>r});s(67294);var i=s(9291),n=s(53353),o=s(85893);function r(e){const t=(0,n.Z)(e);return t.isGuestRequestRequired?(0,o.jsx)(i.FormattedMessage,{id:"contextualInvite.buttonAndTokenTooltip.guestRequestRequired",defaultMessage:"This guest must be approved by a workspace owner first"}):t.isStoreInTeam?t.teamAllowsGuests?void 0:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(i.FormattedMessage,{id:"contextualInvite.buttonAndTokenTooltip.teamDisablesGuestsAlertLine1",defaultMessage:"This teamspace doesn't allow guests."})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.FormattedMessage,{id:"contextualInvite.buttonAndTokenTooltip.teamDisablesGuestsAlertLine2",defaultMessage:"Remove any guests to continue."})})]}):t.spaceAllowsGuests?void 0:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)(i.FormattedMessage,{id:"contextualInvite.buttonAndTokenTooltip.spaceDisablesGuestsAlertLine1",defaultMessage:"This workspace doesn't allow guests."})}),(0,o.jsx)("div",{children:(0,o.jsx)(i.FormattedMessage,{id:"contextualInvite.buttonAndTokenTooltip.spaceDisablesGuestsAlertLine2",defaultMessage:"Remove any guests to continue."})})]})}},1903:(e,t,s)=>{s.d(t,{Z:()=>r});var i=s(49085),n=s(21202);class o extends i.default{getInitialState(){return{modalOpen:!1,tokenQuery:"",inviteTargets:[],inviteRole:"editor",isInviteTargetsEmpty:!0,table:n.iU,flowId:void 0,inputFocus:"invitee",emailMessage:""}}}const r=o},52878:(e,t,s)=>{s.d(t,{Z:()=>a});var i=s(49085),n=s(85834),o=s(1903);class r extends i.default{getInitialState(){return{permissionsInviteStore:new o.Z,contextualInviteStore:new n.ZP}}get stage(){return this.state.contextualInviteStore.state.inviteStage}}const a=r},96071:(e,t,s)=>{s.d(t,{Z:()=>o});var i=s(49085);class n extends i.default{getInitialState(){return{open:!1}}}const o=n},32856:(e,t,s)=>{s.d(t,{D:()=>o});var i=s(86628),n=s(77080);function o(e){const{experimentId:t,groups:s,disableExposureLogging:o}=e,r=function(e){const{experimentId:t,disableExposureLogging:s,defaultGroup:o}=e;return(0,i.VK)((()=>n.default.getEligibleGroup({experimentId:t,defaultGroup:o??"control",disableExposureLogging:s})),[t,s,o])}({experimentId:t,disableExposureLogging:o});return s[r]}},87586:(e,t,s)=>{s.d(t,{B:()=>o});s(67294);var i=s(45238),n=s(85893);const o=(0,i.IU)("circleCross",{viewBox:"0 0 30 30",svg:(0,n.jsx)("path",{d:"M15 28.354c7.305 0 13.354-6.049 13.354-13.354 0-7.292-6.062-13.354-13.367-13.354C7.695 1.646 1.646 7.708 1.646 15c0 7.305 6.062 13.354 13.354 13.354zm0-2.226A11.075 11.075 0 013.885 15c0-6.166 4.922-11.128 11.102-11.128 6.18 0 11.128 4.962 11.141 11.128A11.078 11.078 0 0115 26.128zm-4.477-5.577a.99.99 0 00.746-.327l3.718-3.731 3.731 3.73c.197.197.445.328.747.328.576 0 1.047-.484 1.047-1.06a.979.979 0 00-.314-.747l-3.718-3.718 3.73-3.744c.223-.223.315-.445.315-.733 0-.59-.471-1.048-1.047-1.048-.275 0-.498.092-.72.315l-3.771 3.744-3.744-3.731c-.184-.21-.432-.301-.72-.301-.577 0-1.048.445-1.048 1.034a.97.97 0 00.314.733l3.719 3.731-3.719 3.732a.951.951 0 00-.314.733c0 .576.471 1.06 1.048 1.06z"})})},8843:(e,t,s)=>{s.d(t,{h:()=>o});s(67294);var i=s(45238),n=s(85893);const o=(0,i.IU)("mailRound",{viewBox:"0 0 17 12",svg:(0,n.jsx)("path",{d:"M3.09961 11.9639H14.1055C15.3359 11.9639 16.0469 11.2529 16.0469 9.84473V2.29785C16.0469 0.896484 15.3291 0.185547 13.9004 0.185547H2.89453C1.66406 0.185547 0.953125 0.889648 0.953125 2.29785V9.84473C0.953125 11.2598 1.6709 11.9639 3.09961 11.9639ZM7.68652 6.41992L2.52539 1.32715C2.67578 1.26562 2.85352 1.23145 3.05859 1.23145H13.9414C14.1533 1.23145 14.3379 1.26562 14.4883 1.33398L9.34082 6.41992C9.04688 6.71387 8.78027 6.84375 8.51367 6.84375C8.24023 6.84375 7.97363 6.70703 7.68652 6.41992ZM1.99902 9.84473V2.29785C1.99902 2.24316 1.99902 2.27051 1.99902 2.22266L5.92969 6.08496L2.00586 9.96094C1.99902 9.92676 1.99902 9.88574 1.99902 9.84473ZM15.001 2.30469V9.85156C15.001 9.87891 15.001 9.91309 15.001 9.94043L11.0977 6.08496L15.001 2.24316C15.001 2.30469 15.001 2.30469 15.001 2.30469ZM3.05859 10.918C2.86719 10.918 2.70312 10.8906 2.55957 10.8291L6.64746 6.78906L7.0918 7.22656C7.57031 7.69824 8.02832 7.89648 8.51367 7.89648C8.99219 7.89648 9.45703 7.69824 9.93555 7.22656L10.3799 6.78906L14.4609 10.8223C14.3105 10.8906 14.1396 10.918 13.9414 10.918H3.05859Z"})})},46392:(e,t,s)=>{s.d(t,{C:()=>o});s(67294);var i=s(45238),n=s(85893);const o=(0,i.IU)("membersFilled",{viewBox:"0 0 30 30",svg:(0,n.jsx)("path",{d:"M20.31 14.731c2.22 0 4.097-1.967 4.097-4.513 0-2.485-1.887-4.391-4.098-4.391-2.2 0-4.097 1.937-4.087 4.411 0 2.526 1.866 4.493 4.087 4.493zm-11.725.233c1.937 0 3.57-1.724 3.57-3.935 0-2.17-1.653-3.823-3.57-3.823-1.917 0-3.57 1.683-3.56 3.844 0 2.19 1.633 3.914 3.56 3.914zm-5.588 9.21h7.606c-1.085-1.552.082-4.615 2.374-6.42-1.116-.72-2.566-1.248-4.392-1.248-4.533 0-7.464 3.337-7.464 6.085 0 1.004.507 1.582 1.876 1.582zm10.994-.01h12.637c1.673 0 2.251-.508 2.251-1.44 0-2.607-3.316-6.198-8.57-6.198-5.263 0-8.57 3.59-8.57 6.197 0 .933.578 1.44 2.252 1.44z"})})}}]);