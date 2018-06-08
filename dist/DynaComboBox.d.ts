import * as React from "react";
import { EMode, EColor, EStyle, ESize } from "dyna-ui-field-wrapper";
import "./DynaComboBox.less";
export interface IDynaComboBoxProps {
    className?: string;
    name: string;
    label?: JSX.Element | string;
    mode?: EMode;
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
export declare class DynaComboBox extends React.Component<IDynaComboBoxProps> {
    static defaultProps: IDynaComboBoxProps;
    private readonly isMacChromeSafari;
    private handleChange;
    render(): JSX.Element;
}
