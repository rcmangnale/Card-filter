
import React, { useState } from "react";
import Categories from "./Categories";

export default function Trending() {
  const [data, setData] = useState(Categories);
const CategoryFilter =(catItem)=>{
const Result =Categories.filter((curDate)=>{
return curDate.category ===catItem;
})
setData(Result)
}

  return (
    <>
      <header className="px-2 lg:px-12 ">
        <div className="px-8 lg:px-0">
          <p className="pt-6 font-mono text-3xl font-semibold ">Live Spaces</p>
          <p className=" font-segoe">
            <i class="fa fa-check-circle mr-2" aria-hidden="true"></i>All NFTs
            on Cyber either belong to or were minted by their space creator.
          </p>
        </div>
        <div className="grid grid-cols-3 my-8 lg:grid-cols-7">
          <button
          onClick={()=> CategoryFilter('trending')}
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            🔥 24h Trending
          </button>
          <button
          onClick={()=> CategoryFilter('latest')}
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            Latest Shows
          </button>
          <button
          onClick={()=> CategoryFilter('popular')}
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            Most Popular
          </button>
          <button
          onClick={()=> CategoryFilter('genesis')}
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            💎 In Genesis
          </button>
          <button
          onClick={()=> CategoryFilter('temple')}
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            🛕 In Temple
          </button>
          <button
          onClick={()=> CategoryFilter('void')}
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            {" "}
            🌪 In Void
          </button>
          <button
          onClick={()=> CategoryFilter('Bayc')}
            type="button"
            class="py-2 px-6 mr-2 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-black hover:text-white focus:z-10 focus:ring-4 "
          >
            🦍 #BAYC
          </button>
        </div>
      </header>
      <main className="grid lg:grid-cols-3">
        
          {data.map((values) => {
            const {id, title, image} = values;
            return (
              <>
              <div class="container my-12 mx-auto px-4 md:px-12" key={id}>
                <div class=" -mx-1 lg:-mx-4 grid grid-cols-3" >
                  <div class="my-1 px-1 w-96  lg:my-4 lg:px-4 ">
                    <article class="overflow-hidden rounded-lg shadow-xl">
                      <a href="#picture">
                        <img
                          alt="Loadingimage..."
                          class="block h-40 w-96"
                          src={image}
                        />
                      </a>

                      <header class="flex items-center justify-between leading-tight p-2 md:p-4 bg-black text-white">
                        <h1 class="text-xl">
                          <a
                            class="no-underline hover:underline "
                            href="#title"
                          >
                            {title}
                          </a>
                        </h1>
                      </header>

                      <footer class=" leading-none p-2 md:p-4 bg-black text-white">
                        <button class="bg-neutral-800 w-36 hover:bg-white text-white font-semibold hover:text-black py-2 px-2   hover:border-transparent rounded">
                          @freezecorle... 0x890aac...
                        </button>
                      </footer>
                    </article>
                  </div>
                 
                </div>
                </div>
              </>
            );
          })}
        
      </main>
    </>
  );
}
