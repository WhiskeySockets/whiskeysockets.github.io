"use strict";(self.webpackChunkwhiskeysockets_github_io=self.webpackChunkwhiskeysockets_github_io||[]).push([[8193],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>g});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(o),y=n,g=u["".concat(p,".").concat(y)]||u[y]||d[y]||s;return o?r.createElement(g,a(a({ref:t},l),{},{components:o})):r.createElement(g,a({ref:t},l))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,a=new Array(s);a[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},6983:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const s={sidebar_position:1},a="Misc",i={unversionedId:"tutorial-extras/misc",id:"tutorial-extras/misc",title:"Misc",description:"To check if a given ID is on WhatsApp",source:"@site/docs/tutorial-extras/misc.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/misc",permalink:"/docs/tutorial-extras/misc",draft:!1,editUrl:"https://github.com/WhiskeySockets/whiskeysockets.github.io/tree/main/docs/tutorial-extras/misc.md",tags:[],version:"current",lastUpdatedAt:1684889337,formattedLastUpdatedAt:"May 24, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorial - Extras",permalink:"/docs/category/tutorial---extras"},next:{title:"Groups",permalink:"/docs/tutorial-extras/groups"}},p={},c=[{value:"To check if a given ID is on WhatsApp",id:"to-check-if-a-given-id-is-on-whatsapp",level:2},{value:"To query chat history on a group or with someone",id:"to-query-chat-history-on-a-group-or-with-someone",level:2},{value:"To get the status of some person",id:"to-get-the-status-of-some-person",level:2},{value:"To change your profile status",id:"to-change-your-profile-status",level:2},{value:"To change your profile name",id:"to-change-your-profile-name",level:2},{value:"To get the display picture of some person/group",id:"to-get-the-display-picture-of-some-persongroup",level:2},{value:"To change your display picture or a group&#39;s",id:"to-change-your-display-picture-or-a-groups",level:2},{value:"To remove your display picture or a group&#39;s",id:"to-remove-your-display-picture-or-a-groups",level:2},{value:"To get someone&#39;s presence (if they&#39;re typing or online)",id:"to-get-someones-presence-if-theyre-typing-or-online",level:2},{value:"To block or unblock user",id:"to-block-or-unblock-user",level:2},{value:"To get a business profile, such as description or category",id:"to-get-a-business-profile-such-as-description-or-category",level:2}],l={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"misc"},"Misc"),(0,n.kt)("h2",{id:"to-check-if-a-given-id-is-on-whatsapp"},"To check if a given ID is on WhatsApp"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"``` ts\nconst id = '123456'\nconst [result] = await sock.onWhatsApp(id)\nif (result.exists) console.log (`${id} exists on WhatsApp, as jid: ${result.jid}`)\n```\n")),(0,n.kt)("h2",{id:"to-query-chat-history-on-a-group-or-with-someone"},"To query chat history on a group or with someone"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"TODO, if possible\n")),(0,n.kt)("h2",{id:"to-get-the-status-of-some-person"},"To get the status of some person"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'``` ts\nconst status = await sock.fetchStatus("xyz@s.whatsapp.net")\nconsole.log("status: " + status)\n```\n')),(0,n.kt)("h2",{id:"to-change-your-profile-status"},"To change your profile status"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"``` ts\nconst status = 'Hello World!'\nawait sock.updateProfileStatus(status)\n```\n")),(0,n.kt)("h2",{id:"to-change-your-profile-name"},"To change your profile name"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"``` ts\nconst name = 'My name'\nawait sock.updateProfileName(name)\n```\n")),(0,n.kt)("h2",{id:"to-get-the-display-picture-of-some-persongroup"},"To get the display picture of some person/group"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'``` ts\n// for low res picture\nconst ppUrl = await sock.profilePictureUrl("xyz@g.us")\nconsole.log("download profile picture from: " + ppUrl)\n// for high res picture\nconst ppUrl = await sock.profilePictureUrl("xyz@g.us", \'image\')\n```\n')),(0,n.kt)("h2",{id:"to-change-your-display-picture-or-a-groups"},"To change your display picture or a group's"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"``` ts\nconst jid = '111234567890-1594482450@g.us' // can be your own too\nawait sock.updateProfilePicture(jid, { url: './new-profile-picture.jpeg' })\n```\n")),(0,n.kt)("h2",{id:"to-remove-your-display-picture-or-a-groups"},"To remove your display picture or a group's"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"``` ts\nconst jid = '111234567890-1594482450@g.us' // can be your own too\nawait sock.removeProfilePicture(jid)\n```\n")),(0,n.kt)("h2",{id:"to-get-someones-presence-if-theyre-typing-or-online"},"To get someone's presence (if they're typing or online)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"``` ts\n// the presence update is fetched and called here\nsock.ev.on('presence-update', json => console.log(json))\n// request updates for a chat\nawait sock.presenceSubscribe(\"xyz@s.whatsapp.net\") \n```\n")),(0,n.kt)("h2",{id:"to-block-or-unblock-user"},"To block or unblock user"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'``` ts\nawait sock.updateBlockStatus("xyz@s.whatsapp.net", "block") // Block user\nawait sock.updateBlockStatus("xyz@s.whatsapp.net", "unblock") // Unblock user\n```\n')),(0,n.kt)("h2",{id:"to-get-a-business-profile-such-as-description-or-category"},"To get a business profile, such as description or category"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'```ts\nconst profile = await sock.getBusinessProfile("xyz@s.whatsapp.net")\nconsole.log("business description: " + profile.description + ", category: " + profile.category)\n```\n')),(0,n.kt)("p",null,"Of course, replace ",(0,n.kt)("inlineCode",{parentName:"p"},"xyz")," with an actual ID."))}d.isMDXComponent=!0}}]);