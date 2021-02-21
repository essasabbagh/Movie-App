<template>
  <div class="home">
    <input
      type="text"
      autofocus
      placeholder="Write name of movie ..."
      class="search_text mt-5 mb-5"
      v-model="movieName"
      @keyup.enter="getMovieInfo"
    />
    <!-- <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div> -->
    <div class="container">
      <Movies
        v-for="(movie, index) in movieList"
        :key="index"
        :details="movie"
        :favList="favList"
        @Add-To-Favourite-event="addToFavorite"
        @Remove-From-Favourite-event="removeFromFavorite"
        @click="$router.push(`/details/${movie.imdbID}`)"
      />
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
      movieDetails: null,
      movieList: [],
      favList: []
    };
  },

  methods: {
    getMovieInfo() {
      axios
        .get(`http://www.omdbapi.com/?apikey=1feca478&t=${this.movieName}`)
        .then(movie_info_response => {
          if (movie_info_response.data.Response === "False") {
            alert("There is no movie with this name");
          } else {
            this.movieDetails = movie_info_response.data;
            console.log("movieDetails", this.movieDetails);
            this.movieList.push(movie_info_response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
      this.movieDetails = null;
      this.movieName = "";
    },
    addToFavorite(item) {
      axios
        .post("http://localhost:3000/myFav", item)
        .then(res => {
          this.favList.push(res.data);
          console.log("FavoriteList", this.favList);
        })
        .catch(error => {
          console.log(error);
        });
    },
    removeFromFavorite(item) {
      axios
        .delete(`http://localhost:3000/myFav/${item.id}`)
        .then(res => {
          console.log(res);
          this.favList = this.favList.filter(e => e.id !== item.id);
          console.log("FavoriteList", this.favList);
        })
        .catch(error => {
          console.log(error);
        });
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
