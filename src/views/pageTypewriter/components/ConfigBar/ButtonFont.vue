<script setup lang="ts">
import { ref, computed } from "vue";
import type { ComputedRef } from "vue";
import type { FontGroupNode, FontNode } from "@/shared";
import { useConfig } from "../../hooks";
import ButtonBase from "./ButtonBase.vue";
import ButtonDropdown from "./ButtonDropdown.vue";
import ImgFontFamily from "./assets/font-family.svg";
import ImgLogoGenshin from "./assets/logo-genshin.svg";
import ImgLogoStarrail from "./assets/logo-starrail.svg";
import ImgLogoZzz from "./assets/logo-zzz.svg";

const fontOptions: FontGroupNode[] = [
  {
    id: "genshin",
    label: "原神",
    icon: ImgLogoGenshin,
    displayWidgets: ["icon"],
    children: [
      { tag: "font-teyvat-regular", label: "提瓦特文字", abbr: "提瓦特文" },
      { tag: "font-khaenriah-regular", label: "坎瑞亚文字", abbr: "坎瑞亚文" },
      {
        tag: "font-khaenriah-chasm",
        label: "坎瑞亚文字 - 层岩巨渊变体",
        abbr: "坎瑞亚文（层岩变体）",
      },
      { tag: "font-inazuma-regular", label: "稻妻文字", abbr: "稻妻文" },
      { tag: "font-sumeru-regular", label: "须弥文字", abbr: "须弥文" },
      { tag: "font-deshret-regular", label: "赤冠文字", abbr: "赤冠文" },
    ],
  },
  {
    id: "starrail",
    label: "崩坏·星穹铁道",
    icon: ImgLogoStarrail,
    displayWidgets: ["icon", "label"],
    children: [
      { tag: "font-starrail-regular", label: "常规" },
      { tag: "font-starrail-thin", label: "细体" },
      { tag: "font-starrail-bold", label: "粗体" },
    ],
  },
  {
    id: "zzz",
    label: "绝区零",
    icon: ImgLogoZzz,
    displayWidgets: ["icon"],
    children: [
      { tag: "font-zzz-a", label: "变体一" },
      { tag: "font-zzz-b", label: "变体二" },
    ],
  },
];

const { config } = useConfig();

const fontGroupKey = ref("genshin");

const fontGroupList: ComputedRef<FontNode[]> = computed(() => {
  let found = fontOptions.find((v) => v.id === fontGroupKey.value);
  return found?.children || [];
});

const changeFontGroup = (groupKey: string) => {
  fontGroupKey.value = groupKey;
};

const changeFont = (fontTag: string) => {
  config.value.font = fontTag;
};
</script>

<template>
  <ButtonDropdown @command="changeFont">
    <ButtonBase :icon-src="ImgFontFamily"></ButtonBase>
    <template #dropdown>
      <div class="flex flex-col">
        <div class="flex-none">
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="font in fontGroupList"
              :key="font.tag"
              :command="font.tag"
            >
              {{ font.abbr || font.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </div>
        <div class="group-area flex flex-row flex-none">
          <div
            v-for="fonts in fontOptions"
            :key="fonts.id"
            class="group-button cursor-pointer"
            :class="{ active: fontGroupKey === fonts.id }"
            @click="changeFontGroup(fonts.id)"
          >
            <img
              v-if="fonts.icon && fonts.displayWidgets.indexOf('icon') !== -1"
              class="label cursor-pointer"
              :src="fonts.icon"
            />
            <label
              v-else-if="fonts.displayWidgets.indexOf('label') !== -1"
              class="label cursor-pointer"
            >
              {{ fonts.label }}
            </label>
          </div>
        </div>
      </div>
    </template>
  </ButtonDropdown>
</template>

<style scoped lang="scss">
.group-area {
  flex-wrap: wrap;
  background-color: #eee;

  .group-button {
    padding: 0.5rem 0.7rem;
    .label {
      line-height: 2.2rem;
      height: 2.2rem;
      font-size: 1rem;
    }
    &.active {
      background-color: #dadada;
    }
  }
}
</style>
