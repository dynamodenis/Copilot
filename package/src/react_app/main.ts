import type { App } from "vue";
import CopilotAppVue from "./VueCopilotApp.vue";

export { CopilotAppVue as CopilotApp };

export default {
  install(app: App) {
    app.component("CopilotApp", CopilotAppVue);
  },
};
