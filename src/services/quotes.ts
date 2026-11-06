/**
 * Quotation submission service.
 *
 * Performs a REAL network submission to the endpoint configured in
 * `VITE_QUOTE_ENDPOINT` (a form service now, or the PPIS backend later).
 * It never reports success unless the endpoint actually accepted the request.
 * When the endpoint is not configured the form surfaces an honest,
 * non-misleading message instead of a fake confirmation.
 */

export interface QuoteSubmission {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  location: string;
  requirement: string;
  message: string;
  /** Optional free-text field used by the careers resume flow. */
  resumeName?: string;
}

export type QuoteFailureReason =
  | "unconfigured"
  | "network"
  | "server"
  | "rate-limited";

export interface QuoteResult {
  ok: boolean;
  message: string;
  reason?: QuoteFailureReason;
}

const ENDPOINT = (import.meta.env.VITE_QUOTE_ENDPOINT as string | undefined)?.trim();

export function isQuoteEndpointConfigured(): boolean {
  return Boolean(ENDPOINT);
}

export function getQuoteEndpoint(): string | undefined {
  return ENDPOINT;
}

export async function submitQuote(
  data: QuoteSubmission,
): Promise<QuoteResult> {
  if (!ENDPOINT) {
    return {
      ok: false,
      reason: "unconfigured",
      message:
        "The online quotation service is not connected yet. Please reach us directly at the email and phone numbers on this page and our team will respond within one business day.",
    };
  }

  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...data,
        source: "ppis-website-v2",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (response.status === 429) {
      return {
        ok: false,
        reason: "rate-limited",
        message:
          "We have received several requests from this connection. Please try again shortly or contact us by email.",
      };
    }

    if (!response.ok) {
      return {
        ok: false,
        reason: "server",
        message:
          "Our quotation service could not accept the request right now. Please try again, or contact us by email.",
      };
    }

    return {
      ok: true,
      message:
        "Thank you. Your quotation request has been received — our team will respond within one business day.",
    };
  } catch {
    return {
      ok: false,
      reason: "network",
      message:
        "We could not reach the quotation service. Please check your connection and try again, or contact us by email.",
    };
  }
}
