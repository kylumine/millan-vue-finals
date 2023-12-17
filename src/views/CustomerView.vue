<template>
    <div>
      <h1 class="title">Add New Customer</h1>
      <div class="row">
        <div class="col-md-5">
          <form @submit.prevent="addNewCustomer" class="form">
            <div class="form-group">
              <label for="name">Name</label>
              <input v-model="newCustomer.name" type="text" name="name" class="form-control">
              <p v-if="formErrors.name" class="error">{{ formErrors.name }}</p>
            </div>
            <div class="form-group">
              <label for="connum">Contact #</label>
              <input v-model="newCustomer.connum" type="text" name="connum" class="form-control">
              <p v-if="formErrors.connum" class="error">{{ formErrors.connum }}</p>
            </div>
            <div class="form-group">
              <label for="address">Address</label>
              <input v-model="newCustomer.address" type="text" name="address" class="form-control">
              <p v-if="formErrors.address" class="error">{{ formErrors.address }}</p>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="newCustomer.email" type="text" name="email" class="form-control">
              <p v-if="formErrors.email" class="error">{{ formErrors.email }}</p>
            </div>
            <div class="form-group my-3 d-grid gap-2 d-md-flex justify-content-end">
              <button type="submit" class="btnc btn-primary">Add Customer</button>
            </div>
            <p v-if="successMessage" class="success">{{ successMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .name {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .form {
    margin-top: 20px;
  }
  
  .form-group {
    margin-top: 10px;
  }
  
  .error {
    color: #dc3545; /* Bootstrap red color */
    margin-top: 5px;
  }
  
  .success {
    color: #28a745; /* Bootstrap green color */
    margin-top: 5px;
  }
  .btnc{
    background-color: #ff4081;
    color: #ffffff; 
    border-radius: 10px;
    width: 100px;
  }
  </style>
  
  <script setup>
  import { ref } from 'vue';
  
  const newCustomer = ref({
    name: '',
    connum: '',
    address: '',
    email: ''
  });
  
  const formErrors = ref({
    name: '',
    connum: '',
    address: '',
    email: ''
  });
  
  const successMessage = ref('');
  
  const addNewCustomer = async () => {
    // Reset previous errors and success message
    formErrors.value = {};
    successMessage.value = '';
  
    // Perform validation
    if (!newCustomer.value.name) {
      formErrors.value.name = 'Name is required';
    }
  
    if (!newCustomer.value.connum) {
      formErrors.value.connum = 'Contact # is required';
    }

    if (!newCustomer.value.address) {
      formErrors.value.address = 'Address # is required';
    }

    if (!newCustomer.value.email) {
      formErrors.value.email = 'Email # is required';
    }

    // If there are no errors, proceed with form submission
    if (!Object.values(formErrors.value).some(Boolean)) {
      try {
        const response = await fetch('http://localhost:8000/api/customers', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newCustomer.value),
        });
  
        if (response.ok) {
          successMessage.value = 'Customer added successfully!';
          // Optionally, you can reset the form fields here
          newCustomer.value = {
            name: '',
            connum: '',
            address: '',
            email: '',
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