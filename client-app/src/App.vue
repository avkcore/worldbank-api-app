<template>
  <div id="app">
    <search></search>
    <chart></chart>
  </div>
</template>

<script type="text/javascript">
import Search from './components/Search';
import Chart from './components/Chart';

export default {
  name: 'app',
  components: {
    Search,
    Chart,
  },
  data() {
    return {

    };
  },
};
</script>
<style></style>
