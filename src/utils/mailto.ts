const EMAIL = "info@tempussolutions.io";

export function getConsultationMailto(): string {
  const subject = "Free Consultation Request – Tempus Solutions";

  const body = [
    "Hi Tempus Team,",
    "",
    "I'd like to schedule a free consultation. Here's a bit about me and what I'm looking for:",
    "",
    "─── My Information ───────────────────────",
    "Name:               ",
    "Business Name:      ",
    "Phone Number:       ",
    "Industry / Trade:   ",
    "",
    "─── Services I'm Interested In ───────────",
    "  [ ] Website Creation          ($1,500 – $2,000)",
    "  [ ] Business Email            ($250 – $500)",
    "  [ ] CRM Setup                 ($1,000 – $2,000)",
    "  [ ] Scheduling Implementation ($1,000 – $2,000)",
    "  [ ] Dashboard Analytics       ($1,000 – $2,000)",
    "  [ ] Lead Capture Automation   ($1,000 – $2,000)",
    "  [ ] Follow Up Automation      ($1,000 – $2,000)",
    "  [ ] Review Management         ($1,000 – $2,000)",
    "  [ ] Subscription Support      ($99 – $500 / mo)",
    "  [ ] Not sure yet – need guidance",
    "",
    "─── My Situation ─────────────────────────",
    "What's your biggest challenge right now?",
    "",
    "",
    "What does your current tech setup look like (if any)?",
    "",
    "",
    "Any specific goals or questions?",
    "",
    "",
    "─── Best Way to Reach Me ─────────────────",
    "Preferred contact:  (email / phone / text)",
    "Best time to reach: ",
  ].join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function getServiceMailto(serviceName: string, servicePrice: string): string {
  const subject = `Inquiry – ${serviceName} | Tempus Solutions`;

  const body = [
    "Hi Tempus Solutions,",
    "",
    `I'm interested in your ${serviceName} service (${servicePrice}) and would like to learn more.`,
    "",
    "─── My Information ───────────────────────",
    "Name:               ",
    "Business Name:      ",
    "Phone Number:       ",
    "Industry / Trade:   ",
    "",
    "─── My Situation ─────────────────────────",
    "What's your biggest challenge right now?",
    "",
    "",
    "What does your current setup look like (if any)?",
    "",
    "",
    "What's your timeline / urgency?",
    "",
    "",
    "Any other questions?",
    "",
    "",
    "─── Best Way to Reach Me ─────────────────",
    "Preferred contact:  (email / phone / text)",
    "Best time to reach: ",
  ].join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
