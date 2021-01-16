<template>
  <div>
    <div id="nav">
      <nav-bar />
    </div>
    <transition name="moveUp" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 10s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

#nav {
  /* padding: 30px; */
  font-size: larger;
  position: fixed;
  width: 100%;
  box-shadow: 2px 2px 10px rgba(34, 34, 34, 0.5);
  z-index: 1;
}

#nav a {
  font-weight: bold;
  color: #ededf0;
}

#nav a.router-link-exact-active {
  color: #ff3737;
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  }
}
</style>
