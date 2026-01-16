export default {
  editor: {
    label: {
      en: "Orbiter Copilot",
    },
  },

  properties: {
    token: {
      label: { en: "Token" },
      type: "Text",
      defaultValue: "",
      bindable: true,
    },
    baseUrl: {
      label: { en: "Base URL" },
      type: "Text",
      defaultValue: "https://xh2o-yths-38lt.n7c.xano.io/api",
      bindable: true,
    },
    dataSource: {
      label: { en: "Data Source" },
      type: "Text",
      defaultValue: "staging",
      bindable: true,
    },
    user_id: {
      label: { en: "User ID" },
      type: "Number",
      defaultValue: 3,
      bindable: true,
    },
    copilot_llm_endpoint: {
      label: { en: "Copilot LLM Endpoint" },
      type: "Text",
      defaultValue: "http://localhost:3001",
      bindable: true,
    },
  },
};
