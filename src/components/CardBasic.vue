<script setup lang="ts">
type CardSize = "large" | "medium" | "small";

interface Props {
  size?: CardSize;
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
});
</script>

<template>
  <div
    class="card-wrapper box-shadow"
    :class="{
      [`size-${props.size}`]: true,
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/vars/color.scss" as *;
@use "@/assets/effects/shadow.scss";
@include shadow.box-shadow;

$card-corner-radius: 0.8rem;
$card-padding-large: 1.4rem;
$card-padding-medium: 1.15rem;
$card-padding-small: 0.9rem;

$size-list: (
  (
    size: "large",
    padding: $card-padding-large,
  ),
  (
    size: "medium",
    padding: $card-padding-medium,
  ),
  (
    size: "small",
    padding: $card-padding-small,
  )
);

.card-wrapper {
  background-color: $color-white;
  border-radius: $card-corner-radius;

  // Sizes
  @each $size in $size-list {
    &.size-#{map.get($size, "size")} {
      padding: map.get($size, "padding");
    }
  }
}
</style>
