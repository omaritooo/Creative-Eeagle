<template>
  <div class="bg-transparent p-2">
    <nav class="flex flex-col sm:flex-row">
        <!-- Tabs set up in a navbar with windicss' focus property to make that once you click one the rest go out of focus.-->
      <button
        class="
          text-hex-718E97
          py-4
          px-6
          block
          hover:(text-hex-063847 border-hex-063847)
          focus:(outline-none text-hex-063847 border-b-2 font-medium border-hex-063847)
        "
      >
        All</button
      ><button
        class="
          text-hex-718E97
          py-4
          px-6
          block
          hover:(text-hex-063847 border-hex-063847)
          focus:(outline-none text-hex-063847 border-b-2 font-medium border-hex-063847)
        "
      >
        Active</button
      ><button
        class="
         text-hex-718E97
          py-4
          px-6
          block
          hover:(text-hex-063847 border-hex-063847)
          focus:(outline-none text-hex-063847 border-b-2 font-medium border-hex-063847)
        "
      >
        Coming Soon</button
      >
    </nav>
    <hr>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
