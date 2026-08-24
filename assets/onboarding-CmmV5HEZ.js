const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-DB7yD0kK.js","./index-DfQ7o_Qt.css"])))=>i.map(i=>d[i]);
import{K as $,j as s,L as v,M as q,_ as M,I as C}from"./index-DB7yD0kK.js";const h="mm2_onboarded";function K(d){if(d){const e=!!(d.age&&d.height_cm&&d.weight_kg);return e?localStorage.setItem(h,"1"):localStorage.removeItem(h),!e}return!localStorage.getItem(h)}const _=["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],w=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"],S=d=>{const[e,a,u]=d.split("-").map(Number);return`${w[new Date(e,a-1,u).getDay()]} ${u} ${_[a-1]}`};function L(d){const e={sex:null,age:null,heightCm:null,weightKg:null,goal:null,delta:null,startDate:$()};let a=0;const u=5;let g="intro";const c=document.createElement("div");c.className="onb",c.innerHTML=`<div class="obox">
    <div class="obar"><i id="obProg"></i></div>
    <div id="obBody"></div>
    <div class="ofoot">
      <button class="btn-line" id="obBack" style="flex:1">Indietro</button>
      <button class="btn" id="obNext">Avanti</button>
    </div>
  </div>`,document.body.appendChild(c);const l=c.querySelector("#obBody"),m=c.querySelector("#obNext"),p=c.querySelector("#obBack"),D=c.querySelector("#obProg"),f=(i,n,t)=>`<div class="opt4" data-group="${i}">${n.map(o=>`<button data-v="${o.v}" class="${o.v===t?"on":""}"><b>${o.l}</b>${o.s?`<span>${o.s}</span>`:""}</button>`).join("")}</div>`,y=(i,n,t,o,r)=>`<div class="qf"><label>${n}</label>
      <input class="obig" id="${i}" inputmode="decimal" value="${t??""}" placeholder="${o}">
      <div class="why2">${r}</div></div>`;function b(){const i=c.querySelector(".obar");if(g==="intro"){i&&(i.hidden=!0),p.hidden=!0,m.textContent="Inizia",l.innerHTML=`<div class="ob-dice">
        <div class="ob-oc">MetaMap</div>
        <h4 class="ob-t">Salti un giorno.<br>E poi molli.</h4>
        <p class="ob-p">Non serve più disciplina. Serve un numero che si rifà da
          solo quando la giornata non va come doveva.</p>
        <p class="ob-p ob-min">Cinque domande. Un minuto.</p>
      </div>`;return}if(g==="fine"){i&&(i.hidden=!0),p.hidden=!0,m.textContent="Vedi il numero",l.innerHTML=`<div class="ob-dice">
        <div class="ob-oc">Pronto</div>
        <h4 class="ob-t">Fatto.</h4>
        <p class="ob-p">Il tuo numero ti aspetta su Oggi.</p>
        <p class="ob-p">Registra cosa mangi. Chiudi la giornata.<br>
          Domani si aggiorna da solo.</p>
      </div>`;return}if(i&&(i.hidden=!1),p.hidden=!1,D.style.width=`${(a+1)/u*100}%`,p.style.visibility=a===0?"hidden":"visible",m.textContent=a===u-1?"Fatto":"Avanti",a===0)l.innerHTML=`<h4>Chi sei</h4>
        <p>Il metabolismo si calcola diversamente.</p>
        ${f("sex",[{v:"male",l:"Uomo"},{v:"female",l:"Donna"}],e.sex)}
        ${y("obAge","Quanti anni hai",e.age,"es. 23","Il metabolismo cala con gli anni.")}`;else if(a===1)l.innerHTML=`<h4>Quanto sei alto</h4>
        <p>Serve per il metabolismo a riposo.</p>
        ${y("obH","Centimetri",e.heightCm,"es. 181","Si imposta una volta sola.")}`;else if(a===2)l.innerHTML=`<h4>Quanto pesi oggi</h4>
        <p>È il dato che cambia più spesso, e quello che dice se il numero funziona.</p>
        ${y("obW","Chilogrammi",e.weightKg,"es. 78,4","Aggiornalo quando ti pesi.")}`;else if(a===3){const n=[200,350,500];l.innerHTML=`<h4>Cosa vuoi che succeda</h4>
        <p>Su questo MetaMap toglie o aggiunge al tuo numero. Sono chilocalorie al giorno, e le scegli tu.</p>
        ${f("goal",[{v:"deficit",l:"Perdere grasso",s:"tolgo dal tuo numero"},{v:"maintenance",l:"Restare così",s:"nessuno scostamento"},{v:"surplus",l:"Mettere massa",s:"aggiungo al tuo numero"}],e.goal)}
        <div class="qf" id="deltaBox" style="${e.goal==="maintenance"?"display:none":""}">
          <label>Di quanto, al giorno</label>
          <div class="opt4" data-group="delta">
            ${n.map(t=>`<button data-v="${t}" class="${e.delta===t?"on":""}"><b>${t} kcal</b></button>`).join("")}
            <button data-v="custom" class="${e.delta&&!n.includes(e.delta)?"on":""}"><b>Altro</b></button>
          </div>
          <input class="obig" id="obDelta" inputmode="numeric" value="${e.delta??""}" placeholder="es. 350">
          <div class="why2">Puoi cambiarlo quando vuoi, anche solo per un giorno.</div>
        </div>`}else{const n=[0,1,2,3,4,5,6].map(t=>{const o=C($(),t);return{v:o,l:t===0?"Oggi":S(o).split(" ")[0],s:S(o).replace(/^\S+\s/,"")}});l.innerHTML=`<h4>Quando comincia il tuo ciclo</h4>
        <p>Scegli il primo giorno. Da lì contano allenamenti e recuperi.</p>
        ${f("start",n,e.startDate)}`}l.querySelectorAll(".opt4 button").forEach(n=>{n.onclick=()=>{const t=n.closest(".opt4").dataset.group;l.querySelectorAll(`.opt4[data-group="${t}"] button`).forEach(r=>r.classList.remove("on")),n.classList.add("on");const o=n.dataset.v;if(t==="goal"){const r=l.querySelector("#deltaBox");r&&(r.style.display=o==="maintenance"?"none":"")}if(t==="delta"&&o!=="custom"){const r=l.querySelector("#obDelta");r&&(r.value=String(o))}}})}function x(){const i=t=>l.querySelector(`.opt4[data-group="${t}"] button.on`)?.dataset.v??null,n=t=>{const o=l.querySelector("#"+t)?.value??"",r=parseFloat(o.replace(",","."));return Number.isFinite(r)?r:null};if(a===0)return e.sex=i("sex")??e.sex,e.age=n("obAge")??e.age,!!e.sex&&!!e.age;if(a===1)return e.heightCm=n("obH")??e.heightCm,!!e.heightCm;if(a===2)return e.weightKg=n("obW")??e.weightKg,!!e.weightKg;if(a===3){e.goal=i("goal")??e.goal;const t=l.querySelector("#obDelta")?.value??"",o=parseInt(t.replace(/\D/g,""),10);return e.delta=Number.isFinite(o)?o:e.delta,e.goal==="maintenance"?(e.delta=0,!0):!!e.goal&&!!e.delta}return e.startDate=i("start")??e.startDate,!0}m.onclick=()=>{if(g==="intro"){g="dati",b();return}if(g==="fine"){c.remove(),d();return}if(!x()){m.textContent="Manca un dato",setTimeout(()=>m.textContent=a===u-1?"Fatto":"Avanti",1200);return}if(a<u-1){a++,b();return}s.sex=e.sex??"male",s.age=e.age??30,s.heightCm=e.heightCm??175,s.weightKg=e.weightKg??75,s.goalMode=e.goal??"maintenance",s.goalDeltaKcal=Math.abs(e.delta??0),s.daySurplus=null,v.startDate=e.startDate,localStorage.setItem(h,"1"),q(),M(()=>import("./index-DB7yD0kK.js").then(i=>i.R),__vite__mapDeps([0,1]),import.meta.url).then(i=>i.salvaProfilo({sex:s.sex,age:s.age,height_cm:s.heightCm,weight_kg:s.weightKg,goal_mode:s.goalMode,goal_delta_kcal:s.goalDeltaKcal,cycle:{startDate:v.startDate,lengthDays:v.lengthDays,slots:v.slots}})),g="fine",b()},p.onclick=()=>{a>0&&(a--,b())},b()}export{K as needsOnboarding,L as startOnboarding};
