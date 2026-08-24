import{premi as d}from"./premiUI-Clbi_qy6.js";import"./index-DB7yD0kK.js";const e=o=>document.getElementById(o),a=o=>o===1?"1 giorno":`${o} giorni`;function v(){p("costanza")}function p(o){const n=e(o);if(!n)return;const i=d();if(!i){n.hidden=!0;return}if(!i.giornate){n.hidden=!0;return}const s=i.prossimo,c=i.nome,r=i.strisciaMigliore>i.striscia,t=!!s&&s.mancano<=30;n.hidden=!1,n.innerHTML=`
    <div class="cz-riga">
      <div class="cz-ora">
        <b>${a(i.striscia)}</b>
        <span>di fila</span>
      </div>
      ${r?`<div class="cz-poi">
             <b>${a(i.strisciaMigliore)}</b>
             <span>il tuo record</span>
           </div>`:t?`<div class="cz-poi">
               <b>${a(s.mancano)}</b>
               <span>a ${s.nome.toLowerCase()}</span>
             </div>`:c?`<div class="cz-poi"><b>${c}</b><span>grado</span></div>`:""}
    </div>
    ${i.striscia>=7?'<div class="cz-dice">Non è più un caso.</div>':""}`}export{v as paintCostanza};
