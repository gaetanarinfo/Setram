<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <q-layout view="lHh Lpr lFf" class="shadow-2">
    <q-header elevated class="bg-purple">
      <q-toolbar class="glossy">
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-space></q-space>

        <q-btn flat round dense icon="search" class="q-mr-xs" @click="search" color="white" />

      </q-toolbar>

    </q-header>

    <q-dialog v-model="searchData" full-width>

      <q-card style="width: 700px; max-width: 80vw;">

        <q-card-section>
          <div class="text-h6">{{ searchDataHtmlTitle }}</div>
        </q-card-section>

        <div class="grid_card_actu grid_card_actu_re">

          <q-card class="card_actu" flat bordered v-for="actu in searchDataHtml" v-bind:key="actu.id">

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

        <q-card-actions align="right" class="bg-white">
          <q-btn flat glossy class="text-white bg-teal" label="Fermer" v-close-popup />
          <q-btn flat glossy class="text-white bg-blue" label="Nouvelle recherche" v-close-popup @click="search" />
        </q-card-actions>

      </q-card>

    </q-dialog>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>

      <q-list>
        <q-item-label header>
          MENU
        </q-item-label>

        <q-item clickable tag="a" to="/">

          <q-item-section avatar>
            <q-icon name="fa-solid fa-house-chimney" color="blue" />
          </q-item-section>

          <q-item-section>
            <q-item-label color="dark"><b>Accueil</b></q-item-label>
          </q-item-section>
        </q-item>

        <menuLink class="text-weight-medium text-medium" v-for="link in menuLink" :key="link.title" v-bind="link" />

        <q-item clickable tag="a" target="_blank" href="https://www.setram.fr/982-Mes-services.html">

          <q-item-section avatar>
            <q-icon name="fa-solid fa-user-tie" color="brown" />
          </q-item-section>

          <q-item-section>
            <q-item-label><b>Espace perso</b></q-item-label>
          </q-item-section>
        </q-item>

        <q-item>
          <q-img src="https://www.setram.fr/assets/img/logo.png" />
        </q-item>

        <q-item tag="a" class="flex flex-center" target="_blank"
          href="https://www.paypal.com/donate/?hosted_button_id=QAG9CSP3BQ9NU">
          <q-img style="max-width: 80px;width: 80px;height: auto;"
            src="https://cdn.website-start.de/proxy/apps/aek2oo/uploads/paypal/instances/025F389D-BBB8-438F-8007-AF75DAC7005C/wcinstances/paypalShop/b79fc944-082b-40c3-843e-9b3c4166bed4/productImage/logo-paypal-1.jpg?download" />
        </q-item>

        <q-item class="q-pa-none q-mt-md q-ma-none text-center q-mb-sm"
          style="display: block;min-height: auto;font-weight: 700">
          Version {{ replaceGuillemet(params.appVersion) }} - <span style="text-transform:capitalize;">{{
              platform.platform
          }}</span>
        </q-item>

      </q-list>

    </q-drawer>

    <q-page-sticky position="bottom-right" style="z-index: 1;" :offset="[18, 18]">

      <q-fab icon="add" size="sm" direction="up" color="purple" glossy push>

        <q-fab-action @click="loadUrl('https://www.setram.fr/982-Mes-services.html')" color="red" external-label
          label-position="left" label="Je reçois l'alerte SMS" icon="phonelink_ring" glossy push />

        <!--<q-fab-action external-label label-position="left" @click="question = true" label="Vous avez une question ?"
          color="blue" icon="contact_support" glossy push />-->

        <q-fab-action external-label label-position="left" @click="changeTheme()"
          :label="($q.dark.isActive) ? 'Mode clair' : 'Mode sombre'" color="green" icon="dark_mode" glossy push />

          <q-fab-action external-label label-position="left" to="abonnements"
          label="Boutique en ligne" color="purple" icon="shopping_bag" glossy push />

      </q-fab>

    </q-page-sticky>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

  <!-- Modal Question -->
  <q-dialog v-model="question" transition-show="flip-down" transition-hide="flip-up">

    <q-card style="width: 100%;max-height: 400px;">

      <q-card-section style="display: flex;align-items: center;">
        <q-avatar icon="contact_support" text-color="purple" />
        <div class="text-h6">Rappel gratuit</div>
      </q-card-section>

      <q-card-section class="q-pt-none q-pb-none">

        <form class="q-form">

          <div class="q-mb-md">
            <input type="text" class="form-control" placeholder="Saisissez votre nom *" maxlength="255">
          </div>

          <div class="q-mb-md">
            <input type="text" name="phone" class="form-control" placeholder="Saisissez votre téléphone *"
              maxlength="255">
          </div>

          <div class="q-mb-md">
            <textarea name="message" class="form-control"
              placeholder="Saisissez votre demande * (3000 caractères maximum)" cols="50" rows="4"
              maxlength="3000"></textarea>
          </div>

        </form>

      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal" style="padding: 0 16px 16px 16px;">

        <q-btn flat glossy push class="bg-blue-4" color="white" style="height: 35px">
          <q-avatar size="xs" style="top: -3.5px;" icon="send"></q-avatar>
          <q-item style="display: flex;align-items: center;padding-left: 5px;padding-top: 0;padding-right: 5px;">
            Demander un rappel</q-item>
        </q-btn>

        <q-btn flat glossy push class="bg-orange-4" color="white" label="Fermer" v-close-popup />

      </q-card-actions>

    </q-card>

  </q-dialog>

