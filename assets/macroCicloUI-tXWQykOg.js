const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-CtKcvdcs.js","./index-CmEEG52E.css"])))=>i.map(i=>d[i]);
import{a as C,_ as x,i as v}from"./index-CtKcvdcs.js";import{premi as M}from"./premiUI-Don-2CHT.js";const k="mm2_macro_kg",_=2,h=80;function u(){try{return JSON.parse(localStorage.getItem(k)||"null")??{p:null,c:null,g:null}}catch{return{p:null,c:null,g:null}}}function S(e){localStorage.setItem(k,JSON.stringify(e)),x(()=>import("./index-CtKcvdcs.js").then(n=>n.L),__vite__mapDeps([0,1]),import.meta.url).then(async n=>{try{const o={...n.profilo?.()?.prefs??{},macro_kg:e};await n.salvaProfilo({prefs:o})}catch{}})}function q(){if(C()!=="free")return{aperta:!0,perche:"",mancano:0};const e=M(),n=e?.punti??0;return(e?.livello??0)>=_||n>=h?{aperta:!0,perche:"aperta col grado Costanza",mancano:0}:{aperta:!1,perche:"Si apre al grado Costanza, chiudendo le giornate.",mancano:Math.max(0,h-n)}}function w(e){const n=u();if(!n.p&&!n.c&&!n.g)return null;const t=o=>o?Math.round(o*e):0;return{p:t(n.p),c:t(n.c),g:t(n.g)}}const i=e=>document.getElementById(e),s=e=>e===null?"—":String(e).replace(".",","),b=[{k:"p",nome:"Proteine",sotto:"Quanti grammi per chilo di peso",min:.8,max:3.5},{k:"c",nome:"Carboidrati",sotto:"Quanti grammi per chilo di peso",min:.5,max:9},{k:"g",nome:"Grassi",sotto:"Quanti grammi per chilo di peso",min:.4,max:2.5}];function f(){const e=i("macroCiclo");if(!e)return;const n=u(),t=q(),o=Number(v.weightKg||0),c=w(o),l=b.map(a=>`
    <div class="g-row mk-row" data-k="${a.k}">
      <div class="t"><b>${a.nome}</b><span>${a.sotto}</span></div>
      <span class="val">${s(n[a.k])}${n[a.k]?" g/kg":""}</span>
      ${t.aperta?"":`<span class="mk-lucchetto" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.2"/>
          <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg></span>`}
    </div>`).join("");if(e.innerHTML=`
    <h3>Grammi per chilo</h3>
    <p class="mk-int">Scritti come li scrive chi si allena: <b>1,7 g/kg</b>, non «136 g».
      Restano giusti anche quando il peso cambia.</p>
    <div class="grp mk-grp${t.aperta?"":" chiuso"}">${l}</div>
    ${c&&t.aperta?`<p class="mk-oggi">Con i tuoi <b>${o} kg</b> di oggi:
          <b>${c.p} g</b> di proteine · <b>${c.c} g</b> di carboidrati ·
          <b>${c.g} g</b> di grassi.</p>`:""}
    ${t.aperta?"":`
      <div class="mk-chiuso">
        <span class="mn-et">Bloccata</span>
        <b>Si apre al grado Costanza</b>
        <em>${t.mancano>0?`Ti mancano <b>${t.mancano} punti</b>: li prendi chiudendo le giornate — 5 se chiudi in linea, 2 comunque.`:"Chiudi ancora qualche giornata e si apre."}</em>
        <button class="dg-btn" id="mkPiani">Oppure passa a Start</button>
      </div>`}
  `,!t.aperta){i("mkPiani").onclick=()=>window.MetaMap.vaiA("piani");return}e.querySelectorAll(".mk-row").forEach(a=>{a.style.cursor="pointer",a.onclick=()=>y(a.dataset.k)})}function y(e){const n=b.find(r=>r.k===e),t=u(),o=i("qSheet"),c=i("qBody"),l=i("qSave");if(!o||!c||!l)return;const a=i("qEt");a&&(a.textContent="Ciclo",a.hidden=!1),i("qTitle").textContent=`${n.nome}: grammi per chilo`,i("qSub").textContent="Vuoto vuol dire: lascia decidere a MetaMap.",c.innerHTML=`
    <label class="mn-l" for="mkIn">Grammi per chilo di peso</label>
    <input class="mn-i" id="mkIn" type="number" inputmode="decimal" step="0.1"
           value="${t[e]??""}" placeholder="es. ${e==="p"?"1,8":e==="c"?"3,5":"0,9"}">
    <p class="mn-eco" id="mkEco"></p>
    <div class="mn-msg" id="mkMsg"></div>`;const m=i("mkIn"),$=i("mkEco"),g=Number(v.weightKg||0),d=()=>{const r=Number(m.value.replace(",","."));$.textContent=m.value.trim()?r<n.min||r>n.max?`⚠️ ${s(r)} g/kg è fuori da quello che ha senso (${s(n.min)}–${s(n.max)}).`:`Con ${g} kg fanno ${Math.round(r*g)} g al giorno.`:"Lo decide MetaMap."};m.oninput=d,d(),l.textContent="Salva",l.onclick=()=>{const r=m.value.trim().replace(",","."),p=Number(r);if(r&&(!Number.isFinite(p)||p<n.min||p>n.max)){i("mkMsg").textContent=`Dev'essere fra ${s(n.min)} e ${s(n.max)}, o vuoto.`;return}S({...t,[e]:r?p:null}),o.classList.remove("on"),f()},i("qCancel").onclick=()=>o.classList.remove("on"),o.classList.add("on")}function P(){window.addEventListener("mm2:premi",()=>f())}export{f as paintMacroCiclo,P as seguiIPunti};
