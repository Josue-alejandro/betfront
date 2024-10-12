<template>
    <div class="workspace">
        <div class="selection">
            <div>
                <div>
                    <div class="input-field col s6 search">
                        <i class="material-icons prefix">search</i>
                        <input id="icon_prefix" type="text" class="validate">
                        <label for="icon_prefix">Buscar...</label>
                    </div>
                </div>
                <div class="tags">
                    <div class="card round tag" v-for="tag in tags" :key="tag.index">
                        <i class="material-icons">{{ tag.icon }}</i>
                        {{ tag.nombre }}
                    </div>
                </div>
                <ul>
                    <li class="card item" v-for="user in usersList" :key="user.index">
                        <p>
                            <label>
                                <input type="checkbox" class="filled-in" checked="checked" />
                                <span></span>
                            </label>
                        </p>
                        <span>{{ user.nombre }} - {{ user.rol }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="opciones">
            <div class="card opcionesCard">
                <a class="waves-effect waves-light btn #9575cd deep-purple lighten-2"><i class="material-icons left">add</i>Nuevo</a>
                <a class="waves-effect waves-light btn #e53935 red darken-1"><i class="material-icons left">delete</i>Eliminar</a>
                <a class="waves-effect waves-light btn #f9a825 yellow darken-3"><i class="material-icons left">edit</i>Modificar</a>
            </div>
            <div class="card userCard">
                <div class="user">
                    <i class="material-icons profilePic">account_circle</i>
                    <div class="userData">
                        <span class="userName">Deku</span>
                        <span class="userSubt">Tecnico</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default{
    setup(){

        const usersList = ref([]);
        const tags = ref([
            {
                nombre:'Tecnico',
                icon: 'build'
            },
            {
                nombre: 'Banca',
                icon: 'account_balance'
            },
            {
                nombre: 'Banquero',
                icon: 'account_box'
            }])

        usersList.value = [
            {
                nombre: 'Deku',
                rol: 'Tecnico',
            },
            {
                nombre: 'Tevallier',
                rol: 'Tecnico',
            }
        ]

        return{
            usersList,
            tags
        }
    }
}
</script>

<style scoped>
.workspace{
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    padding-top: 1em;
    background-color: #EDEADE;
}

.selection{
    width: 400px;
}

.opciones{
    width: 600px;
}

.opcionesCard{
    padding: 10px;
    display: flex;
    flex-direction: row;
}

.opcionesCard a{
    margin-right: 10px;
}

.item{
    max-width: 350px;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
}

li {
    list-style: none;
}

.search{
    max-width: 350px;
}

.tags{
    display: flex;
    flex-direction: row;
}

.tag{
    padding: 0.70em;
    border-radius: 10px;
    margin-right: 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}

.tag i {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}

.userCard{
    padding: 10px;
}

.profilePic{
    font-size: 120px;
}

.userData{
    display: flex;
    flex-direction: column;
}

.user{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.userName{
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 25px;
}

.userSubt{
    color: rgb(95, 95, 95);
}
</style>