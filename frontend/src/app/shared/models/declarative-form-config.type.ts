export type FormFieldConfig = {
  name: string;
  type: 'text' | 'number' | 'password' | 'checkbox' | 'radio' | 'select' | 'hidden' | 'binary';
  label?: string;
  value?: any;
  placeholder?: string;
  readonly?: boolean;
  autofocus?: boolean;
  hint?: string;
  groupClass?: string;
  validators?: {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    required?: boolean;
    requiredIf?: Record<any, any>;
    pattern?: string | RegExp;
    patternType?: 'hostAddress';
  };
  onPaste?: (event: ClipboardEvent) => void;

  // radio
  // Note, radio buttons behave different to other form fields.
  // The 'value' property defines what value is represented by
  // this form field. If you want to check it, then you need to
  // set the 'checked' property.
  checked?: boolean;

  // text | password
  hasCopyToClipboardButton?: boolean;

  // dropdown
  options?: Record<any, string>;
};

export type FormButtonConfig = {
  type: 'default' | 'submit';
  text?: string;
  class?: string;
  click?: (buttonConfig: FormButtonConfig, values: Record<string, any>) => void;
};

export type DeclarativeFormConfig = {
  id?: string; // A unique form ID.
  hint?: string;
  subtitle?: string;
  fields: FormFieldConfig[];
  buttons?: Array<FormButtonConfig>;
  buttonAlign?: 'start' | 'center' | 'end';
};
