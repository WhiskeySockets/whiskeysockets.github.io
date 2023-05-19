"use strict";(self.webpackChunkwhiskeysockets_github_io=self.webpackChunkwhiskeysockets_github_io||[]).push([[6886],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>g});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=s,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(g,o(o({ref:t},l),{},{components:a})):n.createElement(g,o({ref:t},l))}));function g(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[m]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<r;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),s=(a(7294),a(3905));const r={sidebar_position:9},o="Downloading Media Messages",i={unversionedId:"tutorial-basics/downloading-media-messages",id:"tutorial-basics/downloading-media-messages",title:"Downloading Media Messages",description:"If you want to save the media you received",source:"@site/docs/tutorial-basics/downloading-media-messages.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/downloading-media-messages",permalink:"/docs/tutorial-basics/downloading-media-messages",draft:!1,editUrl:"https://github.com/WhiskeySockets/whiskeysockets.github.io/tree/main/docs/tutorial-basics/downloading-media-messages.md",tags:[],version:"current",lastUpdatedAt:1684331768,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Update Presence",permalink:"/docs/tutorial-basics/update-presence"},next:{title:"Deleting Messages",permalink:"/docs/tutorial-basics/deleting-messages"}},c={},d=[],l={toc:d},m="wrapper";function p(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"downloading-media-messages"},"Downloading Media Messages"),(0,s.kt)("p",null,"If you want to save the media you received"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { writeFile } from 'fs/promises'\nimport { downloadMediaMessage } from '@whiskeysockets/baileys'\n\nsock.ev.on('messages.upsert', async ({ messages }) => {\n    const m = messages[0]\n\n    if (!m.message) return // if there is no text or media message\n    const messageType = Object.keys (m.message)[0]// get what type of message it is -- text, image, video\n    // if the message is an image\n    if (messageType === 'imageMessage') {\n        // download the message\n        const buffer = await downloadMediaMessage(\n            m,\n            'buffer',\n            { },\n            {\n                logger,\n                // pass this so that baileys can request a reupload of media\n                // that has been deleted\n                reuploadRequest: sock.updateMediaMessage\n            }\n        )\n        // save to file\n        await writeFile('./my-download.jpeg', buffer)\n    }\n}\n")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"WhatsApp automatically removes old media from their servers. For the device to access said media -- a re-upload is required by another device that has it. This can be accomplished using:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const updatedMediaMsg = await sock.updateMediaMessage(msg);\n")))}p.isMDXComponent=!0}}]);