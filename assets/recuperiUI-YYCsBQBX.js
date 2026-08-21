const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-iIrgOqzX.js","./index-CMkTBqS6.css","./notifiche-SHCKoYdq.js","./creditoUI-BQNVNyyU.js"])))=>i.map(i=>d[i]);
import{o as D,_ as u,j as S,k as I,n as E,q as T,t as $}from"./index-iIrgOqzX.js";import{scorriPerEliminare as q,suggerisciIlGesto as M}from"./swipe-BFJIPpwd.js";const p=t=>document.getElementById(t),w=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),P=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];function v(t){const[,i,s]=t.split("-").map(Number);return`${s} ${P[i-1]}`}async function R(t){const{allDays:i}=await u(async()=>{const{allDays:a}=await import("./index-iIrgOqzX.js").then(r=>r.O);return{allDays:a}},__vite__mapDeps([0,1]),import.meta.url),{addDaysISO:s}=await u(async()=>{const{addDaysISO:a}=await import("./index-iIrgOqzX.js").then(r=>r.M);return{addDaysISO:a}},__vite__mapDeps([0,1]),import.meta.url),o=i()[s($,-1)];if(!o?.splitDone)return[];const{analisi:n}=await u(async()=>{const{analisi:a}=await import("./index-iIrgOqzX.js").then(r=>r.K);return{analisi:a}},__vite__mapDeps([0,1]),import.meta.url);return((await n("guardia",{label:t,giornoPrima:o.splitDone,data:$}))?.avvisi??[]).map(a=>a.testo)}const _=()=>new Date().toISOString().slice(0,10);async function b(t,i,s){const o=s.querySelector(".rec-nota");if(o&&(o.textContent="",o.classList.remove("attenzione")),i===_()&&s.dataset.forzato!=="1"){o&&(o.textContent="Controllo…");const a=await R(t.label);if(a.length){s.dataset.forzato="1",o&&(o.innerHTML=`${a.join(" ")} <button class="mini">Oggi lo stesso</button>`,o.classList.add("attenzione"),o.querySelector("button").onclick=()=>{b(t,i,s)});return}}T(t.id,i),g();const{paintOggiAlert:n,aggiornaLampeggio:e}=await u(async()=>{const{paintOggiAlert:a,aggiornaLampeggio:r}=await import("./index-iIrgOqzX.js").then(l=>l.Q);return{paintOggiAlert:a,aggiornaLampeggio:r}},__vite__mapDeps([0,1]),import.meta.url);n(),e(),u(()=>import("./notifiche-SHCKoYdq.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(a=>a.paintNotifiche(null))}function k(t){const i=_(),s=t.dueBy<i,o=t.doOn?t.doOn===i?"oggi":v(t.doOn):null;return`<div class="g-row rec-row${s?" scaduto":""}${o?" scelto":""}" data-rec="${t.id}">
    <div class="t">
      <b>${t.label}</b>
      <span>${o?`lo recuperi <b>${o}</b> · scade il ${v(t.dueBy)}`:`saltato il ${v(t.skippedOn)} · entro il ${v(t.dueBy)}`}</span>
      <div class="rec-nota"></div>
    </div>
    <div class="rec-az">
      ${o?`<button class="rec-cambia" data-cambia="${t.id}">cambia giorno</button>`:`<button class="rec-oggi" data-oggi="${t.id}">Lo recupero oggi</button>
           <button class="rec-quando" data-quando="${t.id}">Scegli giorno</button>
           <button class="rec-riparti" data-riparti="${t.id}">Riparto da oggi</button>`}
      <input class="rec-data" type="date" data-data="${t.id}"
             min="${i}" max="${t.dueBy>i?t.dueBy:i}"
             value="${t.doOn??""}" hidden>
    </div>
  </div>`}function g(t){u(()=>import("./creditoUI-BQNVNyyU.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(l=>l.paintCredito());const i=I(),s=S(),o=p("debitoBox");if(o)if(i&&i.totale>0){o.innerHTML=`<div class="deb">
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
      </div>`;const l=async c=>{const m=Math.max(1,Math.min(14,Math.round(c))),h=p("debNota");h&&(h.textContent="Salvo…");const y=await u(()=>import("./index-iIrgOqzX.js").then(f=>f.K),__vite__mapDeps([0,1]),import.meta.url),A=y.profilo();await y.salvaProfilo({prefs:{...A?.prefs??{},rientroGiorni:m}});const{recomputeNow:L}=await u(async()=>{const{recomputeNow:f}=await import("./index-iIrgOqzX.js").then(O=>O.L);return{recomputeNow:f}},__vite__mapDeps([0,1]),import.meta.url);await L()};o.querySelectorAll("#debGiorni .splitchip").forEach(c=>{c.onclick=()=>{l(Number(c.dataset.g))}});const d=p("debKcal");if(d){const c=()=>{const m=Number(d.value);!m||m<1||l(Math.ceil(i.totale/m))};d.onchange=c,d.onkeydown=m=>{m.key==="Enter"&&c()}}}else o.innerHTML="";V(p("pendingBox"),s);const n=p("cicloDaDecidere");n&&(n.innerHTML="");const e=p("recVuoto");if(e){const l=!s.length&&!(i&&i.totale>0);e.innerHTML=l?`<div class="vuoto-ok">
          <b>Sei in pari.</b>
          <p>Nessun allenamento da recuperare. Se salti un giorno, lo trovi
            qui con la sua scadenza.</p>
          <button class="vuoto-go" id="recVaiCiclo">Vedi il ciclo</button>
        </div>`:"";const d=p("recVaiCiclo");d&&(d.onclick=()=>window.MetaMap.vaiA("ciclo"))}const a=s.length+(i&&i.totale>0?1:0),r=p("recBadge");r&&(r.textContent=a?String(a):"",r.classList.toggle("on",a>0)),document.querySelectorAll('[data-go="recuperi"]').forEach(l=>{l.classList.toggle("debito",a>0)})}function V(t,i,s){if(!t)return;if(!i.length){t.innerHTML="";return}t.innerHTML=`<h3>Allenamenti rimandati</h3><div class="grp">${i.map(k).join("")}</div><p class="rec-say">Non serve spuntarli. Registri l'allenamento nella giornata e il
           recupero si chiude.</p>`;const o=(n,e)=>{const a=i.find(l=>l.id===n.dataset[e]),r=n.closest(".rec-row");return a&&r?{r:a,riga:r}:null};t.querySelectorAll("[data-oggi]").forEach(n=>{const e=o(n,"oggi");e&&(n.onclick=()=>{b(e.r,_(),e.riga)})}),t.querySelectorAll("[data-riparti]").forEach(n=>{const e=o(n,"riparti");e&&(n.onclick=async()=>{E(e.r.id);const{cycle:a}=await u(async()=>{const{cycle:d}=await import("./index-iIrgOqzX.js").then(c=>c.M);return{cycle:d}},__vite__mapDeps([0,1]),import.meta.url),{saveAll:r}=await u(async()=>{const{saveAll:d}=await import("./index-iIrgOqzX.js").then(c=>c.O);return{saveAll:d}},__vite__mapDeps([0,1]),import.meta.url);a.startDate=_(),r(),g();const{recomputeNow:l}=await u(async()=>{const{recomputeNow:d}=await import("./index-iIrgOqzX.js").then(c=>c.L);return{recomputeNow:d}},__vite__mapDeps([0,1]),import.meta.url);l()})}),t.querySelectorAll("[data-quando],[data-cambia]").forEach(n=>{const e=o(n,n.dataset.quando?"quando":"cambia");if(!e)return;const a=e.riga.querySelector(".rec-data");a&&(n.onclick=()=>{a.hidden=!1;const r=a;try{r.showPicker?.()}catch{a.focus()}},a.onchange=()=>{a.value&&b(e.r,a.value,e.riga)})}),t.querySelectorAll(".rec-row").forEach(n=>{q(n,{etichetta:"Rinuncio",onVia:()=>{E(n.dataset.rec),g(),u(()=>import("./index-iIrgOqzX.js").then(e=>e.Q),__vite__mapDeps([0,1]),import.meta.url).then(e=>{e.aggiornaLampeggio(),e.paintOggiAlert()}),u(()=>import("./notifiche-SHCKoYdq.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(e=>e.paintNotifiche(null))}})}),M(t)}function x(){D(()=>g()),g()}export{g as paintRecuperi,x as wireRecuperi};
