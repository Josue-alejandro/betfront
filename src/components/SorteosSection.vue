<template>
    <div>
        <div>
            <h1>Sorteos</h1>
        </div>
        <div>
            <div class="input-field col s6">
                <i class="material-icons prefix">search</i>
                <input id="icon_prefix" type="text" class="validate">
                <label for="icon_prefix">Buscar...</label>
            </div>
        </div>
        <div>
            <div class="card item" v-for="opcion in opciones" :key="opcion.index">
                <div>
                    <p>
                        <label>
                            <input type="checkbox" class="filled-in"/>
                            <span>{{ opcion.nombre }}</span>
                        </label>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: ['opciones']
}
</script>

<style scoped>
.item{
    padding: 0.1em;
    margin: 15px 15px 15px 0px;
}

span{
    margin-left: 15px;
}
</style>