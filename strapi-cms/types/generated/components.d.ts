import type { Schema, Attribute } from '@strapi/strapi';

export interface TopicContentExplainationData extends Schema.Component {
  collectionName: 'components_topic_explaination_data';
  info: {
    displayName: 'Explaination Data';
    icon: 'file';
    description: '';
  };
  attributes: {
    textData: Attribute.Blocks & Attribute.Required;
    illustration: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'topic-content.explaination-data': TopicContentExplainationData;
    }
  }
}
