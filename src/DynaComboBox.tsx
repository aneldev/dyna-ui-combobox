import * as React from "react";
import * as platform from "platform";

import {EMode, EColor, EStyle, ESize, DynaFieldWrapper} from "dyna-ui-field-wrapper";

import "./DynaComboBox.less";

export interface IDynaComboBoxProps {
  className?: string;
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
    className: "",
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

  private get isMacChromeSafari(): boolean {
    return platform.os.family === "OS X" && (platform.name === "Chrome" || platform.name === "Safari");
  }

  private handleChange(event: any): void {
    const {name, onChange} = this.props;
    onChange(name, event.target.value);
  }

  public render(): JSX.Element {
    const {
      className: userClassName,
      label,
      mode,
      style, color, size,
      options,
      value,
    } = this.props;

    const className: string = [
      "dyna-combobox",
      userClassName,
      this.isMacChromeSafari ? "is-mac-chrome-safari" : "",
    ].join(' ').trim();

    return (
      <DynaFieldWrapper
        className={className}
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
