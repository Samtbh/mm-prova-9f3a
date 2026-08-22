const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CzF9L4Ks.js","./index-C0juWENH.css"])))=>i.map(i=>d[i]);
import{t as c,E as h,F as x,G as A,H as $,u as E,_ as L}from"./index-CzF9L4Ks.js";const R="mm2_rientro",S={attivo:!1,fissi:{}},u=()=>{try{const t=JSON.parse(localStorage.getItem(R)||"null");return!t||typeof t!="object"?{...S}:{attivo:!!t.attivo,fissi:t.fissi&&typeof t.fissi=="object"?t.fissi:{}}}catch{return{...S}}},v=t=>localStorage.setItem(R,JSON.stringify(t));function T(){const t=h();return Array.from({length:t.restanoNelCiclo},(e,i)=>$(c,i))}function M(){const t=u(),e=h(),i=T(),n={};for(const[r,s]of Object.entries(t.fissi))i.includes(r)&&Number.isFinite(s)&&s>0&&(n[r]=Math.round(s));const o=Object.values(n).reduce((r,s)=>r+s,0),a=i.filter(r=>!(r in n)),_=e.daRimettere-o,f=Math.max(0,_),q=Math.max(0,-_),p=a.length?Math.floor(f/a.length):0,C=f-p*a.length,G=a[a.length-1],O=x(A()),N=i.map(r=>{const s=r in n?n[r]:p+(r===G?C:0);return{giorno:r,kcal:Math.max(0,Math.round(s)),fissato:r in n,oggi:r===c,pesante:s>O}});return{attivo:t.attivo,righe:N,daRimettere:e.daRimettere,scrittoDaTe:o,daDividere:f,liberi:a.length,perGiorno:p,avanzo:q,pesante:N.some(r=>r.pesante)}}function k(t,e){const i=u();e===null||!Number.isFinite(e)||e<0?delete i.fissi[t]:i.fissi[t]=Math.round(e),i.attivo=!0,v(i)}function F(){const t=u();t.fissi={},v(t)}function j(){v({...u(),attivo:!0})}function m(){v({attivo:!1,fissi:{}})}const D=()=>u().attivo;function z(t=c){const e=M();return e.attivo?e.righe.find(i=>i.giorno===t)?.kcal??0:0}function H(t=M()){if(!t.daRimettere)return"";if(t.avanzo)return`Hai scritto ${b(t.avanzo)} kcal in più del dovuto: il conto si chiude prima della fine del ciclo.`;if(!t.liberi)return"Li hai scritti tutti tu: MetaMap non tocca niente.";if(!t.daDividere)return"Con quello che hai scritto il conto torna. Gli altri giorni restano il tuo numero di sempre.";const e=t.liberi===1?"nell'ultimo giorno che resta":`negli altri ${t.liberi} giorni`;return`Restano ${b(t.daDividere)} kcal da rimettere: ${e}, ${b(t.perGiorno)} al giorno.`}const b=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,".");function Q(){const t=E();for(let e=1;e<=3;e++){const i=$(c,-e),n=t[i];if(n){const a=-Number(n.difference??0);return a>=400?{giorno:i,quanto:Math.round(a)}:null}const o=B(i);if(o!==null)return o>=400?{giorno:i,quanto:o}:null}return null}function B(t){try{const e=localStorage.getItem("mm2_current_profile")||"p1",i=localStorage.getItem(`mm2_days_${e}`);if(!i)return null;const n=JSON.parse(i)[t];if(!n)return null;const o=Number(n.foodKcal??0),a=Number(n.target??0);return!o||!a?null:Math.max(0,Math.round(a-o))}catch{return null}}function P(){return z(c)}const V=()=>D();function W(){m()}function X(t){return D()?!0:localStorage.getItem(`mm2_credito_no_${t}`)==="1"}function Y(t){localStorage.setItem(`mm2_credito_no_${t}`,"1")}const d=t=>document.getElementById(t),g=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),U=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],w=["dom","lun","mar","mer","gio","ven","sab"];function y(t){if(t===c)return"oggi";if(t===$(c,1))return"domani";const[e,i,n]=t.split("-").map(Number),o=new Date(Date.UTC(e,i-1,n));return`${w[o.getUTCDay()]} ${n} ${U[i-1]}`}function J(){const t=d("creditoBox");if(!t)return;const e=h();if(!e.daRimettere){t.innerHTML="",m();return}const i=M();if(!i.attivo){t.innerHTML=`<div class="deb sotto">
      <div class="deb-top">
        <div>
          <div class="deb-k">Calorie da rimettere</div>
          <div class="deb-v">${g(e.daRimettere)}<small>kcal</small></div>
        </div>
      </div>
      <div class="deb-scelta">
        ${I(e)}
        <div class="deb-nota">Dividendole per i ${e.restanoNelCiclo} giorni che restano
          fanno ${g(e.alGiorno)} kcal in più al giorno. Ma quante mangiarne lo decidi tu, un
          giorno alla volta.</div>
        <div class="deb-riga">
          <button class="dg-btn" id="crFai">Rientriamo</button>
          <button class="dg-btn no" id="crNo">Lascia stare</button>
        </div>
      </div>
    </div>`,d("crFai").onclick=()=>{j(),l()},d("crNo").onclick=()=>{m(),l()};return}const n=i.righe.map(o=>`
    <label class="ri-riga${o.oggi?" ri-oggi":""}${o.fissato?" ri-mio":""}">
      <span class="ri-g">${y(o.giorno)}</span>
      <span class="ri-n">
        <input class="ri-i" type="number" inputmode="numeric" min="0" step="50"
               value="${o.kcal}" data-g="${o.giorno}" aria-label="kcal in più ${y(o.giorno)}">
        <small>kcal</small>
      </span>
      <span class="ri-t">${o.fissato?`<button class="ri-x" data-lib="${o.giorno}" title="Rimettilo in mano a MetaMap">deciso da te</button>`:'<span class="ri-auto">MetaMap</span>'}</span>
    </label>`).join("");t.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">Stai rientrando</div>
        <div class="deb-v">${g(e.daRimettere)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>${i.liberi?`+${g(i.perGiorno)} kcal al giorno`:"tutti scritti da te"}</b>
        <span>${i.liberi?`sugli altri ${i.liberi} giorni`:`su ${i.righe.length} giorni`}</span>
      </div>
    </div>

    <div class="deb-scelta">
      ${I(e)}
      <div class="ri-titolo">Quante ne mangi in più, giorno per giorno</div>
      <div class="ri-tab">${n}</div>
      <div class="deb-nota">${H(i)}</div>
      ${i.pesante?`<div class="deb-nota avviso">Una di queste giornate è molto grossa. Rimettere tutto in una volta
             usa male il recupero: sopra questa soglia il corpo mette da parte più
             energia di quanta ne usi davvero. Puoi farlo, ma spalmarle su due o tre
             giorni ti rende molto di più.</div>`:""}
      <div class="deb-riga">
        <button class="dg-btn no" id="crAuto">Ridividi tu</button>
        <button class="dg-btn no" id="crNo">Smetti di rientrare</button>
      </div>
    </div>
  </div>`,t.querySelectorAll(".ri-i").forEach(o=>{o.onchange=()=>{const a=parseInt(o.value.replace(/[^\d]/g,""),10);k(o.dataset.g,Number.isFinite(a)?a:null),l()},o.onkeydown=a=>{a.key==="Enter"&&o.blur()}}),t.querySelectorAll("[data-lib]").forEach(o=>{o.onclick=()=>{k(o.dataset.lib,null),l()}}),d("crAuto").onclick=()=>{F(),l()},d("crNo").onclick=()=>{m(),l()}}function I(t){return!t.peggiora||t.giorniContati<2?"":`<div class="deb-nota avviso">Ieri non hai rimesso la tua parte, e sei rimasto
    sotto anche col numero di ieri: il conto è cresciuto. Il piano lo rifaccio io,
    ma questa è una cosa da guardare.</div>`}function l(){J(),L(()=>import("./index-CzF9L4Ks.js").then(t=>t.R),__vite__mapDeps([0,1]),import.meta.url).then(t=>{t.impostaCredito(P()),t.recomputeNow()})}export{V as creditoAperto,P as creditoDiOggi,X as giaDeciso,W as lasciaStare,J as paintCredito,Y as segnaNo,Q as sottoRecente};
