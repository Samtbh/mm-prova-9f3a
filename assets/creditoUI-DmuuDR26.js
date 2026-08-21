const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-BEwMgWlM.js","./index-Bv6WDXdY.css"])))=>i.map(i=>d[i]);
import{t as r,_ as h,E as L,u as y,F as I}from"./index-BEwMgWlM.js";const u="mm2_credito",M=400,b=()=>{try{return JSON.parse(localStorage.getItem(u)||"null")}catch{return null}},f=i=>{i?localStorage.setItem(u,JSON.stringify(i)):localStorage.removeItem(u)};function N(){const i=y();for(let o=1;o<=3;o++){const n=I(r,-o),e=i[n];if(!e)continue;const s=-Number(e.difference??0);return s>=400?{giorno:n,quanto:Math.round(s)}:null}return null}function k(){const i=b();return i?r>i.fino?(f(null),0):r<i.da?0:i.quota:0}const w=()=>b();function A(i,o,n){const e=Math.min(M,Math.round(o/n)),s={da:r,totale:o,giorni:n,quota:e,fino:I(r,n-1)};return f(s),s}function E(){f(null)}function O(i){return b()?!0:localStorage.getItem(`${u}_no_${i}`)==="1"}function C(i){localStorage.setItem(`${u}_no_${i}`,"1")}const p=i=>document.getElementById(i),d=i=>Math.round(i).toLocaleString("it-IT");function q(){const i=p("creditoBox");if(!i)return;const o=w();if(o&&r<=o.fino){i.innerHTML=`<div class="deb sotto">
      <div class="deb-top">
        <div>
          <div class="deb-k">Stai rimettendo</div>
          <div class="deb-v">${d(o.totale)}<small>kcal</small></div>
        </div>
        <div class="deb-piano">
          <b>+${d(o.quota)} kcal al giorno</b>
          <span>fino al ${o.fino.slice(8)}, poi sei in pari</span>
        </div>
      </div>

      <div class="deb-scelta">
        <div class="deb-lb">Il numero di ogni giorno è già più alto</div>
        <button class="dg-btn no" id="crAnnulla">Lascia stare</button>
      </div>
    </div>`,p("crAnnulla").onclick=async()=>{E();const{impostaCredito:t,recomputeNow:a}=await h(async()=>{const{impostaCredito:l,recomputeNow:m}=await import("./index-BEwMgWlM.js").then(g=>g.L);return{impostaCredito:l,recomputeNow:m}},__vite__mapDeps([0,1]),import.meta.url);t(0),q(),a()};return}const n=L(r),e=N();if(!e||O(e.giorno)){i.innerHTML="";return}const s=[3,5,7].filter(t=>t<=n);!s.includes(n)&&n>=1&&s.unshift(n);const _=[...new Set(s)].sort((t,a)=>t-a).slice(0,4),v=_[0]??1;i.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">Calorie da rimettere</div>
        <div class="deb-v">${d(e.quanto)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>+${d(Math.min(400,Math.round(e.quanto/v)))} kcal al giorno</b>
        <span>se le spalmi in ${v} giorn${v===1?"o":"i"}</span>
      </div>
    </div>

    <div class="deb-scelta">
      <div class="deb-lb">In quanti giorni</div>
      <div class="splitchips" id="crGiorni">
        ${_.map((t,a)=>`<button type="button" class="splitchip ${a===0?"on":""}" data-g="${t}">${t} giorn${t===1?"o":"i"}</button>`).join("")}
      </div>
      <div class="deb-nota">${n===1?"Il ciclo finisce oggi: quello che non rimetti oggi non si recupera più.":`Il ciclo finisce fra ${n} giorni: si rimette dentro quelli.`}</div>
      <div class="deb-riga">
        <button class="dg-btn" id="crFai">Rimettile</button>
        <button class="dg-btn no" id="crNo">Lascia stare</button>
      </div>
    </div>
  </div>`;let c=v;i.querySelectorAll("#crGiorni .splitchip").forEach(t=>{t.onclick=()=>{c=Number(t.dataset.g),i.querySelectorAll(".splitchip").forEach(l=>l.classList.remove("on")),t.classList.add("on");const a=i.querySelector(".deb-piano");a&&(a.innerHTML=`<b>+${d(Math.min(400,Math.round(e.quanto/c)))} kcal al giorno</b><span>se le spalmi in ${c} giorn${c===1?"o":"i"}</span>`)}});const $=async t=>{t?A(e.giorno,e.quanto,c):C(e.giorno);const{impostaCredito:a,recomputeNow:l}=await h(async()=>{const{impostaCredito:m,recomputeNow:g}=await import("./index-BEwMgWlM.js").then(S=>S.L);return{impostaCredito:m,recomputeNow:g}},__vite__mapDeps([0,1]),import.meta.url);a(k()),q(),l()};p("crFai").onclick=()=>{$(!0)},p("crNo").onclick=()=>{$(!1)}}export{w as creditoAperto,k as creditoDiOggi,O as giaDeciso,E as lasciaStare,q as paintCredito,C as segnaNo,N as sottoRecente,A as spalma};
