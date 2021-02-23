<template>
  <div class="about container mt-5">
    <img src="/favicon/android-chrome-192x192.png" alt="MovieAppIcon" />
    <h1 class="">About</h1>
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
<style>
.about {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
li {
  margin-top: 5px;
}
a {
  color: #ff3737;
}
.footer {
  display: flex;
  flex-direction: column;
}
</style>
