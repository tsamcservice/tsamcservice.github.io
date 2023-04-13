for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    try {
      document.getElementsByClassName("post-time")[0].innerHTML = document.getElementsByClassName("post-time")[0].innerText.replace("00:00:00", "")
    } catch (e) { }
    try {
      document.getElementsByClassName("post-tags")[0].innerHTML = '<div><span></span><span class="tag"></span></div><div><a href="javascript:window.history.back();">back</a><span> . </span><a href="/">home</a></div>'
    } catch (e) { }
    try {
      document.getElementsByClassName("link-item")[1].innerHTML = '<i class="iconfont fab fa-line"></i>'
      Type(["|"])
    } catch (e) { }
    try {
      document.getElementsByClassName("copyright")[0].innerHTML = '<span>© Albert Wang | Powered by <a href="https://hexo.io" target="_blank">Hexo</a> & Theme by <a href="https://github.com/Siricee/hexo-theme-Chic" target="_blank">Chic</a></span>'
    } catch (e) { }
    try {
      document.getElementsByClassName("tocbot-toc-expand")[0].innerHTML = ''
    } catch (e) { }
    try {
      if (location.pathname.includes("/tags/Posts/") || location.pathname.includes("/tags/LeetCode/")) {
        document.getElementsByClassName("post-wrap tags")[0].innerHTML = ''
      }
    } catch (e) { }
    try {
      var myElement = document.querySelector('#canvas-nest');
      if (!myElement && location.pathname != "/") {
        var scriptEl = document.createElement('script');
        scriptEl.src = '/js/canvas-nest.js';
        scriptEl.id = 'canvas-nest';
        document.body.appendChild(scriptEl);
      }
      else{
        main=document.getElementsByClassName("main")[0]
        main.style.backgroundImage = "url('/image/whte.png')";
        main.style.backgroundSize = "cover";
        main.style.backgroundPosition = "center";
        main.style.transition = "background-image 1s ease-in-out";
      }
    } catch (e) { }
  }, i * 10);
}

setTimeout(function () {
  
  Type(["跌倒，是成長的保障，是學習的寶藏。", "Mistakes are stepping stones to success.","Eat, Sleep, Code, Repeat."])
  // Falling is the guarantee of growth and the treasure of learning
  startSlideshow(3000);

}, 600);


function startSlideshow(nextImageTime) {
  var images = ['/image/white.png','/image/white.png','/image/image4.jpg', '/image/image3.jpg', '/image/image4.jpg'];
  var currentIndex = 0;
  var main = document.querySelector('.main');
  var img = new Image();
  var interval;
  
  function preload() {
    for (var i = 0; i < images.length; i++) {
      img.src = images[i];
    }
  }
  
  function switchImage() {
    currentIndex = (currentIndex + 1) % images.length;
    main.style.backgroundImage = 'url(' + images[currentIndex] + ')';
  }
  
  function start() {
    preload();
    switchImage();
    interval = setInterval(switchImage, nextImageTime);
  }
  
  start();
}

function Type(str_list) {
  try {
    (win => {
      win.getScript = url => new Promise((resolve, reject) => {
        const script = document.createElement('script')
        script.src = url
        script.async = true
        script.onerror = reject
        script.onload = script.onreadystatechange = function () {
          const loadState = this.readyState
          if (loadState && loadState !== 'loaded' && loadState !== 'complete') return
          script.onload = script.onreadystatechange = null
          resolve()
        }
        document.head.appendChild(script)
      })
    })(window)

    document.getElementsByClassName("description")[0].innerHTML = "<div style='width:500px;' id='site-subtitle'><span id='subtitle'></span></div>"

    window.typedJSFn = {
      init: (str) => {
        window.typed = new Typed('#subtitle', Object.assign({
          strings: str,
          startDelay: 300,
          typeSpeed: 90,
          loop: true,
          backSpeed: 40,
        }, null))
      },
      run: (subtitleType) => {
        if (true) {
          if (typeof Typed === 'function') {
            subtitleType()
          } else {
            getScript('https://cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js').then(subtitleType)
          }
        } else {
          subtitleType()
        }
      }
    }
    function subtitleType() {
      if (true) {
        typedJSFn.init(str_list)
      } else {
        document.getElementById("subtitle").innerHTML = '跌倒，是成長的保障，是學習的寶藏。'
      }
    }
    typedJSFn.run(subtitleType)
  } catch (e) { }
}