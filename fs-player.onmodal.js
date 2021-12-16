

var lightbox_inner_custom_add = "";  

var style_ineerr_diald_md = '<style rel="stylesheet" type="text/css">     .fade-s {   opacity:0;   -webkit-animation:faden ease-in-out 1;    -moz-animation:faden ease-in-out 1;  animation:faden ease-in-out 1;   -webkit-animation-fill-mode:forwards;    -moz-animation-fill-mode:forwards;  animation-fill-mode:forwards;   -webkit-animation-duration:1s;  -moz-animation-duration:1s;  animation-duration:1s; } .fade-s.info {  -webkit-animation-delay: 1s;  -moz-animation-delay: 1s;  animation-delay: 1s; }   @-webkit-keyframes faden { from { opacity:0; } to { opacity:1; } } @-moz-keyframes faden { from { opacity:0; } to { opacity:1; } } @keyframes faden { from { opacity:0; } to { opacity:1; } }   div.fileinp {    background-color:#fff;    border: 1px solid #ddd;    border-radius:5px;    display:inline-block;   cursor:pointer;   height: 30px;   padding:3px 40px 3px 3px;    position:relative;    width: 80%;  }  div.fileinp:hover {       opacity:0.95;  }     div.fileinp input[type="file"] {    pointer-events:none;  display: none;    width: 100%;    height: 30px;    opacity: 0;    cursor:pointer;    position:absolute;    left:0;}   .fileinp .fileinpButton {    background-color: #425F9C;    border: none;    border-radius: 3px;    color: #FFF;    cursor:pointer;    display: inline-block;    height: 30px;    margin-right:15px;    width: auto;    padding:0 20px;    box-sizing: content-box;}   .fileinp .fileName {    font-family: Arial;    font-size:14px;  } .fileinp + .fileinpButton {   height:38px;  }     .centerdiv{  position: absolute;  top: 0;     bottom: 0;   left: 0;  right: 0;    margin: auto;  }   .lightbox {	display: block; 	position: fixed;	z-index: 999;	z-index: 99999;   width: 100%;	height: 100%;	text-align: center;	top: 0;	left: 0;	background: rgba(0,0,0,0.8);  }   .lightbox img { 	max-width: 90%;	max-height: 100%;     }   .lightbox:target {	outline: none;  	display: block;  }   .lightbox .lightbox-close {    position:absolute;    display:block;    top: 10px;    right: 10px; cursor:pointer;     color:#ffffff;    font-size:26px;    height: 50px;    width: 50px;    background: rgba(255,255,255,0.3);   pointer-events:auto;  background: rgba(0,0,0,0.6);    border: 3px solid #ffffff;    border-radius: 50%;    line-height:50px;   text-align:center; text-decoration: none; opacity:1;  }     .lightbox .lightbox-close:hover{  opacity:0.6;     } .app-mdpl-trands{ -webkit-transition: all 0.3s ease; transition: all 0.3s ease;   }    .button {   background-color: #008CBA;   border: none;  color: #fff;  padding: 16px 32px;  text-align: center;  text-decoration: none;  display: inline-block;  font-size: 16px;  margin: 4px 2px;  transition-duration: 0.4s;  cursor: pointer;  }     .button5 {    background-color: #fff;   color: #000;    border: 2px solid #555555;  }  .button5:active {  background-color: #fff;  color: #000;  border: 2px solid #fff;}    .button5:hover {  background-color: #555555;  color: #fff;border: 2px solid #fff;}  .ldf_oi{ position:relative;pointer-events:auto;width:100%;padding:4px;height:100%;text-align:center; }     .thumbs_list{ position:absolute;left:0;right:0;bottom:4px;pointer-events:auto;padding:4px;max-width:100%;overflow:scroll;max-height:141px;margin-left:4px;margin-right:4px;  }   .bvplayere {  pointer-events: none;   cursor: default;   }  .bvplayer {  pointer-events: auto;   cursor: default;   }     video{left:0px;}   .lg-md {          position:absolute;    display:block;    top: 10px;    left: 10px;   right:10px;     color:#ffffff;    height: 50px;    width: 50px;    text-align:center; text-decoration: none; opacity:1;     }     .svgicon {    display: inline-flex;    align-self: center;    position: relative;    height: 28px;    width: 28px;}  .svgicon svg{}    button.msbutton{color:#000;  border: 0px solid #fff;} button.msbutton:hover{color:#fff;  border: 2px solid #000;}    button{color:#fff;} .svgicon svg, .svgicon img {    height: 1em;    width: 1em;} button .svgicon {  font-size: 18px;} button.btn-highlight, .button.btn-highlight,input[type="submit"].btn-highlight,input[type="reset"].btn-highlight,input[type="button"].btn-highlight {    background-color: #1B78B3;    color: #fff;    border-color: #1B78B3;} button.btn-icon, .button.btn-icon {    color:#fff;  padding: 0;} button.btn-highlight .svgicon, .button.btn-highlight .svgicon, input[type="submit"].btn-highlight .svgicon, input[type="reset"].btn-highlight .svgicon, input[type="button"].btn-highlight .svgicon {    fill: #fff;}  button.btn-icon .svgicon, .button.btn-icon .svgicon {    margin: 5px;} input, textarea, keygen, select, button {    font-family: Arial, Helvetica, sans-serif;    /*font-family: "Source Sans Pro", "SourceSansPro", Helvetica, sans-serif;*/ }.button, button, input[type="submit"], input[type="reset"], input[type="button"] { opacity:0.9;    display: inline-flex;    position: relative;        padding: 0 16px;    vertical-align: middle;    color: #607580;    text-align: center;    font-size: 14px;    font-weight: 600;    line-height: 28px;    letter-spacing: 0.5px;    text-transform: uppercase;    text-decoration: none;    white-space: nowrap;    background-color: rgba(0, 0, 0, 0);    border-radius: 2px;    border: 2px solid rgba(0, 0, 0, 0);   color:#fff;   cursor: pointer;    box-sizing: border-box;    -webkit-transition: all 200ms ease-out;    transition: all 200ms ease-out;    -webkit-transition-property: background-color, color, opacity, border;    transition-property: background-color, color, opacity, border;}.button:hover, button:hover, input[type="submit"]:hover, input[type="reset"]:hover, input[type="button"]:hover { opacity:1;  -webkit-transition: all 200ms ease-out;    transition: all 200ms ease-out;    -webkit-transition-property: background-color, color, opacity, border;    transition-property: background-color, color, opacity, border;}  video::-internal-media-controls-download-button {    display:none;}     .bvplayerod {     }   .caption-lightbx{ position:relative;pointer-events:none;height:100px;width:100%;text-align:center;top:10px;color:#fff; }  .thumbnail { background:#fff;  text-align:center;  border: 1px solid #A9A9A9;  border-radius: 4px;  padding: 5px;  width: 150px; margin-right:4px;  cursor:pointer;  opacity:0.8;   }   .thumbnailvid{  border: 2px solid #111;   } .appsa{  }   .appsa::after {    content: "  " attr(text) "  ";  }  .thumbnail:hover  {  opacity:1; box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5); }    .thumbnailvid:hover  {  opacity:1; box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.8); }  .bvplayerodn {  display:none;   }  .bvplayerodng {  display:block;   }       .fs_tooltip {    position: relative;    display: inline-block;    border-bottom: 0px dotted #ccc;    color: #000;/*006080;*/  }  .fs_tooltip .fs_tooltiptext { pointer-events:none;      visibility: hidden;    position: absolute;    width: 120px;    background-color: #555;    color: #fff;    text-align: center;    padding: 5px 0;    border-radius: 6px;    z-index: 1;    opacity: 0;    transition: opacity 0.3s;}.fs_tooltip:hover .fs_tooltiptext {    visibility: visible;    opacity: 1;}.fs_tooltip-right {  top: -5px;  left: 125%;  }.fs_tooltip-right::after {    content: "";    position: absolute;    top: 50%;    right: 100%;    margin-top: -5px;    border-width: 5px;    border-style: solid;    border-color: transparent #555 transparent transparent;}   .fs_tooltip-bottom {  top: 135%;  left: 50%;    margin-left: -60px;}      .fs_tooltip-bottom::after {    content: "";    position: absolute;    bottom: 100%;    left: 50%;    margin-left: -5px;    border-width: 5px;    border-style: solid;    border-color: transparent transparent #555 transparent;  }   .fs_tooltip-top {  bottom: 125%;  left: 50%;    margin-left: -60px;}.fs_tooltip-top::after {    content: "";    position: absolute;    top: 100%;    left: 50%;    margin-left: -5px;    border-width: 5px;    border-style: solid;    border-color: #555 transparent transparent transparent;}  .fs_tooltip-left {  top: -5px;  bottom:auto;  right: 128%;  }.fs_tooltip-left::after {    content: "";    position: absolute;    top: 50%;    left: 100%;    margin-top: -5px;    border-width: 5px;    border-style: solid;    border-color: transparent transparent transparent #555;   }    hr.fs_lihtbox_solid {      border-top: 3px solid #bbb;    }   </style>';


