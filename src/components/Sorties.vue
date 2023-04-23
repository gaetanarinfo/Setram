<template>

  <q-item class="w-100 q-pa-md q-mb-none" style="padding: 0 16px;display: block;">
    <h4 class="q-pa-none q-ma-none text-bold text_uppercase">Idées sorties</h4>
    <hr class="q-mb-md hr">
  </q-item>

  <div class="q-pa-md q-mt-none q-mb-sm card-mobile">

    <q-card flat bordered class="my-card q-mb-md" v-for="sortie in sorties" v-bind:key="sortie.id">

      <a :href="sortie.url" class="sortie_url">

        <q-card-section>
          <div class="text-h6 sortie_type">{{ sortie.type }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none sortie_title">
          {{ sortie.title }}
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          {{ sortie.text }}
        </q-card-section>

      </a>

    </q-card>

  </div>

  <div class="q-gutter-sm q-mt-none q-mb-xl text-center">
    <q-btn color="orange" target="_blank" glossy push href="https://lemans.maville.com/sortir/agenda_accueil.php"
      tag="a" icon="fa-solid fa-plus" label="Toutes les idées sorties" />
  </div>

</template>

<script>

import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'ideesSorties',
  data() {
    return {
      sorties: []
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
      .get('/sorties')
      .then(res => {

        if (res.status == 200) {
          this.sorties = res.data.sorties;
        }

      })

  }
})

</script>
