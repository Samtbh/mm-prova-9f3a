const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-FEXnQLiP.js","./index-CUT6ehWF.css","./pianoUI-DTtNiVss.js","./notifiche-B-Rc-yuy.js","./creditoUI-D5mYDtoc.js"])))=>i.map(i=>d[i]);
import{o as D,_ as s,j as I,k as P,n as y,q as R,t as $}from"./index-FEXnQLiP.js";import{scorriPerEliminare as S,suggerisciIlGesto as T}from"./swipe-BFJIPpwd.js";const m=t=>document.getElementById(t),w=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),V=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];function g(t){const[,i,d]=t.split("-").map(Number);return`${d} ${V[i-1]}`}async function q(t){const{allDays:i}=await s(async()=>{const{allDays:o}=await import("./index-FEXnQLiP.js").then(r=>r.U);return{allDays:o}},__vite__mapDeps([0,1]),import.meta.url),{addDaysISO:d}=await s(async()=>{const{addDaysISO:o}=await import("./index-FEXnQLiP.js").then(r=>r.S);return{addDaysISO:o}},__vite__mapDeps([0,1]),import.meta.url),e=i()[d($,-1)];if(!e?.splitDone)return[];const{analisi:n}=await s(async()=>{const{analisi:o}=await import("./index-FEXnQLiP.js").then(r=>r.Q);return{analisi:o}},__vite__mapDeps([0,1]),import.meta.url);return((await n("guardia",{label:t,giornoPrima:e.splitDone,data:$}))?.avvisi??[]).map(o=>o.testo)}const _=()=>new Date().toISOString().slice(0,10);async function h(t,i,d){const e=d.querySelector(".rec-nota");if(e&&(e.textContent="",e.classList.remove("attenzione")),i===_()&&d.dataset.forzato!=="1"){e&&(e.textContent="Controllo…");const o=await q(t.label);if(o.length){d.dataset.forzato="1",e&&(e.innerHTML=`${o.join(" ")} <button class="mini">Oggi lo stesso</button>`,e.classList.add("attenzione"),e.querySelector("button").onclick=()=>{h(t,i,d)});return}}R(t.id,i),s(()=>import("./pianoUI-DTtNiVss.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(o=>o.scordaIlPiano()),v();const{paintOggiAlert:n,aggiornaLampeggio:a}=await s(async()=>{const{paintOggiAlert:o,aggiornaLampeggio:r}=await import("./index-FEXnQLiP.js").then(l=>l.X);return{paintOggiAlert:o,aggiornaLampeggio:r}},__vite__mapDeps([0,1]),import.meta.url);n(),a(),s(()=>import("./notifiche-B-Rc-yuy.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(o=>o.paintNotifiche(null))}function k(t){const i=_(),d=t.dueBy<i,e=t.doOn?t.doOn===i?"oggi":g(t.doOn):null;return`<div class="g-row rec-row${d?" scaduto":""}${e?" scelto":""}" data-rec="${t.id}">
    <div class="t">
      <b>${t.label}</b>
      <span>${e?`lo recuperi <b>${e}</b> · scade il ${g(t.dueBy)}`:`saltato il ${g(t.skippedOn)} · entro il ${g(t.dueBy)}`}</span>
      <div class="rec-nota"></div>
    </div>
    <div class="rec-az">
      ${e?`<button class="rec-cambia" data-cambia="${t.id}">cambia giorno</button>`:`<button class="rec-oggi" data-oggi="${t.id}">Lo recupero oggi</button>
           <button class="rec-quando" data-quando="${t.id}">Scegli giorno</button>
           <button class="rec-riparti" data-riparti="${t.id}">Riparto da oggi</button>`}
      <input class="rec-data" type="date" data-data="${t.id}"
             min="${i}" max="${t.dueBy>i?t.dueBy:i}"
             value="${t.doOn??""}" hidden>
    </div>
  </div>`}function v(t){s(()=>import("./creditoUI-D5mYDtoc.js"),__vite__mapDeps([4,0,1]),import.meta.url).then(l=>l.paintCredito()),s(()=>import("./pianoUI-DTtNiVss.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(l=>l.paintPiano());const i=P(),d=I(),e=m("debitoBox");if(e)if(i&&i.totale>0){e.innerHTML=`<div class="deb">
        <div class="deb-top">
          <div>
            <div class="deb-k">Calorie da restituire</div>
            <div class="deb-v">${w(i.totale)}<small>kcal</small></div>
          </div>
          <div class="deb-piano">
            <b>−${w(i.alGiorno)} kcal al giorno</b>
            <span>${i.giorni===1?"solo domani":`per ${i.giorni} giorni`}, poi sei in pari</span>
          </div>
        </div>

        <div class="deb-scelta">
          <div class="deb-lb">Rientro</div>
          <div class="splitchips" id="debGiorni">
            ${[1,2,3,5,7].map(c=>`<button type="button" class="splitchip ${c===i.scelti?"on":""}" data-g="${c}">${c===1?"domani":c+" giorni"}</button>`).join("")}
          </div>
          <div class="deb-riga">
            <label class="mn-l" for="debKcal" style="margin:0">o al giorno</label>
            <input class="mn-i deb-kcal" id="debKcal" type="number" inputmode="numeric"
                   value="${Math.round(i.alGiorno)}" min="1" max="${Math.round(i.totale)}">
          </div>
          <div class="deb-nota" id="debNota">${i.scelti>i.giorni?`Ne avevi chiesti ${i.scelti}, ma il ciclo finisce fra ${i.giorni}: un debito non si trascina nel ciclo dopo, quindi rientri in ${i.giorni}.`:""}</div>
        </div>
      </div>`;const l=async c=>{const p=Math.max(1,Math.min(14,Math.round(c))),b=m("debNota");b&&(b.textContent="Salvo…");const E=await s(()=>import("./index-FEXnQLiP.js").then(f=>f.Q),__vite__mapDeps([0,1]),import.meta.url),A=E.profilo();await E.salvaProfilo({prefs:{...A?.prefs??{},rientroGiorni:p}});const{recomputeNow:L}=await s(async()=>{const{recomputeNow:f}=await import("./index-FEXnQLiP.js").then(O=>O.R);return{recomputeNow:f}},__vite__mapDeps([0,1]),import.meta.url);await L()};e.querySelectorAll("#debGiorni .splitchip").forEach(c=>{c.onclick=()=>{l(Number(c.dataset.g))}});const u=m("debKcal");if(u){const c=()=>{const p=Number(u.value);!p||p<1||l(Math.ceil(i.totale/p))};u.onchange=c,u.onkeydown=p=>{p.key==="Enter"&&c()}}}else e.innerHTML="";M(m("pendingBox"),d);const n=m("cicloDaDecidere");n&&(n.innerHTML="");const a=m("recVuoto");if(a){const l=!d.length&&!(i&&i.totale>0);a.innerHTML=l?`<div class="vuoto-ok">
          <b>Sei in pari.</b>
          <p>Nessun allenamento da recuperare. Se salti un giorno, lo trovi
            qui con la sua scadenza.</p>
          <button class="vuoto-go" id="recVaiCiclo">Vedi il ciclo</button>
        </div>`:"";const u=m("recVaiCiclo");u&&(u.onclick=()=>window.MetaMap.vaiA("ciclo"))}const o=d.length+(i&&i.totale>0?1:0),r=m("recBadge");r&&(r.textContent=o?String(o):"",r.classList.toggle("on",o>0)),document.querySelectorAll('[data-go="recuperi"]').forEach(l=>{l.classList.toggle("debito",o>0)})}function M(t,i,d){if(!t)return;if(!i.length){t.innerHTML="";return}t.innerHTML=`<h3>Allenamenti rimandati</h3><div class="grp">${i.map(k).join("")}</div><p class="rec-say">Non serve spuntarli. Registri l'allenamento nella giornata e il
           recupero si chiude.</p>`;const e=(n,a)=>{const o=i.find(l=>l.id===n.dataset[a]),r=n.closest(".rec-row");return o&&r?{r:o,riga:r}:null};t.querySelectorAll("[data-oggi]").forEach(n=>{const a=e(n,"oggi");a&&(n.onclick=()=>{h(a.r,_(),a.riga)})}),t.querySelectorAll("[data-riparti]").forEach(n=>{const a=e(n,"riparti");a&&(n.onclick=async()=>{y(a.r.id),s(()=>import("./pianoUI-DTtNiVss.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(u=>u.scordaIlPiano());const{cycle:o}=await s(async()=>{const{cycle:u}=await import("./index-FEXnQLiP.js").then(c=>c.S);return{cycle:u}},__vite__mapDeps([0,1]),import.meta.url),{saveAll:r}=await s(async()=>{const{saveAll:u}=await import("./index-FEXnQLiP.js").then(c=>c.U);return{saveAll:u}},__vite__mapDeps([0,1]),import.meta.url);o.startDate=_(),r(),v();const{recomputeNow:l}=await s(async()=>{const{recomputeNow:u}=await import("./index-FEXnQLiP.js").then(c=>c.R);return{recomputeNow:u}},__vite__mapDeps([0,1]),import.meta.url);l()})}),t.querySelectorAll("[data-quando],[data-cambia]").forEach(n=>{const a=e(n,n.dataset.quando?"quando":"cambia");if(!a)return;const o=a.riga.querySelector(".rec-data");o&&(n.onclick=()=>{o.hidden=!1;const r=o;try{r.showPicker?.()}catch{o.focus()}},o.onchange=()=>{o.value&&h(a.r,o.value,a.riga)})}),t.querySelectorAll(".rec-row").forEach(n=>{S(n,{etichetta:"Rinuncio",onVia:()=>{y(n.dataset.rec),s(()=>import("./pianoUI-DTtNiVss.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(a=>a.scordaIlPiano()),v(),s(()=>import("./index-FEXnQLiP.js").then(a=>a.X),__vite__mapDeps([0,1]),import.meta.url).then(a=>{a.aggiornaLampeggio(),a.paintOggiAlert()}),s(()=>import("./notifiche-B-Rc-yuy.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(a=>a.paintNotifiche(null))}})}),T(t)}function x(){D(()=>v()),v()}export{v as paintRecuperi,x as wireRecuperi};
