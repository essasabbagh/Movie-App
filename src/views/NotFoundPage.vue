<template>
  <div>
    <div class="card">
      <img src="@/assets/not_found.png" alt="not_found" />
      <h2 class="card-title">Not Found :(</h2>
      <p>
        We don't know how you arrive to here ,but you can back to
        <a href="/">Home</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.card {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 400px;
  margin: 75px auto 0;
}
</style>
