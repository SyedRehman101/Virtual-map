import React from 'react';
import './portfolio.css';
import protfolio from '../../assets/Images/portfolio-banner.png'
import PortfolioBox from './PortfolioBox';
import icon1 from '../../assets/svg/icon1.svg';
import icon2 from '../../assets/svg/icon2.svg';
import icon3 from '../../assets/svg/icon3.svg';
import icon4 from '../../assets/svg/icon4.svg';


const Portfolio = () => {
  return (
    <section className='portfolio'>
      <div className="pf-shape"></div>
      <div className='max-w-screen-xl mx-auto'>
        <div class="block-text text-center">
          <h6 class="sub-heading"><span>Join NFT Portfolio</span></h6>
          <h3 class="heading lg:text-4xl text-2xl text-base-100 font-bold leading-normal">Become a Cyfonii Player Now</h3>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-20">
          <div className="portfolio__left">
            <PortfolioBox
              icon={icon1}
              title="Connect your Wallet"
              summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
              step="1"
            ></PortfolioBox>

            <PortfolioBox
              icon={icon2}
              title="Buy your NFT"
              summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
              step="1"
            ></PortfolioBox>

            <PortfolioBox
              icon={icon3}
              title="Create collection"
              summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
              step="1"
            ></PortfolioBox>

            <PortfolioBox
              icon={icon4}
              title="Sell your NFT"
              summary="Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
              step="1"
            ></PortfolioBox>
          </div>

          <div className="portfolio__right">
            <div className="image">
              <img src={protfolio} alt="Portfolio Banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;