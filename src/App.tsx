/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const paragraph = css`
  color: turquoise;

  header & {
    color: green;
  }
`;

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <header>
        <p css={paragraph}>This is green since it's inside a header</p>
      </header>
      <p css={paragraph}>This is turquoise since it's not inside a header.</p>
      <button onClick={() => setCount((before) => before + 1)}>up</button>
    </div>
  );
}
