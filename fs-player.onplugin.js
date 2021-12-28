
!function(n,a){"use strict";var o,i,c="Text!",r=!1,l=function(e){var t=a.createElement("div");t.textContent=e,a.body.appendChild(t),function(e){if(a.selection)(t=a.body.createTextRange()).moveToElementText(e),t.select();else if(n.getSelection){var t;(t=a.createRange()).selectNode(e),n.getSelection().removeAllRanges(),n.getSelection().addRange(t)}}(t),a.execCommand("copy"),t.remove()};n.addEventListener("paste",function(e){o=e.clipboardData.getData("text/plain"),r=!0,e.preventDefault()}),n.copy={copy_selected:function(){},copy_text:l,paste:function(e){var t=n.clipboardData?n.clipboardData.getData("Text"):((i=a.createElement("textarea")).setAttribute("style","width:0px;border:0;display:none;opacity:0;"),a.body.appendChild(i),i.select(),function e(){if(0!=r){var t=o;return r=!1,a.body.removeChild(i),i=null,t}setTimeout(e,250)}());void 0!==e.val?e.val=t:void 0!==e.innerHTML?e.innerHTML=t:void 0!==e.value&&(e.value=t)},text:function(e){var t=c;e.hasAttribute("data-copy-text")&&(t=e.getAttribute("data-copy-text")),l(t)},from:function(e){var t,n,o=void 0;e.hasAttribute("data-copy-from")&&(o=a.querySelector(e.getAttribute("data-copy-from"))),void 0===o?l("Text!"):(n=c,void 0!==(t=o).val?n=t.val:void 0!==t.innerHTML?n=t.innerHTML:void 0!==t.value&&(n=t.value),l(n))},send:function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&this.status},t.open("GET",e,!0),t.send()}},n.addEventListener("load",function(){a.querySelectorAll("[data-copy-text]").forEach(function(e){null===e.onclick&&(e.onclick=function(){n.copy.text(this)})}),a.querySelectorAll("[data-copy-from]").forEach(function(e){null===e.onclick&&(e.onclick=function(){n.copy.from(this)})})},!1)}(window,document); 



fs_create_plugin("plugins_fs").object("zpreviewdemovideinz");

fs_create_plugin("plugins_fs").object("vtnsharre");

fs_create_plugin("plugins_fs").modal("light_box_modal");


fs_create_plugin("emb-fs").object("lightcomme_box_modal"); 
fs_create_plugin("emb-fs").object("lightembe_box_modal"); 





function SelectfTdfext(element) {
    var doc = document, text = doc.getElementById(element), range, selection;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}




var wqqzasdfsfgsswwfltl = ""+'<div id="disqus_thread"></div>';//'<div class="comments">    <h2>Leave a comment</h2>    <form class="comments__form" onsubmit="setcoome(event)">   <span class="comments__form-submit" style="position:absolute;top:1px;right:8px" onclick="mdpl_ztoogle_dispNav(wqqzasdffgdgsswwmdpssswwfltl);">X</span>    <div class="comments__form-info">        <div class="comments__form-field">          <input id="comments__form-label-name" name="author" placeholder="Name" type="text" class="comments__form-input">          <label class="comments__form-label" for="comments__form-label-name">            <span class="comments__form-label-text">Name</span>          </label>        </div>        <div class="comments__form-field">          <input id="comments__form-label-mail" name="author" placeholder="E-mail" type="text" class="comments__form-input">          <label class="comments__form-label" for="comments__form-label-mail">            <span class="comments__form-label-text">E-mail</span>          </label>        </div>        <div class="comments__form-field">          <input id="comments__form-label-site" name="author" placeholder="Website" type="text" class="comments__form-input">          <label class="comments__form-label" for="comments__form-label-site">            <span class="comments__form-label-text">Website</span>          </label>        </div>      </div>      <div class="comments__form-text">    <div class="comments__form-field">          <textarea id="comments__form-label-text" name="author" placeholder="Express your thoughts" type="text" class="comments__form-input comments__form-textarea"></textarea>          <label class="comments__form-label" for="comments__form-label-text">            <span class="comments__form-label-text">Express your thoughts</span>          </label>        </div>      </div>  <input name="submit" type="submit" id="submit"  disabled="disabled" class="button comments__form-submit" value="Post Comment">    </form>  <br/>   <div class="comments__list">      <!-- Comments -->     </div>  </div><br/>'+"";


