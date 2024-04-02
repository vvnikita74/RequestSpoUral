import type { Schema, Attribute } from '@strapi/strapi';

export interface InputsFile extends Schema.Component {
  collectionName: 'components_inputs_files';
  info: {
    displayName: 'file';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    bitrixKey: Attribute.String;
    isMultiple: Attribute.Boolean;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    file: Attribute.Media;
    filename: Attribute.String;
    commentText: Attribute.String;
  };
}

export interface InputsNumber extends Schema.Component {
  collectionName: 'components_inputs_numbers';
  info: {
    displayName: 'number';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    minValue: Attribute.Integer;
    maxValue: Attribute.Integer;
    bitrixKey: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
  };
}

export interface InputsSelect extends Schema.Component {
  collectionName: 'components_inputs_selects';
  info: {
    displayName: 'select';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    values: Attribute.Component<'service.values', true>;
    isMultiple: Attribute.Boolean & Attribute.DefaultTo<false>;
    bitrixKey: Attribute.String & Attribute.Required;
    placeholder: Attribute.String;
  };
}

export interface InputsString extends Schema.Component {
  collectionName: 'components_inputs_strings';
  info: {
    displayName: 'string';
    description: '';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    isRequired: Attribute.Boolean & Attribute.DefaultTo<true>;
    minNumberOfCharacters: Attribute.Integer;
    maxNumberOfCharacters: Attribute.Integer;
    regExp: Attribute.String;
    bitrixKey: Attribute.String & Attribute.Required;
    mask: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface ServiceValues extends Schema.Component {
  collectionName: 'components_service_values';
  info: {
    displayName: 'values';
    description: '';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'inputs.file': InputsFile;
      'inputs.number': InputsNumber;
      'inputs.select': InputsSelect;
      'inputs.string': InputsString;
      'service.values': ServiceValues;
    }
  }
}
