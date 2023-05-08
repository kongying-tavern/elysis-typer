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
$card-padding-large-x: 1.4rem;
$card-padding-large-y: 0.8rem;
$card-padding-medium-x: 1.15rem;
$card-padding-medium-y: 0.6rem;
$card-padding-small-x: 0.9rem;
$card-padding-small-y: 0.4rem;

$size-list: (
  (
    size: "large",
    paddingX: $card-padding-large-x,
    paddingY: $card-padding-large-y,
  ),
  (
    size: "medium",
    paddingX: $card-padding-medium-x,
    paddingY: $card-padding-medium-y,
  ),
  (
    size: "small",
    paddingX: $card-padding-small-x,
    paddingY: $card-padding-small-y,
  )
);

.card-wrapper {
  background-color: $color-white;
  border-radius: $card-corner-radius;

  // Sizes
  @each $size in $size-list {
    &.size-#{map.get($size, "size")} {
      padding: map.get($size, "paddingY") map.get($size, "paddingX");
    }
  }
}
</style>
