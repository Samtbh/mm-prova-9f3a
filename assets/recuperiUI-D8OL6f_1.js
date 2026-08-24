const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Cba0P0US.js","./index-DfQ7o_Qt.css","./pianoUI-CpDU8-7Q.js","./notifiche-Cy_4pX2O.js","./creditoUI-Ch88fMyN.js"])))=>i.map(i=>d[i]);
import{o as O,_ as l,k as D,n as I,q as E,t as P,u as y}from"./index-Cba0P0US.js";import{scorriPerEliminare as S,suggerisciIlGesto as T}from"./swipe-BFJIPpwd.js";const m=t=>document.getElementById(t),$=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),R=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];function g(t){const[,i,d]=t.split("-").map(Number);return`${d} ${R[i-1]}`}async function V(t){const{allDays:i}=await l(async()=>{const{allDays:a}=await import("./index-Cba0P0US.js").then(o=>o.V);return{allDays:a}},__vite__mapDeps([0,1]),import.meta.url),{addDaysISO:d}=await l(async()=>{const{addDaysISO:a}=await import("./index-Cba0P0US.js").then(o=>o.T);return{addDaysISO:a}},__vite__mapDeps([0,1]),import.meta.url),n=i()[d(y,-1)];if(!n?.splitDone)return[];const{analisi:r}=await l(async()=>{const{analisi:a}=await import("./index-Cba0P0US.js").then(o=>o.R);return{analisi:a}},__vite__mapDeps([0,1]),import.meta.url);return((await r("guardia",{label:t,giornoPrima:n.splitDone,data:y}))?.avvisi??[]).map(a=>a.testo)}const v=()=>new Date().toISOString().slice(0,10);async function f(t,i,d){const n=d.querySelector(".rec-nota");if(n&&(n.textContent="",n.classList.remove("attenzione")),i===v()&&d.dataset.forzato!=="1"){n&&(n.textContent="Controllo…");const a=await V(t.label);if(a.length){d.dataset.forzato="1",n&&(n.innerHTML=`${a.join(" ")} <button class="mini">Oggi lo stesso</button>`,n.classList.add("attenzione"),n.querySelector("button").onclick=()=>{f(t,i,d)});return}}P(t.id,i),l(()=>import("./pianoUI-CpDU8-7Q.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(a=>a.scordaIlPiano()),p();const{paintOggiAlert:r,aggiornaLampeggio:e}=await l(async()=>{const{paintOggiAlert:a,aggiornaLampeggio:o}=await import("./index-Cba0P0US.js").then(c=>c.Y);return{paintOggiAlert:a,aggiornaLampeggio:o}},__vite__mapDeps([0,1]),import.meta.url);r(),e(),l(()=>import("./notifiche-Cy_4pX2O.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(a=>a.paintNotifiche(null))}function q(t){const i=v(),d=t.dueBy<i,n=t.doOn?t.doOn===i?"oggi":g(t.doOn):null;return`<div class="g-row rec-row${d?" scaduto":""}${n?" scelto":""}" data-rec="${t.id}">
    <div class="t">
      <b>${t.label}</b>
      <span>${n?`lo recuperi <b>${n}</b>`:`saltato il ${g(t.skippedOn)}`}</span>
      <span class="rec-sc">${n?`scade il ${g(t.dueBy)}`:`entro il ${g(t.dueBy)}`}</span>
      <div class="rec-nota"></div>
    </div>
    <div class="rec-az">
      ${n?`<button class="rec-cambia" data-cambia="${t.id}">cambia giorno</button>`:`<button class="rec-oggi" data-oggi="${t.id}">Lo recupero oggi</button>
           <button class="rec-quando" data-quando="${t.id}">Scegli giorno</button>
           <button class="rec-riparti" data-riparti="${t.id}">Riparto da oggi</button>`}
      <input class="rec-data" type="date" data-data="${t.id}"
             min="${i}" max="${t.dueBy>i?t.dueBy:i}"
             value="${t.doOn??""}" hidden>
    </div>
  </div>`}function p(t){l(()=>import("./creditoUI-Ch88fMyN.js"),__vite__mapDeps([4,0,1]),import.meta.url).then(o=>o.paintCredito()),l(()=>import("./pianoUI-CpDU8-7Q.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(o=>o.paintPiano());const i=I(),d=D(),n=m("debitoBox");if(n)if(i&&i.totale>0){n.innerHTML=`<div class="deb">
        <div class="deb-top">
          <div>
            <div class="deb-k">Differenza del ciclo</div>
            <div class="deb-v">${$(i.totale)}<small>kcal</small></div>
          </div>
          <div class="deb-piano">
            <b>−${$(i.alGiorno)} kcal al giorno</b>
            <span>${i.giorni===1?"solo domani":`per ${i.giorni} giorni`}, poi sei in pari</span>
          </div>
        </div>

        <div class="deb-scelta">
          <div class="deb-lb">Rientro</div>
          <div class="splitchips" id="debGiorni">
            ${[1,2,3,5,7].map(s=>`<button type="button" class="splitchip ${s===i.scelti?"on":""}" data-g="${s}">${s===1?"domani":s+" giorni"}</button>`).join("")}
          </div>
          <div class="deb-riga">
            <label class="mn-l" for="debKcal" style="margin:0">o al giorno</label>
            <input class="mn-i deb-kcal" id="debKcal" type="number" inputmode="numeric"
                   value="${Math.round(i.alGiorno)}" min="1" max="${Math.round(i.totale)}">
          </div>
          <div class="deb-nota" id="debNota">${i.scelti>i.giorni?`Il ciclo finisce fra ${i.giorni} giorni. La differenza non si trascina: rientri in ${i.giorni}.`:""}</div>
        </div>
      </div>`;const o=async s=>{const u=Math.max(1,Math.min(14,Math.round(s))),h=m("debNota");h&&(h.textContent="Salvo…");const b=await l(()=>import("./index-Cba0P0US.js").then(_=>_.R),__vite__mapDeps([0,1]),import.meta.url),w=b.profilo();await b.salvaProfilo({prefs:{...w?.prefs??{},rientroGiorni:u}});const{recomputeNow:A}=await l(async()=>{const{recomputeNow:_}=await import("./index-Cba0P0US.js").then(L=>L.S);return{recomputeNow:_}},__vite__mapDeps([0,1]),import.meta.url);await A()};n.querySelectorAll("#debGiorni .splitchip").forEach(s=>{s.onclick=()=>{o(Number(s.dataset.g))}});const c=m("debKcal");if(c){const s=()=>{const u=Number(c.value);!u||u<1||o(Math.ceil(i.totale/u))};c.onchange=s,c.onkeydown=u=>{u.key==="Enter"&&s()}}}else n.innerHTML="";k(m("pendingBox"),d);const r=m("cicloDaDecidere");r&&(r.innerHTML="");const e=m("recVuoto");if(e){const o=!d.length&&!(i&&i.totale>0);e.innerHTML=o?`<div class="vuoto-ok">
          <b>Sei in pari.</b>
          <p>Nessun allenamento da recuperare. Se salti un giorno, lo trovi
            qui con la sua scadenza.</p>
          <button class="vuoto-go" id="recVaiCiclo">Vedi il ciclo</button>
        </div>`:"";const c=m("recVaiCiclo");c&&(c.onclick=()=>window.MetaMap.vaiA("ciclo"))}const a=d.length+(i&&i.totale>0?1:0);document.querySelectorAll('[data-go="recuperi"]').forEach(o=>{let c=o.querySelector(".badge2");c||(c=document.createElement("span"),c.className="badge2",o.appendChild(c)),c.textContent=a?String(a):"",c.classList.toggle("on",a>0),o.classList.toggle("conta",a>0)}),document.querySelectorAll('[data-go="recuperi"]').forEach(o=>{o.classList.toggle("debito",a>0)})}function k(t,i,d){if(!t)return;if(!i.length){t.innerHTML="";return}t.innerHTML=`<h3>Allenamenti rimandati</h3><div class="grp">${i.map(q).join("")}</div><p class="rec-say">Non serve spuntarli. Registri l'allenamento nella giornata e il
           recupero si chiude.</p>`;const n=(r,e)=>{const a=i.find(c=>c.id===r.dataset[e]),o=r.closest(".rec-row");return a&&o?{r:a,riga:o}:null};t.querySelectorAll("[data-oggi]").forEach(r=>{const e=n(r,"oggi");e&&(r.onclick=()=>{f(e.r,v(),e.riga)})}),t.querySelectorAll("[data-riparti]").forEach(r=>{const e=n(r,"riparti");e&&(r.onclick=async()=>{E(e.r.id),l(()=>import("./pianoUI-CpDU8-7Q.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(s=>s.scordaIlPiano());const{cycle:a}=await l(async()=>{const{cycle:s}=await import("./index-Cba0P0US.js").then(u=>u.T);return{cycle:s}},__vite__mapDeps([0,1]),import.meta.url),{saveAll:o}=await l(async()=>{const{saveAll:s}=await import("./index-Cba0P0US.js").then(u=>u.V);return{saveAll:s}},__vite__mapDeps([0,1]),import.meta.url);a.startDate=v(),o(),p();const{recomputeNow:c}=await l(async()=>{const{recomputeNow:s}=await import("./index-Cba0P0US.js").then(u=>u.S);return{recomputeNow:s}},__vite__mapDeps([0,1]),import.meta.url);c()})}),t.querySelectorAll("[data-quando],[data-cambia]").forEach(r=>{const e=n(r,r.dataset.quando?"quando":"cambia");if(!e)return;const a=e.riga.querySelector(".rec-data");a&&(r.onclick=()=>{a.hidden=!1;const o=a;try{o.showPicker?.()}catch{a.focus()}},a.onchange=()=>{a.value&&f(e.r,a.value,e.riga)})}),t.querySelectorAll(".rec-row").forEach(r=>{S(r,{etichetta:"Rinuncio",onVia:()=>{E(r.dataset.rec),l(()=>import("./pianoUI-CpDU8-7Q.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(e=>e.scordaIlPiano()),p(),l(()=>import("./index-Cba0P0US.js").then(e=>e.Y),__vite__mapDeps([0,1]),import.meta.url).then(e=>{e.aggiornaLampeggio(),e.paintOggiAlert()}),l(()=>import("./notifiche-Cy_4pX2O.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(e=>e.paintNotifiche(null))}})}),T(t)}function C(){O(()=>p()),p()}export{p as paintRecuperi,C as wireRecuperi};
