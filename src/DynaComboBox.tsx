import * as React from "react";

import {EMode, EColor, EStyle, ESize, DynaFieldWrapper} from "dyna-ui-field-wrapper";

import "./dyna-combobox.less";

export interface IDynaComboBoxProps {
  name: string;
  label?: JSX.Element | string;
  mode?: EMode,
  style?: EStyle;
  color?: EColor;
  size?: ESize;
  options?: IDynaComboBoxOption[];
  value?: string;
  onChange?: (name: string, value: string) => void;
}

export interface IDynaComboBoxOption {
  label: string;
  value: string;
}

export class DynaComboBox extends React.Component<IDynaComboBoxProps> {
  static defaultProps: IDynaComboBoxProps = {
    name: null,
    label: null,
    mode: EMode.EDIT,
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
    size: ESize.MEDIUM,
    options: [],
    value: null,
    onChange: (name: string, value: string) => undefined,
  };

  private handleChange(event: any): void {
    const {name, onChange} = this.props;
    onChange(name, event.target.value);
  }

  public render(): JSX.Element {
    const {
      label,
      mode,
      style, color, size,
      options,
      value,
    } = this.props;

    return (
      <DynaFieldWrapper
        className="dyna-combobox"
        mode={mode}
        style={style}
        color={color}
        size={size}
        label={label}
        inputElementSelector="select"
      >
        <select
          value={value || ''}
          onChange={this.handleChange.bind(this)}
        >
          {options.map((option: IDynaComboBoxOption, index: number) => {
            return (
              <option
                key={index}
                value={option.value}
              >{option.label}</option>
            );
          })}
        </select>
      </DynaFieldWrapper>
    );
  }
}
