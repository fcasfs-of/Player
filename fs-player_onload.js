 var fcasmdplex_loadex = { open: function (dss) {  return location.href.split(dss)[1]; }, openex:{ url: function () {  return "?url="; }, server: function () {  return "?server/file="; } }  }; 
function fcasmdplex_load_url() { return fcasmdplex_loadex.openex.url(); } function fcasmdplex_load_server(){ return fcasmdplex_loadex.openex.server(); }    


function GTLink() {  return location.href; }  


function Reproduce_aLink(fl,ob) {   var Reproddfsink="";    if(fl=='undefined'){   Reproddfsink=""; }   if(fl==''){ Reproddfsink=""; } else {   Reproddfsink=""+fl;  }
set_player_IconsColor("#1874CD");   set_file_videoplayer(ob, Reproddfsink, "", "","", "", "", "true");    set_player_settings().size(ob, "90%");   set_player_settings().position.center(ob);    set_icon_controls("/favicon.png");    var app_plconfig_playlist={ search:false, autoplay:false };  var app_plconfig = { Playlist:app_plconfig_playlist, Controls:true, Title:true };  var controls_settings_buttons = { Icon:true, Speed_Control:true, Stop:true, Download:false };  set_player_controls_settings(controls_settings_buttons);set_player_config(app_plconfig);        /*set_player_settings().version_update();*/   set_player_settings().Button_Light(true);    /*set_player_settings().Scroll_to_MiniPlayer(ob);*/
var zzszhisdddceardsscz=document.getElementById(ob);       } 



var zsssasd_iswe = ""+fcasmdplex_loadex.open(fcasmdplex_load_url())+"";

