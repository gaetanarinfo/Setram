<template>
  <div class="q-pa-md q-mb-sm card-mobile card-mobile-re">

    <div class="q-mb-md row items-start q-gutter-md">

      <q-item class="w-100 q-pa-none w-100">
        <h4 class="q-pa-none q-ma-none text-bold text_uppercase">Les bons plans de Le Mans</h4>
      </q-item>

      <hr class="q-mt-md q-mb-md hr">

      <div class="plan q-mt-lg">

        <a :href="plan.url" target="_blank" v-for="plan in plansList" v-bind:key="plan.id">

          <q-card class="q-mb-xl" v-if="plan.title">

            <q-badge color="red" glossy floating :label="plan.etiquette" />

            <q-card-section>
              <div class="text-h6 q-mb-xs title">{{ plan.title }}</div>
              <div class="row no-wrap items-center" style="gap: 10px;" v-html="plan.promo">
              </div>
            </q-card-section>

            <img :src="plan.image">

          </q-card>

        </a>

      </div>

    </div>

  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'BonPlans',
  data() {
    return {
      plansList: []
    }
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

    axios
      .get('/plans')
      .then(res => {

        if (res.status == 200) {
          this.plansList = res.data.plans;
        }

      })


  }
})
</script>
