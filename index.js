const API_URL = "https://jsonplaceholder.typicode.com/posts";

/* =========================
   DISPLAY POSTS FUNCTION
========================= */
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  postList.innerHTML = "";

  posts.forEach(post => {
    const li = document.createElement("li");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = post.title;
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    postList.appendChild(li);
  });
}

/* =========================
   FETCH FUNCTION (ASYNC/AWAIT)
========================= */
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    displayPosts(data);

    return data;

  } catch (error) {
    console.log("Error:", error);
  }
}

/* =========================
   RUN ON PAGE LOAD
========================= */
fetchPosts();

// expose for testing (important for labs)
window.fetchPosts = fetchPosts;





