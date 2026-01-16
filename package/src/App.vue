<script setup lang="ts">
import CopilotApp from "@/react_app/CopilotApp.vue";

const baseUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;
const user_id = import.meta.env.VITE_USER_ID;
const dataSource = import.meta.env.VITE_DATA_SOURCE;
const copilot_llm_endpoint = import.meta.env.VITE_LLM_ENDPOINT;
const user_name = import.meta.env.VITE_USER_NAME;

</script>

<template>
  <CopilotApp :token="token" :dataSource="dataSource" :baseUrl="baseUrl" :user_id="user_id" :copilot_llm_endpoint="copilot_llm_endpoint" :user_name="user_name"  />
</template>
