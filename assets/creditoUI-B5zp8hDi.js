const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DPfeP5fX.js","./index-CmEEG52E.css"])))=>i.map(i=>d[i]);
import{t as c,E as $,_ as h,u as E,F as O}from"./index-DPfeP5fX.js";const g="mm2_credito",w=400,M=()=>{try{return JSON.parse(localStorage.getItem(g)||"null")}catch{return null}},N=t=>{t?localStorage.setItem(g,JSON.stringify(t)):localStorage.removeItem(g)};function I(){const t=E();for(let o=1;o<=3;o++){const i=O(c,-o),a=t[i];if(a){const r=-Number(a.difference??0);return r>=400?{giorno:i,quanto:Math.round(r)}:null}const n=D(i);if(n!==null)return n>=400?{giorno:i,quanto:n}:null}return null}function D(t){try{const o=localStorage.getItem("mm2_current_profile")||"p1",i=localStorage.getItem(`mm2_days_${o}`);if(!i)return null;const a=JSON.parse(i)[t];if(!a)return null;const n=Number(a.foodKcal??0),r=Number(a.target??0);return!n||!r?null:Math.max(0,Math.round(r-n))}catch{return null}}function q(){const t=M();return t?c>t.fino?(N(null),0):c<t.da?0:t.quota:0}const y=()=>M();function C(t,o,i){const a=Math.min(w,Math.round(o/i)),n={da:c,totale:o,giorni:i,quota:a,fino:O(c,i-1)};return N(n),n}function x(){N(null)}function R(t){return M()?!0:localStorage.getItem(`${g}_no_${t}`)==="1"}function G(t){localStorage.setItem(`${g}_no_${t}`,"1")}const f=t=>document.getElementById(t),p=t=>Math.round(t).toLocaleString("it-IT");function L(){const t=f("creditoBox");if(!t)return;const o=I(),i=y();if(i&&o&&!J(o.giorno)){H(o.giorno);const e=$(c),s=Math.max(0,i.totale-P(i)),u=Math.max(1,Math.min(i.giorni,e));C(o.giorno,s+o.quanto,u),h(()=>import("./index-DPfeP5fX.js").then(l=>l.M),__vite__mapDeps([0,1]),import.meta.url).then(l=>{l.impostaCredito(q()),l.recomputeNow()})}const a=y();if(a&&c<=a.fino){t.innerHTML=`<div class="deb sotto">
      <div class="deb-top">
        <div>
          <div class="deb-k">Stai rimettendo</div>
          <div class="deb-v">${p(a.totale)}<small>kcal</small></div>
        </div>
        <div class="deb-piano">
          <b>+${p(a.quota)} kcal al giorno</b>
          <span>fino al ${a.fino.slice(8)}, poi sei in pari</span>
        </div>
      </div>

      <div class="deb-scelta">
        <div class="deb-lb">Il numero di ogni giorno è già più alto</div>
        <button class="dg-btn no" id="crAnnulla">Lascia stare</button>
      </div>
    </div>`,f("crAnnulla").onclick=async()=>{x();const{impostaCredito:e,recomputeNow:s}=await h(async()=>{const{impostaCredito:u,recomputeNow:l}=await import("./index-DPfeP5fX.js").then(_=>_.M);return{impostaCredito:u,recomputeNow:l}},__vite__mapDeps([0,1]),import.meta.url);e(0),L(),s()};return}const n=$(c),r=I();if(!r||R(r.giorno)){t.innerHTML="";return}const d=[3,5,7].filter(e=>e<=n);!d.includes(n)&&n>=1&&d.unshift(n);const b=[...new Set(d)].sort((e,s)=>e-s).slice(0,4),v=b[0]??1;t.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">Calorie da rimettere</div>
        <div class="deb-v">${p(r.quanto)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>+${p(Math.min(400,Math.round(r.quanto/v)))} kcal al giorno</b>
        <span>se le spalmi in ${v} giorn${v===1?"o":"i"}</span>
      </div>
    </div>

    <div class="deb-scelta">
      <div class="deb-lb">In quanti giorni</div>
      <div class="splitchips" id="crGiorni">
        ${b.map((e,s)=>`<button type="button" class="splitchip ${s===0?"on":""}" data-g="${e}">${e} giorn${e===1?"o":"i"}</button>`).join("")}
      </div>
      <div class="deb-nota">${n===1?"Il ciclo finisce oggi: quello che non rimetti oggi non si recupera più.":`Il ciclo finisce fra ${n} giorni: si rimette dentro quelli.`}</div>
      <div class="deb-riga">
        <button class="dg-btn" id="crFai">Rimettile</button>
        <button class="dg-btn no" id="crNo">Lascia stare</button>
      </div>
    </div>
  </div>`;let m=v;t.querySelectorAll("#crGiorni .splitchip").forEach(e=>{e.onclick=()=>{m=Number(e.dataset.g),t.querySelectorAll(".splitchip").forEach(u=>u.classList.remove("on")),e.classList.add("on");const s=t.querySelector(".deb-piano");s&&(s.innerHTML=`<b>+${p(Math.min(400,Math.round(r.quanto/m)))} kcal al giorno</b><span>se le spalmi in ${m} giorn${m===1?"o":"i"}</span>`)}});const S=async e=>{e?C(r.giorno,r.quanto,m):G(r.giorno);const{impostaCredito:s,recomputeNow:u}=await h(async()=>{const{impostaCredito:l,recomputeNow:_}=await import("./index-DPfeP5fX.js").then(k=>k.M);return{impostaCredito:l,recomputeNow:_}},__vite__mapDeps([0,1]),import.meta.url);s(q()),L(),u()};f("crFai").onclick=()=>{S(!0)},f("crNo").onclick=()=>{S(!1)}}const A="mm2_credito_contate";function T(){try{return JSON.parse(localStorage.getItem(A)||"[]")}catch{return[]}}function J(t){return T().includes(t)}function H(t){const o=T();o.includes(t)||localStorage.setItem(A,JSON.stringify([...o,t].slice(-10)))}function P(t){const[o,i,a]=t.da.split("-").map(Number),[n,r,d]=c.split("-").map(Number);return Math.max(0,Math.floor((Date.UTC(n,r-1,d)-Date.UTC(o,i-1,a))/864e5))*t.quota}export{y as creditoAperto,q as creditoDiOggi,R as giaDeciso,x as lasciaStare,L as paintCredito,G as segnaNo,I as sottoRecente,C as spalma};
