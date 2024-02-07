<template>
      
    <div class="min-h-screen flex flex-col justify-center items-center">
      <div>
        <h1 class="text-2xl font-bold text-center text-green-700">Sign In To Jijenge Youth</h1>
        <p class="text-slate-400"> To continue using our services, please login to continue</p>
      </div>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input
            v-model="username"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="********"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            @click.prevent="login"
            class="bg-green-700 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a class="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800" href="#">
              Forgot Password?
          </a>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        url: 'http://localhost:8000/login',
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        // Add your login logic here
        const formData = new FormData();
        formData.append('username', this.username)
        formData.append('password', this.password)
        await fetch(this.url, {
          method: 'post',
          body: formData
        })
        .then(response =>{
          if (!response.ok){
          const errorData = response.json()
          console.log(errorData)
          // throw new Error('Network Response was not Ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
        console.log('Logging in with:', this.username, this.password);
      },
    },
  };
  </script>
  
  <style>
  /* You can add additional styles here if needed */
  </style>
  