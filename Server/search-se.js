
     var loacol_thum = "false";       

function truncateWithEllipseds(text, max) {    return text.substr(0,max-1)+(text.length>max?'&hellip;':''); }
function truncate(input) {   return truncateWithEllipseds(input, 45);  };  



var fcasmdplex_loadex = { open: function (dss) {  return location.href.split(dss)[1]; }, openex:{ url: function () {  return "?url="; }, server: function () {  return "?server/file="; } }  }; 
  
  function fmdplex_loadex_txv(t){  if(t==""){    return "";  }   if(t=="undefined"){    return "";  }     if(t==undefined){    return "";  }   else {  return t; }  }   
  
  function searcha(nameKey, myArray, vff){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i][0] == nameKey) {
            return vff(myArray[i]);
        }
    }
}

  

function shuffle(array) {
var ul = array;
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}
}


function mspl_search_list(d){   var sdddResultsinput = document.getElementById("Results_search_f");   var search_input, search_filter, list_ul, itens_li, resul_a, itens_id, txt_res_Value;    search_input = document.getElementById("q");    search_filter = search_input.value.toUpperCase();    list_ul = document.getElementById("f_list_filesaaa");    itens_li = list_ul.getElementsByTagName("a");   var lResultiCount = 0;   for (itens_id = 0; itens_id < itens_li.length; itens_id++) {    itens_li[itens_id].style.display = "none";    resul_a = itens_li[itens_id];        txt_res_Value = resul_a.textContent || resul_a.innerText;        if (txt_res_Value.toUpperCase().indexOf(search_filter) > -1 || search_filter=="*.*") {          if(search_input.value=="" || search_input.value=="undefined" || search_input.value==undefined){   itens_li[itens_id].style.display = "none";  }  else{     itens_li[itens_id].style.display = "";   lResultiCount++;    }     } else {            itens_li[itens_id].style.display = "none";        }     }   var liCount_Results=lResultiCount + " Results Found";  if(liCount_Results=="0 Results Found"){  var liCount_Results="No" + " Results Found";    }   if(search_input.value=="" || search_input.value=="undefined" || search_input.value==undefined){  var liCount_Results="";  }   if(search_filter=="*.*") {  if(liCount_Results=="No Results Found"){ var liCount_Results=""; }   }     sdddResultsinput.innerHTML=liCount_Results; 
shuffle(list_ul);                              
}
  
function mspl_search_clet(d){  var search_input = document.getElementById("q");  search_input.value=""; mspl_search_list(d);   }

  

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}





var adr = {
search: function(event){
    event.preventDefault();

     var target = document.getElementById("output");

    var book = server_fs_itens;

    var count = book.length;
    var searchValue = document.getElementById('q');
    //var i, isItFound;
    target.innerHTML = "";

            var vobjd=searcha(searchValue.value, server_fs_itens, function(f){
              var target = document.getElementById("output");
target.innerHTML += '<p>' + "" + '<a href="' + f[1] + '">'+ f[0] +'</a></p>'; 
            });


}
};


