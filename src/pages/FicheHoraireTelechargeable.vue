<template>

  <q-page class="flex justify-center">

    <div class="q-pa-md q-mt-sm">

      <div class="q-mb-xl text-center">
        <h1 class="text-h1 text-bold text-center line-none q-ma-none">Votre fiche horaire téléchargeable</h1>
      </div>

      <div style="display: flex;flex-flow: row wrap;gap: 16px;justify-content: center;">

        <div>
          <div class="q-mt-md">
            <h2 class="text-h2 text-bold text-center line-none q-ma-none mcetoc">Consultez et téléchargez la fiche
              horaire
              de
              votre
              arrêt</h2>
          </div>

          <div class="q-mb-lg">
            <ol id="#fiche">
              <li class="text-h6">Sélectionnez la date à laquelle vous souhaitez voyager</li>
              <li class="text-h6">Sélectionnez la ligne de votre choix et sa direction</li>
              <li class="text-h6">Choisissez votre arrêt</li>
              <li class="text-h6">Validez !</li>
            </ol>
          </div>
        </div>

        <div>
          <q-img style="width: 312px;" src="../img/fiches-horaires-t-l-chargeables_1.jpg" />
        </div>

      </div>

      <div class="q-mt-xl">

        <div>
          <h5 class="q-mb-sm text-bold text-cyan">Horaires</h5>
          <hr clas="hr">
        </div>

        <div class="q-mt-xl q-mb-xl">

          <form>

            <div class="q-mb-md">
              <input type="date" class="form-control" id="mobireport_date" :value="dateModif"
                :onchange="onChangeDate" />
            </div>

            <div class="q-mb-md">
              <select name="mobireport_ligne" id="mobireport_ligne" class="form-control" :onchange="onChangeLigne">
                <option value="0">Veuillez choisir une ligne</option>
              </select>
            </div>

            <div class="q-mb-md">
              <select name="mobireport_direction" id="mobireport_direction" class="form-control disabled" disabled
                :onchange="onChangeDirection">
                <option value="0">Veuillez choisir une direction</option>
              </select>
            </div>

            <div class="q-mb-md">
              <select name="mobireport_arret" id="mobireport_arret" class="form-control disabled" disabled
                :onchange="onChangeArret">
                <option value="0">Veuillez choisir un arret</option>
              </select>
            </div>

            <div class="q-mt-lg test">
              <a clickable size="lg" tag="a"
                class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-purple text-white q-btn--actionable q-focusable q-hoverable glossy w-100"
                id="mobireport_link_arret" glossy color="purple">Horaires
                à l'arrêt
              </a>
            </div>

          </form>

        </div>

      </div>

    </div>

    <!-- Footer -->
    <footerModule />

  </q-page>

</template>

<script>
import { defineComponent } from 'vue'
import footerModule from 'src/components/Footer.vue'
import axios from 'axios'
import $ from 'jquery'
import { Notify } from 'quasar'

var mobireportConfig = {
  date: "",
  ligneId: 0,
  codeSens: 0,
  idCalendrier: 0
}

var lignesDirections = [];

var now = new Date()
var month = (now.getMonth() + 1)
var day = (now.getDate())
var year = now.getFullYear()

if (month <= 9) {
  month = '0' + (now.getMonth() + 1)
} else {
  month = (now.getMonth() + 1)
}

if (day <= 9) {
  day = '0' + (now.getDate())
} else {
  day = (now.getDate())
}

var dateModif = year + '-' + month + '-' + day

function invalideLignes() {
  $("#mobireport_ligne").addClass("disabled");
  $("#mobireport_ligne").attr("disabled", "disabled");
  $("#mobireport_ligne").html("<option value='0'>Veuillez choisir une ligne</option>")
  mobireportConfig.codeSens = 0;
}

function invalideDirections() {
  $("#mobireport_direction").addClass("disabled");
  $("#mobireport_direction").attr("disabled", "disabled");
  $("#mobireport_direction").html("<option value='-1'>Veuillez choisir une direction</option>")
  mobireportConfig.codeSens = 0;
}

