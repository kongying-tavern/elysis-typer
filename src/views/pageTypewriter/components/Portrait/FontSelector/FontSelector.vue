<script setup lang="ts">
import { ref, computed } from "vue";
import type { FontNode } from "@/shared";
import { useConfig, useFont, useFontSelector } from "../../../hooks";
import variables from "./variables.module.scss";
import CardBasic from "@/components/CardBasic/CardBasic.vue";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

const wrapperRef = ref<HTMLDivElement | null>(null);

const { config } = useConfig();
const { fontOptions } = useFont();
const { selectorVisible, closeSelector } = useFontSelector();

const dialogStyle = computed(() => {
  return {
    maxHeight: `calc(100vh - ${wrapperRef.value?.offsetTop}px - ${variables.dialog_span_bottom} - ${variables.dialog_padding_y} * 2)`,
  };
});

const changeFont = (fontOption: FontNode) => {
  config.value.font = fontOption;
  closeSelector();
};
</script>

<template>
  <div ref="wrapperRef" class="selector-wrapper">
    <CardBasic v-if="selectorVisible" class="selector-dialog">
      <div class="content scrollbar" :style="{ ...dialogStyle }">
        <div
          v-for="(fontGroup, groupIndex) in fontOptions"
          :key="groupIndex"
          class="group flex flex-row"
        >
          <SvgIcon
            class="icon flex-none"
            :color="variables.dialog_icon_color"
            :icon-src="fontGroup.icon!"
          />
          <div class="list">
            <div
              v-for="(fontItem, itemIndex) in fontGroup.children"
              :key="itemIndex"
              class="item cursor-pointer"
              :class="{ active: fontItem.tag === config.font.tag }"
              @click="changeFont(fontItem)"
            >
              {{ fontItem.label }}
            </div>
          </div>
        </div>
      </div>
    </CardBasic>
  </div>
</template>

<style scoped lang="scss">
@use "sass:math";
@use "@/assets/vars/color.scss" as *;
@use "@/assets/effects/scrollbar.scss";
@use "./dialog.scss" as *;
@include scrollbar.scrollbar;

$list-span: 4.44rem;
$list-line-height: 3.24rem;
$list-font-size: 1.6rem;
$list-logo-width: 9.44rem;

.selector-wrapper {
  position: relative;
}

.selector-dialog {
  position: absolute;
  width: 100%;
  z-index: 100000000;
  padding: $dialog-padding-y $dialog-padding-x !important;

  .content {
    overflow-y: auto;

    .group {
      column-gap: $list-span;
      align-items: start;

      & + .group {
        border-top: 0.1rem solid $color-gray-6;
      }

      .icon {
        width: $list-logo-width;
      }

      .list {
        .item {
          font-size: $list-font-size;
          line-height: $list-line-height;
          color: $color-gray-2;
          &.active {
            color: $color-primary-1;
          }
        }
      }
    }
  }
}
</style>