var wqqzasdfsfgsswwfltlz = '<div><pre class="code wp-block-code code-html" onclick="vop_emjjg();" style="background:#fff;"><label style="text-align:center;">embed</label><code id="embe-ilss">&lt;iframe src="'+location.href+'" width="320" frameborder="0" height="240" style="height:100%;width:100%;" allowfullscreen=""&gt;&lt;/iframe&gt;</code><hr/><pre class="first wp-block-code"><span style="color:#fff;">?embed=true  -(preview of file)<br/>?info=true  -(view info file)</span></pre></pre></div>';


var wqqzasdfsswwmdpssswwfltl = document.getElementById('vtnsharre');     wqqzasdfsswwmdpssswwfltl.innerHTML=""+"";

var wqqzasdffgdgsswwmdpssswwfltl = document.getElementById('lightcomme_box_modal');     wqqzasdffgdgsswwmdpssswwfltl.style.display="none"+"";

   var wqqzasdfdffsswwmdpssswwfltl = document.getElementById('lightcomme_box_modal');     wqqzasdfdffsswwmdpssswwfltl.innerHTML="<div style='padding:4px;'>"+wqqzasdfsfgsswwfltl+"</div><br/><br/><br/><br/><br/>";

var disqus_config = function () {
                this.page.url = location.href; 
                this.page.identifier = ""; 
            };
    (function() { 
        var d = document, s = d.createElement('script');
    s.async = true;
    s.src = 'https://fcasfs-of.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();


function setcoome(e){  
    e.preventDefault(); 
}

 
function vop_emjjg(){  
var wqqzasdffgdgsembeddlsswwfltl = document.getElementById('embe-ilss');  
 copy.copy_text('<iframe src="'+location.href+'" width="320" frameborder="0" height="240" style="height:100%;width:100%;" allowfullscreen=""></iframe>');
SelectfTdfext("embe-ilss");}

var wqqzasdffgdgsembeddlsswwfltl = document.getElementById('embe-ilss');
var wqqzasdffgdgslightembe_box_modalpssswwfltl = document.getElementById('lightembe_box_modal');   wqqzasdffgdgslightembe_box_modalpssswwfltl.style.display="none";   wqqzasdffgdgslightembe_box_modalpssswwfltl.innerHTML=wqqzasdfsfgsswwfltlz;
wqqzasdffgdgslightembe_box_modalpssswwfltl.oncontextmenu=function(){return true;this.preventDefault();};  wqqzasdffgdgslightembe_box_modalpssswwfltl.onselectstart=function(){return true;};  wqqzasdffgdgslightembe_box_modalpssswwfltl.ondragstart=function(){return false;};  








var serviceWorker=window; var self=window;
var btnAdd=document.getElementById("e3");


if ('serviceWorker' in navigator) {   navigator.serviceWorker.register('https://fcasfs-of.github.io/Player/service-worker/registration-events/service-worker.js', {
        scope: './'
    }).then(function (registration) {
        var serviceWorker;  
        if (registration.installing) {
            serviceWorker = registration.installing;
        } else if (registration.waiting) {
            serviceWorker = registration.waiting;
        } else if (registration.active) {
            serviceWorker = registration.active;
        }
        if (serviceWorker) {
        
            serviceWorker.addEventListener('statechange', function (e) {
                
            });
        }
    }).catch(function (error) {
        
    });
}



window.addEventListener('beforeinstallprompt', function(e) {
 //   console.log('beforeinstallprompt Event fired');
        e.userChoice.then(function(choiceResult) {
            //console.log(choiceResult.outcome);
            if(choiceResult.outcome == 'dismissed') {
            //console.log('User cancelled home screen install');
            }
            else {
            //console.log('User added to home screen');
            }
        });
    });



let deferredPrompt;

window.addEventListener('appinstalled', (evt) => {
  //app.logEvent('a2hs', 'installed');
});

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  btnAdd.style.display = 'block';
});

btnAdd.addEventListener('click', (e) => {
  btnAdd.style.display = 'none';
  deferredPrompt.prompt();
  deferredPrompt.userChoice
    .then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        //console.log('User accepted the A2HS prompt');
      } else {
        //console.log('User dismissed the A2HS prompt');
      }
      deferredPrompt = null;
    });
});


