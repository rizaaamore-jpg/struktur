<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" href="css/auth.css">
</head>
<body>

<div class="login-card">
  <img src="assets/img/logo.png" class="logo">
  <h2>Login</h2>

  <input id="user" placeholder="Username">
  <input id="pass" type="password" placeholder="Password">

  <button onclick="login('siswa')">Login Siswa</button>
  <button onclick="login('admin')" class="admin-btn">Login Admin</button>
</div>

<script src="js/auth.js"></script>
</body>
</html>
