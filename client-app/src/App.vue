<template>
  <div id="app">
    <search></search>
    <bar-chart></bar-chart>
  </div>
</template>

<script type="text/javascript">
import Search from './components/Search';
import BarChart from './components/charts/BarChart';

export default {
  name: 'app',
  components: {
    Search,
    BarChart,
  },
  data() {
    return {

    };
  },
};
</script>
<style></style>
