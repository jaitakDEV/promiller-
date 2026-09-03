import "./SupportButton.css";

export default function SupportButton({ mobileFooter = false }) {
  return (
    <a
      href="mailto:support@promiller.com"
      className={`support-btn ${mobileFooter ? "mobile-footer-btn" : ""}`}
      title="Support"
    >
      Support
    </a>
  );
}