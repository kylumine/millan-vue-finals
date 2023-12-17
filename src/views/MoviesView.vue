<template>
    <div>
      <h1 class="title">Add New Movie</h1>
      <div class="row">
        <div class="col-md-5">
          <form @submit.prevent="addNewMovie" class="form">
            <div class="form-group">
              <label for="title">Title</label>
              <input v-model="newMovie.title" type="text" name="title" class="form-control">
              <p v-if="formErrors.title" class="error">{{ formErrors.title }}</p>
            </div>
            <div class="form-group">
              <label for="genre">Genre</label>
              <input v-model="newMovie.genre" type="text" name="genre" class="form-control">
              <p v-if="formErrors.genre" class="error">{{ formErrors.genre }}</p>
            </div>
            <div class="form-group">
              <label for="rate_per_day">Rate per day</label>
              <input v-model="newMovie.rate_per_day" type="text" name="rate_per_day" class="form-control">
              <p v-if="formErrors.rate_per_day" class="error">{{ formErrors.rate_per_day }}</p>
            </div>
            <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
              <button type="submit" class="btn btn-primary">Add Movie</button>
            </div>
            <p v-if="successMessage" class="success">{{ successMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .title {
    font-size: 24px;
    margin-bottom: 20px;
    color: white;
  }
  
  .form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-top: 15px;
    margin-left: 50px;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
    color:white;
  }
  
  .error {
    color: #dc3545; /* Bootstrap red color */
    margin-top: 5px;
  }
  
  .success {
    color: #28a745; /* Bootstrap green color */
    margin-top: 5px;
  }
  label {
    display: block;
    margin: 10px 0;
}
  </style>
  
  
  <script setup>
  import { ref } from 'vue';
  
  const newMovie = ref({
    title: '',
    genre: '',
    rate_per_day: ''
  });
  
  const formErrors = ref({
    title: '',
    genre: '',
    rate_per_day: ''
  });
  
  const successMessage = ref('');
  
  const addNewMovie = async () => {
    // Reset previous errors and success message
    formErrors.value = {};
    successMessage.value = '';
  
    // Perform validation
    if (!newMovie.value.title) {
      formErrors.value.title = 'Title is required';
    }
  
    if (!newMovie.value.genre) {
      formErrors.value.genre = 'Genre is required';
    }
  
    if (!newMovie.value.rate_per_day) {
      formErrors.value.rate_per_day = 'Rate per day is required';
    }
  
    // If there are no errors, proceed with form submission
    if (!Object.values(formErrors.value).some(Boolean)) {
      try {
        const response = await fetch('http://localhost:8000/api/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMovie.value),
        });
  
        if (response.ok) {
          successMessage.value = 'Movie added successfully!';
          // Optionally, you can reset the form fields here
          newMovie.value = {
            title: '',
            genre: '',
            rate_per_day: '',
          };
        } else {
          console.error('Failed to submit form:', response.statusText);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };
  </script>
  
  