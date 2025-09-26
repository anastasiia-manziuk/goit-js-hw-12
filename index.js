import{a as y,S as w,i as n}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();async function d(s,o){try{return(await y.get("https://pixabay.com/api/",{params:{key:"52365869-dd7c55ea3ac5eab5a979f8f09",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}catch(e){throw console.error(e),e}}const L=new w(".gallery a");function m(s){const o=s.map(e=>`<li class="gallery-item"><a href="${e.largeImageURL}">
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
                </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",o),L.refresh()}function b(){document.querySelector(".gallery").innerHTML=""}function f(){document.querySelector(".loader").classList.add("is-open")}function p(){document.querySelector(".loader").classList.remove("is-open")}function g(){document.querySelector(".load-more-btn").classList.remove("is-hidden")}function a(){document.querySelector(".load-more-btn").classList.add("is-hidden")}const S=document.querySelector(".search-input"),q=document.querySelector(".form");let i=1,h=15,u="";async function v(s){s.preventDefault();const o=S.value.trim();if(i=1,a(),!o.length){n.error({position:"topRight",message:"Please fill out this field."});return}o!==u&&(b(),u=o),f();try{const{hits:e,totalHits:l}=await d(o,i);if(e.length===0)n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),a();else{m(e);const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),i*h<l?g():(a(),n.info({message:"No more images to load"}))}}catch(e){console.error(e),n.error({position:"topRight",message:"Oops! Something went wrong. Please try again."})}finally{p()}}async function P(){i++,a(),f();try{const{hits:s,totalHits:o}=await d(u,i);m(s);const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),i*h<o?g():(a(),n.info({message:"No more images to load"}))}catch(s){console.error(s),n.error({position:"topRight",message:"Oops! Something went wrong. Please try again."})}finally{p()}}q.addEventListener("submit",v);document.querySelector(".load-more-btn").addEventListener("click",P);
//# sourceMappingURL=index.js.map
