import type { LeverageLoopPerson, SuggestionRequest } from "@/react_app/store/leverageLoopsStore";

// Action type constants for tracking selected buttons
export const LEVERAGE_LOOP_ACTIONS = {
  SUGGEST_PEOPLE: "create_suggestion_request",
  HELP_WITH_TASK: "add_assistant_message",
} as const;

export const leverageLoopInitialSectionContentPrompt = (person: LeverageLoopPerson, selectedActionType?: string | null) => {
  return {
    component: {
      component: "Card",
      props: {
        children: [
          {
            component: "ButtonGroup",
            props: {
              variant: "vertical",
              children: [
                {
                  component: "Button",
                  props: {
                    children: "Suggest people to introduce to " + person.full_name,
                    variant: "secondary",
                    selected: selectedActionType === LEVERAGE_LOOP_ACTIONS.SUGGEST_PEOPLE,
                    action: {
                      type: "create_suggestion_request",
                      props: {
                        masterPersonId: person.master_person_id,
                        personName: person.full_name,
                        personTitle: person.master_person?.current_title || 'a professional',
                        companyName: person.master_person?.master_company?.company_name || 'their company',
                        chatKey: person.full_name,
                        prompt: `Please suggest people from my network that I should introduce to ${person.full_name}. Consider their role as ${person.master_person?.current_title || 'a professional'} at ${person.master_person?.master_company?.company_name || 'their company'} and identify connections who could provide mutual value.`
                      }
                    }
                  }
                },
                {
                  component: "Button",
                  props: {
                    children: "Help " + person.full_name + " with a specific task",
                    variant: "secondary",
                    selected: selectedActionType === LEVERAGE_LOOP_ACTIONS.HELP_WITH_TASK,
                    action: {
                      type: "add_assistant_message",
                      props: {
                        chatKey: person.full_name,
                        componentData: {
                          component: {
                            component: "Card",
                            props: {
                              children: [
                                {
                                  component: "TextContent",
                                  props: {
                                    textMarkdown: "Tell me what kind of assistance you'd like to provide to **" + person.full_name + "**. For example:\n\n- Make an introduction to someone in your network\n- Share relevant resources or information\n- Offer advice or expertise in a specific area\n- Connect them with an opportunity\n\nType your response below and I'll help you plan the best approach."
                                  }
                                }
                              ]
                            }
                          },
                          error: null
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    },
    error: null
  };

};


export const suggestionRequestInitialSectionContentPrompt = (suggestionRequest: SuggestionRequest) => {
  return {
    component: {
      component: "Card",
      props: {
        children: [
          {
            component: "Header",
            props: {
              title: `${suggestionRequest.request_header_title}`,
            }
          },
          {
            component: "TextContent",
            props: {
              textMarkdown: `${suggestionRequest.request_context || ""}`
            }
          },
          // {
          //   component: "ButtonGroup",
          //   props: {
          //     variant: "vertical",
          //     children: [
          //       {
          //         component: "Button",
          //         props: {
          //           children: "Help " + suggestionRequest.master_person?.name + " with a specific task",
          //           variant: "secondary",
          //           action: {
          //             type: "add_assistant_message",
          //             props: {
          //               chatKey: suggestionRequest.request_panel_title,
          //               componentData: {
          //                 component: {
          //                   component: "Card",
          //                   props: {
          //                     children: [
          //                       {
          //                         component: "TextContent",
          //                         props: {
          //                           textMarkdown: "Tell me what kind of assistance you'd like to provide to **" + suggestionRequest.master_person?.name + "**. For example:\n\n- Make an introduction to someone in your network\n- Share relevant resources or information\n- Offer advice or expertise in a specific area\n- Connect them with an opportunity\n\nType your response below and I'll help you plan the best approach."
          //                         }
          //                       }
          //                     ]
          //                   }
          //                 },
          //                 error: null
          //               }
          //             }
          //           }
          //         }
          //       }
          //     ]
          //   }
          // }
        ]
      }
    },
    error: null
  };

};