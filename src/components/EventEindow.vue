<template>
  <v-menu bottom right>
    <template v-slot:activator="{ on }">
      <v-btn outlined v-on="on">
        <span>{{ typeToLabel[type] }}</span>
        <v-icon right>mdi-menu-down</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item @click="type = 'day'">
        <v-list-item-title>Day</v-list-item-title>
      </v-list-item>
      <v-list-item @click="type = 'week'">
        <v-list-item-title>Week</v-list-item-title>
      </v-list-item>
      <v-list-item @click="type = 'month'">
        <v-list-item-title>Month</v-list-item-title>
      </v-list-item>
      <v-list-item @click="type = '4day'">
        <v-list-item-title>4 days</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {};
</script>

<style>
</style>