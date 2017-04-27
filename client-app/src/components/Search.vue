<template>
  <section class="hero is-dark">
  <div class="hero-body">
    <div class="container">
      <div class="columns">
        <div class="column">
          <label for="countries">Select countries:</label>
          <multiselect id="countries" :value="selectedCountries" :options="countriesList" :multiple="true" :close-on-select="false"
            :clear-on-select="true" :hide-selected="true" track-by="name" label="name" @select="addCountry" @remove="removeCountry">
          </multiselect>
          <div class="columns">
            <div class="column">
              <label for="range-from">Year From:</label>
              <multiselect id="range-from" :value="yearFrom" :options="filteredYearsFrom" :searchable="false" :close-on-select="true" :show-labels="false"
                placeholder="Pick a value" @select="changeYearFrom">
              </multiselect>
            </div>
            <div class="column">
              <label for="range-to">Year To:</label>
              <multiselect id="range-to" :value="yearTo" :options="filteredYearsTo" :searchable="false" :close-on-select="true" :show-labels="false"
                placeholder="Pick a value" @select="changeYearTo">
              </multiselect>
            </div>
          </div>
        </div>
        <div class="column">
          <label for="topics">Choose topic:</label>
          <multiselect id="topics" :value="selectedTopic" :options="topicsList" :searchable="false" :close-on-select="true" :show-labels="false"
            placeholder="Pick a value" label="value" track-by="id" @select="changeTopic">
          </multiselect>
          <label for="indicators">Choose indicator:</label>
          <multiselect id="indicators" :disabled="!isIndicatorLoaded" :value="selectedIndicator" :options="indicators" :searchable="false"
            :close-on-select="true" :show-labels="false" placeholder="Pick a value" label="name" track-by="id" @select="changeIndicator">
          </multiselect>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <label for="pattern">Use Pattern:</label>
          <multiselect id="pattern" :disabled="!isPatternExist" :value="selectedPattern" :options="searchPatterns" :searchable="false"
            :close-on-select="true" :show-labels="false" placeholder="Pick a value" label="name" track-by="name" @select="changePattern">
          </multiselect>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="block">
            <a class="button is-success" :disabled="!isRequestAvailable" :class="{'is-loading': false}" @click="requestData(coupledData)" v-show="!patternSaveAttempt">Get Data</a>
            <a class="button is-info" :disabled="!isDataCoupled" @click="openPatternSaveArea" v-show="!patternSaveAttempt">Save Pattern</a>
            <b-field v-show="patternSaveAttempt">
              <b-input placeholder="Pattern Name" v-model="patternName"></b-input>
              <p class="control">
                <button class="button" @click="closePatternSaveArea">Cancel</button>
              </p>
              <p class="control">
                <button class="button is-success" :disabled="!patternHasName" @click="savePattern({ ctx, patternName, coupledData })">Save</button>
              </p>
            </b-field>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      patternName: '',
      ctx: this,
    };
  },
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
      'isIndicatorLoaded',
      'coupledData',
      'isDataCoupled',
      'patternSaveAttempt',
      'searchPatterns',
      'selectedPattern',
      'isPatternExist',
      'isRequestAvailable',
      'isConfirmDialogOpen',
    ]),
    patternHasName() {
      return !!this.patternName.length;
    },
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
      'requestData',
      'savePattern',
      'openPatternSaveArea',
      'closePatternSaveArea',
      'changePattern',
      'closeSaveConfirm',
    ]),
  },
  created() {
    this.loadCountriesList();
    this.loadTopicsList();
    this.initRanges();
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

</style>
