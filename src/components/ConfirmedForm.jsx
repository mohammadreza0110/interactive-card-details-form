import React from "react";

export default function ConfirmedForm() {
  return (
    <div className="flex flex-col items-center">
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="40" cy="40" r="40" fill="url(#paint0_linear_0_318)" />
        <path
          d="M28 39.9199L36.0801 48L52.0801 32"
          stroke="white"
          stroke-width="3"
        />
        <defs>
          <linearGradient
            id="paint0_linear_0_318"
            x1="-23.0143"
            y1="11.5071"
            x2="1.03143e-06"
            y2="91.5071"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#6348FE" />
            <stop offset="1" stop-color="#610595" />
          </linearGradient>
        </defs>
      </svg>

      <h1 className="mt-8 mb-3 text-3xl font-bold">Thank You</h1>
      <span>We’ve added your card details</span>

      <button
        onClick={() => window.location.reload()}
        className="w-full py-3 mt-8 text-white transition-transform duration-200 rounded-lg bg-neutral-VeryDarkViolet active:scale-95"
      >
        continue
      </button>
    </div>
  );
}
