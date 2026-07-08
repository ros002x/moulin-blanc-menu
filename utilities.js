const langSelect=document.querySelector('#language-select');
const shareButton=document.querySelector('#share-menu');
const backButton=document.querySelector('#back-to-menu');
const toast=document.querySelector('#utility-toast');
const menuUrl='https://ros002x.github.io/moulin-blanc-menu/';

function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>toast.classList.remove('show'),2200)}

function applyLanguage(lang){menuL10n.set(lang);langSelect.value=menuL10n.language;search.placeholder=menuL10n.ui('search');renderTabs();render();document.querySelector('.share-action span').textContent={it:'Condividi',en:'Share',de:'Teilen',fr:'Partager'}[lang]||'Condividi'}
langSelect.addEventListener('change',()=>applyLanguage(langSelect.value));

shareButton.addEventListener('click',async()=>{
  const data={title:'Moulin Blanc — Menu',text:'Scopri il menu della Pizzeria Moulin Blanc a Nova Siri.',url:menuUrl};
  try{if(navigator.share){await navigator.share(data)}else{await navigator.clipboard.writeText(menuUrl);showToast('Link del menu copiato')}}catch(error){if(error.name!=='AbortError')showToast('Impossibile condividere il link')}
});

const menuTarget=document.querySelector('#menu-filters');
const observer=new IntersectionObserver(([entry])=>backButton.classList.toggle('show',!entry.isIntersecting),{threshold:0});
observer.observe(menuTarget);
applyLanguage(menuL10n.language);
