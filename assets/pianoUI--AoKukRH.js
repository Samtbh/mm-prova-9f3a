const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DuS-jzDI.js","./index-C0juWENH.css","./recuperiUI-_LLEWaXa.js","./swipe-BFJIPpwd.js"])))=>i.map(i=>d[i]);
import{j as h,q as f,_ as d,N as $,t as p,H as b,O as D,P as y}from"./index-DuS-jzDI.js";const u=a=>document.getElementById(a),I=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],T=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],O=(a,t)=>{const[i,e,s]=a.split("-").map(Number),[l,r,o]=t.split("-").map(Number);return Math.round((Date.UTC(l,r-1,o)-Date.UTC(i,e-1,s))/864e5)};function _(a){const t=O(p,a);if(t===0)return"oggi";if(t===1)return"domani";const[i,e,s]=a.split("-").map(Number);return t<=6?T[new Date(Date.UTC(i,e-1,s)).getUTCDay()]:`${s} ${I[e-1]}`}let c=null,m=!1;function E(){const a=u("pianoBox");if(!a)return;if(!h().filter(n=>!n.doOn).length){a.innerHTML="",c=null;return}if(!c){a.innerHTML='<div class="pia pia-attesa">Sto guardando il tuo ciclo…</div>',q();return}const{mosse:i,fuori:e}=c;if(!i.length&&!e.length){a.innerHTML="";return}const s=i.map(n=>`
    <div class="pia-riga">
      <span class="pia-q">${_(n.giorno)}</span>
      <span class="pia-l">${n.label}</span>
      <span class="pia-p">${n.perche}</span>
    </div>`).join(""),l=e.map(n=>`
    <div class="pia-riga pia-no">
      <span class="pia-q">non ci sta</span>
      <span class="pia-l">${n.label}</span>
      <span class="pia-p">${n.perche}</span>
    </div>`).join("");a.innerHTML=`<div class="pia">
    <div class="pia-testa">
      <div class="pia-k">Come li rimetti dentro</div>
      <div class="pia-t">${L(i,e)}</div>
    </div>
    <div class="pia-lista">${s}${l}</div>
    ${i.length?`<div class="pia-az">
      <button class="dg-btn" id="piaOk">Va bene così</button>
      <button class="dg-btn no" id="piaNo">Decido io</button>
    </div>`:""}
  </div>`;const r=u("piaOk");r&&(r.onclick=()=>{i.forEach(n=>f(n.id,n.giorno)),c=null,d(()=>import("./index-DuS-jzDI.js").then(n=>n.U),__vite__mapDeps([0,1]),import.meta.url).then(n=>n.saveAll()),d(()=>import("./recuperiUI-_LLEWaXa.js"),__vite__mapDeps([2,0,1,3]),import.meta.url).then(n=>n.paintRecuperi())});const o=u("piaNo");o&&(o.onclick=()=>{a.innerHTML=""})}function L(a,t){if(!a.length)return t.length===1?`${t[0].label} in questo ciclo non ci sta`:"In questo ciclo non ci stanno";const i=a.map(l=>`<b>${l.label.toLowerCase()}</b> ${_(l.giorno)}`),e=i.length===1?i[0]:`${i.slice(0,-1).join(", ")} e ${i[i.length-1]}`,s=t.length?t.length===1?` <b>${t[0].label}</b> invece in questo ciclo non ci sta.`:` Gli altri ${t.length} in questo ciclo non ci stanno.`:"";return`Metti ${e}.${s}`}async function q(){if(!m){m=!0;try{const a=h().filter(o=>!o.doOn).map(o=>({id:o.id,label:o.label,saltatoIl:o.skippedOn})),t=$(p),i=Array.from({length:t},(o,n)=>{const g=b(p,n),v=D(g)?.label??"";return{data:g,previsto:y(v)?"":v}}),{allDays:e}=await d(async()=>{const{allDays:o}=await import("./index-DuS-jzDI.js").then(n=>n.U);return{allDays:o}},__vite__mapDeps([0,1]),import.meta.url),s=e()[b(p,-1)],{analisi:l}=await d(async()=>{const{analisi:o}=await import("./index-DuS-jzDI.js").then(n=>n.Q);return{analisi:o}},__vite__mapDeps([0,1]),import.meta.url),r=await l("piano",{coda:a,giorni:i,fattoIeri:s?.splitDone??""});c=r&&Array.isArray(r.mosse)?r:{mosse:[],fuori:[]}}catch{c={mosse:[],fuori:[]}}finally{m=!1,E()}}}function C(){c=null}export{E as paintPiano,C as scordaIlPiano};
