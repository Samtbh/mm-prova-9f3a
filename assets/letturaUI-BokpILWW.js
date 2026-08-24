import{y as d}from"./index-DB7yD0kK.js";const l=t=>document.getElementById(t);function p(t){const o=t.trim();if(!o)return[];const i=o.split(/\n(?=#{1,3}\s)/g).map(a=>a.trim()).filter(Boolean);return(i.length>1?i:[o]).map(a=>{const n=a.split(`
`),e=n[0].replace(/^#{1,3}\s*/,"").replace(/^\d+\.\s*/,"").trim(),c=n.slice(1).join(`
`).replace(/^#{1,3}\s*/gm,"").trim();return c?{titolo:e,testo:c}:{titolo:"",testo:a.replace(/^#{1,3}\s*/gm,"")}}).filter(a=>(a.titolo||a.testo)&&!(!a.titolo&&a.testo.length<90))}let r=!1;const u=t=>t.split(`
`).join("<br>").replace(/\*\*(.+?)\*\*/g,"<b>$1</b>"),b={GRADO:t=>`<b>Si apre al terzo grado.</b> Sei al ${Number(t.livello??0)||"primo passo"}${Number(t.livello??0)?"°":""}: continua a chiudere le giornate e questa pagina si accende da sola.`,REGALO_FINITO:()=>`<b>La lettura in regalo l'hai già usata.</b> Da qui in poi serve un piano:
     è la stessa lettura, ogni volta che ti serve.`,POCHI_GIORNI:t=>`<b>Servono almeno cinque giornate chiuse.</b> Ne hai ${t.chiuse??0}:
     con meno non c'è niente da leggere, e inventarlo sarebbe peggio che tacere.`,NON_ATTIVA:()=>`<b>La lettura non è ancora aperta.</b> Manca la chiave sul server: te lo diciamo
     invece di far finta che stia pensando.`,AI_VUOTA:()=>`<b>Il modello non ha risposto niente.</b> Capita: riprova fra poco.
     Non ti è stata addebitata.`,AI_KO:t=>`<b>La lettura non è arrivata.</b> Riprova fra poco.${t.dettaglio?`<br><small class="mn-p">${String(t.dettaglio)}</small>`:""}`};function m(){const t=l("periodoVai");t&&(t.onclick=()=>{g()})}async function g(){const t=l("periodoBox"),o=l("periodoVai");if(!t||r)return;r=!0,o&&(o.disabled=!0),t.innerHTML=`<div class="attesa"><b>Sto leggendo il tuo periodo…</b>
    <p style="margin-top:8px">Ci vuole qualche secondo: sta guardando tutte le giornate chiuse.</p></div>`;let i=null;try{i=await d("lettura",{periodo:"30"})}catch(e){t.innerHTML=`<div class="lt-chiusa"><b>La lettura non è arrivata.</b>
      <br><small class="mn-p">${(e instanceof Error?e.message:String(e)).slice(0,120)}</small></div>`,r=!1,o&&(o.disabled=!1);return}if(r=!1,o&&(o.disabled=!1),!i){t.innerHTML=`<div class="attesa"><b>Non ho ricevuto risposta.</b>
      <p style="margin-top:8px">Riprova: i tuoi dati sono al sicuro.</p></div>`;return}if(i.chiusa){const e=b[String(i.motivo??"")]??(()=>"<b>Non disponibile adesso.</b>");t.innerHTML=`<div class="lt-chiusa">${e(i)}</div>`;return}const s=i.report??{},a=(Array.isArray(s.sections)?s.sections:[]).map(e=>e.content??e.body??"").join(`

`).trim()||String(i.grezzo??"").trim(),n=p(a);if(!n.length){t.innerHTML=`<div class="lt-chiusa"><b>La lettura è arrivata vuota.</b>
      Non ti è stata addebitata. Riprova.</div>`;return}t.innerHTML=`<div class="lt-report">
       ${i.eraRegalo?`<div class="lt-regalo">Questa è la lettura in regalo del tuo grado.
         La prossima ha bisogno di un piano.</div>`:""}
       ${n.map(e=>`<div class="lt-sez">
            ${e.titolo?`<b>${e.titolo}</b>`:""}
            <p>${u(e.testo)}</p>
          </div>`).join("")}
     </div>`}export{m as wireLettura};
