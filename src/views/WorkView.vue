<template>
    <div class="everything">
      <div class="perin">
        <h1 class="rentT">Rents <RouterLink to="/rent" class="plus">+</RouterLink></h1>
      </div>
      <div class="table-rents">
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Rented On</th>
              <th>Return By</th>
              <th>Delete</th> 
            </tr>
          </thead>
          <tbody>
            <tr v-for="rent in rents" :key="rent.id">
              <td>{{ rent.id }}</td>
              <td>{{ rent.customer.name }}</td>
              <td>{{ rent.total }}</td>
              <td>{{ rent.rented_on }}</td>
              <td>{{ rent.return_by }}</td>
              <td>
                <button @click="deleteRent(rent.id)" class="btn btn-danger">Delete</button>
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
  
  .table-rents {
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
  
  .rentT {
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
  button{
  height: 30px;
  width: 30px;
  }
  </style>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const rents = ref(null);
  
  onMounted(() => {
    // Fetch rents with customer data
    fetch('http://localhost:8000/api/rents?include=customer')
      .then(response => response.json())
      .then(data => (rents.value = data))
      .catch(error => console.error('Error fetching data:', error));
  });
  
  const deleteRent = async (rentId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/rents/${rentId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // Filter out the deleted rent
        rents.value = rents.value.filter(rent => rent.id !== rentId);
  
        // Display an alert
        window.alert('Rent deleted successfully!');
      } else {
        console.error('Failed to delete rent:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting rent:', error);
    }
  };
  </script>