<template>
    <div>
      <h1 class="title">New Rent</h1>
      <div class="row">
        <div class="col-md-5">
          <form @submit.prevent="addNewRent" class="form">
            <div class="form-group mt-2">
              <label for="customer_id">Select Rentee</label>
              <select v-model="newRent.customer_id" class="form-select">
                <option value="" disabled>Select Rentee</option>
                <option v-for="customer in customers" :key="customer.id" :value="customer.id">
                  {{ customer.name }}
                </option>
              </select>
              <p v-if="formErrors.customer_id" class="error">{{ formErrors.customer_id }}</p>
            </div>
            <div class="form-group mt-2">
              <label for="rented_on">Rented On</label>
              <input v-model="newRent.rented_on" type="date" class="form-control">
              <p v-if="formErrors.rented_on" class="error">{{ formErrors.rented_on }}</p>
            </div>
            <div class="form-group mt-2">
              <label for="return_by">Return By</label>
              <input v-model="newRent.return_by" type="date" class="form-control">
              <p v-if="formErrors.return_by" class="error">{{ formErrors.return_by }}</p>
            </div>
            <div class="form-group mt-2">
              <label for="total">Total</label>
              <input v-model="newRent.total" type="text" class="form-control">
              <p v-if="formErrors.total" class="error">{{ formErrors.total }}</p>
            </div>
            <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
              <button type="submit" class="btn btn-primary">Add Rent</button>
            </div>
          </form>
          <p v-if="successMessage" class="success">{{ successMessage }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <style>
    /* Styles remain unchanged */
    .success {
      color: #28a745; /* Bootstrap green color */
      margin-top: 5px;
    }
  </style>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const newRent = ref({
    customer_id: '',
    rented_on: '',
    return_by: '',
    total: '',
  });
  
  const formErrors = ref({
    customer_id: '',
    rented_on: '',
    return_by: '',
    total: '',
  });
  
  const customers = ref([]);
  const successMessage = ref('');
  
  onMounted(async () => {
    try {
      const response = await fetch('http://localhost:8000/api/customers');
      const data = await response.json();
      customers.value = data;
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  });
  
  const addNewRent = async () => {
    // Reset previous errors
    formErrors.value = {};
  
    // Perform validation
    if (!newRent.value.customer_id) {
      formErrors.value.customer_id = 'Customer is required';
    }
    if (!newRent.value.rented_on) {
      formErrors.value.rented_on = 'Rented On is required';
    }
    if (!newRent.value.return_by) {
      formErrors.value.return_by = 'Return By is required';
    }
    if (!newRent.value.total) {
      formErrors.value.total = 'Total is required';
    }
  
    // If there are no errors, you can proceed with form submission
    if (!Object.values(formErrors.value).some(Boolean)) {
      try {
        const response = await fetch('http://localhost:8000/api/rents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newRent.value),
        });
  
        if (response.ok) {
          console.log('Rent added successfully!');
          // Optionally, you can reset the form fields here
          newRent.value = {
            customer_id: '',
            rented_on: '',
            return_by: '',
            total: '',
          };
          successMessage.value = 'Rent added successfully!';
        } else {
          console.error('Failed to submit form:', response.statusText);
          successMessage.value = '';
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        successMessage.value = '';
      }
    } else {
      successMessage.value = '';
    }
  };
  </script>
  
  