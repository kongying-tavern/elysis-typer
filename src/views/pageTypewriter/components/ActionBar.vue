<script setup lang="ts">
import ButtonClean from "./ConfigBar/ButtonClean.vue";
import ButtonInputMethod from "./ConfigBar/ButtonInputMethod.vue";
import ButtonKeyTransform from "./ConfigBar/ButtonKeyTransform.vue";
import ButtonFont from "./ConfigBar/ButtonFont.vue";
</script>

<template>
  <div class="flex flex-row space-x-1">
    <ButtonClean />
    <ButtonInputMethod />
    <ButtonKeyTransform />
    <ButtonFont />
  </div>
</template>
