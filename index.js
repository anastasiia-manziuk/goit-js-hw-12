import{a as L,S as b,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();async function u(o,r){try{return(await L.get("https://pixabay.com/api/",{params:{key:"52365869-dd7c55ea3ac5eab5a979f8f09",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data.hits}catch(e){console.error(e)}}const q=new b(".gallery a");function d(o){const r=o.map(e=>`<li class="gallery-item"><a href="${e.largeImageURL}">
                <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"/>
                </a>
                <ul class="info">
                    <li class="info-item">
                    <p class="text">Likes:</p>
                    <span class="number">${e.likes}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Views:</p>
                    <span class="number">${e.views}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Comments:</p>
                    <span class="number">${e.comments}</span>
                    </li>

                    <li class="info-item">
                    <p class="text">Downloads:</p>
                    <span class="number">${e.downloads}</span>
                    </li>

                </ul>
                </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",r),q.refresh()}function S(){document.querySelector(".gallery").innerHTML=""}function m(){document.querySelector(".loader").classList.add("is-open")}function f(){document.querySelector(".loader").classList.remove("is-open")}function w(){document.querySelector(".load-more-btn").classList.remove("is-hidden")}function p(){document.querySelector(".load-more-btn").classList.add("is-hidden")}const y=document.querySelector(".search-input"),g=document.querySelector(".form");let a=1,h=15,l="";async function v(o){o.preventDefault();const r=y.value.trim();if(a=1,!!r.length){r!==l&&(S(),l=r,g.reset()),m();try{const e=await u(r,a);e.length===0?i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}):(d(e),w(),e.length<h&&(p(),i.info({message:"No more images to load"})))}catch(e){console.error(e)}finally{f()}}}async function x(){y.value.trim(),a++,m();try{const o=await u(l,a);d(o),o.length<h&&(p(),i.info({message:"No more images to load"}))}catch(o){console.error(o)}finally{f()}}g.addEventListener("submit",v);document.querySelector(".load-more-btn").addEventListener("click",x);
//# sourceMappingURL=index.js.map
