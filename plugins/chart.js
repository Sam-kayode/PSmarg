import Vue from 'vue'
import { Bar, Doughnut} from 'vue-chartjs'



Vue.component('BarChart', {
	extends: Bar,
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options)
	}
})

Vue.component('Doughnut', {
	extends: Doughnut,
	props: ['data', 'options'],
	mounted () {
		this.renderChart(this.data, this.options)
	}
})