<template>
  <a @click="scrollTop" v-show="visible" class="bottom-right"> ▲ </a>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop() {
      window.scroll(0, 0);
    },
    scrollListener() {
      this.visible = window.scrollY > 150;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 50px;
  right: 50px;
  padding: 0.6em 0.8em;
  cursor: pointer;
  background-color: #222;
  color: #ff3737;
  text-decoration: none;
  font-size: 1.6em;
  font-weight: bold;
  border-radius: 50%;
  box-shadow: 1px 1px 10px rgba(34, 34, 34, 0.5);
  transition: all 0.2s ease-in-out;
}
.bottom-right:hover {
  box-shadow: 1px 1px 15px rgba(34, 34, 34, 0.6);
  text-shadow: 0 0 8px #ff0000;
}
</style>
