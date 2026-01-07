<template>
  <CopilotApp />
</template>

<script>
import { CopilotApp } from "../package/dist/orbiter-copilot";
import "../package/dist/orbiter-copilot.css";

export default {
  components: {
    CopilotApp,
  },

  props: {
    content: { type: Object, required: true },
  },
};
</script>
