const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C2pO1Z_Y.js","./index-DA-b-FTT.css","./recuperiUI-BR_35lgR.js","./swipe-BFJIPpwd.js"])))=>i.map(i=>d[i]);
import{j as _,q as h,_ as d,M as $,t as p,F as f,N as D,O as T}from"./index-C2pO1Z_Y.js";const u=i=>document.getElementById(i),y=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],I=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],E=(i,o)=>{const[n,s,e]=i.split("-").map(Number),[r,l,t]=o.split("-").map(Number);return Math.round((Date.UTC(r,l-1,t)-Date.UTC(n,s-1,e))/864e5)};function b(i){const o=E(p,i);if(o===0)return"oggi";if(o===1)return"domani";const[n,s,e]=i.split("-").map(Number);return o<=6?I[new Date(Date.UTC(n,s-1,e)).getUTCDay()]:`${e} ${y[s-1]}`}let c=null,m=!1;function O(){const i=u("pianoBox");if(!i)return;if(!_().filter(a=>!a.doOn).length){i.innerHTML="",c=null;return}if(!c){i.innerHTML='<div class="pia pia-attesa">Sto guardando il tuo ciclo…</div>',M();return}const{mosse:n,fuori:s}=c;if(!n.length&&!s.length){i.innerHTML="";return}const e=n.map(a=>`
    <div class="pia-riga">
      <span class="pia-q">${b(a.giorno)}</span>
      <span class="pia-l">${a.label}</span>
      <span class="pia-p">${a.perche}</span>
    </div>`).join(""),r=s.map(a=>`
    <div class="pia-riga pia-no">
      <span class="pia-q">non ci sta</span>
      <span class="pia-l">${a.label}</span>
      <span class="pia-p">${a.perche}</span>
    </div>`).join("");i.innerHTML=`<div class="pia">
    <div class="pia-testa">
      <div class="pia-k">Come li rimetti dentro</div>
      <div class="pia-t">${L(n,s)}</div>
    </div>
    <div class="pia-lista">${e}${r}</div>
    ${n.length?`<div class="pia-az">
      <button class="dg-btn" id="piaOk">Va bene così</button>
      <button class="dg-btn no" id="piaNo">Decido io</button>
    </div>`:""}
  </div>`;const l=u("piaOk");l&&(l.onclick=()=>{n.forEach(a=>h(a.id,a.giorno)),c=null,d(()=>import("./index-C2pO1Z_Y.js").then(a=>a.T),__vite__mapDeps([0,1]),import.meta.url).then(a=>a.saveAll()),d(()=>import("./recuperiUI-BR_35lgR.js"),__vite__mapDeps([2,0,1,3]),import.meta.url).then(a=>a.paintRecuperi())});const t=u("piaNo");t&&(t.onclick=()=>{i.innerHTML=""})}function L(i,o){if(!i.length)return o.length===1?`${o[0].label} in questo ciclo non ci sta`:"In questo ciclo non ci stanno";const n=i.map(r=>`<b>${r.label.toLowerCase()}</b> ${b(r.giorno)}`),s=n.length===1?n[0]:`${n.slice(0,-1).join(", ")} e ${n[n.length-1]}`,e=o.length?" Il resto in questo ciclo non ci sta.":"";return`Metti ${s}.${e}`}async function M(){if(!m){m=!0;try{const i=_().filter(t=>!t.doOn).map(t=>({id:t.id,label:t.label})),o=$(p),n=Array.from({length:o},(t,a)=>{const g=f(p,a),v=D(g)?.label??"";return{data:g,previsto:T(v)?"":v}}),{allDays:s}=await d(async()=>{const{allDays:t}=await import("./index-C2pO1Z_Y.js").then(a=>a.T);return{allDays:t}},__vite__mapDeps([0,1]),import.meta.url),e=s()[f(p,-1)],{analisi:r}=await d(async()=>{const{analisi:t}=await import("./index-C2pO1Z_Y.js").then(a=>a.P);return{analisi:t}},__vite__mapDeps([0,1]),import.meta.url),l=await r("piano",{coda:i,giorni:n,fattoIeri:e?.splitDone??""});c=l&&Array.isArray(l.mosse)?l:{mosse:[],fuori:[]}}catch{c={mosse:[],fuori:[]}}finally{m=!1,O()}}}function A(){c=null}export{O as paintPiano,A as scordaIlPiano};
