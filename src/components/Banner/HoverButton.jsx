import Link from "next/link";
import "./Button.css";
const HoverButton = () => {
  return (
    <Link href="/dashboard">
      <button className="Button">
      <span className="text">Get Started</span>
      <div className="svg-wrapper-1">
        <div className="svg-wrapper">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6 ml-2 icon"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </button>
    </Link>
  );
};

export default HoverButton;
