
import R from 'ramda';
import { Bar } from 'vue-chartjs';
import { getRandomColor } from '../../utils/utils';

export default Bar.extend({
  props: {
    'chart-params': {
      type: Object,
      required: true,
    },
  },
  mounted() {
    const coloredDatasets =
      R.map(
        item => R.assoc('backgroundColor', getRandomColor(), item),
        this.chartParams.data.datasets,
      );
    const data = R.assoc('datasets', coloredDatasets, this.chartParams.data);
    const options = this.chartParams.options;

    this.renderChart(data, options);
  },
});
