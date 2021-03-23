<template>
  <div class="about container mt-4 mt-sm-5">
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <div>
        <img src="/favicon/android-chrome-192x192.png" alt="MovieAppIcon" />
      </div>
    </transition>
    <h1 class="my-2">About</h1>
    <p>
      This application made for assignment in Vue js
      <a
        href="https://www.kodluyoruz.org/bootcamp/istanbul-uygulamali-vue-js-bootcamp/"
        target="_blank"
        >Kodluyoruz</a
      >
      bootcamp
    </p>
    <ul>
      <li><strong>Html & Css: </strong>For structure a web page</li>
      <li>
        <strong
          ><a href="https://v3.vuejs.org/" target="_blank">Vuejs 3</a>
          : </strong
        >including vue-router
      </li>
      <li>
        <strong
          ><a href="https://getbootstrap.com/" target="_blank">Bootstrap 5</a>
          : </strong
        >For styling
      </li>
      <li>
        <strong
          ><a target="”_blank”" href="http://www.omdbapi.com/"
            >OMDb API:
          </a></strong
        >For movies database
      </li>
      <li>
        <strong
          ><a target="”_blank”" href="https://fonts.google.com/specimen/Poppins"
            >Poppins font</a
          >
          :</strong
        >From google fonts
      </li>
      <li>
        <strong
          ><a href="https://www.netlify.com/" target="_blank">Netlify</a
          >: </strong
        >For hosting
      </li>
    </ul>
    <div>
      <div class="fs-2">
        <a
          class="m-5"
          href="https://github.com/essasabbagh/Movie-App"
          target="_blank"
          ><i class="fab fa-github"></i
        ></a>
        <a href="https://twitter.com/3ssasabbagh" target="_blank"
          ><i class="fab fa-twitter"></i
        ></a>
        <a class="m-5" href="http://" target="_blank"
          ><i class="fas fa-envelope"></i
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
// import ref from "vue";
import gsap from "gsap";
export default {
  methods: {
    beforeEnter(el) {
      console.log("before enter - set intial state");
      el.style.transform = "translateY(-60px)";
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("starting to enter - make transition");
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    },
  },
};
</script>

<style>
.about {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
img {
  filter: drop-shadow(0 0 15px rgba(34, 34, 34, 0.4));
  transition: all 0.2s ease-in-out;
}
img:hover {
  filter: drop-shadow(0 0 20px rgba(34, 34, 34, 0.35));
  transform: scale(1.05);
}
li {
  margin-top: 5px;
}
a {
  color: #222;
  transition: all 0.15s ease;
}
a:hover {
  color: rgb(218, 0, 0);
  /* text-shadow: 0 0 1px #dfdfdf; */
}

.footer {
  display: flex;
  flex-direction: column;
}
</style>
