<template>
  <div class="wrapper">
    <span class="name">{{name}}</span>
    <span class="title">{{name}}</span>
    <button @click="add">累加</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: 'hello',
        clickNum: 0
      };
    },
    mounted () {
    },
    methods: {
      add() {
        this.clickNum++;
      }
    }
  }
</script>
