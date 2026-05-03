const adminBtn = document.getElementById('adminBtn');
const adminPanel = document.getElementById('adminPanel');
const closeBtn = document.querySelector('.close');
const savePost = document.getElementById('savePost');
const blogContainer = document.getElementById('blog-container');

// Sample initial data
let posts = JSON.parse(localStorage.getItem('myPosts')) || [
    { title: "Starting the Journey", content: "Welcome to my new digital space." }
];

function displayPosts() {
    blogContainer.innerHTML = '';
    posts.forEach((post, index) => {
        blogContainer.innerHTML += `
            <div class="post-card">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </div>
        `;
    });
}

// Open/Close Admin
adminBtn.onclick = () => adminPanel.style.display = "block";
closeBtn.onclick = () => adminPanel.style.display = "none";

// Save New Post
savePost.onclick = () => {
    const title = document.getElementById('postTitle').value;
    const content = document.getElementById('postContent').value;

    if(title && content) {
        posts.unshift({ title, content });
        localStorage.setItem('myPosts', JSON.stringify(posts));
        displayPosts();
        adminPanel.style.display = "none";
    }
};

displayPosts();
