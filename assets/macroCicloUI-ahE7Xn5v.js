const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./index-Bs2UOTia.js","./index-DfQ7o_Qt.css"])))=>i.map(i=>d[i]);
import{a as $,_ as C,j as h,i as x}from"./index-Bs2UOTia.js";import{premi as M}from"./premiUI-BGp7Nn89.js";const v="mm2_macro_kg",_=2,d=80;function p(){try{return JSON.parse(localStorage.getItem(v)||"null")??{p:null,c:null,g:null}}catch{return{p:null,c:null,g:null}}}function S(a){localStorage.setItem(v,JSON.stringify(a)),C(()=>import("./index-Bs2UOTia.js").then(n=>n.R),__vite__mapDeps([0,1]),import.meta.url).then(async n=>{try{const o={...n.profilo?.()?.prefs??{},macro_kg:a};await n.salvaProfilo({prefs:o})}catch{}})}function w(){if($()!=="free")return{aperta:!0,perche:"",mancano:0};const a=M(),n=a?.punti??0;return(a?.livello??0)>=_||n>=d?{aperta:!0,perche:"aperta col grado Costanza",mancano:0}:{aperta:!1,perche:"Si apre al grado Costanza, chiudendo le giornate.",mancano:Math.max(0,d-n)}}function q(a){const n=p();if(!n.p&&!n.c&&!n.g)return null;const e=o=>o?Math.round(o*a):0;return{p:e(n.p),c:e(n.c),g:e(n.g)}}const i=a=>document.getElementById(a),s=a=>a===null?"—":String(a).replace(".",","),k=[{k:"p",nome:"Proteine",sotto:"Quanti grammi per chilo di peso",min:.8,max:3.5},{k:"c",nome:"Carboidrati",sotto:"Quanti grammi per chilo di peso",min:.5,max:9},{k:"g",nome:"Grassi",sotto:"Quanti grammi per chilo di peso",min:.4,max:2.5}];function b(){const a=i("macroCiclo");if(!a)return;const n=p(),e=w(),o=Number(h.weightKg||0),c=q(o),l=k.map(t=>`
    <div class="g-row mk-row" data-k="${t.k}">
      <div class="t"><b>${t.nome}</b><span>${t.sotto}</span></div>
      <span class="val">${s(n[t.k])}${n[t.k]?" g/kg":""}</span>
      ${e.aperta?"":`<span class="mk-lucchetto" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
          <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.2"/>
          <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/></svg></span>`}
    </div>`).join("");if(a.innerHTML=`
    <h3>Grammi per chilo</h3>
    <p class="mk-int">Scritti come li scrive chi si allena: <b>1,7 g/kg</b>, non «136 g».
      Restano giusti anche quando il peso cambia.</p>
    <div class="grp mk-grp${e.aperta?"":" chiuso"}">${l}</div>
    ${c&&e.aperta?`<p class="mk-oggi">Con i tuoi <b>${o} kg</b> di oggi:
          <b>${c.p} g</b> di proteine, <b>${c.c} g</b> di carboidrati,
          <b>${c.g} g</b> di grassi.</p>`:""}
    ${e.aperta?"":`
      <div class="mk-chiuso">
        <span class="mn-et">Bloccata</span>
        <b>Si apre al grado Costanza</b>
        <em>${e.mancano>0?`Ti mancano <b>${e.mancano} punti</b>: li prendi chiudendo le giornate: 5 se chiudi in linea, 2 comunque.`:"Chiudi ancora qualche giornata e si apre."}</em>
        <button class="dg-btn" id="mkPiani">Oppure passa a Start</button>
      </div>`}
  `,!e.aperta){i("mkPiani").onclick=()=>window.MetaMap.vaiA("piani");return}a.querySelectorAll(".mk-row").forEach(t=>{t.style.cursor="pointer",t.onclick=()=>y(t.dataset.k)})}function y(a){const n=k.find(r=>r.k===a),e=p(),o=i("qSheet"),c=i("qBody"),l=i("qSave");if(!o||!c||!l)return;x("Ciclo"),i("qTitle").textContent=`${n.nome}: grammi per chilo`,i("qSub").textContent="Vuoto vuol dire: lascia decidere a MetaMap.",c.innerHTML=`
    <label class="mn-l" for="mkIn">Grammi per chilo di peso</label>
    <input class="mn-i" id="mkIn" type="number" inputmode="decimal" step="0.1"
           value="${e[a]??""}" placeholder="es. ${a==="p"?"1,8":a==="c"?"3,5":"0,9"}">
    <p class="mn-eco" id="mkEco"></p>
    <div class="mn-msg" id="mkMsg"></div>`;const t=i("mkIn"),f=i("mkEco"),u=Number(h.weightKg||0),g=()=>{const r=Number(t.value.replace(",","."));f.textContent=t.value.trim()?r<n.min||r>n.max?`⚠️ ${s(r)} g/kg è fuori da quello che ha senso (${s(n.min)}–${s(n.max)}).`:`Con ${u} kg fanno ${Math.round(r*u)} g al giorno.`:"Lo decide MetaMap."};t.oninput=g,g(),l.textContent="Salva",l.onclick=()=>{const r=t.value.trim().replace(",","."),m=Number(r);if(r&&(!Number.isFinite(m)||m<n.min||m>n.max)){i("mkMsg").textContent=`Dev'essere fra ${s(n.min)} e ${s(n.max)}, o vuoto.`;return}S({...e,[a]:r?m:null}),o.classList.remove("on"),b()},i("qCancel").onclick=()=>o.classList.remove("on"),o.classList.add("on")}function P(){window.addEventListener("mm2:premi",()=>b())}export{b as paintMacroCiclo,P as seguiIPunti};
