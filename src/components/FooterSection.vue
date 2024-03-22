<template>
    <footer class="w-5/6 shadow-xl bg-green-950 mx-auto rounded-md py-8">
        <div class="bg-white w-4/5 rounded-md mx-auto flex flex-col items-center">
            <h1 class="text-2xl text-center font-bold py-4">Join the Jijenge Community Today</h1>
            <p class="text-center "><em>Discover the power of collective growth and financial empowerment</em></p>
            <router-link to="/login" class="bg-yellow-500 rounded-2xl px-4 py-2 my-4">Register</router-link>
        </div>
        <div class="flex w-11/12 mx-auto mt-8">
            <p class="text-white text-2xl font-extrabold">JiJenge Youth Group</p>
            <section class="footer-s w-4/5 md:flex justify-evenly mx-auto text-white">
                <div>
                    <h2 class="font-bold">Services</h2>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <h2 class="font-bold">Resources</h2>
                    <p>Terms of Service</p>
                </div>
                <div>
                    <h2 class="font-bold">How It works</h2>
                    <p>FAQ</p>
                </div>
                <div>
                    <h2 class="font-bold">Contact Us</h2>
                    <p>mordecaimuvandi16@gmail.com</p>
                    <p>+254798548329</p>
                    <span class="flex w-full justify-between">
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-instagram-square"></i>
                        <i class="fab fa-linkedin"></i>
                    </span>
                </div>
            </section>
        </div>
    </footer>
</template>
<style>
    @media (max-width: 640px) {
        .footer-s {
        display: block;
    }
}
</style>