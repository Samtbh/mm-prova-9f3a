const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./qualifica-JlKbqMY_.js","./index-Arf0IXKT.js","./index-BfOMIe0x.css"])))=>i.map(i=>d[i]);
import{v as m,_ as N,w as G}from"./index-Arf0IXKT.js";const e=i=>document.getElementById(i);let v=[],f=[];const H=()=>!!G()?.professional;async function j(){if(!H())return;const[i,o]=await Promise.all([m.from("mm2_protocols").select("*").order("created_at"),m.from("mm2_clients").select("*").order("created_at")]);v=i.data??[],f=o.data??[];const t=await N(()=>import("./qualifica-JlKbqMY_.js"),__vite__mapDeps([0,1,2]),import.meta.url);E=await t.puoNutrizione(),await t.qualifica()||t.chiediQualifica();const{segnaClienti:a}=await N(async()=>{const{segnaClienti:r}=await import("./index-Arf0IXKT.js").then(c=>c.M);return{segnaClienti:r}},__vite__mapDeps([1,2]),import.meta.url);a(f.length)}const O=i=>i.goal_mode==="maintenance"?"Mantenimento":`${i.goal_mode==="deficit"?"Deficit":"Surplus"} ${i.goal_pct}%`;let E=!1;const K=i=>E?`${O(i)} · ciclo ${i.cycle_days} giorni · ${i.sessions} allenamenti · ${i.protein_g_kg} g/kg proteine`:`ciclo ${i.cycle_days} giorni · ${i.sessions} allenamenti`,I="Riposo",Q=[2500,3200],U=`<b>Perché i carboidrati non si scrivono.</b> Il numero del giorno di ogni persona
   non lo decide il protocollo: viene dalla sua giornata reale più lo
   scostamento che imposti tu. Se fissassi proteine, grassi <i>e</i> carboidrati, la somma non
   tornerebbe quasi mai. A quel punto salta il numero, o saltano i grammi.<br><br>
   <b>Si fissa il minimo che ha un motivo fisiologico:</b> proteine per
   tenere il muscolo (1,6–2,2 g/kg) e grassi per gli ormoni (0,8–1,0 g/kg).
   I carboidrati prendono quello che avanza. Nei giorni in cui la persona si
   allena di più il numero sale, e a salire sono i carboidrati: è esattamente
   quello che deve succedere.<br><br>
   Qui sotto vedi quanti ne restano, in grammi e come rapporto sui grassi.`;function R(i,o){if(i==="maintenance"||!o)return"Nessuno scostamento: il numero resta quello che consuma.";const t=i==="deficit"?"−":"+",a=c=>String(Math.round(c)).replace(/\B(?=(\d{3})+(?!\d))/g,"."),r=Q.map(c=>`${t}${a(c*o/100)} kcal su ${a(c)}`).join(" · ");return`${o}% vuol dire ${r}.`}const V=75;function Z(i,o,t){const a=V,r=o*a,c=t*a,p=(i-(r*4+c*9))/4;if(p<=0)return`⚠️ Su ${a} kg, proteine e grassi da soli fanno ${Math.round(r*4+c*9)} kcal: più del numero (${Math.round(i)}). Non resterebbe niente per i carboidrati — abbassa i g/kg.`;const g=(p/c).toFixed(1).replace(".",",");return`Su ${a} kg e ${(d=>String(Math.round(d)).replace(/\B(?=(\d{3})+(?!\d))/g,"."))(i)} kcal: ${Math.round(r)} g proteine · ${Math.round(c)} g grassi · ${Math.round(p)} g carboidrati (${(p/a).toFixed(1).replace(".",",")} g/kg) — <b>C:G ${g} : 1</b>.`}const J=`<b>Percentuale di cosa.</b> Di quello che la persona consuma in un giorno
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
   numero ogni giorno. Prima di allora, qui stai scrivendo il metodo — non
   stai ancora cambiando il numero di nessuno.`;function B(i,o){const t=Math.max(2,Math.min(15,Math.round(o??i?.cycle_days??7))),a=Array.isArray(i?.split)?i.split:[];return Array.from({length:t},(r,c)=>({label:String(a[c]?.label??I),trainingKcal:Number(a[c]?.trainingKcal??0)}))}const W=i=>{const o=Array.isArray(i.split)?i.split:[];return o.length?o.map(t=>t.label||I).join(" · "):""};function X(){const i=e("protocolliBox");if(i){if(!v.length){i.innerHTML=`<div class="vuoto-ok" style="margin-top:16px">
      <b>Nessun protocollo. Scrivi il primo.</b>
      <p>Il tuo metodo scritto una volta e riusato su tutti: deficit, giorni di
        ciclo, allenamenti, grammi per chilo. Lo assegni a una persona e
        resta sulla sua scheda.</p>
    </div>`;return}i.innerHTML='<div class="grp" style="margin-top:16px">'+v.map(o=>{const t=f.filter(r=>r.protocol_id===o.id).length,a=W(o);return`<div class="g-row"><div class="t"><b>${o.name}</b><span>${K(o)}${a?`<br><i class="ps-ciclo">${a}</i>`:""}</span></div>
        <span class="val">${t?`${t} client${t===1?"e":"i"}`:"nessun cliente"}
        <button class="mini" data-mod="${o.id}">modifica</button></span></div>`}).join("")+"</div>",i.querySelectorAll("[data-mod]").forEach(o=>{o.onclick=()=>{F(v.find(t=>t.id===o.dataset.mod))}})}}async function F(i){const{puoNutrizione:o}=await N(async()=>{const{puoNutrizione:n}=await import("./qualifica-JlKbqMY_.js");return{puoNutrizione:n}},__vite__mapDeps([0,1,2]),import.meta.url),t=await o(),a=e("qSheet"),r=e("qBody"),c=e("qTitle"),h=e("qSub"),p=e("qSave"),g=e("qCancel");if(!a||!r||!p)return;c.textContent=i?"Modifica protocollo":"Nuovo protocollo",h.textContent="Quello che scrivi qui diventa il piano di chi lo riceve.";const l=(n,s)=>String(i?.[n]??s);r.innerHTML=`<label class="mn-l" for="pName">Nome</label>
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
     <div class="info-box" id="pPctBox" hidden>${J}</div>
     <div class="mn-tre" style="grid-template-columns:1fr 1fr">
       <div><label class="mn-l" for="pProt">Proteine g/kg</label><input class="mn-i" id="pProt" type="number" inputmode="decimal" step="0.1" value="${l("protein_g_kg",1.9)}"></div>
       <div><label class="mn-l" for="pFat">Grassi g/kg <button type="button" class="info-i" id="pMacroInfo" aria-label="E i carboidrati?">i</button></label><input class="mn-i" id="pFat" type="number" inputmode="decimal" step="0.1" value="${l("fat_g_kg",.9)}"></div>
     </div>
     <p class="mn-eco" id="pMacroEsito"></p>
     <div class="info-box" id="pMacroBox" hidden>${U}</div>`:`
     <div class="info-box">Le calorie e i macro di una persona non li imposti da qui:
       in Italia sono materia di medici, dietisti e nutrizionisti. <b>Il numero lo riceve
       lei da MetaMap, direttamente</b> — tu programmi l'allenamento, che è il tuo
       mestiere. Se sei un professionista abilitato scrivicelo: la dichiarazione si
       cambia dall'Account.</div>`}
     <label class="mn-l" style="margin-top:18px">Il ciclo</label>
     <p class="mn-p">Cosa si allena in ogni giorno del ciclo. Chi riceve il protocollo
       lo trova già scritto nella sua pagina Ciclo.</p>
     <div class="proto-split" id="pSplit"></div>
     <div class="mn-msg" id="pMsg"></div>`+(i?'<button class="dg-btn" id="pDel" style="margin-top:16px">Elimina protocollo</button>':"");let d=B(i);function b(){const n=e("pSplit");n&&(n.innerHTML=d.map((s,u)=>`<div class="ps-row${/^\s*riposo\s*$/i.test(s.label)?" rip":""}">
          <span class="ps-n">${u+1}</span>
          <input class="mn-i ps-lb" data-i="${u}" value="${s.label.replace(/"/g,"&quot;")}" placeholder="Riposo">
          <input class="mn-i ps-kc" data-k="${u}" type="number" inputmode="numeric"
                 value="${s.trainingKcal||""}" placeholder="kcal">
        </div>`).join(""),n.querySelectorAll(".ps-lb").forEach(s=>{s.oninput=()=>{d[Number(s.dataset.i)].label=s.value},s.onchange=()=>b()}),n.querySelectorAll(".ps-kc").forEach(s=>{s.oninput=()=>{d[Number(s.dataset.k)].trainingKcal=Number(s.value)||0}}))}b();const P=e("pDays");P&&(P.onchange=()=>{d=B({...i??{},split:d},Number(P.value)),b()});let _=String(i?.goal_mode??"deficit");const k=e("pPct"),L=e("pPctEsito"),C=e("pMacroEsito"),w=(n,s)=>{const u=parseFloat(String(e(n)?.value).replace(",","."));return Number.isFinite(u)?u:s},y=()=>{const n=Number(k?.value)||0;if(L&&(L.textContent=R(_,n)),C){const u=2500+(_==="deficit"?-1:_==="surplus"?1:0)*2500*n/100;C.innerHTML=Z(u,w("pProt",1.9),w("pFat",.9))}};k&&(k.oninput=y),e("pProt")?.addEventListener("input",y),e("pFat")?.addEventListener("input",y);const A=e("pMacroInfo"),q=e("pMacroBox");A&&q&&(A.onclick=()=>{q.hidden=!q.hidden});const D=e("pPctInfo"),M=e("pPctBox");D&&M&&(D.onclick=()=>{M.hidden=!M.hidden}),r.querySelectorAll("#pGoal .splitchip").forEach(n=>{n.onclick=()=>{r.querySelectorAll("#pGoal .splitchip").forEach(s=>s.classList.remove("on")),n.classList.add("on"),_=n.dataset.g,y()}}),y();const $=(n,s)=>{const u=parseFloat(String(e(n)?.value).replace(",","."));return Number.isFinite(u)?u:s};p.textContent=i?"Salva":"Crea",p.onclick=async()=>{const n=e("pName").value.trim();if(!n){e("pMsg").textContent="Serve un nome.";return}const s={name:n,goal_mode:t?_:i?.goal_mode??"maintenance",goal_pct:t?$("pPct",8):i?.goal_pct??0,protein_g_kg:t?$("pProt",1.9):i?.protein_g_kg??1.9,fat_g_kg:t?$("pFat",.9):i?.fat_g_kg??.9,cycle_days:$("pDays",7),sessions:$("pSess",4),split:d.map(x=>({label:x.label.trim()||I,trainingKcal:x.trainingKcal}))},u=i?await m.from("mm2_protocols").update(s).eq("id",i.id):await m.from("mm2_protocols").insert(s);if(u.error){e("pMsg").textContent=String(u.error.message).includes("PLAN_SOLO_STUDIO")?"I protocolli sono del piano Studio.":"Non è stato salvato. Riprova.";return}a.classList.remove("on"),await S()};const T=e("pDel");T&&(T.onclick=async()=>{await m.from("mm2_protocols").delete().eq("id",i.id),a.classList.remove("on"),await S()}),g&&(g.onclick=()=>a.classList.remove("on")),a.classList.add("on")}function Y(){const i=e("clientiBox");if(i){if(!f.length){i.innerHTML=`<div class="vuoto-ok" style="margin-top:16px">
      <b>Nessuna persona seguita. Aggiungi la prima.</b>
      <p>Aggiungi la prima persona che segui. Gli assegni un protocollo e,
        quando entra, qui vedi la sua giornata
        vera — numero, aderenza, peso. Finché non lo collega, questa scheda
        resta la tua anagrafica: <b>non le invento i numeri</b>.</p>
    </div>`;return}i.innerHTML='<div class="grp" style="margin-top:16px">'+f.map(o=>{const t=v.find(r=>r.id===o.protocol_id),a=o.linked_user?'<span class="val">collegato</span>':'<span class="val" style="color:var(--muted-2)">non collegato</span>';return`<div class="g-row" data-cli="${o.id}" style="cursor:pointer">
        <div class="t"><b>${o.name}</b><span>${t?t.name:"nessun protocollo"}${o.email?" · "+o.email:""}</span></div>
        ${a}</div>`}).join("")+"</div>",i.querySelectorAll("[data-cli]").forEach(o=>{o.onclick=()=>z(f.find(t=>t.id===o.dataset.cli))})}}function z(i){const o=e("qSheet"),t=e("qBody"),a=e("qSave"),r=e("qCancel");if(!o||!t||!a)return;e("qTitle").textContent=i?i.name:"Nuovo cliente",e("qSub").textContent=i?i.linked_user?"È dentro: vedi la sua giornata vera.":"Non è ancora dentro: qui compare la sua giornata quando entra.":"Il nome ti serve per ritrovarlo. Il protocollo puoi metterlo anche dopo.",t.innerHTML=`<label class="mn-l" for="cName">Nome</label>
     <input class="mn-i" id="cName" value="${i?.name??""}" placeholder="Marco R.">
     <label class="mn-l" for="cMail">Email</label>
     <input class="mn-i" id="cMail" type="email" value="${i?.email??""}" placeholder="facoltativa">
     <label class="mn-l">Protocollo</label>
     <div class="splitchips" id="cProt">
       <button type="button" class="splitchip ${i?.protocol_id?"":"on"}" data-p="">Nessuno</button>
       ${v.map(l=>`<button type="button" class="splitchip ${i?.protocol_id===l.id?"on":""}" data-p="${l.id}">${l.name}</button>`).join("")}
     </div>
     <p class="mn-p" id="cProtEsito"></p>
     <div class="mn-msg" id="cMsg"></div>`+(i&&!i.linked_user?`<div class="attesa" style="margin-top:18px">
          <b>I suoi numeri arriveranno da lui.</b>
          <p style="margin-top:8px">Quando ${i.name.split(" ")[0]} entra,
            qui vedi il numero di oggi, l'aderenza e il peso — misurati, non stimati.</p>
        </div>`:"")+(i?'<button class="dg-btn" id="cDel" style="margin-top:16px">Elimina cliente</button>':"");let c=i?.protocol_id??"";const h=e("cProtEsito"),p=()=>{if(!h)return;const l=v.find(d=>d.id===c);h.textContent=l?E?`${O(l)} — ${R(l.goal_mode,Number(l.goal_pct)||0)}`:`Ciclo di ${l.cycle_days} giorni, ${l.sessions} allenamenti. Il numero lo riceve lei da MetaMap.`:"Senza protocollo il suo numero resta al mantenimento."};t.querySelectorAll("#cProt .splitchip").forEach(l=>{l.onclick=()=>{t.querySelectorAll("#cProt .splitchip").forEach(d=>d.classList.remove("on")),l.classList.add("on"),c=l.dataset.p,p()}}),p(),a.textContent=i?"Salva":"Aggiungi",a.onclick=async()=>{const l=e("cName").value.trim();if(!l){e("cMsg").textContent="Serve almeno il nome.";return}const d={name:l,email:e("cMail").value.trim()||null,protocol_id:c||null},b=i?await m.from("mm2_clients").update(d).eq("id",i.id):await m.from("mm2_clients").insert(d);if(b.error){e("cMsg").textContent=String(b.error.message).includes("PLAN_SOLO_STUDIO")?"I clienti sono del piano Studio.":"Non è stato salvato. Riprova.";return}o.classList.remove("on"),await S()};const g=e("cDel");g&&(g.onclick=async()=>{await m.from("mm2_clients").delete().eq("id",i.id),o.classList.remove("on"),await S()}),r&&(r.onclick=()=>o.classList.remove("on")),o.classList.add("on")}async function S(){await j(),X(),Y()}async function oi(){const i=e("nuovoCliente"),o=e("nuovoProtocollo");i&&(i.onclick=()=>z()),o&&(o.onclick=()=>{F()}),await S()}export{R as inCalorie,Z as macroEsempio,Y as paintClienti,X as paintProtocolli,B as slotsDi,oi as wirePro};
