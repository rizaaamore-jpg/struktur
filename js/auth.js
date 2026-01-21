let admins = JSON.parse(localStorage.getItem("admins")) || [
  {user:"admin",pass:"12345"}
];
let siswa = JSON.parse(localStorage.getItem("siswa")) || [];

localStorage.setItem("admins",JSON.stringify(admins));
localStorage.setItem("siswa",JSON.stringify(siswa));

function login(role,btn){
  let u=user.value.trim();
  let p=pass.value.trim();
  if(!u||!p)return alert("Lengkapi data");

  btn.classList.add("loading");
  btn.disabled=true;

  let data=role==="admin"?admins:siswa;
  let ok=data.find(d=>d.user===u&&d.pass===p);

  setTimeout(()=>{
    if(!ok){
      alert("Login gagal");
      btn.classList.remove("loading");
      btn.disabled=false;
      return;
    }
    localStorage.setItem("login",role);
    localStorage.setItem("username",u);
    location.href=role==="admin"?"admin/dashboard.html":"siswa/dashboard.html";
  },1000);
}

function registerSiswa(){
  let u=user.value.trim();
  let p=pass.value.trim();
  if(!u||!p)return alert("Lengkapi data");
  if(siswa.find(s=>s.user===u))return alert("Username sudah ada");

  siswa.push({user:u,pass:p,kelas:"X TKJ 1"});
  localStorage.setItem("siswa",JSON.stringify(siswa));
  alert("Register berhasil");
}
