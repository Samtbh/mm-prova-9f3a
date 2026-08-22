const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BoYf8z0r.js","./index-Btqie9Mr.css"])))=>i.map(i=>d[i]);
import{t as c,E as h,G as E,F as $,u as G,_ as O}from"./index-BoYf8z0r.js";const I="mm2_rientro",S={attivo:!1,fissi:{}},d=()=>{try{const i=JSON.parse(localStorage.getItem(I)||"null");return!i||typeof i!="object"?{...S}:{attivo:!!i.attivo,fissi:i.fissi&&typeof i.fissi=="object"?i.fissi:{}}}catch{return{...S}}},v=i=>localStorage.setItem(I,JSON.stringify(i));function T(){const i=h();return Array.from({length:i.restanoNelCiclo},(o,t)=>$(c,t))}function M(){const i=d(),o=h(),t=T(),n={};for(const[r,s]of Object.entries(i.fissi))t.includes(r)&&Number.isFinite(s)&&s>0&&(n[r]=Math.round(s));const e=Object.values(n).reduce((r,s)=>r+s,0),a=t.filter(r=>!(r in n)),N=o.daRimettere-e,f=Math.max(0,N),D=Math.max(0,-N),p=a.length?Math.floor(f/a.length):0,A=f-p*a.length,C=a[a.length-1],_=t.map(r=>{const s=r in n?n[r]:p+(r===C?A:0);return{giorno:r,kcal:Math.max(0,Math.round(s)),fissato:r in n,oggi:r===c,pesante:s>E}});return{attivo:i.attivo,righe:_,daRimettere:o.daRimettere,scrittoDaTe:e,daDividere:f,liberi:a.length,perGiorno:p,avanzo:D,pesante:_.some(r=>r.pesante)}}function k(i,o){const t=d();o===null||!Number.isFinite(o)||o<0?delete t.fissi[i]:t.fissi[i]=Math.round(o),t.attivo=!0,v(t)}function x(){const i=d();i.fissi={},v(i)}function F(){v({...d(),attivo:!0})}function m(){v({attivo:!1,fissi:{}})}const R=()=>d().attivo;function L(i=c){const o=M();return o.attivo?o.righe.find(t=>t.giorno===i)?.kcal??0:0}function j(i=M()){if(!i.daRimettere)return"";if(i.avanzo)return`Hai scritto ${b(i.avanzo)} kcal in piu' del dovuto: il conto e' gia' chiuso prima della fine.`;if(!i.liberi)return"Hai deciso tutti i giorni tu.";if(!i.daDividere)return"Con quello che hai scritto il conto torna: gli altri giorni restano il tuo numero di sempre.";const o=i.liberi===1?"nell'ultimo giorno":`negli altri ${i.liberi} giorni`;return`Restano ${b(i.daDividere)} kcal: ${o}, ${b(i.perGiorno)} al giorno.`}const b=i=>String(Math.round(i)).replace(/\B(?=(\d{3})+(?!\d))/g,".");function J(){const i=G();for(let o=1;o<=3;o++){const t=$(c,-o),n=i[t];if(n){const a=-Number(n.difference??0);return a>=400?{giorno:t,quanto:Math.round(a)}:null}const e=z(t);if(e!==null)return e>=400?{giorno:t,quanto:e}:null}return null}function z(i){try{const o=localStorage.getItem("mm2_current_profile")||"p1",t=localStorage.getItem(`mm2_days_${o}`);if(!t)return null;const n=JSON.parse(t)[i];if(!n)return null;const e=Number(n.foodKcal??0),a=Number(n.target??0);return!e||!a?null:Math.max(0,Math.round(a-e))}catch{return null}}function H(){return L(c)}const K=()=>R();function Q(){m()}function V(i){return R()?!0:localStorage.getItem(`mm2_credito_no_${i}`)==="1"}function W(i){localStorage.setItem(`mm2_credito_no_${i}`,"1")}const u=i=>document.getElementById(i),g=i=>String(Math.round(i)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),B=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],P=["dom","lun","mar","mer","gio","ven","sab"];function q(i){if(i===c)return"oggi";if(i===$(c,1))return"domani";const[o,t,n]=i.split("-").map(Number),e=new Date(Date.UTC(o,t-1,n));return`${P[e.getUTCDay()]} ${n} ${B[t-1]}`}function U(){const i=u("creditoBox");if(!i)return;const o=h();if(!o.daRimettere){i.innerHTML="",m();return}const t=M();if(!t.attivo){i.innerHTML=`<div class="deb sotto">
      <div class="deb-top">
        <div>
          <div class="deb-k">Calorie da rimettere</div>
          <div class="deb-v">${g(o.daRimettere)}<small>kcal</small></div>
        </div>
      </div>
      <div class="deb-scelta">
        ${y(o)}
        <div class="deb-nota">Dividendole per i ${o.restanoNelCiclo} giorni che restano
          fanno ${g(o.alGiorno)} kcal in piu&rsquo; al giorno. Ma decidi tu: puoi metterne
          di piu&rsquo; in un giorno e di meno in un altro.</div>
        <div class="deb-riga">
          <button class="dg-btn" id="crFai">Rientriamo</button>
          <button class="dg-btn no" id="crNo">Lascia stare</button>
        </div>
      </div>
    </div>`,u("crFai").onclick=()=>{F(),l()},u("crNo").onclick=()=>{m(),l()};return}const n=t.righe.map(e=>`
    <label class="ri-riga${e.oggi?" ri-oggi":""}${e.fissato?" ri-mio":""}">
      <span class="ri-g">${q(e.giorno)}</span>
      <span class="ri-n">
        <input class="ri-i" type="number" inputmode="numeric" min="0" step="50"
               value="${e.kcal}" data-g="${e.giorno}" aria-label="kcal in piu&rsquo; ${q(e.giorno)}">
        <small>kcal</small>
      </span>
      <span class="ri-t">${e.fissato?`<button class="ri-x" data-lib="${e.giorno}" title="Rimettilo in mano a MetaMap">deciso da te</button>`:'<span class="ri-auto">MetaMap</span>'}</span>
    </label>`).join("");i.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">Stai rientrando</div>
        <div class="deb-v">${g(o.daRimettere)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>${t.liberi?`+${g(t.perGiorno)} kcal al giorno`:"tutti scritti da te"}</b>
        <span>${t.liberi?`sui ${t.liberi} giorni che decide MetaMap`:`su ${t.righe.length} giorni`}</span>
      </div>
    </div>

    <div class="deb-scelta">
      ${y(o)}
      <div class="ri-titolo">Quante ne mangi in piu&rsquo;, giorno per giorno</div>
      <div class="ri-tab">${n}</div>
      <div class="deb-nota">${j(t)}</div>
      ${t.pesante?`<div class="deb-nota avviso">Una di queste giornate e&rsquo; molto grossa. Rimettere tutto
             in una volta non e&rsquo; recuperare, e&rsquo; mangiare per due: il corpo non la usa,
             la mette da parte. Puoi farlo, ma sappi che stai facendo quello.</div>`:""}
      <div class="deb-riga">
        <button class="dg-btn no" id="crAuto">Ridividi tu</button>
        <button class="dg-btn no" id="crNo">Smetti di rientrare</button>
      </div>
    </div>
  </div>`,i.querySelectorAll(".ri-i").forEach(e=>{e.onchange=()=>{const a=parseInt(e.value.replace(/[^\d]/g,""),10);k(e.dataset.g,Number.isFinite(a)?a:null),l()},e.onkeydown=a=>{a.key==="Enter"&&e.blur()}}),i.querySelectorAll("[data-lib]").forEach(e=>{e.onclick=()=>{k(e.dataset.lib,null),l()}}),u("crAuto").onclick=()=>{x(),l()},u("crNo").onclick=()=>{m(),l()}}function y(i){return!i.peggiora||i.giorniContati<2?"":`<div class="deb-nota avviso">Ieri non hai rimesso la tua parte, e sei rimasto
    sotto anche col numero di ieri: il conto e&rsquo; cresciuto. Non serve rifarlo a mano,
    lo tengo io, ma va guardato.</div>`}function l(){U(),O(()=>import("./index-BoYf8z0r.js").then(i=>i.N),__vite__mapDeps([0,1]),import.meta.url).then(i=>{i.impostaCredito(H()),i.recomputeNow()})}export{K as creditoAperto,H as creditoDiOggi,V as giaDeciso,Q as lasciaStare,U as paintCredito,W as segnaNo,J as sottoRecente};
