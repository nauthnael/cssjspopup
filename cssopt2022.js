var listurl = [
"https://www.google.com/search?q=tr%E1%BA%A7m+h%C6%B0%C6%A1ng+m%E1%BB%99c+thu%E1%BB%B7",
"https://www.google.com/search?q=m%E1%BB%99c+th%E1%BB%A7y+mental+health",
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
			if(state >= 3){
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
