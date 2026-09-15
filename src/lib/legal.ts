import type { LegalDocument } from "@/types/sites/afterquery-com-7e0a74f7";

export const CONTACT_EMAIL = "s.xuto@1sapien.com";

const UPDATED_TEXT = "September 15, 2026";
const UPDATED_ISO = "2026-09-15";

export const TERMS_OF_SERVICE: LegalDocument = {
  title: "Terms of Service",
  updatedText: UPDATED_TEXT,
  updatedISO: UPDATED_ISO,
  intro:
    "These Terms of Service govern your use of the 1Sapien website and the services we provide to local service businesses. By using this website, booking a demo, or engaging us for services, you agree to these terms. If you do not agree, please do not use our website or services.",
  sections: [
    {
      id: "agreement",
      heading: "Agreement to these terms",
      paragraphs: [
        "By accessing this website, submitting a form, or entering into a services agreement with us, you confirm that you have read, understood, and agree to be bound by these terms.",
        "If you are agreeing on behalf of a business or other legal entity, you represent that you have the authority to bind that entity, and “you” refers to that entity.",
      ],
    },
    {
      id: "who-we-are",
      heading: "Who we are",
      paragraphs: [
        "1Sapien provides automated review generation, local search optimization (local SEO), and website design and development services to local service businesses across the United States and Europe.",
        `Questions about these terms can be sent to ${CONTACT_EMAIL}.`,
      ],
    },
    {
      id: "services",
      heading: "Our services",
      paragraphs: [
        "We prepare review requests on your behalf, optimize your Google Business Profile, local listings, and website for local search visibility, and design and build websites intended to convert visitors into booked jobs.",
        "The specific scope, deliverables, and timelines for your engagement are set out in a separate written proposal, statement of work, or order form. If there is a conflict between these terms and that document, the signed document controls.",
        "We may improve, modify, or discontinue individual features of our services. We will not materially reduce the core services you have paid for during an active billing period without notice.",
      ],
    },
    {
      id: "your-responsibilities",
      heading: "Your responsibilities",
      bullets: [
        "Provide timely access to the accounts needed to deliver the services, including your Google Business Profile, website, hosting, domain (DNS), and analytics accounts.",
        "Confirm that you have the authority to grant that access, and that your business information is accurate and up to date.",
        "Obtain any consents required before sharing your customers’ contact details with us for review requests or follow-up messages.",
        "Comply with the terms of third-party platforms such as Google, and with applicable marketing, anti-spam, and data protection laws.",
        "Respond to your customers, reviews, and enquiries, and keep us informed of changes to your services, service area, or branding.",
      ],
    },
    {
      id: "fees-and-billing",
      heading: "Fees and billing",
      paragraphs: [
        "Fees are set out in your proposal. Recurring services are billed monthly in advance, and website projects typically include a one-time build fee billed at the start of the project.",
        "Invoices are due within seven days of issue unless your proposal states otherwise. Amounts that remain unpaid may result in suspension of services, and reinstatement may require payment of outstanding amounts plus a reactivation fee.",
        "Fees are exclusive of taxes, which are your responsibility where applicable. Work already performed, and partial billing periods, are non-refundable.",
      ],
    },
    {
      id: "term-and-cancellation",
      heading: "Term, renewal, and cancellation",
      paragraphs: [
        "Recurring services run on a month-to-month basis and renew automatically each billing period until cancelled.",
        "Either party may cancel by giving at least 30 days’ written notice before the next billing date. Cancellation takes effect at the end of the then-current billing period.",
        "Website projects may be cancelled before completion, but deposits and fees for work already completed are non-refundable. On cancellation, ownership of and access to your accounts, domain, and completed deliverables transfers to you once all outstanding invoices are paid.",
      ],
    },
    {
      id: "results",
      heading: "Results",
      paragraphs: [
        "We work to a clear process and report on progress every month, but we do not guarantee specific rankings, review volumes, website traffic, leads, or revenue.",
        "Local search results depend on third-party algorithms, competitor activity, and factors outside our control. Case studies and examples on this website describe results achieved by specific clients and are not a promise of similar outcomes.",
      ],
    },
    {
      id: "third-party-platforms",
      heading: "Third-party platforms",
      paragraphs: [
        "Our services depend on platforms we do not own or control, including Google Business Profile, Google Search and Maps, hosting providers, and messaging providers.",
        "Those platforms are governed by their own terms and policies, and their features, pricing, and availability may change. We are not responsible for platform outages, policy changes, review removals, or account suspensions that affect results.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      paragraphs: [
        "The website, copy, designs, and other final deliverables we create specifically for you become your property once you have paid for them in full.",
        "We retain ownership of our pre-existing and independently developed materials, including tools, code libraries, templates, frameworks, and internal processes. We grant you a non-exclusive licence to use those materials to the extent they are embedded in your deliverables.",
        "Our name, logo, and brand assets remain our property. The content of this website, excluding your own materials, may not be copied or reused without our permission.",
      ],
    },
    {
      id: "confidentiality",
      heading: "Confidentiality",
      paragraphs: [
        "Each party will keep the other’s non-public business information confidential and use it only to perform the services. This does not apply to information that is public, independently developed, or required to be disclosed by law.",
      ],
    },
    {
      id: "data-protection",
      heading: "Data protection",
      paragraphs: [
        "Our handling of personal data is described in our Privacy Policy, which forms part of these terms.",
        "Where we send review requests to your customers, you are the controller of that customer data and we act on your instructions as a processor. You are responsible for having a lawful basis to share that data with us.",
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "Limitation of liability",
      paragraphs: [
        "The services are provided on a professional, commercially reasonable basis. To the fullest extent permitted by law, we exclude implied warranties and are not liable for indirect, incidental, special, or consequential losses, including lost profits, lost bookings, or lost data.",
        "Our total liability arising out of or relating to the services is limited to the fees you paid to us in the three months immediately preceding the event giving rise to the claim.",
        "Nothing in these terms limits liability that cannot be limited by applicable law, including liability for death or personal injury caused by negligence, or for fraud.",
      ],
    },
    {
      id: "termination",
      heading: "Termination",
      paragraphs: [
        "We may suspend or terminate services immediately if you breach these terms, fail to pay invoices, or ask us to do something unlawful or contrary to a platform’s policies.",
        "On termination you remain responsible for fees for work performed and for the remainder of the current billing period.",
      ],
    },
    {
      id: "governing-law",
      heading: "Governing law and disputes",
      paragraphs: [
        "These terms are governed by the laws of the jurisdiction in which 1Sapien is established, without regard to conflict of law rules.",
        "If a dispute arises, we ask that you contact us first so both parties can attempt to resolve it in good faith before starting formal proceedings.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms from time to time. The current version is always posted on this page with a revised “last updated” date.",
        "If we make a material change, we will provide notice by email or by a prominent notice on this website. Continued use of our services after the effective date means you accept the updated terms.",
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      paragraphs: [
        `For any question about these terms, email ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy Policy",
  updatedText: UPDATED_TEXT,
  updatedISO: UPDATED_ISO,
  intro:
    "This Privacy Policy explains what information 1Sapien collects, how we use it, and the choices you have. It covers our website and the services we provide to local service businesses in the United States and Europe.",
  sections: [
    {
      id: "overview",
      heading: "Overview",
      paragraphs: [
        "1Sapien is responsible for the personal data described in this policy that we collect through this website and in the course of providing our services.",
        "When we send review requests or follow-up messages to your customers on your behalf, we do so on your instructions. In that situation you are the controller of that data and we act as your processor.",
      ],
    },
    {
      id: "information-we-collect",
      heading: "Information we collect",
      bullets: [
        "Information you give us: your name, business name, email address, phone number, number of locations, the services you are interested in, and anything you send us through our contact form or by email.",
        "Customer information we process on your behalf: the names, phone numbers, email addresses, and job details of your customers, used to send review requests and replies.",
        "Information collected automatically: IP address, device and browser type, operating system, referring page, pages viewed, and time on page.",
        "Information from cookies and similar technologies, as described below.",
      ],
    },
    {
      id: "how-we-use-information",
      heading: "How we use information",
      bullets: [
        "Provide, operate, and improve our services, including review requests, local SEO work, and website builds.",
        "Respond to demo requests and other enquiries.",
        "Send and track review requests and replies on behalf of our clients.",
        "Measure and report performance, such as calls, form submissions, and ranking changes.",
        "Invoice, process payments, and manage accounts.",
        "Meet legal, tax, and accounting obligations.",
        "Send occasional marketing communications where permitted, with the option to unsubscribe at any time.",
      ],
    },
    {
      id: "legal-bases",
      heading: "Legal bases for processing (EEA and UK)",
      paragraphs: [
        "Where the General Data Protection Regulation applies, we rely on the following legal bases: performance of a contract when we provide services to you; legitimate interests when we improve our services, prevent misuse, and market to business contacts; consent for marketing messages and non-essential cookies; and legal obligation for record-keeping and compliance.",
        "You can withdraw consent at any time where consent is the basis for processing.",
      ],
    },
    {
      id: "cookies",
      heading: "Cookies and analytics",
      paragraphs: [
        "We use essential cookies needed for the website to function, and limited analytics cookies that help us understand which pages are useful.",
        "You can block or delete cookies in your browser settings. Blocking essential cookies may affect how parts of the site work.",
      ],
    },
    {
      id: "sharing",
      heading: "When we share information",
      bullets: [
        "Service providers who help us operate, such as hosting, email and SMS delivery, analytics, and payment processors, who may only use the data on our instructions.",
        "Our clients, where we process their customers’ data on their behalf.",
        "Professional advisers, and authorities where we are required to disclose information by law or to protect our rights.",
        "A successor entity in the event of a merger, acquisition, or sale of assets, with notice to affected individuals where required.",
      ],
      paragraphs: [
        "We do not sell your personal information, and we do not share it for cross-context behavioural advertising.",
      ],
    },
    {
      id: "transfers",
      heading: "International transfers",
      paragraphs: [
        "We may process information in the United States and in other countries where our service providers operate. Where we transfer personal data out of the EEA or the UK, we use appropriate safeguards such as the European Commission’s standard contractual clauses.",
      ],
    },
    {
      id: "retention",
      heading: "How long we keep information",
      paragraphs: [
        "We keep information for as long as needed to provide services, manage our relationship with you, and meet legal, tax, and accounting requirements. When it is no longer needed we delete it or anonymise it.",
        "Customer data processed on behalf of a client is retained according to that client’s instructions and our agreement with them.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      paragraphs: [
        "Depending on where you live, you may have the right to access, correct, delete, restrict, or object to the processing of your personal data, to receive it in a portable format, and to withdraw consent.",
        "If you are in California, you may request to know what personal information we collect, request deletion or correction, and opt out of sale or sharing. We do not sell or share personal information as those terms are defined by California law.",
        "If you are in the EEA or the UK, you also have the right to complain to your local supervisory authority. We would appreciate the chance to resolve your concern first.",
        `To exercise any of these rights, email ${CONTACT_EMAIL}. We may need to verify your identity before acting on a request.`,
      ],
    },
    {
      id: "security",
      heading: "Security",
      paragraphs: [
        "We use administrative, technical, and organisational measures designed to protect personal data against unauthorised access, loss, or misuse, including encryption in transit and access controls on the accounts we manage.",
        "No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
      ],
    },
    {
      id: "children",
      heading: "Children’s privacy",
      paragraphs: [
        "Our website and services are intended for businesses and are not directed to children. We do not knowingly collect personal data from anyone under 16.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        "We may update this policy from time to time. The current version is always posted here with a revised “last updated” date, and material changes will be communicated by email or a notice on this website.",
      ],
    },
    {
      id: "contact",
      heading: "Contact us",
      paragraphs: [
        `For any question about this policy or your personal data, email ${CONTACT_EMAIL}.`,
      ],
    },
  ],
};
