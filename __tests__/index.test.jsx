import Example from '../pages/index'
import '@testing-library/jest-dom'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Form', () => {
  it('renders a form', () => {
    render(<Example />)
    expect(screen.getByTestId('firstName')).toBeInTheDocument()
    expect(screen.getByTestId('middleName')).toBeInTheDocument()
    expect(screen.getByTestId('lastName')).toBeInTheDocument()
    expect(screen.getByTestId('address')).toBeInTheDocument()
    expect(screen.getByTestId('city')).toBeInTheDocument()
    expect(screen.getByTestId('state')).toBeInTheDocument()
    expect(screen.getByTestId('zip')).toBeInTheDocument()
    expect(screen.getByTestId('phone')).toBeInTheDocument()
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('cost')).toBeInTheDocument()
  })
  // TODO: make this look a bit better pls. maybe have some private functions to build test data?
  it('submits a form', () => {
    render(<Example />)
    const firstNameInput = screen.getByTestId('firstName')
    const middleNameInput = screen.getByTestId('middleName')
    const lastNameInput = screen.getByTestId('lastName')
    const addressInput = screen.getByTestId('address')
    const cityInput = screen.getByTestId('city')
    const stateInput = screen.getByTestId('state')
    const zipInput = screen.getByTestId('zip')
    const phoneInput = screen.getByTestId('phone')
    const emailInput = screen.getByTestId('email')
    const costInput = screen.getByTestId('cost')
    // const submitButton = screen.getByTestId('submit')

    fireEvent.change(firstNameInput, { target: { value: 'JOHN' } })
    fireEvent.change(middleNameInput, { target: { value: 'MOE' } })
    fireEvent.change(lastNameInput, { target: { value: 'DOE' } })
    fireEvent.change(addressInput, { target: { value: '123 TEST ST' } })
    fireEvent.change(cityInput, { target: { value: 'TALLAHASSEE' } })
    fireEvent.change(stateInput, { target: { value: 'FL' } })
    fireEvent.change(zipInput, { target: { value: '32311' } })
    fireEvent.change(phoneInput, { target: { value: '555-555-5555' } })
    fireEvent.change(emailInput, { target: { value: 'TEST@ADD123.COM' } })
    fireEvent.change(costInput, { target: { value: '5.00' } })

    // submitButton.click()
    // TODO: fix this, something, not sure. will figure it out.
  })
})