<script setup lang="ts">
import { ref, computed } from "vue";
import type { ComputedRef } from "vue";
import type { FontNode } from "@/shared";
import { useConfig, useFont } from "../../hooks";
import ButtonBase from "./ButtonBase.vue";
import ButtonDropdown from "./ButtonDropdown.vue";
import ImgFontFamily from "./assets/font-family.svg";

const { config } = useConfig();
const { fontOptions } = useFont();

const fontGroupKey = ref("genshin");

const fontGroupList: ComputedRef<FontNode[]> = computed(() => {
  let found = fontOptions.find((v) => v.id === fontGroupKey.value);
  return found?.children || [];
});

const changeFontGroup = (groupKey: string) => {
  fontGroupKey.value = groupKey;
};

const changeFont = (fontOpt: FontNode) => {
  config.value.font = fontOpt;
};
</script>

<template>
  <ButtonDropdown @command="changeFont">
    <ButtonBase :icon-src="ImgFontFamily" />
    <template #dropdown>
      <div class="flex flex-col">
        <div class="flex-none">
          <el-dropdown-menu>
            <el-dropdown-item
              v-for="font in fontGroupList"
              :key="font.tag"
              :command="font"
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
