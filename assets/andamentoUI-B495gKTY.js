const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-YS2ZJR-3.js","./index-DfQ7o_Qt.css"])))=>i.map(i=>d[i]);
import{y as w,_ as g,x as _,z as S}from"./index-YS2ZJR-3.js";function M(a){return a.replace(new RegExp(" · ","g"),", ")}const u=a=>document.getElementById(a),y=a=>String(Math.round(a)).replace(/\B(?=(\d{3})+(?!\d))/g,".");let h="7",$=!1;async function T(){const a=u("andamentoBox");if(!a||$)return;const n=_(),e=!!n&&n.plan!=="free";if(!S())return;if(!e){a.innerHTML=`<div class="attesa">
      <b>Il periodo è in Start.</b>
      <p style="margin-top:8px">Coerenza, previsto contro reale, e l'avviso quando
        un'abitudine si ripete. Tipo lo sforo del sabato.</p>
      <button class="btn" data-go="piani" style="margin-top:16px">Sblocca Start</button>
    </div>`,a.querySelector("[data-go]").onclick=()=>document.querySelector('.side nav [data-go="piani"], [data-go="piani"]')?.click();return}$=!0,a.innerHTML='<div class="attesa"><b>Sto leggendo il periodo…</b></div>';const l=await w("andamento",{periodo:h});if($=!1,!l?.modello){a.innerHTML=`<div class="attesa"><b>La lettura non è arrivata.</b>
      <p style="margin-top:8px">I tuoi dati sono al sicuro. Riprova.</p></div>`;return}const t=l.modello,o=t.summary??{},d=Array.isArray(t.alerts)?t.alerts:[],c=Number(o.daysClosed??0);if(!c){a.innerHTML=`<div class="attesa">
      <b>Ancora niente da leggere.</b>
      <p style="margin-top:8px">Il periodo si legge sulle giornate chiuse.</p>
      <button class="btn" id="andVaiOggi" style="margin-top:16px">Chiudi una giornata</button>
    </div>`;const i=document.getElementById("andVaiOggi");i&&(i.onclick=()=>window.MetaMap.vaiA("oggi"));return}const s=Number(o.totalDiff??0);a.innerHTML=`<div class="and-top">
       <div class="splitchips" id="andPeriodo">
         ${["7","14","30"].map(i=>`<button type="button" class="splitchip ${i===h?"on":""}" data-p="${i}">${i} giorni</button>`).join("")}
       </div>
       <span class="and-lb">${M(t.periodLabel??"")}</span>
     </div>

     <div class="row" style="margin-top:14px">
       <div class="stat"><div class="k">Coerenza</div>
         <div class="v">${Math.round(Number(o.avgCoherence??0))}<small>%</small></div></div>
       <div class="stat"><div class="k">Sopra / sotto</div>
         <div class="v">${o.daysAbove??0}<small>/${o.daysBelow??0}</small></div></div>
       <div class="stat"><div class="k">Scarto del periodo</div>
         <div class="v">${s>0?"+":""}${y(s)}<small>kcal</small></div></div>
     </div>

     <p class="and-say">Su <b>${c} giornate chiuse</b> hai mangiato in media
       <b>${y(Number(o.avgReal??0))} kcal</b> contro le <b>${y(Number(o.avgNumber??0))}</b>
       che ti avevo dato${t.balanceTag?`. ${String(t.balanceTag)}`:""}.</p>`+(d.length?`<h3>Cosa vedo</h3><div class="grp">${d.map(i=>`<div class="g-row"><div class="t"><b>${i.title}</b><span>${i.body}</span></div>
            <span class="val" style="color:${i.severity==="warn"?"var(--warn)":"var(--muted-2)"}">${i.severity==="warn"?"da guardare":"nota"}</span></div>`).join("")}</div>`:'<p class="and-say" style="color:var(--pos)">Nessuna abitudine storta in questo periodo.</p>'),a.querySelectorAll("#andPeriodo .splitchip").forEach(i=>{i.onclick=()=>{h=i.dataset.p,T()}})}async function x(){const a=u("riallineaBox");if(!a)return;a.innerHTML="";const n=await w("ciclo",{});if(!n)return;const e=n.slittamento??{},r=n.ancoraSuggerita??{},{cycle:l}=await g(async()=>{const{cycle:v}=await import("./index-YS2ZJR-3.js").then(p=>p.T);return{cycle:v}},__vite__mapDeps([0,1]),import.meta.url),t=Math.abs(Number(e.giorni??0))>0,o=Number(r.confidence??0)>=.7,d=!!r.anchor&&r.anchor!==l.startDate;if(!t&&!(o&&d))return;const c=r.anchor??"",[,s,i]=c.split("-");a.innerHTML=`<div class="riall">
    <b>Il tuo ciclo è slittato${t?` di ${Math.abs(Number(e.giorni))} giorn${Math.abs(Number(e.giorni))===1?"o":"i"}`:""}.</b>
    <p>${e.nota??`Guardando quello che hai fatto davvero, il ciclo sembra ricominciare il ${Number(i)}/${Number(s)} invece che il giorno che gli ho dato io.`}
      Se lo riallineo, il "previsto di oggi" torna a combaciare con la tua settimana vera.</p>
    <div class="riall-btn">
      <button class="btn" id="riallSi">Riallinea al ${Number(i)}/${Number(s)}</button>
      <button class="dg-btn" id="riallNo">Lascia com'è</button>
    </div>
  </div>`;const f=u("riallSi");f&&(f.onclick=async()=>{l.startDate=c;const{saveAll:v}=await g(async()=>{const{saveAll:m}=await import("./index-YS2ZJR-3.js").then(b=>b.V);return{saveAll:m}},__vite__mapDeps([0,1]),import.meta.url);v();const{recomputeNow:p}=await g(async()=>{const{recomputeNow:m}=await import("./index-YS2ZJR-3.js").then(b=>b.S);return{recomputeNow:m}},__vite__mapDeps([0,1]),import.meta.url);await p(),a.innerHTML=`<div class="riall fatto"><b>Ciclo riallineato al ${Number(i)}/${Number(s)}.</b></div>`});const N=u("riallNo");N&&(N.onclick=()=>{a.innerHTML=""})}export{T as paintAndamento,x as paintRiallineamento};