function set_mdpl_ulit_aus_9s(v){  var confids_pl_plalioplay_1 = v.playbackRate;   var confids_pl_plalioplay_2 = v.volume;   var confids_pl_plalioplay_3 = v.muted;  v.load();    v.muted=confids_pl_plalioplay_3;    v.volume=confids_pl_plalioplay_2;   v.playbackRate=confids_pl_plalioplay_1;    }

function ltxt_inner(d){  if(d==undefined){  return "";  }  if(d=="undefined"){  return "";  }  else{ return d;  }  }    function zdfmdpdsadex_txvads(ob, n, nn){    var vidseoa = document.getElementById(ob);     vidseoa.volume=fdfmdpdsadex_txvadxv(n,1);   vidseoa.currentTime = fdfmdpdsadex_txvadxv(nn,0);    }  
function dfmdpdsadex_txvads(ob, n, nn){  }       function sdfmdpdsadex_txvads(ob, n, nn, d){    var vidseoa = document.getElementById(ob);     vidseoa.playbackRate=d;  vidseoa.volume=n;   vidseoa.currentTime = nn;    }  


function fs_lightbox_devices_int_det(extrasmall,small, medium, large,extralarge){    return '<style rel="stylesheet" type="text/css">     '+'/* Extra small devices (phones, 600px and down) */   @media only screen and (max-width: 600px) {  '+ltxt_inner(extrasmall)+'   }   /* Small devices (portrait tablets and large phones, 600px and up) */    @media only screen and (min-width: 600px) {  '+ltxt_inner(small)+'  }   /* Medium devices (landscape tablets, 768px and up) */     @media only screen and (min-width: 768px) {  '+ltxt_inner(medium)+'  }    /* Large devices (laptops/desktops, 992px and up) */   @media only screen and (min-width: 992px) {  '+ltxt_inner(large)+'   }      /* Extra large devices (large laptops and desktops, 1200px and up) */    @media only screen and (min-width: 1200px) {  '+ltxt_inner(extralarge)+'   }'+'</style>';    }    


