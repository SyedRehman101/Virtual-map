import React from "react";
import "swiper/css";
import CategoryItem from "./CategoryItem";
import "./nftMarket.css";
import { BsSearch } from "react-icons/bs";
import { HiOutlineAdjustments } from "react-icons/hi";
import category from "./data/category";
import NftCard from "./NftCard";
const NftMarketPage = () => {
  return (
    <section className="artworks-area">
      <div className="lg:max-w-screen-xl w-full mx-auto p-4">
        <div className="category">
          <CategoryItem></CategoryItem>
        </div>

        <div className="search_filter mt-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <form action="" className="form">
                <div className="filter-by-search">
                  <select className="select item-category-select">
                    <option disabled selected>
                      Select Category
                    </option>
                    {
                      category.map(item => <option>{item.name}</option>)
                    }

                  </select>

                  <div class="filter-search-input">
                    <input type="text" placeholder="Search keyword" />
                    <button type="submit">
                      <BsSearch />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div class="filter-by-sale flex items-center">
              <div class="select-category-title flex items-center">
                <HiOutlineAdjustments size={25} color="#fff" /> <span className="ml-2 text-base-100 text-lg">Filters by</span>
              </div>
              <select class="sale-category-select">
                <option value="1">Auction</option>
                <option value="2">Fixed</option>
                <option value="3">On Sale</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          <div className="nftcard">
            <NftCard></NftCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NftMarketPage;
