<template>
<div class="ticketSection">
    <div class="TicketSerial">
        <h1>Ticket</h1>
        <span>Ticket: {{ ticket }}</span><br/>
        <span>Serial: {{ serial }}</span>
    </div>
    <div class="ticketData">
        <table>
            <thead>
                <tr>
                    <th class="padding2">Loteria</th>
                    <th class="padding2">Animalito</th>
                    <th class="padding2">Monto</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="registro in data" :key="registro.index">
                    <td class="padding2">{{ registro.loteria }}</td>
                    <td class="padding2">{{ registro.animalito }}</td>
                    <td class="padding2">{{  registro.monto }} Bs</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="totalSection">
        <div>
            <span class="totalText">Bs: {{ total.toFixed(2) }}</span>
        </div>
        <div class="optionButtons">
            <div class="btnOption">
                <i class="material-icons">print</i>
            </div>
            <div class="btnOption delete" @click="$emit('delete-all')">
                <i class="material-icons">delete_forever</i>
            </div>
            <div class="btnOption register" @click="$emit('delete-all')">
                <i class="material-icons">import_contacts</i>
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    props: ['data', 'total', 'ticket', 'serial']
}
</script>

<style scoped>
.ticketSection{
    border-right: 1px solid rgba(128, 128, 128, 0.274);
}

.TicketSerial{
    padding: 10px 0px 10px 20px;
    background-color: #613DC1;
    color: whitesmoke;
    font-weight: 700;
    height: 20vh;
}

.padding2{
    padding: 20px 0px 20px 30px;
}

.totalSection{
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.ticketData{
    height: 59vh;
    overflow-y: scroll;
}

.optionButtons{
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: center;
}

.btnOption{
    width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    background-color: #613DC1;
    border-radius: 5px;
    margin: 0px 5px 0px 5px;
    align-items: center;
    cursor: pointer;
}

.delete{
    background-color: rgb(212, 49, 49);
}

.register{
    background-color: rgb(206, 132, 48);
}

.btnOption i {
    font-size: 30px;
    color: white;
}

.totalText{
    font-size: 22px;
}
</style>