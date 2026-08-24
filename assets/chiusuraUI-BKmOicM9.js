import{x as b,i as m}from"./index-Cba0P0US.js";import{paintPremi as g,premi as $}from"./premiUI-DhbVcpuo.js";const a=t=>document.getElementById(t),r=t=>String(Math.round(t)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),C=t=>t===1?"1 giorno":`${t} giorni`;function S(t){return Math.abs(t)<=100?{parola:"In linea",classe:"ok"}:t>0?{parola:"Sopra",classe:"att"}:{parola:"Sotto",classe:"att"}}function M(t,n){return n&&t>1?"È il tuo record.":t===30?"Un mese intero.":t===14?"Hai costruito la costanza.":t===7?"Non è più un caso.":t===3?"Tre di fila.":""}async function P(t){const n=a("qSheet"),l=a("qBody"),o=a("qSave"),e=a("qCancel");if(!n||!l||!o)return;await g().catch(()=>{});const i=$(),s=i?.striscia??0,f=!!i&&i.striscia>=i.strisciaMigliore&&i.striscia>0,d=S(t.difference),h=M(s,f),c=b()?.plan,v=!c||c==="free"||c==="base";m("Giornata chiusa",!1,"Continua",!1),a("qTitle").textContent=s?`${C(s)} di fila`:"Giornata chiusa",a("qSub").textContent=h,l.innerHTML=`
    <div class="ch-conto">
      <div class="ch-r"><span>Previste</span><b>${r(t.target)}</b></div>
      <div class="ch-r"><span>Mangiate</span><b>${r(t.eaten)}</b></div>
      <div class="ch-r ${d.classe}"><span>${d.parola}</span><b>${t.difference>0?"+":""}${r(t.difference)}</b></div>
    </div>
    ${s>=14&&v?`<div class="ch-oltre">
           <p>Hai costruito la costanza.<br>Ora usala.</p>
           <button class="ch-pro" id="chPro">Sblocca Pro</button>
         </div>`:""}`;const u=()=>{n.classList.remove("on"),o.textContent="Salva",e&&(e.hidden=!1)};o.textContent="Continua",o.onclick=u,e&&(e.hidden=!0);const p=a("chPro");p&&(p.onclick=()=>{u(),window.MetaMap.vaiA("piani")}),n.classList.add("on")}export{P as mostraChiusura};
