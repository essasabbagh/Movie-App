<template>
  <div id="movies">
    <div class="card movie-card">
      <div class="bg-image">
        <img :src="details.Poster" class="img-fluid image" />
      </div>
      <div class="cardBody">
        <div class="cardPara">
          <p class="card-text">
            {{ details.Plot }}
          </p>
        </div>
        <div class="cardFooter">
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
          <h5 class="card-titl">
            {{ details.Title }} <small>{{ details.Year }}</small>
          </h5>
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
<style scoped>
#movies {
  margin: 1em;
}
small {
  font-size: 50%;
}
.isFavourite {
  color: red !important;
}
.btnn {
  border: none !important;
  outline: none !important;
  background-color: transparent;
}
.movie-card {
  width: 300px !important;
  height: 444px !important;
  border-radius: 10px !important;
  transition: all 0.2s ease-in-out;
}
.movie-card:hover {
  -webkit-box-shadow: 10px 9px 25px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 9px 25px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 9px 25px -10px rgba(0, 0, 0, 0.75);
}
.movie-card img {
  border-radius: 10px !important;
  position: absolute;
  z-index: 1;
}

.cardBody {
  border-radius: 10px !important;
  width: 100%;
  height: 444px;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cardPara {
  border-radius: 10px 10px 0 0 !important;
  background-color: rgba(128, 128, 128, 0.9);
  padding: 0.6em;
  height: 100%;
  color: antiquewhite;
  font-size: 1.1em;
  line-height: 2em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.cardBody:hover .cardPara {
  transform: translateY(0);
  opacity: 1;
}
.cardFooter {
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
  border-radius: 0 0 10px 10px !important;
  padding: 0.6em;
}
.card-titl {
  font-size: 2.4em;
  font-weight: bold;
  width: 100%;
}
</style>
