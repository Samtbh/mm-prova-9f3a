const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-dTfl-BZu.js","./index-DiOXs-su.css","./notifiche-C40TM6PH.js"])))=>i.map(i=>d[i]);
import{o as S,j as A,k as D,_ as d,n as q,q as $,t as k}from"./index-dTfl-BZu.js";import{scorriPerEliminare as P,suggerisciIlGesto as I}from"./swipe-BFJIPpwd.js";const u=t=>document.getElementById(t),y=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),M=["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];function p(t){const[,i,r]=t.split("-").map(Number);return`${r} ${M[i-1]}`}async function T(t){const{allDays:i}=await d(async()=>{const{allDays:a}=await import("./index-dTfl-BZu.js").then(n=>n.N);return{allDays:a}},__vite__mapDeps([0,1]),import.meta.url),{addDaysISO:r}=await d(async()=>{const{addDaysISO:a}=await import("./index-dTfl-BZu.js").then(n=>n.L);return{addDaysISO:a}},__vite__mapDeps([0,1]),import.meta.url),o=i()[r($,-1)];if(!o?.splitDone)return[];const{analisi:c}=await d(async()=>{const{analisi:a}=await import("./index-dTfl-BZu.js").then(n=>n.J);return{analisi:a}},__vite__mapDeps([0,1]),import.meta.url);return((await c("guardia",{label:t,giornoPrima:o.splitDone,data:$}))?.avvisi??[]).map(a=>a.testo)}const b=()=>new Date().toISOString().slice(0,10);async function f(t,i,r){const o=r.querySelector(".rec-nota");if(o&&(o.textContent="",o.classList.remove("attenzione")),i===b()&&r.dataset.forzato!=="1"){o&&(o.textContent="Controllo…");const a=await T(t.label);if(a.length){r.dataset.forzato="1",o&&(o.innerHTML=`${a.join(" ")} <button class="mini">Oggi lo stesso</button>`,o.classList.add("attenzione"),o.querySelector("button").onclick=()=>{f(t,i,r)});return}}q(t.id,i),m();const{paintOggiAlert:c,aggiornaLampeggio:e}=await d(async()=>{const{paintOggiAlert:a,aggiornaLampeggio:n}=await import("./index-dTfl-BZu.js").then(l=>l.P);return{paintOggiAlert:a,aggiornaLampeggio:n}},__vite__mapDeps([0,1]),import.meta.url);c(),e(),d(()=>import("./notifiche-C40TM6PH.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(a=>a.paintNotifiche(null))}function R(t){const i=b(),r=t.dueBy<i,o=t.doOn?t.doOn===i?"oggi":p(t.doOn):null;return`<div class="g-row rec-row${r?" scaduto":""}${o?" scelto":""}" data-rec="${t.id}">
    <div class="t">
      <b>${t.label}</b>
      <span>${o?`lo recuperi <b>${o}</b> · scade il ${p(t.dueBy)}`:`saltato il ${p(t.skippedOn)} · entro il ${p(t.dueBy)}`}</span>
      <div class="rec-nota"></div>
    </div>
    <div class="rec-az">
      ${o?`<button class="rec-cambia" data-cambia="${t.id}">cambia giorno</button>`:`<button class="rec-oggi" data-oggi="${t.id}">Lo recupero oggi</button>
           <button class="rec-quando" data-quando="${t.id}">Scegli giorno</button>`}
      <input class="rec-data" type="date" data-data="${t.id}"
             min="${i}" max="${t.dueBy>i?t.dueBy:i}"
             value="${t.doOn??""}" hidden>
    </div>
  </div>`}function m(t){const i=D(),r=A(),o=u("debitoBox");if(o)if(i&&i.totale>0){o.innerHTML=`<div class="deb">
        <div class="deb-top">
          <div>
            <div class="deb-k">Calorie da restituire</div>
            <div class="deb-v">${y(i.totale)}<small>kcal</small></div>
          </div>
          <div class="deb-piano">
            <b>−${y(i.alGiorno)} kcal al giorno</b>
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
      </div>`;const n=async s=>{const g=Math.max(1,Math.min(14,Math.round(s))),_=u("debNota");_&&(_.textContent="Salvo…");const h=await d(()=>import("./index-dTfl-BZu.js").then(v=>v.J),__vite__mapDeps([0,1]),import.meta.url),E=h.profilo();await h.salvaProfilo({prefs:{...E?.prefs??{},rientroGiorni:g}});const{recomputeNow:L}=await d(async()=>{const{recomputeNow:v}=await import("./index-dTfl-BZu.js").then(O=>O.K);return{recomputeNow:v}},__vite__mapDeps([0,1]),import.meta.url);await L()};o.querySelectorAll("#debGiorni .splitchip").forEach(s=>{s.onclick=()=>{n(Number(s.dataset.g))}});const l=u("debKcal");if(l){const s=()=>{const g=Number(l.value);!g||g<1||n(Math.ceil(i.totale/g))};l.onchange=s,l.onkeydown=g=>{g.key==="Enter"&&s()}}}else o.innerHTML="";w(u("pendingBox"),r,"tutti"),w(u("cicloDaDecidere"),r.filter(n=>!n.doOn),"dadecidere");const c=u("recVuoto");if(c){const n=!r.length&&!(i&&i.totale>0);c.innerHTML=n?`<div class="vuoto-ok">
          <b>Sei in pari.</b>
          <p>Nessun allenamento da recuperare. Se salti un giorno, lo trovi
            qui con la sua scadenza.</p>
          <button class="vuoto-go" id="recVaiCiclo">Vedi il ciclo</button>
        </div>`:"";const l=u("recVaiCiclo");l&&(l.onclick=()=>window.MetaMap.vaiA("ciclo"))}const e=r.length+(i&&i.totale>0?1:0),a=u("recBadge");a&&(a.textContent=e?String(e):"",a.classList.toggle("on",e>0)),document.querySelectorAll('[data-go="recuperi"]').forEach(n=>{n.classList.toggle("debito",e>0)})}function w(t,i,r){if(!t)return;if(!i.length){t.innerHTML="";return}t.innerHTML=(r==="tutti"?"<h3>Allenamenti rimandati</h3>":"<h3>Da decidere</h3>")+`<div class="grp">${i.map(R).join("")}</div>`+(r==="tutti"?`<p class="rec-say">Non serve spuntarli. Registri l'allenamento nella giornata e il
           recupero si chiude.</p>`:"");const o=(c,e)=>{const a=i.find(l=>l.id===c.dataset[e]),n=c.closest(".rec-row");return a&&n?{r:a,riga:n}:null};t.querySelectorAll("[data-oggi]").forEach(c=>{const e=o(c,"oggi");e&&(c.onclick=()=>{f(e.r,b(),e.riga)})}),t.querySelectorAll("[data-quando],[data-cambia]").forEach(c=>{const e=o(c,c.dataset.quando?"quando":"cambia");if(!e)return;const a=e.riga.querySelector(".rec-data");a&&(c.onclick=()=>{a.hidden=!1;const n=a;try{n.showPicker?.()}catch{a.focus()}},a.onchange=()=>{a.value&&f(e.r,a.value,e.riga)})}),t.querySelectorAll(".rec-row").forEach(c=>{P(c,{etichetta:"Rinuncio",onVia:()=>{k(c.dataset.rec),m(),d(()=>import("./index-dTfl-BZu.js").then(e=>e.P),__vite__mapDeps([0,1]),import.meta.url).then(e=>{e.aggiornaLampeggio(),e.paintOggiAlert()}),d(()=>import("./notifiche-C40TM6PH.js"),__vite__mapDeps([2,0,1]),import.meta.url).then(e=>e.paintNotifiche(null))}})}),r==="tutti"&&I(t)}function x(){S(()=>m()),m()}export{m as paintRecuperi,x as wireRecuperi};
