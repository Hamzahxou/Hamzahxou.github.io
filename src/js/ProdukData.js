const link = document.URL;
const url = new URL(link);
let judul;
if (url.searchParams.get("judul") != null) {
  judul = url.searchParams.get("judul");
}

const boxs = document.querySelector(".box");
fetch("./src/database/produk.json")
  .then((response) => response.json())
  .then((data) => {
    // Mencari objek dengan judul yang cocok
    const result = data.find((item) => item.judul === judul);

    boxs.innerHTML = "";
    // Memeriksa jika objek ditemukan
    if (result) {
      document.title = result.judul;
      const h2 = document.createElement("h2");
      h2.innerText = result.judul;

      const areaProject = document.createElement("div");
      areaProject.classList.add("areaProject");

      const img = document.createElement("div");
      img.classList.add("img");

      const gambar = document.createElement("img");
      if (localStorage.getItem("mode") == "light") {
        gambar.src = `./src/img/Produk/${result.urlGambar}_light.png`;
      } else {
        gambar.src = `./src/img/Produk/${result.urlGambar}_dark.png`;
      }
      img.appendChild(gambar);

      const deskripsi = document.createElement("div");
      deskripsi.classList.add("deskripsi");
      deskripsi.innerHTML = result.deskripsi;
      // const pdesk = document.createElement("p");
      // pdesk.innerText = result.deskripsi;

      const Demo = document.createElement("a");
      Demo.classList.add("btn");
      Demo.classList.add("demo");
      Demo.innerText = "Demo";
      Demo.href = result.urlDemo;

      const Download = document.createElement("a");
      Download.classList.add("btn");
      Download.innerText = "Download";
      Download.href = result.urlDownload;

      // deskripsi.appendChild(pdesk);
      deskripsi.appendChild(Demo);
      deskripsi.appendChild(Download);

      areaProject.appendChild(img);
      areaProject.appendChild(deskripsi);

      boxs.appendChild(h2);
      boxs.appendChild(areaProject);
    } else {
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
