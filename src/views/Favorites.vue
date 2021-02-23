<template>
  <div class="favorites">
    <h1 class="mb-5 mt-5">Favorites Movies</h1>
    <div class="container">
      <Movies
        v-for="(movie, index) in favList"
        :key="index"
        :details="movie"
        @click="$router.push(`/details/${movie.imdbID}`)"
      />
      <div v-if="favList.length == 0" class="mx-auto text-center">
        <p class="fs-1 text-muted">There is no movie</p>
        <p><span class="fs-1 text-muted">ㄟ( ▔, ▔ )ㄏ</span></p>
      </div>
    </div>
  </div>
</template>

<script>
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
    // removeFromFavorite(item) {
    //   axios
    //     .delete(`http://localhost:3000/myFav/${item.id}`)
    //     .then((res) => {
    //       console.log(res);
    //       this.favList = this.favList.filter((e) => e.id !== item.id) || [];
    //       console.log("FavoriteList", this.favList);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  created() {
    this.favList = JSON.parse(localStorage.getItem("movie")) || [];
    console.log("fav",this.favList);

    // axios
    //   .get(`http://localhost:3000/myFav`)
    //   .then((movie_fav_response) => {
    //     console.log("movie_fav_response", movie_fav_response.data);
    //     this.favList = movie_fav_response.data || [];
    //     console.log("this.favList", this.favList);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
</script>
<style>
.favorites {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
</style>
