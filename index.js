import {posts} from './data.js'

const mainWrapper = document.getElementById("main-el")

renderSection() // Renders the posts section

const postImg = document.getElementsByClassName("post-el")
const heartIcon = document.getElementsByClassName("heart-el")

for(let i=0; i<heartIcon.length; i++) {
    heartIcon[i].addEventListener("click", () => {
        let likeEl = document.getElementById(`like-el${i+1}`)
        likeEl.textContent = `${++(posts[i].likes)} likes`
    })
}

for(let i=0; i<postImg.length; i++) {
    postImg[i].addEventListener("dblclick", () => {
        let likeEl = document.getElementById(`like-el${i+1}`)
        likeEl.textContent = `${++(posts[i].likes)} likes`
    })
}


function renderSection() {
    let stringDOM = ""
    for(let i=0; i<posts.length; i++) {
        stringDOM += `
            <section class="container margin-bottom section-contents">
                <div class="poster-wrapper">
                    <img class="profile" src="${posts[i].avatar}" alt="${posts[i].altAvatar}">
                    <div class="poster--background">
                        <h3 class="name">${posts[i].name}</h3>
                        <p class="place">${posts[i].location}</p>
                    </div>
                </div>
                <img class="post post-el" src="${posts[i].post}" alt="${posts[i].altPost}">
                <div class="interactions-wrapper">
                    <img class="icon heart-el" src="images/icon-heart.png" alt="A heart icon">
                    <img class="icon" src="images/icon-comment.png" alt="A comment icon">
                    <img class="icon" src="images/icon-dm.png" alt="A share icon">
                </div>
                <h3 class="likes" id="like-el${i+1}">${posts[i].likes} likes</h3>
                <p class="comment"><span>${posts[i].username}</span> ${posts[i].comment}</p>
            </section>
        `
    }
    mainWrapper.innerHTML = stringDOM
}

