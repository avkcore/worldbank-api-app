import { Bar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default Bar.extend({
  mixins: [reactiveProp],
  props: {
    'chart-data': {
      type: Object,
      required: true,
    },
    'chart-opts': {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOpts);
  },
});
