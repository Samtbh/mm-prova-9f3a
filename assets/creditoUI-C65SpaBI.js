const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-B__xYpA-.js","./index-CmEEG52E.css"])))=>i.map(i=>d[i]);
import{t as c,E as N,_,u as E,F as O}from"./index-B__xYpA-.js";const g="mm2_credito",w=400,M=()=>{try{return JSON.parse(localStorage.getItem(g)||"null")}catch{return null}},$=t=>{t?localStorage.setItem(g,JSON.stringify(t)):localStorage.removeItem(g)};function S(){const t=E();for(let o=1;o<=3;o++){const i=O(c,-o),e=t[i];if(e){const a=-Number(e.difference??0);return a>=400?{giorno:i,quanto:Math.round(a)}:null}const n=D(i);if(n!==null)return n>=400?{giorno:i,quanto:n}:null}return null}function D(t){try{const o=localStorage.getItem("mm2_current_profile")||"p1",i=localStorage.getItem(`mm2_days_${o}`);if(!i)return null;const e=JSON.parse(i)[t];if(!e)return null;const n=Number(e.foodKcal??0),a=Number(e.target??0);return!n||!a?null:Math.max(0,Math.round(a-n))}catch{return null}}function I(){const t=M();return t?c>t.fino?($(null),0):c<t.da?0:t.quota:0}const y=()=>M();function C(t,o,i){const e=Math.min(w,Math.round(o/i)),n={da:c,totale:o,giorni:i,quota:e,fino:O(c,i-1)};return $(n),n}function x(){$(null)}function R(t){return M()?!0:localStorage.getItem(`${g}_no_${t}`)==="1"}function G(t){localStorage.setItem(`${g}_no_${t}`,"1")}function J(t,o){const i=Math.min(400,Math.round(t/o)),e=Math.min(t,i*o),n=`in ${o} giorn${o===1?"o":"i"}`;return e>=t?`se le spalmi ${n}`:`${n} ne rimetti ${d(e)} su ${d(t)}`}const v=t=>document.getElementById(t),d=t=>Math.round(t).toLocaleString("it-IT");function L(){const t=v("creditoBox");if(!t)return;const o=S(),i=y();if(i&&o&&!H(o.giorno)){P(o.giorno);const r=N(c),s=Math.max(0,i.totale-F(i)),u=Math.max(1,Math.min(i.giorni,r));C(o.giorno,s+o.quanto,u),_(()=>import("./index-B__xYpA-.js").then(l=>l.M),__vite__mapDeps([0,1]),import.meta.url).then(l=>{l.impostaCredito(I()),l.recomputeNow()})}const e=y();if(e&&c<=e.fino){t.innerHTML=`<div class="deb sotto">
      <div class="deb-top">
        <div>
          <div class="deb-k">Stai rimettendo</div>
          <div class="deb-v">${d(e.totale)}<small>kcal</small></div>
        </div>
        <div class="deb-piano">
          <b>+${d(e.quota)} kcal al giorno</b>
          <span>fino al ${e.fino.slice(8)}, poi sei in pari</span>
        </div>
      </div>

      <div class="deb-scelta">
        <div class="deb-lb">Il numero di ogni giorno è già più alto</div>
        <button class="dg-btn no" id="crAnnulla">Lascia stare</button>
      </div>
    </div>`,v("crAnnulla").onclick=async()=>{x();const{impostaCredito:r,recomputeNow:s}=await _(async()=>{const{impostaCredito:u,recomputeNow:l}=await import("./index-B__xYpA-.js").then(h=>h.M);return{impostaCredito:u,recomputeNow:l}},__vite__mapDeps([0,1]),import.meta.url);r(0),L(),s()};return}const n=N(c),a=S();if(!a||R(a.giorno)){t.innerHTML="";return}const m=[3,5,7].filter(r=>r<=n);!m.includes(n)&&n>=1&&m.unshift(n);const f=[...new Set(m)].sort((r,s)=>r-s).slice(0,4),b=f[0]??1;t.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">Calorie da rimettere</div>
        <div class="deb-v">${d(a.quanto)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>+${d(Math.min(400,Math.round(a.quanto/b)))} kcal al giorno</b>
        <span>${J(a.quanto,b)}</span>
      </div>
    </div>

    <div class="deb-scelta">
      <div class="deb-lb">In quanti giorni</div>
      <div class="splitchips" id="crGiorni">
        ${f.map((r,s)=>`<button type="button" class="splitchip ${s===0?"on":""}" data-g="${r}">${r} giorn${r===1?"o":"i"}</button>`).join("")}
      </div>
      <div class="deb-nota">${n===1?"Il ciclo finisce oggi: quello che non rimetti oggi non si recupera più.":`Il ciclo finisce fra ${n} giorni: si rimette dentro quelli.`}</div>
      <div class="deb-riga">
        <button class="dg-btn" id="crFai">Rimettile</button>
        <button class="dg-btn no" id="crNo">Lascia stare</button>
      </div>
    </div>
  </div>`;let p=b;t.querySelectorAll("#crGiorni .splitchip").forEach(r=>{r.onclick=()=>{p=Number(r.dataset.g),t.querySelectorAll(".splitchip").forEach(u=>u.classList.remove("on")),r.classList.add("on");const s=t.querySelector(".deb-piano");s&&(s.innerHTML=`<b>+${d(Math.min(400,Math.round(a.quanto/p)))} kcal al giorno</b><span>se le spalmi in ${p} giorn${p===1?"o":"i"}</span>`)}});const q=async r=>{r?C(a.giorno,a.quanto,p):G(a.giorno);const{impostaCredito:s,recomputeNow:u}=await _(async()=>{const{impostaCredito:l,recomputeNow:h}=await import("./index-B__xYpA-.js").then(k=>k.M);return{impostaCredito:l,recomputeNow:h}},__vite__mapDeps([0,1]),import.meta.url);s(I()),L(),u()};v("crFai").onclick=()=>{q(!0)},v("crNo").onclick=()=>{q(!1)}}const T="mm2_credito_contate";function A(){try{return JSON.parse(localStorage.getItem(T)||"[]")}catch{return[]}}function H(t){return A().includes(t)}function P(t){const o=A();o.includes(t)||localStorage.setItem(T,JSON.stringify([...o,t].slice(-10)))}function F(t){const[o,i,e]=t.da.split("-").map(Number),[n,a,m]=c.split("-").map(Number);return Math.max(0,Math.floor((Date.UTC(n,a-1,m)-Date.UTC(o,i-1,e))/864e5))*t.quota}export{y as creditoAperto,I as creditoDiOggi,R as giaDeciso,x as lasciaStare,L as paintCredito,G as segnaNo,S as sottoRecente,C as spalma};