function invalideArrets() {
  $("#mobireport_arret").addClass("disabled");
  $("#mobireport_arret").attr("disabled", "disabled");
  $("#mobireport_arret").html("<option value='0'>Veuillez choisir un arret</option>")
  mobireportConfig.codeArret = 0;
}

function checkIfMobireportValideForSubmit() {
  if (mobireportConfig.codeArret != 0 && mobireportConfig.codeSens != -1 && mobireportConfig.ligneId != 0 && mobireportConfig.idCalendrier != 0) {

    var nom = $("#mobireport_ligne option:selected").text() + "_" + $("#mobireport_arret option:selected").text() + "_" + $("#mobireport_direction option:selected").text();

    $("#mobireport_link_arret").css('display', 'block');

    $("#mobireport_link_arret").on('click', function (e) {

      e.preventDefault();

      var fileURL = 'https://setram.fr/module/horaire-mobireport.php?ajax=getPdf&ligne=' + mobireportConfig.ligneId + "&codeSens=" + mobireportConfig.codeSens + "&arretId=" + mobireportConfig.codeArret + "&nom=" + nom;

      var ref = cordova.InAppBrowser.open(fileURL, '_system', 'location=yes');
      var myCallback = function (event) { alert(event.url); }
      ref.addEventListener('loadstart', myCallback);
      ref.removeEventListener('loadstart', myCallback);

    })

  } else {
    $("#mobireport_link_arret").css('display', 'none');
  }
}

export default defineComponent({
  name: 'FicheHorraire',
  components: {
    footerModule,
  },
  data() {
    return {
      dateModif: dateModif,
    }
  },
  setup() {

    return {
      onChangeDate() {

        invalideDirections();
        invalideArrets();

        mobireportConfig.date = this.value;

        var date = this.value;

        axios
          .get('/ficheHoraire/' + date)
          .then(res => {

            if (res.status == 200) {

              mobireportConfig.idCalendrier = res.data.data.idCalendrier

              if (res.data.data.lignes.length > 0) {
                lignesDirections = res.data.data.lignes;
                res.data.data.lignes.forEach(val => {
                  $("#mobireport_ligne").append("<option value=\"" + val.id + "\">" + val.short_name + "</option>");
                });
              } else {
                $q.notify({
                  position: 'top-left',
                  type: 'error',
                  message: 'Aucune fiche horaire n\'est disponible pour cette date',
                  timeout: 2500,
                });
              }

            }

          })

      },
      onChangeLigne() {

        invalideDirections();
        invalideArrets();

        mobireportConfig.ligneId = this.value;

        if (mobireportConfig.ligneId != 0) {

          var directions = [];

          $.each(lignesDirections, function (key, val) {
            if (val.id == mobireportConfig.ligneId) {
              if (val.direction_0 != undefined && val.direction_0.length > 0)
                $("#mobireport_direction").append("<option value=\"0\">" + val.direction_0 + "</option>");
              if (val.direction_1 != undefined && val.direction_1.length > 0)
                $("#mobireport_direction").append("<option value=\"1\">" + val.direction_1 + "</option>");
            }

          });

          $("#mobireport_direction").removeClass("disabled");
          $("#mobireport_direction").removeAttr("disabled");
        }

      },
      onChangeDirection() {

        invalideArrets();

        var value = $('#mobireport_direction').val();

        axios
          .get('/ficheHoraireArret/' + mobireportConfig.ligneId + '/' + value)
          .then(res => {

            if (res.status == 200) {

              $.each(res.data.data, function (key, val) {
                $("#mobireport_arret").append("<option value='" + val.id + "'>" + val.name + "</option>");
              });
              $("#mobireport_arret").removeClass("disabled");
              $("#mobireport_arret").removeAttr("disabled");

            }

          })

        mobireportConfig.codeSens = this.value;
      },
      onChangeArret() {
        mobireportConfig.codeArret = this.value;
        checkIfMobireportValideForSubmit();
      }
    }
  },
  mounted() {
    $("#mobireport_date").trigger("change");
  }
})

</script>
