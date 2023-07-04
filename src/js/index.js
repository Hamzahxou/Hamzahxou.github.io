const menu = document.querySelectorAll("ul li a");
const sections = document.querySelectorAll("section");

// Fungsi untuk mengatur menu dan section aktif
function setActiveMenuAndSection(index) {
  sections.forEach((section, i) => {
    // Menghilangkan class "default" pada semua section kecuali yang memiliki index yang sama dengan menu yang aktif
    section.classList.toggle("default", i !== index);
  });

  menu.forEach((menuItem, i) => {
    // Menambahkan class "active" pada menu yang memiliki index yang sama dengan menu yang aktif, dan menghapus class "active" pada menu yang lain
    menuItem.parentNode.classList.toggle("active", i === index);
  });

  // Menyimpan index menu aktif ke localStorage
  localStorage.setItem("activeMenuIndex", index);
}

menu.forEach((menuPisah, index) => {
  menuPisah.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah tindakan default dari tautan

    // Mengatur menu dan section aktif sesuai dengan index menu yang diklik
    setActiveMenuAndSection(index);
  });
});

// Memeriksa apakah ada index menu yang tersimpan di localStorage
const activeMenuIndex = localStorage.getItem("activeMenuIndex");

if (activeMenuIndex !== null) {
  // Mengatur menu dan section aktif sesuai dengan index yang tersimpan di localStorage
  setActiveMenuAndSection(parseInt(activeMenuIndex));
}

// DarkMode
const lightbtn = document.getElementById("lightMode");
const body = document.body;
lightbtn.addEventListener("click", () => {
  if (body.classList == "light") {
    // beri class active
    lightbtn.classList.toggle("active");
    // beri class light di body
    body.classList.toggle("light");
    //  beri class light di semua section
    sections.forEach((secti) => {
      secti.classList.toggle("light");
    });
    localStorage.removeItem("mode");
  } else {
    // beri class active
    lightbtn.classList.toggle("active");
    // beri class light di body
    body.classList.toggle("light");
    //  beri class light di semua section
    sections.forEach((secti) => {
      secti.classList.toggle("light");
    });
    localStorage.setItem("mode", "light");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const status = localStorage.getItem("mode");
  if (status === "light") {
    document.body.classList.add("light");
    sections.forEach((secti) => {
      secti.classList.add("light");
    });
  }
});

//animasi scroll darkmode
const lightArea = document.querySelector(".lightArea");
let tampil = null;
if (window.innerWidth <= 576) {
  lightArea.style.position = "fixed";
  window.addEventListener("scroll", () => {
    hidden();

    if (tampil !== null) {
      clearTimeout(tampil);
    }
    tampil = setTimeout(show, 100);
  });
}

function hidden() {
  lightArea.style.right = "-100px";
}
function show() {
  lightArea.style.right = "5%";
}

function getNamaHari(tanggal) {
  const daftarNamaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const date = new Date(tanggal);
  const hari = date.getDay();
  return daftarNamaHari[hari];
}

const tanggalSekarang = new Date();
const namaHariSekarang = getNamaHari(tanggalSekarang);
const hari = document.getElementById("hari");

hari.textContent = "hari " + namaHariSekarang + " yang cerah";

//simpan data ke google sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzZciEdywHsr62lneaD_35hh7doKpe0GrvJGjf_4ntU3jh_3Xx2KvePlZJ1CDhoKNWp/exec";
const form = document.forms["Forum"];
const btnActive = document.querySelector("button.active");
const btnDisable = document.querySelector("button.disable");
const pesanForm = document.getElementById("pesan");

const namaForm = document.getElementById("nama");
const namaLocal = localStorage.getItem("nama");
if (namaForm) {
  namaForm.value = localStorage.getItem("nama");
} else {
  namaForm.value = "";
}

const informasi = document.querySelector(".informasi");

function inf() {
  informasi.parentNode.classList.remove("d-none");
  setTimeout(() => {
    informasi.parentNode.classList.add("d-none");
  }, 5000);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (namaForm.value == "") {
    inf();
    informasi.textContent = "namanya gada";
  } else if (namaForm.value.length > 25) {
    inf();
    informasi.textContent = "nama tidak boleh lebih dari 25 kata.";
  } else if (pesanForm.value == "") {
    inf();
    informasi.textContent = "mau ngirim apa coba";
  } else if (pesanForm.value.length > 150) {
    inf();
    informasi.textContent = "Pesan tidak boleh lebih dari 150 kata.";
  } else {
    function getRandomColor() {
      const colors = ["#ffc107", "#dc3545", "#17a2b8", "#28a745"];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    }

    const randomColor = getRandomColor();
    const color = document.getElementById("color");
    color.value = randomColor;

    const pesanValue = pesanForm.value;

    // Mengganti karakter enter (\n) dengan spasi dalam teks pesan
    const cleanedPesanValue = pesanValue.replace(/[\n\r]/g, " ");

    //ketika di submit
    btnActive.classList.toggle("d-none");
    btnDisable.classList.toggle("d-none");
    const namaValue = namaForm.value;
    localStorage.setItem("nama", namaValue);

    // Menggunakan FormData untuk mengirim data melalui fetch
    const formData = new FormData(form);
    formData.set("pesan", cleanedPesanValue);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        btnActive.classList.toggle("d-none");
        btnDisable.classList.toggle("d-none");
        pesanForm.value = "";
      }) //console.log("Success!", response)
      .catch((error) => "ups ada yang salah 🤔"); //console.error("Error!", error.message)
  }
});

