const e={select:document.querySelector(".breed-select"),loader:document.querySelector(".loader"),error:document.querySelector(".error"),catInfo:document.querySelector(".cat-info")};e.select.addEventListener("change",(function(e){console.log(e)})),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_G6HU5UlJSCzt5yX2Lg8W5guuU2d8jOPOBK1FMP99fTig1AgXXT0JnSc4eKqbDboB"}}).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((t=>{e.select.insertAdjacentHTML("beforeend",t.map((({id:e,name:t})=>`<option value="${e}">${t}</option>`)).join(""))})).catch((t=>console.error(e.error.textContent)));
//# sourceMappingURL=index.fbdfaef0.js.map