function fmdpdsadex_txv(t){  if(t==""){    return "";  }   if(t=="undefined"){    return "";  }     if(t==undefined){    return "";  }   else {  return t; }  }     function fdfmdpdsadex_txvadxv(z,n){  var dfdfmdpdsadex_txvadxvss=fmdpdsadex_txv(z);  if(ds==""){ var dfdfmdpdsadex_txvadxvss=n;  }  return dfdfmdpdsadex_txvadxvss;   }    function fcasmdplex_loadex_txv(t){  if(t==""){    return "";  }   if(t=="undefined"){    return "";  }     if(t==undefined){    return "";  }   else {  return t; }  }   

function video_stad(s, n){  var video_stadsdad="";     if(s=="true"){ var video_stadsdad=n;  } return video_stadsdad; }     function video_stid(s){ return ""+s+""; }      

var fcasmdplex_loadex_modal = function (dss) {  return { close:function(){  mdpl_dispNav(dss).innerHTML=""; } };    };     


function mdpl_dispNav_in(a) {  var element = a.target || a.srcElement;    return element;  }   function mdpl_dispNav(a) {  return document.getElementById(a);  }   function mdpl_toogle_dispNav_in(dd) { if (mdpl_dispNav(dd).style.display === "block") {  mdpl_dispNav(dd).style.display = "none"; } else { mdpl_dispNav(dd).style.display = "block";  } }      function mdpl_toogle_dispNav(dd) { if (mdpl_dispNav(dd).style.display === "block") {  mdpl_toogle_opdispNav(dd+"a");  mdpl_dispNav(dd).style.display = "none"; } else { mdpl_dispNav(dd).style.display = "block"; mdpl_toogle_opdispNav(dd+"a"); } }    function mdpl_toogle_opdispNav(dd) { if (mdpl_dispNav(dd).style.opacity === "1") {  mdpl_dispNav(dd).style.visibility = "hidden";  mdpl_dispNav(dd).style.opacity="0";  } else {  mdpl_dispNav(dd).style.visibility = "visible";  mdpl_dispNav(dd).style.opacity="1";   } }    

