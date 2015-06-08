window.ADTECH = window.ADTECH || {};
window.ADTECH.load = window.ADTECH.load || function(scriptUrl, scriptName, callbackFn) {

    function scriptNameExist() {
        if ("string" === typeof scriptName) {
            var win = window;
            scriptName = scriptName.split('.');
            for (var i = 0; i < scriptName.length; i++) {
                win = win[scriptName[i]];
            }
            return "undefined" !== typeof win;
        }
        return !1;
    }

    function callbackExist() {
        return "function" === typeof callbackFn || "function" === typeof scriptName;
    }

    function tryCallback() {
        if ("function" === typeof callbackFn) {
            callbackFn();
        } else if ("undefined" === typeof callbackFn && "function" === typeof scriptName) {
            scriptName();
        }
    }

    if (scriptNameExist()) {
        if (callbackExist()) {
            tryCallback();
        }
    }  else {
        var scriptObject = document.createElement("script");
        scriptObject.type = "text/javascript";
        if (callbackExist()) {
            scriptObject.onload = scriptObject.onreadystatechange = function() {
                if (!scriptObject.readyState || /loaded|complete/.test(scriptObject.readyState)) {
                    tryCallback();
                }
            };
        }
        scriptObject.src = "" + scriptUrl;
        var parentElement = document.getElementsByTagName('script')[0];
        parentElement.parentNode.insertBefore(scriptObject, parentElement);
    }
};
