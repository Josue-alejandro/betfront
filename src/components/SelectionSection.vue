<template>
    <div class="selectionMenu">
        <div class="topInputs">
            <div class="input-field col s6 monto">
                <input value="0.00" type="text" v-model="monto" @input="$emit('change-monto', monto)">
                <label class="active" for="first_name2">Monto</label>
            </div>
        </div>
        <div class="tarjetasContainer">
            <div class="card cardAnimal" v-for="animal in animales" :key="animal.index">
                <div class="card-image">
                    <img :src="animal.img" width="160px" height="90px">
                    <a @click="$emit('add-animal', animal.nombre)" class="btn-floating halfway-fab waves-effect waves-light #5e35b1 deep-purple darken-1"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                    <span>{{ animal.nombre }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { onMounted } from 'vue';

export default {
    props: ['animales', 'montoInput'],
    setup(props){

        console.log(props.montoInput)
        const monto = ref(0)

        onMounted(() => {
            monto.value = props.montoInput
        })
        
        return {
            monto
        };
    }
}

</script>

<style scoped>
.selectionMenu{
    padding: 20px;
}

.topInputs{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 2em;
}

.numero{
    width: 50px;
    margin-right: 50px;
}

.monto{
    width: 220px;
}

.cardAnimal{
    width: 160px;
    margin: 10px;
}

.tarjetasContainer{
    display: flex;
    flex-wrap: wrap;
}
</style>