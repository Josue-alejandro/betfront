<template>
    <div class="fondo">
        <div class="logger">
            <div>
                <h1>Iniciar Sesion</h1>
            </div>
            <div>
                <div class="row">
                    <div class="input-field s6">
                        <input type="text" class="validate" v-model="emailInput">
                        <label class="active" for="first_name2">email</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field s6">
                        <input type="password" class="validate" v-model="passwordInput">
                        <label class="active" for="first_name2">Contraseña</label>
                    </div>
                </div>
            </div>
            <div class="sendForm">
                <span>Ingresar</span>
                <Send @click="sendLogin"></Send>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export default{
    setup(){

        const emailInput = ref('');
        const passwordInput = ref('');
        const router = useRouter()

        /////// Funciones /////////////

        const sendLogin = async () => {
            const url = 'http://localhost:4000/users/login'
            axios.post(url, {email: emailInput.value, password: passwordInput.value})
            .then(response => {
                console.log('Respuesta:', response.data);
                if(response.data.message == 1){
                    router.push('/useradmin')
                    console.log(router)
                }else if (response.data.message == 3){
                    router.push('/dashboard')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

        return {
            emailInput,
            passwordInput,
            sendLogin
        }
    }
}
</script>

<style scoped>
.fondo{
    background-color:#613DC1 ;
    background: rgb(97,61,193);
    background: radial-gradient(circle, rgba(97,61,193,1) 47%, rgba(74,42,162,1) 100%); 
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logger{
    box-shadow: 1px 0px 13px 3px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 0px 13px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 0px 13px 3px rgba(0,0,0,0.75);
    border-radius: 10px;
    background-color: #F9F6EE;
    padding: 1em 2em 1em 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.sendForm{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 1em;
    padding-bottom: 2em;
}

h1{
    color: #2e2e2e;
}
</style>