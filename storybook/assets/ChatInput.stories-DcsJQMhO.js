import"./jsx-runtime-DQZni8ie.js";import{t as e}from"./ChatInput-BDzlYYK6.js";var t={title:`Widget/Sub-components/ChatInput`,component:e,argTypes:{onChange:{action:`changed`},onSubmit:{action:`submitted`}},parameters:{layout:`centered`},tags:[`autodocs`]},n={args:{value:``,isStreaming:!1,placeholder:`Ask me anything...`,latency:null}},r={args:{value:`Hello assistant!`,isStreaming:!1,placeholder:`Ask me anything...`,latency:.245}},i={args:{value:`What is your purpose?`,isStreaming:!0,placeholder:`Ask me anything...`,latency:null}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    isStreaming: false,
    placeholder: 'Ask me anything...',
    latency: null
  }
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Hello assistant!',
    isStreaming: false,
    placeholder: 'Ask me anything...',
    latency: 0.245
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'What is your purpose?',
    isStreaming: true,
    placeholder: 'Ask me anything...',
    latency: null
  }
}`,...i.parameters?.docs?.source}}};var a=[`Empty`,`Typed`,`Streaming`];export{n as Empty,i as Streaming,r as Typed,a as __namedExportsOrder,t as default};