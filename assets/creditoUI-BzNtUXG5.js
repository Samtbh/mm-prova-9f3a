const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-iF10P2Yo.js","./index-D4kON_E4.css"])))=>i.map(i=>d[i]);
import{t as c,_ as $,E as q,u as N,F as S}from"./index-iF10P2Yo.js";const m="mm2_credito",y=400,b=()=>{try{return JSON.parse(localStorage.getItem(m)||"null")}catch{return null}},_=t=>{t?localStorage.setItem(m,JSON.stringify(t)):localStorage.removeItem(m)};function L(){const t=N();for(let n=1;n<=3;n++){const o=S(c,-n),i=t[o];if(i){const s=-Number(i.difference??0);return s>=400?{giorno:o,quanto:Math.round(s)}:null}const a=k(o);if(a!==null)return a>=400?{giorno:o,quanto:a}:null}return null}function k(t){try{const n=localStorage.getItem("mm2_current_profile")||"p1",o=localStorage.getItem(`mm2_days_${n}`);if(!o)return null;const i=JSON.parse(o)[t];if(!i)return null;const a=Number(i.foodKcal??0),s=Number(i.target??0);return!a||!s?null:Math.max(0,Math.round(s-a))}catch{return null}}function A(){const t=b();return t?c>t.fino?(_(null),0):c<t.da?0:t.quota:0}const w=()=>b();function O(t,n,o){const i=Math.min(y,Math.round(n/o)),a={da:c,totale:n,giorni:o,quota:i,fino:S(c,o-1)};return _(a),a}function E(){_(null)}function C(t){return b()?!0:localStorage.getItem(`${m}_no_${t}`)==="1"}function D(t){localStorage.setItem(`${m}_no_${t}`,"1")}const v=t=>document.getElementById(t),u=t=>Math.round(t).toLocaleString("it-IT");function I(){const t=v("creditoBox");if(!t)return;const n=w();if(n&&c<=n.fino){t.innerHTML=`<div class="deb sotto">
      <div class="deb-top">
        <div>
          <div class="deb-k">Stai rimettendo</div>
          <div class="deb-v">${u(n.totale)}<small>kcal</small></div>
        </div>
        <div class="deb-piano">
          <b>+${u(n.quota)} kcal al giorno</b>
          <span>fino al ${n.fino.slice(8)}, poi sei in pari</span>
        </div>
      </div>

      <div class="deb-scelta">
        <div class="deb-lb">Il numero di ogni giorno è già più alto</div>
        <button class="dg-btn no" id="crAnnulla">Lascia stare</button>
      </div>
    </div>`,v("crAnnulla").onclick=async()=>{E();const{impostaCredito:e,recomputeNow:r}=await $(async()=>{const{impostaCredito:d,recomputeNow:g}=await import("./index-iF10P2Yo.js").then(f=>f.M);return{impostaCredito:d,recomputeNow:g}},__vite__mapDeps([0,1]),import.meta.url);e(0),I(),r()};return}const o=q(c),i=L();if(!i||C(i.giorno)){t.innerHTML="";return}const a=[3,5,7].filter(e=>e<=o);!a.includes(o)&&o>=1&&a.unshift(o);const s=[...new Set(a)].sort((e,r)=>e-r).slice(0,4),p=s[0]??1;t.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">Calorie da rimettere</div>
        <div class="deb-v">${u(i.quanto)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>+${u(Math.min(400,Math.round(i.quanto/p)))} kcal al giorno</b>
        <span>se le spalmi in ${p} giorn${p===1?"o":"i"}</span>
      </div>
    </div>

    <div class="deb-scelta">
      <div class="deb-lb">In quanti giorni</div>
      <div class="splitchips" id="crGiorni">
        ${s.map((e,r)=>`<button type="button" class="splitchip ${r===0?"on":""}" data-g="${e}">${e} giorn${e===1?"o":"i"}</button>`).join("")}
      </div>
      <div class="deb-nota">${o===1?"Il ciclo finisce oggi: quello che non rimetti oggi non si recupera più.":`Il ciclo finisce fra ${o} giorni: si rimette dentro quelli.`}</div>
      <div class="deb-riga">
        <button class="dg-btn" id="crFai">Rimettile</button>
        <button class="dg-btn no" id="crNo">Lascia stare</button>
      </div>
    </div>
  </div>`;let l=p;t.querySelectorAll("#crGiorni .splitchip").forEach(e=>{e.onclick=()=>{l=Number(e.dataset.g),t.querySelectorAll(".splitchip").forEach(d=>d.classList.remove("on")),e.classList.add("on");const r=t.querySelector(".deb-piano");r&&(r.innerHTML=`<b>+${u(Math.min(400,Math.round(i.quanto/l)))} kcal al giorno</b><span>se le spalmi in ${l} giorn${l===1?"o":"i"}</span>`)}});const h=async e=>{e?O(i.giorno,i.quanto,l):D(i.giorno);const{impostaCredito:r,recomputeNow:d}=await $(async()=>{const{impostaCredito:g,recomputeNow:f}=await import("./index-iF10P2Yo.js").then(M=>M.M);return{impostaCredito:g,recomputeNow:f}},__vite__mapDeps([0,1]),import.meta.url);r(A()),I(),d()};v("crFai").onclick=()=>{h(!0)},v("crNo").onclick=()=>{h(!1)}}export{w as creditoAperto,A as creditoDiOggi,C as giaDeciso,E as lasciaStare,I as paintCredito,D as segnaNo,L as sottoRecente,O as spalma};
