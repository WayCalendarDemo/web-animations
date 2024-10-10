let helper = function () {

    'use strict';
  
    var methods = {};
  
    /*
    ヘルパー関数はここから
    */
    methods.loadjs = function(jsPath, loadPreference = 'defer', anchor) {
      if( jsPath == undefined ) {
        console.error("helper.loadjs: ロードするjsファイルのパスは指定されていません");
      }
  
      let scriptElement = document.createElement('script');
      const defaultAnchor = document.getElementById('jsHelper');
      const s = document.getElementsByTagName('script')[0];
      const a = document.getElementById(anchor);

      scriptElement.src = jsPath;
      if( loadPreference == 'defer' ) {
        scriptElement.defer = 'true';
      }
      else if( loadPreference == 'async') {
        scriptElement.async = 'true';
      }
  
      if( anchor == undefined ) {
        defaultAnchor.after(scriptElement);
      } else {
        console.log('prepend');
        a.before(scriptElement);
      }
      // document.getElementById('jsHelper').after(scriptElement)
    };
  
    methods.loadjsBefore = function(source, callback) {
      var scriptElement = document.createElement('script');
      var prior = document.getElementsByTagName('script')[0];
      scriptElement.async = 1;
  
      scriptElement.onload = scriptElement.onreadystatechange = function( _, isAbort ) {
          if(isAbort || !scriptElement.readyState || /loaded|complete/.test(scriptElement.readyState) ) {
              scriptElement.onload = scriptElement.onreadystatechange = null;
              scriptElement = undefined;
  
              if(!isAbort && callback) setTimeout(callback, 0);
          }
      };
  
      scriptElement.src = source;
      prior.parentNode.insertBefore(scriptElement, prior);
  }
  
    methods.isVisibleInViewPort = function(observedObj, callBackFunction, viewportObj = null, rootMargin = "0px") {
      const objToObserve = document.querySelectorAll(observedObj);
  
      const objOptions = {
        root: viewportObj,
        threshold: 0.1,
        rootMargin: rootMargin,
      };
  
      const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
      objToObserve.forEach(objToObserve => sectionObserver.observe(objToObserve))
    }
  
    /*
    ヘルパー関数はここまで
    */
    return methods;
  }();