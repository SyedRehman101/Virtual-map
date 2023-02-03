import React from 'react';
import './staking.css';
import stakingBg from '../../assets/Nft-Market_img/hero_bg.jpeg';
import StakingHero from '../../components/StakingHero/StakingHero';
import StakingProject from '../../components/StakingHero/StakingProject';

const Staking = () => {
  return (
    <>
      <section className='staking py-20' style={{ backgroundImage: `linear-gradient(0deg, #090919, rgba(9, 10, 26, 0.8)), url(${stakingBg})` }}>
        <StakingHero></StakingHero>
      </section>
      <StakingProject></StakingProject>
    </>
  );
};

export default Staking;