import{w as g}from"./index-CR9W2L_a.js";import{paintPremi as S,premi as $}from"./premiUI-CmAXYwro.js";const a=t=>document.getElementById(t),l=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),q=t=>t===1?"1 giorno":`${t} giorni`;function C(t){return Math.abs(t)<=100?{parola:"In linea",classe:"ok"}:t>0?{parola:"Sopra",classe:"att"}:{parola:"Sotto",classe:"att"}}function M(t,n){return n&&t>1?"È il tuo record.":t===30?"Un mese intero.":t===14?"Hai costruito la costanza.":t===7?"Non è più un caso.":t===3?"Tre di fila.":""}async function w(t){const n=a("qSheet"),d=a("qBody"),i=a("qSave"),o=a("qCancel");if(!n||!d||!i)return;await S().catch(()=>{});const e=$(),c=e?.striscia??0,v=!!e&&e.striscia>=e.strisciaMigliore&&e.striscia>0,u=C(t.difference),b=M(c,v),s=g()?.plan,m=!s||s==="free"||s==="base",r=a("qEt");r&&(r.textContent="Giornata chiusa",r.hidden=!1);const f=a("qScala");f&&(f.hidden=!0),a("qTitle").textContent=c?`${q(c)} di fila`:"Giornata chiusa",a("qSub").textContent=b,d.innerHTML=`
    <div class="ch-conto">
      <div class="ch-r"><span>Previste</span><b>${l(t.target)}</b></div>
      <div class="ch-r"><span>Mangiate</span><b>${l(t.eaten)}</b></div>
      <div class="ch-r ${u.classe}"><span>${u.parola}</span><b>${t.difference>0?"+":""}${l(t.difference)}</b></div>
    </div>
    ${c>=14&&m?`<div class="ch-oltre">
           <p>Hai costruito la costanza.<br>Ora usala.</p>
           <button class="ch-pro" id="chPro">Sblocca Pro</button>
         </div>`:""}`;const p=()=>{n.classList.remove("on"),i.textContent="Salva",o&&(o.hidden=!1)};i.textContent="Continua",i.onclick=p,o&&(o.hidden=!0);const h=a("chPro");h&&(h.onclick=()=>{p(),window.MetaMap.vaiA("piani")}),n.classList.add("on")}export{w as mostraChiusura};
