/**
 * Centralized Integrations Configuration
 * Web3Forms (email delivery) and Google reCAPTCHA v3 (client-side submit gate only).
 * reCAPTCHA tokens are not sent to Web3Forms (reCAPTCHA there is a paid feature).
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
    siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "",
    actionName: "turnaround_enquiry",
    enabled: Boolean(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
  }
};
