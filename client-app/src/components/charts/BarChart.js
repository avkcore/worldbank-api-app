
import { Bar } from 'vue-chartjs';

export default Bar.extend({
  props: {
    'chart-params': {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartParams.data, this.chartParams.options);
  },
});
