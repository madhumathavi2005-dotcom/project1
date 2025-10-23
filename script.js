const content = document.getElementById("content");
const links = document.querySelectorAll("nav a");

const pages = {
  home: `<h1>Home Page</h1><p>Welcome to the SPA example!</p>`,
  about: `<h1>About Page</h1><p>This SPA is built using HTML, CSS, and JavaScript.</p>`,
  contact: `<h1>Contact Page</h1><p>Email: madhumathavi2005@gmail.com<br>Phone: +91 9626451963</p>`
};

// Load default page
content.innerHTML = pages.home;

// Navigation click
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    content.innerHTML = pages[page];

    // Highlight active link
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

