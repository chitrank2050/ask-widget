import"./react-BM3YizYA.js";import"./jsx-runtime-e6h2aeL2.js";import{t as e}from"./ChatPanel-BAs4iaJZ.js";var t={title:`Widget/Sub-components/ChatPanel`,component:e,argTypes:{onInputChange:{action:`inputChanged`},onSubmit:{action:`submitted`},onCollapse:{action:`collapsed`},onReset:{action:`reset`}},parameters:{layout:`centered`},tags:[`autodocs`]},n=[{id:`1`,role:`assistant`,content:`Hello! I am your AI assistant. How can I help you today?`,timestamp:new Date},{id:`2`,role:`user`,content:`What is your name?`,timestamp:new Date},{id:`3`,role:`assistant`,content:`I am the Ask Chitrank widget, a streaming AI chatbot.`,timestamp:new Date}],r={args:{title:`Ask Chitrank`,messages:n,activeStreamId:null,isStreaming:!1,inputValue:``,placeholder:`Ask me anything...`,latency:.15}},i={args:{...r.args,messages:[...n,{id:`4`,role:`assistant`,content:`I am currently thinking about your question...`,timestamp:new Date}],activeStreamId:`4`,isStreaming:!0,latency:null}},a={args:{...r.args,messages:[]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ask Chitrank',
    messages: mockMessages,
    activeStreamId: null,
    isStreaming: false,
    inputValue: '',
    placeholder: 'Ask me anything...',
    latency: 0.15
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    messages: [...mockMessages, {
      id: '4',
      role: 'assistant' as const,
      content: 'I am currently thinking about your question...',
      timestamp: new Date()
    }],
    activeStreamId: '4',
    isStreaming: true,
    latency: null
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    messages: []
  }
}`,...a.parameters?.docs?.source}}};var o=[`Default`,`Streaming`,`Empty`];export{r as Default,a as Empty,i as Streaming,o as __namedExportsOrder,t as default};