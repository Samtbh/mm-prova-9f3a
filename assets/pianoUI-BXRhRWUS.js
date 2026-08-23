const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CtdinDYa.js","./index-DIVze-Sw.css","./recuperiUI-DThpKBk0.js","./swipe-BFJIPpwd.js"])))=>i.map(i=>d[i]);
import{k as D,t as y,_ as g,O as T,u,I as v,P as $,Q as f}from"./index-CtdinDYa.js";const h=n=>document.getElementById(n),O=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],E=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],L=(n,a)=>{const[t,o,s]=n.split("-").map(Number),[l,d,c]=a.split("-").map(Number);return Math.round((Date.UTC(l,d-1,c)-Date.UTC(t,o-1,s))/864e5)};function I(n){const a=L(u,n);if(a===0)return"oggi";if(a===1)return"domani";const[t,o,s]=n.split("-").map(Number);return a<=6?E[new Date(Date.UTC(t,o-1,s)).getUTCDay()]:`${s} ${O[o-1]}`}let p=null,b=!1;function M(){const n=h("pianoBox");if(!n)return;if(!D().filter(i=>!i.doOn).length){n.innerHTML="",p=null;return}if(!p){n.innerHTML='<div class="pia pia-attesa">Sto guardando il tuo ciclo…</div>',k();return}const{mosse:t,fuori:o}=p;if(!t.length&&!o.length){n.innerHTML="";return}const s=t.map(i=>`
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
      <div class="pia-k">In che giorno</div>
      <div class="pia-t">${R(t,o)}</div>
    </div>
    <div class="pia-lista">${s}${c}</div>
    ${t.length?`<div class="pia-az">
      <button class="dg-btn" id="piaOk">Va bene così</button>
      <button class="dg-btn no" id="piaNo">Decido io</button>
    </div>`:""}
  </div>`;const e=h("piaOk");e&&(e.onclick=()=>{t.forEach(i=>y(i.id,i.giorno)),p=null,g(()=>import("./index-CtdinDYa.js").then(i=>i.V),__vite__mapDeps([0,1]),import.meta.url).then(i=>i.saveAll()),g(()=>import("./recuperiUI-DThpKBk0.js"),__vite__mapDeps([2,0,1,3]),import.meta.url).then(i=>i.paintRecuperi())});const r=h("piaNo");r&&(r.onclick=()=>{n.innerHTML=""})}function R(n,a){if(!n.length)return a.length===1?`${a[0].label} in questo ciclo non ci sta`:`I ${a.length} saltati non ci stanno in questo ciclo`;const t=n.map(l=>`<b>${l.label.toLowerCase()}</b> ${I(l.giorno)}`),o=t.length===1?t[0]:`${t.slice(0,-1).join(", ")} e ${t[t.length-1]}`,s=a.length?a.length===1?` <b>${a[0].label}</b> invece non ci sta in questo ciclo.`:` Gli altri ${a.length} non ci stanno in questo ciclo.`:"";return`Metti ${o}.${s}`}async function k(){if(!b){b=!0;try{const n=D().filter(e=>!e.doOn).map(e=>({id:e.id,label:e.label,gruppi:e.gruppi,saltatoIl:e.skippedOn})),a=T(u),t=Array.from({length:a},(e,r)=>{const i=v(u,r),_=$(i),m=_?.label??"";return{data:i,previsto:f(m)?"":m,gruppi:f(m)?void 0:_?.gruppi}}),{allDays:o}=await g(async()=>{const{allDays:e}=await import("./index-CtdinDYa.js").then(r=>r.V);return{allDays:e}},__vite__mapDeps([0,1]),import.meta.url),s=o()[v(u,-1)],l=$(v(u,-1))?.gruppi,{analisi:d}=await g(async()=>{const{analisi:e}=await import("./index-CtdinDYa.js").then(r=>r.R);return{analisi:e}},__vite__mapDeps([0,1]),import.meta.url),c=await d("piano",{coda:n,giorni:t,fattoIeri:s?.splitDone??"",gruppiIeri:l});p=c&&Array.isArray(c.mosse)?c:{mosse:[],fuori:[]}}catch{p={mosse:[],fuori:[]}}finally{b=!1,M()}}}function w(){p=null}export{M as paintPiano,w as scordaIlPiano};
