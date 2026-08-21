const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-C8-zeLpx.js","./index-BsmpC4xc.css","./notifiche-jTAlnFzY.js","./creditoUI-DUc4dmdG.js"])))=>i.map(i=>d[i]);
import{o as D,_ as u,j as S,k as P,n as y,q as I,t as E}from"./index-C8-zeLpx.js";import{scorriPerEliminare as q,suggerisciIlGesto as R}from"./swipe-BFJIPpwd.js";const p=t=>document.getElementById(t),$=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),T=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];function g(t){const[,i,c]=t.split("-").map(Number);return`${c} ${T[i-1]}`}async function k(t){const{allDays:i}=await u(async()=>{const{allDays:a}=await import("./index-C8-zeLpx.js").then(n=>n.N);return{allDays:a}},__vite__mapDeps([0,1]),import.meta.url),{addDaysISO:c}=await u(async()=>{const{addDaysISO:a}=await import("./index-C8-zeLpx.js").then(n=>n.L);return{addDaysISO:a}},__vite__mapDeps([0,1]),import.meta.url),e=i()[c(E,-1)];if(!e?.splitDone)return[];const{analisi:r}=await u(async()=>{const{analisi:a}=await import("./index-C8-zeLpx.js").then(n=>n.J);return{analisi:a}},__vite__mapDeps([0,1]),import.meta.url);return((await r("guardia",{label:t,giornoPrima:e.splitDone,data:E}))?.avvisi??[]).map(a=>a.testo)}const v=()=>new Date().toISOString().slice(0,10);async function f(t,i,c){const e=c.querySelector(".rec-nota");if(e&&(e.textContent="",e.classList.remove("attenzione")),i===v()&&c.dataset.forzato!=="1"){e&&(e.textContent="Controllo…");const a=await k(t.label);if(a.length){c.dataset.forzato="1",e&&(e.innerHTML=`${a.join(" ")} <button class="mini">Oggi lo stesso</button>`,e.classList.add("attenzione"),e.querySelector("button").onclick=()=>{f(t,i,c)});return}}I(t.id,i),m();const{paintOggiAlert:r,aggiornaLampeggio:o}=await u(async()=>{const{paintOggiAlert:a,aggiornaLampeggio:n}=await import("./index-C8-zeLpx.js").then(l=>l.P);return{paintOggiAlert:a,aggiornaLampeggio:n}},__vite__mapDeps([0,1]),import.meta.url);r(),o(),u(()=>import("./notifiche-jTAlnFzY.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(a=>a.paintNotifiche(null))}function V(t){const i=v(),c=t.dueBy<i,e=t.doOn?t.doOn===i?"oggi":g(t.doOn):null;return`<div class="g-row rec-row${c?" scaduto":""}${e?" scelto":""}" data-rec="${t.id}">
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
  </div>`}function m(t){u(()=>import("./creditoUI-DUc4dmdG.js"),__vite__mapDeps([3,0,1]),import.meta.url).then(n=>n.paintCredito());const i=P(),c=S(),e=p("debitoBox");if(e)if(i&&i.totale>0){e.innerHTML=`<div class="deb">
        <div class="deb-top">
          <div>
            <div class="deb-k">Calorie da restituire</div>
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
      </div>`;const n=async s=>{const d=Math.max(1,Math.min(14,Math.round(s))),b=p("debNota");b&&(b.textContent="Salvo…");const h=await u(()=>import("./index-C8-zeLpx.js").then(_=>_.J),__vite__mapDeps([0,1]),import.meta.url),A=h.profilo();await h.salvaProfilo({prefs:{...A?.prefs??{},rientroGiorni:d}});const{recomputeNow:L}=await u(async()=>{const{recomputeNow:_}=await import("./index-C8-zeLpx.js").then(O=>O.K);return{recomputeNow:_}},__vite__mapDeps([0,1]),import.meta.url);await L()};e.querySelectorAll("#debGiorni .splitchip").forEach(s=>{s.onclick=()=>{n(Number(s.dataset.g))}});const l=p("debKcal");if(l){const s=()=>{const d=Number(l.value);!d||d<1||n(Math.ceil(i.totale/d))};l.onchange=s,l.onkeydown=d=>{d.key==="Enter"&&s()}}}else e.innerHTML="";w(p("pendingBox"),c,"tutti"),w(p("cicloDaDecidere"),c.filter(n=>!n.doOn),"dadecidere");const r=p("recVuoto");if(r){const n=!c.length&&!(i&&i.totale>0);r.innerHTML=n?`<div class="vuoto-ok">
          <b>Sei in pari.</b>
          <p>Nessun allenamento da recuperare. Se salti un giorno, lo trovi
            qui con la sua scadenza.</p>
          <button class="vuoto-go" id="recVaiCiclo">Vedi il ciclo</button>
        </div>`:"";const l=p("recVaiCiclo");l&&(l.onclick=()=>window.MetaMap.vaiA("ciclo"))}const o=c.length+(i&&i.totale>0?1:0),a=p("recBadge");a&&(a.textContent=o?String(o):"",a.classList.toggle("on",o>0)),document.querySelectorAll('[data-go="recuperi"]').forEach(n=>{n.classList.toggle("debito",o>0)})}function w(t,i,c){if(!t)return;if(!i.length){t.innerHTML="";return}t.innerHTML=(c==="tutti"?"<h3>Allenamenti rimandati</h3>":"<h3>Da decidere</h3>")+`<div class="grp">${i.map(V).join("")}</div>`+(c==="tutti"?`<p class="rec-say">Non serve spuntarli. Registri l'allenamento nella giornata e il
           recupero si chiude.</p>`:"");const e=(r,o)=>{const a=i.find(l=>l.id===r.dataset[o]),n=r.closest(".rec-row");return a&&n?{r:a,riga:n}:null};t.querySelectorAll("[data-oggi]").forEach(r=>{const o=e(r,"oggi");o&&(r.onclick=()=>{f(o.r,v(),o.riga)})}),t.querySelectorAll("[data-riparti]").forEach(r=>{const o=e(r,"riparti");o&&(r.onclick=async()=>{y(o.r.id);const{cycle:a}=await u(async()=>{const{cycle:s}=await import("./index-C8-zeLpx.js").then(d=>d.L);return{cycle:s}},__vite__mapDeps([0,1]),import.meta.url),{saveAll:n}=await u(async()=>{const{saveAll:s}=await import("./index-C8-zeLpx.js").then(d=>d.N);return{saveAll:s}},__vite__mapDeps([0,1]),import.meta.url);a.startDate=v(),n(),m();const{recomputeNow:l}=await u(async()=>{const{recomputeNow:s}=await import("./index-C8-zeLpx.js").then(d=>d.K);return{recomputeNow:s}},__vite__mapDeps([0,1]),import.meta.url);l()})}),t.querySelectorAll("[data-quando],[data-cambia]").forEach(r=>{const o=e(r,r.dataset.quando?"quando":"cambia");if(!o)return;const a=o.riga.querySelector(".rec-data");a&&(r.onclick=()=>{a.hidden=!1;const n=a;try{n.showPicker?.()}catch{a.focus()}},a.onchange=()=>{a.value&&f(o.r,a.value,o.riga)})}),t.querySelectorAll(".rec-row").forEach(r=>{q(r,{etichetta:"Rinuncio",onVia:()=>{y(r.dataset.rec),m(),u(()=>import("./index-C8-zeLpx.js").then(o=>o.P),__vite__mapDeps([0,1]),import.meta.url).then(o=>{o.aggiornaLampeggio(),o.paintOggiAlert()}),u(()=>import("./notifiche-jTAlnFzY.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(o=>o.paintNotifiche(null))}})}),c==="tutti"&&R(t)}function C(){D(()=>m()),m()}export{m as paintRecuperi,C as wireRecuperi};
