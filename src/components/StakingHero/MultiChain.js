import React from "react";
import { FaDiscord, FaFire, FaRocket } from "react-icons/fa";

const MultiChain = () => {
  return (
    <section className="multi-chain">
      <div className="lg:max-w-screen-xl w-full mx-auto">
        <div className="content staking-heading">
          <span className="text-xl">Projects</span>
          <h2 className="text-6xl font-bold text-base-100 mt-4">
            Multi-chain IGOs
          </h2>
          <p className="text-lg text-sky-200 mt-4">
            Join IGOs on multiple blockchains in a single click. Support
            game by <br /> providing LP or just stake the game and get
            rewards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
          <div className="multi-chain-content">
            <div className="flex items-center mb-8">
              <div className="p-6 bg-darkBlue rounded-xl">
                <FaDiscord className="text-4xl text-pure" />
              </div>
              <div className="ml-6">
                <h2 className="title text-4xl text-pure font-bold">
                  Submit KYC
                </h2>
                <p className="text-sky-200 mt-3">
                  The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="p-6 bg-blue-800 rounded-xl">
                <FaFire className="text-4xl text-pure" />
              </div>
              <div className="ml-6">
                <h2 className="title text-4xl text-pure font-bold">
                  Submit KYC
                </h2>
                <p className="text-sky-200 mt-3">
                  The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested.
                </p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <div className="p-6 bg-darkBlue rounded-xl">
                <FaRocket className="text-4xl text-pure" />
              </div>
              <div className="ml-6">
                <h2 className="title text-4xl text-pure font-bold">
                  Submit KYC
                </h2>
                <p className="text-sky-200 mt-3">
                  The standard chunk of Lorem Ipsum used since the
                  1500s is reproduced below for those interested.
                </p>
              </div>
            </div>
          </div>

          <div className="wrapper-animation d-none d-md-block">
            <div class="blockchain-wrapper">
              <div class="pyramid">
                <div class="square">
                  <div class="triangle"></div>
                  <div class="triangle"></div>
                  <div class="triangle"></div>
                  <div class="triangle"></div>
                </div>
              </div>
              <div class="pyramid inverse">
                <div class="square">
                  <div class="triangle"></div>
                  <div class="triangle"></div>
                  <div class="triangle"></div>
                  <div class="triangle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiChain;
