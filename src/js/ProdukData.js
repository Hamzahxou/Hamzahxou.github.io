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

      // Mendapatkan data dari JSON
      const metatitle = result.judul;
      //
      // Membuat elemen deskripsi
      const cekdeskripsi = document.createElement("p");
      cekdeskripsi.classList.add("deskripsi");

      const cektemporaryElement = document.createElement("div");
      cektemporaryElement.innerHTML = result.deskripsi;

      // Mengambil teks konten dari elemen sementara
      const cektrimmedText = cektemporaryElement.textContent.trim();

      // Memotong teks konten menjadi maksimal 20 karakter
      const ceklimitedText = cektrimmedText.substring(0, 100);

      // Menambahkan tanda "..." jika teks terpotong
      const cekdisplayText =
        cektrimmedText.length > 100 ? ceklimitedText + "..." : ceklimitedText;

      const metadeskripsi = cekdisplayText;
      // const parsedesk = result.deskripsi.trim();
      // const metadeskripsi = parsedesk.substring(0, 100);
      const metaimg = `https:hamzahxou.github.io/src/img/Produk/${result.urlGambar}_light.png`;
      const metaurl = `https:hamzahxou.github.io/ProjectPage.html?judul=`;

      // Mengubah nilai meta
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", metadeskripsi);
      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", metatitle);
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute("content", metadeskripsi);
      document
        .querySelector('meta[property="og:image"]')
        .setAttribute("content", metaimg);
      document
        .querySelector('meta[property="og:url"]')
        .setAttribute("content", metaurl);
    } else {
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
