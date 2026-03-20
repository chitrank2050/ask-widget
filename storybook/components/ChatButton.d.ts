/**
 * Floating launcher button — shown when the chat panel is closed.
 * Clicking opens the chat panel.
 */
interface ChatButtonProps {
    /** Accessible label for the button — uses widget title */
    title: string;
    /** Called when the button is clicked */
    onClick: () => void;
}
/**
 * Floating launcher button with notification dot and terminal icon.
 *
 * @param props - See ChatButtonProps
 */
export default function ChatButton({ title, onClick }: ChatButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
