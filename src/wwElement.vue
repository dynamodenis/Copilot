<template>
  <CopilotApp :token="token" :dataSource="dataSource" :baseUrl="baseUrl" />
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
