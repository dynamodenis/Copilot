import type { LeverageLoopPerson } from "@/react_app/store/leverageLoopsStore";

export const leverageLoopInitialSectionContentPrompt = (person: LeverageLoopPerson) => {
  return {
    component: {
      component: "Card",
      props: {
        children: [
          {
            component: "Header",
            props: {
              title: `Leverage your network to benefit ${person.full_name}`,
              subtitle: person.master_person?.current_title 
                ? `${person.master_person.current_title} · ${person.master_person?.master_company?.company_name || ''}`
                : ''
            }
          },
          {
            component: "TextContent",
            props: {
              textMarkdown: `I'm here to help you make the most of your connection with **${person.full_name}**. What would you like to do?`
            }
          },
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
                    action: {
                      type: "create_suggestion_request",
                      props: {
                        masterPersonId: person.master_person_id,
                        personName: person.full_name,
                        personTitle: person.master_person?.current_title || 'a professional',
                        companyName: person.master_person?.master_company?.company_name || 'their company',
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
                    action: {
                      type: "continue_conversation",
                      props: {
                        prompt: `I want to help ${person.full_name} with a specific task. Based on their role as ${person.master_person?.current_title || 'a professional'} at ${person.master_person?.master_company?.company_name || 'their company'}, what are some ways I could provide value or assistance to them?`
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