<template>
  <div id="app">
    <multiselect
        :value="value"
        :options="countries"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="false"
        :hide-selected="true"
        track-by="name"
        label="name"
        @input="addCountry"></multiselect>
  </div>
</template>

<script type="text/javascript">
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'app',
  components: {

  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'countries',
      'value',
      'options',
    ]),
  },
  methods: {
    ...mapActions([
      'loadCountriesList',
      'addCountry',
    ]),
  },
  created() {
    this.loadCountriesList();
  },
};
</script>

<style></style>
