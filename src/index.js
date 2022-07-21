import './styles/all'
// import moment from "moment";
// import {MDCTabBar} from '@material/tab-bar';
import {MDCSlider} from '@material/slider';
import Utils from "moment";
import {Chart} from "chart.js";
// // console.log('testing =>', moment("15/12/1995 32:34", "DD/MM/YYYY hh:mm").isValid())

// const html = fetch('./templates/slider.html')
//     .then(data => data.text())
//     .then(data => console.log(data))
// document.getElementById('root').innerHTML = `<div class="mdc-slider">
//   <input class="mdc-slider__input" type="range" min="0" max="100" value="50" name="volume" aria-label="Continuous slider demo">
//   <div class="mdc-slider__track">
//     <div class="mdc-slider__track--inactive"></div>
//     <div class="mdc-slider__track--active">
//       <div class="mdc-slider__track--active_fill"></div>
//     </div>
//   </div>
//   <div class="mdc-slider__thumb">
//     <div class="mdc-slider__thumb-knob"></div>
//   </div>
// </div>`
// document.querySelector('.mdc-slider__input').max = 500
// const slider = new MDCSlider(document.querySelector('.mdc-slider'));
// document.querySelector('.mdc-slider__input').addEventListener("blur", function (){
//     console.log(slider.getValue())
// })
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];;
const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};
const config = {
    type: 'line',
    data: data,
};
const myChart = new Chart(document.getElementById('myChart'), config);
