const gallery = document.querySelector(".gallery");

window.addEventListener("load", loadImg);
function loadImg() {
  const url = `https://api.unsplash.com/search/photos?query=kitten&per_page=9&client_id=O46G6GwsSkoGM9IKuyb6mx8REyt_8Z9EPf7W9w12S70`;
  const eita = () => {};

  fetch(url)
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((data) => {
      data.results.forEach((result) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        const projectImg = document.createElement("img");
        projectImg.src = result.urls.regular;
        projectImg.alt = result.alt_description;
        projectDiv.appendChild(projectImg);
        gallery.appendChild(projectDiv);
      });
    });
}
