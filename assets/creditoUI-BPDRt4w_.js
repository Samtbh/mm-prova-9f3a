const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-_qlJn6mM.js","./index-CZ521mGm.css"])))=>i.map(i=>d[i]);
import{t as r,_ as g,E as _,u as q,F as v}from"./index-_qlJn6mM.js";const c="mm2_credito",I=400,p=()=>{try{return JSON.parse(localStorage.getItem(c)||"null")}catch{return null}},m=t=>{t?localStorage.setItem(c,JSON.stringify(t)):localStorage.removeItem(c)};function S(){const t=q();for(let o=1;o<=3;o++){const e=v(r,-o),i=t[e];if(!i)continue;const n=-Number(i.difference??0);return n>=400?{giorno:e,quanto:Math.round(n)}:null}return null}function M(){const t=p();return t?r>t.fino?(m(null),0):r<t.da?0:t.quota:0}const L=()=>p();function N(t,o,e){const i=Math.min(I,Math.round(o/e)),n={da:r,totale:o,giorni:e,quota:i,fino:v(r,e-1)};return m(n),n}function y(){m(null)}function w(t){return p()?!0:localStorage.getItem(`${c}_no_${t}`)==="1"}function k(t){localStorage.setItem(`${c}_no_${t}`,"1")}function A(t){const o=_(r),e=[3,5,7].filter(n=>n<=o);return!e.includes(o)&&o>=1&&e.unshift(o),[...new Set(e)].sort((n,a)=>n-a).slice(0,3).map(n=>{const a=Math.min(400,Math.round(t/n));return`<button class="dg-btn" data-g="${n}"><b>in ${n} giorn${n===1?"o":"i"}</b><span>+${s(a)} kcal al giorno</span></button>`}).join("")}const f=t=>document.getElementById(t),s=t=>Math.round(t).toLocaleString("it-IT");function b(){const t=f("creditoBox");if(!t)return;const o=L();if(o&&r<=o.fino){t.innerHTML=`<div class="deb sotto">
      <span class="deb-k">Stai recuperando</span>
      <div class="deb-top">
        <b>${s(o.totale)}<small> kcal</small></b>
        <span class="deb-n">+${s(o.quota)} al giorno</span>
      </div>
      <p class="deb-p">Dal ${o.da.slice(8)} al ${o.fino.slice(8)}: il numero di
        ogni giorno è già più alto di ${s(o.quota)} kcal.</p>
      <button class="dg-btn" id="crAnnulla">Lascia stare</button>
    </div>`,f("crAnnulla").onclick=async()=>{y();const{impostaCredito:n,recomputeNow:a}=await g(async()=>{const{impostaCredito:l,recomputeNow:u}=await import("./index-_qlJn6mM.js").then(d=>d.L);return{impostaCredito:l,recomputeNow:u}},__vite__mapDeps([0,1]),import.meta.url);n(0),b(),a()};return}const e=_(r),i=S();if(!i||w(i.giorno)){t.innerHTML="";return}t.innerHTML=`<div class="deb sotto">
    <span class="deb-k">Calorie da rimettere</span>
    <div class="deb-top">
      <b>${s(i.quanto)}<small> kcal</small></b>
      <span class="deb-n">il ${i.giorno.slice(8)}</span>
    </div>
    <p class="deb-p">Hai mangiato molto meno di quello che ti serviva. Puoi rimetterle
      nei prossimi giorni: MetaMap alza il numero di ogni giorno, senza chiederti
      un'abbuffata.</p>
    <div class="cr-scelte">${A(i.quanto)}
      <button class="dg-btn no" data-g="0">Lascia stare</button>
    </div>
    <p class="cr-nota">${e===1?"Il ciclo finisce oggi: quello che non rimetti oggi non si recupera piu'.":`Il ciclo finisce fra ${e} giorni: si recupera dentro quelli.`}</p>
  </div>`,t.querySelectorAll("[data-g]").forEach(n=>{n.onclick=async()=>{const a=Number(n.dataset.g);a?N(i.giorno,i.quanto,a):k(i.giorno);const{impostaCredito:l,recomputeNow:u}=await g(async()=>{const{impostaCredito:d,recomputeNow:$}=await import("./index-_qlJn6mM.js").then(h=>h.L);return{impostaCredito:d,recomputeNow:$}},__vite__mapDeps([0,1]),import.meta.url);l(M()),b(),u()}})}export{L as creditoAperto,M as creditoDiOggi,w as giaDeciso,y as lasciaStare,b as paintCredito,k as segnaNo,S as sottoRecente,N as spalma};
