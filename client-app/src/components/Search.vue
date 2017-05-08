<template>
  <!--<section class="hero is-dark">
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
            <a class="button is-success" :disabled="!isRequestAvailable" :class="{'is-loading': false}" @click="onRequestHandler" v-show="!patternSaveAttempt">Get Data</a>
            <a class="button is-info" :disabled="!isDataCoupled" @click="onSavePatternHandler" v-show="!patternSaveAttempt">Save Pattern</a>
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
</section>-->
<div class="">
  <div class="columns">
    <div class="column is-3 aside is-fullheight hero">
      <div class="filters">
        <div class="select-input">
          <multiselect id="countries" :value="selectedCountries" :options="countriesList" :multiple="true" :close-on-select="false"
        :clear-on-select="true" :hide-selected="true" track-by="name" label="name" @select="addCountry" @remove="removeCountry" placeholder="Select countries">
      </multiselect>
        </div>
      <div class="columns">
        <div class="column">
          <div class="select-input">
            <multiselect id="range-from" :value="yearFrom" :options="filteredYearsFrom" :searchable="false" :close-on-select="true" :show-labels="false"
            @select="changeYearFrom" placeholder="From">
          </multiselect>
          </div>
        </div>
        <div class="column">
          <div class="select-input">
            <multiselect id="range-to" :value="yearTo" :options="filteredYearsTo" :searchable="false" :close-on-select="true" :show-labels="false"
            @select="changeYearTo" placeholder="To">
          </multiselect>
          </div>
        </div>
      </div>
      <div class="select-input">
        <multiselect id="topics" :value="selectedTopic" :options="topicsList" :searchable="false" :close-on-select="true" :show-labels="false"
        placeholder="Select topic" label="value" track-by="id" @select="changeTopic">
      </multiselect>
      </div>
      <div class="select-input">
        <multiselect id="indicators" :disabled="!isIndicatorLoaded" :value="selectedIndicator" :options="indicators" :searchable="false"
        :close-on-select="true" :show-labels="false" placeholder="Select indicator" label="name" track-by="id" @select="changeIndicator">
      </multiselect>
      </div>
      <div class="block">
        <a class="button is-success" :disabled="!isRequestAvailable" :class="{'is-loading': false}" @click="onRequestHandler" v-show="!patternSaveAttempt">Get Data</a>
      </div>
      </div>
      <div class="pattern">
        <multiselect id="pattern" :disabled="!isPatternExist" :value="selectedPattern" :options="searchPatterns" :searchable="false"
        :close-on-select="true" :show-labels="false" placeholder="Select pattern" label="name" track-by="name" @select="changePattern">
      </multiselect>
      <div class="block">
        <a class="button is-primary" :disabled="!isDataCoupled" @click="onSavePatternHandler" v-show="!patternSaveAttempt">Save</a>
        <a class="button is-info" v-show="!patternSaveAttempt">Use</a>
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
      return this.patternName.length > 0;
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
    onRequestHandler() {
      if (!this.isRequestAvailable) {
        return;
      }
      this.requestData(this.coupledData);
    },
    onSavePatternHandler() {
      if (!this.isDataCoupled) {
        return;
      }
      this.openPatternSaveArea();
    },
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
  .aside {
    background-color: #354052;

  }
  .filters {
    display: flex;
    flex-flow: column wrap;
    flex: 1 1 auto;
    //justify-content: space-around;
    margin: 5px;
  }
  .pattern {
    display: flex;
    flex-flow: column wrap;
    flex: 1 0 auto;
    justify-content: flex-start;
    margin: 5px;
  }
  .block {
    padding: 10px 0;
  }
  .select-input {
    padding: 10px 0;
  }
</style>
