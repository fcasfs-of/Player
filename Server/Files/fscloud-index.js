
    var loacol_thum = "true";                 

function truncateWithEllipses(text, max) {    return text.substr(0,max-1)+(text.length>max?'&hellip;':''); }       
function truncgate(input) {   return truncateWithEllipses(input, 100);   }  

function si_thud(inputz) {       var zsi_thudsss="";//<img class=\"fa\" style='display:none;'/>";     
  if(loacol_thum=="true"){ zsi_thudsss=inputz; }     return zsi_thudsss;   }    

function si_thudicon(zzz, inputz, inddputz) {   var zsi_tddddfdfdhudsss="";    var zsi_tdfdfdhudsss="";    var zsid_fdtdfdfdhudsss="";  var zsi_thudsss="fl";     
    if(inputz=="fil"){  zsid_fdtdfdfdhudsss="data-tip='File: '";  }   if(inputz=="text"){ zsi_thudsss="tx";  zsid_fdtdfdfdhudsss="data-tip='Text: '";  }   if(inputz=="photo"){ zsi_thudsss="pic";  zsid_fdtdfdfdhudsss="data-tip='Photo: '";  }  if(inputz=="document"){ zsi_thudsss="doc";   zsid_fdtdfdfdhudsss="data-tip='Document: '";  }  if(inputz=="music"){ zsi_thudsss="musi";  zsid_fdtdfdfdhudsss="data-tip='Áudio: '";    if(inddputz==true){ zsi_tdfdfdhudsss=" bt"; }  }  if(inputz=="video"){ zsi_thudsss="vid";  zsid_fdtdfdfdhudsss="data-tip='Video: '";    if(inddputz==true){ zsi_tdfdfdhudsss=" bt"; }  }   if(inputz=="play"){ zsi_thudsss="vf"; } 
if(zzz==true){  if(zsid_fdtdfdfdhudsss==""){  }  else  {zsi_tddddfdfdhudsss="tip";  }  }  
return { ty:{c:zsi_tddddfdfdhudsss,t:""+zsid_fdtdfdfdhudsss}, ic: ""+zsi_thudsss+zsi_tdfdfdhudsss};   }    



function add_fileset(zz,nm,aaa,m,bb,nn) {   var add_filesetsss=si_thudicon(aaa,zz,nm);      
    return '<li class="'+add_filesetsss.ic+'"><a class="'+add_filesetsss.ty.c+'" style="display:none;" href="'+m+'">'+si_thud("<img src=\""+bb+"\" class=\"fa\"/>")+'<span '+add_filesetsss.ty.t+'>'+truncgate(nn)+'</span></a></li>';    }       


var loacol9d="https://fcasfs-of.github.io/Player/Server/Files/cloud";
var targf_ddlist_filesaaaet = '';




targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",true,true,loacol9d+"/video/711600070003432847011811.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/[MV] Ryukendo_000354.jpg","[MV] Ryukendo");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",true,true,loacol9d+"/video/714590675060111840304810.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Movie - All Songs_000508.jpg","Jiban the movie - All Songs");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",true,true,loacol9d+"/video/411400070043002847020800.html","https://archive.org/download/tokusatsu-compilation-musics-all/tokusatsu-compilation-musics-all.thumbs/Tokusatsu - Compilation Musics_000164.jpg","Tokusatsu - Compilation Musics");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",true,true,loacol9d+"/video/714590675060132807324890.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Kidou Keiji Jiban - Hit Song Collection_000027.jpg","Kidou Keiji Jiban - Hit Song Collection");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",true,true,loacol9d+"/video/714590675060132805020894.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Kamen Rider BLACK RX - Full Songs_002036.jpg","Kamen Rider BLACK RX - Full Songs");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",true,true,loacol9d+"/video/711678979903432040410011.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Space_Sheriff_Memorial - PV_000267.jpg","Space_Sheriff_Memorial - PV");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",true,true,loacol9d+"/video/712690675063432847324893.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Sekai Ninja Sen Jiraiya - Full Songs_000294.jpg","Sekai Ninja Sen Jiraiya - Full Songs");




targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+'';





