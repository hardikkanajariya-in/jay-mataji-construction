/**
 * Centralized Integrations Configuration
 * Manages public frontend integration settings for Web3Forms and Google reCAPTCHA v3.
 *
 * NOTE: Never expose private secrets (such as reCAPTCHA secret keys) in this file.
 * Private secret verification must always remain on a dedicated backend/worker.
 */

export interface IntegrationsConfig {
  web3forms: {
    endpoint: string;
    accessKey: string;
    subjectPrefix: string;
    fromName: string;
  };
  recaptcha: {
    siteKey: string;
    actionName: string;
    enabled: boolean;
  };
}

export const integrationsConfig: IntegrationsConfig = {
  web3forms: {
    endpoint: "https://api.web3forms.com/submit",
    // Public Web3Forms Access Key from environment or configurable default
    accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
    subjectPrefix: "Refinery Turnaround Requisition",
    fromName: "JMC Operations Portal"
  },
  recaptcha: {
    // Public Google reCAPTCHA v3 Site Key from environment
    siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
    actionName: "turnaround_enquiry",
    enabled: Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
  }
};
