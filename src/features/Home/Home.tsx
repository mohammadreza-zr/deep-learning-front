import { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { photos } from '../../base/assets';
import { DatasetCard } from '../../base/components/DatasetCard/DatasetCard';

const cards = [
  {
    title: '1 this is Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
  {
    title: '8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis tempora quod possimus error reiciendis sunt et fuga quas quisquam, in cum similique quae cupiditate labore iure, hic accusamus.',
    views: 100,
    image: '1.png',
    hashtag: [
      {
        isOk: true,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: false,
        text: '#this',
      },
      {
        isOk: true,
        text: '#this',
      },
    ],
  },
];

const itemsPerPage = 4;
const Home: FC = () => {
  const [currentItems, setCurrentItems] = useState<any>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading cards from ${itemOffset} to ${endOffset}`);
    setCurrentItems(cards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(cards.length / itemsPerPage));
  }, [itemOffset]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % cards.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <section>
        <img src={photos.Banner} alt="" />
      </section>
      <section>
        <div className="flex flex-col-reverse lg:flex-row justify-between">
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
          <div className="text-gray-500">Home/Deep Learning Datasets</div>
        </div>
        <h2 className="mt-4">100 dataset result for 'remote sensing'</h2>
      </section>
      <section>
        {currentItems?.map(({ title, description, image, hashtag, views }: any) => {
          return (
            <DatasetCard
              key={title}
              title={title}
              description={description}
              hashtag={hashtag}
            />
          );
        })}
      </section>
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
    </div>
  );
};

export default Home;