</template>

<script>
import { defineComponent, ref } from 'vue'
import menuLink from 'src/components/Menu.vue'
import { useQuasar } from 'quasar'
import axios from 'axios'

const linksList = [
  {
    title: 'Se déplacer',
    titlesub: 'Itinéraires',
    titlesub2: 'Horaire',
    titlesub3: 'Plans',
    titlesub4: 'Les services spéciaux',
    titlesub5: 'Le Bus Relais',
    titlesub6: 'Le vélo',
    titlesub7: 'Comment voyager',
    titlesub8: 'Votre fiche horaire téléchargeable',
    titlesub9: 'Prochains passages',
    titlesub10: 'Timéo, l\'info trafic en temps réel',
    titlesub11: '',
    icon: 'fa-solid fa-bus',
    colorIcon: 'cyan',
    link: '',
    linksub: 'https://www.setram.fr/affichage.php?id=1341',
    linksub2: 'https://www.setram.fr/940-Horaires.html',
    linksub3: 'https://www.setram.fr/943-Plans.html',
    linksub4: 'https://www.setram.fr/948-Les-services-speciaux.html',
    linksub5: 'https://www.setram.fr/1001-Le-Bus-Relais.html',
    linksub6: 'https://www.setram.fr/945-Le-velo.html ',
    linksub7: 'https://www.setram.fr/944-Comment-voyager.html',
    linksub8: '/fiche-horaire-telechargeable',
    spedial8: true,
    linksub9: 'https://www.setram.fr/affichage.php?id=1345',
    linksub10: 'https://www.setram.fr/698-Timeo2C-l-info-trafic-en-temps-reel.html',
    linksub11: '',
  },
  {
    title: 'Titres et tarifs',
    icon: 'fa-solid fa-euro-sign',
    colorIcon: 'purple',
    link: 'https://github.com/quasarframework',
    titlesub: 'Tous les titres',
    titlesub2: 'Avantages et réductions',
    titlesub3: 'Points de vente',
    titlesub4: 'Setram ticket',
    titlesub5: 'Le Mans City Pass',
    titlesub6: '',
    titlesub7: '',
    titlesub8: '',
    titlesub9: '',
    titlesub10: '',
    titlesub11: '',
    linksub: 'https://www.setram.fr/1007-Tous-les-titres.html',
    linksub2: 'https://www.setram.fr/975-Avantages-et-reductions.html',
    linksub3: 'https://www.setram.fr/980-Points-de-vente.html',
    linksub4: 'https://www.setram.fr/1239-Setram-ticket.html',
    linksub5: 'https://www.setram.fr/1309-Le-Mans-City-Pass.html',
    linksub6: '',
    linksub7: '',
    linksub8: '',
    linksub9: '',
    linksub10: '',
    linksub11: '',
  },
  {
    title: 'Boutique en ligne',
    colorIcon: 'amber',
    icon: 'fa-solid fa-shop',
    link: 'https://chat.quasar.dev',
    titlesub: 'Les abonnements',
    titlesub2: 'Le Pass Liberté',
    titlesub3: 'Paiement des PV',
    titlesub4: '',
    titlesub5: '',
    titlesub6: '',
    titlesub7: '',
    titlesub8: '',
    titlesub9: '',
    titlesub10: '',
    titlesub11: '',
    linksub: '#/abonnements',
    linksub2: 'https://www.setram.fr/969-Le-Pass-Liberte.html',
    linksub3: 'https://www.setram.fr/997-Paiement-des-PV.html',
    linksub4: '',
    linksub5: '',
    linksub6: '',
    linksub7: '',
    linksub8: '',
    linksub9: '',
    linksub10: '',
    linksub11: '',
  },
  {
    title: 'La Setram et moi',
    colorIcon: 'deep-orange',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
    titlesub: 'Rejoignez-nous',
    titlesub2: 'Je réponds aux enquêtes',
    titlesub3: 'Objets trouvés',
    titlesub4: 'Nous contacter',
    titlesub5: 'Foire aux questions',
    titlesub6: 'Nouveaux arrivants',
    titlesub7: 'Mobilité Entreprises',
    titlesub8: 'Accessibilité',
    titlesub9: 'Gérer mon abonnement',
    titlesub10: 'Prendre rendez-vous à l\'Espace Mobilité',
    titlesub11: 'La Setram à votre rencontre',
    linksub: 'https://www.setram.fr/849-Rejoignez-nous.html',
    linksub2: 'https://www.setram.fr/794-Je-reponds-aux-enquetes.html',
    linksub3: 'https://www.setram.fr/962-Objets-trouves.html',
    linksub4: '#/contact',
    linksub5: 'https://www.setram.fr/1279-Foire-aux-questions.html',
    linksub6: 'https://www.setram.fr/1229-Nouveaux-arrivants.html',
    linksub7: 'https://www.setram.fr/1225-Mobilite-Entreprises.html',
    linksub8: 'https://www.setram.fr/1227-Accessibilite.html',
    linksub9: 'https://www.setram.fr/1247-Gerer-mon-abonnement.html',
    linksub10: 'https://www.setram.fr/1291-Prendre-rendez-vous-a-l-Espace-Mobilite.html',
    linksub11: 'https://www.setram.fr/1331-La-Setram-a-votre-rencontre.html',
  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    menuLink
  },
  methods: {
  },
  setup() {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()
    const searchData = ref(false);
    const searchDataHtml = ref('');
    const searchDataHtmlTitle = ref('');

    return {
      question: ref(false),
      loadUrl(url) {
        document.location.href = url
      },
      fab: ref(true),
      changeTheme() {
        if ($q.dark.isActive == false) {
          $q.dark.set(false)
          $q.dark.toggle()
        } else {
          $q.dark.set(true)
          $q.dark.toggle()
        }
      },
      replaceGuillemet(value) {
        return value.replaceAll('"', '');
      },
      params: {
        appVersion: '1.0.12',
      },
      platform: $q.platform.is,
      searchDataHtml: searchDataHtml,
      searchDataHtmlTitle: searchDataHtmlTitle,
      menuLink: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      searchData: searchData,
      search() {

        var search = '';

        $q.dialog({
          title: 'Votre recherche',
          message: 'Votre recherche (Minimum 3 caractères)',
          prompt: {
            model: '',
            isValid: val => val.length > 2, // << here is the magic
            type: 'text' // optional
          },
          cancel: true,
          persistent: true
        }).onOk(async data => {

          search = data;

          axios
            .get('/search/' + search)
            .then(res => {

              if (res.status == 200) {

                searchDataHtmlTitle.value = 'Votre recherche ' + search
                searchDataHtml.value = res.data.actualites;
                searchData.value = true;

              } else {

              }
            })

        })
      }
    }
  },
  computed: {
  },
  mounted() {
  }
})
</script>
