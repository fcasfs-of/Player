function loadJS(src, then) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  script.onload = then;
  document.body.appendChild(script);
}

function notifyLoad() {   }




var fcasmdplex_loadex = { open: function (dss) {  return location.href.split(dss)[1]; }, openex:{ url: function () {  return "?url="; }, server: function () {  return "?server/file="; } }  }; 
function fcasmdplex_load_url() { return fcasmdplex_loadex.openex.url(); } function fcasmdplex_load_server(){ return fcasmdplex_loadex.openex.server(); }    


function neaddtTime(secs) { var hr  = Math.floor(secs / 3600);  var min = Math.floor((secs - (hr * 3600))/60);  var sec = Math.floor(secs - (hr * 3600) -  (min * 60));  if (hr < 10){     hr = "0" + hr;  } if (min < 10){     min = "0" + min;   }  if (sec < 10){     sec  = "0" + sec;  }  var dsfhusfhvdfv = hr + ':' + min + ':' + sec;   if(dsfhusfhvdfv=="NaN:NaN:NaN"){  var dsfhusfhvdfv="00:00:00";  }    return dsfhusfhvdfv; }

 lightbox_inner_addcustom("");


function box_in_set(az,id,idd,t,fl,cp,po, ds,dssa,sdssa){   
 lightbox_inner(az, id, { type: t, lightbox:'true', caption: cp, mute:'false', controls:'true', autoplay:'false', loop:'true', volume:ds, currentTime:dssa, playbackRate:sdssa, poster: po }, { caption:{ enable:true }, thumbs:{ enable:false }}, { thumbs:{ id:'' }, caption:{ id: fl }});  
}

function dowenload_video_setdd(d, v) {     
 var ex_loadex_downnd=fmdplex_loadex_txv(v.getAttribute("src"));  if(ex_loadex_downnd==""){   }  else {  
 z_setid_attr(d,'href', fmdplex_loadex_txv(v.getAttribute("src")));             z_setid_attr(d,'download', fmdplex_loadex_txv(v.getAttribute("src")));    
 v.pause();  
box_in_set("false","light_box_modal","box_btns","video",ex_loadex_downnd,"<span id=\"down_id_mdoos\" class=\"d8ssbutton\" style=\"pointer-events:auto;cursor:pointer;\">Download File<a style=\"display:none;\" id=\"down_id_mdoo\"></a></span>",fmdplex_loadex_txv(v.getAttribute("poster")), v.volume, v.currentTime, v.playbackRate);
 var zzszhisddsdfdgdfceardsscz=document.getElementById("vidfrf_o");     zzszhisddsdfdgdfceardsscz.oncontextmenu=function(){ return true; this.preventDefault(); };  
var zzszhirtertceardsscz=document.getElementById("down_id_mdoo");    z_setid_attr(zzszhirtertceardsscz,'href', fmdplex_loadex_txv(v.getAttribute("src")));             z_setid_attr(zzszhirtertceardsscz,'download', fmdplex_loadex_txv(v.getAttribute("src")));    
var zzszhirtertceardssczz=document.getElementById("down_id_mdoos");    zzszhirtertceardssczz.onclick=function(){zzszhirtertceardsscz.click();};
}  }
 
function download_video_setdd(d, v) {   var doddwnload_video_setdd=neaddtTime(v.duration);   if(doddwnload_video_setdd=="00:00:00"){     }  
 else {  dowenload_video_setdd(d, v);  }
}


function GTLink() {  return location.href; }  


function Reproduce_aLink(fl,ob) {   var Reproddfsinkfdsfdf=false;    var Reproddfsink="";    if(fl=='undefined'){   Reproddfsink=""; }   if(fl==''){ Reproddfsink=""; } else {   Reproddfsink=""+fl;   Reproddfsinkfdsfdf=true;  }
if (Reproddfsinkfdsfdf==true){
  set_player_IconsColor("#1874CD");   
  set_playlist_videoplayer(ob, [{"file":Reproddfsink,"title":"File","poster":""},],"");  /*set_file_videoplayer(ob, Reproddfsink, "", "","", "", "", "true");*/
 set_player_settings().size(ob, "90%");   set_player_settings().position.center(ob);    set_icon_controls("");    var app_plconfig_playlist={ search:true, autoplay:false };  var app_plconfig = { Playlist:app_plconfig_playlist, Controls:true, Title:false };  var controls_settings_buttons = { Icon:false, Speed_Control:true, Stop:true, Download:true };  set_player_controls_settings(controls_settings_buttons);set_player_config(app_plconfig);        set_player_settings().version_update();   set_player_settings().Button_Light(true);    /*set_player_settings().Scroll_to_MiniPlayer(ob);*/
var zzszhisdddceardsscz=document.getElementById(ob);     download_video_set_in=download_video_setdd;      
 }   else  {   }
  } 

function Reproduce_aLink_s(fl,ob) {   var Reproddfsinkfdsfdf=false;    var Reproddfsink="";    if(fl=='undefined'){   Reproddfsink=""; }   if(fl==''){ Reproddfsink=""; } else {   Reproddfsink=""+fl;   Reproddfsinkfdsfdf=true;  }
if (Reproddfsinkfdsfdf==true){  var Reprodddfdgdkfdsfdf=server_fs_itens["\""+Reproddfsink+"\""];   location.href=Reprodddfdgdkfdsfdf;
  set_player_IconsColor("#1874CD");   
  set_playlist_videoplayer(ob, [{"file":Reprodddfdgdkfdsfdf["file"],"title":Reprodddfdgdkfdsfdf["title"],"poster":Reprodddfdgdkfdsfdf["poster"]},],"");  /*set_file_videoplayer(ob, Reproddfsink, "", "","", "", "", "true");*/
 set_player_settings().size(ob, "90%");   set_player_settings().position.center(ob);    set_icon_controls("");    var app_plconfig_playlist={ search:true, autoplay:false };  var app_plconfig = { Playlist:app_plconfig_playlist, Controls:true, Title:false };  var controls_settings_buttons = { Icon:false, Speed_Control:true, Stop:true, Download:true };  set_player_controls_settings(controls_settings_buttons);set_player_config(app_plconfig);        set_player_settings().version_update();   set_player_settings().Button_Light(true);    /*set_player_settings().Scroll_to_MiniPlayer(ob);*/
var zzszhisdddceardsscz=document.getElementById(ob);     download_video_set_in=download_video_setdd;      
 }   else  {   }
  } 



var zsssasd_iswe = ""+fcasmdplex_loadex.open(fcasmdplex_load_url())+"";
var zsssasd_iswez = ""+fcasmdplex_loadex.open(fcasmdplex_load_server())+"";





