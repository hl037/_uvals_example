
<style scoped lang="stylus">

@import './test.styl'

div
  margin: testVal

</style>

<template>
  <div>
    The margin value is : {{V.testVal}}
  </div>
</template>

<script setup lang="ts">

import V from './test.styl?strict?uvals'

</script>

