<template>
  <div class="favorites">
    <h1 class="mb-5 mt-5">Favorites Movies</h1>
    <p v-if="favList.length == 0">There is no Movies</p>

    <Movies
      v-for="(movie, index) in favList"
      :key="index"
      :details="movie"
      @Remove-From-Favourite-event="removeFromFavorite"
      @click="$router.push(`/details/${movie.imdbID}`)"
    />
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
      favList: [],
    };
  },
  methods: {
    removeFromFavorite(item) {
      axios
        .delete(`http://localhost:3000/myFav/${item.id}`)
        .then((res) => {
          console.log(res);
          this.favList = this.favList.filter((e) => e.id !== item.id);
          console.log("FavoriteList", this.favList);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    axios
      .get(`http://localhost:3000/myFav`)
      .then((movie_fav_response) => {
        console.log("movie_fav_response", movie_fav_response.data);
        this.favList = movie_fav_response.data;
        console.log("this.favList", this.favList);
      })
      .catch((error) => {
        console.log(error);
      });
  },
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