function lightbox_of_in(ob){  var ssasfvdsfnts = document.getElementById(ob);    ssasfvdsfnts.oncontextmenu=function(){ return false; this.preventDefault(); };  ssasfvdsfnts.onselectstart=function(){ return false; };  ssasfvdsfnts.ondragstart=function(){ return false; };       }   

/*  function mode_image_set(d,srcfileimg){  lightbox_of_in(d);  mdpl_dispNav(d).innerHTML= style_ineerr_diald_md+fs_lightbox_devices_int_det("","", ", ","")+'<div class="lightbox app-mdpl-trands">   <div class="centerdiv">  <img class="centerdiv" src="'+srcfileimg+'" style=""/>   </div>     <span class="lightbox-close app-mdpl-trands" onclick="fcasmdplex_loadex_modal(\''+d+'\').close();">X</span>     </div>';    }    */


function lightbox_inner_tp(s){     var lightbox_inner_tp_att="";
if(s=="inner"){  lightbox_inner_tp_att="box_type=\""+s+"\"";   }
if(s=="text"){  lightbox_inner_tp_att="box_type=\""+s+"\"";   }
if(s=="iframe"){  lightbox_inner_tp_att="box_type=\""+s+"\"";   }
if(s=="image"){  lightbox_inner_tp_att="box_type=\""+s+"\"";   }
if(s=="video"){  lightbox_inner_tp_att="box_type=\""+s+"\"";   }
if(s=="audio"){  lightbox_inner_tp_att="box_type=\""+s+"\"";   }
if(lightbox_inner_tp_att==""){   return "";   }    else   {   return " "+lightbox_inner_tp_att+" ";   }
}


function fs_lightbox_set_in(id, b, idf) {     var fs_lightbox_set_in_iframe = document.getElementById(id);         var sfs_lightbox_set_in_iframesss=fs_lightbox_set_in_iframe.contentWindow.document.getElementById(idf);  if (b==true){  sfs_lightbox_set_in_iframesss=fs_lightbox_set_in_iframe.contentWindow.document.getElementsByTagName(idf);    }     return sfs_lightbox_set_in_iframesss;   }


