<template>
    <div class="h-screen lg:w-3/4 lg:mx-auto">
      <nav class="w-full  flex justify-between ">
        <div class="flex space-x-2">
          <h2>JiJenge Youth Group</h2>
          <h1>DashBoard</h1>
        </div>
        <div class="flex">
          <input type="text" placeholder="Search">
          <div class="flex px-2">
            <!-- <img src="" alt=""> -->
            <p>John Doe</p>
            <button class="px-2"><i class="fa-solid fa-caret-down"></i></button>
          </div>
          <button><i class="fa-solid fa-bell"></i></button>
        </div>
      </nav>
      <div class="flex">
        <aside class="w-auto h-full flex flex-col space-y-4 mt-4 ">
          <a href="#">Loans</a>
          <a href="#">Notifications</a>
          <a href="#">Planing</a>
          <a href="#">Transact</a>
          <a href="#" class="border-b-2 pb-2 border-slate-700">Project</a>
          <a href="#">Profile</a>
          <a href="#">Theme</a>
          <a href="#">Logout</a>
          <div>
            <p class="font-bold">Found a bug?</p>
            <button class="bg-green-300 p-2 rounded mx-auto">Report</button>
          </div>
        </aside>
        <div class="h-full">
          <div class="grid grid-cols-4 gap-2">
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />            
          </div>
         <main class="grid grid-cols-2">
          <div class="">
            <p class="h-32 border border-solid"> this is the graph holder</p>
            <div class="grid grid-cols-2 mt-4">
              <div>
                transactions
              </div>
              <div>
                planning
              </div>
            </div>
          </div>
          <div>
            this is the announcements holder
          </div>

          </main>
      </div>
      </div>
      </div>
  </template>
  
  <script>
  import MyCard from './MyCard.vue';
  export default {
    name: 'DashBoard',
    components: { MyCard }
}
  </script>
  