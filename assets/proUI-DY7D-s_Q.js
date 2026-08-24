const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./qualifica-BcCu99Zq.js","./index-YS2ZJR-3.js","./index-DfQ7o_Qt.css"])))=>i.map(i=>d[i]);
import{w as m,i as F,_ as N,x as H}from"./index-YS2ZJR-3.js";const e=o=>document.getElementById(o);let v=[],f=[];const j=()=>!!H()?.professional;async function K(){if(!j())return;const[o,i]=await Promise.all([m.from("mm2_protocols").select("*").order("created_at"),m.from("mm2_clients").select("*").order("created_at")]);v=o.data??[],f=i.data??[];const t=await N(()=>import("./qualifica-BcCu99Zq.js"),__vite__mapDeps([0,1,2]),import.meta.url);C=await t.puoNutrizione(),await t.qualifica()||t.chiediQualifica();const{segnaClienti:a}=await N(async()=>{const{segnaClienti:r}=await import("./index-YS2ZJR-3.js").then(c=>c.U);return{segnaClienti:r}},__vite__mapDeps([1,2]),import.meta.url);a(f.length)}const z=o=>o.goal_mode==="maintenance"?"Mantenimento":`${o.goal_mode==="deficit"?"Deficit":"Surplus"} ${o.goal_pct}%`;let C=!1;const Q=o=>C?`${z(o)}, ciclo di ${o.cycle_days} giorni, ${o.sessions} allenamenti, ${o.protein_g_kg} g/kg di proteine`:`ciclo di ${o.cycle_days} giorni, ${o.sessions} allenamenti`,L="Riposo",U=[2500,3200],V=`<b>Perché i carboidrati non si scrivono.</b> Il numero del giorno di ogni persona
   non lo decide il protocollo: viene dalla sua giornata reale più lo
   scostamento che imposti tu. Se fissassi proteine, grassi <i>e</i> carboidrati, la somma non
   tornerebbe quasi mai. A quel punto salta il numero, o saltano i grammi.<br><br>
   <b>Si fissa il minimo che ha un motivo fisiologico:</b> proteine per
   tenere il muscolo (1,6–2,2 g/kg) e grassi per gli ormoni (0,8–1,0 g/kg).
   I carboidrati prendono quello che avanza. Nei giorni in cui la persona si
   allena di più il numero sale, e a salire sono i carboidrati: è esattamente
   quello che deve succedere.<br><br>
   Qui sotto vedi quanti ne restano, in grammi e come rapporto sui grassi.`;function G(o,i){if(o==="maintenance"||!i)return"Nessuno scostamento: il numero resta quello che consuma.";const t=o==="deficit"?"−":"+",a=c=>String(Math.round(c)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),r=U.map(c=>`${t}${a(c*i/100)} kcal su ${a(c)}`).join(", ");return`${i}% vuol dire ${r}.`}const Z=75;function J(o,i,t){const a=Z,r=i*a,c=t*a,p=(o-(r*4+c*9))/4;if(p<=0)return`⚠️ Su ${a} kg, proteine e grassi da soli fanno ${Math.round(r*4+c*9)} kcal: più del numero (${Math.round(o)}). Non resterebbe niente per i carboidrati. Abbassa i g/kg.`;const g=(p/c).toFixed(1).replace(".",",");return`Su ${a} kg e ${(d=>String(Math.round(d)).replace(/\B(?=(\d{3})+(?!\d))/g,"."))(o)} kcal: ${Math.round(r)} g di proteine, ${Math.round(c)} g di grassi, ${Math.round(p)} g di carboidrati (${(p/a).toFixed(1).replace(".",",")} g/kg). <b>C:G ${g} : 1</b>.`}const W=`<b>Percentuale di cosa.</b> Di quello che la persona consuma in un giorno
   (metabolismo + lavoro + allenamento), non di quello che mangia e non di un
   numero fisso. Su 2.500 kcal l'8% è 200 kcal; su 3.200 è 256.<br><br>
   <b>Perché non si scrive in calorie.</b> Un protocollo lo dai a più persone:
   −400 kcal su chi ne consuma 2.200 è un taglio del 18%, su chi ne consuma
   3.500 è il 11%. La percentuale si adatta da sola a chi la riceve; il numero
   fisso no.<br><br>
   <b>Quanto mettere.</b> Per dimagrire, fra 10% e 20%. Sotto il 10% non si muove niente; sopra il
   20% si perde muscolo e la fame vince. Per la massa, fra 5% e 15%.<br><br>
   <b>Dove si applica, e da quando.</b> Il numero del giorno di ogni persona lavora in <i>calorie</i>, non in
   percentuali: è consumo reale + scostamento. Quando la persona entra,
   questa percentuale diventa il suo scostamento in kcal e da lì muove il suo
   numero ogni giorno. Prima di allora, qui stai scrivendo il metodo, non
   stai ancora cambiando il numero di nessuno.`;function R(o,i){const t=Math.max(2,Math.min(15,Math.round(i??o?.cycle_days??7))),a=Array.isArray(o?.split)?o.split:[];return Array.from({length:t},(r,c)=>({label:String(a[c]?.label??L),trainingKcal:Number(a[c]?.trainingKcal??0)}))}const X=o=>{const i=Array.isArray(o.split)?o.split:[];return i.length?i.map(t=>t.label||L).join(", "):""};function Y(){const o=e("protocolliBox");if(o){if(!v.length){o.innerHTML=`<div class="vuoto-ok" style="margin-top:16px">
      <b>Nessun protocollo.</b>
      <p>Il tuo metodo scritto una volta e riusato su tutti.</p>
      <button class="vuoto-go" id="vuotoProto">Scrivi il primo</button>
    </div>`;const i=e("vuotoProto");i&&(i.onclick=()=>{E()});return}o.innerHTML='<div class="grp" style="margin-top:16px">'+v.map(i=>{const t=f.filter(r=>r.protocol_id===i.id).length,a=X(i);return`<div class="g-row"><div class="t"><b>${i.name}</b><span>${Q(i)}${a?`<br><i class="ps-ciclo">${a}</i>`:""}</span></div>
        <span class="val">${t?`${t} client${t===1?"e":"i"}`:"nessun cliente"}
        <button class="mini" data-mod="${i.id}">modifica</button></span></div>`}).join("")+"</div>",o.querySelectorAll("[data-mod]").forEach(i=>{i.onclick=()=>{E(v.find(t=>t.id===i.dataset.mod))}})}}async function E(o){const{puoNutrizione:i}=await N(async()=>{const{puoNutrizione:n}=await import("./qualifica-BcCu99Zq.js");return{puoNutrizione:n}},__vite__mapDeps([0,1,2]),import.meta.url),t=await i(),a=e("qSheet"),r=e("qBody"),c=e("qTitle"),_=e("qSub"),p=e("qSave"),g=e("qCancel");if(!a||!r||!p)return;c.textContent=o?"Modifica protocollo":"Nuovo protocollo",_.textContent="Quello che scrivi qui diventa il piano di chi lo riceve.";const l=(n,s)=>String(o?.[n]??s);r.innerHTML=`<label class="mn-l" for="pName">Nome</label>
     <input class="mn-i" id="pName" value="${l("name","")}" placeholder="Ricomposizione moderata">
     ${t?`<label class="mn-l">Obiettivo</label>
     <div class="splitchips" id="pGoal">
       ${["deficit","maintenance","surplus"].map(n=>`<button type="button" class="splitchip ${l("goal_mode","deficit")===n?"on":""}" data-g="${n}">${n==="deficit"?"Deficit":n==="surplus"?"Surplus":"Mantenimento"}</button>`).join("")}
     </div>
     <div class="mn-tre">
       <div><label class="mn-l" for="pPct">Percentuale <button type="button" class="info-i" id="pPctInfo" aria-label="Cosa vuol dire">i</button></label><input class="mn-i" id="pPct" type="number" inputmode="decimal" value="${l("goal_pct",8)}"></div>`:""}
     <div class="mn-tre" style="grid-template-columns:1fr 1fr">
       <div><label class="mn-l" for="pDays">Giorni ciclo</label><input class="mn-i" id="pDays" type="number" inputmode="numeric" value="${l("cycle_days",7)}"></div>
       <div><label class="mn-l" for="pSess">Sessioni</label><input class="mn-i" id="pSess" type="number" inputmode="numeric" value="${l("sessions",4)}"></div>
     </div>
     ${t?`<p class="mn-eco" id="pPctEsito"></p>
     <div class="info-box" id="pPctBox" hidden>${W}</div>
     <div class="mn-tre" style="grid-template-columns:1fr 1fr">
       <div><label class="mn-l" for="pProt">Proteine g/kg</label><input class="mn-i" id="pProt" type="number" inputmode="decimal" step="0.1" value="${l("protein_g_kg",1.9)}"></div>
       <div><label class="mn-l" for="pFat">Grassi g/kg <button type="button" class="info-i" id="pMacroInfo" aria-label="E i carboidrati?">i</button></label><input class="mn-i" id="pFat" type="number" inputmode="decimal" step="0.1" value="${l("fat_g_kg",.9)}"></div>
     </div>
     <p class="mn-eco" id="pMacroEsito"></p>
     <div class="info-box" id="pMacroBox" hidden>${V}</div>`:`
     <div class="info-box">Le calorie e i macro di una persona non li imposti da qui:
       in Italia sono materia di medici, dietisti e nutrizionisti. <b>Il numero lo riceve
       lei da MetaMap, direttamente</b>. Tu programmi l'allenamento, che è il tuo
       mestiere. Se sei un professionista abilitato scrivicelo: la dichiarazione si
       cambia dall'Account.</div>`}
     <label class="mn-l" style="margin-top:18px">Il ciclo</label>
     <p class="mn-p">Cosa si allena in ogni giorno del ciclo. Chi riceve il protocollo
       lo trova già scritto nella sua pagina Ciclo.</p>
     <div class="proto-split" id="pSplit"></div>
     <div class="mn-msg" id="pMsg"></div>`+(o?'<button class="dg-btn" id="pDel" style="margin-top:16px">Elimina protocollo</button>':"");let d=R(o);function b(){const n=e("pSplit");n&&(n.innerHTML=d.map((s,u)=>`<div class="ps-row${/^\s*riposo\s*$/i.test(s.label)?" rip":""}">
          <span class="ps-n">${u+1}</span>
          <input class="mn-i ps-lb" data-i="${u}" value="${s.label.replace(/"/g,"&quot;")}" placeholder="Riposo">
          <input class="mn-i ps-kc" data-k="${u}" type="number" inputmode="numeric"
                 value="${s.trainingKcal||""}" placeholder="kcal">
        </div>`).join(""),n.querySelectorAll(".ps-lb").forEach(s=>{s.oninput=()=>{d[Number(s.dataset.i)].label=s.value},s.onchange=()=>b()}),n.querySelectorAll(".ps-kc").forEach(s=>{s.oninput=()=>{d[Number(s.dataset.k)].trainingKcal=Number(s.value)||0}}))}b();const P=e("pDays");P&&(P.onchange=()=>{d=R({...o??{},split:d},Number(P.value)),b()});let h=String(o?.goal_mode??"deficit");const k=e("pPct"),A=e("pPctEsito"),w=e("pMacroEsito"),D=(n,s)=>{const u=parseFloat(String(e(n)?.value).replace(",","."));return Number.isFinite(u)?u:s},y=()=>{const n=Number(k?.value)||0;if(A&&(A.textContent=G(h,n)),w){const u=2500+(h==="deficit"?-1:h==="surplus"?1:0)*2500*n/100;w.innerHTML=J(u,D("pProt",1.9),D("pFat",.9))}};k&&(k.oninput=y),e("pProt")?.addEventListener("input",y),e("pFat")?.addEventListener("input",y);const T=e("pMacroInfo"),q=e("pMacroBox");T&&q&&(T.onclick=()=>{q.hidden=!q.hidden});const B=e("pPctInfo"),M=e("pPctBox");B&&M&&(B.onclick=()=>{M.hidden=!M.hidden}),r.querySelectorAll("#pGoal .splitchip").forEach(n=>{n.onclick=()=>{r.querySelectorAll("#pGoal .splitchip").forEach(s=>s.classList.remove("on")),n.classList.add("on"),h=n.dataset.g,y()}}),y();const $=(n,s)=>{const u=parseFloat(String(e(n)?.value).replace(",","."));return Number.isFinite(u)?u:s};p.textContent=o?"Salva":"Crea",p.onclick=async()=>{const n=e("pName").value.trim();if(!n){e("pMsg").textContent="Serve un nome.";return}const s={name:n,goal_mode:t?h:o?.goal_mode??"maintenance",goal_pct:t?$("pPct",8):o?.goal_pct??0,protein_g_kg:t?$("pProt",1.9):o?.protein_g_kg??1.9,fat_g_kg:t?$("pFat",.9):o?.fat_g_kg??.9,cycle_days:$("pDays",7),sessions:$("pSess",4),split:d.map(x=>({label:x.label.trim()||L,trainingKcal:x.trainingKcal}))},u=o?await m.from("mm2_protocols").update(s).eq("id",o.id):await m.from("mm2_protocols").insert(s);if(u.error){e("pMsg").textContent=String(u.error.message).includes("PLAN_SOLO_STUDIO")?"I protocolli sono del piano Studio.":"Non è stato salvato. Riprova.";return}a.classList.remove("on"),await S()};const O=e("pDel");O&&(O.onclick=async()=>{await m.from("mm2_protocols").delete().eq("id",o.id),a.classList.remove("on"),await S()}),g&&(g.onclick=()=>a.classList.remove("on")),F("Protocollo",!1,o?"Salva":"Crea"),a.classList.add("on")}function oo(){const o=e("clientiBox");if(o){if(!f.length){o.innerHTML=`<div class="vuoto-ok" style="margin-top:16px">
      <b>Nessuna persona seguita.</b>
      <p>Gli assegni un protocollo. Quando collega l’app, qui vedi la sua
        giornata vera.</p>
      <button class="vuoto-go" id="vuotoCli">Aggiungi la prima</button>
    </div>`;const i=e("vuotoCli");i&&(i.onclick=()=>I());return}o.innerHTML='<div class="grp" style="margin-top:16px">'+f.map(i=>{const t=v.find(r=>r.id===i.protocol_id),a=i.linked_user?'<span class="val">collegato</span>':'<span class="val" style="color:var(--muted-2)">non collegato</span>';return`<div class="g-row" data-cli="${i.id}" style="cursor:pointer">
        <div class="t"><b>${i.name}</b><span>${t?t.name:"nessun protocollo"}${i.email?", "+i.email:""}</span></div>
        ${a}</div>`}).join("")+"</div>",o.querySelectorAll("[data-cli]").forEach(i=>{i.onclick=()=>I(f.find(t=>t.id===i.dataset.cli))})}}function I(o){const i=e("qSheet"),t=e("qBody"),a=e("qSave"),r=e("qCancel");if(!i||!t||!a)return;e("qTitle").textContent=o?o.name:"Nuovo cliente",e("qSub").textContent=o?o.linked_user?"È dentro: vedi la sua giornata vera.":"Non è ancora dentro: qui compare la sua giornata quando entra.":"Il nome ti serve per ritrovarlo. Il protocollo puoi metterlo anche dopo.",t.innerHTML=`<label class="mn-l" for="cName">Nome</label>
     <input class="mn-i" id="cName" value="${o?.name??""}" placeholder="Marco R.">
     <label class="mn-l" for="cMail">Email</label>
     <input class="mn-i" id="cMail" type="email" value="${o?.email??""}" placeholder="facoltativa">
     <label class="mn-l">Protocollo</label>
     <div class="splitchips" id="cProt">
       <button type="button" class="splitchip ${o?.protocol_id?"":"on"}" data-p="">Nessuno</button>
       ${v.map(l=>`<button type="button" class="splitchip ${o?.protocol_id===l.id?"on":""}" data-p="${l.id}">${l.name}</button>`).join("")}
     </div>
     <p class="mn-p" id="cProtEsito"></p>
     <div class="mn-msg" id="cMsg"></div>`+(o&&!o.linked_user?`<div class="attesa" style="margin-top:18px">
          <b>I suoi numeri arriveranno da lui.</b>
          <p style="margin-top:8px">Quando ${o.name.split(" ")[0]} entra,
            qui vedi il numero di oggi, l'aderenza e il peso: misurati, non stimati.</p>
        </div>`:"")+(o?'<button class="dg-btn" id="cDel" style="margin-top:16px">Elimina cliente</button>':"");let c=o?.protocol_id??"";const _=e("cProtEsito"),p=()=>{if(!_)return;const l=v.find(d=>d.id===c);_.textContent=l?C?`${z(l)}, ${G(l.goal_mode,Number(l.goal_pct)||0)}`:`Ciclo di ${l.cycle_days} giorni, ${l.sessions} allenamenti. Il numero lo riceve lei da MetaMap.`:"Senza protocollo il suo numero resta al mantenimento."};t.querySelectorAll("#cProt .splitchip").forEach(l=>{l.onclick=()=>{t.querySelectorAll("#cProt .splitchip").forEach(d=>d.classList.remove("on")),l.classList.add("on"),c=l.dataset.p,p()}}),p(),a.textContent=o?"Salva":"Aggiungi",a.onclick=async()=>{const l=e("cName").value.trim();if(!l){e("cMsg").textContent="Serve almeno il nome.";return}const d={name:l,email:e("cMail").value.trim()||null,protocol_id:c||null},b=o?await m.from("mm2_clients").update(d).eq("id",o.id):await m.from("mm2_clients").insert(d);if(b.error){e("cMsg").textContent=String(b.error.message).includes("PLAN_SOLO_STUDIO")?"I clienti sono del piano Studio.":"Non è stato salvato. Riprova.";return}i.classList.remove("on"),await S()};const g=e("cDel");g&&(g.onclick=async()=>{await m.from("mm2_clients").delete().eq("id",o.id),i.classList.remove("on"),await S()}),r&&(r.onclick=()=>i.classList.remove("on")),F("Cliente",!1,o?"Salva":"Aggiungi"),i.classList.add("on")}async function S(){await K(),Y(),oo()}async function eo(){const o=e("nuovoCliente"),i=e("nuovoProtocollo");o&&(o.onclick=()=>I()),i&&(i.onclick=()=>{E()}),await S()}export{G as inCalorie,J as macroEsempio,oo as paintClienti,Y as paintProtocolli,R as slotsDi,eo as wirePro};
