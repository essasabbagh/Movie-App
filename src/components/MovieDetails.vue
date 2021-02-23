<template>
  <div class="poster">
    <div class="card mb-3">
      <div class="one">
        <img
          :src="`http://img.omdbapi.com/?apikey=1feca478&i=${info.imdbID}`"
          class="card-img-top"
          :alt="info.Title"
        />
        <div class="card-body">
          <h4 class="card-title">
            {{ info.Title }} <small class="text-muted">{{ info.Year }}</small>
          </h4>
          <p class="card-text">
            <b>Plot: </b>
            {{ info.Plot }}
          </p>
        </div>
      </div>
      <div class="card-body">
        <p class="card-text"><b>Actors: </b>{{ info.Actors }}</p>
        <p class="card-text"><b>Genre: </b>{{ info.Genre }}</p>
        <p class="card-text"><b>Language: </b>{{ info.Language }}</p>
        <p class="card-text"><b>Type: </b>{{ info.Type }}</p>
        <p class="card-text"><b>Runtime: </b>{{ info.Runtime }}</p>
        <p class="card-text"><b>Writer: </b>{{ info.Writer }}</p>
        <p class="card-text"><b>imdbID: </b>{{ info.imdbID }}</p>
        <p class="card-text"><b>imdbRating: </b>{{ info.imdbRating }} / 10</p>
        <p class="card-text"><b>Country: </b>{{ info.Country }}</p>

        <button class="btn btn-danger" @click="$router.push(`/`)">
          Back To Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: {}
    };
  },
  created() {
    axios
      .get(`http://www.omdbapi.com/?apikey=1feca478&i=${this.$route.params.id}`)
      .then(movie_info_response => {
        this.info = movie_info_response.data;
        console.log("info", this.info);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
.text-muted {
  font-size: 50%;
}
.one {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.card {
  width: 60%;
  margin: auto;
}
.card-img-top {
  width: 500px;
}
.card-title {
  font-size: 50px;
  font-weight: bold;
}
.btnn {
  border: none !important;
  outline: none !important;
  background-color: transparent;
}
@media only screen and (max-width: 990px) {
  .one {
    flex-direction: column;
  }
  .card,
  .card-img-top {
    width: 100%;
  }
}
</style>
