<template>

  <div class="q-pa-md w-100 bg-purple footer">

    <div class="text-white">
      <p class="q-mb-sm text-small"><b>Espace mobilité Setram :</b> 65 avenue du Général de Gaulle - Le Mans</p>
      <p class="q-mt-sm text-small q-mb-none">du lundi au vendredi de 8h à 19h, le samedi de 9h à 18h. Contact : 02 43
        24 76 76
      </p>
    </div>

    <div class="text-white on_desktop">

      <div class="q-mb-sm">
        <a href="#/contact" class="text-white q-mr-md">Nous contacter</a>
        <a href="https://www.setram.fr/982-Espace-perso.html" class="text-white q-mr-md">S'abonner à la
          newsletter</a>
        <a href="https://www.setram.fr/affichage.php?plan=1" class="text-white">Plan du site</a>
      </div>

      <div>
        <a href="#/mentions-legales" class="text-white q-mr-md">Mentions légales</a>
        <a href="https://www.setram.fr/1265-Declaration-d-accessibilite.html" class="text-white q-mr-md">Accessibilité
          : partiellement conforme</a>
        <a href="javascript:tarteaucitron.userInterface.openPanel();" class="text-white">Gestion des cookies</a>
      </div>

    </div>

    <hr class="on_mobile w-100">

    <div class="text-white on_mobile">

      <div class="q-mb-sm">
        <ul>
          <li>
            <a href="#/contact" class="text-white">Nous contacter</a>
          </li>
          <li><a href="https://www.setram.fr/982-Espace-perso.html" class="text-white">S'abonner à la
              newsletter</a></li>
          <li><a href="https://www.setram.fr/affichage.php?plan=1" class="text-white">Plan du site</a></li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <a href="#/mentions-legales" class="text-white">Mentions légales</a>
          </li>
          <li><a href="https://www.setram.fr/1265-Declaration-d-accessibilite.html" class="text-white">Accessibilité
              : partiellement conforme</a></li>
          <li><a href="javascript:tarteaucitron.userInterface.openPanel();" class="text-white">Gestion des cookies</a>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div class="q-pa-sm w-100 bg-purple-9 footer">

    <div class="text-white w-100">
      <p class="q-mt-sm q-mb-sm text-small text-center"><b>Gaëtan Seigneur © 2022 Copyright</b></p>
    </div>

  </div>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterHome',
})
</script>
