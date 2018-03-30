import "jest";

import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaComboBox} from '../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <DynaComboBox
        name="currency"
        label="Currency"
        value="eur"
        options={[
          {value: 'eur', label: 'Euro'},
          {value: 'usd', label: 'US Dollar'},
          {value: 'aud', label: 'Australian Dollar'},
          {value: 'gbp', label: 'British Pound'},
        ]}
        />
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
