import{s as e}from"./iframe-iVJaVP6i.js";import{t}from"./react-CSnire63.js";import{t as n}from"./jsx-runtime-Ckq3jFiP.js";import{t as r}from"./ChatButton-Cb8daWlG.js";import{t as i}from"./ChatPanel-C6b2V4hs.js";var a=e(t(),1);function o(e=`ask-widget-session`,t=[]){let[n,r]=(0,a.useState)(()=>{try{let n=localStorage.getItem(`widget-session-${e}`);return n?JSON.parse(n).map(e=>({...e,timestamp:new Date(e.timestamp)})):t}catch(e){return console.warn(`Failed to load chat session`,e),t}});return(0,a.useEffect)(()=>{try{localStorage.setItem(`widget-session-${e}`,JSON.stringify(n))}catch(e){console.warn(`Failed to save chat session`,e)}},[n,e]),{messages:n,addMessage:(0,a.useCallback)(e=>{r(t=>[...t,e])},[]),updateMessage:(0,a.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t}:n))},[]),clearSession:(0,a.useCallback)(()=>{r(t),localStorage.removeItem(`widget-session-${e}`)},[e,t]),setMessages:r}}var s=()=>performance.now(),c=e=>typeof crypto<`u`&&typeof crypto.randomUUID==`function`?`${e}-${crypto.randomUUID()}`:`${e}-${Date.now()}-${Math.random().toString(16).slice(2)}`,l=(e,t,n=!1)=>({id:c(e),role:e,content:t,timestamp:new Date,cached:n}),u=e=>typeof e==`object`&&!!e&&Symbol.asyncIterator in e&&typeof e[Symbol.asyncIterator]==`function`;async function*d(e){let t=await e;if(u(t)){for await(let e of t)yield e;return}yield t}function f({initialMessage:e,streamResponse:t,persistenceKey:n}={}){let r=e?[l(`assistant`,e,!0)]:[],{messages:i,setMessages:c,clearSession:u}=o(n||`ask_widget_temp`,r),[f,p]=(0,a.useState)(!1),[m,h]=(0,a.useState)(null),[g,_]=(0,a.useState)(null),[v,y]=(0,a.useState)(``);return{messages:i,isStreaming:f,latency:m,activeStreamId:g,inputValue:v,setInputValue:y,sendMessage:(0,a.useCallback)(async e=>{let n=e.trim();if(!n||f)return;let r=s(),a=l(`user`,n),o=l(`assistant`,``),u=[...i,a];c([...u,o]),y(``),h(null),p(!0),_(o.id);let m=!1;try{if(!t)throw Error(`No stream response handler provided`);let e=d(t(n,u));for await(let t of e)m||=(h((s()-r)/1e3),!0),c(e=>e.map(e=>e.id===o.id?{...e,content:e.content+t}:e));m||h((s()-r)/1e3)}catch(e){let t=e instanceof Error?e.message:`Unable to complete response.`;c(e=>e.map(e=>e.id===o.id?{...e,content:`Stream interrupted. ${t}`}:e))}finally{p(!1),_(null)}},[f,i,t,c]),clearHistory:(0,a.useCallback)(()=>{u(),h(null),y(``)},[u])}}var p=e=>{if(typeof e!=`object`||!e)return;let t=e.choices;if(!Array.isArray(t)||t.length===0)return;let n=t[0].delta;if(typeof n!=`object`||!n)return;let r=n.content;return typeof r==`string`?r:void 0},m=(e,t)=>({messages:[...t.map(e=>({role:e.role,content:e.content})),{role:`user`,content:e}]});function h({apiUrl:e,apiToken:t,path:n=`/v1/chat`,buildBody:r=m,extractChunk:i=p}){return{streamResponse:(0,a.useCallback)(async function*(a,o){let s=await fetch(`${e}${n}`,{method:`POST`,headers:{"Content-Type":`application/json`,...t?{Authorization:`Bearer ${t}`}:{}},body:JSON.stringify(r(a,o))});if(!s.ok){let e=await s.json().catch(()=>({detail:`Unknown network error`}));throw Error(e.detail||`API request failed`)}let c=s.body?.getReader();if(!c)throw Error(`Response body is null`);let l=new TextDecoder,u=``;try{for(;;){let{done:e,value:t}=await c.read();if(e)break;u+=l.decode(t,{stream:!0});let n=u.split(`
`);u=n.pop()||``;for(let e of n){let t=e.trim();if(!t||!t.startsWith(`data: `))continue;let n=t.slice(6);if(n===`[DONE]`)return;try{let e=i(JSON.parse(n));e&&(yield e)}catch(e){console.warn(`[useSSEStream] Failed to parse SSE data:`,e)}}}}finally{c.releaseLock()}},[e,t,n,r,i])}}var g=e=>new Promise(t=>{window.setTimeout(t,e)}),_=["Hello! I am a demo assistant. Pass a `streamResponse` prop to connect me to your real backend.","No API configured yet. You can pass a `streamResponse` function to handle real chat requests.","I am running in demo mode. Provide a `streamResponse` or use the `useSSEStream` hook to get started."],v=()=>_[Math.floor(Math.random()*_.length)];async function*y(){let e=v().split(` `);for(let[t,n]of e.entries())await g(t===0?400:60),yield n+` `}var b=n();function x({position:e=`bottom-right`,theme:t=`dark`,title:n=`Ask AI`,placeholder:o=`Ask me anything...`,initialMessage:s=`Hello! How can I help you today?`,defaultOpen:c=!1,apiUrl:l,apiToken:u,streamResponse:d,colors:p,labels:m,persistenceKey:g=`ask_widget_session`}){let[_,v]=(0,a.useState)(c),{streamResponse:x}=h(l?{apiUrl:l,apiToken:u}:{apiUrl:``}),{messages:S,isStreaming:C,latency:w,activeStreamId:T,inputValue:E,setInputValue:D,sendMessage:O,clearHistory:k}=f({initialMessage:s,streamResponse:d??(l?x:y),persistenceKey:g}),A=e=>{e.preventDefault(),O(E)},j={...p?.primary&&{"--widget-primary":p.primary},...p?.background&&{"--widget-background":p.background},...p?.text&&{"--widget-text":p.text},...p?.border&&{"--widget-border":p.border},...p?.userBubble&&{"--widget-user-bubble":p.userBubble},...p?.surface&&{"--widget-surface":p.surface}};return(0,b.jsx)(`div`,{className:`chat-widget chat-widget--${e}`,"data-theme":t,style:j,children:_?(0,b.jsx)(i,{title:n,messages:S,activeStreamId:T,isStreaming:C,inputValue:E,onInputChange:D,onSubmit:A,onCollapse:()=>v(!1),onReset:k,placeholder:o,latency:w,labels:m}):(0,b.jsx)(r,{title:n,theme:t,label:m?.launcherLabel,onClick:()=>v(!0)})})}x.__docgenInfo={description:`Root chat widget component.

Renders a floating launcher button that expands into a full chat panel.

**Response modes (in priority order):**
1. \`streamResponse\` — supply your own async generator / fetch logic
2. \`apiUrl\` — auto-connects to a standard SSE endpoint (OpenAI-compatible by default)
3. No props — runs a built-in demo stream so you can see the UI immediately

@example Basic usage with your own API
\`\`\`tsx
<ChatWidget
  apiUrl="https://your-api.example.com"
  apiToken={process.env.NEXT_PUBLIC_API_TOKEN}
  title="Ask Anything"
/>
\`\`\`

@example Bring your own stream handler
\`\`\`tsx
<ChatWidget streamResponse={myCustomHandler} />
\`\`\``,methods:[],displayName:`ChatWidget`,props:{apiUrl:{required:!1,tsType:{name:`string`},description:'Base URL of your chat API.\nWhen provided (without a custom `streamResponse`), the widget will automatically\nuse `useSSEStream` to connect to `<apiUrl>/v1/chat` with an OpenAI-compatible payload.\n\n@example "https://your-api.railway.app"'},apiToken:{required:!1,tsType:{name:`string`},description:`Bearer token for API authentication.
Never commit this — pass via environment variable.

@example process.env.CHAT_API_TOKEN`},position:{required:!1,tsType:{name:`union`,raw:`'bottom-right' | 'bottom-left' | 'bottom-center'`,elements:[{name:`literal`,value:`'bottom-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-center'`}]},description:`Position of the floating button and chat panel.
@default "bottom-right"`,defaultValue:{value:`'bottom-right'`,computed:!1}},theme:{required:!1,tsType:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},description:`Color theme preset.
@default "dark"`,defaultValue:{value:`'dark'`,computed:!1}},colors:{required:!1,tsType:{name:`ChatColors`},description:`Custom color overrides — merged with theme defaults.`},title:{required:!1,tsType:{name:`string`},description:`Title shown in the chat panel header.
@default "Ask AI"`,defaultValue:{value:`'Ask AI'`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text in the message input.
@default "Ask me anything..."`,defaultValue:{value:`'Ask me anything...'`,computed:!1}},initialMessage:{required:!1,tsType:{name:`string`},description:`First message displayed when the panel opens.
@default "Hello! How can I help you today?"`,defaultValue:{value:`'Hello! How can I help you today?'`,computed:!1}},defaultOpen:{required:!1,tsType:{name:`boolean`},description:`Whether the chat panel starts open.
@default false`,defaultValue:{value:`false`,computed:!1}},labels:{required:!1,tsType:{name:`ChatLabels`},description:`Custom text labels for technical indicators in the UI.`},persistenceKey:{required:!1,tsType:{name:`string`},description:`The localStorage key used to persist chat history.
@default "ask_widget_session"`,defaultValue:{value:`'ask_widget_session'`,computed:!1}},streamResponse:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(message: string, history: ChatMessage[]) => ChatStreamResult`,signature:{arguments:[{type:{name:`string`},name:`message`},{type:{name:`Array`,elements:[{name:`ChatMessage`}],raw:`ChatMessage[]`},name:`history`}],return:{name:`union`,raw:`| string
| AsyncIterable<string>
| Promise<string | AsyncIterable<string>>`,elements:[{name:`string`},{name:`AsyncIterable`,elements:[{name:`string`}],raw:`AsyncIterable<string>`},{name:`Promise`,elements:[{name:`union`,raw:`string | AsyncIterable<string>`,elements:[{name:`string`},{name:`AsyncIterable`,elements:[{name:`string`}],raw:`AsyncIterable<string>`}]}],raw:`Promise<string | AsyncIterable<string>>`}]}}},description:`Custom response handler — takes full control of streaming.

Use this when you need custom fetch logic, auth flows, or a non-SSE backend.
When provided, \`apiUrl\` and \`apiToken\` are ignored.

@example
\`\`\`ts
const streamResponse: ChatStreamHandler = async function* (message, history) {
  const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message }) })
  const reader = res.body!.getReader()
  // ... yield decoded tokens
}
\`\`\``}}};var S={title:`Widget/Launcher`,component:x,parameters:{layout:`centered`},tags:[`autodocs`],decorators:[e=>(0,b.jsxs)(`div`,{style:{position:`relative`},children:[(0,b.jsx)(`style`,{children:`
            .chat-widget { 
              position: relative !important; 
              bottom: auto !important;
              right: auto !important;
              left: auto !important;
              top: auto !important;
              transform: none !important;
              pointer-events: auto !important;
              display: inline-flex !important;
            }
          `}),(0,b.jsx)(e,{})]})]},C={args:{theme:`dark`,title:`Ask Chitrank`,initialMessage:`Link established. Assistant ready to audit.`}},w={args:{theme:`light`,title:`Ask Chitrank`,initialMessage:`Link established. How can I help today?`}},T={args:{position:`bottom-left`,title:`Support`}},E={args:{defaultOpen:!0}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'dark',
    title: 'Ask Chitrank',
    initialMessage: 'Link established. Assistant ready to audit.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    theme: 'light',
    title: 'Ask Chitrank',
    initialMessage: 'Link established. How can I help today?'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'bottom-left',
    title: 'Support'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultOpen: true
  }
}`,...E.parameters?.docs?.source}}};var D=[`Dark`,`Light`,`CustomPosition`,`OpenByDefault`];export{T as CustomPosition,C as Dark,w as Light,E as OpenByDefault,D as __namedExportsOrder,S as default};