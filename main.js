// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// GANTI DENGAN FIREBASE CONFIG ANDA
const firebaseConfig = {
  apiKey: "AIzaSyD1SzPGurWmohpmdQiXu4fcGoGn9jZEM4s",
  authDomain: "insancemerlang-86b51.firebaseapp.com",
  projectId: "insancemerlang-86b51",
  storageBucket: "insancemerlang-86b51.firebasestorage.app",
  messagingSenderId: "639827268939",
  appId: "1:639827268939:web:d52a83c6d165eb4b0344ce"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const siswaCollection = collection(db, "siswa")

// Fungsi untuk menampilkan data siswa
export async function tampilkanDaftarsiswa() {
  // ambil snapshot data dari koleksi siswa
  const snapshot = await getDoc(siswaCollection)
  
  // ambil elemen tabel data siswa
  const tabel = document.getElementById("tabelData")
  
  // kosongkan isi tabel
  tabel.innerHTML = ""
  
  // loop setiap dokumen dalam snapshot
  snapshot.forEach((doc) => {
    //variabel untuk menyimpan data
    const data = doc.data()
    const id = doc.id
    
    // buat elemen baris baru
    const baris = document.createElement("tr")
    
    // buat elemen kolom untuk NIS
    const kolomNIS = document.createElement("td")
    kolomNIS.textContent = data.nis
    
    //buat elemen kolom untuk Nama
    const kolomNama = document.createElement("td")
    kolomNama.textContent = data.nama
    
    // buat elemen kolom untuk Kelas
    const kolomKelas = document.createElement("td")
    kolomKelas.textContent = data.kelas
    
    // buat elemen kolom untuk Aksi
    const kolomAksi = document.createElement("td")
    
    // buat tombol edit
    const tombolEdit = document.createElement("button")
    tombolEdit.textContent = "Edit"
    tombolEdit.href = "edit.html?id=" + id
    tombolEdit.className = "button edit"
    
    // tombol Hapus
    const tombolHapus = document.createElement("button")
    tombolHapus.textContent = "Hapus"
    tombolHapus.className = "button delete"
    
    // tambahkan elemen ke dalam kolom Aksi
    kolomAksi.appendChild(tombolEdit)
    kolomAksi.appendChild(tombolHapus)
    
    //tambahkan kolom kedalam baris
    baris.appendChild(kolomNIS)
    baris.appendChild(kolomNama)
    baris.appendChild(kolomKelas)
    baris.appendChild(kolomAksi)
    
    // tambahkan baris kedalam tabel
    tabel.appendChild(baris)
    
  })
  
}