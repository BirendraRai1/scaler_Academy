import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react"; // Import waitFor
import ContactForm from "../src/ContactForm";

describe("ContactForm", () => {
  test("renders the form fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("shows validation errors for empty fields", async () => { // Make this async too
    render(<ContactForm />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Use findByText for asynchronous appearance of error messages
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  test("shows validation error for invalid email", async () => {
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "invalidemail" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hello" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // No need for console.log and screen.debug() in final test code, but useful for debugging.
    // console.log("CURRENT DOM STATE:");
    // screen.debug();

    // Use findByText to wait for the error message to appear.
    // The regex /invalid email format/i makes it case-insensitive.
    expect(await screen.findByText(/invalid email format/i)).toBeInTheDocument();
  });

  test("submits the form with valid data and shows thank you message", async () => { // Make this async
    render(<ContactForm />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Jane" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: "Hi there!" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Use findByText to wait for the thank you message
    expect(await screen.findByText(/thank you, jane!/i)).toBeInTheDocument();
  });

  test("clears the form after successful submission", async () => { // Make this async
    render(<ContactForm />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);

    fireEvent.change(nameInput, { target: { value: "Jane" } });
    fireEvent.change(emailInput, { target: { value: "jane@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hi there!" } });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Use findByText to wait for the thank you message
    expect(await screen.findByText(/thank you, jane!/i)).toBeInTheDocument();

    // After submission, the form fields are unmounted because of the conditional rendering.
    // To confirm they are "cleared" (i.e., not present), you can use queryBy...
    // Note: If the form were *still* rendered but inputs were cleared, you'd check their values.
    // Since the component changes what's rendered, checking for absence is appropriate.
    expect(screen.queryByLabelText(/name/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/message/i)).not.toBeInTheDocument();
  });
});