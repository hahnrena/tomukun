import { useState } from 'react';
import styled from 'styled-components';
import { submitContactForm } from '../lib/api';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 480px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.muted};
`;

const inputStyles = `
  background: transparent;
  border: 1px solid;
  padding: 0.75rem 1rem;
  font-size: 1rem;
`;

const Input = styled.input`
  ${inputStyles}
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Textarea = styled.textarea`
  ${inputStyles}
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  min-height: 140px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Submit = styled.button`
  align-self: flex-start;
  padding: 0.9rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.p`
  font-size: 0.9rem;
  color: ${({ theme, $error }) => ($error ? theme.colors.accent : theme.colors.textMuted)};
`;

const initialForm = { name: '', email: '', message: '' };

// `source` labels the inquiry type (e.g. "Catering") in the email subject
// sent to the client — see pages/api/contact.js. Omit for a plain general
// contact message.
export default function ContactForm({ source, messagePlaceholder }) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await submitContactForm({ ...form, source });
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" value={form.name} onChange={handleChange} required />
      </Field>

      <Field>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </Field>

      <Field>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={messagePlaceholder}
          required
        />
      </Field>

      <Submit type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Submit>

      {status === 'success' && <StatusMessage>Thanks — we&apos;ll be in touch soon.</StatusMessage>}
      {status === 'error' && (
        <StatusMessage $error>
          Something went wrong. Please try again, or call us directly.
        </StatusMessage>
      )}
    </Form>
  );
}
