<template>

  <q-item clickable tag="a">

    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" :color="colorIcon" />
    </q-item-section>

    <q-menu>

      <q-list dense style="min-width: 299px">

        <q-item clickable tag="a" :href="linksub" v-if="titlesub !== ''">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub2 !== ''" />

        <q-item clickable v-if="titlesub2 !== ''" tag="a" :href="linksub2">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub2 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub3 !== ''" />

        <q-item clickable v-if="titlesub3 !== ''" tag="a" :href="linksub3">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub3 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub4 !== ''" />

        <q-item clickable v-if="titlesub4 !== ''" tag="a" :href="linksub4">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub4 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub5 !== ''" />

        <q-item clickable tag="a" v-if="titlesub5 !== ''" :href="linksub5">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub5 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub6 !== ''" />

        <q-item clickable tag="a" v-if="titlesub6 !== ''" :href="linksub6">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub6 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub7 !== ''" />

        <q-item clickable tag="a" v-if="titlesub7 !== ''" :href="linksub7">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub7 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub8 !== ''" />

        <q-item clickable tag="a" v-if="titlesub8 !== '' && !spedial8" :href="linksub8">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub8 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" v-if="titlesub8 !== '' && spedial8" :to="linksub8">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub8 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub9 !== ''" />

        <q-item clickable tag="a" v-if="titlesub9 !== ''" :href="linksub9">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub9 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub10 !== ''" />

        <q-item clickable tag="a" v-if="titlesub10 !== ''" :href="linksub10">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub10 }}</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-separator v-if="titlesub11 !== ''" />

        <q-item clickable tag="a" v-if="titlesub11 !== ''" :href="linksub11">
          <q-item-section class="q-pr-none" side>
            <q-icon name="keyboard_arrow_right" />
          </q-item-section>
          <q-item-section>
            <q-item-label><b>{{ titlesub11 }}</b></q-item-label>
          </q-item-section>
        </q-item>

      </q-list>

    </q-menu>

    <q-item-section>
      <q-item-label><b>{{ title }}</b></q-item-label>
    </q-item-section>
  </q-item>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuLinks',
  props: {
    title: {
      type: String,
      required: true
    },

    colorIcon: {
      type: String,
      required: true
    },

    titlesub: {
      type: String,
      required: true
    },

    titlesub2: {
      type: String,
      required: true
    },

    spedial8: {
      type: Boolean,
      required: false
    },

    titlesub3: {
      type: String,
      required: true
    },

    titlesub4: {
      type: String,
      required: true
    },

    titlesub5: {
      type: String,
      required: true
    },

    titlesub6: {
      type: String,
      required: true
    },

    titlesub7: {
      type: String,
      required: true,
    },

    titlesub8: {
      type: String,
      required: true,
    },

    titlesub9: {
      type: String,
      required: true,
    },

    titlesub10: {
      type: String,
      required: true,
    },

    titlesub11: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: '#'
    },

    linksub: {
      type: String,
      default: '#'
    },

    linksub2: {
      type: String,
      default: '#'
    },

    linksub3: {
      type: String,
      default: '#'
    },

    linksub4: {
      type: String,
      default: '#'
    },

    linksub5: {
      type: String,
      default: '#'
    },

    linksub6: {
      type: String,
      default: '#'
    },

    linksub7: {
      type: String,
      default: '#'
    },

    linksub8: {
      type: String,
      default: '#'
    },

    linksub9: {
      type: String,
      default: '#'
    },

    linksub10: {
      type: String,
      default: '#'
    },

    linksub11: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
