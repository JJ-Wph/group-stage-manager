<template>
    <div class="mainDiv">
        <h2>Goals per team</h2>
        <div class="chartDiv">
            <Doughnut :style="myStyles" :data="data" :options="options" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { ref, computed } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps({
    league: Object
})

const data = computed(() => {
    return {    
        labels: [
            props.league.teams[0].teamName,
            props.league.teams[1].teamName,
            props.league.teams[2].teamName,
            props.league.teams[3].teamName,
        ],
        datasets: [{
            backgroundColor: [
                '#053eaa', 
                '#a600ff', 
                '#00a87b', 
                '#a8002a',
            ],
            data: [
                props.league.teams[0].scoredGoalsTotal,
                props.league.teams[1].scoredGoalsTotal,
                props.league.teams[2].scoredGoalsTotal,
                props.league.teams[3].scoredGoalsTotal,
            ],
        }]
    }
})

const options = ref({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'bottom',
            boxWidth: 20,
            boxHeight: 40,
            fontColor: 'blue',
            labels: {
                boxWidth: 15,
                font: {
                    size: 12
                }
            }
        }
    }
})

const myStyles = () => {
    return {
        height: '50%',
        width: '50%',
    }
}

</script>


<style scoped>
.mainDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    grid-area: TheGoalsChart;
    background-color: #181f21;
  }

.chartDiv {
    display: flex;
    align-items: center;
    height: 90%;
    width: 90%
}
</style>


