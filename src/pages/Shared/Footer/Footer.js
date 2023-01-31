import React from 'react';
import { FaFacebookF, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import './footer.css'

const Footer = () => {
  const date = new Date();
  return (
    <footer className="lg:max-w-screen-xl w-full mx-auto p-4 mt-20">
      <div className="footer__main">
        <div class="block-text text-center">
          <h3 class="heading text-4xl text-base-100 font-bold">Get Newsletter</h3>
          <p className='text-base-100 py-4'>Get udpated with news, tips &amp; tricks</p>
        </div>
        <form action="" className='form'>
          <div className="from-group text-center">
            <input type="email" placeholder="Your Email" className="input input-bordered input-info w-full max-w-screen-sm form-control" />
          </div>
          <button class="action-btn"><span>Subscribe</span></button>
        </form>
      </div>

      <div className="footer__bottom">
        <div className='rounded-md sm:py-2 py-1.5 md:px-12 px-8 text-center text-base ' style={{
          background: ' linear-gradient(34deg, rgba(176,162,181,1) 22%, rgba(78,67,82,1) 89%)'
        }}>
          <p>Logo Here</p>
        </div>

        <div className='text-center'>
          <ul class="list">
            <li><a href="/">Home</a></li>
            <li><a href="/nfts">Explore</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/nfts">Collections</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <p>Copyright &copy {date.getFullYear()}, Toranto. Design By Ahmmed</p>
        </div>

        <ul className='list-social'>
          <li><a href="/"><FaFacebookF className='text-base-100' /></a></li>
          <li><a href="/"><FaTwitter className='text-base-100' /></a></li>
          <li><a href="/"><FaTelegramPlane className='text-base-100' /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;