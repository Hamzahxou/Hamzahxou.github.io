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
//waktu
var h = new Date().getHours();
let waktu;
if (h >= 4 && h < 10) {
  waktu = "pagi yang cerah dan penuh semangat 🌞";
} else if (h >= 10 && h < 15) {
  waktu = "siang yang panas dan energik 🌤️";
} else if (h >= 15 && h < 18) {
  waktu = "sore yang hangat dan menyegarkan 🌅";
} else if (h >= 18 || h < 4) {
  waktu = "malam yang tenang dan damai 🌙";
}

const hari = document.getElementById("hari");

hari.textContent = namaHariSekarang + " " + waktu;

const tutupNotif = document.getElementById("tutupNotif");
if (localStorage.getItem("mengerti") == "y") {
  tutupNotif.parentElement.classList.add("display-none");
} else {
  tutupNotif.addEventListener("click", () => {
    tutupNotif.parentNode.classList.add("display-none");
    localStorage.setItem("mengerti", "y");
  });
}

//karena banyak yang melakukan tes deven:v
const _0x201438 = _0x26b6;
function _0x42ef() {
  const _0x4f08c7 = [
    "160Popwhv",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pesanMasuk\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22nama\x22\x20style=\x22--color:\x20",
    "6737465ggAELY",
    "36ckXAPa",
    "join",
    "createElement",
    "parentNode",
    "split",
    "addEventListener",
    "namanya\x20gada",
    "#17a2b8",
    "d-none",
    "setItem",
    "classList",
    "#dc3545",
    "catch",
    "959HvEAGw",
    ";\x22>",
    "querySelector",
    "replace",
    "add",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "&_=",
    "toggle",
    "POST",
    "map",
    "mau\x20ngirim\x20apa\x20coba",
    "getElementById",
    "</div>",
    "length",
    "<span\x20style=\x27text-decoration:\x20line-through;\x27>saya\x20mengganti\x20nama\x20secara\x20ilegal</span>",
    "8117244vNYFLC",
    "then",
    "floor",
    "#ffc107",
    "11133947mzwCUM",
    "button.active",
    "innerHTML",
    "3FBGqdj",
    "https://docs.google.com/spreadsheets/d/",
    "59344gSshIQ",
    "\x22,\x22",
    "1Og-ASK8zhvzfSqsqhB2OqGRkdWAhvqE_pKP7LIbnS0I",
    "div",
    ".informasi",
    "<span\x20style=\x27text-decoration:\x20line-through;\x27>users</span>",
    "forms",
    "nama\x20tidak\x20boleh\x20lebih\x20dari\x2025\x20kata.",
    "submit",
    "234198HCsCWz",
    "value",
    "pesan",
    "getItem",
    "Forum",
    "text",
    "1252MlmoAL",
    "1920344HYxUBM",
    "1993QkixBH",
    "nama",
    "preventDefault",
    "<div\x20class=\x22areaPesanMasuk\x22>",
    "textContent",
    "slice",
  ];
  _0x42ef = function () {
    return _0x4f08c7;
  };
  return _0x42ef();
}
(function (_0x48718c, _0x55c156) {
  const _0x3825d0 = _0x26b6,
    _0x2e9337 = _0x48718c();
  while (!![]) {
    try {
      const _0x1e8c4d =
        (parseInt(_0x3825d0(0x6b)) / 0x1) * (-parseInt(_0x3825d0(0xa8)) / 0x2) +
        (parseInt(_0x3825d0(0x97)) / 0x3) * (-parseInt(_0x3825d0(0xa9)) / 0x4) +
        parseInt(_0x3825d0(0x73)) / 0x5 +
        -parseInt(_0x3825d0(0x90)) / 0x6 +
        (parseInt(_0x3825d0(0x81)) / 0x7) * (-parseInt(_0x3825d0(0x99)) / 0x8) +
        (parseInt(_0x3825d0(0xa2)) / 0x9) * (parseInt(_0x3825d0(0x71)) / 0xa) +
        (parseInt(_0x3825d0(0x94)) / 0xb) * (parseInt(_0x3825d0(0x74)) / 0xc);
      if (_0x1e8c4d === _0x55c156) break;
      else _0x2e9337["push"](_0x2e9337["shift"]());
    } catch (_0x2f1a96) {
      _0x2e9337["push"](_0x2e9337["shift"]());
    }
  }
})(_0x42ef, 0xabc2c);
const scriptURL =
    "https://script.google.com/macros/s/AKfycbw9CGkhSsegaFfjMqMu1RDjt5TXXhXK7iEPJhsnxnv_ojpKncG43wiO2-CuzIjtu_Hd/exec",
  form = document[_0x201438(0x9f)][_0x201438(0xa6)],
  btnActive = document[_0x201438(0x83)](_0x201438(0x95)),
  btnDisable = document[_0x201438(0x83)]("button.disable"),
  pesanForm = document[_0x201438(0x8c)](_0x201438(0xa4)),
  namaForm = document[_0x201438(0x8c)](_0x201438(0x6c)),
  namaLocal = localStorage["getItem"](_0x201438(0x6c));
