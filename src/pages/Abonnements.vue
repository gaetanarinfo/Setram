<template>

  <q-page class="flex justify-center">

    <div class="q-pa-md q-mt-sm">

      <div class="q-mb-xl text-center">

        <h1 class="text-h1 text-bold text-center line-none q-ma-none q-mb-lg">Les abonnements
        </h1>

        <div class="bg-purple q-pa-md text-white" style="font-weight: 600;">

          <p class="q-mt-md text-h6">Créez votre abonnement en ligne et recevez votre carte à domicile !</p>

          <p>Le traitement de votre dossier pour une création de carte est de 10 jours ouvrés à compter de la validation
            de la demande.</p>

          <p class="text-h6">5 € de frais de dossier sont facturés pour chaque transaction.</p>

          <p style="text-decoration:underline;">Si vous possédez déjà une carte d'abonnement, tout renouvellement en
            ligne est impossible.</p>

        </div>

      </div>

      <div id="resizecontenu">

        <table class="table table-striped">
          <thead>
            <tr>
              <th style="text-align:center; color: white" scope="col">Titre<br></th>
              <th style="text-align:center; color: white" scope="col">Abonnement illico<br>par prélèvement mensuel</th>
              <th style="text-align:center; color: white" scope="col">Abonnement 365 jours<br></th>
              <th style="text-align:center; color: white" scope="col">Abonnement 30 jours<br></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align:center" data-title="Titre"><strong>11-25 ans <abbr title="Plus de 11 ans et toujours en CM2 ? Bénéficiez du tarif 5-10 ans (gratuit) en vous présentant à l’espace mobilité avec un certificat de scolarité de l’année en cours.
">*</abbr></strong></td>
              <td data-title="Abonnement illicopar prélèvement mensuel">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=25&amp;reglement=2"
                  class="btn btn-block btn-large btn-primary">16.80 €</a>
              </td>
              <td data-title="Abonnement 365 jours">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=25&amp;reglement=1"
                  class="btn btn-block btn-large btn-primary">201.60 €</a>
              </td>
              <td data-title="Abonnement 30 jours">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=25&amp;reglement=3"
                  class="btn btn-block btn-large btn-primary">19.30 €</a>
              </td>
            </tr>
            <tr>
              <td style="text-align:center" data-title="Titre"><strong>26-64 ans</strong></td>
              <td data-title="Abonnement illicopar prélèvement mensuel">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=27&amp;reglement=2"
                  class="btn btn-block btn-large btn-primary">35.85 €</a>
              </td>
              <td data-title="Abonnement 365 jours">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=27&amp;reglement=1"
                  class="btn btn-block btn-large btn-primary">430.00 €</a>
              </td>
              <td data-title="Abonnement 30 jours">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=27&amp;reglement=3"
                  class="btn btn-block btn-large btn-primary">39.80 €</a>
              </td>
            </tr>
            <tr>
              <td style="text-align:center" data-title="Titre"><strong>+65 ans<br><small>ou retraité</small></strong>
              </td>
              <td data-title="Abonnement illicopar prélèvement mensuel">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=29&amp;reglement=2"
                  class="btn btn-block btn-large btn-primary">21.65 €</a>
              </td>
              <td data-title="Abonnement 365 jours">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=29&amp;reglement=1"
                  class="btn btn-block btn-large btn-primary">259.80 €</a>
              </td>
              <td data-title="Abonnement 30 jours">
                <a href="https://www.setram.fr/affichage.php?id=926&amp;etape=1&amp;titre=29&amp;reglement=3"
                  class="btn btn-block btn-large btn-primary">26.10 €</a>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

      <div class="bg-grey-5 q-pa-md q-mb-lg text-black" style="font-weight: 600;">

        <p class="q-mt-md text-h6"><strong>* Plus de 11 ans et toujours en CM2 ?</strong></p>

        <p>Bénéficiez du tarif 5-10 ans (gratuit) en vous présentant à l’espace mobilité avec un certificat de scolarité
          de l’année en cours.</p>

      </div>

    </div>

  </q-page>

  <!-- Footer -->
  <footerModule />

</template>

<script>
import { defineComponent } from 'vue'
import footerModule from 'src/components/Footer.vue'

const columns = [
  { name: 'title', align: 'center', label: 'Titre' },
  { name: 'abo1', align: 'center', label: 'Abonnement illico par prélèvement mensuel' },
  { name: 'abo2', align: 'center', label: 'Abonnement 365 jours' },
  { name: 'abo3', align: 'center', label: 'Abonnement 30 jours' }
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
  },
]

export default defineComponent({
  name: 'ContactPage',
  components: {
    footerModule,
  },
  setup() {
    return {
      columns,
      rows
    }
  }
})

</script>
