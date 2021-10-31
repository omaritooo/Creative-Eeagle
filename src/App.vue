<template>
  <div id="app" class="flex w-full bg-gray-100">
    <!-- Components laid out in a flexbox (Row by default) -->
    <Side />
    <div class="flex flex-col mx-auto">
      <!-- Navbar, tabs and cards all laid out vertically while the parent div is in a flex box row with the rest of the page to provide ease of access and editing -->
      <Nav :ray="info"/>
      <Tabs class="mx-4 rounded-b-md " />
      <div class="flex w-full space-x-5 p-4">
        <!-- For loop to pass Props fetched from the endpoint into the card component which in then returns as many cards as there are in the array containing the data response -->
        <div
          v-for="inf in info"
          :key="inf.index"
          class="  "
        >
          <Card
            :investment_goal="inf.investment_goal"
            :current_investment="inf.current_investment"
            :someDate="inf.round_end"
            :img_alt="inf.banner_alt"
            :img_title="inf.banner_title"
            :banner="inf.banner"
            :type="inf.type"
            :status="inf.status"
            :teaser="inf.teaser"
            :title="inf.title"
            :investor_count="inf.investor_count"
          />
        </div>
      </div>
    </div>

   
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import axios from "axios";
import Side from "./components/Sidemenu.vue";
import Tabs from "./components/Tabs.vue";
import Nav from "./components/Nav.vue"
export default {
  name: "App",
  components: {
    Card,
    Side,
    Tabs,
    Nav
  },
  Props: {},
  data() {
    return {
      info: {},
    };
  },
  mounted() {
    // HTTP get request to fetch data from the API (in mounted so that it launches as soon as the page renders to avoid delays and lifecycle issues)
    axios
      .get("https://prime-crowd.com/api/mock/rounds")
      .then((response) => (this.info = response.data));
      console.log(Object.getOwnPropertySymbols(this.info))
  },
  methods: {},
};
</script>

<style>
/* Styling and adding new fonts similar to the one used in the wireframe */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
</style>
