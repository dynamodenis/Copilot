<template>
  <CopilotApp />
</template>

<script>
import { CopilotApp } from "../package/dist/orbiter-copilot";

export default {
  components: {
    CopilotApp,
  },
  props: {
    content: { type: Object, required: true },
  },
};
</script>
