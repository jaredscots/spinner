"use strict";(self.webpackChunkwheel=self.webpackChunkwheel||[]).push([[179],{186:(e,n,t)=>{var i=t(294);function s({ms:e,onTimeout:n=(()=>{})}){const t=function(e){const n=(0,i.useRef)(e);return(0,i.useEffect)((()=>{n.current=e}),[e]),(...e)=>n.current?.(...e)}(n);return(0,i.useEffect)((()=>{const n=window.setTimeout((()=>{t()}),e);return()=>{window.clearTimeout(n)}}),[]),null}var c=t(745),l=t(725),o=t.n(l),a=t(964),r=t(184),d=t.n(r);const p=t.p+"public/fd0b0bc157398d5a25b6.jpg",h="PCqnGb8w7Iwepa0MU43o",g="RupgK4EbbV55Flk7nkoa";var x=t(893);function u(){return(0,x.jsx)("div",{className:h,children:(0,x.jsx)("img",{alt:"Carnival",src:p,className:g})})}const w=(0,i.createContext)();function m(){return(0,i.useContext)(w)}function j({options:e,children:n,onClicked:t,onEnd:s}){const[c,l]=(0,i.useState)(!0),[o,a]=(0,i.useState)("waiting"),[r,d]=(0,i.useState)(1),[p,h]=(0,i.useState)(),g=360/e.length,u=(0,i.useMemo)((()=>Math.random()*g),[g]),m=g/2-90,j=function(e){const n=(e-90)*Math.PI/180;return{x:50+50*Math.cos(n),y:50+50*Math.sin(n)}}(g),S=-1*m*Math.PI/180;const f=e.findIndex((e=>e.includes("Luke")&&e.includes("Abi")));let b=f*g;const k=-1!==f;let A=p*g;A-b>180?(b+=360,A-=360):b-A>180&&(b-=360,A+=360);const v=k?90-g*(f+1)+1+3240:3240+(90-g*(p+1)+u);(0,i.useEffect)((()=>{let n=f;for(;n===f;)n=Math.floor(Math.random()*e.length);h(n)}),[JSON.stringify(e)]);const C={options:e,clickable:c,setClickable:l,step:o,setStep:a,switchingStep:r,setSwitchingStep:d,hasLukeAndAbi:k,lukeAndAbiIndex:f,lukeAndAbiAngle:b,winnerIndex:p,winnerAngle:A,winner:e[p],pieceFullAngle:g,pieceDirectionAngle:m,pieceDirectionAngleRadians:S,endPoint:j,endAngle:v,onClicked:t,onEnd:s};return(0,x.jsx)(w.Provider,{value:C,children:n})}var S=t(486),f=t.n(S);const b={pieceContent:"XAYhpKSI1QSiRsRb1NQs",stepSwitching:"gBb1QKgOaeVETRZY15IC",pieceContent2:"szou5T_Zl942bQ48PPcl",pieceContent3:"SoxH9QwST_A98KeLdnbA",switching:"OSB8d9cpdvlCJLqYPF7m"},k=["#db5f5f","#65e165","#4e4eef","#eded43","#e548c8","#51dbca","#d3d3d3","#f5a052","#5cc7db"];function A({option:e,i:n}){const t=m(),i=n===t.lukeAndAbiIndex||n===t.winnerIndex,s=Math.cos(t.pieceDirectionAngleRadians)*(2!==t.switchingStep&&3!==t.switchingStep||!i?0:30),c=Math.sin(t.pieceDirectionAngleRadians)*(2!==t.switchingStep&&3!==t.switchingStep||!i?0:30);let l=t.pieceFullAngle*n;return i&&t.switchingStep>=3&&n===t.lukeAndAbiIndex&&(l=t.winnerAngle),i&&t.switchingStep>=3&&n===t.winnerIndex&&(l=t.lukeAndAbiAngle),(0,x.jsx)("g",{className:d()(b.piece,{[b.stepSwitching]:"switching"===t.step&&i}),children:(0,x.jsx)("g",{style:{transform:`rotate(${l}deg)`},className:b.pieceContent,children:(0,x.jsxs)("g",{style:{transform:`translate(${s}px, -${c}px)`},className:b.pieceContent2,children:[(0,x.jsxs)("g",{className:b.pieceContent3,children:[(0,x.jsx)("path",{d:`M50,50 L50,0 A50,50 1 0,1 ${t.endPoint.x},${t.endPoint.y} z`,fill:k[n%k.length],mask:"url(#circle)"}),(0,x.jsx)("text",{x:60,y:50,style:{alignmentBaseline:"middle",transform:`rotate(${t.pieceDirectionAngle}deg)`,transformOrigin:"50% 50%",fontSize:"4px",width:"100%"},children:e.slice(0,15)})]}),(0,x.jsx)("circle",{cx:"50",cy:"50",r:"5",fill:"transparent"})]})})})}const v={clickable:"_l5rTaDjwzbpEsIsKom9",wheel:"GXHhCh26qphCqw_RY2nL",content:"FICsURyLKqna3tvA8w2P",stepWaiting:"t0w9eRdheDLkWbk2ybpj","animate-wheel":"kOd0PqesOaFz94naMUbH",stepSpinning:"NUQcR74jMvOxLD230jMH",stepSwitching:"tzNg5agvwZFEwDaUg08Q",switching:"_j37ckdXRaiPjEYGmRir",svg:"js4E_HTsGUmMHpiOQaRd",pointer:"ocws7hyNJEGHbmhtNbnO",debug:"_Vp9RVcHAPZwlrkBr5oc",stepEnd:"LMtrMIqDHjORRPV8xgbG",play:"yPbvbMhttIOc3BrHaGkl",spin:"wxGVHteS15xhmHoC2lcX"},C=["waiting","startSpinning","spinning","switching","ending","end"];function y(){const e=m();(0,i.useEffect)((()=>{"startSpinning"===e.step&&(e.setStep("spinning"),e.setSwitchingStep(1)),"end"===e.step&&e.onEnd(e.winner)}),[e.step]);const n=d()(v.wheel,{[v.clickable]:e.clickable,[v[`step${f().capitalize(e.step[0])}${e.step.slice(1)}`]]:!0});return(0,x.jsxs)("div",{className:n,onClick:()=>{e.clickable&&e.options.length>=2&&(e.onClicked(),e.setStep("startSpinning"))},children:[(0,x.jsx)("div",{className:v.content,style:C.indexOf(e.step)>=C.indexOf("spinning")?{transform:`rotate(${e.endAngle}deg)`}:void 0,children:(0,x.jsx)("svg",{viewBox:"0 0 100 100",className:v.svg,children:(0,x.jsxs)("g",{children:[(0,x.jsxs)("mask",{id:"circle",children:[(0,x.jsx)("circle",{fill:"white",cx:"50",cy:"50",r:"50"}),(0,x.jsx)("circle",{fill:"black",cx:"50",cy:"50",r:"5"})]}),(0,x.jsx)("circle",{cx:"50",cy:"50",r:"50",fill:"#444",stroke:"#333",strokeWidth:"0.5"}),e.options.map(((e,n)=>(0,x.jsx)(A,{option:e,i:n},n))),(0,x.jsx)("circle",{cx:"50",cy:"50",r:"5",fill:"#333",stroke:"#222",strokeWidth:"0.5"})]})})}),(0,x.jsx)("svg",{viewBox:"0 0 24 24",className:v.play,children:(0,x.jsx)("path",{d:"M8 5v14l11-7z"})}),(0,x.jsx)("div",{className:v.pointer}),"spinning"===e.step&&(0,x.jsx)(s,{ms:1e3,onTimeout:()=>e.setClickable(!1)}),"spinning"===e.step&&(0,x.jsx)(s,{ms:15e3,onTimeout:()=>e.setStep(e.hasLukeAndAbi?"switching":"ending")}),"switching"===e.step&&1===e.switchingStep&&(0,x.jsx)(s,{ms:1e3,onTimeout:()=>{e.setSwitchingStep(2)}}),"switching"===e.step&&2===e.switchingStep&&(0,x.jsx)(s,{ms:1e3,onTimeout:()=>{e.setSwitchingStep(3)}}),"switching"===e.step&&3===e.switchingStep&&(0,x.jsx)(s,{ms:1e3,onTimeout:()=>{e.setSwitchingStep(4)}}),"switching"===e.step&&4===e.switchingStep&&(0,x.jsx)(s,{ms:3e3,onTimeout:()=>{e.setStep("end")}}),"ending"===e.step&&(0,x.jsx)(s,{ms:1e3,onTimeout:()=>{e.setStep("end")}})]})}function N({options:e,onClicked:n,onEnd:t}){return(0,x.jsx)(j,{options:e,onClicked:n,onEnd:t,children:(0,x.jsx)(y,{})})}const R={page:"btRkIs8vHwLy5aO7_Hq3",textarea:"yjMf1_UUxAcryJQGmwwn",container:"jteMMSjW2m7HwHHJ8oKr",panel:"UUmGzKk8FWdsc46TElM6",winnerPanel:"O7MtZnXoRCRNR1Brsa2i",enter:"QmpA_f0SWVfZfCGN35Cw",winner:"XtR7wIPJ0aDVjNRn2wTW",hidden:"vuX6JqvjEFT3Z1xqZiJu",hide:"pUK5w0EZKhho10kplH94",wheelContent:"RXSchCgCxppJslUVryrR"};function M(){const[e,n]=(0,i.useState)((()=>{try{return window.localStorage.getItem("text")??"Option 1\nOption 2\nOption 3"}catch(e){}return"Option 1\nOption 2\nOption 3"})),[t,s]=(0,i.useState)(!1),[c,l]=(0,i.useState)(),{width:r,height:p}=(0,a.Z)();(0,i.useEffect)((()=>{window.localStorage.setItem("text",e)}),[e]);const h=e.split("\n").map((e=>e.trim())).filter((e=>""!==e));return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u,{}),(0,x.jsxs)("div",{className:R.page,children:[(0,x.jsx)("textarea",{readOnly:t,placeholder:"Add options here...",value:e,className:d()(R.textarea,{[R.hidden]:t}),onChange:e=>n(e.target.value)}),(0,x.jsxs)("div",{className:R.container,children:[h.length>=2&&(0,x.jsx)("div",{className:R.wheelContent,style:p>r+150?{height:r-150}:void 0,children:(0,x.jsx)(N,{options:h,onClicked:()=>s(!0),onEnd:e=>{l(e)}})}),h.length<2&&(0,x.jsx)("span",{className:R.panel,children:"Add some more options to begin!"}),null!=c&&(0,x.jsxs)("span",{className:R.winnerPanel,children:[(0,x.jsx)("div",{children:"Congratulations"}),(0,x.jsxs)("div",{className:R.winner,children:[(0,x.jsx)("span",{className:R.winner2,children:c}),(0,x.jsx)("span",{children:"!!!"})]}),(0,x.jsx)("div",{children:"You're on clean up duty :)"})]})]}),null!=c&&(0,x.jsx)(o(),{width:r,height:p})]})]})}c.createRoot(document.getElementById("root")).render((0,x.jsx)(M,{}))}},e=>{e.O(0,[736],(()=>{return n=186,e(e.s=n);var n}));e.O()}]);