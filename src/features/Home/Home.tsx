import { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { photos } from '../../base/assets';
import { DatasetCard } from '../../base/components/DatasetCard/DatasetCard';
import { useWindowSize } from '../../base/hooks/';
import { datasets } from '../../base/data/datasets';

const itemsPerPage = 20;
const Home: FC = () => {
  const [currentItems, setCurrentItems] = useState<any>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log('endOffset', endOffset);
    console.log('current item:', datasets.slice(itemOffset, endOffset));

    setCurrentItems(datasets.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(datasets.length / itemsPerPage));
  }, [itemOffset]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % datasets.length;
    console.log('newOffset:', newOffset);

    window.scroll({
      top: 330,
    });
    setItemOffset(newOffset);
  };
  console.log(datasets?.length);

  const Cards = () => {
    return currentItems?.map(({ title, description, image, hashtag }: any) => {
      return (
        <DatasetCard
          key={title}
          title={title}
          description={description}
          hashtag={hashtag}
          image={image}
        />
      );
    });
  };

  return (
    <div>
      <section>
        <img
          className="rounded-lg mb-4 sm:mb-0"
          src={windowSize[0] > 640 ? photos.Banner : photos.MobileBanner}
          alt=""
        />
      </section>
      <section>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="relative md:w-2/3 lg:w-1/3 mt-4 lg:mt-0">
            <input
              type="text"
              placeholder="Search for Datasets"
              className="Input pr-8 w-full z-0"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-1 right-2 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="text-gray-500 font-bold">
            {windowSize[0] > 640
              ? 'Share your dataset with us!'
              : 'Remote Sensing Datasets'}
          </div>
        </div>
        <h2 className="mt-4">100 dataset result for 'remote sensing'</h2>
      </section>
      <section>
        <Cards />
      </section>
      {datasets?.length > 20 && (
        <section>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            className="pagination"
          />
        </section>
      )}
    </div>
  );
};

export default Home;
