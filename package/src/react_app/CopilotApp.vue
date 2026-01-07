<script setup lang="ts">
import CopilotApp from "@/react_app/components/CopilotApp";
import { applyPureReactInVue } from "veaury";

const CopilotAppVue = applyPureReactInVue(CopilotApp);
</script>

<template>
  <CopilotAppVue />
</template>
