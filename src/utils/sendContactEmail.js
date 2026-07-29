import { companyDetails } from "../data/constant";

const EMAIL_API_URL =
  "https://send-mail-redirect-boostmysites.vercel.app/send-email";

export async function sendContactEmail({ subject, body, replyTo }) {
  const payload = {
    to: companyDetails.email,
    subject,
    body,
    name: companyDetails.name,
    ...(replyTo && { replyTo }),
  };

  const response = await fetch(EMAIL_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let result = {};
  try {
    result = await response.json();
  } catch {
    result = {};
  }

  if (!response.ok || result.error) {
    throw new Error(
      result.error ||
        "Unable to send your message right now. Please email us directly or use WhatsApp."
    );
  }

  return result;
}
