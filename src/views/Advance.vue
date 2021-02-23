<template>
  <div class="home">
    <div class="advanceForm">
      <select
        v-model="selectedType"
        class="form-select my-5 me-2"
        aria-label="Default select example"
      >
        <option selected value="select">Type of result</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <select
        v-model="selectedYear"
        class="form-select my-5 ms-2"
        aria-label="Default select example"
      >
        <option selected value="year">Year</option>
        <option v-for="year in allYears" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>
    <input
      autofocus
      tabindex="0"
      type="text"
      class="form-control search_text mb-5"
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
    Movies
  },
  data() {
    return {
      movieName: null,
      movieList: [],
      suggestionsList: [],
      selectedYear: "year",
      selectedType: "select",
      wrong: null
    };
  },

  methods: {
    getMoviesSuggestions() {
      this.wrong = null;
      axios
        .get(
          `http://www.omdbapi.com/?apikey=1feca478&type=${
            this.selectedType
          }&y=${parseInt(this.selectedYear)}&s=${this.movieName}`
        )
        .then(movie_info_response => {
          if (movie_info_response.data.Response !== "False") {
            console.log("suggestionsList", movie_info_response.data.Search);
            this.suggestionsList = movie_info_response.data.Search;
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    getMovieInfo() {
      this.movieList = [];
      axios
        .get(
          `http://www.omdbapi.com/?apikey=1feca478&type=${
            this.selectedType
          }&y=${parseInt(this.selectedYear)}&s=${this.movieName}`
        )
        .then(movie_info_response => {
          if (this.selectedYear === "year" || this.selectedType === "select") {
            this.wrong = "You have to set parameter!";
          } else if (movie_info_response.data.Response === "False") {
            this.wrong = "There is no movie with this name!";
          } else {
            this.wrong = null;
            console.log(movie_info_response.data.Search);
            this.movieList = movie_info_response.data.Search;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  computed: {
    allYears() {
      const d = new Date("1970");
      const first = d.getFullYear();

      var s = new Date();
      const second = s.getFullYear();
      const arr = Array();

      for (let i = first; i <= second; i++) arr.push(i);

      return arr;
    }
  }
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
.advanceForm {
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
