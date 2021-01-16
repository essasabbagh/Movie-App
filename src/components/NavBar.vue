<template>
  <div>
    <!-- <header>
      <ul>
        <li>
          <a href="./index.html" class="active">Anasayfa</a>
        </li>
        <li>
          <a href="./favorites.html">Favorilerim</a>
        </li>
      </ul>
      <span> Movie App | kablosuzkedi </span>
    </header> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Movie App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/Favorites" class="nav-link"
                >Favorites</router-link
              >
            </li>
          </ul>
          <span> Movie App | Kodluyoruz </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
span {
  color: aliceblue;
  margin-left: auto;
}
</style>
