import React from 'react';
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
  test('should render successfully', () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
});
