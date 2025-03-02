var posts=[":/关于选品/",":/关于如何高效选品/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };