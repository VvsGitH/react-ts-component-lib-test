import React, { type ReactNode, useState } from "react";

import { Button } from "../Button";

export function Counter(): ReactNode {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <Button onClick={() => setCount((c) => c + 1)}>Add 1</Button>
    </div>
  );
}
