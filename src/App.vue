<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false);
</script>

<template>
  <v-app>
    <v-app-bar app>
      <v-navigation-drawer v-model="drawer">
        <!--  -->
      </v-navigation-drawer>

      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>Application</v-app-bar-title>
      </v-app-bar>
    </v-app-bar>

    <v-main class="ma-10">
      <router-view v-slot="{ Component }">
        <v-fade-transition hide-on-leave>
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<style lang="css" scoped></style>
