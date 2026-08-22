const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C3J7o-9u.js","./index-DO6me2vw.css"])))=>i.map(i=>d[i]);
import{t as c,E as b,F as O,u as R,G as p,_ as C,T as M}from"./index-C3J7o-9u.js";const s="mm2_credito",y=400,d=()=>{try{return JSON.parse(localStorage.getItem(s)||"null")}catch{return null}},u=o=>{o?localStorage.setItem(s,JSON.stringify(o)):localStorage.removeItem(s)};function T(){const o=R();for(let t=1;t<=3;t++){const e=p(c,-t),n=o[e];if(n){const a=-Number(n.difference??0);return a>=400?{giorno:e,quanto:Math.round(a)}:null}const i=D(e);if(i!==null)return i>=400?{giorno:e,quanto:i}:null}return null}function D(o){try{const t=localStorage.getItem("mm2_current_profile")||"p1",e=localStorage.getItem(`mm2_days_${t}`);if(!e)return null;const n=JSON.parse(e)[o];if(!n)return null;const i=Number(n.foodKcal??0),a=Number(n.target??0);return!i||!a?null:Math.max(0,Math.round(a-i))}catch{return null}}function E(){const o=d();return o?c>o.fino?(u(null),0):c<o.da?0:b():0}const k=()=>d();function q(o,t,e){const n=Math.min(y,Math.round(t/e)),i={da:c,totale:t,giorni:e,quota:n,fino:p(c,e-1)};return u(i),i}function v(){u(null)}function G(o){return d()?!0:localStorage.getItem(`${s}_no_${o}`)==="1"}function w(o){localStorage.setItem(`${s}_no_${o}`,"1")}const l=o=>document.getElementById(o),r=o=>String(Math.round(o)).replace(/\B(?=(\d{3})+(?!\d))/g,".");function A(){const o=l("creditoBox");if(!o)return;const t=O();if(!t.daRimettere){o.innerHTML="",v();return}const e=b(t),n=k(),i=!!n&&c<=n.fino,a=Math.min(t.daRimettere,t.massimoRecuperabile),_=t.daRimettere-a;o.innerHTML=`<div class="deb sotto">
    <div class="deb-top">
      <div>
        <div class="deb-k">${i?"Stai rimettendo":"Calorie da rimettere"}</div>
        <div class="deb-v">${r(t.daRimettere)}<small>kcal</small></div>
      </div>
      <div class="deb-piano">
        <b>+${r(e)} kcal al giorno</b>
        <span>su ${t.restanoNelCiclo} giorn${t.restanoNelCiclo===1?"o":"i"} di ciclo</span>
      </div>
    </div>

    <div class="deb-scelta">
      ${t.peggiora&&t.giorniContati>1?`<div class="deb-nota avviso">Ieri non hai rimesso la tua parte, e sei rimasto sotto
             anche col numero di ieri: il conto e' cresciuto. Non serve rifarlo a mano, lo
             tengo io — ma va guardato.</div>`:""}
      ${t.ciSta?`<div class="deb-nota">Con ${t.restanoNelCiclo} giorn${t.restanoNelCiclo===1?"o":"i"}
             alla fine del ciclo ci sta: ${r(e)} kcal in piu' al giorno, senza abbuffate.</div>`:`<div class="deb-nota avviso"><b>Dentro questo ciclo non ci sta.</b>
             Al massimo ${r(M)} kcal al giorno: da qui a fine ciclo ne rimetti
             ${r(a)} su ${r(t.daRimettere)}. Le altre ${r(_)} non si recuperano
             a forza — o le lasci andare, o riparti col ciclo da oggi.</div>`}
      <div class="deb-riga">
        ${i?'<button class="dg-btn no" id="crNo">Smetti di recuperare</button>':`<button class="dg-btn" id="crFai">Rimettile nei giorni che restano</button>
             <button class="dg-btn no" id="crNo">Lascia stare</button>`}
      </div>
    </div>
  </div>`;const m=async f=>{f?q("",t.daRimettere,t.restanoNelCiclo):v();const{impostaCredito:N,recomputeNow:$}=await C(async()=>{const{impostaCredito:S,recomputeNow:h}=await import("./index-C3J7o-9u.js").then(I=>I.N);return{impostaCredito:S,recomputeNow:h}},__vite__mapDeps([0,1]),import.meta.url);N(f?e:0),A(),$()},g=l("crFai");g&&(g.onclick=()=>{m(!0)}),l("crNo").onclick=()=>{m(!1)}}export{k as creditoAperto,E as creditoDiOggi,G as giaDeciso,v as lasciaStare,A as paintCredito,w as segnaNo,T as sottoRecente,q as spalma};
