<script setup lang="ts">
import { computed } from "vue";
import type { ComputedRef } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import ButtonBase from "./ButtonBase.vue";
import ButtonDropdown from "./ButtonDropdown.vue";
import type { ConfigInputMethod } from "@/shared";
import { ConfigInputMethodEnum } from "@/shared";
import { useConfig } from "../../hooks";
import SvgIBeam from "./assets/i-beam.svg";
import SvgKeyboard from "./assets/keyboard.svg";

interface inputMethodOption {
  icon: string;
  label: string;
  command: string;
}

const inputMethodOptions: inputMethodOption[] = [
  {
    icon: SvgIBeam,
    label: "文本输入",
    command: ConfigInputMethodEnum.TEXT,
  },
  {
    icon: SvgKeyboard,
    label: "键盘输入",
    command: ConfigInputMethodEnum.KEYBOARD,
  },
];

const { config } = useConfig();

const iconPath: ComputedRef<string> = computed(() => {
  const fullPath =
    {
      [ConfigInputMethodEnum.TEXT]: SvgIBeam,
      [ConfigInputMethodEnum.KEYBOARD]: SvgKeyboard,
    }[config.value.inputMethod] || "";
  return fullPath as string;
});

const changeInputMethod = (
  command: ConfigInputMethod = ConfigInputMethodEnum.KEYBOARD
) => {
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
          <SvgIcon class="icon" :icon-src="option.icon" />
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
