/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from './Confirmation';

describe('Confirmation component', () => {
  it('should render', () => {
    const {getByRole} = render(<Confirmation />);

    expect(getByRole('dialog')).toBeInTheDocument();
  })
})