const layer_data = [
  {
    image: "/img/img_student/Amonalieva_Diya.png",
    id: 1,
  },
  {
    image: "/img/img_student/Bero_Dmitriy.png",
    id: 2,
  },
  {
    image: "/img/img_student/Borisov_Maxim.png",
    id: 3,
  },
  {
    image: "/img/img_student/Braslavskiy_Gleb.png",
    id: 4,
  },
  {
    image: "/img/img_student/Kamiev_Muslim.png",
    id: 5,
  },
  {
    image: "/img/img_student/Klimenova_Varvara.png",
    id: 6,
  },
  {
    image: "/img/img_student/Lomovskoy_Rodion.png",
    id: 7,
  },
  {
    image: "/img/img_student/Mayorov_Artyom.png",
    id: 8,
  },
  {
    image: "/img/img_student/Mishin_Ivan.png",
    id: 9,
  },
  {
    image: "/img/img_student/Muzyka_Anna.png",
    id: 10,
  },
  {
    image: "/img/img_student/Nikishchenko_Daniil.png",
    id: 11,
  },
  {
    image: "/img/img_student/Popov_Gleb.png",
    id: 12,
  },
  {
    image: "/img/img_student/Skvortsov_Elisey.png",
    id: 13,
  },
  {
    image: "/img/img_student/Taychev_Roman.png",
    id: 14,
  },
  {
    image: "/img/img_student/Filimonova_Tatyana.png",
    id: 15,
  },
  {
    image: "/img/img_student/Shifrina_Sofya.png",
    id: 16,
  },
];

const data = [
  {
    image: "/img/img_background/Amonalieva_Diya_bg.png",
    name: "Amonalieva",
    lastName: "Diya",
    age: 14,
    bg: "#ff6b6b",
  },
  {
    image: "/img/img_background/Bero_Dmitriy_bg.png",
    name: "Dmitriy",
    lastName: "Bero",
    age: 14,
    bg: "#1c7ed6",
  },
  {
    image: "/img/img_background/Borisov_Maxim_bg.png",
    name: "Borisov",
    lastName: "Maxim",
    age: 14,
    bg: "#cc5de8",
  },
  {
    image: "/img/img_background/Braslavskiy_Gleb_bg.png",
    name: "Braslavskiy",
    lastName: "Gleb",
    age: 14,
    bg: "#845ef7",
  },
  {
    image: "/img/img_background/Kamiev_Muslim_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#5c7cfa",
  },
  {
    image: "/img/img_background/Klimenova_Varvara_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#339af0",
  },
  {
    image: "/img/img_background/Lomovskoy_Rodion_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#22b8cf",
  },
  {
    image: "/img/img_background/Mayorov_Artem_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#20c997",
  },
  {
    image: "/img/img_background/Mishin_Ivan_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#51cf66",
  },
  {
    image: "/img/img_background/Muzyka_Anna_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#94d82d",
  },
  {
    image: "/img/img_background/Nikishchenko_Daniil_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#fcc419",
  },
  { image: "/img/img_background/Popov_Gleb_bg.png", name: "Muslim", lastName: "Kamiev", age: 14 },
  {
    image: "/img/img_background/Skvortsov_Elisey_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#ff922b",
  },
  {
    image: "/img/img_background/Taychev_Roman.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#ff6b6b",
  },
  {
    image: "/img/img_background/Filimonova_Tatyana_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#e64980",
  },
  {
    image: "/img/img_background/Shifrina_Sofya_bg.png",
    name: "Muslim",
    lastName: "Kamiev",
    age: 14,
    bg: "#7048e8",
  },
];
// ---------- DATA (у тебя уже есть) ----------
// layer_data
// data

// ---------- DOM ----------
const aside = document.querySelector("aside");
const layersContainer = document.querySelector(".layers");

// ---------- СОЗДАЁМ БЛОК ИНФЫ ----------
const info = document.createElement("div");
info.className = "info";
aside.append(info);

// ---------- КНОПКА ↓ ----------
const nextBtn = document.createElement("button");
nextBtn.textContent = "↓";
nextBtn.className = "next";
aside.append(nextBtn);

// ---------- СОЗДАЁМ LAYERS ----------
layer_data.forEach((user, index) => {
  const img = document.createElement("img");
  img.src = user.image;

  img.style.position = "absolute";
  img.style.left = "60%";
  img.style.top = "100%";
  img.style.transform = "translate(-50%, -50%)";
  img.style.transition = "all 0.5s ease";

  // показываем только первый
  img.style.opacity = index === 0 ? "1" : "0";
  img.style.scale = index === 0 ? "1" : "0.5";

  layersContainer.append(img);
});

// ---------- ПОЛУЧАЕМ ВСЕ LAYERS ----------
const layers = document.querySelectorAll(".layers img");

let current = 0;

// ---------- ОБНОВЛЕНИЕ ASIDE ----------
function updateAside(index) {
  const user = data[index];

  document.querySelector(".show").style.background = user.bg;

  info.innerHTML = `
    <div class="item">
      <img src="${user.image}" />
      <div class="item__bottom">
        <div class="left">
          <h2>Name: ${user.name}</h2>
          <h2>Last Name: ${user.lastName}</h2>
          <h2>Age: ${user.age}</h2>
        </div>
      </div>
    </div>
  `;
}

// ---------- СМЕНА СЛОЯ ----------
function changeLayer(index) {
  layers[current].style.opacity = "0";
  layers[current].style.scale = "0.5";

  current = index;

  layers[current].style.opacity = "1";
  layers[current].style.scale = "1";

  updateAside(current);
}

// ---------- КНОПКА ↓ ----------
nextBtn.addEventListener("click", () => {
  let next = current + 1;
  if (next >= layers.length) next = 0;

  changeLayer(next);
});

// ---------- СКРОЛЛ ----------
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) nextBtn.click();
});

// ---------- СТАРТ ----------
updateAside(0);
