<template>
  <div class="home">
    <input
      autofocus
      tabindex="0"
      type="text"
      class="form-control search_text mt-5 mb-5"
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
    <div v-if="wrong" class="alert alert-danger" role="alert">
      {{ wrong }}
    </div>
    <div class="container">
      <Movies
        v-for="(movie, index) in movieList"
        :key="index"
        :details="movie"
        @click="$router.push(`/details/${movie.imdbID}`)"
      />

      <div v-if="movieList.length == 0" class="mx-auto text-center">
        <p class="fs-1 text-muted">There is no movie</p>
        <p><span class="fs-1 text-muted">ㄟ( ▔, ▔ )ㄏ</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Movies from "@/components/Movies";

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
  justify-content: space-between;
  flex-wrap: wrap;
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
