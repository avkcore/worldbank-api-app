<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <bar-chart
        v-if="isDataReceived"
        :chart-data="receivedData.data"
        :chart-opts="receivedData.options">
      </bar-chart>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import BarChart from './charts/BarChart';

  export default {
    components: {
      BarChart,
    },
    computed: {
      ...mapGetters([
        'isDataReceived',
        'receivedData',
      ]),
    },
  };
</script>

<style scoped>

</style>
