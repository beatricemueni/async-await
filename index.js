// Write your code here!
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Function to display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  // Clear existing posts (important for "random tab" refresh behavior)
  postList.innerHTML = "";

  // Loop through posts
  posts.forEach(post => {
    // Create elements
    const li = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    // Add content
    title.textContent = post.title;
    body.textContent = post.body;

    // Append elements
    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Async function to fetch posts
async function fetchPosts() {
  try {
    const response = await fetch(API_URL);

    // Check if response is OK
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();

    // Optional: Shuffle for "random tab" feel
    const randomPosts = data.sort(() => 0.5 - Math.random()).slice(0, 10);

    // Display posts
    displayPosts(randomPosts);

    console.log("Posts loaded successfully");
  } catch (error) {
    console.log("Error:", error);
  }
}

// Call function
fetchPosts();