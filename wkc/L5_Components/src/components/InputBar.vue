<template>
   <div>
      <input @input="onInput" />
   </div>
</template>

<script>
export default {
   name: 'InputBar',
   methods: {
      onInput: function(event) {
         console.log(event.target.value);
      }
   }
}
</script>

<style lang="postcss" scoped>

</style>
