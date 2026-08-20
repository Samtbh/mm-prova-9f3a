const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CMqsUL5e.js","./index-DiOXs-su.css"])))=>i.map(i=>d[i]);
import{_ as r}from"./index-CMqsUL5e.js";const u="https://meta-map.it/termini-studio";function p(){const e=document.getElementById("qSheet"),o=document.getElementById("qBody"),t=document.getElementById("qSave"),n=document.getElementById("qCancel");if(!e||!o||!t||!n)return Promise.resolve(!1);document.getElementById("qTitle").textContent="Prima di attivare Studio",document.getElementById("qSub").textContent="È il piano con cui puoi farti pagare. Due conferme, e nessuna è già spuntata.",o.innerHTML=`<label class="gate-ok"><input type="checkbox" id="tsUno">
       <span>Accetto i <a href="${u}" target="_blank" rel="noopener">termini del
         piano Studio</a>.</span></label>
     <label class="gate-ok"><input type="checkbox" id="tsDue">
       <span>Approvo in modo specifico le clausole <i>Qualifiche e limiti
         professionali</i>, <i>Responsabilità</i> (con manleva) e <i>Natura
         dello strumento</i>.</span></label>
     <p class="mn-p">Lavorare con MetaMap vuol dire restare dentro le tue
       abilitazioni: il software si comporta di conseguenza.</p>
     <div class="mn-msg" id="tsMsg"></div>`;const i=document.getElementById("tsUno"),s=document.getElementById("tsDue");return t.textContent="Accetto e continuo",new Promise(c=>{const a=l=>{e.classList.remove("on"),t.onclick=null,n.onclick=null,c(l)};t.onclick=async()=>{if(!i.checked||!s.checked){document.getElementById("tsMsg").textContent="Servono tutte e due: senza, il piano non si attiva.";return}await d(),a(!0)},n.onclick=()=>a(!1),e.classList.add("on")})}async function d(){try{const{sb:e}=await r(async()=>{const{sb:n}=await import("./index-CMqsUL5e.js").then(i=>i.J);return{sb:n}},__vite__mapDeps([0,1]),import.meta.url),{data:o}=await e.auth.getUser();if(!o.user)return;await e.auth.updateUser({data:{studio_termini:new Date().toISOString(),studio_clausole:new Date().toISOString()}})}catch{}}export{p as chiediAccettazioni};
