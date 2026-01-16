<script setup lang="ts">
import CopilotApp from "@/react_app/components/CopilotApp";
import { applyPureReactInVue } from "veaury";

const props = defineProps<{
  token?: string;
  dataSource?: string;
  baseUrl?: string;
  user_id:number
  copilot_llm_endpoint:string
  user_name:string
}>();

const CopilotAppVue = applyPureReactInVue(CopilotApp);
</script>

<template>
  <CopilotAppVue
    :token="token"
    :dataSource="dataSource"
    :baseUrl="baseUrl"
    :user_id="user_id" 
    :copilot_llm_endpoint="copilot_llm_endpoint" 
    :user_name="user_name"
    style="height: 100%; width: 100%"
  />
</template>