namaForm
  ? (namaForm[_0x201438(0xa3)] = localStorage[_0x201438(0xa5)](_0x201438(0x6c)))
  : (namaForm[_0x201438(0xa3)] = "");
const informasi = document[_0x201438(0x83)](_0x201438(0x9d));
function inf() {
  const _0x120f00 = _0x201438;
  informasi[_0x120f00(0x77)][_0x120f00(0x7e)]["remove"](_0x120f00(0x7c)),
    setTimeout(() => {
      const _0x33d3ec = _0x120f00;
      informasi["parentNode"]["classList"][_0x33d3ec(0x85)]("d-none");
    }, 0x1388);
}
function _0x26b6(_0xe7db7f, _0x503cb9) {
  const _0x42ef79 = _0x42ef();
  return (
    (_0x26b6 = function (_0x26b636, _0x84826f) {
      _0x26b636 = _0x26b636 - 0x6b;
      let _0x5e8c57 = _0x42ef79[_0x26b636];
      return _0x5e8c57;
    }),
    _0x26b6(_0xe7db7f, _0x503cb9)
  );
}
form[_0x201438(0x79)](_0x201438(0xa1), (_0x6b8ddc) => {
  const _0x540be4 = _0x201438;
  _0x6b8ddc[_0x540be4(0x6d)]();
  if (namaForm[_0x540be4(0xa3)] == "")
    inf(), (informasi[_0x540be4(0x6f)] = _0x540be4(0x7a));
  else {
    if (namaForm[_0x540be4(0xa3)][_0x540be4(0x8e)] > 0x19)
      inf(), (informasi[_0x540be4(0x6f)] = _0x540be4(0xa0));
    else {
      if (pesanForm[_0x540be4(0xa3)] == "")
        inf(), (informasi[_0x540be4(0x6f)] = _0x540be4(0x8b));
      else {
        if (pesanForm[_0x540be4(0xa3)][_0x540be4(0x8e)] > 0x96)
          inf(),
            (informasi[_0x540be4(0x6f)] =
              "Pesan\x20tidak\x20boleh\x20lebih\x20dari\x20150\x20kata.");
        else {
          function _0x404005() {
            const _0x5dd997 = _0x540be4,
              _0x46ee94 = [_0x5dd997(0x93), _0x5dd997(0x7f), _0x5dd997(0x7b)],
              _0x20d03a = Math[_0x5dd997(0x92)](
                Math["random"]() * _0x46ee94[_0x5dd997(0x8e)]
              );
            return _0x46ee94[_0x20d03a];
          }
          const _0x43bf25 = _0x404005(),
            _0x2d6426 = document["getElementById"]("color");
          _0x2d6426["value"] = _0x43bf25;
          const _0x5c40c8 = pesanForm[_0x540be4(0xa3)],
            _0x36fbad = _0x5c40c8[_0x540be4(0x84)](/[\n\r]/g, "\x20");
          btnActive[_0x540be4(0x7e)][_0x540be4(0x88)](_0x540be4(0x7c)),
            btnDisable[_0x540be4(0x7e)][_0x540be4(0x88)](_0x540be4(0x7c));
          let _0x3f8c2 = namaForm[_0x540be4(0xa3)];
          localStorage[_0x540be4(0x7d)](_0x540be4(0x6c), _0x3f8c2);
          const _0x4af763 = new FormData(form);
          _0x4af763["set"](_0x540be4(0xa4), _0x36fbad),
            fetch(scriptURL, { method: _0x540be4(0x89), body: _0x4af763 })
              [_0x540be4(0x91)]((_0x4ebf89) => {
                const _0x48eea1 = _0x540be4;
                btnActive[_0x48eea1(0x7e)][_0x48eea1(0x88)](_0x48eea1(0x7c)),
                  btnDisable[_0x48eea1(0x7e)][_0x48eea1(0x88)](_0x48eea1(0x7c)),
                  (pesanForm["value"] = "");
              })
              [_0x540be4(0x80)](
                (_0x20e56e) => "ups\x20ada\x20yang\x20salah\x20🤔"
              );
        }
      }
    }
  }
});
const spreadsheetId = _0x201438(0x9b);
let url = _0x201438(0x98) + spreadsheetId + "/gviz/tq?tqx=out:csv";
document[_0x201438(0x79)]("DOMContentLoaded", init);
function init() {
  fetchDataAndConvertToHTML(), setInterval(fetchDataAndConvertToHTML, 0x1388);
}
function fetchDataAndConvertToHTML() {
  const _0x1e709f = _0x201438,
    _0x20358e = new Date()["getTime"](),
    _0x5570b1 = url + _0x1e709f(0x87) + _0x20358e;
  fetch(_0x5570b1)
    [_0x1e709f(0x91)]((_0x4e4541) => _0x4e4541[_0x1e709f(0xa7)]())
    [_0x1e709f(0x91)]((_0x5ce4f1) => {
      const _0x8da1eb = _0x1e709f,
        _0xadcd1b = convertDataToHTML(_0x5ce4f1),
        _0x2197d1 = document[_0x8da1eb(0x83)](".areaPesanMasuk");
      _0x2197d1[_0x8da1eb(0x96)] = _0xadcd1b;
    })
    [_0x1e709f(0x80)]((_0x23bac3) => {
      console["log"]("Terjadi\x20kesalahan:", _0x23bac3);
    });
}
function convertDataToHTML(_0x1fe39d) {
  const _0x1df9eb = _0x201438,
    _0xb2ca02 = _0x1fe39d["split"]("\x0a")[_0x1df9eb(0x70)](0x1),
    _0x1095b4 = _0xb2ca02[_0x1df9eb(0x8a)]((_0x3997b9) => {
      const _0x423bb5 = _0x1df9eb,
        _0x5232ec = _0x3997b9[_0x423bb5(0x78)](_0x423bb5(0x9a))[
          _0x423bb5(0x8a)
        ]((_0x415772) => _0x415772[_0x423bb5(0x84)](/"/g, "")),
        [_0x308291, _0x54160f, _0x19200f, _0x47a75f] = _0x5232ec,
        _0x246aed = document[_0x423bb5(0x76)](_0x423bb5(0x9c)),
        _0x37a574 = document[_0x423bb5(0x76)](_0x423bb5(0x9c));
      return (
        _0x54160f == ""
          ? ((_0x37a574[_0x423bb5(0x96)] = _0x423bb5(0x9e)),
            (_0x246aed[_0x423bb5(0x96)] = _0x423bb5(0x8f)))
          : ((_0x37a574[_0x423bb5(0x6f)] = _0x54160f),
            (_0x246aed[_0x423bb5(0x6f)] = _0x19200f)),
        _0x423bb5(0x72) +
          _0x47a75f +
          _0x423bb5(0x82) +
          _0x37a574[_0x423bb5(0x96)] +
          "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22pesan\x22>" +
          _0x246aed[_0x423bb5(0x96)] +
          _0x423bb5(0x86)
      );
    })[_0x1df9eb(0x75)]("");
  return _0x1df9eb(0x6e) + _0x1095b4 + _0x1df9eb(0x8d);
}
