<script setup lang="ts">
import { ref, computed } from "vue";
import type { FontNode } from "@/shared";
import { useConfig, useFont, useFontSelector } from "../../../hooks";
import variables from "./variables.module.scss";
import CardBasic from "@/components/CardBasic/CardBasic.vue";
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

const wrapperRef = ref<HTMLDivElement | null>(null);

const { config } = useConfig();
const { fontOptions, findFontGroup } = useFont();
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

const selectedFontGroup = computed(() => findFontGroup(config.value.font.tag));
</script>

<template>
  <div ref="wrapperRef" class="selector-wrapper">
    <CardBasic v-if="selectorVisible" class="selector-dialog">
      <div class="content scrollbar flex flex-col" :style="{ ...dialogStyle }">
        <div
          v-for="(fontGroup, groupIndex) in fontOptions"
          :key="groupIndex"
          class="group flex flex-row"
          :class="{ active: fontGroup.id === selectedFontGroup }"
        >
          <div class="icon flex-none">
            <SvgIcon
              class="icon-img"
              :color="variables.dialog_icon_color"
              :icon-src="fontGroup.icon!"
            />
          </div>
          <div class="separator flex-none">&nbsp;</div>
          <div class="list flex-auto">
            <div
              v-for="(fontItem, itemIndex) in fontGroup.children"
              :key="itemIndex"
              class="item cursor-pointer"
              :class="{ active: fontItem.tag === config.font.tag }"
              @click="changeFont(fontItem)"
            >
              {{ fontItem.abbr || fontItem.label }}
            </div>
          </div>
        </div>
      </div>
    </CardBasic>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/vars/color.scss" as *;
@use "@/assets/effects/scrollbar.scss";
@use "./dialog.scss" as *;
@include scrollbar.scrollbar;

$list-gap: 3.2rem;
$list-logo-space: 14rem;
$list-logo-width: 7.2rem;
$list-separator-width: 0.4rem;
$list-item-line-height: 1;
$list-item-font-size: 1.6rem;
$list-item-gap: 1.44rem;
$list-item-indent: 1.6rem;

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
    row-gap: $list-gap;

    .group {
      align-items: center;

      &.active {
        .separator {
          background-color: $color-primary-1;
        }
      }

      .icon {
        width: $list-logo-space;
        text-align: center;
        .icon-img {
          width: $list-logo-width;
        }
      }
      .separator {
        width: $list-separator-width;
        align-self: stretch;
        background-color: $color-gray-7;
      }

      .list {
        padding-left: $list-item-indent;
        .item {
          font-size: $list-item-font-size;
          line-height: $list-item-line-height;
          overflow: hidden;
          word-break: break-all;
          color: $color-gray-2;
          & + .item {
            margin-top: $list-item-gap;
          }
          &.active {
            color: $color-primary-1;
          }
        }
      }
    }
  }
}
</style>
