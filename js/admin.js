function showJadwal(){
  jadwal.value = localStorage.getItem("jadwal") || "";
}

function simpan(){
  localStorage.setItem("jadwal", jadwal.value);
  alert("Jadwal disimpan");
}
