fetch("https://portfolio-backend-1-fo7a.onrender.com/api/projects")
.then(res => res.json())
.then(data => {
    const container = document.querySelector(".container");

    container.innerHTML = "";

    data.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><b>Tech:</b> ${project.tech}</p>
            <a href="${project.github}" target="_blank">
                <button class="btn">View Code</button>
            </a>
        `;

        container.appendChild(card);
    });
});