function zzzz_setid_inner(id, val){  id.innerHTML=val;  }    function zzzz_setid_attr(id, e, val){ id.setAttribute(e, val);  }    function zzzz_setid_even_lit(id, e, val){ id.addEventListener(e, val);   }       function zzz_setid_inner(id, val){  var asfviconsharebtnnts = document.getElementById(id); asfviconsharebtnnts.innerHTML=val;  }    function zzz_setid_attr(id, e, val){ var ssasfviconsharebtnnts = document.getElementById(id); ssasfviconsharebtnnts.setAttribute(e, val);  }    function zzz_setid_even_lit(id, e, val){  var asfvbmediaplayerwerexs = document.getElementById(id); asfvbmediaplayerwerexs.addEventListener(e, val);   }         function lightbox_inner(zz, d, v, m, n){  ssalightbox_inner_caps="top:10px;";   if(m.thumbs.enable==true){ ssalightbox_inner_caps="top:2px;";    }   else  {  ssalightbox_inner_caps="top:10px;";    }   lightbox_inner_caps='';    lightbox_inner_st=''; vightbox_inner_stsa='';   lightbox_inner_thumd='';   if(m.thumbs.enable==true){   var sthmfileimg=ltxt_inner(n.thumbs.id);   if(sthmfileimg==""){  lightbox_inner_thumd='';   }   else {  lightbox_inner_thumd='<div class="thumbs_list">'+mdpl_dispNav(n.thumbs.id).innerHTML+'</div>';  }  lightbox_inner_st='height:50%;';   vightbox_inner_stsa='top:-141px;';     }  else{   lightbox_inner_caps='';    lightbox_inner_thumd='';  lightbox_inner_st='';  }  if(m.caption.enable==true){   lightbox_inner_capsssaas=ltxt_inner(v.caption);   if(lightbox_inner_capsssaas==""){ lightbox_inner_caps='';   }  else { lightbox_inner_caps='<span class="caption-lightbx" style="'+ssalightbox_inner_caps+'">'+lightbox_inner_capsssaas+'</span>';    }  }  else { lightbox_inner_caps="";  }    var srcfileimg=ltxt_inner(n.caption.id);    if (zz=="true"){  srcfileimg=ltxt_inner(n.caption.id.getAttribute("src"));   }         if(srcfileimg==""){  mdpl_dispNav(d).innerHTML='';  }  else {   if(v.lightbox=="true"){      var lightbox_inner_caps_ty="";   if(v.type=="inner"){   var inlightbox_inner_caps_tysdner= ltxt_inner(n.caption.id.innerHTML);   if(inlightbox_inner_caps_tysdner==""){  var ssasfvicoddsfdfdfnsharebtnnts = document.getElementById(ltxt_inner(n.caption.id));   inlightbox_inner_caps_tysdner=ssasfvicoddsfdfdfnsharebtnnts.innerHTML;  }      var lightbox_inner_caps_ty='<div class="centerdiv"  style="position:absolute;top:25px;margin-left:auto;margin-right:auto;margin:0 auto;width:90%;height:80%;overflow:auto;color:#fff; '+lightbox_inner_st+' padding:5px;position:absolute;">'+ltxt_inner(inlightbox_inner_caps_tysdner)+'</div>';  }      if(v.type=="iframe"){  var lightbox_inner_caps_ty='<div style="width:100%;height:90%; '+lightbox_inner_st+' padding:5px;position:absolute;"><iframe frameborder="0" scrolling="yes" allowfullscreen="" class="centerdiv" style="border:none;position:relative;top:26px;background:#fff;color:#000;width:80%;margin:0 auto;padding:20px;overflow:auto;height:75%;" src="'+ltxt_inner(n.caption.id)+'"></iframe></div>';  }      if(v.type=="text"){  var lightbox_inner_caps_ty='<div class="centerdiv" style="position:relative;top:26px;background:#fff;color:#000;width:80%;margin:0 auto;padding:20px;overflow:auto;height:70%; '+lightbox_inner_st+' padding:5px;position:absolute;"><span style="padding:3px;">'+ltxt_inner(n.caption.id)+'</span></div>';  }    if(v.type=="image"){  var lightbox_inner_caps_ty='<img class="centerdiv" src="'+srcfileimg+'" style="'+lightbox_inner_st+vightbox_inner_stsa+' "/>';  }    if(v.type=="video"){  var lightbox_inner_caps_ty='<video id="vidfrf_o" onloadstart="dfmdpdsadex_txvads(\'vidfrf_o\',\''+v.volume+'\',\''+v.currentTime+'\');" oncanplay="dfmdpdsadex_txvads(\'vidfrf_o\',\''+v.volume+'\',\''+v.currentTime+'\');"  class="centerdiv" src="'+video_stid(srcfileimg)+'" style="'+lightbox_inner_st+vightbox_inner_stsa+' width:68%;" '+video_stad(v.controls,"controls=''")+' type="video/*" poster="'+v.poster+'" '+video_stad(v.autoplay,"autoplay=''")+'  '+video_stad(v.loop,"loop=''")+'  '+video_stad(v.mute,"muted=''")+'  controlsList="nodownload" preload="auto" onended=" "></video>';  }   if(v.type=="audio"){     var lightbox_inner_file_cobdsss="video";    var lightbox_inner_file_cobds = ltxt_inner(v.poster);    if (lightbox_inner_file_cobds==""){  lightbox_inner_file_cobdsss="audio";  }   var lightbox_inner_caps_ty='<'+lightbox_inner_file_cobdsss+' id="vidfrf_o" onloadstart="dfmdpdsadex_txvads(\'vidfrf_o\',\''+v.volume+'\',\''+v.currentTime+'\');" oncanplay="dfmdpdsadex_txvads(\'vidfrf_o\',\''+v.volume+'\',\''+v.currentTime+'\');"  class="centerdiv" src="'+video_stid(srcfileimg)+'" style="'+lightbox_inner_st+vightbox_inner_stsa+' height:10%;  width:68%; '+lightbox_inner_st+' padding:5px;position:absolute;" '+video_stad(v.controls,"controls=''")+' type="audio/*" poster="'+v.poster+'" '+video_stad(v.autoplay,"autoplay=''")+'  '+video_stad(v.loop,"loop=''")+'  '+video_stad(v.mute,"muted=''")+'  controlsList="nodownload" preload="auto" onended=" "></'+lightbox_inner_file_cobdsss+'>';  }     mdpl_dispNav(d).innerHTML= "<lightbox_modal_fs onload='this.load(\"fs_lightbox.init_"+d+"\");' id='fs_lightbox_modal_"+d+"' "+lightbox_inner_tp(v.type)+">"+style_ineerr_diald_md+fs_lightbox_devices_int_det("","", ", ","")+'<div class="lightbox app-mdpl-trands">   <div class="centerdiv">   '+lightbox_inner_caps+'   '+lightbox_inner_caps_ty+'  '+lightbox_inner_thumd+'  </div>     <span class="lightbox-close app-mdpl-trands" id="fs_lightbox_'+d+'_btn_close">X</span>         <span id="md-fvid" class="lg-md">'+ltxt_inner(lightbox_inner_custom_add)+'</span>    </div>'+"</lightbox_modal_fs>";      zzz_setid_even_lit("fs_lightbox_"+d+"_btn_close", "click", function(){  fcasmdplex_loadex_modal(d).close();  });     /*mdpl_dispNav('md-fvid').innerHTML=""+"";*/        lightbox_of_in("fs_lightbox_modal_"+d);       zzz_setid_even_lit("fs_lightbox_modal_"+d, "load", function(){ this.load("fs.lightbox.app"); });      if(lightbox_inner_thumd==""){  }  else{   if(v.type=="image"){  } }   if(v.type=="audio"){  sdfmdpdsadex_txvads('vidfrf_o',v.volume,v.currentTime,v.playbackRate);  zzz_setid_even_lit("vidfrf_o", "abort", function(){}); zzz_setid_even_lit("vidfrf_o", "error", function(){}); zzz_setid_even_lit("vidfrf_o", "play", function(){}); zzz_setid_even_lit("vidfrf_o", "pause", function(){}); zzz_setid_even_lit("vidfrf_o", "playing", function(){}); zzz_setid_even_lit("vidfrf_o", "waiting", function(){}); zzz_setid_even_lit("vidfrf_o", "ended", function(){ set_mdpl_ulit_aus_9s(this); });  zzz_setid_even_lit("vidfrf_o", "stalled", function(){}); zzz_setid_even_lit("vidfrf_o", "progress", function(){}); zzz_setid_even_lit("vidfrf_o", "durationchange", function(){   mdpl_dispNav("vidfrf_o").controls=v.controls;  }); zzz_setid_even_lit("vidfrf_o", "canplay", function(){}); zzz_setid_even_lit("vidfrf_o", "timeupdate", function(){}); zzz_setid_even_lit("vidfrf_o", "volumechange", function(e){});  zzz_setid_even_lit("vidfrf_o", "ratechange", function(){}); zzz_setid_even_lit("vidfrf_o", "dblclick", function(){}); zzz_setid_even_lit("vidfrf_o", "loadstart", function(){  mdpl_dispNav("vidfrf_o").controls=v.controls;  }); zzz_setid_even_lit("vidfrf_o", "loadedmetadata", function(){});    }       if(v.type=="video"){  sdfmdpdsadex_txvads('vidfrf_o',v.volume,v.currentTime,v.playbackRate);    zzz_setid_even_lit("vidfrf_o", "abort", function(){}); zzz_setid_even_lit("vidfrf_o", "error", function(){}); zzz_setid_even_lit("vidfrf_o", "play", function(){}); zzz_setid_even_lit("vidfrf_o", "pause", function(){}); zzz_setid_even_lit("vidfrf_o", "playing", function(){}); zzz_setid_even_lit("vidfrf_o", "waiting", function(){}); zzz_setid_even_lit("vidfrf_o", "ended", function(){ set_mdpl_ulit_aus_9s(this); });  zzz_setid_even_lit("vidfrf_o", "stalled", function(){}); zzz_setid_even_lit("vidfrf_o", "progress", function(){}); zzz_setid_even_lit("vidfrf_o", "durationchange", function(){  mdpl_dispNav("vidfrf_o").controls=v.controls;  }); zzz_setid_even_lit("vidfrf_o", "canplay", function(){}); zzz_setid_even_lit("vidfrf_o", "timeupdate", function(){}); zzz_setid_even_lit("vidfrf_o", "volumechange", function(e){});  zzz_setid_even_lit("vidfrf_o", "ratechange", function(){}); zzz_setid_even_lit("vidfrf_o", "dblclick", function(){}); zzz_setid_even_lit("vidfrf_o", "loadstart", function(){  mdpl_dispNav("vidfrf_o").controls=v.controls;  }); zzz_setid_even_lit("vidfrf_o", "loadedmetadata", function(){});     var add_hfppa="";   if(lightbox_inner_thumd==""){  }  else{   } }     }  else {  mdpl_dispNav(d).innerHTML='';  }        }      }       
function lightbox_inner_addcustom(zn){   lightbox_inner_custom_add = ltxt_inner(zn);  }








