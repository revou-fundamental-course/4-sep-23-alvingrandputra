// DEKLARASI VARIABEL
const tombolluas = document.querySelector(".luas-button");
const tombolkeliling = document.querySelector(".keliling-button");
const kelilingpersegi = document.querySelector(".rumus-persegi-keliling");
const luaspersegi = document.querySelector(".rumus-persegi-luas");
const inputlabel = document.querySelector(".input-label");
const hitungButtonLuas = document.getElementById("hitungButtonLuas");
const resetButtonLuas = document.getElementById("resetButtonLuas");
const hitungButtonKeliling = document.getElementById("hitungButtonKeliling");
const resetButtonKeliling = document.getElementById("resetButtonKeliling");

// CEK KONDISI AWAL LOCAL STORAGE
const storedState = localStorage.getItem("calculatorState");

// DEFINE KONDISI AWAL KETIKA TIDAK ADA DATA
const defaultState = {
  luasButtonVisible: false,
  kelilingButtonVisible: true,
  inputLabelText: "Hitung Luas Persegi",
};

// JIKA MENGGUNAKAN KONDISI DATA YANG TERSIMPAN ATAU TIDAK
const currentState = storedState ? JSON.parse(storedState) : defaultState;

// UPDATE TAMPILAN KETIKA DIUBAH
function updateUI() {
  if (currentState.luasButtonVisible) {
    kelilingpersegi.style.display = "none";
    luaspersegi.style.display = "flex";
  } else if (currentState.kelilingButtonVisible) {
    luaspersegi.style.display = "none";
    kelilingpersegi.style.display = "flex";
  }
  inputlabel.innerHTML = currentState.inputLabelText;
}

// OEMANGGILAN FUNGSI
updateUI();

// KETIKA TOMBOL LUAS DI KLIK
tombolluas.addEventListener("click", () => {
  currentState.luasButtonVisible = true;
  currentState.kelilingButtonVisible = false;
  currentState.inputLabelText = "Hitung Luas Persegi";
  updateUI();
  // Save the current state to local storage
  localStorage.setItem("calculatorState", JSON.stringify(currentState));
});

// KETIKA TOMBOL KELILING DI KLIK
tombolkeliling.addEventListener("click", () => {
  currentState.luasButtonVisible = false;
  currentState.kelilingButtonVisible = true;
  currentState.inputLabelText = "Hitung Keliling Persegi";
  updateUI();
  //   MENYIMPAN KONDISI SEKARANG KE DALAM LOCAL STORAGE
  localStorage.setItem("calculatorState", JSON.stringify(currentState));
});

// MENGHITUNG LUAS DAN KELILING PERSEGI
// MENGHITUNG LUAS PERSEGI
hitungButtonLuas.addEventListener("click", function () {
  let sisiLuas = parseInt(document.getElementById("inputFieldLuas").value);

  let luas = sisiLuas * sisiLuas;

  if (sisiLuas > 0) {
    document.querySelector(".hasil-perhitungan").textContent = `Luas Persegi Adalah : ${luas} cm`;
    document.querySelector(".hasil-perhitungan").style.color = "#101f71";
  } else if (sisiLuas < 0) {
    document.querySelector(".hasil-perhitungan").textContent = "Masukkan Nilai Positif!";
    document.querySelector(".hasil-perhitungan").style.color = "red";
  } else if (sisiLuas == 0) {
    document.querySelector(".hasil-perhitungan").textContent = "Silahkan Masukkan Nilai Lebih dari Nol!";
    document.querySelector(".hasil-perhitungan").style.color = "red";
  } else {
    document.querySelector(".hasil-perhitungan").textContent = "Nilai Yang Anda Masukkan Tidak Ada.";
    document.querySelector(".hasil-perhitungan").style.color = "red";
  }
});

// RESET KEMBALI HITUNGAN LUAS PERSEGI
resetButtonLuas.addEventListener("click", function () {
  document.getElementById("inputFieldLuas").value = "";
  document.querySelector(".hasil-perhitungan").textContent = "";
});

// MENGHITUNG KELILING PERSEGI
hitungButtonKeliling.addEventListener("click", function () {
  let sisiKeliling = parseInt(document.getElementById("inputFieldKeliling").value);

  let keliling = sisiKeliling * sisiKeliling * sisiKeliling;

  if (sisiKeliling > 0) {
    document.querySelector(".hasil-perhitungan-keliling").textContent = `Keliling Persegi Adalah : ${keliling} cm`;
    document.querySelector(".hasil-perhitungan-keliling").style.color = "#101f71";
  } else if (sisiKeliling < 0) {
    document.querySelector(".hasil-perhitungan-keliling").textContent = "Masukkan Nilai Positif!";
    document.querySelector(".hasil-perhitungan-keliling").style.color = "red";
  } else if (sisiKeliling == 0) {
    document.querySelector(".hasil-perhitungan-keliling").textContent = "Silahkan Masukkan Nilai Lebih dari Nol!";
    document.querySelector(".hasil-perhitungan-keliling").style.color = "red";
  } else {
    document.querySelector(".hasil-perhitungan-keliling").textContent = "Nilai Yang Anda Masukkan Tidak Ada.";
    document.querySelector(".hasil-perhitungan-keliling").style.color = "red";
  }
});

// RESET KEMBALI HITUNGAN KELILING PERSEGI
resetButtonKeliling.addEventListener("click", function () {
  document.getElementById("inputFieldKeliling").value = "";
  document.querySelector(".hasil-perhitungan-keliling").textContent = "";
});
