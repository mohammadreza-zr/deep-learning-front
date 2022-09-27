import { FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link, useSearchParams } from 'react-router-dom';
import { DatasetCard } from '../../base/components/DatasetCard/DatasetCard';
import { useAppDispatch } from '../../base/hooks';
import { setLoading } from '../../base/redux';
import { apiService } from '../../base/services';

const itemsPerPage = 20;
let searchTimeOut: string | number | NodeJS.Timeout | undefined;
const DatasetList: FC = () => {
  const [currentItems, setCurrentItems] = useState<any>();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [datasets, setDatasets] = useState<any>(null);
  const [windowSize] = useState(window.innerWidth);
  const [search, setSearch] = useState<string>('');
  const [hashtagFiltered, setHashtagFiltered] = useState<boolean>(false);
  const [lastSelectedHashtag, setLastSelectedHashtag] = useState<string>('');
  const [filterMenuIsOpen, setFilterMenuIsOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (datasets) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(datasets.slice(itemOffset, endOffset));
    }
  }, [itemOffset, datasets]);

  // useEffect(() => {
  //   fetchDatasetList();
  //   return () => {};
  // }, []);

  const fetchDatasetList = async () => {
    try {
      const tag = searchParams.get('hashtag');
      if (search) setSearch('');
      if (filterMenuIsOpen) handleToggleFilterMenu();
      const result = await apiService.get(`datasets?${tag ? 'hashtag=' + tag : ''}`);
      if (result.status === 200) {
        setDatasets(result.data.data);
        setPageCount(result.data.count);
        if (tag) setHashtagFiltered(true);
        else setHashtagFiltered(false);
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  const handleClearFilters = async () => {
    try {
      if (search) setSearch('');
      if (filterMenuIsOpen) handleToggleFilterMenu();
      const result = await apiService.get(`datasets`);
      if (result.status === 200) {
        setDatasets(result.data.data);
        setPageCount(result.data.count);
        setHashtagFiltered(false);
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % datasets.length;
    console.log('newOffset:', newOffset);

    window.scroll({
      top: 330,
    });
    setItemOffset(newOffset);
  };

  const Cards = () => {
    if (datasets?.length === 0) return <h2>Not found!</h2>;
    return currentItems?.map(({ title, hashtag }: any) => {
      return <DatasetCard key={title} title={title} hashtag={hashtag} />;
    });
  };

  useEffect(() => {
    if (search?.length > 0) {
      clearTimeout(searchTimeOut);
      searchTimeOut = setTimeout(() => {
        handleFilter('');
      }, 200);
    } else {
      fetchDatasetList();
    }
    return () => {};
  }, [search]);

  const handleFilter = async (e: any) => {
    let hashtag: string = e?.target?.innerText;
    if (hashtag) setLastSelectedHashtag(hashtag);
    else hashtag = lastSelectedHashtag;
    if (filterMenuIsOpen) handleToggleFilterMenu();

    try {
      const result = await apiService.get(
        `datasets/${search}?${hashtag ? 'hashtag=' + hashtag : ''}`,
      );
      if (result.status === 200) {
        setDatasets(result.data.data);
        setPageCount(result.data.count);
        setHashtagFiltered(true);
      }
    } catch (err) {
      dispatch(setLoading(false));
    }
  };

  const handleToggleFilterMenu = () => {
    setFilterMenuIsOpen((pre: boolean) => !pre);
  };

  return (
    <div className="flex flex-col lg:flex-row border-t border-gray-300 relative">
      <aside
        className={`pt-8 border-gray-100 bg-white lg:static lg:px-0 lg:col-span-4 xl:col-span-3 lg:border-r lg:bg-gradient-to-l from-gray-50-to-white
			${
        filterMenuIsOpen ? 'block absolute top-0 left-0 w-full h-full z-10 p-8' : 'hidden'
      } lg:block lg:w-1/4`}
      >
        {filterMenuIsOpen && (
          <button className="text-xl w-full" type="button">
            <svg
              className="ml-auto"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              role="img"
              width="1.1em"
              height="1.1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              onClick={handleToggleFilterMenu}
            >
              <path
                d="M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        )}
        {hashtagFiltered && (
          <Link
            to={`/datasets`}
            onClick={handleClearFilters}
            className="tag cursor-pointer tag-red"
          >
            Clear filter
          </Link>
        )}
        <div className="mb-4">
          <div className="flex items-baseline mb-3">
            <h3 className="font-medium">Tasks</h3>
          </div>
          <div className="flex flex-wrap">
            <button onClick={handleFilter} className="tag tag-red">
              Segmentation
            </button>
            <button onClick={handleFilter} className="tag tag-red">
              Classification
            </button>
            <button onClick={handleFilter} className="tag tag-red">
              Detection
            </button>
            <button onClick={handleFilter} className="tag tag-red">
              Change Detection
            </button>
            <button onClick={handleFilter} className="tag tag-red">
              Cloud Removal
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline mb-3">
            <h3 className="font-medium">Data Type</h3>
          </div>
          <div className="flex flex-wrap">
            <button onClick={handleFilter} className="tag tag-purple">
              Hyper Spectral
            </button>
            <button onClick={handleFilter} className="tag tag-purple">
              Hight-Resolution
            </button>
            <button onClick={handleFilter} className="tag tag-purple">
              Thermal
            </button>
            <button onClick={handleFilter} className="tag tag-purple">
              Radar
            </button>
            <button onClick={handleFilter} className="tag tag-purple">
              LiDAR
            </button>
            <button onClick={handleFilter} className="tag tag-purple">
              Audio
            </button>
            <button onClick={handleFilter} className="tag tag-purple">
              3D
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline mb-3">
            <h3 className="font-medium">Platforms</h3>
          </div>
          <div className="flex flex-wrap">
            <button onClick={handleFilter} className="tag tag-green">
              Satellite
            </button>
            <button onClick={handleFilter} className="tag tag-green">
              AirBorne
            </button>
            <button onClick={handleFilter} className="tag tag-green">
              UAVs/Drone
            </button>
            <button onClick={handleFilter} className="tag tag-green">
              Balloon
            </button>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-baseline mb-3">
            <h3 className="font-medium">Satellites</h3>
          </div>
          <div className="flex flex-wrap">
            <button onClick={handleFilter} className="tag tag-indigo">
              Landsat
            </button>
            <button onClick={handleFilter} className="tag tag-indigo">
              Sentinel
            </button>
            <button onClick={handleFilter} className="tag tag-indigo">
              Ikonos
            </button>
            <button onClick={handleFilter} className="tag tag-indigo">
              Worldview
            </button>
            <button onClick={handleFilter} className="tag tag-indigo">
              Spot
            </button>
          </div>
        </div>
      </aside>

      <main className="lg:w-3/4 pl-4 py-8 relative">
        <section className="mb-4 flex flex-col md:items-center md:flex-row">
          <h1 className="mr-8">
            Dataset:
            <span className="ml-2 font-normal text-gray-400 w-16">{pageCount}</span>
          </h1>
          <div className="relative my-2 md:my-0 md:w-1/3">
            <input
              type="text"
              placeholder="Search for Datasets"
              className="Input pr-8 w-full z-0"
              onChange={(e: any) => setSearch(e.target.value)}
              value={search}
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
          <button
            className="lg:hidden btn inline-flex text-sm md:ml-4"
            type="button"
            onClick={handleToggleFilterMenu}
          >
            <svg
              className="mr-1.5 "
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M18 28h-4a2 2 0 0 1-2-2v-7.59L4.59 11A2 2 0 0 1 4 9.59V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3.59a2 2 0 0 1-.59 1.41L20 18.41V26a2 2 0 0 1-2 2zM6 6v3.59l8 8V26h4v-8.41l8-8V6z"></path>
            </svg>{' '}
            Add filters
          </button>
          <div className="text-gray-500 font-bold md:ml-auto">
            {windowSize >= 768
              ? 'Share your dataset with us!'
              : 'Remote Sensing Datasets'}
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[48px]">
          <Cards />
        </section>
        {datasets?.length > 20 && (
          <section className="mt-4 absolute bottom-0 left-0 w-full">
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
      </main>
    </div>
  );
};

export default DatasetList;
