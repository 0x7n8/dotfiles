"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4617],{4617:(e,t,o)=>{o.d(t,{RL:()=>Z,xv:()=>z,rC:()=>U,Lf:()=>x,$7:()=>E,GF:()=>L});o(21703);var n=o(15145),a=o(68626),i=o(59730),r=o(15157),c=o(45953),s=o(21202),l=o(23867),d=o(9291),p=o(75754),m=(o(95477),o(33929)),u=o(98165),g=o(94660),f=o(74948),v=o(80444),S=o(77080),C=o(56638),I=o(81193),y=o(54642),_=o(54532),w=o(42875),b=o(37850),k=o(33954);var T=o(89858),P=o(9953),h=o(4408),B=o(24677),M=o(28014),R=o(13447),A=o(39865);const V="LastViewedTemplateId",O=(0,d.defineMessages)({clientCopyError:{defaultMessage:"Client copy could not be created.",id:"spaceActions.createGettingStartedPage.copyNotCreated.error"}});function E(e){const{environment:t,item:o,createNewPage:n,isPrivate:a}=e;B.ZH(t),C.Z.setState({open:!0,item:o,createNewPage:n,isPrivate:a,isLoading:!1}),r.Z.set({userId:t.currentUser.id,key:V,value:o.rootId}),I.jW(t,{template_name:o.name,template_id:(0,g.gA)(o),from:n?"sidebar":"newPage"})}function z(e){C.Z.setState({item:C.Z.state.item,open:!1}),B.ZH(e)}async function Z(e){const{item:t,environment:o,spaceStore:a}=e;C.Z.state.open&&C.Z.setState({...C.Z.state,isLoading:!0});const i=e.initializeStore?{...e,initializeStore:e.initializeStore,isPrivate:!1,type:"inExistingStore",useMinimalTemplates:!1}:{...e,type:"inSpace",useMinimalTemplates:!1,isOnboarding:!1};let r=!1;const c=Date.now();let s;try{s=await U(i),r=!0,p._c({environment:o,store:s,pageVisitSource:n.tY.Create}),z(o),o.device.isMobile&&f.close()}finally{var l;const n=Date.now()-c,i=e.initializeStore?u.VP(e.initializeStore):void 0,d=e.initializeStore?!Boolean(i):e.isPrivate;I.en(o,{template_name:t.name,destination:d?"private":"team",template_block_id:t.rootId,template_duplication_duration_ms:n,team_id:null==i?void 0:i.id,created_page_id:null===(l=s)||void 0===l?void 0:l.id}),I.Xy(o,{from:"inApp",success:r,context:e.from,template_name:t.name,template_block_id:t.rootId,target_space_id:a.id,template_duplication_duration_ms:n})}}async function x(e){const{environment:t,initializeStore:o,item:n,isPrivate:a,useMinimalTemplates:i,spaceStore:r,spaceViewStore:s}=e,l=i?n.rootId:n.previewRootId,d=await y.loadBlockSubtree(t,{block:{id:l,spaceId:n.spaceId},shallow:!1});let p;"success"===d.type&&(p=c.PF.create(d.data.subtreeRecordMap));const u="pageTemplateModalActions.loadAndDuplicatePageTemplate",{performResult:g}=R.createAndCommit({userAction:u,environment:t,perform:e=>{const n=o||M.KE({environment:t,spaceStore:r,spaceViewStore:s,isPrivate:a,loading:!0,transaction:e});h.fL({environment:t,inMemoryRecordCache:n.inMemoryRecordCache,recordMap:p,debugSource:u});const i=_.K8(t,{blockId:l,inMemoryRecordCache:n.inMemoryRecordCache,allowCopyCollections:!0,requireFullSubtree:!1,skipTransclusionContainerChildren:!1,allowCopyExternalObjectInstances:!0});if(!i)throw new Error(m.default.getIntl().formatMessage(O.clientCopyError));return _.E9({environment:t,sourceBlockId:l,targetBlockPointer:n.pointer,sourceBlockSubtree:i,targetInMemoryRecordCache:n.inMemoryRecordCache,transaction:e,deepCopyTransclusionContainers:!0,resolveTemplateVariables:!0,useCrdt:n.useCrdt()}),n}});return g}async function U(e){const{environment:t,item:o,useRecordCache:n,isPrivate:r,useMinimalTemplates:d,spaceStore:p,spaceViewStore:u,isOnboarding:g}=e,{serverCommitResult:f,performResult:{pageStore:C,copyBlock:_}}=R.createAndCommit({userAction:"pageTemplateModalActions.createTemplateInstance",environment:t,perform:a=>{let i;i="inExistingStore"===e.type&&e.initializeStore?e.initializeStore:"inTeam"===e.type&&e.teamStore?T.pq({environment:t,spaceStore:p,spaceViewStore:u,teamStore:e.teamStore,from:e.from,loading:!0,appendOrPrepend:e.appendOrPrepend?e.appendOrPrepend:"append",transaction:a}):M.KE({environment:t,spaceStore:p,spaceViewStore:u,isPrivate:r,loading:!0,transaction:a});const c={id:n&&!d?o.previewRootId:o.rootId,table:s.iU,spaceId:o.spaceId};return L({item:o,spaceViewStore:u,transaction:a}),function(e){const{item:t,transaction:o,spaceViewStore:n}=e;if(n){const e=n.getSidebarHiddenTemplateIds();if(e.indexOf(t.rootId)<0){const a=e.concat([t.rootId]);P.sW({store:n,data:{sidebar_hidden_templates:a},transaction:o})}}}({item:o,spaceViewStore:u,transaction:a}),{pageStore:i,copyBlock:c}}});return await f,await async function(e){const{environment:t,pageStore:o,copyBlock:n,item:r,useRecordCache:s,isOnboarding:d}=e,p=c.Ak.create();s&&s.forEachRecord(t.currentUser.id,(e=>{let{model:t}=e;j[t.table]&&p.setModel(t.pointer,t)}));const{currentSpaceStore:u}=v.default.state;if(!u)throw new i.p8("Could not get currentSpaceStore.");const g=()=>{R.createAndCommit({userAction:"pageTemplateModalActions.initializePageTemplate.deletePageWhenError",environment:t,perform:e=>{A.y8({environment:t,blocks:[o],transaction:e})}}),d&&I.Xy(t,{success:!1,template_name:r.name,template_id:r.id,template_block_id:r.rootId,target_space_id:u.id,from:"onboarding"}),a.log({level:"error",from:"pageTemplateModalActions.initializePageTemplate",type:"duplicateTemplateError",data:{miscDataToConvertToString:{template_name:r.name,template_id:r.id,template_block_id:r.rootId,is_onboarding:d}}})},f=S.default.getConfigKey("template_ids_to_use_duplicate_block","data");if(null!=f&&f.includes(n.id))await async function(e){const{environment:t,templateBlock:o,targetBlock:n,useCrdt:a}=e,i=b.UZ(),r=y.duplicateTemplateBlock(t,{sourceBlocks:[o],targetBlocks:[n],snapshotData:void 0,addCopyName:!1,deepCopyTransclusionContainers:!0,resolveTemplateVariables:{currentUserId:t.currentUser.id,currentTimeZone:(0,w.r)()},convertExternalObjectInstancesToPlaceholders:o.spaceId!==n.spaceId,useCrdt:a});let c;for await(const s of r)c=s;if(c)if(c.error){const e=(0,k.HV)(m.default.getIntl(),c.error);i.reject(e)}else i.resolve(c);else i.reject(void 0);return i.promise}({environment:t,templateBlock:n,targetBlock:{id:o.pointer.id,spaceId:(0,l.C)(o.pointer.spaceId)},useCrdt:o.useCrdt()}).catch(g);else{"failed"===(await y.initializePageTemplate(t,{recordMap:p.toJson({allowVersionDowngrade:!1}),sourceBlock:n,targetBlock:{id:o.pointer.id,table:o.pointer.table,spaceId:(0,l.C)(o.pointer.spaceId)},isOnboarding:d})).type&&g()}return o}({environment:t,pageStore:C,copyBlock:_,useRecordCache:n,item:o,isOnboarding:Boolean(g)}),C}const j={block:!0,collection:!0,collection_view:!0,discussion:!0,comment:!0};function L(e){const{item:t,transaction:o,spaceViewStore:n}=e;if(n){const e=n.getVisitedTemplateIds();if(e.indexOf(t.rootId)<0){const a=e.concat([t.rootId]);P.sW({store:n,data:{visited_templates:a},transaction:o})}}}},94660:(e,t,o)=>{o.d(t,{IJ:()=>l,PL:()=>s,W4:()=>d,gA:()=>m,p8:()=>p});o(89101);var n=o(62992),a=o(1898),i=o(18265),r=o(34517),c=o(6258);function s(e,t){return e.filter((e=>{const o=e.getCopiedFromPointer();return Boolean(o&&(0,n.J)(o)&&Boolean(t&&t(o.id)))}))}const l=5;function d(e){const t=window.location.href;return i.SK(t,{tg:e.templateGalleryItem})}function p(){const e=window.location.href;let t;return t=i.iO(e,"tg"),t=i.iO(t,"np"),t=i.iO(t,"pjm"),t}function m(e){let t,o;return e instanceof c.j$?(t=e.getAppTemplateURI(),o=e.getBlockId()):"type"in e?"preset"===e.type?(t=e.uri,o=void 0):"pageTemplate"===e.type?(t=void 0,o=e.template.rootId):(0,a.t1)(e):(t=void 0,o=e.rootId),t&&r.presetUriToHumanReadableName[t]?r.presetUriToHumanReadableName[t]:o}},56638:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(49085);class a extends n.default{getInitialState(){return{open:!1}}}const i=new a}}]);