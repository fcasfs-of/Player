function vistopauseclie(){ var vidsdffsdeo = document.getElementById('plvideo');  vidsdffsdeo.pause();  } 

var link_flvid="";

function playelisvid_setmode_file(zplaylist_tbl){
set_player_IconsColor("#1874CD");   
set_playlist_videoplayer("zpreviewdemovideinz", zplaylist_tbl,"");
set_player_settings().size("zpreviewdemovideinz", "100%");   set_player_settings().position.center("zpreviewdemovideinz");    /*set_icon_controls("");*/    var app_plconfig_playlist={ search:true, autoplay:false };  var app_plconfig = { Playlist:app_plconfig_playlist, Controls:true, Title:true };  var controls_settings_buttons = { Icon:false, Speed_Control:true, Stop:true, Download:false };  set_player_controls_settings(controls_settings_buttons);set_player_config(app_plconfig);        /*set_player_settings().version_update();*/   set_player_settings().Button_Light(false);    /*set_player_settings().Scroll_to_MiniPlayer("zpreviewdemovideinz");*/
}

function playevid_setmode_file(f, t){
set_player_IconsColor("#1874CD");   
set_file_videoplayer("zpreviewdemovideinz", f, t, "","", "", "", "true");    
set_player_settings().size("zpreviewdemovideinz", "100%");   set_player_settings().position.center("zpreviewdemovideinz");    /*set_icon_controls("");*/    var app_plconfig_playlist={ search:true, autoplay:false };  var app_plconfig = { Playlist:app_plconfig_playlist, Controls:true, Title:true };  var controls_settings_buttons = { Icon:false, Speed_Control:true, Stop:true, Download:false };  set_player_controls_settings(controls_settings_buttons);set_player_config(app_plconfig);        /*set_player_settings().version_update();*/   set_player_settings().Button_Light(false);    /*set_player_settings().Scroll_to_MiniPlayer("zpreviewdemovideinz");*/
}

var mdpl_handleFileSelectsa=[];

function mdpl_handleFileSelect(evt){
mdpl_handleFileSelectsa=[];

for(var x=0;x<evt.files.length;x++){
mdpl_handleFileSelectsa[x]={"file":create_mdpl_file(evt).create_url(x),"title":create_mdpl_file(evt).get_name(x),"poster":""};
}

playelisvid_setmode_file(mdpl_handleFileSelectsa);
}

var inpss45435rwles = document.getElementById('inpssle');
inpss45435rwles.onchange=function(){ mdpl_handleFileSelect(this);};


playevid_setmode_file("","");