function thisdetecto(){           var unknown = '-';

        // screen
        var screenSize = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            screenSize += '' + width + " x " + height;
        }

        //browser
        var nVer = navigator.appVersion;
        var nAgt = navigator.userAgent;
        var browser = navigator.appName;
        var version = '' + parseFloat(navigator.appVersion);
        var majorVersion = parseInt(navigator.appVersion, 10);
        var nameOffset, verOffset, ix;

        // Opera
        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
            browser = 'Opera';
            version = nAgt.substring(verOffset + 6);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // MSIE
        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(verOffset + 5);
        }
        // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
        }
        // Safari
        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
            browser = 'Safari';
            version = nAgt.substring(verOffset + 7);
            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
            }
        }
        // Firefox
        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
            browser = 'Firefox';
            version = nAgt.substring(verOffset + 8);
        }
        // MSIE 11+
        else if (nAgt.indexOf('Trident/') != -1) {
            browser = 'Microsoft Internet Explorer';
            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
        }
        // Other browsers
        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
            browser = nAgt.substring(nameOffset, verOffset);
            version = nAgt.substring(verOffset + 1);
            if (browser.toLowerCase() == browser.toUpperCase()) {
                browser = navigator.appName;
            }
        }
        // trim the version string
        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

        majorVersion = parseInt('' + version, 10);
        if (isNaN(majorVersion)) {
            version = '' + parseFloat(navigator.appVersion);
            majorVersion = parseInt(navigator.appVersion, 10);
        }

        // mobile version
        var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

        // cookie
        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
            document.cookie = 'testcookie';
            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
        }

        // system
        var os = unknown;
        var clientStrings = [{
            s: 'Windows 3.11',
            r: /Win16/
        }, {
            s: 'Windows 95',
            r: /(Windows 95|Win95|Windows_95)/
        }, {
            s: 'Windows ME',
            r: /(Win 9x 4.90|Windows ME)/
        }, {
            s: 'Windows 98',
            r: /(Windows 98|Win98)/
        }, {
            s: 'Windows CE',
            r: /Windows CE/
        }, {
            s: 'Windows 2000',
            r: /(Windows NT 5.0|Windows 2000)/
        }, {
            s: 'Windows XP',
            r: /(Windows NT 5.1|Windows XP)/
        }, {
            s: 'Windows Server 2003',
            r: /Windows NT 5.2/
        }, {
            s: 'Windows Vista',
            r: /Windows NT 6.0/
        }, {
            s: 'Windows 7',
            r: /(Windows 7|Windows NT 6.1)/
        }, {
            s: 'Windows 8.1',
            r: /(Windows 8.1|Windows NT 6.3)/
        }, {
            s: 'Windows 8',
            r: /(Windows 8|Windows NT 6.2)/
        }, {
            s: 'Windows NT 4.0',
            r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
        }, {
            s: 'Windows ME',
            r: /Windows ME/
        }, {
            s: 'Android',
            r: /Android/
        }, {
            s: 'Open BSD',
            r: /OpenBSD/
        }, {
            s: 'Sun OS',
            r: /SunOS/
        }, {
            s: 'Linux',
            r: /(Linux|X11)/
        }, {
            s: 'iOS',
            r: /(iPhone|iPad|iPod)/
        }, {
            s: 'Mac OS X',
            r: /Mac OS X/
        }, {
            s: 'Mac OS',
            r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
        }, {
            s: 'QNX',
            r: /QNX/
        }, {
            s: 'UNIX',
            r: /UNIX/
        }, {
            s: 'BeOS',
            r: /BeOS/
        }, {
            s: 'OS/2',
            r: /OS\/2/
        }, {
            s: 'Search Bot',
            r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
        }];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(nAgt)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = unknown;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS X':
                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'Android':
                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }

         var flashVersion = 'no check';
        if (typeof swfobject != 'undefined') {
            var fv = swfobject.getFlashPlayerVersion();
            if (fv.major > 0) {
                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
            } else {
                flashVersion = unknown;
            }
        }
    

 var jscd = {
        screen: screenSize,
        browser: browser,
        browserVersion: version,
        mobile: mobile,
        os: os,
        osVersion: osVersion,
        cookies: cookieEnabled,
        flashVersion: flashVersion
    };

