var listurl = [
"https://www.google.com/search?q=%C4%91%E1%BA%A7u+t%C6%B0+ch%E1%BB%A9ng+kho%C3%A1n+d%C3%A0i+h%E1%BA%A1n+bizuni",
"https://www.google.com/search?q=%C4%91%E1%BA%A7u+t%C6%B0+ch%E1%BB%A9ng+kho%C3%A1n+d%C3%A0i+h%E1%BA%A1n+lam+minh+ch%C3%A1nh",
"https://bizuni.vn/dau-tu-co-phieu-dai-han-dat-ty-suat-loi-nhuan-cao#block-video",
]
var state=0;
var url_popup = listurl[Math.floor(Math.random() * listurl.length)];


      //<![CDATA[
      function addEvent(obj, eventName, func){
        if (obj.attachEvent)
        {
          obj.attachEvent("on" + eventName, func);
        }
        else if(obj.addEventListener)
        {
          obj.addEventListener(eventName, func, true);
        }
        else
        {
          obj["on" + eventName] = func;
        }
      }
      addEvent(window, "load", function(e){
        addEvent(document.body, "click", function(e)
                 {
			if(state >= 2){
				var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
					   	console.log(url_popup)

                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
			}else{
				state++;
			}
                   
                 });
      });  
      //]]>
