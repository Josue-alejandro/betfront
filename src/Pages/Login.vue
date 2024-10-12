<template>
    <div class="fondo">
        <div class="logger">
            <div>
                <h1>Iniciar Sesion</h1>
            </div>
            <div>
                <div>
                    <Input text="Usuario" tipo="text"></Input>                  
                </div>
                <div>
                    <Input text="Contraseña" tipo="password"></Input>                  
                </div>
            </div>
            <div class="sendForm">
                <span>Ingresar</span>
                <Send></Send>
            </div>
        </div>
    </div>
</template>

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