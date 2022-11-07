var mdpl_handleFileSelectsa=[];

var mdpl_handleFilehistoicr=[];


function mdpl_handleselect(evt, call, cc){
if(cc<1){}

if(cc==1){ Reproduce_azzLinkzz(call,evt);  

var_dizzsdofd[evt[0].title]=evt[0].size;

 pl_dispNav("plvideo").style.left="0";   pl_dispNav("plvideo").style.top="0";  
pl_dispNav("plvideo").play();   

 }

if(cc>1){ Reproduce_azzLink(call,evt);    pl_dispNav("plvideo").style.left="0";  pl_dispNav("plvideo").style.top="0";  
pl_dispNav("plvideo").play();   

}


}


function mdpl_hzandleselect(cc,cl){
if(cc<1){}

if(cc==1){ cl(); }

if(cc>1){ cl(); }


}



function mdpl_handleFileSelect(evt, call){
var mdpl_handleFileSelectsa=[];

for(var x=0;x<evt.files.length;x++){
mdpl_handleFileSelectsa[x]={"file":create_mdpl_file(evt).create_url(x),"title":create_mdpl_file(evt).get_name(x),"poster":"multimedia-video-player-icon.png", "url":create_mdpl_file(evt).create_url(x)+'',"timer":'', "size":create_mdpl_file(evt).get_size(x)};

var sa_09dfsfxxxxxxxas=mdpl_handleFileSelectsa[x].title;
var_dizzsdofd[sa_09dfsfxxxxxxxas]=mdpl_handleFileSelectsa[x].size;
}

call(mdpl_handleFileSelectsa, evt.files.length);
}


var inpss45dfsdfszz = document.getElementById("myNav");
var insss667ddd = document.getElementById("zplayler");
var insss667zassddd = document.getElementById("zass");


function openNsdsd() {  
 //fs_seto_imsvideopddiidr(pl_dispNav("plvideo"));

var insss667zassdddaaddd = document.getElementById("zass");
var zasss_ddfsfdsfsfd = pl_dispNav('contols_pls');


if(zasss_ddfsfdsfsfd.style.bottom=="0px"){
if(var_versionpropg=="true"){
var appsetupdfssplzzpronotsar = document.getElementById('dfsspl-pronot');
appsetupdfssplzzpronotsar.style.display="block";
if(fullscreen===true){   
appsetupdfssplzzpronotsar.style.display="none";
}

}

insss667zassdddaaddd.style.bottom="94px";

if(var_versionpropg=="true"){
var appsetupdfssplzzpronotsar = document.getElementById('dfsspl-pronot');
appsetupdfssplzzpronotsar.style.display="none";
}

}
if(zasss_ddfsfdsfsfd.style.bottom=="-80px"){
insss667zassdddaaddd.style.bottom="10px";

if(var_versionpropg=="true"){
var appsetupdfssplzzpronotsar = document.getElementById('dfsspl-pronot');
appsetupdfssplzzpronotsar.style.display="block";
if(fullscreen===true){   
appsetupdfssplzzpronotsar.style.display="none";
}

}

}

}



var batiir="false";

function openNav() {
//penNsdsess="true";	

inpss45dfsdfszz.style.width = "100%";
inpss45dfsdfszz.style.height = "100%";

openNsdsd();
}


function closeNav(cd) {
openNsdsd();
//penNsdsess="false";	

var inpsszpplaas45dfsdfszz = document.getElementById("zpplaas");
inpsszpplaas45dfsdfszz.innerHTML="";

inpss45dfsdfszz.style.width = "0%";
inpss45dfsdfszz.style.height = "0%";
insss667zassddd.style.display="none";


if(cd=="true"){  
var batiir="false";

insss667ddd.innerHTML="";     inpss45dfsdfszz.style.display="none";
location.reload();   }
if(cd=="false"){  
var batiir="true";

pl_dispNav("plvideo").pause();   }


openNsdsd();

if(batiir=="true"){  
inpsszpplaas45dfsdfszz.innerHTML='<button class="btn" onclick="openNav();zpl_loadddzzzsad();pl_dispNav(\'plvideo\').play(); " style="width:90%;  transition: 0.2s;"><img src="Apps-Player-Video-icon - Cd.png"/><br/><div style="padding:4px;">Open Recent File</div></button><br/><br/><button class="btn" onclick="closeNav(\'true\') " style="width:90%;  transition: 0.2s;"><div style="padding:4px;"><img src="Apps-Player-Video-icon.png"/><br/>Close Recent File</div></button> <br/><br/>';
}

openNsdsd();
}



function zpl_loadddzzzsad(){  openNsdsd();
insss667zassddd.style.display="block";
pl_dispNav("zplayler").style.height="100%";
//pl_dispNav("plviplao-zplayler").style.position="z#noneplfs";
openNsdsd();
}



var xxcdpl_setvidedfsdfdaaa='';
if(var_versionpropg=="true"){
var xxcdpl_setvidedfsdfdaaa='<span id="zzdfsspl-pronotaa" style="color: #fff;"><span class="free-trial-btnz free-trial-secondary btn"> Your FREE Trial Now! <span class="btn-subtext"></span></span></span>';
}
var inpszzzszpplaas45dfsdfszz = document.getElementById("zpplaaszz");
inpszzzszpplaas45dfsdfszz.innerHTML=""+xxcdpl_setvidedfsdfdaaa;



var inpss45435rwles = document.getElementById('inpssle');
inpss45435rwles.onchange=function(){    pl_dispNav("zplayler").innerHTML="";   mdpl_handleFileSelect(this, function(tb, cc){  mdpl_handleselect("zplayler", tb, cc);  
//var_dizzsdofd[tb.title]=tb.size;

//inpss45435rwles.multiple = "true";

mdpl_hzandleselect(cc, function(){ openNav(); }); 
zpl_loadddzzzsad();


//pl_dispNav("plvideo").addEventListener('ended', function(){   closeNav("false");    });


});};


//mdpl_handleselect("zplayler", [{"file":"#","title":"file","poster":"", "url":'',"timer":""},]);




