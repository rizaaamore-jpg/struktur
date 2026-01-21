const admins = [
  {user:"admin", pass:"12345"}
];

const siswa = [
  {user:"arif", pass:"111"}
];

function login(role){
  const u = user.value;
  const p = pass.value;

  let data = role === "admin" ? admins : siswa;
  let found = data.find(d => d.user === u && d.pass === p);

  if(!found){
    alert("Login gagal");
    return;
  }

  localStorage.setItem("login", role);
  localStorage.setItem("username", u);

  location.href = role === "admin"
    ? "admin/dashboard.html"
    : "siswa/dashboard.html";
}
