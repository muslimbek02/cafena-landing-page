window.addEventListener('DOMContentLoaded',()=>{
  loading=document.getElementById('loading');
  setTimeout(()=>{
      loading.style.opacity='0';
      setTimeout(()=>{
          loading.style.display="none";
      },500);
  },1500);
});
searchBtn=document.getElementById('search-btn');
searchForm=document.getElementById('search-form');
btnTop=document.getElementsByClassName('top-scroll');
function inputSearch(){
  if(searchForm.style.display==="flex"){
      searchForm.style.display="none";
  }
  else {
      searchForm.style.display="flex";
  }
};
function moveTop(){
  document.body.scrollTop=0;
  document.documentElement.scrollTop=0;
}
window.addEventListener('scroll',()=>{
  if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
  btnTop[0].classList.add('moveScroll');
} else {
  btnTop[0].classList.remove('moveScroll');
}
});