<template>
  <div id="movies">
    <div class="movie-container">
      <div class="image-container">
        <img :src="details.Poster" />
      </div>
      <div class="info">
        <h3 class="title">
          {{ details.Title }} <small>{{ details.Year }}</small>
        </h3>
        <p>{{ details.Plot }}</p>
        <div class="action_container">
          <button
            @click.stop="removeFromFav(details)"
            v-if="isFav"
            class="btnn"
          >
            <i class="isFavourite fa fa-heart"></i>
          </button>

          <button v-else class="btnn" @click.stop="addToFav(details)">
            <i class="fa fa-heart"></i>
          </button>
          <a
            :href="`https://www.imdb.com/title/${details.imdbID}/`"
            target="_blank"
            class="button"
            >IMDb</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: ["details"],
  data() {
    return {
      AllFavList: []
    };
  },
  created() {
    axios
      .get(`http://localhost:3000/myFav`)
      .then(fav_info_response => {
        this.AllFavList = fav_info_response.data;
        console.log("movieDetails", this.AllFavList);
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    isFav() {
      return Boolean(this.AllFavList.find(i => i.id === this.details.id));
    }
  },
  methods: {
    addToFav(id) {
      this.$emit("Add-To-Favourite-event", id);
    },
    removeFromFav(id) {
      this.$emit("Remove-From-Favourite-event", id);
    }
  }
};
</script>
<style>
small {
  font-size: small;
}
.isFavourite {
  color: red !important;
}
.btnn {
  border: none !important;
  outline: none !important;
  background-color: transparent;
}
</style>
