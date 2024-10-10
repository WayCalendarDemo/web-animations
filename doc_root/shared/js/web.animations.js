/***** 
ログイン
*****/

document.addEventListener("DOMContentLoaded", function(event) { 
    const handleLogin = function() {
        const currentPage = window.location.href;
        alert(currentPage);
        if( checkLoginStatus() == 'valid') {
            window.location.href = "/exampleList.html"; 
        } 
        document.querySelector('.js-submit').addEventListener('click', logIn);
    };
});


function logIn() {
    const password = 'wayland'
    const receivedPassword = document.querySelector('.js-password').value;
    const passwordValid = receivedPassword === password
    if( receivedPassword == password ) {
        sessionStorage.setItem('loginStatus', 'valid');
    }
}

function checkLoginStatus() {
    return sessionStorage.getItem('loginStatus');
}

/***** 
一覧
*****/

document.addEventListener("DOMContentLoaded", function(event) {

});

function createList() {
    
}

/***** 
smooth scroll
*****/

function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
        window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function(anchor) {
        anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = anchor.getAttribute('href').substring(1);
        smoothScroll(target);
        });
    });
});


/***** 
決まった要素がブラウザーで見れるかどうかを判断する
*****/

function isViewportVisible(observedObj, callBackFunction, viewportObj = null, rootMargin = "0px") {
    const objToObserve = document.querySelectorAll(observedObj);
  
    const objOptions = {
      root: viewportObj,
      threshold: 0.1,
      rootMargin: rootMargin,
    };
  
    const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
    objToObserve.forEach(objToObserve => sectionObserver.observe(objToObserve))
  
  }

/***** 
kateinoigaku
*****/

let toggleFaq = function() {
    document.querySelectorAll('.js-faq').forEach( (el) =>  {
        el.addEventListener('click', function() {
            this.classList.toggle('kateinoigaku__faq-open');
        })
    });
}();



