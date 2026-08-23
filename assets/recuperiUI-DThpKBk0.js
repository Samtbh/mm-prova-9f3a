const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CtdinDYa.js","./index-DIVze-Sw.css","./pianoUI-BXRhRWUS.js","./notifiche-BuaRSAh9.js","./creditoUI-C6Zd6B8U.js"])))=>i.map(i=>d[i]);
import{o as O,_ as l,k as D,n as I,q as E,t as P,u as y}from"./index-CtdinDYa.js";import{scorriPerEliminare as S,suggerisciIlGesto as T}from"./swipe-BFJIPpwd.js";const m=t=>document.getElementById(t),$=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),R=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];function v(t){const[,i,d]=t.split("-").map(Number);return`${d} ${R[i-1]}`}async function V(t){const{allDays:i}=await l(async()=>{const{allDays:o}=await import("./index-CtdinDYa.js").then(a=>a.V);return{allDays:o}},__vite__mapDeps([0,1]),import.meta.url),{addDaysISO:d}=await l(async()=>{const{addDaysISO:o}=await import("./index-CtdinDYa.js").then(a=>a.T);return{addDaysISO:o}},__vite__mapDeps([0,1]),import.meta.url),n=i()[d(y,-1)];if(!n?.splitDone)return[];const{analisi:r}=await l(async()=>{const{analisi:o}=await import("./index-CtdinDYa.js").then(a=>a.R);return{analisi:o}},__vite__mapDeps([0,1]),import.meta.url);return((await r("guardia",{label:t,giornoPrima:n.splitDone,data:y}))?.avvisi??[]).map(o=>o.testo)}const g=()=>new Date().toISOString().slice(0,10);async function f(t,i,d){const n=d.querySelector(".rec-nota");if(n&&(n.textContent="",n.classList.remove("attenzione")),i===g()&&d.dataset.forzato!=="1"){n&&(n.textContent="Controllo…");const o=await V(t.label);if(o.length){d.dataset.forzato="1",n&&(n.innerHTML=`${o.join(" ")} <button class="mini">Oggi lo stesso</button>`,n.classList.add("attenzione"),n.querySelector("button").onclick=()=>{f(t,i,d)});return}}P(t.id,i),l(()=>import("./pianoUI-BXRhRWUS.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(o=>o.scordaIlPiano()),p();const{paintOggiAlert:r,aggiornaLampeggio:e}=await l(async()=>{const{paintOggiAlert:o,aggiornaLampeggio:a}=await import("./index-CtdinDYa.js").then(c=>c.Y);return{paintOggiAlert:o,aggiornaLampeggio:a}},__vite__mapDeps([0,1]),import.meta.url);r(),e(),l(()=>import("./notifiche-BuaRSAh9.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(o=>o.paintNotifiche(null))}function q(t){const i=g(),d=t.dueBy<i,n=t.doOn?t.doOn===i?"oggi":v(t.doOn):null;return`<div class="g-row rec-row${d?" scaduto":""}${n?" scelto":""}" data-rec="${t.id}">
    <div class="t">
      <b>${t.label}</b>
      <span>${n?`lo recuperi <b>${n}</b>`:`saltato il ${v(t.skippedOn)}`}</span>
      <span class="rec-sc">${n?`scade il ${v(t.dueBy)}`:`entro il ${v(t.dueBy)}`}</span>
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
  </div>`}function p(t){l(()=>import("./creditoUI-C6Zd6B8U.js"),__vite__mapDeps([4,0,1]),import.meta.url).then(a=>a.paintCredito()),l(()=>import("./pianoUI-BXRhRWUS.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(a=>a.paintPiano());const i=I(),d=D(),n=m("debitoBox");if(n)if(i&&i.totale>0){n.innerHTML=`<div class="deb">
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
          <div class="deb-nota" id="debNota">${i.scelti>i.giorni?`Ne avevi chiesti ${i.scelti}, ma il ciclo finisce fra ${i.giorni}: un debito non si trascina nel ciclo dopo, quindi rientri in ${i.giorni}.`:""}</div>
        </div>
      </div>`;const a=async s=>{const u=Math.max(1,Math.min(14,Math.round(s))),h=m("debNota");h&&(h.textContent="Salvo…");const b=await l(()=>import("./index-CtdinDYa.js").then(_=>_.R),__vite__mapDeps([0,1]),import.meta.url),w=b.profilo();await b.salvaProfilo({prefs:{...w?.prefs??{},rientroGiorni:u}});const{recomputeNow:A}=await l(async()=>{const{recomputeNow:_}=await import("./index-CtdinDYa.js").then(L=>L.S);return{recomputeNow:_}},__vite__mapDeps([0,1]),import.meta.url);await A()};n.querySelectorAll("#debGiorni .splitchip").forEach(s=>{s.onclick=()=>{a(Number(s.dataset.g))}});const c=m("debKcal");if(c){const s=()=>{const u=Number(c.value);!u||u<1||a(Math.ceil(i.totale/u))};c.onchange=s,c.onkeydown=u=>{u.key==="Enter"&&s()}}}else n.innerHTML="";k(m("pendingBox"),d);const r=m("cicloDaDecidere");r&&(r.innerHTML="");const e=m("recVuoto");if(e){const a=!d.length&&!(i&&i.totale>0);e.innerHTML=a?`<div class="vuoto-ok">
          <b>Sei in pari.</b>
          <p>Nessun allenamento da recuperare. Se salti un giorno, lo trovi
            qui con la sua scadenza.</p>
          <button class="vuoto-go" id="recVaiCiclo">Vedi il ciclo</button>
        </div>`:"";const c=m("recVaiCiclo");c&&(c.onclick=()=>window.MetaMap.vaiA("ciclo"))}const o=d.length+(i&&i.totale>0?1:0);document.querySelectorAll('[data-go="recuperi"]').forEach(a=>{let c=a.querySelector(".badge2");c||(c=document.createElement("span"),c.className="badge2",a.appendChild(c)),c.textContent=o?String(o):"",c.classList.toggle("on",o>0),a.classList.toggle("conta",o>0)}),document.querySelectorAll('[data-go="recuperi"]').forEach(a=>{a.classList.toggle("debito",o>0)})}function k(t,i,d){if(!t)return;if(!i.length){t.innerHTML="";return}t.innerHTML=`<h3>Allenamenti rimandati</h3><div class="grp">${i.map(q).join("")}</div><p class="rec-say">Non serve spuntarli. Registri l'allenamento nella giornata e il
           recupero si chiude.</p>`;const n=(r,e)=>{const o=i.find(c=>c.id===r.dataset[e]),a=r.closest(".rec-row");return o&&a?{r:o,riga:a}:null};t.querySelectorAll("[data-oggi]").forEach(r=>{const e=n(r,"oggi");e&&(r.onclick=()=>{f(e.r,g(),e.riga)})}),t.querySelectorAll("[data-riparti]").forEach(r=>{const e=n(r,"riparti");e&&(r.onclick=async()=>{E(e.r.id),l(()=>import("./pianoUI-BXRhRWUS.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(s=>s.scordaIlPiano());const{cycle:o}=await l(async()=>{const{cycle:s}=await import("./index-CtdinDYa.js").then(u=>u.T);return{cycle:s}},__vite__mapDeps([0,1]),import.meta.url),{saveAll:a}=await l(async()=>{const{saveAll:s}=await import("./index-CtdinDYa.js").then(u=>u.V);return{saveAll:s}},__vite__mapDeps([0,1]),import.meta.url);o.startDate=g(),a(),p();const{recomputeNow:c}=await l(async()=>{const{recomputeNow:s}=await import("./index-CtdinDYa.js").then(u=>u.S);return{recomputeNow:s}},__vite__mapDeps([0,1]),import.meta.url);c()})}),t.querySelectorAll("[data-quando],[data-cambia]").forEach(r=>{const e=n(r,r.dataset.quando?"quando":"cambia");if(!e)return;const o=e.riga.querySelector(".rec-data");o&&(r.onclick=()=>{o.hidden=!1;const a=o;try{a.showPicker?.()}catch{o.focus()}},o.onchange=()=>{o.value&&f(e.r,o.value,e.riga)})}),t.querySelectorAll(".rec-row").forEach(r=>{S(r,{etichetta:"Rinuncio",onVia:()=>{E(r.dataset.rec),l(()=>import("./pianoUI-BXRhRWUS.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(e=>e.scordaIlPiano()),p(),l(()=>import("./index-CtdinDYa.js").then(e=>e.Y),__vite__mapDeps([0,1]),import.meta.url).then(e=>{e.aggiornaLampeggio(),e.paintOggiAlert()}),l(()=>import("./notifiche-BuaRSAh9.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(e=>e.paintNotifiche(null))}})}),T(t)}function C(){O(()=>p()),p()}export{p as paintRecuperi,C as wireRecuperi};
