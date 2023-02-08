const items = [
  {
    src: "https://cdn.pixabay.com/photo/2023/01/30/14/20/birds-7755812_960_720.jpg",
    id: 1,
  },
  {
    src: "https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg",
    id: 2,
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/03/15/18/12/forest-1258845_960_720.jpg",
    id: 3,
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
    id: 4,
  },
  {
    src: "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_960_720.jpg",
    id: 5,
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_960_720.jpg",
    id: 6,
  },
  {
    src: "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",
    id: 7,
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063_960_720.jpg",
    id: 8,
  },
];

const btn = document.getElementById("btn-start-game");
const heading = document.getElementById("heading");
const gameContainer = document.getElementById("game_container");
let selectedImg = null;
let isSecondChoice = false;

const images = [...items, ...items];

btn.addEventListener("click", () => {
  heading.textContent = "Gra Memory";

  images.forEach((item, index) => {
    const img = document.createElement("div");
    img.style.backgroundImage = `url(${item.src})`;
    img.id = item.id;
    img.classList.add("img");
    img.tabIndex = index;
    gameContainer.appendChild(img);

    img.addEventListener("click", () => {
      if (selectedImg && selectedImg.id === img.id && isSecondChoice) {
        img.style.display = "none";
        selectedImg.style.display = "none";
        selectedImg = null;
      }

      selectedImg = img;
      isSecondChoice = !isSecondChoice;

      const allImages = document.getElementsByClassName("img");

      const isWon = Array.from(allImages).every(
        (img) => img.style.display === "none"
      );

      if (isWon) {
        heading.textContent = "Super! Wygrałeś :) ";
      }
    });
  });
});
