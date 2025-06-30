import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ResetPassword from '../../../app/auth/reset-password/page'

// Mock the lucide-react icons
jest.mock('lucide-react', () => ({
  Eye: () => <div data-testid="eye-icon">👁️</div>,
  EyeOff: () => <div data-testid="eye-off-icon">🙈</div>,
  ArrowRight: () => <div data-testid="arrow-right-icon">→</div>,
}))

describe('ResetPassword Component', () => {
  beforeEach(() => {
    render(<ResetPassword />)
  })

  test('renders the reset password form', () => {
    // Check if the title is rendered
    expect(screen.getByText('Reset Password')).toBeInTheDocument()
    
    // Check if the description is rendered
    expect(screen.getByText('Please enter your new password below.')).toBeInTheDocument()
    
    // Check if password fields are rendered
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument()
    
    // Check if the submit button is rendered
    expect(screen.getByRole('button', { name: /reset password/i })).toBeInTheDocument()
  })

  test('password fields start as password type', () => {
    const passwordInput = screen.getByLabelText('Password')
    const confirmInput = screen.getByLabelText('Confirm Password')
    
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(confirmInput).toHaveAttribute('type', 'password')
  })

  test('toggles password visibility when eye icons are clicked', async () => {
    const user = userEvent.setup()
    
    const passwordInput = screen.getByLabelText('Password')
    const confirmInput = screen.getByLabelText('Confirm Password')
    
    // Get the eye icons (they're buttons inside the input containers)
    const passwordEyeButton = passwordInput.parentElement?.querySelector('button')
    const confirmEyeButton = confirmInput.parentElement?.querySelector('button')
    
    expect(passwordEyeButton).toBeInTheDocument()
    expect(confirmEyeButton).toBeInTheDocument()
    
    // Click the password eye icon
    await user.click(passwordEyeButton!)
    
    // Check if password type changed to text
    await waitFor(() => {
      expect(passwordInput).toHaveAttribute('type', 'text')
    })
    
    // Click the confirm eye icon
    await user.click(confirmEyeButton!)
    
    // Check if confirm password type changed to text
    await waitFor(() => {
      expect(confirmInput).toHaveAttribute('type', 'text')
    })
  })

  test('allows typing in password fields', async () => {
    const user = userEvent.setup()
    
    const passwordInput = screen.getByLabelText('Password')
    const confirmInput = screen.getByLabelText('Confirm Password')
    
    // Type in password fields
    await user.type(passwordInput, 'newpassword123')
    await user.type(confirmInput, 'newpassword123')
    
    expect(passwordInput).toHaveValue('newpassword123')
    expect(confirmInput).toHaveValue('newpassword123')
  })

  test('form has proper accessibility attributes', () => {
    const passwordInput = screen.getByLabelText('Password')
    const confirmInput = screen.getByLabelText('Confirm Password')
    
    expect(passwordInput).toHaveAttribute('id', 'password')
    expect(confirmInput).toHaveAttribute('id', 'confirm')
    
    // Check if labels are properly associated with inputs
    expect(screen.getByText('Password')).toHaveAttribute('for', 'password')
    expect(screen.getByText('Confirm Password')).toHaveAttribute('for', 'confirm')
  })

  test('submit button is enabled', () => {
    const submitButton = screen.getByRole('button', { name: /reset password/i })
    expect(submitButton).toBeEnabled()
  })

  test('has proper styling classes', () => {
    const container = screen.getByText('Reset Password').closest('div')
    const submitButton = screen.getByRole('button', { name: /reset password/i })
    
    // Check if the main container has proper classes (updated to match actual structure)
    expect(container).toHaveClass('max-w-md', 'w-full', 'bg-white', 'rounded-lg', 'shadow-lg', 'p-8')
    
    // Check if submit button has proper classes
    expect(submitButton).toHaveClass('bg-orange-500', 'hover:bg-orange-600', 'text-white', 'font-semibold', 'py-3', 'rounded-md', 'transition')
  })
}) 