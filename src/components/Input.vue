<template>
<label class="label">
  <span class="icon">
  </span>
  <input
    :type=tipo
    class="input"
    :placeholder=text
    autocomplete="off"
  />
</label>
</template>

<script>
export default {
    props: ['text', 'tipo']
}
</script>

<style scoped>
.container {
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.label {
    margin-top: 25px;
    margin-bottom: 25px;
  position: relative;
  display: block;
  width: 250px;
  display: flex;
  border-radius: 6px;
  border: 2px solid #5f5577;
  padding: 15px 8px 15px 10px;
  text-align: left;

  .icon {
    position: absolute;
    top: 53%;
    right: 0;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    color: #c5c5c5;
  }

  .input {
    background-color: transparent;
    outline: none;
    border: none;
    color: #3d3d3d;
    font-size: 14px;
  }
}

</style>