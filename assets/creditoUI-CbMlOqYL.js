const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C7oAJala.js","./index-Btqie9Mr.css"])))=>i.map(i=>d[i]);
import{t as c,E as h,G as C,F as $,u as E,_ as O}from"./index-C7oAJala.js";const R="mm2_rientro",S={attivo:!1,fissi:{}},u=()=>{try{const i=JSON.parse(localStorage.getItem(R)||"null");return!i||typeof i!="object"?{...S}:{attivo:!!i.attivo,fissi:i.fissi&&typeof i.fissi=="object"?i.fissi:{}}}catch{return{...S}}},v=i=>localStorage.setItem(R,JSON.stringify(i));function T(){const i=h();return Array.from({length:i.restanoNelCiclo},(e,t)=>$(c,t))}function M(){const i=u(),e=h(),t=T(),n={};for(const[r,s]of Object.entries(i.fissi))t.includes(r)&&Number.isFinite(s)&&s>0&&(n[r]=Math.round(s));const o=Object.values(n).reduce((r,s)=>r+s,0),a=t.filter(r=>!(r in n)),N=e.daRimettere-o,f=Math.max(0,N),q=Math.max(0,-N),b=a.length?Math.floor(f/a.length):0,A=f-b*a.length,G=a[a.length-1],_=t.map(r=>{const s=r in n?n[r]:b+(r===G?A:0);return{giorno:r,kcal:Math.max(0,Math.round(s)),fissato:r in n,oggi:r===c,pesante:s>C}});return{attivo:i.attivo,righe:_,daRimettere:e.daRimettere,scrittoDaTe:o,daDividere:f,liberi:a.length,perGiorno:b,avanzo:q,pesante:_.some(r=>r.pesante)}}function k(i,e){const t=u();e===null||!Number.isFinite(e)||e<0?delete t.fissi[i]:t.fissi[i]=Math.round(e),t.attivo=!0,v(t)}function x(){const i=u();i.fissi={},v(i)}function L(){v({...u(),attivo:!0})}function m(){v({attivo:!1,fissi:{}})}const D=()=>u().attivo;function F(i=c){const e=M();return e.attivo?e.righe.find(t=>t.giorno===i)?.kcal??0:0}function j(i=M()){if(!i.daRimettere)return"";if(i.avanzo)return`Hai scritto ${p(i.avanzo)} kcal in più del dovuto: il conto si chiude prima della fine del ciclo.`;if(!i.liberi)return"Li hai scritti tutti tu: MetaMap non tocca niente.";if(!i.daDividere)return"Con quello che hai scritto il conto torna. Gli altri giorni restano il tuo numero di sempre.";const e=i.liberi===1?"nell'ultimo giorno che resta":`negli altri ${i.liberi} giorni`;return`Restano ${p(i.daDividere)} kcal da rimettere: ${e}, ${p(i.perGiorno)} al giorno.`}const p=i=>String(Math.round(i)).replace(/\B(?=(\d{3})+(?!\d))/g,".");function J(){const i=E();for(let e=1;e<=3;e++){const t=$(c,-e),n=i[t];if(n){const a=-Number(n.difference??0);return a>=400?{giorno:t,quanto:Math.round(a)}:null}const o=z(t);if(o!==null)return o>=400?{giorno:t,quanto:o}:null}return null}function z(i){try{const e=localStorage.getItem("mm2_current_profile")||"p1",t=localStorage.getItem(`mm2_days_${e}`);if(!t)return null;const n=JSON.parse(t)[i];if(!n)return null;const o=Number(n.foodKcal??0),a=Number(n.target??0);return!o||!a?null:Math.max(0,Math.round(a-o))}catch{return null}}function B(){return F(c)}const K=()=>D();function Q(){m()}function V(i){return D()?!0:localStorage.getItem(`mm2_credito_no_${i}`)==="1"}function W(i){localStorage.setItem(`mm2_credito_no_${i}`,"1")}const d=i=>document.getElementById(i),g=i=>String(Math.round(i)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),H=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],P=["dom","lun","mar","mer","gio","ven","sab"];function I(i){if(i===c)return"oggi";if(i===$(c,1))return"domani";const[e,t,n]=i.split("-").map(Number),o=new Date(Date.UTC(e,t-1,n));return`${P[o.getUTCDay()]} ${n} ${H[t-1]}`}function U(){const i=d("creditoBox");if(!i)return;const e=h();if(!e.daRimettere){i.innerHTML="",m();return}const t=M();if(!t.attivo){i.innerHTML=`<div class="deb sotto">
      <div class="deb-top">
        <div>
          <div class="deb-k">Calorie da rimettere</div>
          <div class="deb-v">${g(e.daRimettere)}<small>kcal</small></div>
        </div>
      </div>
      <div class="deb-scelta">
        ${y(e)}
        <div class="deb-nota">Dividendole per i ${e.restanoNelCiclo} giorni che restano
          fanno ${g(e.alGiorno)} kcal in più al giorno. Ma quante mangiarne lo decidi tu, un
          giorno alla volta.</div>
        <div class="deb-riga">
          <button class="dg-btn" id="crFai">Rientriamo</button>
          <button class="dg-btn no" id="crNo">Lascia stare</button>
        </div>
      </div>
    </div>`,d("crFai").onclick=()=>{L(),l()},d("crNo").onclick=()=>{m(),l()};return}const n=t.righe.map(o=>`
    <label class="ri-riga${o.oggi?" ri-oggi":""}${o.fissato?" ri-mio":""}">
      <span class="ri-g">${I(o.giorno)}</span>
      <span class="ri-n">
        <input class="ri-i" type="number" inputmode="numeric" min="0" step="50"
               value="${o.kcal}" data-g="${o.giorno}" aria-label="kcal in più ${I(o.giorno)}">
        <small>kcal</small>
      </span>
      <span class="ri-t">${o.fissato?`<button class="ri-x" data-lib="${o.giorno}" title="Rimettilo in mano a MetaMap">deciso da te</button>`:'<span class="ri-auto">MetaMap</span>'}</span>
    </label>`).join("");i.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">Stai rientrando</div>
        <div class="deb-v">${g(e.daRimettere)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>${t.liberi?`+${g(t.perGiorno)} kcal al giorno`:"tutti scritti da te"}</b>
        <span>${t.liberi?`sugli altri ${t.liberi} giorni`:`su ${t.righe.length} giorni`}</span>
      </div>
    </div>

    <div class="deb-scelta">
      ${y(e)}
      <div class="ri-titolo">Quante ne mangi in più, giorno per giorno</div>
      <div class="ri-tab">${n}</div>
      <div class="deb-nota">${j(t)}</div>
      ${t.pesante?`<div class="deb-nota avviso">Una di queste giornate è molto grossa. Rimettere tutto in una volta
             non è recuperare, è mangiare per due: il corpo non la usa, la mette da
             parte. Puoi farlo, ma sappi che stai facendo quello.</div>`:""}
      <div class="deb-riga">
        <button class="dg-btn no" id="crAuto">Ridividi tu</button>
        <button class="dg-btn no" id="crNo">Smetti di rientrare</button>
      </div>
    </div>
  </div>`,i.querySelectorAll(".ri-i").forEach(o=>{o.onchange=()=>{const a=parseInt(o.value.replace(/[^\d]/g,""),10);k(o.dataset.g,Number.isFinite(a)?a:null),l()},o.onkeydown=a=>{a.key==="Enter"&&o.blur()}}),i.querySelectorAll("[data-lib]").forEach(o=>{o.onclick=()=>{k(o.dataset.lib,null),l()}}),d("crAuto").onclick=()=>{x(),l()},d("crNo").onclick=()=>{m(),l()}}function y(i){return!i.peggiora||i.giorniContati<2?"":`<div class="deb-nota avviso">Ieri non hai rimesso la tua parte, e sei rimasto
    sotto anche col numero di ieri: il conto è cresciuto. Il piano lo rifaccio io,
    ma questa è una cosa da guardare.</div>`}function l(){U(),O(()=>import("./index-C7oAJala.js").then(i=>i.N),__vite__mapDeps([0,1]),import.meta.url).then(i=>{i.impostaCredito(B()),i.recomputeNow()})}export{K as creditoAperto,B as creditoDiOggi,V as giaDeciso,Q as lasciaStare,U as paintCredito,W as segnaNo,J as sottoRecente};
