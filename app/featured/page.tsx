
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiFilter } from "react-icons/fi";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/SIDEBAR";
export default function Featured() {
  return (
    <main className="my-20 max-w-[1300px] mx-auto flex gap-x-4 lg:gap-x-20">
      <section >
        <Sidebar/>
      </section>
      <section className="max-w-[1000px] mx-auto overflow-clip">
        <div className="flex gap-4 ml-10 md:ml-[400px] lg:ml-[620px] xl:ml-[800px] overflow-clip">
          <h1 className="flex items-center gap-2 font-semibold text-sm">
            Hide Filters
            <span>
              <FiFilter size={14} />
            </span>
          </h1>
          <h2 className="flex items-center gap-2 font-semibold text-sm">
            Sort By
            <span>
              <RiArrowDropDownLine size={25} />
            </span>
          </h2>
        </div>
        <div className="mb-20">
          <FeaturedCarousel />
        </div>
        <hr />
        <section className="my-10 ">
          <h1 className="font-semibold text-xl">Related Categories</h1>
          <div className="space-x-2 space-y-2 text-center">
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              Best Selling Products
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              Best Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              New Basketball Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              New Football Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              New Men&apos;s Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              New Running Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              Best Men&apos;s Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              New Jordan Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              Best Women&apos;s Shoes
            </Button>
            <Button className="bg-white text-black rounded-full border-[1px] shadow-none hover:bg-gray-200 hover:shadow-md">
              Best Training & Gym
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}
