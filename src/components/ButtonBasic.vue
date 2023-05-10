<script setup lang="ts">
type ButtonSize = "large" | "medium" | "small";
type ButtonType = "default" | "primary";

interface Props {
  clickable?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
}

const emits = defineEmits<{
  (e: "click"): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  clickable: true,
  size: "medium",
  type: "default",
});

const onClick = () => {
  if (props.clickable) {
    emits("click");
  }
};
</script>

<template>
  <div
    class="btn-wrapper box-shadow"
    :class="{
      'cursor-pointer': clickable,
      [`size-${props.size}`]: true,
      [`type-${props.type}`]: true,
    }"
    @click="onClick()"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "sass:map";
@use "@/assets/vars/color.scss" as *;
@use "@/assets/effects/shadow.scss";
@include shadow.box-shadow;

$btn-corner-radius: 0.8rem;
$btn-line-height: 1;
$btn-font-size: 1.6rem;
$btn-padding-large: 1.2rem;
$btn-padding-medium: 1rem;
$btn-padding-small: 0.8rem;

$size-list: (
  (
    size: "large",
    padding: $btn-padding-large,
  ),
  (
    size: "medium",
    padding: $btn-padding-medium,
  ),
  (
    size: "small",
    padding: $btn-padding-small,
  )
);
$color-list: (
  (
    color: "default",
    fill: $color-white,
    text: $color-gray-2,
  ),
  (
    color: "primary",
    fill: $color-primary-1,
    text: $color-white,
  )
);

.btn-wrapper {
  display: inline-block;
  font-size: $btn-font-size;
  line-height: $btn-line-height;
  padding: $btn-padding-small;
  text-align: center;
  border-radius: $btn-corner-radius;

  // Sizes
  @each $size in $size-list {
    &.size-#{map.get($size, "size")} {
      padding: map.get($size, "padding");
    }
  }

  // Colors
  @each $color in $color-list {
    &.type-#{map.get($color, "color")} {
      background-color: map.get($color, "fill");
      color: map.get($color, "text");
    }
  }
}
</style>
