const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C8-zeLpx.js","./index-BsmpC4xc.css"])))=>i.map(i=>d[i]);
import{t as a,_ as m,u as S,E as f}from"./index-C8-zeLpx.js";const r="mm2_credito",h=400,d=()=>{try{return JSON.parse(localStorage.getItem(r)||"null")}catch{return null}},g=t=>{t?localStorage.setItem(r,JSON.stringify(t)):localStorage.removeItem(r)};function I(){const t=S();for(let o=1;o<=3;o++){const n=f(a,-o),e=t[n];if(!e)continue;const i=-Number(e.difference??0);return i>=400?{giorno:n,quanto:Math.round(i)}:null}return null}function $(){const t=d();return t?a>t.fino?(g(null),0):a<t.da?0:t.quota:0}const y=()=>d();function M(t,o,n){const e=Math.min(h,Math.round(o/n)),i={da:a,totale:o,giorni:n,quota:e,fino:f(a,n-1)};return g(i),i}function N(){g(null)}function q(t){return d()?!0:localStorage.getItem(`${r}_no_${t}`)==="1"}function L(t){localStorage.setItem(`${r}_no_${t}`,"1")}const p=t=>document.getElementById(t),s=t=>Math.round(t).toLocaleString("it-IT");function b(){const t=p("creditoBox");if(!t)return;const o=y();if(o&&a<=o.fino){t.innerHTML=`<div class="deb">
      <div class="deb-top">
        <b>Stai recuperando ${s(o.totale)} kcal</b>
        <span class="deb-n">+${s(o.quota)} al giorno</span>
      </div>
      <p class="deb-p">Dal ${o.da.slice(8)} al ${o.fino.slice(8)}: il numero di
        ogni giorno è già più alto di ${s(o.quota)} kcal.</p>
      <button class="dg-btn" id="crAnnulla">Lascia stare</button>
    </div>`,p("crAnnulla").onclick=async()=>{N();const{impostaCredito:e,recomputeNow:i}=await m(async()=>{const{impostaCredito:c,recomputeNow:l}=await import("./index-C8-zeLpx.js").then(u=>u.K);return{impostaCredito:c,recomputeNow:l}},__vite__mapDeps([0,1]),import.meta.url);e(0),b(),i()};return}const n=I();if(!n||q(n.giorno)){t.innerHTML="";return}t.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <b>${s(n.quanto)} kcal sotto il numero</b>
      <span class="deb-n">il ${n.giorno.slice(8)}</span>
    </div>
    <p class="deb-p">Hai mangiato molto meno di quello che ti serviva. Puoi rimetterle
      nei prossimi giorni: MetaMap alza il numero di ogni giorno, senza chiederti
      un'abbuffata.</p>
    <div class="cr-scelte">
      <button class="dg-btn" data-g="3">in 3 giorni</button>
      <button class="dg-btn" data-g="5">in 5 giorni</button>
      <button class="dg-btn" data-g="7">in 7 giorni</button>
      <button class="dg-btn no" data-g="0">Lascia stare</button>
    </div>
  </div>`,t.querySelectorAll("[data-g]").forEach(e=>{e.onclick=async()=>{const i=Number(e.dataset.g);i?M(n.giorno,n.quanto,i):L(n.giorno);const{impostaCredito:c,recomputeNow:l}=await m(async()=>{const{impostaCredito:u,recomputeNow:v}=await import("./index-C8-zeLpx.js").then(_=>_.K);return{impostaCredito:u,recomputeNow:v}},__vite__mapDeps([0,1]),import.meta.url);c($()),b(),l()}})}export{y as creditoAperto,$ as creditoDiOggi,q as giaDeciso,N as lasciaStare,b as paintCredito,L as segnaNo,I as sottoRecente,M as spalma};
