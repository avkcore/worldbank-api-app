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
        id="range-from"
        :value="yearFrom"
        :options="filteredYearsFrom"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Pick a value"
        @select="changeYearFrom"></multiselect>
    <label for="range-to">Year To:</label>
    <multiselect
        id="range-to"
        :value="yearTo"
        :options="filteredYearsTo"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Pick a value"
        @select="changeYearTo"></multiselect>
    <label for="topics">Choose topic:</label>
    <multiselect
        id="topics"
        :value="selectedTopic"
        :options="topicsList"
        :searchable="false"
        :close-on-select="true"
        :show-labels="false"
        placeholder="Pick a value"
        label="value"
        track-by="id"
        @select="changeTopic"></multiselect>
    <div v-if="selectedTopic">
      <label for="indicators">Choose indicator:</label>
      <multiselect
         id="indicators"
         :value="selectedIndicator"
         :options="indicators"
         :searchable="false"
         :close-on-select="true"
         :show-labels="false"
         placeholder="Pick a value"
         label="name"
         track-by="id"
         @select="changeIndicator"></multiselect>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'countriesList',
      'selectedCountries',
      'topicsList',
      'selectedTopic',
      'yearFrom',
      'yearTo',
      'filteredYearsTo',
      'filteredYearsFrom',
      'indicators',
      'selectedIndicator',
    ]),
  },
  methods: {
    ...mapActions([
      'loadCountriesList',
      'loadTopicsList',
      'addCountry',
      'removeCountry',
      'initRanges',
      'changeYearFrom',
      'changeYearTo',
      'changeTopic',
      'changeIndicator',
    ]),
  },
  created() {
    this.loadCountriesList();
    this.initRanges();
    this.loadTopicsList();
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
