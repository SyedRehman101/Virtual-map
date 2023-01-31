import React from 'react';

const FaqItem = ({ question, answer }) => {
  return (
    <div tabIndex={0} className="collapse collapse-plus faq-body mb-4">
      <div className="collapse-title">
        {question}
      </div>
      <div className="collapse-content text-base-100">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;