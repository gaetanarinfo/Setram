<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 7vh;color: rgb(167, 22, 128);font-weight: 900;">
        404<br />Page non trouvée
      </div>

      <div class="text-h2 q-mt-lg" style="color: #a71680; font-size: 4vh;line-height: 35px;">
        Oups, cette page n'existe plus. Nous vous prions de nous excuser pour la gêne occasionnée.
      </div>

      <q-btn class="q-mt-xl" color="purple" glossy text-color="white" unelevated to="/"
        label="Cliquer ici pour retourner en arrière" no-caps />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
