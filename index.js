import{a as h,S as w,i as a}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();async function m(s,r){try{return(await h.get("https://pixabay.com/api/",{params:{key:"52365869-dd7c55ea3ac5eab5a979f8f09",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(e){throw console.error(e),e}}const b=new w(".gallery a");function d(s){const r=s.map(e=>`<li class="gallery-item"><a href="${e.largeImageURL}">
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
                </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",r),b.refresh()}function L(){document.querySelector(".gallery").innerHTML=""}function f(){document.querySelector(".loader").classList.add("is-open")}function p(){document.querySelector(".loader").classList.remove("is-open")}function S(){document.querySelector(".load-more-btn").classList.remove("is-hidden")}function g(){document.querySelector(".load-more-btn").classList.add("is-hidden")}const q=document.querySelector(".search-input"),y=document.querySelector(".form");let n=1,l=15,u="";async function I(s){s.preventDefault();const r=q.value.trim();if(n=1,!r.length){a.error({position:"topRight",message:"Please fill out this field."});return}r!==u&&(L(),u=r,y.reset()),f();try{const{hits:e,totalHits:i}=await m(r,n);if(e.length===0)a.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});else{d(e);const t=document.querySelectorAll(".gallery .gallery-item");n>1&&t.length>0&&t[(n-1)*l].scrollIntoView({behavior:"smooth",block:"start"}),S(),e.length<l&&(g(),a.info({message:"No more images to load"}))}}catch(e){console.error(e),a.error({position:"topRight",message:"Oops! Something went wrong. Please try again."})}finally{p()}}async function v(){n++,f();try{const{hits:s,totalHits:r}=await m(u,n);d(s);const e=document.querySelectorAll(".gallery .gallery-item");n>1&&e.length>0&&e[(n-1)*l].scrollIntoView({behavior:"smooth",block:"start"}),s.length<l&&(g(),a.info({message:"No more images to load"}))}catch(s){console.error(s),a.error({position:"topRight",message:"Oops! Something went wrong. Please try again."})}finally{p()}}y.addEventListener("submit",I);document.querySelector(".load-more-btn").addEventListener("click",v);
//# sourceMappingURL=index.js.map
