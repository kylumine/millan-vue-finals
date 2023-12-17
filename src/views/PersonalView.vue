<template>
  <div class="everything">
    <div class="perin">
      <h1 class="moviet">
        Movies
        <RouterLink to="/movies" class="plus">+</RouterLink>
      </h1>
    </div>
    <div class="table-movies">
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Rate per day</th>
            <th>Delete</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie.id">
            <td>{{ movie.id }}</td>
            <td>{{ movie.title }}</td>
            <td>{{ movie.genre }}</td>
            <td>{{ movie.rate_per_day }}</td>
            <td>
              <button @click="deleteMovie(movie.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.everything {
  margin: 3.5rem 4rem;
}

.perin h1 {
  font-size: 45px;
  margin-left: 2px;
  font-weight: 1000;
  letter-spacing: -2px;
  font-family: 'Cavilant';
}

.perin {
  border-bottom: 1px solid #ff4081; /* Pink border */
  padding-bottom: 10px;
  display: flex;

}

.table-movies {
  margin-top: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ff4081; /* Pink border */
  padding: 8px;
  text-align: left;
}

th {
  background-color: #ff4081; /* Pink background for header */
  color: white; /* White text for header */
}

.moviet {
  color: white; /* White color for h1 */
}
.plus{
  padding: 5px;
  color: #ff4081;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  text-decoration: none;
}
.btn{
  background-color: #ff4081;
    color: #ffffff; 
    border-radius: 10px;
    width: 100px;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';

const movies = ref(null);

onMounted(() => {
  fetch('http://localhost:8000/api/movies')
    .then(response => response.json().then(data => (movies.value = data)));
});

const deleteMovie = async (movieId) => {
  try {
    const response = await fetch(`http://localhost:8000/api/movies/${movieId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      movies.value = movies.value.filter((movie) => movie.id !== movieId);
      window.alert('Movie deleted successfully!');
    } else {
      console.error('Failed to delete movie:', response.statusText);
    }
  } catch (error) {
    console.error('Error deleting movie:', error);
  }
};
</script>
