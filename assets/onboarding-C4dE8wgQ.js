const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CzF9L4Ks.js","./index-C0juWENH.css"])))=>i.map(i=>d[i]);
import{J as f,i,K as m,L as x,_ as q,H as _}from"./index-CzF9L4Ks.js";const b="mm2_onboarded";function I(r){if(r){const e=!!(r.age&&r.height_cm&&r.weight_kg);return e?localStorage.setItem(b,"1"):localStorage.removeItem(b),!e}return!localStorage.getItem(b)}const w=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],M=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],$=r=>{const[e,o,u]=r.split("-").map(Number);return`${M[new Date(e,o-1,u).getDay()]} ${u} ${w[o-1]}`};function K(r){const e={sex:null,age:null,heightCm:null,weightKg:null,goal:null,delta:null,startDate:f()};let o=0;const u=5,c=document.createElement("div");c.className="onb",c.innerHTML=`<div class="obox">
    <div class="obar"><i id="obProg"></i></div>
    <div id="obBody"></div>
    <div class="ofoot">
      <button class="btn-line" id="obBack" style="flex:1">Indietro</button>
      <button class="btn" id="obNext">Avanti</button>
    </div>
  </div>`,document.body.appendChild(c);const s=c.querySelector("#obBody"),g=c.querySelector("#obNext"),y=c.querySelector("#obBack"),S=c.querySelector("#obProg"),p=(t,l,n)=>`<div class="opt4" data-group="${t}">${l.map(a=>`<button data-v="${a.v}" class="${a.v===n?"on":""}"><b>${a.l}</b>${a.s?`<span>${a.s}</span>`:""}</button>`).join("")}</div>`,h=(t,l,n,a,d)=>`<div class="qf"><label>${l}</label>
      <input class="obig" id="${t}" inputmode="decimal" value="${n??""}" placeholder="${a}">
      <div class="why2">${d}</div></div>`;function v(){if(S.style.width=`${(o+1)/u*100}%`,y.style.visibility=o===0?"hidden":"visible",g.textContent=o===u-1?"Fatto":"Avanti",o===0)s.innerHTML=`<h4>Chi sei</h4>
        <p>Il metabolismo si calcola diversamente.</p>
        ${p("sex",[{v:"male",l:"Uomo"},{v:"female",l:"Donna"}],e.sex)}
        ${h("obAge","Quanti anni hai",e.age,"es. 23","Il metabolismo cala con gli anni.")}`;else if(o===1)s.innerHTML=`<h4>Quanto sei alto</h4>
        <p>Serve per il metabolismo a riposo.</p>
        ${h("obH","Centimetri",e.heightCm,"es. 181","Si imposta una volta sola.")}`;else if(o===2)s.innerHTML=`<h4>Quanto pesi oggi</h4>
        <p>È il dato che cambia più spesso, e quello che dice se il numero funziona.</p>
        ${h("obW","Chilogrammi",e.weightKg,"es. 78,4","Aggiornalo quando ti pesi.")}`;else if(o===3){const t=[200,350,500];s.innerHTML=`<h4>Cosa vuoi che succeda</h4>
        <p>Su questo MetaMap toglie o aggiunge al tuo numero. Sono chilocalorie al giorno, e le scegli tu.</p>
        ${p("goal",[{v:"deficit",l:"Perdere grasso",s:"tolgo dal tuo numero"},{v:"maintenance",l:"Restare così",s:"nessuno scostamento"},{v:"surplus",l:"Mettere massa",s:"aggiungo al tuo numero"}],e.goal)}
        <div class="qf" id="deltaBox" style="${e.goal==="maintenance"?"display:none":""}">
          <label>Di quanto, al giorno</label>
          <div class="opt4" data-group="delta">
            ${t.map(l=>`<button data-v="${l}" class="${e.delta===l?"on":""}"><b>${l} kcal</b></button>`).join("")}
            <button data-v="custom" class="${e.delta&&!t.includes(e.delta)?"on":""}"><b>Altro</b></button>
          </div>
          <input class="obig" id="obDelta" inputmode="numeric" value="${e.delta??""}" placeholder="es. 350">
          <div class="why2">Puoi cambiarlo quando vuoi, anche solo per un giorno.</div>
        </div>`}else{const t=[0,1,2,3,4,5,6].map(l=>{const n=_(f(),l);return{v:n,l:l===0?"Oggi":$(n).split(" ")[0],s:$(n).replace(/^\S+\s/,"")}});s.innerHTML=`<h4>Quando comincia il tuo ciclo</h4>
        <p>Scegli il primo giorno. Da lì contano allenamenti e recuperi.</p>
        ${p("start",t,e.startDate)}`}s.querySelectorAll(".opt4 button").forEach(t=>{t.onclick=()=>{const l=t.closest(".opt4").dataset.group;s.querySelectorAll(`.opt4[data-group="${l}"] button`).forEach(a=>a.classList.remove("on")),t.classList.add("on");const n=t.dataset.v;if(l==="goal"){const a=s.querySelector("#deltaBox");a&&(a.style.display=n==="maintenance"?"none":"")}if(l==="delta"&&n!=="custom"){const a=s.querySelector("#obDelta");a&&(a.value=String(n))}}})}function D(){const t=n=>s.querySelector(`.opt4[data-group="${n}"] button.on`)?.dataset.v??null,l=n=>{const a=s.querySelector("#"+n)?.value??"",d=parseFloat(a.replace(",","."));return Number.isFinite(d)?d:null};if(o===0)return e.sex=t("sex")??e.sex,e.age=l("obAge")??e.age,!!e.sex&&!!e.age;if(o===1)return e.heightCm=l("obH")??e.heightCm,!!e.heightCm;if(o===2)return e.weightKg=l("obW")??e.weightKg,!!e.weightKg;if(o===3){e.goal=t("goal")??e.goal;const n=s.querySelector("#obDelta")?.value??"",a=parseInt(n.replace(/\D/g,""),10);return e.delta=Number.isFinite(a)?a:e.delta,e.goal==="maintenance"?(e.delta=0,!0):!!e.goal&&!!e.delta}return e.startDate=t("start")??e.startDate,!0}g.onclick=()=>{if(!D()){g.textContent="Manca un dato",setTimeout(()=>g.textContent=o===u-1?"Fatto":"Avanti",1200);return}if(o<u-1){o++,v();return}i.sex=e.sex??"male",i.age=e.age??30,i.heightCm=e.heightCm??175,i.weightKg=e.weightKg??75,i.goalMode=e.goal??"maintenance",i.goalDeltaKcal=Math.abs(e.delta??0),i.daySurplus=null,m.startDate=e.startDate,localStorage.setItem(b,"1"),x(),q(()=>import("./index-CzF9L4Ks.js").then(t=>t.Q),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.salvaProfilo({sex:i.sex,age:i.age,height_cm:i.heightCm,weight_kg:i.weightKg,goal_mode:i.goalMode,goal_delta_kcal:i.goalDeltaKcal,cycle:{startDate:m.startDate,lengthDays:m.lengthDays,slots:m.slots}})),c.remove(),r()},y.onclick=()=>{o>0&&(o--,v())},v()}export{I as needsOnboarding,K as startOnboarding};
