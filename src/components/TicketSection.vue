<template>
<div class="ticketSection">
    <div class="TicketSerial">
        <h1>Ticket</h1>
        <span>Ticket: 000000</span><br/>
        <span>Serial: 000000</span>
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
        <h3>Bs: {{ total }}</h3>
    </div>
    
</div>
</template>

<script>
export default {
    props: ['data', 'total']
}
</script>

<style scoped>
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
}

.ticketData{
    height: 59vh;
    overflow-y: scroll;
}
</style>