import * as React from 'react';
import {DynaComboBox, EColor, ESize, EStyle, IDynaComboBoxProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";
import {IDynaComboBoxOption} from "../../src/DynaComboBox";
import {IShowcaseViewProps} from "dyna-showcase/dist/interfaces";
import {EMode} from "dyna-ui-field-wrapper";

require('./showcase.less');

export default {
  logo: <Logo/>,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna-ui-combobox</h3>
        </div>
      ),
    },
    {
      slug: 'default',
      faIconName: 'flask',
      title: 'rounded - white/black - sizes',
      center: true,
      component: (() => {

        interface IMyAppProps {
          mode?: EMode;
          style?: EStyle;
          color?: EColor;
          size?: ESize;
        }

        interface IMyAppState {
          currency?: string;
        }

        const currencies: IDynaComboBoxOption[] = [
          {value: 'eur', label: 'Euro'},
          {value: 'usd', label: 'US Dollar'},
          {value: 'aud', label: 'Australian Dollar'},
          {value: 'gbp', label: 'British Pound'},
        ];

        class MyApp extends React.Component<IMyAppProps, IMyAppState> {
          constructor(props: IMyAppProps) {
            super(props);

            this.state = {
              currency: 'eur',
            }
          }

          private handleChange(name: string, value: string): void {
            this.setState({[name]: value});
            console.log('selected value', value)
          }

          public render(): JSX.Element {
            const {mode, style, size, color} = this.props;
            return (
              <DynaComboBox
                mode={mode}
                style={style}
                name="currency"
                label="Currency"
                size={size}
                color={color}
                value={this.state.currency}
                options={currencies}
                onChange={this.handleChange.bind(this)}
              />
            )
          }
        }

        return <MyApp/>

      })(),
      props: (() => {
        const props: Array<IShowcaseViewProps> = [];

        Object.keys(EStyle).forEach((style: EStyle) => {
          Object.keys(ESize).forEach((size: ESize) => {
            Object.keys(EColor).forEach((color: EColor) => {
              Object.keys(EMode).forEach((mode: EMode) => {
                const title: string = `${mode} ${style} ${size.toLowerCase()} ${color.toLowerCase()}`.replace(/_/g, '-');
                props.push({
                  slug: title.replace(/ /g, '-'),
                  title,
                  props: {
                    mode,
                    style,
                    size,
                    color,
                  },
                })
              });
            });
          });
        });

        return props;
      })(),
      props2: [
        {
          slug: 'small',
          title: 'small',
          props: {
            color: EColor.WHITE_BLACK,
            size: ESize.SMALL,
          } as IDynaComboBoxProps
        },
        {
          slug: 'medium',
          title: 'medium',
          props: {
            color: EColor.WHITE_BLACK,
            size: ESize.MEDIUM,
          } as IDynaComboBoxProps
        },
        {
          slug: 'large',
          title: 'large',
          props: {
            color: EColor.WHITE_BLACK,
            size: ESize.LARGE,
          } as IDynaComboBoxProps
        },
      ]
    },
    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-button">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-button">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
