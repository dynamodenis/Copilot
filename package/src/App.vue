<script setup lang="ts">
import CopilotApp from "@/react_app/CopilotApp.vue";

const baseUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;
const dataSource = import.meta.env.VITE_DATA_SOURCE;
</script>

<template>
  <CopilotApp :token="token" :dataSource="dataSource" :baseUrl="baseUrl" />
</template>
