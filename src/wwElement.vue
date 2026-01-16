<template>
  <CopilotApp :token="content.token" :dataSource="content.dataSource" :baseUrl="content.baseUrl" :user_id="content.user_id" :copilot_llm_endpoint="content.copilot_llm_endpoint" />
</template>

<script>
import { CopilotApp } from "../package/dist/orbiter-copilot";
import "../package/dist/orbiter-copilot.css";

export default {
  name: "OrbiterCopilot",

  components: {
    CopilotApp,
  },
  props: {
    content: { type: Object, required: true },
  },
};
</script>
