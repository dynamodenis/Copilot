import type { App } from "vue";
import CopilotApp from "./CopilotApp.vue";

export { CopilotApp };

export default {
  install(app: App) {
    app.component("CopilotApp", CopilotApp);
  },
};
