type DemoProfile = {
  name?: string;
  email?: string;
  phone?: string;
};

const DEMO_EMAIL_TO = "Sarah.Schmidt@sintef.no";
const DEMO_EMAIL_SUBJECT = "Request for Technical Demo – Semantic Matter";

function getStringValue(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function extractProfile(candidate: unknown): DemoProfile {
  if (!candidate || typeof candidate !== "object") return {};
  const source = candidate as Record<string, unknown>;

  const firstName = getStringValue(source.firstName);
  const lastName = getStringValue(source.lastName);
  const fullNameFromParts =
    firstName || lastName ? `${firstName ?? ""} ${lastName ?? ""}`.trim() : undefined;

  return {
    name:
      getStringValue(source.name) ??
      getStringValue(source.fullName) ??
      getStringValue(source.displayName) ??
      fullNameFromParts,
    email: getStringValue(source.email) ?? getStringValue(source.emailAddress),
    phone:
      getStringValue(source.phone) ??
      getStringValue(source.phoneNumber) ??
      getStringValue(source.mobile)
  };
}

function readProfileFromStorage(): DemoProfile {
  if (typeof window === "undefined") return {};
  const keys = ["auth_user", "authenticated_user", "user_profile", "profile", "user"];

  for (const key of keys) {
    const raw = window.localStorage.getItem(key);
    if (!raw) continue;

    try {
      const parsed = JSON.parse(raw);
      const profile = extractProfile(parsed);
      if (profile.name || profile.email || profile.phone) return profile;
    } catch {
      continue;
    }
  }

  return {};
}

function readProfileFromWindow(): DemoProfile {
  if (typeof window === "undefined") return {};

  const win = window as Window & {
    __AUTH_USER__?: unknown;
    authenticatedUser?: unknown;
    currentUser?: unknown;
    user?: unknown;
  };

  const sources = [win.__AUTH_USER__, win.authenticatedUser, win.currentUser, win.user];

  for (const source of sources) {
    const profile = extractProfile(source);
    if (profile.name || profile.email || profile.phone) return profile;
  }

  return {};
}

function getDemoProfile(overrides?: DemoProfile): DemoProfile {
  const windowProfile = readProfileFromWindow();
  const storageProfile = readProfileFromStorage();

  return {
    name: overrides?.name ?? windowProfile.name ?? storageProfile.name,
    email: overrides?.email ?? windowProfile.email ?? storageProfile.email,
    phone: overrides?.phone ?? windowProfile.phone ?? storageProfile.phone
  };
}

function buildContactLine(email?: string, phone?: string): string {
  if (!email && !phone) return "[Your Contact Information]";
  if (email && phone) return `${email} | ${phone}`;
  if (email) return `${email} | [Your Phone Number]`;
  return `[Your Email] | ${phone}`;
}

export function openRequestDemoEmail(overrides?: DemoProfile) {
  if (typeof window === "undefined") return;

  const profile = getDemoProfile(overrides);
  const name = profile.name ?? "[Your Name]";
  const contactLine = buildContactLine(profile.email, profile.phone);

  const body = [
    "Dear Sarah Schmidt,",
    "",
    "I am interested in scheduling a technical demo for Semantic Matter. Please let me know your availability.",
    "",
    "Thank you,",
    name,
    contactLine
  ].join("\n");

  const mailtoUrl = `mailto:${DEMO_EMAIL_TO}?subject=${encodeURIComponent(DEMO_EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
}
