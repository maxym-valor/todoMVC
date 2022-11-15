import { render } from '@testing-library/react';
import React from 'react';

import EmptyPage from './empty-page';

describe('EmptyPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EmptyPage />);
    expect(baseElement).toBeTruthy();
  });
});
