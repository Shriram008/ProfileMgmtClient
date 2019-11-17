import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
import PieChartStatus from "./StatusChart.js";
import ChartsJS from "./Charts.js"

class PieChartGender extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        
        options: {
           
          labels: ['Male', 'Female'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        series: [],
        Chart: []
       
      }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/ids/Chart')
            .then(response => {
                
                this.setState({ 
                    Chart: response.data ,
                    
                    series: [
                        response.data.male ,  response.data.female 
                    ]
                });
                console.log(this.state.series);
                console.log(this.state.options);
                console.log(this.state.Chart.high);
                
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
      return (
        

        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width="500"
            />
           
          </div>
         {/*  <div className="mixed-chart">
          <PieChartStatus/></div> */}
        </div>

      </div>

      );
    }
  }

  export default PieChartGender
/*   const domContainer = document.querySelector('#app');
  ReactDOM.render(React.createElement(PieChart), domContainer); */