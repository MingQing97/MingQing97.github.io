var posts=["2025/02/22/hello-world/","2025/02/22/这是一篇新的文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };