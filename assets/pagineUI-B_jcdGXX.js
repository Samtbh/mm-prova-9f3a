const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-bNmtL2y6.js","./index-B1LryvMO.css"])))=>i.map(i=>d[i]);
import{v,_ as c}from"./index-bNmtL2y6.js";const i=t=>document.getElementById(t),l=30;function g(){const t=i("letturaBox");if(!t)return;const n=Object.keys(v()).length,s=n>=l,a=Math.min(100,Math.round(n/l*100));if(!s){t.innerHTML=`<div class="attesa">
      <div class="attesa-top">
        <b>Ci vogliono ${l} giornate chiuse.</b>
        <span class="attesa-n">${n} di ${l}</span>
      </div>
      <div class="attesa-bar"><i style="width:${a}%"></i></div>
      <p>Con meno giorni una settimana storta sembra una tendenza. Chiudi le
        giornate da <b>Oggi</b>: questa pagina si accende da sola.</p>

      <h3>Cosa ci troverai</h3>
      <ul class="attesa-l">
        <li>Di quanto hai chiuso <b>sopra o sotto</b> il tuo numero, nel mese.</li>
        <li>In quali <b>giorni della settimana</b> succede. Quasi sempre non è a caso.</li>
        <li>La correzione: <b>una cosa sola da cambiare</b>, quella che pesa di più.</li>
      </ul>
    </div>`;return}t.innerHTML=`<div class="attesa">
    <div class="attesa-top"><b>Hai ${n} giornate chiuse.</b>
      <span class="attesa-n">pronte</span></div>
    <p>La lettura del periodo arriva appena è pronta.
      I dati per farla ci sono già tutti.</p>
  </div>`}const b=[{nome:"Strava",cosa:"Allenamenti, durata, calorie, frequenza cardiaca, percorso",stato:"collegabile",paga:!0},{nome:"Garmin",cosa:"Allenamenti, passi, frequenza cardiaca",stato:"collegabile",paga:!0},{nome:"Fitbit",cosa:"Passi, sonno, frequenza cardiaca, allenamenti",stato:"collegabile",paga:!0},{nome:"Polar",cosa:"Allenamenti dettagliati e recupero",stato:"collegabile",paga:!0}];function f(){const t=i("connBox");if(!t)return;t.innerHTML=`<div class="attesa" style="margin-bottom:18px">
      <b>Nessuna connessione attiva.</b>
      <p style="margin-top:8px">Le connessioni arrivano una alla volta, in ordine: per prima
        <b>quella che usate voi</b>. Dicci la tua: è l'unica cosa che ci
        serve per scegliere.</p>
    </div>
    <div class="grp">`+b.map(a=>`<div class="g-row conn" data-fonte="${a.nome}">
        <div class="t"><b>${a.nome}</b><span>${a.cosa}</span>
          ${a.nota?`<span class="conn-nota">${a.nota}</span>`:""}</div>
        <span class="val"><button class="conn-uso" data-uso="${a.nome}">La uso io</button></span>
      </div>`).join("")+`</div>
    <label class="mn-l" style="margin-top:18px" for="connAltra">Ne usi un'altra?</label>
    <input class="mn-i" id="connAltra" data-voce placeholder="Scrivila, o dettala col microfono">
    <button class="line" id="connAltraOk" style="margin-top:10px">Mandala</button>
    <div class="mn-msg" id="connMsg"></div>`,c(()=>import("./dettatura-BZtkYx3L.js"),[],import.meta.url).then(a=>a.microfoniOvunque(t));const n=async(a,e)=>{try{const{sb:o,loggato:r}=await c(async()=>{const{sb:p,loggato:d}=await import("./index-bNmtL2y6.js").then(m=>m.R);return{sb:p,loggato:d}},__vite__mapDeps([0,1]),import.meta.url);if(!r())return!1;const{error:u}=await o.from("mm2_richieste").upsert({tipo:"connessione",valore:a,nota:e??null},{onConflict:"user_id,tipo,valore"});return!u}catch{return!1}};t.querySelectorAll(".conn-uso").forEach(a=>{a.onclick=async()=>{const e=a.dataset.uso;a.textContent="…";const o=await n(e);a.textContent=o?"Segnalata ✓":"Riprova",a.classList.toggle("fatto",o)}});const s=i("connAltraOk");s&&(s.onclick=async()=>{const a=i("connAltra"),e=(a?.value??"").trim();if(!e){i("connMsg").textContent="Scrivi (o detta) quale usi.";return}const o=await n("altra",e);i("connMsg").textContent=o?"Ricevuto. Se la chiedono in tanti, quella apriamo.":"Non è stata inviata. Riprova.",o&&a&&(a.value="")})}function _(){g(),f()}export{f as paintConnessioni,g as paintLettura,_ as wirePagine};
