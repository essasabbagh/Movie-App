<template>
  <div class="favorites">
    <h1 class="mb-5 mt-5">Favorites Movies</h1>
    <p v-if="favList.length === 0">There is no Movies</p>

    <Movies
      v-for="(movie, index) in favList"
      :key="index"
      :details="movie"
      @Favourite-event="addToFavorite"
      @click="$router.push(`/details/${movie.imdbID}`)"
    />
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
      favList: []
    };
  },
  methods: {
    addToFavorite() {
      console.log("addToFavorite");
    }
  },
  created() {
    axios
      .get(`http://localhost:3000/myFav`)
      .then(movie_fav_response => {
        console.log("movie_fav_response", movie_fav_response.data);
        this.favList = movie_fav_response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style>
.favorites {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
