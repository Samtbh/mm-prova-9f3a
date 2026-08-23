import{premi as t}from"./premiUI-CmAXYwro.js";import"./index-CR9W2L_a.js";const d=i=>document.getElementById(i),n=i=>i===1?"1 giorno":`${i} giorni`;function l(){const i=d("costanza");if(!i)return;const o=t();if(!o){i.hidden=!0;return}if(!o.giornate){i.hidden=!0;return}const s=o.prossimo,a=o.nome,c=o.strisciaMigliore>o.striscia,r=!!s&&s.mancano<=30;i.hidden=!1,i.innerHTML=`
    <div class="cz-riga">
      <div class="cz-ora">
        <b>${n(o.striscia)}</b>
        <span>di fila</span>
      </div>
      ${c?`<div class="cz-poi">
             <b>${n(o.strisciaMigliore)}</b>
             <span>il tuo record</span>
           </div>`:r?`<div class="cz-poi">
               <b>${n(s.mancano)}</b>
               <span>a ${s.nome.toLowerCase()}</span>
             </div>`:a?`<div class="cz-poi"><b>${a}</b><span>grado</span></div>`:""}
    </div>
    ${o.striscia>=7?'<div class="cz-dice">Non è più un caso.</div>':""}`}export{l as paintCostanza};
