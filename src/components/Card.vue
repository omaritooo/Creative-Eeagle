<template>
  <div class="w-full text-left text-hex-063847 bg-white h-auto shadow-current">
    <div class="max-w-md rounded-lg overflow-hidden shadow-lg">
      <div class="h-34 overflow-hidden">
        <img class="w-full" :src="banner" :alt="img_alt" :title="img_title" />
      </div>
      <div class="py-4">
        <div class="px-6">
          <div
            class="
              py-2
              text-xs
              w-max
              my-2
              text-left
              px-3
              bg-hex-00516C
              text-white
              rounded-lg
              font-medium
            "
          > 
          <!-- vue_moment package filtering and calculating the time left after fetching the deadline from the endpoint -->
            {{ someDate | moment("from", true) }} left
          </div>
        </div>

        <div class="font-bold text-lg mb-2 px-6">{{ title }}</div>
        <div class="space-x-3 flex my-1 px-6">
          <span class="text-lg text-hex-67AE3D font-bold"
            >
            <!-- Calculating the percentage of goal that has been met by dividing the variables passed from the endpoint and setting it to 0 decimal point -->
            {{
              ((current_investment / investment_goal) * 100).toFixed(0)
            }}%</span
          >
          <div class="text-lg font-medium text-hex-00516C">
            <!-- utilizing JS built-in functions to turn amount of money left till goal into deutsch format -->
            {{ (investment_goal - current_investment).toLocaleString("de-DE") }}
            € left to fund
          </div>
        </div>
        <p class="text-gray-700 text-base px-6 text-md">
          {{ teaser }}
        </p>
        <hr class="my-2" />
        <div class="w-full flex justify-around py-2">
          <div class="text-center align-middle p-2 w-full p-2">
            <div class="font-bold">{{ investor_count }}</div>
            <div>Investors</div>
          </div>

          <div
            class="
              text-center
              align-middle
              p-2
              w-full
              p-2
              border-l border-gray-200
            "
          >
            <div class="font-bold">
              {{ investment_goal.toLocaleString("de-DE") }} €
            </div>
            <div>Funding Round</div>
          </div>
        </div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          class="
            inline-block
            bg-hex-F4F7F8
            rounded-xl
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >{{ status }}</span
        >
        <span
          class="
            inline-block
            bg-hex-F4F7F8
            rounded-xl
            px-3
            py-1
            text-sm
            font-semibold
            text-gray-700
            mr-2
            mb-2
          "
          >{{ type }}</span
        >

        <div class="w-full text-center p-4 bg-hex-063847 text-white rounded-lg">
          Learn More
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Props used to receive data from the end point
  props: {
    banner: String,
    status: String,
    type: String,
    current_investment: Number,
    investment_goal: Number,
    teaser: String,
    title: String,
    someDate: String,
    img_alt: String,
    img_title: String,
    investor_count: Number,
  },
  filter: {},
  methods: {},
};
</script>

<style></style>
