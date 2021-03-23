<template>
  <div id="movies">
    <div class="card movie-card">
      <div class="bg-image">
        <img :src="img" class="img-fluid image" loading="lazy" />
      </div>
      <div class="cardBody">
        <div class="cardFooter">
          <div class="action_container">
            <button
              @click.stop="removeFromFav(movieInfo)"
              v-if="isFavorite"
              class="btnn"
            >
              <i class="isFavorite fa fa-heart"></i>
            </button>
            <button v-else class="btnn" @click.stop="addToFav(movieInfo)">
              <i class="fa fa-heart"></i>
            </button>
            <a
              :href="`https://www.imdb.com/title/${movieInfo.imdbID}/`"
              target="_blank"
              class="button"
              >IMDb</a
            >
          </div>
          <h5 class="card-titl">
            {{ movieInfo.Title }} <small>{{ movieInfo.Year }}</small>
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
      AllFavList: [],
      movieInfo: {},
    };
  },
  created() {
    axios
      .get(`http://www.omdbapi.com/?apikey=1feca478&i=${this.details.imdbID}`)
      .then((movie_info_response) => {
        console.log(movie_info_response.data);
        this.movieInfo = movie_info_response.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  computed: {
    img() {
      return this.movieInfo.Poster == "N/A"
        ? `../assets/noposter.jpg`
        : this.movieInfo.Poster;
    },
    isFavorite() {
      const arr = JSON.parse(localStorage.getItem("movie")) || [];
      return arr.find((e) => e.imdbID == this.details.imdbID);
    },
  },
  methods: {
    addToFav(item) {
      const movie = { title: item.Title, imdbID: item.imdbID };
      const arr = JSON.parse(localStorage.getItem("movie")) || [];
      arr.push(movie);
      localStorage.setItem("movie", JSON.stringify(arr));
      this.$router.push(`/favorites`);
    },
    removeFromFav(item) {
      const arr = JSON.parse(localStorage.getItem("movie")) || [];
      const arr2 = arr.filter((movie) => movie.imdbID != item.imdbID);
      localStorage.setItem("movie", JSON.stringify(arr2));
      this.$router.push(`/favorites`);
    },
  },
};
</script>
<style scoped>
#movies {
  margin: 1em;
}
small {
  font-size: 50%;
}
.isFavorite {
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
  overflow: hidden;
  box-shadow: 1px 1px 15px #333;
  transition: all 0.3s ease-in-out;
}
.movie-card:hover {
  -webkit-box-shadow: 10px 9px 25px -10px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 9px 25px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 9px 25px -10px rgba(0, 0, 0, 0.75);
  transform: scale(1.05);
}
.movie-card:hover img {
  opacity: 0.7;
}
.movie-card img {
  border-radius: 10px !important;
  position: absolute;
  z-index: 1;
  transition: all 0.3s ease-in-out;
}

.cardBody {
  border-radius: 10px !important;
  width: 100%;
  height: 444px;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: end;
  transform: translateY(10px);
  opacity: 0;
  transition: all 0.3s ease-in-out;
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
.cardBody:hover {
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
