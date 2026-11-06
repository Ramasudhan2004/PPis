import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { services } from "@/content/services";
import { products } from "@/content/products";
import { openings } from "@/content/careers";
import { contact } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { SelectField, TextArea, TextField } from "@/components/ui/Field";
import { hasErrors, validateQuote, type QuoteErrors } from "@/lib/validation";
import {
  isQuoteEndpointConfigured,
  submitQuote,
  type QuoteSubmission,
} from "@/services/quotes";
import { cn } from "@/lib/utils";

type Variant = "quote" | "careers";

interface EnquiryFormProps {
  variant?: Variant;
  /** Preselected service/product (from a product or service deep link). */
  defaultInterest?: string;
  className?: string;
}

const emptyValues: QuoteSubmission = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  interest: "",
  location: "",
  requirement: "",
  message: "",
};

/**
 * Real enquiry form. Submissions are POSTed to the configured endpoint via
 * `submitQuote` — the form never claims success unless the endpoint accepted
 * the request. When no endpoint is configured it says so honestly and points
 * the visitor to the direct contact channels.
 */
export function EnquiryForm({
  variant = "quote",
  defaultInterest,
  className,
}: EnquiryFormProps) {
  const interestOptions = useMemo(() => {
    if (variant === "careers") {
      return [
        { value: "General Application", label: "General Application" },
        ...openings.map((opening) => ({
          value: opening.role,
          label: `${opening.role} — ${opening.department}`,
        })),
      ];
    }

    const serviceOptions = services.map((service) => ({
      value: service.title,
      label: `Service — ${service.title}`,
    }));
    const productOptions = products.map((product) => ({
      value: product.name,
      label: `Product — ${product.name}`,
    }));
    return [
      { value: "General Enquiry", label: "General Enquiry" },
      ...serviceOptions,
      ...productOptions,
    ];
  }, [variant]);

  const matchedDefault = interestOptions.some(
    (option) => option.value === defaultInterest,
  )
    ? defaultInterest!
    : "";

  const [values, setValues] = useState<QuoteSubmission>({
    ...emptyValues,
    company: variant === "careers" ? "PPIS Careers" : "",
    interest: matchedDefault,
  });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState("");

  const update = (field: keyof QuoteSubmission) => (value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateQuote(values);
    setErrors(nextErrors);
    if (hasErrors(nextErrors)) {
      const firstField = Object.keys(nextErrors)[0];
      const target = document.querySelector<HTMLElement>(
        `[name="${firstField}"]`,
      );
      target?.focus();
      return;
    }

    setStatus("submitting");
    const result = await submitQuote(
      variant === "careers" ? { ...values, resumeName: values.requirement } : values,
    );
    setStatus(result.ok ? "success" : "error");
    setFeedback(result.message);
  };

  if (status === "success") {
    return (
      <div className={cn("neu-lg p-8 text-center md:p-12", className)}>
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gold/20 text-gold">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-6 text-xl font-bold text-navy">
          {variant === "careers" ? "Application received" : "Request received"}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate">
          {feedback}
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            onClick={() => {
              setValues({
                ...emptyValues,
                company: variant === "careers" ? "PPIS Careers" : "",
              });
              setStatus("idle");
              setFeedback("");
            }}
          >
            Send another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("neu-lg p-6 md:p-9", className)}
    >
      {!isQuoteEndpointConfigured() && (
        <div className="mb-7 flex items-start gap-3 rounded-2xl bg-champagne/60 p-4 text-left">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-navy" aria-hidden />
          <p className="text-xs leading-relaxed text-navy">
            The online submission service is not connected to a backend yet. Until
            it is, this form validates your details and then directs you to our
            verified email and phone contacts — it will never show a false
            confirmation.
          </p>
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <TextField
          label="Full Name"
          name="fullName"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={values.fullName}
          error={errors.fullName}
          onChange={(event) => update("fullName")(event.target.value)}
        />
        <TextField
          label={variant === "careers" ? "Current Organisation" : "Company Name"}
          name="company"
          required={variant === "quote"}
          autoComplete="organization"
          placeholder={variant === "careers" ? "Current employer (optional)" : "Your company"}
          value={values.company}
          error={errors.company}
          onChange={(event) => update("company")(event.target.value)}
        />
        <TextField
          label="Email Address"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="name@company.com"
          value={values.email}
          error={errors.email}
          onChange={(event) => update("email")(event.target.value)}
        />
        <TextField
          label="Phone Number"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          placeholder="+91 00000 00000"
          value={values.phone}
          error={errors.phone}
          onChange={(event) => update("phone")(event.target.value)}
        />
        <SelectField
          label={
            variant === "careers"
              ? "Role You Are Applying For"
              : "Service / Product Interested In"
          }
          name="interest"
          required
          placeholder="Select an option"
          options={interestOptions}
          value={values.interest}
          error={errors.interest}
          onChange={(event) => update("interest")(event.target.value)}
        />
        <TextField
          label={variant === "careers" ? "Preferred Location" : "Project Location"}
          name="location"
          required
          placeholder={variant === "careers" ? "City / State" : "City, State"}
          value={values.location}
          error={errors.location}
          onChange={(event) => update("location")(event.target.value)}
        />
        <TextField
          label={
            variant === "careers"
              ? "Experience / Portfolio Link"
              : "Estimated Project Requirement"
          }
          name="requirement"
          containerClassName="md:col-span-2"
          placeholder={
            variant === "careers"
              ? "e.g. 6 years in EHV cable jointing — link to resume or LinkedIn"
              : "e.g. 2.5 km of 33 kV cable, 2 bays, timeline and budget range"
          }
          value={values.requirement}
          onChange={(event) => update("requirement")(event.target.value)}
        />
        <TextArea
          label={variant === "careers" ? "Why You'd Like to Join" : "Message"}
          name="message"
          required
          rows={5}
          containerClassName="md:col-span-2"
          placeholder={
            variant === "careers"
              ? "Tell us briefly about your experience and what you are looking for."
              : "Describe your scope, site conditions, timelines and any specific requirements."
          }
          value={values.message}
          error={errors.message}
          onChange={(event) => update("message")(event.target.value)}
        />
      </div>

      {status === "error" && feedback && (
        <div
          role="alert"
          className="mt-6 flex items-start gap-3 rounded-2xl bg-[#fdeceb] p-4 text-left"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#b4534b]" aria-hidden />
          <div className="text-xs leading-relaxed text-[#8f3c35]">
            <p>{feedback}</p>
            <p className="mt-2">
              You can reach us directly at{" "}
              <a href={`mailto:${contact.emails[0]}`} className="font-semibold underline">
                {contact.emails[0]}
              </a>{" "}
              or{" "}
              <a
                href={`tel:${contact.phones[0].replace(/\s/g, "")}`}
                className="font-semibold underline"
              >
                {contact.phones[0]}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          showArrow={status !== "submitting"}
          disabled={status === "submitting"}
        >
          {status === "submitting"
            ? "Submitting…"
            : variant === "careers"
              ? "Submit Application"
              : "Submit Request"}
        </Button>
        <p className="text-xs text-slate">
          Your details are used only to respond to this enquiry.
        </p>
      </div>

      <p className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-slate">
        <Send className="h-3.5 w-3.5 text-gold" aria-hidden />
        Secure enquiry handling
      </p>
    </form>
  );
}
