

var targf_list_filesaaaet = document.getElementById("f_list_filesaaa");  targf_list_filesaaaet.innerHTML=""+targf_ddlist_filesaaaet;
var targf_list_fidsflesaaaet = document.getElementById("q");  targf_list_fidsflesaaaet.value=fmdplex_loadex_txv(decodeURIComponent(fcasmdplex_loadex.open("?q=").replace(/\+/g,  " ")));    mspl_search_list();
var tadrgf_list_fidsflesaaaet = document.getElementById("f_mfdval_Input");   document.title="FS Player - Online: Search: "+targf_list_fidsflesaaaet.value;
//tadrgf_list_fidsflesaaaet.onsubmit=function(){location.href="https://fcasfs-of.github.io/Player/Server/search.htm?q="+targf_list_fidsflesaaaet.value;};


var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

filterSelection("all");


