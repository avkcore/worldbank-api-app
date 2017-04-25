<template>
  <div class="search-container">
    <label for="countries">Select countries</label>
    <multiselect
        id="countries"
        :value="selectedCountries"
        :options="countriesList"
        :multiple="true"
        :close-on-select="false"
        :clear-on-select="true"
        :hide-selected="true"
        track-by="name"
        label="name"
        @select="addCountry"
        @remove="removeCountry"></multiselect>
    <label for="range-from">Year From:</label>
    <multiselect
        :value="yearFrom"
        :options="filteredYearsFrom"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Pick a value"
        @select="changeYearFrom"></multiselect>
    <label for="range-from">Year To:</label>
    <multiselect
        :value="yearTo"
        :options="filteredYearsTo"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Pick a value"
        @select="changeYearTo"></multiselect>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'countriesList',
      'selectedCountries',
      'yearFrom',
      'yearTo',
      'filteredYearsTo',
      'filteredYearsFrom',
    ]),
  },
  methods: {
    ...mapActions([
      'loadCountriesList',
      'addCountry',
      'removeCountry',
      'initRanges',
      'changeYearFrom',
      'changeYearTo',
    ]),
  },
  created() {
    this.loadCountriesList();
    this.initRanges();
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
