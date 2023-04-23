<template>

  <q-item class="w-100 q-pa-md q-mb-none" style="padding: 16px;display: block;">
    <h4 class="q-pa-none q-ma-none text-bold text_uppercase">Le réseau</h4>
    <hr class="q-mb-md hr">
  </q-item>

  <div class="q-pa-md q-mt-none q-mb-sm card-mobile" style="padding-top: 0;">

    <q-card class="card-home q-mb-lg">

      <q-card-section class="bg-purple text-white">
        <div class="text-h6 text-large">Votre trajet sur mesure</div>
      </q-card-section>

      <q-separator />

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="one">

          <q-form>

            <input type="hidden" name="search[modes][]" id="mode_bus" value="physical_mode:Bus">
            <input type="hidden" name="search[modes][]" id="mode_tram" value="physical_mode:Tramway">
            <input type="hidden" name="search[drawdown_modes][]" id="mode_velo">
            <input type="hidden" name="search[traveler_type]" id="profil_voyageur" value="standard">

            <div class="q-mb-md">

              <input type="text" class="form-control" list="datalistOptions" id="inputDepart" :onkeyup="changeDepart"
                placeholder="Arrêt, adresse, lieu de départ" :onchange="changeSelectDepart">

              <datalist id="datalistOptions">
              </datalist>

            </div>

            <input type="hidden" id="from_id">

            <div class="q-mb-md">

              <input type="text" class="form-control" list="datalistOptions2" id="inputArrivee" :onkeyup="changeArrivee"
                :onchange="changeSelectArrivee" placeholder="Arrêt, adresse, lieu d'arrivée">

              <datalist id="datalistOptions2">
              </datalist>

            </div>

            <input type="hidden" id="to_id">

            <div class="flex" style="flex-wrap: nowrap;flex-direction: row;justify-content: space-between;gap: 10px;">

              <div class="q-mb-md">

                <select name="datetime_represents" id="datetime_represents" aria-label="Préférences"
                  class="form-select">
                  <option value="departure">Départ à</option>
                  <option value="arrival">Arrivée à</option>
                </select>

              </div>

              <div class="q-mb-md">

                <select name="hour" id="hour" class="form-select">
                  <option value="0">00</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11" selected="">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                </select>

              </div>

              <div class="q-mb-md">

                <select name="minute" id="minute" class="form-select">
                  <option value="0">00</option>
                  <option value="5">05</option>
                  <option value="10" selected="">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                  <option value="55">55 </option>
                </select>

              </div>

            </div>

            <div class="flex q-mb-md" style="flex-wrap: nowrap;flex-direction: row;">

              <input type="date" id="date" name="date" :value="dateModif" class="form-control">

              <q-btn class="q-ml-sm bg-purple text-white" flat style="height: 40px;" filled @click="settings = true">
                <i class="fa-solid fa-cog"></i>
              </q-btn>

            </div>

            <div>
              <a href="/#/map-form-home"
                class="q-btn q-btn-item non-selectable no-outline q-btn--standard q-btn--rectangle bg-purple text-white q-btn--actionable q-focusable q-hoverable w-100 q-pt-sm glossy dense q-pb-sm">Valider</a>
            </div>

          </q-form>

        </q-tab-panel>

      </q-tab-panels>

    </q-card>

    <q-card class="card-home q-mt-lg q-mb-lg">

      <q-card-section class="bg-teal text-white">

        <div class="text-h6 text-large">Info Trafic à {{ dateInfo.heures + ':' + dateInfo.minutes }} </div>
      </q-card-section>

      <q-separator />

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="one">

          <p class="text-small text-center"><b>Cliquez sur une ligne pour en savoir plus :</b></p>

          <div class="trafic">

            <a class="trafics" :href="traficData.url" v-for="traficData in traficDatas" v-bind:key="traficData.id">
              <img :src="traficData.image" alt="">
            </a>

          </div>

          <div id="bloc_actu_ligne"></div>

          <div class="flex">
            <q-btn href="https://www.setram.fr/562-Infos-trafic.html" target="_blank" dense glossy
              class="q-mt-md bg-teal w-100 text-white"><b>Toute l'info trafic…</b></q-btn>
          </div>

        </q-tab-panel>

      </q-tab-panels>

    </q-card>

    <q-card class="card-home q-mt-lg">

      <q-card-section class="bg-blue text-white">

        <div class="text-h6 text-large">Restez connecté au réseau grâce au service gratuit d'alerte trafic (sms
          ou email) :</div>
      </q-card-section>

      <q-separator />

      <q-tab-panels v-model="tab" animated>

        <q-tab-panel name="one">

          <div class="flex">
            <q-btn href="https://www.setram.fr/982-Mes-services.html" target="_blank" dense glossy
              class="bg-blue w-100 text-white"><b>Je m'inscris ici</b></q-btn>
          </div>

        </q-tab-panel>

      </q-tab-panels>

    </q-card>

  </div>

  <!-- Modal Form Home -->
  <q-dialog v-model="settings" transition-show="flip-down" transition-hide="flip-up">

    <q-card style="width: 100%;max-height: 400px;">

      <q-card-section>
        <div class="text-h6">Options de transport</div>
      </q-card-section>

      <q-card-section class="q-pt-none">

        <p class="text-blue">Modes de transport</p>

        <p class="text-teal"><b>Choix des modes de transport</b></p>

        <q-list class="q-mb-md" style="display: flex; align-items: flex-start;gap: 10px;">

          <div class="form-check">
            <input type="checkbox" value="option1" checked class="form-check-input" id="prefitiCheckbox1"
              :onclick="changeTransport" />
          </div>

          <div class="row items-center">
            <q-icon name="fa-solid fa-bus-simple" size="1.5em" class="q-mr-sm text-orange" />
            <span class="text-orange"><b>Bus</b></span>
          </div>

        </q-list>

        <q-list class="q-mb-md" style="display: flex; align-items: flex-start;gap: 10px;">

          <div class="form-check">
            <input type="checkbox" :onclick="changeTransport2" value="option2" checked class="form-check-input"
              id="prefitiCheckbox2" />
          </div>

          <div class="row items-center">
            <q-icon name="fa-solid fa-train-tram" size="1.5em" class="q-mr-sm text-green" />
            <span class="text-green"><b>Tram</b></span>
          </div>

        </q-list>

        <q-list style="display: flex; align-items: flex-start;gap: 10px;">

          <div class="form-check">
            <input type="checkbox" value="option4" :onclick="changeTransport4" class="form-check-input"
              id="prefitiCheckbox4" />
          </div>

          <div class="row items-center">
            <q-icon name="fa-solid fa-person-biking" size="1.5em" class="q-mr-sm text-blue" />
            <span class="text-blue"><b>Vélo</b></span>
          </div>

        </q-list>

        <div class="q-mt-md">

          <p class="text-blue">Profil de voyageur</p>

          <p class="text-teal"><b>Accès aménagés</b></p>

          <q-list style="display: flex; align-items: flex-start;gap: 10px;">

            <div class="form-check">
              <input class="form-check-input" value="wheelchair" type="radio" :onclick="changeAccess"
                name="prefitiRadios" id="prefitiRadios">
            </div>

            <div class="row items-center">
              <q-icon name="fa-brands fa-accessible-icon" size="1.5em" class="q-mr-sm text-orange" />
              <span class="text-orange"><b>Usager en fauteuil roulant</b></span>
            </div>

          </q-list>

          <p class="text-teal q-mt-md"><b>Vitesse de marche</b></p>

          <q-list style="display: flex; align-items: flex-start;gap: 10px;">

            <div class="form-check">
              <input class="form-check-input" :onclick="changeAccess" value="slow_walker" type="radio"
                name="prefitiRadios" id="prefitiRadios">
            </div>

            <div class="row items-center">
              <span class="text-dark"><b>Lente</b></span>
            </div>

          </q-list>

          <q-list style="display: flex; align-items: flex-start;gap: 10px;">

            <div class="form-check">
              <input class="form-check-input" :onclick="changeAccess" value="standard" checked type="radio"
                name="prefitiRadios" id="prefitiRadios">
            </div>

            <div class="row items-center">
              <span class="text-dark"><b>Moyenne</b></span>
            </div>

          </q-list>

          <q-list style="display: flex; align-items: flex-start;gap: 10px;">

            <div class="form-check">
              <input class="form-check-input" :onclick="changeAccess" value="fast_walker" type="radio"
                name="prefitiRadios" id="prefitiRadios">
            </div>

            <div class="row items-center">
              <span class="text-dark"><b>Rapide</b></span>
            </div>

          </q-list>

        </div>

      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <q-btn flat label="Fermer" v-close-popup />
      </q-card-actions>

    </q-card>

  </q-dialog>

