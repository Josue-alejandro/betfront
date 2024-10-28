<template>
    <div class="workspace">
        <TicketSection 
        class="ticketSection"
        :data="ticketData"
        :total="totalPrice"
        :serial="serialUnico"
        :ticket="ticketNum"
        @delete-all="deleteAll"></TicketSection>
        <SelectionSection 
        :animales="animales"
        :montoInput="montoInput"
        @change-monto="changeMonto"
        @add-animal="addAnimal"
        class="ticketSelection"></SelectionSection>
        <SorteosSection 
        :opciones="sorteos"
        @select-sorteo="selectSorteo"
        class="sorteosSection"></SorteosSection>
    </div>
</template>

<script>
import TicketSection from '../components/TicketSection.vue';
import SelectionSection from '../components/SelectionSection.vue';
import { ref, computed, onMounted } from 'vue';
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
        const sorteosSelected = ref([])
        const montoInput = ref('0.00')
        const serialUnico = ref(0)
        const ticketNum = ref(0)

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

        function generarSerialUnico() {
            let serial = '';
            for (let i = 0; i < 10; i++) {
                // Genera un dígito aleatorio entre 0 y 9
                serial += Math.floor(Math.random() * 10);
            }
            return serial;
        }

        const selectSorteo = (id) => {
            const index = sorteosSelected.value.indexOf(id); // Buscar el índice del nombre en el array
            
            if (index > -1) {
                // Si el nombre ya está, lo quitamos
                sorteosSelected.value.splice(index, 1);
            } else {
                // Si no está, lo agregamos
                sorteosSelected.value.push(id);
            }

            console.log(montoInput.value)
        }

        const changeMonto = (monto) => {
            montoInput.value = parseFloat(monto)
        }

        const addAnimal = (animal) => {
            if(sorteosSelected.value.length > 0){
                sorteosSelected.value.forEach(sorteo => {
                    const dato = {
                        loteria: sorteo,
                        animalito: animal,
                        monto: montoInput.value
                    }

                    ticketData.value.push(dato)
                })
            }
        }

        const deleteAll = () => {
            ticketData.value = []
        }

        onMounted(() => {
            serialUnico.value = generarSerialUnico()
            ticketNum.value = generarSerialUnico()
        })

        return{
            ticketData,
            totalPrice,
            animales,
            sorteos,
            selectSorteo,
            montoInput,
            changeMonto,
            addAnimal,
            deleteAll,
            serialUnico,
            ticketNum,
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