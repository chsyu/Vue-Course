<template>
   <div>
      <input @input="onInput" />
      <br>
      {{inputText}}
   </div>
</template>

<script>
export default {
   name: 'InputBar',
   data() {
      return {
         inputText: null
      }
   },
   methods: {
      onInput: function(event) {
         this.inputText = event.target.value;
      }
   }
}
</script>

<style lang="postcss" scoped>

</style>
