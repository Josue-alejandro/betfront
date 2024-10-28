<template>
    <div class="workspace">
        <div class="selection">
            <div>
                <div>
                    <div class="input-field col s6 search">
                        <i class="material-icons prefix">search</i>
                        <input 
                        id="icon_prefix" 
                        type="text" 
                        v-model="search" 
                        class="validate"
                        @input="typeSearch">
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
                    <li 
                    class="card item" 
                    :style="{backgroundColor: userSelected === user.id ? '#613DC1' : 'white', color: userSelected === user.id ? 'white' : 'black'}" 
                    v-for="user in showList" 
                    :key="user.index"
                    @click="selectThisUser(user.id, user)">
                        <span>{{ user.name }} - {{ role(user.role_id) }}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="opciones">
            <div class="card opcionesCard">
                <button 
                ref="addButton"
                class="waves-effect waves-light btn #9575cd deep-purple lighten-2"><i class="material-icons left">add</i>Nuevo</button>
                <button 
                ref="delButton"
                disabled
                @click="deleteUser"
                class="waves-effect waves-light btn #e53935 red darken-1"><i class="material-icons left">delete</i>Eliminar</button>
                <button 
                ref="editButton"
                disabled
                @click="editUser"
                class="waves-effect waves-light btn #f9a825 yellow darken-3"><i class="material-icons left">edit</i>Modificar</button>
            </div>
            <div class="card userCard" v-if="userSelectedData.length !== 0">
                <div class="user">
                    <i class="material-icons profilePic">account_circle</i>
                    <div class="userData">
                        <span class="userName">{{ userSelectedData.name }}</span>
                        <span class="userSubt">{{ role(userSelectedData.role_id) }}</span>
                    </div>
                </div>
                <div class="userInfo">
                    <div class="datos">
                        <div class="dato">
                            <i class="material-icons">email</i>
                            <span><b>Correo:</b> {{ userSelectedData.email }}</span>
                        </div>
                        <div class="dato">
                            <i class="material-icons">call</i>
                            <span><b>Telefono:</b> {{ userSelectedData.phone_number }}</span>
                        </div>
                    </div>
                    <div class="totalCorner" v-if="userSelectedData.role_id === 3">
                        <LineChart class="Chart":chartData="testData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { LineChart } from 'vue-chart-3';
import { Chart, Legend, registerables } from 'chart.js';
import plugin from 'primevue/config';

Chart.register(...registerables);

const URL = 'http://localhost:4000'

export default{
    components:{
        LineChart
    },
    setup(){

        const testData = {
            labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4',],
            options: {
                legend:{
                    display: false
                }
            },
            datasets: [
                {
                    data: [300, 420, 260, 170],
                    backgroundColor: ['#613DC1'],
                },
            ],
            
        };

        const usersList = ref([]);
        const showList = ref([])
        const search = ref('')
        const userSelected = ref();
        const addButton = ref(null);
        const delButton = ref(null);
        const editButton = ref(null)
        const userSelectedData = ref([]);
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

        const role = (val) => {
            switch (val) {
                case 1:
                    return 'Tecnico'
                    break;
                case 2:
                    return 'Banquero'
                    break;
                case 3:
                    return 'Banca'
                    break;
                }
        }

        /////// Funciones //////////////////////

        const getData = async () => {
            const response = await axios.get(`${URL}/users`);
            const usersData = response.data
            
            usersList.value = usersData
            showList.value = usersList.value
            search.value = ""
        }

        const typeSearch = (array) => {
            // Convertir el texto de búsqueda a minúsculas para una búsqueda no sensible a mayúsculas
            const comparacion = search.value.toLowerCase();
            
            const result = usersList.value.filter(item => {
                // Suponiendo que los objetos tienen una propiedad 'nombre' que queremos buscar
                return item.name.toLowerCase().includes(comparacion);
            });

            showList.value = result
        }

        const selectThisUser = (user, data) => {
            if (user == userSelected.value){
                userSelected.value = null
                delButton.value.disabled = true
                editButton.value.disabled = true
            }else{
                userSelected.value = user
                userSelectedData.value = data
                delButton.value.disabled = false
                editButton.value.disabled = false
            }
        }

        const deleteUser = async (id) => {
            const url = `${URL}/users/delete`
            
            const response = await axios.delete(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: { id: userSelected.value }, // El objeto JSON que se enviará en el cuerpo de la solicitud
            })

            console.log(response)
        }

        const editUser = async (id) => {
            alert('hola')
        }

        onMounted( async () => {
            await getData()
        })

        return{
            showList,
            tags,
            role,
            search,
            typeSearch,
            selectThisUser,
            userSelected,
            userSelectedData,
            addButton,
            delButton,
            editButton,
            editUser,
            deleteUser,
            testData
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

.totalCorner{
    margin: 20px;
    height: 230px;
}

.opciones{
    width: 600px;
}

.opcionesCard{
    padding: 10px;
    display: flex;
    flex-direction: row;
}

.opcionesCard button{
    margin-right: 10px;
}

.item{
    max-width: 350px;
    padding: 1em;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    padding-top: 1.5em;
    padding-bottom: 1.5em;
}

li {
    list-style: none;
}

ul{
    height: 60vh;
    overflow-y: scroll;
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

.dato{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 25px;
}

.dato i {
    margin-right: 10px;
}

.Chart{
    height: 200px;
}
</style>