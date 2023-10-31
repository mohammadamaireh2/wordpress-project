"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[392],{82909:function(e,t,a){var i=a(26372),o=a.n(i),s=a(99581),n=a(70079),r=a(8334),l=a(19382),c=a(57995),d=a(65317),m=a(46824),u=a(81433),p=a(10159),h=a(15063),_=e=>"web"in e?e.web:e.default,v=a(64645),b=a(97393),x=a(18883),g=a(7936),j=a(15312),f=a(97856),N=a(58663),y=a(4506),Z=a(74356),S=a(48405),w=a(85180),A=a(96061),k=a(71458),D=a(59742),C=a(49156),E=a(35630),I=a(10182),T=a(96328),P=a(84638),F=a(26462),L=a(35250);function O(e){let{children:t}=e;const{automationName:a,automationStatus:i,showIconLabels:o}=(0,p.Z)((e=>({automationName:e(P.storeName).getAutomationData().name,automationStatus:e(P.storeName).getAutomationData().status,showIconLabels:e(P.storeName).isFeatureActive("showIconLabels")})),[]),s=(0,n.useRef)();let r="mailpoet-automation-editor-chip-gray";return i===F.b.ACTIVE?r="mailpoet-automation-editor-chip-success":i===F.b.DEACTIVATING&&(r="mailpoet-automation-editor-chip-danger"),(0,L.jsx)("div",{className:"edit-site-document-actions has-secondary-label",children:(0,L.jsx)("div",{ref:s,className:"edit-site-document-actions__title-wrapper",children:t&&(0,L.jsx)(C.Z,{popoverProps:{placement:"bottom",anchor:s.current},renderToggle:e=>{let{isOpen:t,onToggle:s}=e;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(l.ZP,{className:"mailpoet-automation-editor-dropdown-toggle-link",onClick:s,children:[(0,L.jsxs)(E.Z,{size:"body",className:"edit-site-document-actions__title",as:"h1",children:[(0,L.jsx)(I.Z,{as:"span",children:(0,g.__)("Editing automation:","mailpoet")}),a]}),(0,L.jsxs)(E.Z,{size:"body",className:`edit-site-document-actions__secondary-item ${r}`,children:[i===F.b.ACTIVE&&(0,g.__)("Active","mailpoet"),i===F.b.DEACTIVATING&&(0,g.__)("Deactivating","mailpoet"),i===F.b.DRAFT&&(0,g.__)("Draft","mailpoet")]})]}),(0,L.jsx)(l.ZP,{className:"edit-site-document-actions__get-info",icon:T.Z,"aria-expanded":t,"aria-haspopup":"true",onClick:s,label:(0,g.__)("Change automation name","mailpoet"),children:o&&(0,g.__)("Rename","mailpoet")})]})},contentClassName:"edit-site-document-actions__info-dropdown",renderContent:t})})})}O.displayName="DocumentActions";var V=a(83453),R=a(77996),K=a(60369),M=a(94023),B=a(95172);const G=d.Z,U=(0,n.createContext)(void 0);function z(e){let{stepId:t}=e;const a=(0,n.useContext)(U),{steps:i,automationData:o}=(0,p.Z)((e=>({steps:e(P.storeName).getSteps(),automationData:e(P.storeName).getAutomationData()})),[]),{openSidebar:s,selectStep:r}=(0,S.Z)(P.storeName),l=o.steps[t],c=i.find((e=>{let{key:t}=e;return t===l.key}));return(0,L.jsxs)(V.A,{className:"mailpoet-automation-step-error",role:"listitem",state:a,onClick:()=>{s(P.stepSidebarKey),r(l)},children:[(0,L.jsx)(B.O,{icon:c.icon,foreground:c.foreground,background:c.background,width:"23px",height:"23px"}),c.title(l,"other")]})}function W(){const[e,t]=(0,n.useState)(!1),a=(0,R.u)({orientation:"vertical",shift:!0}),{errors:i,automationData:o}=(0,p.Z)((e=>({errors:e(P.storeName).getErrors(),automationData:e(P.storeName).getAutomationData()})),[]),s=(0,n.useMemo)((()=>{if(!i)return[];const e=new Map,t=o.steps.root.next_steps.map((e=>{let{id:t}=e;return t}));for(;t.length>0;){const a=t.shift();e.has(a)||(e.set(a,i.steps[a]),o.steps[a]?.next_steps?.forEach((e=>t.push(e.id))))}return[...e.values()].filter((e=>!!e))}),[i,o]),r=s.length>0;return(0,n.useEffect)((()=>{r&&t(!0)}),[r]),0===s.length?null:(0,L.jsxs)("div",{children:[(0,L.jsx)(l.ZP,{variant:"link",onClick:()=>t((e=>void 0!==e&&!e)),onMouseDown:()=>t((e=>e?void 0:e)),style:{textDecoration:"none",borderRadius:99999},children:(0,L.jsxs)(M.A,{children:[s.length," issues"]})}),e&&(0,L.jsx)(G,{offset:10,placement:"bottom-end",onClose:()=>t((e=>void 0===e&&void 0)),children:(0,L.jsx)(U.Provider,{value:a,children:(0,L.jsxs)(K.b,{state:a,role:"list","aria-label":(0,g.__)("Automation errors","mailpoet"),className:"mailpoet-automation-errors",children:[(0,L.jsx)("div",{className:"mailpoet-automation-errors-header",children:(0,g.__)("The following steps are not fully set:","mailpoet")}),(0,L.jsx)(f.ErrorBoundary,{children:s.map((e=>(0,L.jsx)(z,{stepId:e.step_id},e.step_id)))})]})})})]})}z.displayName="StepError";var q=a(2605),H=a(74731);function $(){const{isInserterOpened:e,showIconLabels:t}=(0,p.Z)((e=>({isInserterOpened:e(P.storeName).isInserterSidebarOpened(),showIconLabels:e(P.storeName).isFeatureActive("showIconLabels")})),[]),{toggleInserterSidebar:a}=(0,S.Z)(P.storeName);return(0,L.jsx)(q.Z,{as:l.ZP,className:"edit-site-header-toolbar__inserter-toggle",variant:"primary",isPressed:e,onMouseDown:e=>e.preventDefault(),onClick:a,icon:H.Z,label:(0,g.__)("Toggle step inserter","mailpoet"),showTooltip:!t,children:t&&(e?(0,g.__)("Close","mailpoet"):(0,g.__)("Add","mailpoet"))})}var Y=a(53339),Q=a(60080),J=a(4751),X=a(28434),ee=a(38384),te=a(33512);function ae(e){let{scope:t,name:a,label:i,info:o,messageActivated:s,messageDeactivated:r,shortcut:l,onToggle:c=(()=>null),disabled:d=!1}=e;const m=(0,p.Z)((e=>!!e(te.h).get(t,a)),[a]),{toggle:u}=(0,S.Z)(te.h);return(0,n.createElement)(Q.Z,{icon:m&&X.Z,isSelected:m,onClick:()=>{c(),u(t,a),(()=>{if(m){const e=r||(0,J.sprintf)((0,J.__)("Preference deactivated - %s"),i);(0,ee.speak)(e)}else{const e=s||(0,J.sprintf)((0,J.__)("Preference activated - %s"),i);(0,ee.speak)(e)}})()},role:"menuitemcheckbox",info:o,shortcut:l,disabled:d},i)}var ie=a(67308);function oe(){const e=(0,p.Z)((e=>e(P.storeName).getAutomationData()));return(0,L.jsx)(b.Eo,{className:"edit-site-more-menu",popoverProps:{className:"edit-site-more-menu__content"},children:()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Y.Z,{label:(0,g._x)("View","noun","mailpoet"),children:(0,L.jsx)(ae,{scope:P.storeName,name:"fullscreenMode",label:(0,g.__)("Fullscreen mode","mailpoet"),info:(0,g.__)("Work without distraction","mailpoet"),messageActivated:(0,g.__)("Fullscreen mode activated","mailpoet"),messageDeactivated:(0,g.__)("Fullscreen mode deactivated","mailpoet"),shortcut:D.E_.secondary("f")})}),(0,L.jsxs)(Y.Z,{children:[(0,L.jsx)(Q.Z,{onClick:()=>{window.location.href=(0,j.f)(ie.MailPoet.urls.automationAnalytics,{id:e.id})},children:(0,g.__)("Analytics","mailpoet")}),(0,L.jsx)(Q.Z,{onClick:()=>{window.location.href=ie.MailPoet.urls.automationListing},children:(0,g.__)("View all automations","mailpoet")})]})]})})}var se=a(63062);function ne(e){let{onClose:t}=e;const[a,i]=(0,n.useState)(!1);return(0,L.jsxs)(se.Z,{className:"mailpoet-automation-deactivate-modal",title:(0,g.__)("Stop automation for all subscribers?","mailpoet"),onRequestClose:t,children:[(0,L.jsx)("p",{children:(0,g.__)("Are you sure you want to deactivate now? This would stop this automation for all subscribers immediately.","mailpoet")}),(0,L.jsx)(l.ZP,{isBusy:a,variant:"primary",onClick:()=>{i(!0),(0,u.dispatch)(P.storeName).deactivate(!0)},children:(0,g.__)("Deactivate now","mailpoet")}),(0,L.jsx)(l.ZP,{disabled:a,variant:"tertiary",onClick:t,children:(0,g.__)("Cancel","mailpoet")})]})}function re(e){let{onClose:t}=e;const{automationName:a}=(0,p.Z)((e=>({automationName:e(P.storeName).getAutomationData().name})),[]),[i,o]=(0,n.useState)(F.b.DEACTIVATING),[s,r]=(0,n.useState)(!1),c=(0,g.sprintf)((0,g.__)('Deactivate the "%s" automation?',"mailpoet"),a);return(0,L.jsxs)(se.Z,{className:"mailpoet-automation-deactivate-modal",title:c,onRequestClose:t,children:[(0,g.__)("Some subscribers entered but have not finished the flow. Let's decide what to do in this case.","mailpoet"),(0,L.jsxs)("ul",{className:"mailpoet-automation-options",children:[(0,L.jsx)("li",{children:(0,L.jsxs)("label",{className:i===F.b.DEACTIVATING?"mailpoet-automation-option active":"mailpoet-automation-option",children:[(0,L.jsx)("span",{children:(0,L.jsx)("input",{type:"radio",disabled:s,name:"deactivation-method",checked:i===F.b.DEACTIVATING,onChange:()=>o(F.b.DEACTIVATING)})}),(0,L.jsxs)("span",{children:[(0,L.jsx)("strong",{children:(0,g.__)("Let entered subscribers finish the flow","mailpoet")}),(0,g.__)("New subscribers won't enter, but recently entered could proceed.","mailpoet")]})]})}),(0,L.jsx)("li",{children:(0,L.jsxs)("label",{className:i===F.b.DRAFT?"mailpoet-automation-option active":"mailpoet-automation-option",children:[(0,L.jsx)("span",{children:(0,L.jsx)("input",{type:"radio",disabled:s,name:"deactivation-method",checked:i===F.b.DRAFT,onChange:()=>o(F.b.DRAFT)})}),(0,L.jsxs)("span",{children:[(0,L.jsx)("strong",{children:(0,g.__)("Stop automation for all subscribers","mailpoet")}),(0,g.__)("Automation will be deactivated for all the subscribers immediately.","mailpoet")]})]})})]}),(0,L.jsx)(l.ZP,{isBusy:s,variant:"primary",onClick:()=>{r(!0),(0,u.dispatch)(P.storeName).deactivate(i!==F.b.DEACTIVATING)},children:(0,g.__)("Deactivate automation","mailpoet")}),(0,L.jsx)(l.ZP,{disabled:s,variant:"tertiary",onClick:t,children:(0,g.__)("Cancel","mailpoet")})]})}function le(e){let{label:t}=e;const{errors:a,isDeactivating:i}=(0,p.Z)((e=>({errors:e(P.storeName).getErrors(),isDeactivating:e(P.storeName).getAutomationData().status===F.b.DEACTIVATING})),[]),{openActivationPanel:o}=(0,S.Z)(P.storeName),s=(0,L.jsx)(l.ZP,{variant:"primary",className:"editor-post-publish-button",onClick:o,disabled:i||!!a,children:t});return i?(0,L.jsx)(N.Z,{delay:0,text:(0,g.__)("Editing an active automation is temporarily unavailable. We are working on introducing this functionality.","mailpoet"),children:s}):s}function ce(){const{save:e}=(0,S.Z)(P.storeName),{automation:t,savedState:a}=(0,p.Z)((e=>({automation:e(P.storeName).getAutomationData(),savedState:e(P.storeName).getSavedState()})),[]),i="saving"===a||"saved"===a,o="saving"===a?(0,g.__)("Updating…","mailpoet"):(0,g.__)("Update","mailpoet");return 0===t.stats.totals.in_progress?(0,L.jsx)(l.ZP,{variant:"primary",className:"editor-post-publish-button",label:o,showTooltip:!0,shortcut:i?void 0:D.E_.primary("s"),isBusy:"saving"===a,disabled:i,"aria-disabled":i,onClick:e,children:o}):(0,L.jsx)(N.Z,{delay:0,text:(0,g.__)("Editing an active automation is temporarily unavailable. We are working on introducing this functionality.","mailpoet"),children:(0,L.jsx)(l.ZP,{variant:"primary",className:"editor-post-publish-button",onClick:e,disabled:!0,children:(0,g.__)("Update","mailpoet")})})}function de(){const e=(0,p.Z)((e=>e(P.storeName).getSavedState()),[]),{save:t}=(0,S.Z)(P.storeName),a=(0,n.useMemo)((()=>"saving"===e?(0,g.__)("Saving","mailpoet"):"saved"===e?(0,g.__)("Saved","mailpoet"):(0,g.__)("Save draft","mailpoet")),[e]),i="saving"===e||"saved"===e;return(0,L.jsxs)(l.ZP,{className:o()(["mailpoet-automation-editor-saved-state",`is-${e}`,{"components-animate__loading":"saving"===e}]),variant:"tertiary",label:a,shortcut:i?void 0:D.E_.primary("s"),showTooltip:!0,disabled:i,"aria-disabled":i,onClick:t,children:["saving"===e&&(0,L.jsx)(w.Z,{icon:A.Z}),"saved"===e&&(0,L.jsx)(w.Z,{icon:k.Z}),a]})}function me(){const[e,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(!1),{hasUsersInProgress:o}=(0,p.Z)((e=>({hasUsersInProgress:e(P.storeName).getAutomationData().stats.totals.in_progress>0})),[]);return(0,L.jsxs)(L.Fragment,{children:[e&&(0,L.jsx)(re,{onClose:()=>{t(!1)}}),(0,L.jsx)(l.ZP,{isBusy:a,variant:"tertiary",onClick:()=>{o?t(!0):(i(!0),(0,u.dispatch)(P.storeName).deactivate())},children:(0,g.__)("Deactivate","mailpoet")})]})}function ue(){const[e,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(!1),{hasUsersInProgress:o}=(0,p.Z)((e=>({hasUsersInProgress:e(P.storeName).getAutomationData().stats.totals.in_progress>0})),[]);return(0,L.jsxs)(L.Fragment,{children:[e&&(0,L.jsx)(ne,{onClose:()=>{t(!1)}}),(0,L.jsx)(l.ZP,{isBusy:a,variant:"tertiary",onClick:()=>{o?t(!0):(i(!0),(0,u.dispatch)(P.storeName).deactivate())},children:(0,g.__)("Deactivate now","mailpoet")})]})}function pe(e){let{showInserterToggle:t}=e;const{setAutomationName:a}=(0,S.Z)(P.storeName),{automationName:i,automationStatus:o}=(0,p.Z)((e=>({automationName:e(P.storeName).getAutomationData().name,automationStatus:e(P.storeName).getAutomationData().status})),[]);return(0,L.jsxs)("div",{className:"edit-site-header-edit-mode",children:[(0,L.jsx)("div",{className:"edit-site-header-edit-mode_start",children:(0,L.jsx)(y.Z,{className:"edit-site-header-edit-mode__toolbar",orientation:"horizontal",role:"toolbar",children:t&&(0,L.jsx)($,{})})}),(0,L.jsx)("div",{className:"edit-site-header-edit-mode_center",children:(0,L.jsx)(f.ErrorBoundary,{children:(0,L.jsx)(O,{children:()=>(0,L.jsxs)("div",{className:"mailpoet-automation-editor-dropdown-name-edit",children:[(0,L.jsx)("div",{className:"mailpoet-automation-editor-dropdown-name-edit-title",children:(0,g.__)("Automation name","mailpoet")}),(0,L.jsx)(Z.Z,{value:i,onChange:e=>a(e),help:(0,g.__)('Give the automation a name that indicates its purpose. E.g. "Abandoned cart recovery"',"mailpoet")})]})})})}),(0,L.jsx)("div",{className:"edit-site-header-edit-mode_end",children:(0,L.jsxs)("div",{className:"edit-site-header-edit-mode__actions",children:[(0,L.jsx)(f.ErrorBoundary,{children:(0,L.jsx)(W,{})}),o===F.b.DRAFT&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(de,{}),(0,L.jsx)(le,{label:(0,g.__)("Activate","mailpoet")})]}),o===F.b.ACTIVE&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(me,{}),(0,L.jsx)(ce,{})]}),o===F.b.DEACTIVATING&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(ue,{}),(0,L.jsx)(le,{label:(0,g.__)("Update & Activate","mailpoet")})]}),(0,L.jsx)(b.Ox.Slot,{scope:P.storeName}),(0,L.jsx)(oe,{})]})})]})}function he(){const{isSidebarOpened:e,selectedStep:t,savedState:a}=(0,p.Z)((e=>({isSidebarOpened:e(P.storeName).isSidebarOpened,selectedStep:e(P.storeName).getSelectedStep,savedState:e(P.storeName).getSavedState()}))),{openSidebar:i,closeSidebar:o,save:s,toggleFeature:r}=(0,S.Z)(P.storeName),{registerShortcut:l}=(0,S.Z)(x.h);return(0,n.useEffect)((()=>{l({name:"mailpoet/automation-editor/toggle-fullscreen",category:"global",description:(0,g.__)("Toggle fullscreen mode.","mailpoet"),keyCombination:{modifier:"secondary",character:"f"}}),l({name:"mailpoet/automation-editor/toggle-sidebar",category:"global",description:(0,g.__)("Show or hide the settings sidebar.","mailpoet"),keyCombination:{modifier:"primaryShift",character:","}}),l({name:"mailpoet/automation-editor/save",category:"global",description:(0,g.__)("Save your changes.","mailpoet"),keyCombination:{modifier:"primary",character:"s"}})}),[l]),(0,x.bx)("mailpoet/automation-editor/toggle-fullscreen",(()=>{r("fullscreenMode")})),(0,x.bx)("mailpoet/automation-editor/toggle-sidebar",(a=>{if(a.preventDefault(),e())o();else{const e=t()?P.stepSidebarKey:P.automationSidebarKey;i(e)}})),(0,x.bx)("mailpoet/automation-editor/save",(e=>{e.preventDefault(),"unsaved"===a&&s()})),null}a(4114);var _e=a(39737),ve=a(10328),be=a(57142),xe=a(46232);const ge=(0,n.forwardRef)((function(e,t){let{className:a,children:i,spokenMessage:s=i,politeness:r="polite",actions:c=[],onRemove:d,icon:m=null,explicitDismiss:u=!1,onDismiss:p,listRef:h}=e;function _(e){var t;e&&e.preventDefault&&e.preventDefault(),null==h||null===(t=h.current)||void 0===t||t.focus(),null==p||p(),null==d||d()}!function(e,t){const a="string"==typeof e?e:(0,xe.ZP)(e);(0,n.useEffect)((()=>{a&&(0,ee.speak)(a,t)}),[a,t])}(s,r),(0,n.useEffect)((()=>{const e=setTimeout((()=>{u||(null==p||p(),null==d||d())}),1e4);return()=>clearTimeout(e)}),[p,d,u]);const v=o()(a,"components-snackbar",{"components-snackbar-explicit-dismiss":!!u});c&&c.length>1&&("undefined"!=typeof process&&process.env,c=[c[0]]);const b=o()("components-snackbar__content",{"components-snackbar__content-with-icon":!!m});return(0,n.createElement)("div",{ref:t,className:v,onClick:u?void 0:_,tabIndex:0,role:u?"":"button",onKeyPress:u?void 0:_,"aria-label":u?"":(0,J.__)("Dismiss this notice")},(0,n.createElement)("div",{className:b},m&&(0,n.createElement)("div",{className:"components-snackbar__icon"},m),i,c.map(((e,t)=>{let{label:a,onClick:i,url:o}=e;return(0,n.createElement)(l.ZP,{key:t,href:o,variant:"tertiary",onClick:e=>function(e,t){e.stopPropagation(),null==d||d(),t&&t(e)}(e,i),className:"components-snackbar__action"},a)})),u&&(0,n.createElement)("span",{role:"button","aria-label":"Dismiss this notice",tabIndex:0,className:"components-snackbar__dismiss-button",onClick:_,onKeyPress:_},"✕")))}));var je=ge,fe=a(95073),Ne=a(52750);const ye={init:{height:0,opacity:0},open:{height:"auto",opacity:1,transition:{height:{stiffness:1e3,velocity:-100}}},exit:{opacity:0,transition:{duration:.5}}};var Ze=function(e){let{notices:t,className:a,children:i,onRemove:s}=e;const r=(0,n.useRef)(null),l=(0,be.Z)();a=o()("components-snackbar-list",a);const c=e=>()=>null==s?void 0:s(e.id);return(0,n.createElement)("div",{className:a,tabIndex:-1,ref:r},i,(0,n.createElement)(fe.M,null,t.map((e=>{const{content:t,...a}=e;return(0,n.createElement)(Ne.E.div,{layout:!l,initial:"init",animate:"open",exit:"exit",key:e.id,variants:l?void 0:ye},(0,n.createElement)("div",{className:"components-snackbar-list__notice-container"},(0,n.createElement)(je,(0,ve.Z)({},a,{onRemove:c(e),listRef:r}),e.content)))}))))};function Se(){const{notices:e}=(0,p.Z)((e=>({notices:e(m.store).getNotices()})),[]),{removeNotice:t}=(0,S.Z)(m.store),a=e.filter((e=>{let{isDismissible:t,type:a}=e;return t&&"default"===a})),i=e.filter((e=>{let{isDismissible:t,type:a}=e;return!t&&"default"===a})),o=e.filter((e=>{let{type:t}=e;return"snackbar"===t}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_e.Z,{notices:i,className:"mailpoet-automation-editor-notices__notice-list"}),(0,L.jsx)(_e.Z,{notices:a,className:"mailpoet-automation-editor-notices__notice-list",onRemove:t}),(0,L.jsx)(Ze,{notices:o,className:"mailpoet-automation-editor-notices__snackbar-list",onRemove:t})]})}var we=a(51213);function Ae(e){let{sidebarKey:t}=e;const{openSidebar:a}=(0,S.Z)(P.storeName),[i,o]=t===P.automationSidebarKey?[(0,g.__)("Automation (selected)","mailpoet"),"is-active"]:[(0,g.__)("Automation","mailpoet"),""],[s,n]=t===P.stepSidebarKey?[(0,g.__)("Step (selected)","mailpoet"),"is-active"]:[(0,g.__)("Step","mailpoet"),""];return(0,L.jsxs)("ul",{children:[(0,L.jsx)("li",{children:(0,L.jsx)(l.ZP,{onClick:()=>a(P.automationSidebarKey),className:`edit-site-sidebar-edit-mode__panel-tab ${o}`,"aria-label":i,"data-label":(0,g.__)("Automation","mailpoet"),children:(0,g.__)("Automation","mailpoet")})}),(0,L.jsx)("li",{children:(0,L.jsx)(l.ZP,{onClick:()=>a(P.stepSidebarKey),className:`edit-site-sidebar-edit-mode__panel-tab ${n}`,"aria-label":s,"data-label":(0,g.__)("Step","mailpoet"),children:(0,g.__)("Step","mailpoet")})})]})}var ke=a(68806),De=a(85606),Ce=a(47294),Ee=a(48927),Ie=a(66276);function Te(e){let{title:t,description:a,icon:i}=e;return(0,L.jsxs)("div",{className:"block-editor-block-card",children:[(0,L.jsx)(Ie.Z,{icon:i}),(0,L.jsxs)("div",{className:"block-editor-block-card__content",children:[(0,L.jsx)("h2",{className:"block-editor-block-card__title",children:t}),(0,L.jsx)("span",{className:"block-editor-block-card__description",children:a})]})]})}function Pe(){const{errors:e}=(0,p.Z)((e=>({errors:e(P.storeName).getStepError(e(P.storeName).getSelectedStep().id)})),[]);if(!e||!e?.fields)return null;const t=e.fields?.general;return t?(0,L.jsx)(ke.Z,{isDismissible:!1,status:"error",children:t}):null}function Fe(){const{selectedStep:e,selectedStepType:t}=(0,p.Z)((e=>({selectedStep:e(P.storeName).getSelectedStep(),selectedStepType:e(P.storeName).getSelectedStepType()})),[]);if(!e)return(0,L.jsx)(De.Z,{children:"No step selected."});if(!t)return(0,L.jsx)(De.Z,{children:"Unknown step type."});const a=t.edit;return(0,L.jsxs)("div",{className:"block-editor-block-inspector",children:[(0,L.jsx)(Pe,{}),(0,L.jsx)(Te,{title:t.title(e,"sidebar"),description:t.description(e,"sidebar"),icon:t.icon}),(0,L.jsx)(a,{},e.id),"trigger"===e.type&&(0,L.jsx)(Ee.G9,{strings:Ce.E})]})}var Le=a(86558),Oe=a(75871);function Ve(){const[e,t]=(0,n.useState)(!1),{automation:a}=(0,p.Z)((e=>({automation:e(P.storeName).getAutomationData()})),[]),{trash:i}=(0,S.Z)(P.storeName);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Oe.Z,{isOpen:e,title:(0,g.__)("Delete automation","mailpoet"),confirmButtonText:(0,g.__)("Yes, delete","mailpoet"),onConfirm:async()=>{i((()=>{t(!1)}))},onCancel:()=>t(!1),__experimentalHideHeader:!1,children:[(0,g.sprintf)((0,g.__)('You are about to delete the automation "%s".',"mailpoet"),a.name),(0,L.jsx)("br",{}),(0,g.__)(" This will stop it for all subscribers immediately.","mailpoet")]}),(0,L.jsx)(l.ZP,{variant:"secondary",isDestructive:!0,onClick:()=>t(!0),children:(0,g.__)("Move to Trash","mailpoet")})]})}var Re=a(34379),Ke=a(84209);function Me(){const e=Ke.Hooks.applyFilters("mailpoet.automation.settings.render",{});return 0===Object.keys(e).length?null:(0,L.jsx)(De.Z,{title:(0,g.__)("Automation settings","mailpoet"),initialOpen:!0,children:Object.keys(e).map((t=>(0,L.jsx)(Le.Z,{children:e[t]},t)))})}function Be(){const{automationData:e}=(0,p.Z)((e=>({automationData:e(P.storeName).getAutomationData()})),[]),t={year:"numeric",month:"long",day:"numeric"};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(De.Z,{title:(0,g.__)("Automation details","mailpoet"),initialOpen:!0,children:[(0,L.jsxs)(Le.Z,{children:[(0,L.jsx)("strong",{children:"Date added"})," ",new Date(Date.parse(e.created_at)).toLocaleDateString(Re.locale.toString(),t)]}),(0,L.jsxs)(Le.Z,{children:[(0,L.jsx)("strong",{children:"Activated"})," ","active"===e.status&&new Date(Date.parse(e.updated_at)).toLocaleDateString(Re.locale.toString(),t),"active"!==e.status&&e.activated_at&&new Date(Date.parse(e.activated_at)).toLocaleDateString(Re.locale.toString(),t),"active"!==e.status&&!e.activated_at&&(0,L.jsx)("span",{className:"mailpoet-deactive",children:"Not activated yet."})]}),(0,L.jsxs)(Le.Z,{children:[(0,L.jsx)("strong",{children:"Author"})," ",e.author.name]}),(0,L.jsx)(Le.Z,{children:(0,L.jsx)(Ve,{})})]}),(0,L.jsx)(Me,{})]})}const Ge=_({web:!0,native:!1});function Ue(e){const{keyboardShortcut:t,sidebarKey:a,showIconLabels:i,automationName:o}=(0,p.Z)((e=>({keyboardShortcut:e(x.h).getShortcutRepresentation("mailpoet/automation-editor/toggle-sidebar"),sidebarKey:e(b.h).getActiveComplementaryArea(P.storeName)??P.automationSidebarKey,showIconLabels:e(P.storeName).isFeatureActive("showIconLabels"),automationName:e(P.storeName).getAutomationData().name})),[]);return(0,L.jsxs)(b.Vi,{identifier:a,header:(0,L.jsx)(Ae,{sidebarKey:a}),closeLabel:(0,g.__)("Close settings","mailpoet"),headerClassName:"edit-site-sidebar-edit-mode__panel-tabs",title:(0,g.__)("Settings","mailpoet"),icon:we.Z,className:"edit-site-sidebar mailpoet-automation-sidebar",panelClassName:"edit-site-sidebar",smallScreenTitle:o||(0,g.__)("(no title)","mailpoet"),scope:P.storeName,toggleShortcut:t,isActiveByDefault:Ge,showIconLabels:i,...e,children:[a===P.automationSidebarKey&&(0,L.jsx)(Be,{}),a===P.stepSidebarKey&&(0,L.jsx)(Fe,{})]})}var ze=a(75233),We=a(96854),qe=a(92873),He=a(53376),$e=a(79820),Ye=a(55382),Qe=a(77159),Je=a(79951),Xe=a(15128);function et(e){let{onClose:t}=e;const[a,i]=(0,n.useState)(!1),{activate:o}=(0,S.Z)(P.storeName);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)("div",{className:"mailpoet-automation-activate-panel__header",children:[(0,L.jsx)("div",{className:"mailpoet-automation-activate-panel__header-activate-button",children:(0,L.jsxs)(l.ZP,{variant:"primary",disabled:a,isBusy:a,autoFocus:!a,onClick:()=>{i(!0),o()},children:[a&&(0,g.__)("Activating…","mailpoet"),!a&&(0,g.__)("Activate","mailpoet")]})}),(0,L.jsx)("div",{className:"mailpoet-automation-activate-panel__header-cancel-button",children:(0,L.jsx)(l.ZP,{variant:"secondary",onClick:t,disabled:a,children:(0,g.__)("Cancel","mailpoet")})})]}),a&&(0,L.jsx)("div",{className:"mailpoet-automation-activate-panel__body",children:(0,L.jsx)(Je.ZP,{})}),!a&&(0,L.jsxs)("div",{className:"mailpoet-automation-activate-panel__body",children:[(0,L.jsx)("p",{children:(0,L.jsx)("strong",{children:(0,g.__)("Are you ready to activate?","mailpoet")})}),(0,L.jsx)("p",{children:(0,g.__)("Double-check your settings before activating.","mailpoet")})]})]})}function tt(e){let{onClose:t}=e;const{automation:a}=(0,p.Z)((e=>({automation:e(P.storeName).getAutomationData()})),[]);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"mailpoet-automation-activate-panel__header",children:(0,L.jsx)(l.ZP,{icon:Xe.Z,onClick:t,label:(0,g.__)("Close","mailpoet")})}),(0,L.jsxs)("div",{className:"mailpoet-automation-activate-panel__body",children:[(0,L.jsx)("div",{className:"mailpoet-automation-activate-panel__section",children:(0,g.sprintf)((0,g.__)('"%s" is now live.',"mailpoet"),a.name)}),(0,L.jsx)("p",{children:(0,L.jsx)("strong",{children:(0,g.__)("What’s next?","mailpoet")})}),(0,L.jsx)("p",{children:(0,g.__)("View all your automations to track statistics and create new ones.","mailpoet")}),(0,L.jsx)(l.ZP,{variant:"secondary",onClick:()=>{window.location.href=ie.MailPoet.urls.automationListing},children:(0,g.__)("View all automations","mailpoet")})]})]})}function at(){const{automation:e,errors:t}=(0,p.Z)((e=>({errors:e(P.storeName).getErrors(),automation:e(P.storeName).getAutomationData()})),[]),{closeActivationPanel:a}=(0,S.Z)(P.storeName);if((0,n.useEffect)((()=>{t&&a()}),[t,a]),t)return null;const i=e.status===F.b.ACTIVE;return(0,L.jsxs)("div",{className:"mailpoet-automation-activate-panel",children:[i&&(0,L.jsx)(tt,{onClose:a}),!i&&(0,L.jsx)(et,{onClose:a})]})}function it(e){return"saved"!==(0,u.select)(P.storeName).getSavedState()?(e.returnValue=(0,g.__)("There are unsaved changes that will be lost. Do you want to continue?","mailpoet"),e.returnValue):""}function ot(){const{isFullscreenActive:e,isInserterOpened:t,isActivationPanelOpened:a,isSidebarOpened:i,showIconLabels:s,automation:h}=(0,p.Z)((e=>({isFullscreenActive:e(P.storeName).isFeatureActive("fullscreenMode"),isInserterOpened:e(P.storeName).isInserterSidebarOpened(),isSidebarOpened:e(P.storeName).isSidebarOpened(),isActivationPanelOpened:e(P.storeName).isActivationPanelOpened(),showIconLabels:e(P.storeName).isFeatureActive("showIconLabels"),automation:e(P.storeName).getAutomationData()})),[]),[_,f]=(0,n.useState)(!0);(0,n.useEffect)((()=>(window.addEventListener("beforeunload",it),()=>window.removeEventListener("beforeunload",it))),[]),(0,n.useEffect)((()=>{_&&(function(){const e=(0,u.select)(P.storeName).getAutomationData();if(![F.b.ACTIVE,F.b.DEACTIVATING].includes(e.status))return;if(0===e.stats.totals.in_progress)return;const{createNotice:t}=(0,u.dispatch)(m.store);t("success",(0,g.__)("Editing an active automation is temporarily unavailable. We are working on introducing this functionality.","mailpoet"),{type:"snackbar"})}(),f(!1))}),[_]);const N=o()("interface-interface-skeleton",{"is-sidebar-opened":i,"show-icon-labels":s});return"trash"===h.status?(window.location.href=(0,j.f)(ie.MailPoet.urls.automationListing,{[Ye.E.automationHadBeenDeleted]:h.id}),null):(0,L.jsx)(x.vn,{children:(0,L.jsxs)(r.zt,{children:[(0,L.jsx)(b.x4,{isActive:e}),(0,L.jsx)(he,{}),(0,L.jsx)(Ue,{}),(0,L.jsx)(b.v4,{className:N,drawer:e&&(0,L.jsx)("div",{className:"edit-site-navigation-toggle",children:(0,L.jsx)(l.ZP,{className:"edit-site-navigation-toggle__button has-icon",href:"admin.php?page=mailpoet-automation",children:(0,L.jsx)(c.Z,{size:36,icon:v.Z})})}),header:(0,L.jsx)(pe,{showInserterToggle:!1}),content:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Se,{}),(0,L.jsx)(ze.q,{context:"edit"})]}),sidebar:(0,L.jsx)(b.Vi.Slot,{scope:P.storeName}),secondarySidebar:null}),a&&(0,L.jsx)(at,{}),(0,L.jsx)(d.Z.Slot,{})]})})}window.addEventListener("DOMContentLoaded",(()=>{if((0,g.setLocaleData)(window.wp.i18n.getLocaleData()),void 0!==window.wp.date.getSettings){const e=window.wp;(0,h.setSettings)(e.date.getSettings())}else{const e=window.wp;(0,h.setSettings)(e.date.__experimentalGetSettings())}(0,P.createStore)();const e=_({web:!0,native:!1});(0,u.dispatch)(b.h).enableComplementaryArea(P.storeName,e?P.automationSidebarKey:void 0);const t=document.getElementById("mailpoet_automation_editor");t&&((0,f.registerTranslations)(),Qe.Z.use((async(e,t)=>{try{return await t(e)}catch(e){const t=e,a=t.data?.status;if("mailpoet_automation_not_valid"===t.code)return void(0,u.dispatch)(P.storeName).setErrors({steps:t.data.errors});if(a&&a>=400&&a<500){const e=t.message;return(0,u.dispatch)(m.store).createErrorNotice(e??(0,g.__)("An unknown error occurred.","mailpoet"),{explicitDismiss:!0}),void(0,u.dispatch)(P.storeName).setErrors({steps:[]})}throw(0,u.dispatch)(m.store).createErrorNotice((0,g.__)("An unknown error occurred.","mailpoet"),{explicitDismiss:!0}),e}})),(0,We.q)(),(0,qe.j)(),(0,He.j)(),(0,$e.j)(),s.render((0,L.jsx)(ot,{}),t))}))},65311:function(e){e.exports=jQuery}},function(e){e.O(0,[351],(function(){return 82909,e(e.s=82909)})),e.O()}]);