// ambil data atau buat default
let admins = JSON.parse(localStorage.getItem("admins")) || [
  { user: "admin", pass: "12345" }
];

let siswa = JSON.parse(localStorage.getItem("siswa")) || [];

// simpan default kalau belum ada
localStorage.setItem("admins", JSON.stringify(admins));
localStorage.setItem("siswa", JSON.stringify(siswa));

function login(role) {
  const u = user.value.trim();
  const p = pass.value.trim();

  let data = role === "admin" ? admins : siswa;
  let found = data.find(d => d.user === u && d.pass === p);

  if (!found) {
    alert("Username atau Password salah");
    return;
  }

  localStorage.setItem("login", role);
  localStorage.setItem("username", u);

  location.href = role === "admin"
    ? "admin/dashboard.html"
    : "siswa/dashboard.html";
}

function registerSiswa() {
  const u = user.value.trim();
  const p = pass.value.trim();

  if (!u || !p) {
    alert("Lengkapi data");
    return;
  }

  if (siswa.find(s => s.user === u)) {
    alert("Username sudah dipakai");
    return;
  }

  siswa.push({ user: u, pass: p });
  localStorage.setItem("siswa", JSON.stringify(siswa));

  alert("Register berhasil, silakan login");
}
