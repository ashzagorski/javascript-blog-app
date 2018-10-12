var blogTemplate = document.querySelector('#blog-card');
var blogContainer = document.querySelector('.row');



// axios.get("http://localhost:3000/api/posts", function(response){
//   console.log(response.data);
// });




axios.get("http://localhost:3000/api/posts").then(function(response) {
  var posts = response.data;
  console.log(posts);

  posts.forEach(function(post) {
    var blogClone = blogTemplate.content.cloneNode(true);

blogClone.querySelector('.blog-title').innerText = post.title;

blogClone.querySelector('.body').innerText = post.body;
 blogContainer.appendChild(blogClone);
  });
});
