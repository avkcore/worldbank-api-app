
import { Bar } from 'vue-chartjs';

export default Bar.extend({
  mounted() {
    this.renderChart({
      labels: ['2014', '2015', '2016'],
      datasets: [
        {
          label: 'Algeria',
          backgroundColor: 'blue',
          data: [3, 7, 4],
        },
        {
          label: 'Ukraine',
          backgroundColor: 'red',
          data: [4, null, 5],
        },
        {
          label: 'USA',
          backgroundColor: 'green',
          data: [7, 2, 6],
        },
      ],
    }, {
      title: {
        display: true,
        text: 'Some indicator',
      },
    });
  },
});
