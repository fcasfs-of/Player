 var fcasmdplex_loadex = { open: function (dss) {  return location.href.split(dss)[1]; }, openex:{ url: function () {  return "?url="; }, server: function () {  return "?server/file="; } }  }; 
function fcasmdplex_load_url() { return fcasmdplex_loadex.openex.url(); } function fcasmdplex_load_server(){ return fcasmdplex_loadex.openex.server(); }    


 lightbox_inner_addcustom("");


function box_in_set(az,id,idd,t,fl,cp,po, ds,dssa,sdssa){   
 lightbox_inner(az, id, { type: t, lightbox:'true', caption: cp, mute:'false', controls:'true', autoplay:'false', loop:'true', volume:ds, currentTime:dssa, playbackRate:sdssa, poster: po }, { caption:{ enable:true }, thumbs:{ enable:false }}, { thumbs:{ id:'' }, caption:{ id: fl }});  
}

function download_video_setdd(d, v) {  var ex_loadex_downnd=fmdplex_loadex_txv(v.getAttribute("src"));  if(ex_loadex_downnd==""){   }  else {  
 z_setid_attr(d,'href', fmdplex_loadex_txv(v.getAttribute("src")));             z_setid_attr(d,'download', fmdplex_loadex_txv(v.getAttribute("src")));    
 v.pause();  
box_in_set("false","light_box_modal","box_btns","video",ex_loadex_downnd,"<a id=\"down_id_mdoo\"  class=\"d8ssbutton\" style=\"padding:3px;pointer-events:auto;cursor:pointer;\">Download File</a>",fmdplex_loadex_txv(v.getAttribute("poster")), v.volume, v.currentTime, v.playbackRate);
 var zzszhisddsdfdgdfceardsscz=document.getElementById("vidfrf_o");     zzszhisddsdfdgdfceardsscz.oncontextmenu=function(){ return false; this.preventDefault(); };  
var zzszhirtertceardsscz=document.getElementById("down_id_mdoo");    z_setid_attr(zzszhirtertceardsscz,'href', fmdplex_loadex_txv(v.getAttribute("src")));             z_setid_attr(zzszhirtertceardsscz,'download', fmdplex_loadex_txv(v.getAttribute("src")));    
}   }  


function GTLink() {  return location.href; }  


function Reproduce_aLink(fl,ob) {   var Reproddfsink="";    if(fl=='undefined'){   Reproddfsink=""; }   if(fl==''){ Reproddfsink=""; } else {   Reproddfsink=""+fl;  }
set_player_IconsColor("#1874CD");   set_file_videoplayer(ob, Reproddfsink, "", "","", "", "", "true");    set_player_settings().size(ob, "90%");   set_player_settings().position.center(ob);    set_icon_controls("");    var app_plconfig_playlist={ search:true, autoplay:false };  var app_plconfig = { Playlist:app_plconfig_playlist, Controls:true, Title:false };  var controls_settings_buttons = { Icon:false, Speed_Control:true, Stop:true, Download:true };  set_player_controls_settings(controls_settings_buttons);set_player_config(app_plconfig);        set_player_settings().version_update();   set_player_settings().Button_Light(true);    /*set_player_settings().Scroll_to_MiniPlayer(ob);*/
var zzszhisdddceardsscz=document.getElementById(ob);     download_video_set_in=download_video_setdd;       } 



var zsssasd_iswe = ""+fcasmdplex_loadex.open(fcasmdplex_load_url())+"";

