<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<nav class="bg-transparent text-hex-063847">
    <div class="flex justify-between px-10 mt-2">
        <!-- receiving the length of the object received in App.vue to determine the amount of available investments via the amount of objects available -->
        <h2 class="text-2xl font-normal" v-if="Ray.length">Investment Opportunities ({{Ray.length}})</h2>
        <div class="flex justify-around space-x-6">
<div class="px-4 bg-gray-200 flex space-x-2">
                          <img class="h-8 w-8 rounded-full my-auto" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
        <div class="py-2">Thomas Miller</div>
</div>

            <svg class="h-8 w-8 text-hex-00516C" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"  aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                      
<div class="background-circle circle h-8 w-8"></div>

        </div>
    </div>
</nav>

</template>


<script>
export default {
    props:
    {
        Ray: Array
    }
}
</script>

<style>

/* rounding up the image of the great britian flag via css for maximum precision as opposed to rounded-full in windicss which doesn't always deliever a desirable outcome */


.circle {
    border: 1px solid black;
    border-radius: 50%;
    display: inline-block;
}
.circle img {
    border-radius: 50%;
    display: block;
}



.background-circle {
    background-image: url( '../assets/Flag_of_the_United_Kingdom.svg' );
    
}
</style>