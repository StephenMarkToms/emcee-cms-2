import { MessageDescriptor } from "react-intl";

export interface ColorPickerProps {
  name: string;
  onChange: (value: string) => void;
  value: string;
  intlLabel: MessageDescriptor;
  disabled?: boolean;
  error?: string;
  description?: MessageDescriptor;
  required?: boolean;
}
