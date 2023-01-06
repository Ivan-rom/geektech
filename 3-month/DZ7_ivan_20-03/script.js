const link = "https://jsonplaceholder.typicode.com/posts";
const postList = document.querySelector(".posts");
const images = [
    "https://loremflickr.com/640/360",
    "https://placekitten.com/640/360",
    "https://baconmockup.com/640/360",
    "https://placebeard.it/640x360",
    "http://placeimg.com/640/360/any",
    "https://picsum.photos/640/360",
]

const pickImage = () => Math.floor(Math.random() * images.length);

const showPosts = posts => {
    postList.innerHTML = "";
    postList.classList.remove("loading");
    posts.forEach(post => {
        const li = document.createElement("li");
        li.classList.add("post");
        li.innerHTML = `
            <a href="#">
                <img src="${images[pickImage()]}" alt="${post.title + "image"}" class="post_image">
                <h4 class="post_title">${post.title}</h4>
                <p class="post_text">${post.body}</p>
            </a>
        `;
        postList.append(li);
    });
}

const getPosts = async url => {
    try {
        const response = await fetch(url)
        const posts = await response.json();
        showPosts(posts);
    } catch {
        postList.innerHTML = `<h2 class="error-message"><span>Oops!</span> Something went wrong</h2>`;
        postList.classList.add("error");
    }
}

getPosts(link);