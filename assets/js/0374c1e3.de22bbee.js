"use strict";(self.webpackChunkwhiskeysockets_github_io=self.webpackChunkwhiskeysockets_github_io||[]).push([[3516],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>b});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),l=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(b,s(s({ref:e},u),{},{components:r})):a.createElement(b,s({ref:e},u))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9328:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4},s="Broadcast Lists & Stories",i={unversionedId:"tutorial-extras/broadcast",id:"tutorial-extras/broadcast",title:"Broadcast Lists & Stories",description:"Messages currently cannot be sent to broadcast lists from the MD version.",source:"@site/docs/tutorial-extras/broadcast.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/broadcast",permalink:"/docs/tutorial-extras/broadcast",draft:!1,editUrl:"https://github.com/WhiskeySockets/whiskeysockets.github.io/tree/main/docs/tutorial-extras/broadcast.md",tags:[],version:"current",lastUpdatedAt:1684888630,formattedLastUpdatedAt:"May 24, 2023",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Privacy",permalink:"/docs/tutorial-extras/privacy"},next:{title:"Writing Custom Functionality",permalink:"/docs/tutorial-extras/writing-custom-functionality"}},c={},l=[],u={toc:l},p="wrapper";function d(t){let{components:e,...r}=t;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"broadcast-lists--stories"},"Broadcast Lists & Stories"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Messages currently cannot be sent to broadcast lists from the MD version.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can send messages to broadcast lists the same way you send messages to groups & individual chats."),(0,n.kt)("li",{parentName:"ul"},"Right now, WA Web does not support creating broadcast lists, but you can still delete them."),(0,n.kt)("li",{parentName:"ul"},"Broadcast IDs are in the format ",(0,n.kt)("inlineCode",{parentName:"li"},"12345678@broadcast")),(0,n.kt)("li",{parentName:"ul"},"To query a broadcast list's recipients & name:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},'const bList = await sock.getBroadcastListInfo("1234@broadcast");\nconsole.log(`list name: ${bList.name}, recps: ${bList.recipients}`);\n')))))}d.isMDXComponent=!0}}]);