const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-FEXnQLiP.js","./index-CUT6ehWF.css","./recuperiUI-BN60ZWDP.js","./swipe-BFJIPpwd.js"])))=>i.map(i=>d[i]);
import{j as D,q as y,_ as u,N as T,t as d,H as m,O as f,P as $}from"./index-FEXnQLiP.js";const v=n=>document.getElementById(n),O=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],E=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],L=(n,t)=>{const[a,o,e]=n.split("-").map(Number),[s,c,r]=t.split("-").map(Number);return Math.round((Date.UTC(s,c-1,r)-Date.UTC(a,o-1,e))/864e5)};function I(n){const t=L(d,n);if(t===0)return"oggi";if(t===1)return"domani";const[a,o,e]=n.split("-").map(Number);return t<=6?E[new Date(Date.UTC(a,o-1,e)).getUTCDay()]:`${e} ${O[o-1]}`}let l=null,b=!1;function q(){const n=v("pianoBox");if(!n)return;if(!D().filter(i=>!i.doOn).length){n.innerHTML="",l=null;return}if(!l){n.innerHTML='<div class="pia pia-attesa">Sto guardando il tuo ciclo…</div>',C();return}const{mosse:a,fuori:o}=l;if(!a.length&&!o.length){n.innerHTML="";return}const e=a.map(i=>`
    <div class="pia-riga">
      <span class="pia-q">${I(i.giorno)}</span>
      <span class="pia-l">${i.label}</span>
      <span class="pia-p">${i.perche}</span>
    </div>`).join(""),s=o.map(i=>`
    <div class="pia-riga pia-no">
      <span class="pia-q">non ci sta</span>
      <span class="pia-l">${i.label}</span>
      <span class="pia-p">${i.perche}</span>
    </div>`).join("");n.innerHTML=`<div class="pia">
    <div class="pia-testa">
      <div class="pia-k">Come li rimetti dentro</div>
      <div class="pia-t">${A(a,o)}</div>
    </div>
    <div class="pia-lista">${e}${s}</div>
    ${a.length?`<div class="pia-az">
      <button class="dg-btn" id="piaOk">Va bene così</button>
      <button class="dg-btn no" id="piaNo">Decido io</button>
    </div>`:""}
  </div>`;const c=v("piaOk");c&&(c.onclick=()=>{a.forEach(i=>y(i.id,i.giorno)),l=null,u(()=>import("./index-FEXnQLiP.js").then(i=>i.U),__vite__mapDeps([0,1]),import.meta.url).then(i=>i.saveAll()),u(()=>import("./recuperiUI-BN60ZWDP.js"),__vite__mapDeps([2,0,1,3]),import.meta.url).then(i=>i.paintRecuperi())});const r=v("piaNo");r&&(r.onclick=()=>{n.innerHTML=""})}function A(n,t){if(!n.length)return t.length===1?`${t[0].label} in questo ciclo non ci sta`:"In questo ciclo non ci stanno";const a=n.map(s=>`<b>${s.label.toLowerCase()}</b> ${I(s.giorno)}`),o=a.length===1?a[0]:`${a.slice(0,-1).join(", ")} e ${a[a.length-1]}`,e=t.length?t.length===1?` <b>${t[0].label}</b> invece in questo ciclo non ci sta.`:` Gli altri ${t.length} in questo ciclo non ci stanno.`:"";return`Metti ${o}.${e}`}async function C(){if(!b){b=!0;try{const n=D().filter(i=>!i.doOn).map(i=>({id:i.id,label:i.label,gruppi:i.gruppi,saltatoIl:i.skippedOn})),t=T(d),a=Array.from({length:t},(i,p)=>{const h=m(d,p),_=f(h),g=_?.label??"";return{data:h,previsto:$(g)?"":g,gruppi:$(g)?void 0:_?.gruppi}}),{allDays:o}=await u(async()=>{const{allDays:i}=await import("./index-FEXnQLiP.js").then(p=>p.U);return{allDays:i}},__vite__mapDeps([0,1]),import.meta.url),e=o()[m(d,-1)],s=f(m(d,-1))?.gruppi,{analisi:c}=await u(async()=>{const{analisi:i}=await import("./index-FEXnQLiP.js").then(p=>p.Q);return{analisi:i}},__vite__mapDeps([0,1]),import.meta.url),r=await c("piano",{coda:n,giorni:a,fattoIeri:e?.splitDone??"",gruppiIeri:s});l=r&&Array.isArray(r.mosse)?r:{mosse:[],fuori:[]}}catch{l={mosse:[],fuori:[]}}finally{b=!1,q()}}}function N(){l=null}export{q as paintPiano,N as scordaIlPiano};
