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
    <Movies
      v-for="(movie, index) in movieList"
      :key="index"
      :details="movie"
      @Add-To-Favourite-event="addToFavorite"
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
    // refresh() {
    //   axios
    //     .get(`http://localhost:3000/myMovie`)
    //     .then(movie_info_response => {
    //       this.movieDetails = movie_info_response.data;
    //       console.log("movieDetails", this.movieDetails);
    //       this.movieList = movie_info_response.data;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
    // update(v) {
    //   axios
    //     .post("http://localhost:3000/myMovie", v)
    //     .then(movie_save_response =>
    //       console.log("movie_save_response", movie_save_response)
    //     )
    //     .catch(error => {
    //       console.log(error);
    //     });
    // },
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
          console.log("addToFavorite", res);
          console.log("FavoriteList", this.favList);
        })
        .catch(error => {
          console.log(error);
        });

      // const source = axios.CancelToken.source().token;
      // const cancelToken = source.token;
      // const req = axios.get("http://httpbin.org/get?answer=42", {
      //   cancelToken,
      // });

      // let index = this.movieList.findIndex((i) => i.imdbID === item.imdbID);
      // axios
      //   .put(`http://localhost:3000/myMovie/${index + 1}`, {
      //     isFav: true,
      //     ...item,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     if (res.status > 500) {
      //       console.log("addToFavoritemovie", res.status);
      //       this.movieList[index].isFav = true;
      //       this.refresh();
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // console.log("add", item.isFav);
      item.isFav = !item.isFav;
    },
    removeFromFavorite(item) {
      let index = this.movieList.findIndex(i => i.imdbID === item.imdbID);
      axios
        .delete(`http://localhost:3000/myFav/${index + 1}`)
        .then(res => console.log(res))
        .catch(error => {
          console.log(error);
        });

      // axios
      //   .put(`http://localhost:3000/myMovie/${index + 1}`, {
      //     isFav: false,
      //     ...item,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     if (res.status > 500) {
      //       console.log("addToFavoritemovie", res.status);
      //       this.movieList[index].isFav = false;
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      // console.log("rempve", item.isFav);
      item.isFav = !item.isFav;
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
.mt-5 {
  margin-top: 6rem !important;
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
