/**
 * All SVG icon components used in the chat widget.
 * Centralised here to avoid duplication across component files.
 */

export const TerminalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.75 5.75h14.5v12.5H4.75z" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="m8 10 2.6 2.2L8 14.4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M12.5 15h3.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
)

export const CloseIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path
      d="M5.5 5.5 14.5 14.5M14.5 5.5 5.5 14.5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
)

export const ResetIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M3 3v5h5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
)

export const SendIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 19 18 12 6 5l1.6 5.3L13 12l-5.4 1.7L6 19Z" fill="currentColor" />
  </svg>
)
