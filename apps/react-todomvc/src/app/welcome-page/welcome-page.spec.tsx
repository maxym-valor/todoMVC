import { render } from '@testing-library/react';
import React from 'react';

import WelcomePage from './welcome-page';

describe('WelcomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WelcomePage />);
    expect(baseElement).toBeTruthy();
  });
});
