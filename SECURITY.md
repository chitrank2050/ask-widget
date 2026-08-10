# Security Policy

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 0.x.x   | ✅        |

## Reporting a Vulnerability

Do NOT open a public GitHub issue for security vulnerabilities.

**Option 1 - GitHub private disclosure (preferred):**

1. Go to the Security tab on this repository
2. Click "Report a vulnerability"
3. Fill in the details

**Option 2 - Email:**
Send details to [chitrank2050@gmail.com](mailto:chitrank2050@gmail.com)

You will receive a response within 48 hours.

---

## Security Requirements & Guarantees

### What to Expect (Security Guarantees)

- **Token Security**: The `apiToken` provided to the widget is sent securely via HTTPS requests. It is never logged, stored in local storage, or transmitted to any third party other than the configured `apiUrl`.
- **Sanitized Output**: Message rendering uses safe HTML parsing/escaping to prevent Cross-Site Scripting (XSS) when rendering markdown.

### What NOT to Expect

- **Client-Side Secret Storage**: The `apiToken` is passed in client-side code. This means users of your site can inspect network requests or source code to extract the token. Do not use high-privilege administrative tokens directly in client-side code; instead, use scoped user tokens or route requests through a proxy server.
