<template>
  <router-view v-if="show === true" />
</template>

<script>
import { defineComponent } from 'vue'
import { QSpinnerTail } from 'quasar';

export default defineComponent({
  name: 'App',
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showLoading() {
      this.$q.loading.show({
        spinner: QSpinnerTail,
        spinnerColor: 'white',
        spinnerSize: 100,
        backgroundColor: 'purple',
        message: 'Chargement en cours. Merci de patienter...',
        messageColor: 'black',
        customClass: 'loading'
      });

      // hiding in 2s
      setTimeout(() => {
        this.$q.loading.hide();
        this.show = true;
      }, 2000);
    },
  },
  beforeUnmount() {
    setTimeout(() => {
      this.$q.loading.hide();
    }, 2000);
  },
  computed: {
  },
  mounted() {

    this.showLoading();

  },
})
</script>
