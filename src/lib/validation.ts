import type { QuoteSubmission } from "@/services/quotes";

export type QuoteErrors = Partial<Record<keyof QuoteSubmission, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+()\-\s\d]{7,20}$/;

export function validateQuote(values: QuoteSubmission): QuoteErrors {
  const errors: QuoteErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";

  if (!values.company.trim()) errors.company = "Please enter your company name.";

  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!values.phone.trim()) errors.phone = "Please enter a phone number.";
  else if (!PHONE_RE.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";

  if (!values.interest.trim())
    errors.interest = "Select a service or product you are interested in.";

  if (!values.location.trim())
    errors.location = "Please enter the project location.";

  if (!values.message.trim())
    errors.message = "Tell us briefly about your requirement.";

  return errors;
}

export const hasErrors = (errors: QuoteErrors) => Object.keys(errors).length > 0;
