var posts=["2025/02/22/这是另外一篇新的博文/","2025/02/22/这是一篇新的文章/","2025/02/22/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };