<template>
  <div id="app">
    <div class="row">
      <div class="col s12" style="    box-shadow: 10px 10px 5px #888888; margin: 10% 0">
        <highcharts :options="total(ecuaciones['total'].options)" ref="highcharts"></highcharts>
        <a class="waves-effect waves-light btn-large" v-on:click="show = !show">Mostrar todas las graficas</a>
        <!-- Modal Trigger -->
        <a class="waves-effect waves-light btn" href="#modal1">Solo variables</a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal">
          <div class="modal-content">
            <div v-for="v in variables">
              <p >{{ v.name }}</p>
              <p class="range-field">
                <input type="range" i min="1" max="100" :value="v.data" v-model.number="v.value" v-on:change="onChange()"/>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cerrar</a>
          </div>
        </div>

      </div>
    <div v-for="e in ecuaciones" v-show="show">
        <div class="col s12 m6">
          <div class="card" style="min-height: 830px">
            <div class="card-image waves-effect waves-block waves-light">
              <highcharts :options="returnOptionsByEquation(e)" ref="highcharts"></highcharts>
              <a class="waves-effect waves-light btn-large" v-on:click="show = !show">Analizar resutaldos</a>
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Variables del ciclo</span>
              <div v-for="v in e.variables">
                <p >{{ variables[v].name }}</p>
                <p class="range-field">
                  <input type="range" id="test5" min="1" max="100" :value="v.data" v-model.number="variables[v].value" v-on:change="onChange()"/>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>

    </div>
  </div>

</template>

<script>
  import variables from './files/variables.json'
  import ecuaciones from './files/ecuaciones.json'
  import time from './files/time.json'
export default {
  name: 'app',
    data() {
      return {
          ecuaciones: ecuaciones,
          variables: variables,
          suma: [],
          show: false
      }
    },
    methods: {
      total: function (options) {
        options.series[0].data = this.suma;
        console.log(this.suma);
        return options;
      },
      returnOptionsByEquation: function (equation) {
          return equation.options;
      },
      onChange: function () {
        this.createEquations();
      },
      rounded: function (value) {
          if (Math.round((value * 100) / 1000) > 100){
              return 100;
          }else if (Math.round((value * 100) / 1000) < 0){
              return 0;
          }
          return  Math.round((value * 100) / 1000);
      },
      createEquations: function () {
          this.suma = [];
          // hacer global
          // agregar alert diciendo que ecuaciones cambiaron
          // alert cuando la desercion es global es demasiada baja
          // boton tramando deducir clonclusiones
          // template de fondo mas bonito
          // graficos diferentes
          // listado global de variables
          // poder ocultar y mostrar graficas

          this.ecuaciones['ecuacion-1'].options.series[0].data = [];
          this.ecuaciones['ecuacion-2'].options.series[0].data = [];
          this.ecuaciones['ecuacion-3'].options.series[0].data = [];
          this.ecuaciones['ecuacion-4'].options.series[0].data = [];
          this.ecuaciones['ecuacion-5'].options.series[0].data = [];
          this.ecuaciones['ecuacion-6'].options.series[0].data = [];
          this.ecuaciones['ecuacion-7'].options.series[0].data = [];
          this.ecuaciones['ecuacion-8'].options.series[0].data = [];
          this.ecuaciones['ecuacion-9'].options.series[0].data = [];
          this.ecuaciones['ecuacion-10'].options.series[0].data = [];
          this.ecuaciones['ecuacion-11'].options.series[0].data = [];
          this.ecuaciones['ecuacion-12'].options.series[0].data = [];
          this.ecuaciones['ecuacion-13'].options.series[0].data = [];
          this.ecuaciones['ecuacion-14'].options.series[0].data = [];

          var PD = this.variables['PD'].value;
          var CR = this.variables['CR'].value;
          var VE = this.variables['VE'].value;
          var AE = this.variables['AE'].value;
          var EDJ = this.variables['EDJ'].value;
          var DE = this.variables['AE'].value;
          var BDP = this.variables['AE'].value;
          var ES = this.variables['ES'].value;
          var AME = this.variables['AME'].value;
          var AMF = this.variables['AMF'].value;
          var ENP = this.variables['ENP'].value;
          var NEF = this.variables['NEF'].value;
          var DTE = this.variables['DTE'].value;
          var EL = this.variables['EL'].value;
          var EH = this.variables['EH'].value;
          var CEJ = this.variables['CEJ'].value;
          var FUSP = this.variables['FUSP'].value;
          var TCSS = this.variables['TCSS'].value;
          var NAF = this.variables['NAF'].value;
          var IR = this.variables['IR'].value;
          var AS =  this.variables['AS'].value;
          var SFME =  this.variables['AS'].value * 1.10;
          var AEP = this.variables['AEP'].value;
          var IA =  AEP >= 50 ? 100 : 1;
          var SMHE = this.variables['SMHE'].value;
          var CAE = this.variables['CAE'].value;
          var AEC = ((CAE * 0.5) + 10) > 40 ? 100 : 0;
          var LC = this.variables['LC'].value;
          var CDDE = 100 - LC ;
          var PAM = 100 - CDDE ;
          var SD = this.variables['SD'].value;
          var AA = SD >= 50 ? 0 : 100;
          var CM = LC*1.25;


          for (let t in time){
              t = parseInt(t) + 1;
              this.ecuaciones['ecuacion-1'].options.series[0].data.push(
                  this.rounded(
                      (-PD/(8*t)) + (4*CR) + (VE^(t/12)) + (AE*t)
                  )
              );
              this.ecuaciones['ecuacion-2'].options.series[0].data.push(
                  this.rounded(
                      (-(EDJ *0.2) * (t)) + (DE*(0.4 * (t))) + (BDP*(0.4*(t)))
                  )
              );
              this.ecuaciones['ecuacion-3'].options.series[0].data.push(
                  this.rounded(
                      - (ES * (0.10 * (t + 1)))  - (AME * (0.10 * (t + 1))) - (AMF * 0.6 * (t + 1)) - (EH * 0.1 *( t^1.2 + 1)) + (ENP * 0.1  * (t/4 + 1)) + (AE * (t + 1))
                  )
              );
              this.ecuaciones['ecuacion-4'].options.series[0].data.push(
                  this.rounded(
                      (-NEF-((t)^2) - 100) + (EL * ((t)/2)) + (DTE * 0.5)
                  )
              );
              this.ecuaciones['ecuacion-5'].options.series[0].data.push(
                  this.rounded(
                      (-NEF-((t+1)^2) - 100) - (AME * (0.10 * (t + 1))) + (AE*(t + 1))
                  )
              );
              // control y empleo deben ir ligados
              this.ecuaciones['ecuacion-6'].options.series[0].data.push(
                  this.rounded(
                      EDJ < 20 ? 100 - ((-EDJ/4 *(t +1)) + (CEJ *  ((t+1)) - 700)) : 100 - ((-EDJ/4 *(t +1)) + (CEJ * ((t+1)) - 700))
                  )
              );
              this.ecuaciones['ecuacion-7'].options.series[0].data.push(
                  this.rounded(
                      (FUSP *0.33 + TCSS*0.33 + VE*0.33)* ((t + 1) * 0.8191)
                  )
              );
              this.ecuaciones['ecuacion-8'].options.series[0].data.push(
                  this.rounded(
                      1400  + (- ((AMF * 0.6) * (t + 1)) - (NAF * (t + 1) * 0.2))
                  )
              );
              this.ecuaciones['ecuacion-9'].options.series[0].data.push(
                  this.rounded(
                       IR*(10) - (NEF*((t)*2.2)) + (IR * ((t)*2))
                  )
              );
              this.ecuaciones['ecuacion-10'].options.series[0].data.push(
                  this.rounded(
                      - (AS * (t)) - (SFME * (t)) + (AE*((t*2.5)))
                  )
              );
              this.ecuaciones['ecuacion-11'].options.series[0].data.push(
                  this.rounded(
                      1000 - ((AEP * (13 - t))/4 + (IA * (13 - t))/6 + (SMHE * (13 - t))/6)
                  )
              );
              this.ecuaciones['ecuacion-12'].options.series[0].data.push(
                  this.rounded(
                      1000 - ((CAE ^ ((t + 1))) + (AEC))
                  )
              );
              this.ecuaciones['ecuacion-13'].options.series[0].data.push(
                  this.rounded(
                      1000 - ((CAE * ((t - 4) + 1)) + (PAM) + (SD) + (AA) + (SMHE * (13 - t))/6)
                  )
              );
              this.ecuaciones['ecuacion-14'].options.series[0].data.push(
                  this.rounded(
                      1000 - (CM + (AA) + (SMHE * (13 - t))/6)
                  )
              );
              let local = 0;
              for(const j in this.ecuaciones){
                  local += this.ecuaciones[j].options.series[0].data[t-1] ?this.ecuaciones[j].options.series[0].data[t-1] :0;
              }
              this.suma.push(parseInt(local/14));
          }
         this.total(this.ecuaciones['total'].options)
      }
    },
    created: function () {
       this.createEquations()
    }
}
</script>