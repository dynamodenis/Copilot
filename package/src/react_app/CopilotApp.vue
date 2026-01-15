<script setup lang="ts">
import CopilotApp from "@/react_app/components/CopilotApp";
import { applyPureReactInVue } from "veaury";

const props = defineProps<{
  token?: string;
  dataSource?: string;
  baseUrl?: string;
}>();

const CopilotAppVue = applyPureReactInVue(CopilotApp);
</script>

<template>
  <CopilotAppVue
    :token="token"
    :dataSource="dataSource"
    :baseUrl="baseUrl"
    style="height: 100%; width: 100%"
  />
</template>