</template>


<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import axios from 'axios'
import $ from 'jquery'

var optionsHours = [];
var optionsMinutes = [];

var hours = new Date().getHours();

var date = new Date();

date.toLocaleDateString("fr");

const traficData = ref('');

var reload = false;

function escapeRegExChars(value) {
  return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}

function invalideSelectDepart() {
  $("#datalistOptions").html("")
}

function invalideSelectArrivee() {
  $("#datalistOptions2").html("")
}

$('.btn-invert-iti').on("click", function (e) {
  e.preventDefault();
  var newArrive = $("#inputDepart").val();
  var newArriveId = $("#from_id").val();
  $("#inputDepart").val($("#inputArrivee").val())
  $("#from_id").val($("#to_id").val())
  $("#inputArrivee").val(newArrive);
  $("#to_id").val(newArriveId)
  return false;
});

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

$('#date').val(date.getUTCFullYear() + '-' + (date.getUTCMonth() + 1) + '-' + date.getUTCDate());

function Afficheinfotrafic(selected, acceuil) {

  axios
    .get('/infoTrafic/' + selected + '/' + acceuil)
    .then(res => {

      if (res.status == 200) {
        $('#bloc_actu_ligne').html('');
        $("#bloc_actu_ligne").html(res.data.traficAll);

      }

    })

}

