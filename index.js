import{a as h,S as w,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function d(s,o){try{return(await h.get("https://pixabay.com/api/",{params:{key:"52365869-dd7c55ea3ac5eab5a979f8f09",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(e){throw console.error(e),e}}const L=new w(".gallery a");function m(s){const o=s.map(e=>`<li class="gallery-item"><a href="${e.largeImageURL}">
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
                </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",o),L.refresh()}function b(){document.querySelector(".gallery").innerHTML=""}function f(){document.querySelector(".loader").classList.add("is-open")}function p(){document.querySelector(".loader").classList.remove("is-open")}function g(){document.querySelector(".load-more-btn").classList.remove("is-hidden")}function l(){document.querySelector(".load-more-btn").classList.add("is-hidden")}const S=document.querySelector(".search-input"),q=document.querySelector(".form");let n=1,y=15,u="";async function v(s){s.preventDefault();const o=S.value.trim();if(n=1,l(),!o.length){i.error({position:"topRight",message:"Please fill out this field."});return}o!==u&&(b(),u=o),f();try{const{hits:e,totalHits:a}=await d(o,n);if(e.length===0)i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),l();else{m(e);const t=document.querySelector(".gallery .gallery-item");if(t){const r=t.offsetHeight;window.scrollBy({top:r*2,behavior:"smooth"})}n*y<a?g():(l(),i.info({message:"No more images to load"}))}}catch(e){console.error(e),i.error({position:"topRight",message:"Oops! Something went wrong. Please try again."})}finally{p()}}async function P(){n++,l(),f();try{const{hits:s,totalHits:o}=await d(u,n);m(s);const e=document.querySelector(".gallery .gallery-item");if(e){const a=e.offsetHeight;window.scrollBy({top:a*2,behavior:"smooth"})}n*y<o?g():(l(),i.info({message:"No more images to load"}))}catch(s){console.error(s),i.error({position:"topRight",message:"Oops! Something went wrong. Please try again."})}finally{p()}}q.addEventListener("submit",v);document.querySelector(".load-more-btn").addEventListener("click",P);
//# sourceMappingURL=index.js.map
