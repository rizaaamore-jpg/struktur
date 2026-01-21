function toggleSidebar(){
  document.querySelector(".sidebar").classList.toggle("close");
}

let jadwal = JSON.parse(localStorage.getItem("jadwal")) || [];
let struktur = JSON.parse(localStorage.getItem("struktur")) || {
  ketua:"-", wakil:"-", sekretaris:"-"
};

function simpanJadwal(){
  let hari=document.getElementById("hari").value;
  let mapel=document.getElementById("mapel").value;
  jadwal.push({hari,mapel});
  localStorage.setItem("jadwal",JSON.stringify(jadwal));
  tampilJadwal();
}

function tampilJadwal(){
  let out="";
  jadwal.forEach(j=>out+=`<li>${j.hari} - ${j.mapel}</li>`);
  document.getElementById("listJadwal").innerHTML=out;
}

function simpanStruktur(){
  struktur.ketua=ketua.value;
  struktur.wakil=wakil.value;
  struktur.sekretaris=sekretaris.value;
  localStorage.setItem("struktur",JSON.stringify(struktur));
  alert("Struktur disimpan");
}