$(document).on('click', '.trafics', function (e) {

  e.preventDefault()

  var href = $(this).attr('href')

  Afficheinfotrafic(href.replace('https://www.setram.fr/affichage.php?id=562&id_actu_trafic=', ''), 0)

})

export default defineComponent({
  name: 'CardeHome',
  data() {
    return {
      actualitesList: [],
      traficDatas: []
    }
  },
  setup() {

    for (let i = 0; i <= 23; i++) {
      if (i <= 9) optionsHours.push('0' + i)
      else optionsHours.push(i);
    }

    for (let i = 0; i <= 55; i += 5) {
      if (i <= 9) optionsMinutes.push('0' + i)
      else optionsMinutes.push(i);
    }

    return {
      dateModif: dateModif,
      stringOptions: {},
      traficData: traficData,
      dateInfo: {
        heures: (date.getUTCHours() <= 9) ? 0 + (date.getUTCHours() + 1) : (date.getUTCHours() + 1),
        minutes: (date.getUTCMinutes() <= 9) ? 0 + date.getUTCMinutes() : date.getUTCMinutes()
      },
      tab: ref('one'),
      settings: ref(false),
      changeDepart() {

        axios
          .get('/searchFormHome/' + this.value)
          .then(res => {

            if (res.status == 200) {

              var suggestions = []

              for (var i = 0; i < res.data.data.places.length; i++) {

                var currentResponse = res.data.data.places[i];
                suggestions.push({
                  value: currentResponse.name,
                  data: {
                    embedded_type: currentResponse.embedded_type,
                    id: currentResponse.id,
                  }
                });

              }

              var pattern = '(' + escapeRegExChars(this.value) + ')';

              $('#datalistOptions').html('');

              suggestions.forEach(i => {
                var data = i.data
                $('#datalistOptions').append('<option data-id="' + data.id + '" value="' + i.value.replace(new RegExp(pattern, 'gi'), '$1') + '"></option>');
              });

            }

          })

        invalideSelectDepart()

      },
      changeSelectDepart() {

        var id = $('#datalistOptions option').filter(function () {
          return this.value;
        }).data('id');

        $("#from_id").val(id);

      },
      changeArrivee() {

        axios
          .get('/searchFormHome/' + this.value)
          .then(res => {

            if (res.status == 200) {

              var suggestions = []

              for (var i = 0; i < res.data.data.places.length; i++) {

                var currentResponse = res.data.data.places[i];
                suggestions.push({
                  value: currentResponse.name,
                  data: {
                    embedded_type: currentResponse.embedded_type,
                    id: currentResponse.id,
                  }
                });

              }

              var pattern = '(' + escapeRegExChars(this.value) + ')';

              $('#datalistOptions2').html('');

              suggestions.forEach(i => {
                var data = i.data
                $('#datalistOptions2').append('<option data-id="' + data.id + '" value="' + i.value.replace(new RegExp(pattern, 'gi'), '$1') + '"></option>');
              });

            }

          })

        invalideSelectArrivee()

      },
      changeSelectArrivee() {

        var id = $('#datalistOptions2 option').filter(function () {
          return this.value;
        }).data('id');

        $("#to_id").val(id);

      },
      changeTransport() {

        $('#prefitiCheckbox1').on("change", function () {
          if (this.checked) {
            $("#mode_bus").val("physical_mode:Bus");
          } else {
            $("#mode_bus").val("");
          }
        });

      },
      changeTransport2() {

        $('#prefitiCheckbox2').on("change", function () {
          if (this.checked) {
            $("#mode_tram").val("physical_mode:Tramway");
          } else {
            $("#mode_tram").val("");
          }
        });

      },
      changeTransport4() {

        $('#prefitiCheckbox4').on("change", function () {
          if (this.checked) {
            $("#mode_velo").val("bike");
          } else {
            $("#mode_velo").val("");
          }
        });

      },
      changeAccess() {
        $(this).on("change", function () {
          $("#profil_voyageur").val(this.value);
        });
      },
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {

    axios
      .get('/trafic')
      .then(res => {

        if (res.status == 200) {

          this.traficDatas = res.data.traficAll;

        }

      })

  }
})

</script>
