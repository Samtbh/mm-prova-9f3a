const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Bs2UOTia.js","./index-DfQ7o_Qt.css","./recuperiUI-BxRUXkpT.js","./swipe-BFJIPpwd.js"])))=>i.map(i=>d[i]);
import{k as D,t as y,_ as g,O as T,u,I as v,P as f,Q as $}from"./index-Bs2UOTia.js";const h=n=>document.getElementById(n),O=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],E=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],L=(n,t)=>{const[a,o,s]=n.split("-").map(Number),[l,d,c]=t.split("-").map(Number);return Math.round((Date.UTC(l,d-1,c)-Date.UTC(a,o-1,s))/864e5)};function I(n){const t=L(u,n);if(t===0)return"oggi";if(t===1)return"domani";const[a,o,s]=n.split("-").map(Number);return t<=6?E[new Date(Date.UTC(a,o-1,s)).getUTCDay()]:`${s} ${O[o-1]}`}let p=null,b=!1;function M(){const n=h("pianoBox");if(!n)return;if(!D().filter(i=>!i.doOn).length){n.innerHTML="",p=null;return}if(!p){n.innerHTML='<div class="pia pia-attesa">Sto guardando il tuo ciclo…</div>',k();return}const{mosse:a,fuori:o}=p;if(!a.length&&!o.length){n.innerHTML="";return}const s=a.map(i=>`
    <div class="pia-riga">
      <span class="pia-q">${I(i.giorno)}</span>
      <span class="pia-l">${i.label}</span>
      <span class="pia-p">${i.perche}</span>
    </div>`).join(""),l=[...new Set(o.map(i=>i.perche))],d=o.length>1&&l.length===1,c=o.map(i=>`
    <div class="pia-riga pia-no">
      <span class="pia-q">non ci sta</span>
      <span class="pia-l">${i.label}</span>
      ${d?"":`<span class="pia-p">${i.perche}</span>`}
    </div>`).join("")+(d?`<div class="pia-perche">${l[0]}</div>`:"");n.innerHTML=`<div class="pia">
    <div class="pia-testa">
      <div class="pia-k">Gli allenamenti</div>
      <div class="pia-t">${R(a,o)}</div>
    </div>
    <div class="pia-lista">${s}${c}</div>
    ${a.length?`<div class="pia-az">
      <button class="dg-btn" id="piaOk">Va bene così</button>
      <button class="dg-btn no" id="piaNo">Decido io</button>
    </div>`:""}
  </div>`;const e=h("piaOk");e&&(e.onclick=()=>{a.forEach(i=>y(i.id,i.giorno)),p=null,g(()=>import("./index-Bs2UOTia.js").then(i=>i.V),__vite__mapDeps([0,1]),import.meta.url).then(i=>i.saveAll()),g(()=>import("./recuperiUI-BxRUXkpT.js"),__vite__mapDeps([2,0,1,3]),import.meta.url).then(i=>i.paintRecuperi())});const r=h("piaNo");r&&(r.onclick=()=>{n.innerHTML=""})}function R(n,t){if(!n.length)return t.length===1?`${t[0].label} in questo ciclo non ci sta`:"Nessuno ci sta in questo ciclo";const a=n.map(l=>`<b>${l.label.toLowerCase()}</b> ${I(l.giorno)}`),o=a.length===1?a[0]:`${a.slice(0,-1).join(", ")} e ${a[a.length-1]}`,s=t.length?t.length===1?` <b>${t[0].label}</b> invece non ci sta in questo ciclo.`:` Gli altri ${t.length} non ci stanno in questo ciclo.`:"";return`Metti ${o}.${s}`}async function k(){if(!b){b=!0;try{const n=D().filter(e=>!e.doOn).map(e=>({id:e.id,label:e.label,gruppi:e.gruppi,saltatoIl:e.skippedOn})),t=T(u),a=Array.from({length:t},(e,r)=>{const i=v(u,r),_=f(i),m=_?.label??"";return{data:i,previsto:$(m)?"":m,gruppi:$(m)?void 0:_?.gruppi}}),{allDays:o}=await g(async()=>{const{allDays:e}=await import("./index-Bs2UOTia.js").then(r=>r.V);return{allDays:e}},__vite__mapDeps([0,1]),import.meta.url),s=o()[v(u,-1)],l=f(v(u,-1))?.gruppi,{analisi:d}=await g(async()=>{const{analisi:e}=await import("./index-Bs2UOTia.js").then(r=>r.R);return{analisi:e}},__vite__mapDeps([0,1]),import.meta.url),c=await d("piano",{coda:n,giorni:a,fattoIeri:s?.splitDone??"",gruppiIeri:l});p=c&&Array.isArray(c.mosse)?c:{mosse:[],fuori:[]}}catch{p={mosse:[],fuori:[]}}finally{b=!1,M()}}}function w(){p=null}export{M as paintPiano,w as scordaIlPiano};
