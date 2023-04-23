<template>

  <q-page class="flex flex-center home-height">

    <!-- Slider -->
    <sliderHome />

    <!-- Card Home -->
    <cardHome />

    <!-- Actualites -->
    <lastActus />

    <!-- Bon plans -->
    <bonPlans />

    <!-- Idées sorties -->
    <restaurants />

    <!-- Idées sorties -->
    <ideesSorties />

    <!-- Footer -->
    <footerModule />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import footerModule from 'src/components/Footer.vue'
import sliderHome from 'src/components/Slider.vue'
import lastActus from 'src/components/LastActus.vue'
import bonPlans from 'src/components/Plans.vue'
import cardHome from 'src/components/CardHome.vue'
import ideesSorties from 'src/components/Sorties.vue'
import restaurants from 'src/components/Restaurants.vue'

export default defineComponent({
  name: 'IndexPage',
  components: {
    footerModule,
    sliderHome,
    lastActus,
    cardHome,
    ideesSorties,
    bonPlans,
    restaurants
  },
  setup() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  }
})
</script>
