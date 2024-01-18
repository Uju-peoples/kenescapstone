import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Order Now");
  expect(headingElement).toBeInTheDocument();
});

// BookingForm.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('HTML5 validation attributes for Name input field', () => {
    render(<BookingForm />);
    
    const nameInput = screen.getByLabelText("Name:");

    // Check for required attribute
    expect(nameInput).toHaveAttribute("required");
  });

    // Add more checks for other HTML5 validation attributes as needed
    test('HTML5 validation attributes for Date input field', () => {
      render(<BookingForm />);
      
      const dateInput = screen.getByLabelText("Date:");
  
      // Check for required attribute
      expect(dateInput).toHaveAttribute("required");
    });

      test('HTML5 validation attributes for Time input field', () => {
        render(<BookingForm />);
        
        const timeInput = screen.getByLabelText("Time:");
    
        // Check for required attribute
        expect(timeInput).toHaveAttribute("required");
      });

        test('HTML5 validation attributes for Guests input field', () => {
          render(<BookingForm />);
          
          const guestsInput = screen.getByLabelText("Guests:");
      
          // Check for required attribute
          expect(guestsInput).toHaveAttribute("required");
        });

          test('HTML5 validation attributes for Occassion input field', () => {
            render(<BookingForm />);
            
            const ocassionInput = screen.getByLabelText("Ocassion:");
        
            // Check for required attribute
            expect(ocassionInput).toHaveAttribute("required");
});

test('JavaScript validation for Name input field', () => {
    render(<BookingForm />);
    
    const nameInput = screen.getByLabelText("Name:");
    const submitButton = screen.getByLabelText("On Click");

    // Check initial invalid state
    expect(submitButton).toBeDisabled();

    // Simulate user entering a valid name
    fireEvent.change(nameInput, { target: { value: "John Doe" } });

    // Check for valid state
    expect(submitButton).not.toBeDisabled();

    // Simulate user entering an invalid name
    fireEvent.change(nameInput, { target: { value: "" } });

    // Check for invalid state
    expect(submitButton).toBeDisabled();
});