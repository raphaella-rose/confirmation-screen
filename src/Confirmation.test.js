/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render } from '@testing-library/react';
import Confirmation from './Confirmation';

describe('Confirmation component', () => {
  it('should render', () => {
    const {getByRole} = render(<Confirmation />);

    expect(getByRole('dialog')).toBeInTheDocument();
  })

  it("should have a title saying 'Confirmation'", () => {
    const {getByText} = render(<Confirmation />);

    expect(getByText('Confirmation')).toBeInTheDocument();
  })

  it("should have a dynamic confirmation question", () => {
    const question = 'Do you confirm?';
    const {getByText} = render(<Confirmation>{question}</Confirmation>);

    expect(getByText(question)).toBeInTheDocument();
  })

  it('should have an "OK" button', () => {
    const {getByRole} = render(<Confirmation />);

    expect(getByRole('button', {name: 'OK'})).toBeInTheDocument();
  });

  it('should have an "Cancel" button', () => {
    const {getByRole} = render(<Confirmation />);

    expect(getByRole('button', {name: 'Cancel'})).toBeInTheDocument();
  })

  it('should be able to receive a handler for the "OK" button and execute it upon click', () => {
    const onCancellationHandler = jest.fn();
    const {getByRole} = render(<Confirmation onCancellation={onCancellationHandler} />);
    const okButton = getByRole('button', {name: 'Cancel'});

    fireEvent.click(okButton);

    expect(onConfirmationHandler).toHaveBeenCalled();
  })
})