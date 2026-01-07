<template>
  <CopilotApp />
</template>

<script>
import "../package/dist/orbiter-copilot.css";
import { CopilotApp } from "../package/dist/orbiter-copilot.umd.cjs";

export default {
  components: {
    CopilotApp,
  },
  props: {
    content: { type: Object, required: true },
  },
};
</script>
