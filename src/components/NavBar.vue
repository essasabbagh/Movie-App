<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Movie App</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <button
          @click="openToggle"
          :class="{ collapsed: isOpen }"
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/favorites" class="nav-link"
                >Favorites</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/advance" class="nav-link">Advance</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
          </ul>
          <span> Movie App | Kodluyoruz </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    openToggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.navbar {
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
}
span {
  color: aliceblue;
  margin-left: auto;
}

.nav-link:hover {
  transition: all 0.2s ease;
  text-shadow: 0 0 2px aliceblue;
}

.router-link-exact-active {
  color: #ff3737 !important;
  transition: all 0.2s ease;
  text-shadow: 0 0 1px #ff0000;
}

.router-link-exact-active:hover {
  text-shadow: 0 0 5px #ff0000;
}

</style>
