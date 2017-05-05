<template>
  <div>
    <bar-chart v-if="isDataReceived" :chart-params="receivedData"></bar-chart>
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
