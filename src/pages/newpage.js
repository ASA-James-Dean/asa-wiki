import React, { useState } from 'react';

export default function MyButton() {
  const [text, setText] = useState("Click me!");

  return (
    <button onClick={() => setText("You clicked!")}>{text}</button>
  );
}