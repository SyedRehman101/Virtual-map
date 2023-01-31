import React from 'react';

const Faq = () => {
  return (
    <section className="faq">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
        <div class="block-text text-center">
          <h6 class="sub-heading uppercase"><span>Faqs</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Frequently Aksed Questions</h3>
          <p className='text-base-100 mt-6 leading-loose'>Below is a list of frequently asked questions and answers from partners and 3D artist <br />Please check this FAQ first before contacting us.</p>
        </div>

        <div className='faq__main flat-tabs'>

        </div>
      </div>
    </section>
  );
};

export default Faq;