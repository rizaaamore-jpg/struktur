function showJadwal(){
  jadwal.value = localStorage.getItem("jadwal") || "";
}

function simpan(){
  localStorage.setItem("jadwal", jadwal.value);
  alert("Jadwal disimpan");
}

function tambahAdmin() {
  let admins = JSON.parse(localStorage.getItem("admins")) || [];

  let u = newAdmin.value.trim();
  let p = newPass.value.trim();

  if (!u || !p) {
    alert("Lengkapi data");
    return;
  }

  if (admins.find(a => a.user === u)) {
    alert("Admin sudah ada");
    return;
  }

  admins.push({ user: u, pass: p });
  localStorage.setItem("admins", JSON.stringify(admins));

  alert("Admin berhasil ditambahkan");
}
