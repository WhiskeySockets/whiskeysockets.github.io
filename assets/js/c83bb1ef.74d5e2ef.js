"use strict";(self.webpackChunkwhiskeysockets_github_io=self.webpackChunkwhiskeysockets_github_io||[]).push([[7800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),d=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return s.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),c=a,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return n?s.createElement(g,o(o({ref:t},p),{},{components:n})):s.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:a,o[1]=r;for(var d=2;d<i;d++)o[d]=n[d];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var s=n(7462),a=(n(7294),n(3905));const i={sidebar_position:5},o="Sending Messages",r={unversionedId:"tutorial-basics/sending-messages",id:"tutorial-basics/sending-messages",title:"Sending Messages",description:"Send all types of messages with a single function:",source:"@site/docs/tutorial-basics/sending-messages.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/sending-messages",permalink:"/docs/tutorial-basics/sending-messages",draft:!1,editUrl:"https://github.com/WhiskeySockets/whiskeysockets.github.io/tree/main/docs/tutorial-basics/sending-messages.md",tags:[],version:"current",lastUpdatedAt:1684331768,formattedLastUpdatedAt:"May 17, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Implementing a Data Store",permalink:"/docs/tutorial-basics/implementing-data-store"},next:{title:"Forwarding Messages",permalink:"/docs/tutorial-basics/forwarding-messages"}},l={},d=[{value:"Non-Media Messages",id:"non-media-messages",level:3},{value:"Sending messages with link previews",id:"sending-messages-with-link-previews",level:3},{value:"Media Messages",id:"media-messages",level:3},{value:"Notes",id:"notes",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-messages"},"Sending Messages"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Send all types of messages with a single function:")),(0,a.kt)("h3",{id:"non-media-messages"},"Non-Media Messages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { MessageType, MessageOptions, Mimetype } from "@whiskeysockets/baileys";\n\nconst id = "abcd@s.whatsapp.net"; // the WhatsApp ID\n// send a simple text!\nconst sentMsg = await sock.sendMessage(id, { text: "oh hello there" });\n// send a reply messagge\nconst sentMsg = await sock.sendMessage(\n  id,\n  { text: "oh hello there" },\n  { quoted: message }\n);\n// send a mentions message\nconst sentMsg = await sock.sendMessage(id, {\n  text: "@12345678901",\n  mentions: ["12345678901@s.whatsapp.net"],\n});\n// send a location!\nconst sentMsg = await sock.sendMessage(id, {\n  location: { degreesLatitude: 24.121231, degreesLongitude: 55.1121221 },\n});\n// send a contact!\nconst vcard =\n  "BEGIN:VCARD\\n" + // metadata of the contact card\n  "VERSION:3.0\\n" +\n  "FN:Jeff Singh\\n" + // full name\n  "ORG:Ashoka Uni;\\n" + // the organization of the contact\n  "TEL;type=CELL;type=VOICE;waid=911234567890:+91 12345 67890\\n" + // WhatsApp ID + phone number\n  "END:VCARD";\nconst sentMsg = await sock.sendMessage(id, {\n  contacts: {\n    displayName: "Jeff",\n    contacts: [{ vcard }],\n  },\n});\n\n// send a buttons message!\nconst buttons = [\n  { buttonId: "id1", buttonText: { displayText: "Button 1" }, type: 1 },\n  { buttonId: "id2", buttonText: { displayText: "Button 2" }, type: 1 },\n  { buttonId: "id3", buttonText: { displayText: "Button 3" }, type: 1 },\n];\n\nconst buttonMessage = {\n  text: "Hi it\'s button message",\n  footer: "Hello World",\n  buttons: buttons,\n  headerType: 1,\n};\n\nconst sendMsg = await sock.sendMessage(id, buttonMessage);\n\n//send a template message!\nconst templateButtons = [\n  {\n    index: 1,\n    urlButton: {\n      displayText: "\u2b50 Star Baileys on GitHub!",\n      url: "https://github.com/adiwajshing/Baileys",\n    },\n  },\n  {\n    index: 2,\n    callButton: { displayText: "Call me!", phoneNumber: "+1 (234) 5678-901" },\n  },\n  {\n    index: 3,\n    quickReplyButton: {\n      displayText: "This is a reply, just like normal buttons!",\n      id: "id-like-buttons-message",\n    },\n  },\n];\n\nconst templateMessage = {\n  text: "Hi it\'s a template message",\n  footer: "Hello World",\n  templateButtons: templateButtons,\n};\n\nconst sendMsg = await sock.sendMessage(id, templateMessage);\n\n// send a list message!\nconst sections = [\n  {\n    title: "Section 1",\n    rows: [\n      { title: "Option 1", rowId: "option1" },\n      {\n        title: "Option 2",\n        rowId: "option2",\n        description: "This is a description",\n      },\n    ],\n  },\n  {\n    title: "Section 2",\n    rows: [\n      { title: "Option 3", rowId: "option3" },\n      {\n        title: "Option 4",\n        rowId: "option4",\n        description: "This is a description V2",\n      },\n    ],\n  },\n];\n\nconst listMessage = {\n  text: "This is a list",\n  footer: "nice footer, link: https://google.com",\n  title: "Amazing boldfaced list title",\n  buttonText: "Required, text on the button to view the list",\n  sections,\n};\n\nconst sendMsg = await sock.sendMessage(id, listMessage);\n\nconst reactionMessage = {\n  react: {\n    text: "\ud83d\udc96", // use an empty string to remove the reaction\n    key: message.key,\n  },\n};\n\nconst sendMsg = await sock.sendMessage(id, reactionMessage);\n')),(0,a.kt)("h3",{id:"sending-messages-with-link-previews"},"Sending messages with link previews"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"By default, WA MD does not have link generation when sent from the web"),(0,a.kt)("li",{parentName:"ol"},"Baileys has a function to generate the content for these link previews"),(0,a.kt)("li",{parentName:"ol"},"To enable this function's usage, add ",(0,a.kt)("inlineCode",{parentName:"li"},"link-preview-js")," as a dependency to your project with ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add link-preview-js")),(0,a.kt)("li",{parentName:"ol"},"Send a link:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// send a link\nconst sentMsg = await sock.sendMessage(id, {\n  text: "Hi, this was sent using https://github.com/adiwajshing/baileys",\n});\n')),(0,a.kt)("h3",{id:"media-messages"},"Media Messages"),(0,a.kt)("p",null,"Sending media (video, stickers, images) is easier & more efficient than ever."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can specify a buffer, a local url or even a remote url."),(0,a.kt)("li",{parentName:"ul"},"When specifying a media url, Baileys never loads the entire buffer into memory; it even encrypts the media as a readable stream.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { MessageType, MessageOptions, Mimetype } from '@whiskeysockets/baileys'\n// Sending gifs\nawait sock.sendMessage(\n    id,\n    {\n        video: fs.readFileSync(\"Media/ma_gif.mp4\"),\n        caption: \"hello!\",\n        gifPlayback: true\n    }\n)\n\nawait sock.sendMessage(\n    id,\n    {\n        video: \"./Media/ma_gif.mp4\",\n        caption: \"hello!\",\n        gifPlayback: true\n    }\n)\n\n// send an audio file\nawait sock.sendMessage(\n    id,\n    { audio: { url: \"./Media/audio.mp3\" }, mimetype: 'audio/mp4' }\n    { url: \"Media/audio.mp3\" }, // can send mp3, mp4, & ogg\n)\n\n// send a buttons message with image header!\nconst buttons = [\n  {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},\n  {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1},\n  {buttonId: 'id3', buttonText: {displayText: 'Button 3'}, type: 1}\n]\n\nconst buttonMessage = {\n    image: {url: 'https://example.com/image.jpeg'},\n    caption: \"Hi it's button message\",\n    footer: 'Hello World',\n    buttons: buttons,\n    headerType: 4\n}\n\nconst sendMsg = await sock.sendMessage(id, buttonMessage)\n\n//send a template message with an image **attached**!\nconst templateButtons = [\n  {index: 1, urlButton: {displayText: '\u2b50 Star Baileys on GitHub!', url: 'https://github.com/adiwajshing/Baileys'}},\n  {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+1 (234) 5678-901'}},\n  {index: 3, quickReplyButton: {displayText: 'This is a reply, just like normal buttons!', id: 'id-like-buttons-message'}},\n]\n\nconst buttonMessage = {\n    text: \"Hi it's a template message\",\n    footer: 'Hello World',\n    templateButtons: templateButtons,\n    image: {url: 'https://example.com/image.jpeg'}\n}\n\nconst sendMsg = await sock.sendMessage(id, templateMessage)\n")),(0,a.kt)("h3",{id:"notes"},"Notes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id")," is the WhatsApp ID of the person or group you're sending the message to.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"It must be in the format ",(0,a.kt)("inlineCode",{parentName:"li"},"[country code][phone number]@s.whatsapp.net"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Example for people: ",(0,a.kt)("inlineCode",{parentName:"li"},"+19999999999@s.whatsapp.net"),"."),(0,a.kt)("li",{parentName:"ul"},"For groups, it must be in the format ",(0,a.kt)("inlineCode",{parentName:"li"},"123456789-123345@g.us"),"."))),(0,a.kt)("li",{parentName:"ul"},"For broadcast lists, it's ",(0,a.kt)("inlineCode",{parentName:"li"},"[timestamp of creation]@broadcast"),"."),(0,a.kt)("li",{parentName:"ul"},"For stories, the ID is ",(0,a.kt)("inlineCode",{parentName:"li"},"status@broadcast"),"."))),(0,a.kt)("li",{parentName:"ul"},"For media messages, the thumbnail can be generated automatically for images & stickers provided you add ",(0,a.kt)("inlineCode",{parentName:"li"},"jimp")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"sharp")," as a dependency in your project using ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add jimp")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn add sharp"),". Thumbnails for videos can also be generated automatically, though, you need to have ",(0,a.kt)("inlineCode",{parentName:"li"},"ffmpeg")," installed on your system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MiscGenerationOptions"),": some extra info about the message. It can have the following ",(0,a.kt)("strong",{parentName:"li"},"optional")," values:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const info: MessageOptions = {\n  quoted: quotedMessage, // the message you want to quote\n  contextInfo: { forwardingScore: 2, isForwarded: true }, // some random context info (can show a forwarded message with this too)\n  timestamp: Date(), // optional, if you want to manually set the timestamp of the message\n  caption: "hello there!", // (for media messages) the caption to send with the media (cannot be sent with stickers though)\n  jpegThumbnail:\n    "23GD#4/==" /*  (for location & media messages) has to be a base 64 encoded JPEG if you want to send a custom thumb, \n                                or set to null if you don\'t want to send a thumbnail.\n                                Do not enter this field if you want to automatically generate a thumb\n                            */,\n  mimetype:\n    Mimetype.pdf /* (for media messages) specify the type of media (optional for all media types except documents),\n                                import {Mimetype} from \'@whiskeysockets/baileys\'\n                            */,\n  fileName: "somefile.pdf", // (for media messages) file name for the media\n  /* will send audio messages as voice notes, if set to true */\n  ptt: true,\n  /** Should it send as a disappearing messages.\n   * By default \'chat\' -- which follows the setting of the chat */\n  ephemeralExpiration: WA_DEFAULT_EPHEMERAL,\n};\n')))))}u.isMDXComponent=!0}}]);