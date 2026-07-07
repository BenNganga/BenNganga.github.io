const username = "BenNganga";

fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        console.log("Status:", response.status);
        return response.json();
    })
    .then(data => {
        console.log("GitHub Data:", data);

        if (data.message) {
            console.error("GitHub API Error:", data.message);
            return;
        }

        document.getElementById("github-avatar").src = data.avatar_url;
        document.getElementById("github-name").textContent = data.name;
        document.getElementById("github-bio").textContent = data.bio || "Software Engineer";
        document.getElementById("repos").textContent = data.public_repos;
        document.getElementById("followers").textContent = data.followers;
        document.getElementById("following").textContent = data.following;
        document.getElementById("github-link").href = data.html_url;
    })
    .catch(error => {
        console.error("Fetch Error:", error);
    });