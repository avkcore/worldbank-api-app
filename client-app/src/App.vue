<template>
  <div id="app">
    <multiselect
        v-model="value"
        :options="countries"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :hide-selected="true"
        track-by="name"
        label="name"></multiselect>

  </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {

  },
  data() {
    return {

    };
  },
  computed: mapState({
    value: 'value',
    options: 'options',
    countries: 'countries',
  }),
  created() {
    this.$store.dispatch('loadCountriesList');
  },
};
</script>

<style></style>
