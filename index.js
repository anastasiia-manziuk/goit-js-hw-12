import{a as l,S as c,i as u}from"./assets/vendor-CYMld6vM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();function p(o){return l.get("https://pixabay.com/api/",{params:{key:"52365869-dd7c55ea3ac5eab5a979f8f09",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(r=>r.data.hits).catch(r=>console.error(r))}const f=new c(".gallery a");function m(o){const r=o.map(t=>`<li class="gallery-item"><a href="${t.largeImageURL}">
                <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}"/>
                </a>
                <ul class="info">
                    <li class="info-item">
                    <p class="text">Likes:</p>
                    <span class="number">${t.likes}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Views:</p>
                    <span class="number">${t.views}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Comments:</p>
                    <span class="number">${t.comments}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Downloads:</p>
                    <span class="number">${t.downloads}</span>
                    </li>

                </ul>
                </li>`).join("");document.querySelector(".gallery").innerHTML=r,f.refresh()}function d(){document.querySelector(".gallery").innerHTML=""}function y(){document.querySelector(".loader").classList.add("is-open")}function h(){document.querySelector(".loader").classList.remove("is-open")}const g=document.querySelector(".search-input"),i=document.querySelector(".form");function L(o){o.preventDefault();const r=g.value.trim();r.length&&(d(),y(),p(r).then(t=>{t.length===0?u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):m(t)}).catch(t=>{console.error(t)}).finally(()=>{h(),i.reset()}))}i.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
