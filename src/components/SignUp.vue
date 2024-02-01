<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <h1 class="text-2xl font-bold text-center text-green-700"> Create An Account</h1>
      <p class="text-slate-400"> Open an account and start advancing with Us</p>
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
            placeholder="Choose a username"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
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
            @click.prevent="signup"
            class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        url: 'http://localhost:8000/new',
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async signup() {
        try {
          // const now = DATE()
        const response = await fetch(this.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            'name': this.username,
            'password': this.password,
            'first_name': "mordecai",
            'last_name': "muvandi"
          }),

        });
        if (!response.ok) {
          const errorData = await response.json()
          console.log(errorData)
          throw new Error('Network Response was not Ok');
        }
        const responseData = await response.json();
        console.log(responseData)
      } catch(Error) {
        console.error('Error:', Error);
      }
        // Add your signup logic here
        console.log('Signing up with:', this.username, this.email, this.password);
      },
    },
  };
  </script>
  
  <style>
  /* You can add additional styles here if needed */
  </style>
  