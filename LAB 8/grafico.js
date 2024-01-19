

/**
 * @namespace Chart
 */
/*
import Chart from './core/core.controller';

import * as helpers from './helpers/index';
import _adapters from './core/core.adapters';
import Animation from './core/core.animation';
import animator from './core/core.animator';
import Animations from './core/core.animations';
import * as controllers from './controllers';
import DatasetController from './core/core.datasetController';
import Element from './core/core.element';
import * as elements from './elements/index';
import Interaction from './core/core.interaction';
import layouts from './core/core.layouts';
import * as platforms from './platform/index';
import * as plugins from './plugins';
import registry from './core/core.registry';
import Scale from './core/core.scale';
import * as scales from './scales';
import Ticks from './core/core.ticks';

// Register built-ins
Chart.register(controllers, scales, elements, plugins);

Chart.helpers = {...helpers};
Chart._adapters = _adapters;
Chart.Animation = Animation;
Chart.Animations = Animations;
Chart.animator = animator;
Chart.controllers = registry.controllers.items;
Chart.DatasetController = DatasetController;
Chart.Element = Element;
Chart.elements = elements;
Chart.Interaction = Interaction;
Chart.layouts = layouts;
Chart.platforms = platforms;
Chart.Scale = Scale;
Chart.Ticks = Ticks;

// Compatibility with ESM extensions
Object.assign(Chart, controllers, scales, elements, plugins, platforms);
Chart.Chart = Chart;

if (typeof window !== 'undefined') {
  window.Chart = Chart;
}

export default Chart;*/


(function () {
 
    window.fetch('http://127.0.0.1:5500/LAB%208/paises.json', {
    method: 'get'
    })
        .then((response) => response.json())
        .then((json) => renderChart(json))
        .catch((err) => console.log(err))

    function renderChart (dataset) {
        let ctx = document.getElementById('lifeChart')
        let barChart = new Chart(ctx, {
        type: 'bar',
        data: {
        labels: dataset.map((el) => el.country),
        datasets: [{
        label: 'Expectativa vida (años)',
        backgroundColor: 'rgba(63,191,63, 0.8)',
        borderColor: 'rgba(63,191,63, 1)',
        data: dataset.map((el) => el.lifeExpectancy)
        }]
    },

        options: {
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }

                }],

        xAxes: [{
            ticks: {
            autoSkip: false
            }
        }]

        }
    }

    })
    }
    }())
    