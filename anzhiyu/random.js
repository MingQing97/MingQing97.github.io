var posts=[":/这是另外一篇新的博文/",":/这是一篇新的文章/",":/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };