import React from "react";

export default function Hero({ children }) {
  return (
    <div>
      <div className="hero">
        <div className="banner">
          <h1>Crunchy Pizza Corner</h1>
          <p>Made with <span class="heart">♥</span> in Gan Studio</p>
          {children}
        </div>
      </div>
    </div>
  );
}
