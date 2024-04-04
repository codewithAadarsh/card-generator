document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generate-button");

    generateButton.addEventListener("click", (event) => {
        event.preventDefault();
        const sn = document.getElementById("SN").value;
        console.log(sn);
        const url = document.getElementById("image-url").value;
        console.log(url);
        const channel = document.getElementById("channel").value;
        console.log(channel);
        const intro = document.getElementById("intro").value;
        console.log(intro);
        const views = document.getElementById("view").value;
        console.log(views);
        const upload = document.getElementById("uploaded-date").value;
        console.log(upload);


        let div = document.createElement("div");
        div.setAttribute("class", "card")
        div.innerHTML = `<div class="sn">${sn}</div>
        <div class="image">
            <img src="${url}"
                alt="image" style="object-fit: cover;">
        </div>
        <div class="intro">
            ${intro}
            <div class="title">
                <span class="channel">${channel}</span>
                <span class="view"> ${views} <span>views</span></span>
                <span class="uploaded">${upload} <span>months ago</span></span>
            </div>
        </div>
        <div class="dots">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" width="20px"
                height="20px"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                    d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
            </svg>
        </div>`

    document.querySelector("#main").append(div)

    document.querySelector("form").reset();
    });
});
