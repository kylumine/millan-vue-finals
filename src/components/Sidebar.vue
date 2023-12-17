<template>
    <div class="sidebar">
      <!-- Sidebar content goes here -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- Add more links for your routes -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 250px;
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  </style>
  