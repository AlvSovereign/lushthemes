import * as React from "react";

function UpArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18 18" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.966 0L0 8.95l2.704 2.72 4.384-4.41V18h3.824V7.26l4.384 4.41L18 8.95 8.966 0z"
        fill="#000"
      />
    </svg>
  );
}

const MemoUpArrow = React.memo(UpArrow);
export default MemoUpArrow;
