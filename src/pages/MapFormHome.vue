<template>

  <q-page id="loader" class="flex flex-center w-100">

    <q-circular-progress indeterminate rounded size="50px" color="purple" class="q-ma-md" />

  </q-page>

  <div id="iframe">

  </div>

</template>

<script>

import { defineComponent } from 'vue'
import $ from 'jquery'

export default defineComponent({
  name: 'MapFormHome',
  data() {
    return {
    }
  },
  setup() {
    return {

    }
  },
  mounted() {
    setTimeout(() => {
      $('#loader').fadeOut()
      $('#iframe').html('<iframe id="iframeNo" src="https://pnp-ihm-lemans-prod.canaltp.fr/fr/full/journey/result/?search%5Bfrom%5D%5Bautocomplete-hidden%5D=stop_area&search%5Bto%5D%5Bautocomplete-hidden%5D=stop_area&search%5Bdatetime_represents%5D=departure&search%5Bdatetime%5D%5Bdate%5D=" style="width: 100%; border: 0; overflow: hidden; min-height:850px;" scrolling="no"></iframe>')
    }, 1200);
  }
})

</script>
