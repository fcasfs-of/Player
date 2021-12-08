
    var loacol_thum = "true";   

function truncateWithEllipses(text, max) {    return text.substr(0,max-1)+(text.length>max?'&hellip;':''); }       
function truncgate(input) {   return truncateWithEllipses(input, 100);   }  

function si_thud(inputz) {       var zsi_thudsss="";//<img class=\"fa\" style='display:none;'/>";     
  if(loacol_thum=="true"){ zsi_thudsss=inputz; }     return zsi_thudsss;   }    

function si_thudicon(inputz, inddputz) {    var zsi_tdfdfdhudsss="";   var zsi_thudsss="fl";   
    if(inputz=="text"){ zsi_thudsss="tx"; }   if(inputz=="photo"){ zsi_thudsss="pic"; }  if(inputz=="document"){ zsi_thudsss="doc"; }  if(inputz=="music"){ zsi_thudsss="musi";   if(inddputz==true){ zsi_tdfdfdhudsss=" bt"; }  }  if(inputz=="video"){ zsi_thudsss="vid";    if(inddputz==true){ zsi_tdfdfdhudsss=" bt"; }  }   if(inputz=="play"){ zsi_thudsss="vf"; }      return zsi_thudsss+zsi_tdfdfdhudsss;   }    



function add_fileset(zz,m,bb,nn) {   return '<li class="'+si_thudicon(zz)+'"><a style="display:none;" href="'+m+'">'+si_thud("<img src=\""+bb+"\" class=\"fa\"/>")+truncgate(nn)+'</a></li>';    }       


var loacol9d="https://fcasfs-of.github.io/Player/Server/Files/cloud";
var targf_ddlist_filesaaaet = '';

targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",loacol9d+"/711600070003432847011811.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/[MV] Ryukendo_000354.jpg","[MV] Ryukendo");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",loacol9d+"/714590675060111840304810.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Movie - All Songs_000508.jpg","Jiban the movie - All Songs");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",loacol9d+"/411400070043002847020800.html","https://archive.org/download/tokusatsu-compilation-musics-all/tokusatsu-compilation-musics-all.thumbs/Tokusatsu - Compilation Musics_000164.jpg","Tokusatsu - Compilation Musics");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",loacol9d+"/714590675060132807324890.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Kidou Keiji Jiban - Hit Song Collection_000027.jpg","Kidou Keiji Jiban - Hit Song Collection");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",loacol9d+"/714590675060132805020894.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Kamen Rider BLACK RX - Full Songs_002036.jpg","Kamen Rider BLACK RX - Full Songs");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",loacol9d+"/711678979903432040410011.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Space_Sheriff_Memorial - PV_000267.jpg","Space_Sheriff_Memorial - PV");
targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+add_fileset("video",loacol9d+"/712690675063432847324893.html","https://archive.org/download/tokusastsu-hit-song-collection/tokusastsu-hit-song-collection.thumbs/Sekai Ninja Sen Jiraiya - Full Songs_000294.jpg","Sekai Ninja Sen Jiraiya - Full Songs");

targf_ddlist_filesaaaet=targf_ddlist_filesaaaet+'';




