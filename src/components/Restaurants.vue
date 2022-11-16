<template>
  <div class="q-pa-md q-mb-sm card-mobile card-mobile-re">

    <div class="q-mb-md row items-start q-gutter-md">

      <q-item class="w-100 q-pa-none w-100">
        <h4 class="q-pa-none q-ma-none text-bold text_uppercase">Le Top des Internautes</h4>
      </q-item>

      <hr class="q-mt-md q-mb-md hr">

      <div class="q-mt-lg restaurants">

        <q-card>

          <q-tabs v-model="tab" class="text-red">
            <q-tab label="Resto" name="Resto" />
            <q-tab label="Bar" name="Bar" />
            <q-tab label="Ciné" name="Ciné" />
          </q-tabs>

          <q-separator />

          <q-tab-panels v-model="tab" animated>

            <q-tab-panel name="Resto">
              <div v-html="restaurantsList" class="elmt-liste-ligne top num bloc-cadre block-content-onglet"></div>
            </q-tab-panel>

            <q-tab-panel name="Bar">
              <div v-html="restaurantsList2" class="elmt-liste-ligne top num bloc-cadre block-content-onglet"></div>
            </q-tab-panel>

            <q-tab-panel name="Ciné">
              <div v-html="restaurantsList3" class="elmt-liste-ligne top num bloc-cadre block-content-onglet"></div>
            </q-tab-panel>

          </q-tab-panels>

        </q-card>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'
import { ref } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'PageRestaurants',
  data() {
    return {
      restaurantsList: '',
      restaurantsList2: '',
      restaurantsList3: '',
    }
  },
  setup() {
    return {
      tab: ref('Resto')
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {

    axios
      .get('/restaurants/1')
      .then(res => {

        if (res.status == 200) {
          this.restaurantsList = res.data.restaurants
        }

      })

    axios
      .get('/restaurants/2')
      .then(res => {

        if (res.status == 200) {
          this.restaurantsList2 = res.data.restaurants
        }

      })

    axios
      .get('/restaurants/3')
      .then(res => {

        if (res.status == 200) {
          this.restaurantsList3 = res.data.restaurants

          if (this.restaurantsList3 == '\n\t\t\t<div id=\"topDesInternautesCineUne\" class=\"clearfix\">\n\t\n</div>\n\t\t') {
            this.restaurantsList3 = ''
          }
        }

      })

  }
})
</script>
