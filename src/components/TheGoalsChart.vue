<template>
    <div class="chartDiv">
        <h1>Goals via Team</h1>
        <Doughnut :style="myStyles" :data="data" :options="options" />
    </div>
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { ref } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps({
    league: Object
})

const data = ref({
    labels: [
        props.league.teams[0].teamName,
        props.league.teams[1].teamName,
        props.league.teams[2].teamName,
        props.league.teams[3].teamName,
    ],
    datasets: [
        {
            backgroundColor: [
                '#41B883', 
                '#E46651', 
                '#00D8FF', 
                '#DD1B16'
            ],
            data: [
                props.league.teams[0].goalsScored,
                props.league.teams[1].goalsScored,
                props.league.teams[2].goalsScored,
                props.league.teams[3].goalsScored,
            ]
        }
    ]
})

const options = {
    responsive: true,
}


const myStyles = () => {
    return {
        height: '50%',
        width: '50%',
    }

}

</script>


<style scoped>
.chartDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    grid-area: 1 / 1 / 4 / 3;
    background-color: #181f21;
  }
</style>


