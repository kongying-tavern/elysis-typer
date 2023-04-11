<script setup lang="ts">
import { computed } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import ButtonBase from "./ButtonBase.vue";
import ButtonDropdown from "./ButtonDropdown.vue";
import { useConfig } from "../../hooks";

const iconBase = import.meta.url;

enum iconPathEnum {
  text = "./assets/i-beam.svg",
  keyboard = "./assets/keyboard.svg",
}

interface inputMethodOption {
  icon: iconPathEnum;
  label: string;
  command: string;
}

const inputMethodOptions: inputMethodOption[] = [
  { icon: iconPathEnum.text, label: "文本输入", command: "text" },
  { icon: iconPathEnum.keyboard, label: "键盘输入", command: "keyboard" },
];

const { config } = useConfig();

const iconPath = computed(() => {
  return iconPathEnum[config.value.inputMethod] || "";
});

const changeInputMethod = (command: "text" | "keyboard" = "keyboard") => {
  config.value.inputMethod = command;
};
</script>

<template>
  <ButtonDropdown @command="changeInputMethod">
    <ButtonBase :icon-src="iconPath"></ButtonBase>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="option in inputMethodOptions"
          :key="option.command"
          :command="option.command"
        >
          <SvgIcon class="icon" :icon-base="iconBase" :icon-src="option.icon" />
          <span class="text">{{ option.label }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </ButtonDropdown>
</template>

<style scoped lang="scss">
.icon {
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
}

.text {
  margin-left: 1rem;
}
</style>
