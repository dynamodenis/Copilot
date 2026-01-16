<script setup lang="ts">
import { computed } from "vue";
import CopilotApp from "@/react_app/components/CopilotApp";
import { applyPureReactInVue } from "veaury";

const props = defineProps<{
  token?: string;
  dataSource?: string;
  baseUrl?: string;
  user_id: number | string;
  copilot_llm_endpoint: string;
  user_name: string;
}>();

// Convert user_id to number if it comes as a string
const userId = computed(() => {
  if (typeof props.user_id === "string") {
    return Number(props.user_id);
  }
  return props.user_id;
});

const CopilotAppVue = applyPureReactInVue(CopilotApp);
</script>

<template>
  <CopilotAppVue
    :token="token"
    :dataSource="dataSource"
    :baseUrl="baseUrl"
    :user_id="userId" 
    :copilot_llm_endpoint="copilot_llm_endpoint" 
    :user_name="user_name"
    style="height: 100%; width: 100%"
  />
</template>
