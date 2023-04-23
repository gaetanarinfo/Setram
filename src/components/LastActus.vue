<template>

  <div class="q-pa-md q-mb-sm card-mobile card-mobile-re">

    <div class="q-mb-md row items-start q-gutter-md">

      <q-item class="w-100 q-pa-none w-100">
        <h4 class="q-pa-none q-ma-none text-bold text_uppercase">Derniers articles</h4>
      </q-item>

      <hr class="q-mt-none q-mb-md hr">

      <div class="grid_card_actu">

        <q-card class="card_actu" flat bordered v-for="actu in actualitesList" v-bind:key="actu.id">

          <q-card-section horizontal>

            <q-card-section class="q-pt-xs">
              <div class="text-h5 q-mt-sm q-mb-xs" style="font-size: 13px;line-height: 20px;font-weight: 700;">{{
                  actu.title
              }}</div>
              <div class="text-caption text-grey">
                {{ actu.miniContent }}
              </div>
            </q-card-section>

            <q-card-section class="col-5 flex flex-center">
              <q-img class="rounded-borders" :src="actu.image" />
            </q-card-section>

          </q-card-section>

          <q-card-section class="texte_date_card">
            {{ actu.date }}
          </q-card-section>

          <q-separator />

          <q-card-actions style="margin: 5px 10px;display: flex;justify-content: flex-end;">

            <a :href="actu.url" target="_blank" glossy flat
              class="bg-purple q-btn q-btn-item non-selectable no-outline q-btn--flat q-btn--rectangle text-white q-btn--actionable q-focusable q-hoverable glossy bg-purple q-btn__content text-center col items-center q-anchor--skip justify-center row"
              text-color="white">
              Lire la suite
            </a>

          </q-card-actions>

        </q-card>

      </div>

    </div>

  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'LastActus',
  data() {
    return {
      actualitesList: []
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
      .get('/actualites/')
      .then(res => {

        if (res.status == 200) {
          this.actualitesList = res.data.actualites;
        }

      })


  }
})
</script>