//tampilkan
const spreadsheetId = "1ZTCERAwio2qTbOKnyNpuZAYdcOZIuYpizSUDjswkJG0";
let url = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:csv`;

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetchDataAndConvertToHTML();
  setInterval(fetchDataAndConvertToHTML, 5000); // Refresh setiap 5 detik (5000 milidetik)
}

function fetchDataAndConvertToHTML() {
  // Tambahkan parameter unik ke URL fetch
  const uniqueParam = new Date().getTime();
  const fetchUrl = `${url}&_=${uniqueParam}`;

  fetch(fetchUrl)
    .then((response) => response.text())
    .then((data) => {
      const html = convertDataToHTML(data);
      const areaPesanMasuk = document.querySelector(".areaPesanMasuk");
      areaPesanMasuk.innerHTML = html;
    })
    .catch((error) => {
      console.log("Terjadi kesalahan:", error);
    });
}

function convertDataToHTML(data) {
  const rows = data.split("\n").slice(1);
  const html = rows
    .map((row) => {
      const values = row.split('","').map((value) => value.replace(/"/g, ""));
      const [timestamp, nama, pesan, color] = values;

      // Validasi enter pada pesan
      const escapedPesan = document.createElement("div");
      escapedPesan.textContent = pesan; // Menghapus karakter enter (\n)

      return `
        <div class="pesanMasuk">
          <div class="nama" style="--color: ${color};">${nama}</div>
          <div class="pesan">${escapedPesan.innerHTML}</div>
        </div>
      `;
    })
    .join("");

  return `<div class="areaPesanMasuk">${html}</div>`;
}

const human = document.querySelector(".human");
let offsetX, offsetY;

const move = (e) => {
  human.style.left = `${e.clientX - offsetX}px`;
  human.style.top = `${e.clientY - offsetY}px`;
};

human.addEventListener("dblclick", () => {
  human.style.position = "absolute";
  human.style.cursor = "move";
});

human.addEventListener("mousedown", (b) => {
  offsetX = b.clientX - human.offsetLeft;
  offsetY = b.clientY - human.offsetTop;
  document.addEventListener("mousemove", move);
});

document.addEventListener("mouseup", () => {
  document.removeEventListener("mousemove", move);
});

const imgElement = document.querySelector("img.human");

imgElement.addEventListener("click", (event) => {
  event.preventDefault();
});

function getRandomPosition() {
  const minX = 20; // Minimum x position (left)
  const maxX = window.innerWidth - 70; // Maximum x position (right)
  const randomX = Math.floor(Math.random() * (maxX - minX + 1)) + minX;
  return randomX;
}

function createKucing() {
  const minSize = 20;
  const maxSize = 50;
  // Menghasilkan ukuran acak antara minSize dan maxSize
  let randomSize = Math.floor(
    Math.random() * (maxSize - minSize + 1) + minSize
  );
  const kucing = document.createElement("img");
  kucing.setAttribute("src", "src/img/Kucing.gif");
  kucing.setAttribute("alt", "kucing");
  kucing.classList.add("kucing");
  kucing.classList.add("trans");
  const randomX = getRandomPosition();
  kucing.style.left = randomX + "px";
  kucing.style.width = `${randomSize}px`;
  let offsetX, offsetY;
  const move = (e) => {
    kucing.style.left = `${e.clientX}px`;
    kucing.style.top = `${e.clientY}px`;
  };

  kucing.addEventListener("mousedown", () => {
    kucing.classList.remove("trans");
    document.addEventListener("mousemove", move);
  });

  document.addEventListener("mouseup", () => {
    kucing.style.bottom = "100%";
    document.removeEventListener("mousemove", move);
  });

  document.body.appendChild(kucing);

  setTimeout(() => {
    kucing.classList.add("bott");
    setTimeout(() => {
      kucing.style.opacity = ".1";
      setTimeout(() => {
        kucing.parentNode.removeChild(kucing);
      }, 3000);
    }, 7000);
  }, 1000);
}

setInterval(createKucing, 20000);
