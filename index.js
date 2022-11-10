const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
        hasUserliked : false    
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
        hasUserliked : false    
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
        hasUserliked : false
    }
]

let timeline = document.getElementById("timeline-div")
let likeBtn = document.querySelectorAll("likes") 




//renderImg()



  
    const postContainer = document.getElementById("posts");
  const post = (posts) => {
    return `
      <section class="post">
          <div class="post-div">
              <img src="${posts.avatar}" class="avatar" />
              <div class="user-detail-container">
                  <p class="user-name">${posts.name}</p>
                  <p class="location">${posts.location}</p>
              </div>
          </div>
          <div class="img-div">
            <img src="${posts.post}" class="post-img" name="${posts.username}">
          </div> 
          <div class="comment-section">
              <img src="images/icon-heart.png" class="btn-img" id="like" name="${posts.username}">
              <img src="images/icon-comment.png" class="btn-img">
              <img src="images/icon-dm.png" class="btn-img">
          </div>
      
               <div class="post-btm">
                <div class="post-btm-likes">
                    <span class="post-likes likes" id="like-${posts.username}">${posts.likes} likes</span>
                </div>
                <p>
                    <strong>${posts.username}</strong>  ${posts.comment}
                    </p>
            </div>
      </section>

      `;
  };
  
  
   function renderPosts() {
    for (let i = 0; i < posts.length; i++) {
      postContainer.innerHTML += post(posts[i]);
    }
  }
  
  renderPosts();
  
  const likeBtns = document.querySelectorAll("#like");
  
  for (let i = 0; i < likeBtns.length; i++) {
    likeBtns[i].addEventListener("click", function () {
      const likesEl = document.getElementById("like-" + likeBtns[i].name);
      if(!posts[i].hasUserLiked) {
        posts[i].likes += 1;
        likeBtns[i].setAttribute("src","images/icon-heart-filled.png");
        likesEl.textContent = posts[i].likes + " likes";
        posts[i].hasUserLiked = true;
        likeBtns[i].classList.add("like-animation");
        setTimeout(function () {
          likeBtns[i].classList.remove("like-animation");
        },300);
      }
      else {
        posts[i].likes -= 1;
        likeBtns[i].setAttribute("src","images/icon-heart.png");
        likesEl.textContent = posts[i].likes + " likes";
        posts[i].hasUserLiked = false;
      }
    });
  }
  
  const postImgs = document.querySelectorAll(".post-img");
  
   for (let i = 0; i < likeBtns.length; i++) {
    postImgs[i].addEventListener('dblclick', function () {
      const likesEl = document.getElementById("like-" + postImgs[i].name);
      if(!posts[i].hasUserLiked) {
        posts[i].likes += 1;
        likeBtns[i].setAttribute("src","images/icon-heart-filled.png");
        likesEl.textContent = posts[i].likes + " likes";
        posts[i].hasUserLiked = true;
        likeBtns[i].classList.add("like-animation");
        setTimeout(function () {
          likeBtns[i].classList.remove("like-animation");
        },300);
      }
      else {
        posts[i].likes -= 1;
        likeBtns[i].setAttribute("src","images/icon-heart.png");
        likesEl.textContent = posts[i].likes + " likes";
        posts[i].hasUserLiked = false;
      }
    });
  }
 