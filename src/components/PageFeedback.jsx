import React, { useState } from 'react';

export default function PageFeedback() {
  const [submitted, setSubmitted] = useState(null);

  if (submitted) {
    return (
      <div className="page-feedback">
        <p>✅ Thanks for your feedback!</p>
      </div>
    );
  }

  return (
    <div className="page-feedback">
      <p>Was this page helpful?</p>
      <button className="feedback-btn" onClick={() => setSubmitted('yes')}>
        👍 Yes
      </button>
      <button className="feedback-btn" onClick={() => setSubmitted('no')}>
        👎 No
      </button>
    </div>
  );
}
