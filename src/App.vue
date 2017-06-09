<template>
  <div id="app">
    <div v-for="e in ecuaciones">
      <highcharts :options="returnOptionsByEquation(e)"></highcharts>
      <div v-for="v in e.options.series">
        <p >{{ v.name }}</p>

        <input type="number" min="1" max="100" :value="v.data" v-model.number="v.data[0]">
      </div>
    </div>
  </div>
</template>

<script>
  import variables from './files/variables.json'
  import ecuaciones from './files/ecuaciones.json'
export default {
  name: 'app',
    data() {
      return {
          ecuaciones: ecuaciones,
          variables: variables
      }
    },
    methods: {
      returnOptionsByEquation: function (equation) {

          return equation.options;
      }
    },
    created: function () {
        for (const i in this.ecuaciones) {
            for (const j in this.ecuaciones[i].options.xAxis.categories) {
                this.ecuaciones[i].options.series[0].data.push(parseInt(this.variables.variables["PD"].value));
            }
        }
    }
}
</script>