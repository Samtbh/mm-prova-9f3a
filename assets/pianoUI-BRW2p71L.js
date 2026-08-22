const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DcC4eaj_.js","./index-DA-b-FTT.css","./recuperiUI-D0I4R_KS.js","./swipe-BFJIPpwd.js"])))=>i.map(i=>d[i]);
import{j as _,q as h,_ as d,M as $,t as p,F as f,N as D,O as T}from"./index-DcC4eaj_.js";const u=i=>document.getElementById(i),I=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],y=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],O=(i,o)=>{const[t,s,e]=i.split("-").map(Number),[r,l,n]=o.split("-").map(Number);return Math.round((Date.UTC(r,l-1,n)-Date.UTC(t,s-1,e))/864e5)};function b(i){const o=O(p,i);if(o===0)return"oggi";if(o===1)return"domani";const[t,s,e]=i.split("-").map(Number);return o<=6?y[new Date(Date.UTC(t,s-1,e)).getUTCDay()]:`${e} ${I[s-1]}`}let c=null,m=!1;function E(){const i=u("pianoBox");if(!i)return;if(!_().filter(a=>!a.doOn).length){i.innerHTML="",c=null;return}if(!c){i.innerHTML='<div class="pia pia-attesa">Sto guardando il tuo ciclo…</div>',M();return}const{mosse:t,fuori:s}=c;if(!t.length&&!s.length){i.innerHTML="";return}const e=t.map(a=>`
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
      <div class="pia-t">${L(t,s)}</div>
    </div>
    <div class="pia-lista">${e}${r}</div>
    ${t.length?`<div class="pia-az">
      <button class="dg-btn" id="piaOk">Va bene così</button>
      <button class="dg-btn no" id="piaNo">Decido io</button>
    </div>`:""}
  </div>`;const l=u("piaOk");l&&(l.onclick=()=>{t.forEach(a=>h(a.id,a.giorno)),c=null,d(()=>import("./index-DcC4eaj_.js").then(a=>a.T),__vite__mapDeps([0,1]),import.meta.url).then(a=>a.saveAll()),d(()=>import("./recuperiUI-D0I4R_KS.js"),__vite__mapDeps([2,0,1,3]),import.meta.url).then(a=>a.paintRecuperi())});const n=u("piaNo");n&&(n.onclick=()=>{i.innerHTML=""})}function L(i,o){if(!i.length)return o.length===1?`${o[0].label} in questo ciclo non ci sta`:"In questo ciclo non ci stanno";const t=i.map(r=>`<b>${r.label.toLowerCase()}</b> ${b(r.giorno)}`),s=t.length===1?t[0]:`${t.slice(0,-1).join(", ")} e ${t[t.length-1]}`,e=o.length?" Il resto in questo ciclo non ci sta.":"";return`Metti ${s}.${e}`}async function M(){if(!m){m=!0;try{const i=_().filter(n=>!n.doOn).map(n=>({id:n.id,label:n.label,saltatoIl:n.skippedOn})),o=$(p),t=Array.from({length:o},(n,a)=>{const g=f(p,a),v=D(g)?.label??"";return{data:g,previsto:T(v)?"":v}}),{allDays:s}=await d(async()=>{const{allDays:n}=await import("./index-DcC4eaj_.js").then(a=>a.T);return{allDays:n}},__vite__mapDeps([0,1]),import.meta.url),e=s()[f(p,-1)],{analisi:r}=await d(async()=>{const{analisi:n}=await import("./index-DcC4eaj_.js").then(a=>a.P);return{analisi:n}},__vite__mapDeps([0,1]),import.meta.url),l=await r("piano",{coda:i,giorni:t,fattoIeri:e?.splitDone??""});c=l&&Array.isArray(l.mosse)?l:{mosse:[],fuori:[]}}catch{c={mosse:[],fuori:[]}}finally{m=!1,E()}}}function A(){c=null}export{E as paintPiano,A as scordaIlPiano};
