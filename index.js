const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const tlDOM = document.getElementById("tl-div")

function renderPosts(){
  let postTL = ""
  for (let i=0; i < posts.length; i++){
    postTL += `
<section>
  <div class="post-div">
    <div class="user-loc">
      <img class="avatar" src="${posts[i].avatar}"/>
        <p class="user-info">
          <span><strong>${posts[i].name}</strong></span><br>
          <span>${posts[i].location}</span>
        </p>
    </div>
    <div "img-container">  
      <img class="post-img" id="${posts[i].username}-post" src="${posts[i].post}">
    </div>
    <div class="button-sect">
      <img id="${posts[i].username}-likebtn" src="images/icon-heart.png" alt="like this post" class="icon">
      <img src="images/icon-comment.png" alt="comment on this post" class="icon">
      <img src="images/icon-dm.png" alt="share this post" class="icon">
    </div>
    <div class="post-btm">
      <p id="${posts[i].username}-likes"><strong>${posts[i].likes} likes</strong><p><br>
      <p><strong>${posts[i].username}</strong> ${posts[i].comment}<p>
  </div>
</section>
       `
  }
  tlDOM.innerHTML = postTL
}

renderPosts()

//Increasing/decreasing likes with both 
//post double click and heart icon click

const postIdsDOM = []
const likeBtnDOM = []
const likesIdsDOM = []
const likesCheck = []





for (let i = 0; i < posts.length; i++) {
    postIdsDOM.push(document.getElementById(`${posts[i].username}-post`))
    likesIdsDOM.push(document.getElementById(`${posts[i].username}-likes`))
    likeBtnDOM.push(document.getElementById(`${posts[i].username}-likebtn`))
    likesCheck.push(posts[i].likes)
}

postIdsDOM[0].addEventListener("dblclick", function(){
    increaseLikes(0)
})

postIdsDOM[1].addEventListener("dblclick", function(){
    increaseLikes(1)  
})

postIdsDOM[2].addEventListener("dblclick", function(){
    increaseLikes(2)
})

likeBtnDOM[0].addEventListener("click", function(){
    increaseLikes(0)
})

likeBtnDOM[1].addEventListener("click", function(){
    increaseLikes(1)  
})

likeBtnDOM[2].addEventListener("click", function(){
    increaseLikes(2)
})
function increaseLikes(i) {
    if (posts[i].likes === likesCheck[i]){
        posts[i].likes += 1
        likesIdsDOM[i].innerHTML = `<strong>${posts[i].likes} likes</strong>`
    } else if (posts[i].likes === likesCheck[i] + 1) {
        posts[i].likes -= 1
        likesIdsDOM[i].innerHTML = `<strong>${posts[i].likes} likes</strong>`
    }
}