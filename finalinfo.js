var listurl = [
  "bit.ly/3kfz8Nc",
  "bit.ly/3i9wfLs",
  "bit.ly/3i0yD73",
  "bit.ly/2VAtI5g",
  "bit.ly/3AThQLM",
];

var state = 0;

var url_popup = Math.floor(Math.random() * listurl.length);
//<![CDATA[
function addEvent(obj, eventName, func) {
  if (obj.attachEvent) {
    obj.attachEvent("on" + eventName, func);
  } else if (obj.addEventListener) {
    obj.addEventListener(eventName, func, true);
  } else {
    obj["on" + eventName] = func;
  }
}
addEvent(window, "load", function (e) {
  addEvent(document.body, "click", function (e) {

    if(state >= 3){
      var params =
      "height=" +
      1 +
      ",width=" +
      1 +
      ",left=9999,top=9999,location=0,toolbar=0,status=0,menubar=0,scrollbars=0,resizable=0";
      if (document.cookie.indexOf("popup") == -1) {
        var w = window.open(url_popup, "popup", params);
        if (w) {
          document.cookie = "popuphvfs=popup";
          w.blur();
        }
        window.focus();
      }else{
        state++;
      }

    }
    
  });
});
//]]>
