import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import Footer from '../Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('<Footer> component', () => {
  it('should render correctly(snapshot)', () => {
    const tree = mount(<Footer />);

    expect(toJson(tree)).toMatchSnapshot();
  });
});
