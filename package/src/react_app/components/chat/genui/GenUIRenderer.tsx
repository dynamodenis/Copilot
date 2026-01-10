import React, { useCallback } from 'react';
import type { GenUIComponentDef, ActionProps } from './types';
import {
  Icon,
  Header,
  TextContent,
  Button,
  ButtonGroup,
  Card,
  List,
  Stats,
  ProfileTile,
  MiniCard,
  MiniCardBlock,
  Steps,
  StepsItem,
  SectionBlock,
  Form,
  Input,
  TextArea,
  Select,
  Checkbox,
  RadioGroup,
  CheckBoxGroup,
  DatePicker,
} from './components';

interface GenUIRendererProps {
  component: GenUIComponentDef;
  onAction?: (action: ActionProps, formData?: Record<string, unknown>) => void;
}

/**
 * GenUIRenderer
 * 
 * Recursively renders a GenUI component tree.
 * Maps component names to React components and passes props.
 */
export const GenUIRenderer: React.FC<GenUIRendererProps> = ({
  component,
  onAction,
}) => {
  // Recursive render function
  const renderComponent = useCallback((def: GenUIComponentDef): React.ReactNode => {
    if (!def || !def.component) {
      console.warn('Invalid component definition:', def);
      return null;
    }

    const { component: componentName, props } = def;
    const componentProps = { ...props, onAction };

    switch (componentName) {
      // Basic Components
      case 'Icon':
        return <Icon {...componentProps as React.ComponentProps<typeof Icon>} />;
      
      case 'Header':
        return <Header {...componentProps as React.ComponentProps<typeof Header>} />;
      
      case 'TextContent':
        return <TextContent {...componentProps as React.ComponentProps<typeof TextContent>} />;
      
      // Button Components
      case 'Button':
        return <Button {...componentProps as React.ComponentProps<typeof Button>} />;
      
      case 'ButtonGroup':
        return (
          <ButtonGroup 
            {...componentProps as React.ComponentProps<typeof ButtonGroup>}
            renderComponent={renderComponent}
          />
        );
      
      // Layout Components
      case 'Card':
        return (
          <Card 
            {...componentProps as React.ComponentProps<typeof Card>}
            renderComponent={renderComponent}
          />
        );
      
      // List Component
      case 'List':
        return <List {...componentProps as React.ComponentProps<typeof List>} />;
      
      // Stats Component
      case 'Stats':
        return <Stats {...componentProps as React.ComponentProps<typeof Stats>} />;
      
      // ProfileTile Component
      case 'ProfileTile':
        return (
          <ProfileTile 
            {...componentProps as React.ComponentProps<typeof ProfileTile>}
            renderComponent={renderComponent}
          />
        );
      
      // MiniCard Components
      case 'MiniCard':
        return (
          <MiniCard 
            {...componentProps as React.ComponentProps<typeof MiniCard>}
            renderComponent={renderComponent}
          />
        );
      
      case 'MiniCardBlock':
        return (
          <MiniCardBlock 
            {...componentProps as React.ComponentProps<typeof MiniCardBlock>}
            renderComponent={renderComponent}
          />
        );
      
      // Steps Components
      case 'Steps':
        return (
          <Steps 
            {...componentProps as React.ComponentProps<typeof Steps>}
            renderComponent={renderComponent}
          />
        );
      
      case 'StepsItem':
        return (
          <StepsItem 
            {...componentProps as React.ComponentProps<typeof StepsItem>}
            renderComponent={renderComponent}
          />
        );
      
      // Section Components
      case 'SectionBlock':
        return (
          <SectionBlock 
            {...componentProps as React.ComponentProps<typeof SectionBlock>}
            renderComponent={renderComponent}
          />
        );
      
      // Form Components
      case 'Form':
        return (
          <Form 
            {...componentProps as React.ComponentProps<typeof Form>}
            renderComponent={renderComponent}
          />
        );
      
      case 'Input':
        return <Input {...componentProps as React.ComponentProps<typeof Input>} />;
      
      case 'TextArea':
        return <TextArea {...componentProps as React.ComponentProps<typeof TextArea>} />;
      
      case 'Select':
        return <Select {...componentProps as React.ComponentProps<typeof Select>} />;
      
      case 'Checkbox':
        return <Checkbox {...componentProps as React.ComponentProps<typeof Checkbox>} />;
      
      case 'RadioGroup':
        return <RadioGroup {...componentProps as React.ComponentProps<typeof RadioGroup>} />;
      
      case 'CheckBoxGroup':
        return <CheckBoxGroup {...componentProps as React.ComponentProps<typeof CheckBoxGroup>} />;
      
      case 'DatePicker':
        return <DatePicker {...componentProps as React.ComponentProps<typeof DatePicker>} />;
      
      default:
        console.warn(`Unknown component: ${componentName}`);
        return (
          <div style={{ 
            padding: '8px', 
            background: 'rgba(255,0,0,0.1)', 
            borderRadius: '4px',
            fontSize: '12px',
            color: '#ff6b6b'
          }}>
            Unknown component: {componentName}
          </div>
        );
    }
  }, [onAction]);

  return <>{renderComponent(component)}</>;
};

