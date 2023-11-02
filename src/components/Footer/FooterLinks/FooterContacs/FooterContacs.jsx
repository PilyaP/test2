import React from "react";

export default function FooterContacs() {
  return (
    <ul>
      <li className="mb-[8px] max-w-[231px]">
        <a
          target="_blank"
          href="info@ppcwarehouses.com"
          className="flex flex-wrap"
        >
          <b className="font-semibold	text-16px">
            Write to us at the email address:
          </b>
          info@ppcwarehouses.com
        </a>
      </li>
      <li>
        <a href="tel:+17027010078">
          <b className="font-semibold text-16px">Phone:</b> +1 (702) 701-0078
        </a>
      </li>
    </ul>
  );
}
