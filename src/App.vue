<template>
  <div>
    <div id="nav">
      <nav-bar />
    </div>
    <!-- <transition name="moveUp" mode="out-in">
      <router-view />
    </transition> -->

    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <ScrollTopComponent />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ScrollTopComponent from "@/components/ScrollTopComponent";
export default {
  components: {
    NavBar,
    ScrollTopComponent,
  },
};
</script>

<style>
#nav {
  font-size: larger;
  width: 100%;
  box-shadow: 2px 2px 10px rgba(34, 34, 34, 0.5);
}

#nav a {
  font-weight: bold;
  color: #ededf0;
}

#nav a.router-link-exact-active {
  color: #ff3737;
}

.moveUp-enter-active {
  animation: fadeIn 0.8s ease;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
