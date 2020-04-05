<template>
  <v-app>
    <h1>Calendar App</h1>
    <v-content>
      <Calendar/>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';

export default {
  name: 'App',

  components: {
    Calendar,
  },
};
</script>
