/*$Id$    window.location.href   */
/**
* app : socialShare
* version : 1.0.0
* 
*/
var socialShare = (function() {
	var http = 'ht'+'tp://', https = 'ht'+'tps://', url_ori = location.href, click_target = "zpsocial-share-item", html_url = "https://fcasfs-of.github.io/Player/Share/fs-s.html", //No I18N
		appSDKId = 'zsApp_socialShareSDKs', container = "zpsocial-share-container",//No I18N
		styleCls = "zpsocial-share-style-", alignCls = "zpsocial-share-align-",//No I18N
		halignCls = "zpsocial-share-halign-",//No I18N
		hideCountClass = 'zpsocial-share-count-disable',//NO I18N
		html,
		url = encodeURIComponent(url_ori),
		// for social networks which has to be handled separately, true is set
		// else for those which doesn't have the count, false is set
		// else set the api url
		api_url = {
			googleplus	: false,
			pinterest	: https+'widgets.pinterest.com/v1/urls/count.json?source=6&url=',//No I18N
			linkedin	: https+'www.linkedin.com/countserv/count/share?url=',//No I18N
			reddit		: https+'buttons.reddit.com/button_info.json?url=',//No I18N
			facebook	: https+'graph.facebook.com/?id=',//No I18N
			twitter		: false,
			whatsapp	: false,
			telegram	: false,
			tumblr		: https+'api.tumblr.com/v2/share/stats?url=',//No I18N
			buffer		: https+'api.bufferapp.com/1/links/shares.json?url=',//No I18N
			hatena 		: https+'b.hatena.ne.jp/entry.count?url=',//No I18N
			mailru		: https+'connect.mail.ru/share_count?url_list='//No I18N
		};
	function init(appCont, data){
		loadContent(appCont , data);
	}
	
	function loadContent(cont , data) {
		$X.get({
			url: html_url,
			handler : function(){
				html = this.response;
				cont.innerHTML = html;
				var social_container = $D.get('.'+container, cont);
				$D.addClass(social_container, styleCls+_attr(cont, 'style'));
				$D.addClass(social_container, alignCls+_attr(cont, 'align'));
				$D.addClass(social_container, halignCls+ (_attr(cont, 'halign') || 'left'));
				if(!JSON.parse(_attr(cont, 'count'))){
					$D.addClass(social_container, hideCountClass)
				}
				$D.getAll("."+click_target, cont).forEach(function(node){
					$E.bind(node, 'click', share);
				});
				loadCounts(cont);
				data.loaded(); //process to be done after app load
			}
		});
	}

	function _attr(el, attr){
		return el.getAttribute('data-'+attr).trim();//No I18N
	}

	function applyContextProperties(app){

	}

	function CallBack(media, response) {
		// console.log('CallBack for media ', media, response)
		var count
		var bulk
		try{
			switch(media){
				case 'reddit' : //No I18N
					bulk = response.data.children
					count = bulk.length > 0 ? bulk[0].data.score: 0
					break;
				case 'facebook' ://No I18N
					count = response.share.share_count
					break;
				case 'linkedin' : //No I18N
					count = response.count
					break;
				case 'pinterest' ://No I18N
					count = response.count
					break;
				case 'tumblr' : //No I18N
					count = response.response.note_count
					break;
			}
			// console.log('from CallBack, count => ', count, ' media => ', media)
			updateCount(media, count)
		}catch(err) {
			window['con'+'sole'].error('Error while getting '+media+' count')//No I18N
		}
	}

	// function pinterestCallBack(response){
	// 	updateCount('pinterest', response.count);//No I18N
	// }

	// function linkedinCallBack(response){
	// 	updateCount('linkedin', response.count);//No I18N
	// }

	// function redditCallBack(response){
	// 	var bulk = response.data.children;
	// 	updateCount('reddit', bulk.length > 0 ? bulk[0].data.score: 0);//No I18N
	// }

	// function facebookCallBack(response){
	// 	updateCount('facebook', response.share.share_count);//No I18N
	// }

	// function tumblrCallBack(response){
	// 	updateCount('tumblr', response.response.note_count);//No I18N
	// }

	/*  @param 	cls		the network name of the element
	*   @param 	cnt 		the count to update
	*/
	function updateCount(cls, cnt){
		cnt = shrinkCount(cnt);
		var els = document.querySelectorAll('.zpsocial-share-item.zpwrapper-'+cls+' .zpsocial-share-count');//No I18N
		for(var i = 0 ; i<els.length; i++){
			els[i].textContent = cnt;
		}
	}

	//get the media list from the HTML
	function getMedias(cont){
		var medias = [];
		$D.getAll('.'+click_target, cont).forEach(function(md){
			medias.push(getMediaName(md));
		});
		return medias;		
	}

	/* 	shrinks the count value into short form
	*	@param 	val 	the count to be shrinked
	* 	@return the shrinked value
	*/
	function shrinkCount(val) {
	    if(val < 1000){
	        return val;
	    }
	    else if(val < 1000000){
	        return round((val/1000), 1)+'K';//No I18N
	    }
	    else{
	        return round((val/1000000), 1)+'M';//No I18N
	    }
	}

	/*	rounds off the values after the decimal point.
	*	@param 	val 	the input number
	* 	@param 	prec 	the number of places to be rounded off
	* 	@return returns the rounded off value
	*/
	function round(val, prec){
	    var factor = Math.pow(10, prec);
	    var temp = val * factor;
	    var rndTemp = Math.round(temp);
	    return rndTemp / factor;
	}

	/* 	loads the socialicons */
	function loadCounts(cont){
		var toLoad = getMedias(cont);
		if(Array.isArray(toLoad)){
			var scriptel = $D.getById(appSDKId);
			if(scriptel){
				$D.remove(scriptel);
			}
			scriptel = document.createElement('span');
			scriptel.id = appSDKId;
			document.body.appendChild(scriptel);
			toLoad.forEach(function(item){
				var obj = api_url[item];
				if(obj){
					getCount(item, scriptel);
				}
			});
		}
	}

	/** invokes the api of the particular social media and gets the count for that page 
	*	@param 	socialMedia the name of the socialmedia to invoke
	*	@param 	sdkEl 		the script element to which acts as the holder for the invoking scripts
	*/
	function getCount(socialMedia, sdkEl){
		var reqUrl = api_url[socialMedia];
		var count = -1;
		if(reqUrl){
			// if(socialMedia == 'googleplus'){//No I18N
			// 	  var data ={
			// 	    'method': 'pos.plusones.get',//No I18N
			// 	    'id'	: url_ori,//No I18N
			// 	    'params': {//No I18N
			// 	      'nolog'	: true,//No I18N
			// 	      'id'		: url_ori,//No I18N
			// 	      'source'	: 'widget',//No I18N
			// 	      'userId'	: '@viewer',//No I18N
			// 	      'groupId'	: '@self'//No I18N
			// 	    },
			// 	    'jsonrpc': '2.0',//No I18N
			// 	    'key'	 : 'p',//No I18N
			// 	    'apiVersion': 'v1'//No I18N
			// 	  };
			// 	  $X.post({
			// 	  	url: https+'clients6.google.com/rpc',//No I18N
			// 	  	handler: showGCount,
			// 	  	bodyJSON: data
			// 	  });
			// 	return;
			// }
			var script = document.createElement('script');
			var callback = 'callback';//No I18N
			if(socialMedia == 'reddit'){//No I18N
				callback = 'jsonp';//No I18N
			} else if(socialMedia == 'mailru'){
				callback = 'callback=1&func=';//No I18N
			}
			script.src = reqUrl+url+'&'+callback+'=socialShare.'+socialMedia+'CallBack';//No I18N
			sdkEl.appendChild(script);
		}
	}
	/* callback url for the googleplus api */
	function showGCount(){
		updateCount('googleplus', (JSON.parse(this.response)).result.metadata.globalCounts.count);//No I18N
	}

	function getMediaName(el){
		return /zpwrapper-([\w-_]+)/.exec(el.className)[1];
	}

	/* pops up the share window  */
	function share(e){
 var wz_isdfltl = {innerHTML:""};   var wz_is_imfgdfltl = "";  
		var target = e.currentTarget;
		if(!$D.hasClass(target, click_target)){
			return;
		}
		e.preventDefault();
		e.stopPropagation();
		var media = getMediaName(target);
		var shareUrl = {
			googleplus: { url: https+'plus.google.com/share?url=',h: 600, w:600 },//No I18N
			facebook: 	{ url: https+'www.facebook.com/sharer/sharer.php?&u=',w: 626, h:436	},//No I18N
			twitter: 	{ url: https+'twitter.com/intent/tweet?&url=', h: 420, w: 550 }, //No I18N
			pinterest: 	{ url: https+'www.pinterest.com/pin/create/button/?url=',h: 600, w:765	},//No I18N
			linkedin: 	{ url: https+'www.linkedin.com/shareArticle?mini=true&url=', h: 400 ,w: 600	},//No I18N
			reddit: 	{ url: https+'www.reddit.com/submit?url=',h: 600,w: 600 }, //No I18N
			tumblr: 	{ url: https+'www.tumblr.com/share/link?url=',h: 600, w: 600 },//No I18N
			whatsapp: 	{ url: https+ 'wa.me/?text=', h: '', w:''},//NO I18N
			telegram:   { url: https+'t.me/share/url?url=', h:'', w:''},//NO i18N
			vk: 	{ url: https+'vk.com/share.php?title='+wz_isdfltl.innerHTML+'&description=&image='+wz_is_imfgdfltl+'&url=', h: 600, w: 600},//No I18N
			surf: 	{ url: https+'surfingbird.ru/share?description=&screenshot='+wz_is_imfgdfltl+'&title='+wz_isdfltl.innerHTML+'&url=', h: 600, w: 600},//No I18N
			skype: 	{ url: https+'web.skype.com/share?source=button&text='+wz_isdfltl.innerHTML+'&url=', h: 600, w: 600},//No I18N
			ok_ru: 	{ url: https+'connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=', h: 600, w: 600},//No I18N
			livejournal: 	{ url: http+'www.livejournal.com/update.bml?subject='+wz_isdfltl.innerHTML+'&event=', h: 600, w: 600},//No I18N
			mail_google: 	{ url: https+'mail.google.com/mail/?view=cm&su='+wz_isdfltl.innerHTML+'&body=', h: 600, w: 600},//No I18N
			xing: 	{ url: https+'www.xing.com/app/user?op=share;title='+wz_isdfltl.innerHTML+';url=', h: 600, w: 600},//No I18N
			yahoo_bookmarks: 	{ url: https+'compose.mail.yahoo.com/?subject='+wz_isdfltl.innerHTML+'&body=', h: 600, w: 600},//No I18N
			wechat: 	{ url: 'weixin://dl/chat?text=', h: 600, w: 600},//No I18N
			fb_messenger: 	{ url: 'fb-messenger://share?link=', h: 600, w: 600},//No I18N
			blogger: 	{ url: https+'www.blogger.com/blog-this.g?t='+wz_isdfltl.innerHTML+'&n='+wz_isdfltl.innerHTML+'&u=', h: 600, w: 600},//No I18N
			wordpress: 	{ url: https+'wordpress.com/press-this.php?t='+wz_isdfltl.innerHTML+'&n='+wz_isdfltl.innerHTML+'&i='+wz_is_imfgdfltl+'&s=&u=', h: 600, w: 600},//No I18N
			buffer: 	{ url: https+'bufferapp.com/add?text='+wz_isdfltl.innerHTML+'&n='+wz_isdfltl.innerHTML+'&url=', h: 600, w: 600},//No I18N
			flipboard: 	{ url: https+'share.flipboard.com/bookmarklet/popout?title='+wz_isdfltl.innerHTML+'&url=', h: 600, w: 600},//No I18N
			sms: 	{ url: 'sms:?body=', h: 600, w: 600},//No I18N
			line: 	{ url: https+'lineit.line.me/share/ui?text='+wz_isdfltl.innerHTML+'&url=', h: 600, w: 600},//No I18N
			evernote: 	{ url: http+'www.evernote.com/clip.action?title='+wz_isdfltl.innerHTML+'&url=', h: 600, w: 600},//No I18N
			google: 	{ url: https+'www.google.com/bookmarks/mark?op=edit&title='+wz_isdfltl.innerHTML+'&annotation=&bkmk=', h: 600, w: 600},//No I18N
			mail_ru: 	{ url: https+'connect.mail.ru/share?share_url=', h: 600, w: 600},//No I18N
			stumbleupon: 	{ url: http+'www.stumbleupon.com/submit?title='+wz_isdfltl.innerHTML+'&url=', h: 600, w: 600},//No I18N
			digg: 	{ url: http+'www.digg.com/submit?url=', h: 600, w: 600},//No I18N
			email: 	{ url: 'mailto:?subject='+wz_isdfltl.innerHTML+'&body=', h: 600, w: 600},//No I18N
			qrcode: 	{ url: http+'www.qrsrc.com/qrcode.aspx?url=', h: 600, w: 600},//No I18N
			pocket: 	{ url: https+'getpocket.com/save?url=', h: 600, w: 600}//No I18N
		};
		var obj = shareUrl[media];
		window.open(obj.url + url, '','directories=no, status=no, toolbars = no, menubar=no, scrollbars=no, copyhistory=no, chrome=no' + getValue('height', obj.h) + getValue('width', obj.w));//No I18N
	}

	function getValue(key, value) {
		return  value ? ', '+key+'='+value: '';
	}

	var _this = {
		init : init,
		share : share//,
		// pinterestCallBack : pinterestCallBack,
		// facebookCallBack  : facebookCallBack,
		// linkedinCallBack  : linkedinCallBack,
		// redditCallBack 	  : redditCallBack,
		// tumblrCallBack 	  : tumblrCallBack
	}

	Object.keys(api_url).forEach(createCallBack)

	function createCallBack(media) {
		if(api_url[media]){
			_this[media+'CallBack'] = CallBack.bind(null, media)	
		}
		
	}

	return _this
})();

 