return 'OS: ' + jscd.os + ' ' + jscd.osVersion + '\n' +    'Browser: ' + jscd.browser + ' ' + jscd.browserVersion + '\n' +   'Mobile: ' + jscd.mobile + '\n' +    'Flash: ' + jscd.flashVersion + '\n' +    'Cookies: ' + jscd.cookies + '\n' +      'Screen Size: ' + jscd.screen; }






function encodetext() {
  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
  
  var text = document.getElementById('input_string').value;
  var encodedString = Base64.encode(text);  
  document.getElementById("output_string").textContent = encodedString;
}

function decodetext() {
  var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
  
  var text = document.getElementById('input_string').value;
  var decodedString = Base64.decode(text); 
  document.getElementById("output_string").textContent = decodedString;
}


var _iir_codpr='<input class="input_text" id="input_string" type="text" placeholder="Enter text"><br><br><button class="btn_encode" onclick="encodetext()">Encode</button><button class="btn_decode" onclick="decodetext()">Decode</button><br><br>  <span class="output_text" id="output_string"></span>';






var btn_top_ht={};
btn_top_ht.css='<style> .zpelement{margin:20px 0 0;clear:both} .zpelem-box {  padding: 0px;  border-width: 0px;  border-style: solid; }.zpbox-container .zpelement:first-child{margin-top:0}.zpelem-box {  background-color: transparent;  border-color: transparent; } .rounded-floating-btn {      position: fixed;    right: 20px;    width: 50px !important;    /*height: 75px !important;*/   bottom: 20px;    padding: 15px;   z-index: 5;    border-radius: 2px;    cursor: pointer;    background-color: #101010;    box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);   opacity:1;   color: #fff;    font-size: 70%;    font-weight: 400;  -webkit-transition: all 0.1s ease; transition: all 0.1s ease; }   .floated-btn-svg-icon {    width: 20px;  -webkit-transition: all 0.1s ease; transition: all 0.1s ease;  fill: #fff;    margin: 0 auto;    margin-top: 3px;}   .rounded-floating-btn:hover { -webkit-transition: all 0.1s ease; transition: all 0.1s ease;opacity:0.9; }    .rounded-floating-btn .zptext {   -webkit-transition: all 0.1s ease; transition: all 0.1s ease; margin-top: 3px;   }  .zptext-align-center{text-align:center}    </style>';
btn_top_ht.code='<div class="zpelem-box zpelement zpbox-container zpdefault-section zpdefault-section-bg rounded-floating-btn" data-background-type="none" style="display:none" id="scrollToTop" onclick="clifkyiottp();"><div class="floated-btn-svg-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.831 268.832"><path d="M223.255 83.659l-80-79.998c-4.881-4.881-12.797-4.881-17.678 0l-80 80c-4.883 4.882-4.883 12.796 0 17.678 2.439 2.44 5.64 3.661 8.839 3.661s6.397-1.221 8.839-3.661l58.661-58.661v213.654c0 6.903 5.597 12.5 12.5 12.5 6.901 0 12.5-5.597 12.5-12.5V42.677l58.661 58.659c4.883 4.881 12.797 4.881 17.678 0 4.882-4.881 4.882-12.795 0-17.677z"></path></svg></div><div class="zptext zptext-align-center" style="display:none;"><p>TOP</p></div></div>';

var zzdiv = document.createElement('div');   
zzdiv.id="btn_top-ds";

function clifkyiottp(){   }

window.onload=function(){  zzdiv.innerHTML=btn_top_ht.css+btn_top_ht.code;     zzdiv.addEventListener('click',function(e){    e.preventDefault();    window.scrollTo(0,0);});     document.body.appendChild(zzdiv);          };
window.onscroll = function() {    var threshold = 50;   var scrollToTop_btn = document.getElementById('scrollToTop');   scrollToTop_btn.style.display = (document.body.scrollTop > threshold || document.documentElement.scrollTop > threshold) ? 'block' : 'none';  };





