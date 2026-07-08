const langSelect=document.querySelector('#language-select');
const backButton=document.querySelector('#back-to-menu');
function applyLanguage(lang){menuL10n.set(lang);langSelect.value=menuL10n.language;search.placeholder=menuL10n.ui('search');renderTabs();render()}
langSelect.addEventListener('change',()=>applyLanguage(langSelect.value));

const menuTarget=document.querySelector('#menu-filters');
const observer=new IntersectionObserver(([entry])=>backButton.classList.toggle('show',!entry.isIntersecting),{threshold:0});
observer.observe(menuTarget);
applyLanguage(menuL10n.language);
