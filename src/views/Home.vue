<template>
  <div class="home">
    <input
      autofocus
      tabindex="0"
      type="text"
      class="form-control search_text mt-5 mb-5 shadow"
      list="datalistOptions"
      id="exampleDataList"
      placeholder="Write name of movie ..."
      v-model="movieName"
      @input="getMoviesSuggestions"
      @select="getMovieInfo"
      @keyup.enter="getMovieInfo"
    />
    <datalist id="datalistOptions">
      <option
        v-for="suggestion in suggestionsList"
        :key="suggestion.imdbID"
        :value="suggestion.Title"
      ></option>
    </datalist>

    <!-- <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div> -->

    <div>
      <transition-group
        tag="div"
        appear
        class="container"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <Movies
          v-for="(movie, index) in movieList"
          :key="index"
          :details="movie"
          :data-index="index"
          @click="$router.push(`/details/${movie.imdbID}`)"
        />
      </transition-group>
      <div v-if="movieList.length == 0" class="mx-auto text-center">
        <p class="fs-1">There is no movie !!</p>
        <p><span class="display-1">ㄟ( ▔, ▔ )ㄏ</span></p>
      </div>
    </div>
    <transition name="alert" mode="out-in">
      <div v-if="wrong" class="alert alert-danger fs-5" role="alert">
        {{ wrong }}
      </div>
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import Movies from "@/components/Movies";
import gsap from "gsap";
export default {
  components: {
    Movies,
  },
  data() {
    return {
      movieName: null,
      movieDetails: null,
      movieList: [],
      suggestionsList: [],
      wrong: null,
    };
  },

  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        onComplete: done,
        delay: el.dataset.index * 0.2,
      });
    },
    getMoviesSuggestions() {
      this.wrong = null;
      axios
        .get(`http://www.omdbapi.com/?apikey=1feca478&s=${this.movieName}`)
        .then((movie_info_response) => {
          if (movie_info_response.data.Response !== "False") {
            console.log("suggestionsList", movie_info_response.data.Search);
            this.suggestionsList = movie_info_response.data.Search;
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getMovieInfo() {
      this.movieList = [];
      axios
        .get(`http://www.omdbapi.com/?apikey=1feca478&s=${this.movieName}`)
        .then((movie_info_response) => {
          if (movie_info_response.data.Response === "False") {
            this.wrong = "There is no movie with this name!";
          } else {
            this.wrong = null;
            console.log(movie_info_response.data.Search);
            this.movieList = movie_info_response.data.Search;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      this.movieDetails = null;
      this.movieName = "";
    },
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.list-enter-active {
  animation: fadeIn 1s ease;
}

@keyframes alert {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  50%,
  70%,
  90% {
    transform: translateX(5px);
  }
  60%,
  80% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.alert-enter-active {
  animation: alert 0.8s ease;
}
</style>
