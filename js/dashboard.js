function toggleSidebar(){
  document.querySelector(".sidebar").classList.toggle("close");
}

/* DATA */
let jadwal = JSON.parse(localStorage.getItem("jadwal")) || [];
let struktur = JSON.parse(localStorage.getItem("struktur")) || {
  ketua:"-", wakil:"-", sekretaris:"-"
};
let visiMisi = JSON.parse(localStorage.getItem("visiMisi")) || {
  visi:"Menjadi siswa berprestasi",
  misi:"Belajar, disiplin, berakhlak"
};

function tampilJadwal(){
  let el=document.getElementById("listJadwal");
  if(!el)return;
  el.innerHTML="";
  jadwal.forEach(j=>{
    el.innerHTML+=`<li>${j.hari} - ${j.mapel}</li>`;
  });
}

function simpanJadwal(){
  jadwal.push({hari:hari.value,mapel:mapel.value});
  localStorage.setItem("jadwal",JSON.stringify(jadwal));
  tampilJadwal();
}

function simpanStruktur(){
  struktur={
    ketua:ketua.value,
    wakil:wakil.value,
    sekretaris:sekretaris.value
  };
  localStorage.setItem("struktur",JSON.stringify(struktur));
  alert("Struktur disimpan");
}

function simpanVisi(){
  visiMisi={
    visi:visi.value,
    misi:misi.value
  };
  localStorage.setItem("visiMisi",JSON.stringify(visiMisi));
  alert("Visi & Misi disimpan");
}
