<template>
    <div class="workspace">
        <TicketSection 
        class="ticketSection"
        :data="ticketData"
        :total="totalPrice"></TicketSection>
        <SelectionSection 
        :animales="animales"
        class="ticketSelection"></SelectionSection>
        <SorteosSection 
        :opciones="sorteos"
        class="sorteosSection"></SorteosSection>
    </div>
</template>

<script>
import TicketSection from '../components/TicketSection.vue';
import SelectionSection from '../components/SelectionSection.vue';
import { ref, computed } from 'vue';
import SorteosSection from '../components/SorteosSection.vue';

export default {
    components:{
        TicketSection,
        SelectionSection,
        SorteosSection
    },
    setup(){

        const ticketData = ref([])
        const animales = ref([])
        const sorteos = ref([])

        ticketData.value = [
            {
                loteria: 'anigranja',
                animalito: 'Tigre',
                monto: 30.43
            },
            {
                loteria: 'anigranja2',
                animalito: 'Conejo',
                monto: 20.43
            },
            {
                loteria: 'anigranja2',
                animalito: 'Conejo',
                monto: 20.43
            },
            {
                loteria: 'anigranja2',
                animalito: 'Conejo',
                monto: 20.43
            },
            {
                loteria: 'anigranja2',
                animalito: 'Conejo',
                monto: 20.43
            },
            {
                loteria: 'anigranja2',
                animalito: 'Conejo',
                monto: 20.43
            }
        ]

        animales.value = [{
            nombre: 'Conejo - 1',
            img: 'https://w.wallhaven.cc/full/gj/wallhaven-gj911q.jpg'
        },
        {
            nombre: 'Tigre - 2',
            img: 'https://w.wallhaven.cc/full/zx/wallhaven-zx8r2v.jpg'
        },
        {
            nombre: 'Cordero - 3',
            img: 'https://cdn.pixabay.com/photo/2014/03/22/10/17/lamb-292512_960_720.jpg'
        },
        {
            nombre: 'Leon - 4',
            img: 'https://cdn.pixabay.com/photo/2019/11/30/19/02/animal-4663933_960_720.jpg'
        },
    ]

        sorteos.value = [{
            nombre: 'Granja Millonaria'
        },
        {
            nombre: 'Anigranja2'
        },
        {
            nombre: 'Granjazo'
        },
        {
            nombre: 'Granja Millonaria'
        },
        {
            nombre: 'Anigranja2'
        },
        {
            nombre: 'Granjazo'
        }
    ]

        const totalPrice = computed(() => {
            let total = 0
            ticketData.value.forEach(val => {
                total = val.monto + total
            })
            return total
        })

        return{
            ticketData,
            totalPrice,
            animales,
            sorteos
        }
    }
}

</script>

<style scoped>
.ticketSection{
    width: 40vw;
    height: 100vh;
}

.ticketSelection{
    width: 31vw;
    height: 100vh;
}

.workspace{
    display: flex;
    flex-direction: row;
}

.sorteosSection{
    width: 29vw;
    height: 100vh;
}
</style>