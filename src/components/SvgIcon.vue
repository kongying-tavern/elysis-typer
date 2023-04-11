<script setup lang="ts">
import { computed, withDefaults } from "vue";

interface Props {
  iconBase?: string;
  iconSrc: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconBase: import.meta.url,
  iconSrc: "",
});

const iconUrl = computed(() => new URL(props.iconSrc, props.iconBase).href);
</script>

<template>
  <img :src="iconUrl" />
</template>
