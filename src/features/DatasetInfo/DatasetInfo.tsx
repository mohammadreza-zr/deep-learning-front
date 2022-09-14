import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { datasets } from '../../base/data/datasets';

import { A11y, Pagination } from 'swiper';
import 'swiper/css';
import { RefObject, useRef } from 'react';

const DatasetInfo = () => {
  const { title } = useParams();
  const fullScreenImage: RefObject<any> = useRef(null);
  const imageLink = datasets.filter((dataset: any) => dataset.title === title);

  const checkForHaveClassName = (className: string, classList: []) => {
    let status = false;
    classList?.forEach((item: any) => {
      if (item === className) {
        status = true;
      }
    });
    return status;
  };

  const handleClickImage = () => {
    if (fullScreenImage.current) {
      const status = checkForHaveClassName(
        'full-screen',
        fullScreenImage.current.classList,
      );
      console.log(status);
      if (status) {
        fullScreenImage.current.classList.remove('full-screen');
      } else {
        fullScreenImage.current.classList.add('full-screen');
      }
    }
  };

  return (
    <div>
      <section className="">
        <h1 className="mb-4 font-bold">{title}</h1>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-10">
          <div className="md:w-9/12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
              architecto quisquam harum excepturi culpa aliquam similique alias mollitia
              illo. Sit rerum omnis mollitia iusto ad quos eum dignissimos in.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, error.
              Incidunt non maiores laboriosam illo sequi facilis, sint sit voluptate
              reprehenderit totam hic ad eveniet a ipsum architecto dicta accusamus?
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nam
              architecto quisquam harum excepturi culpa aliquam similique alias mollitia
              illo. Sit rerum omnis mollitia iusto ad quos eum dignissimos in.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, error.
              Incidunt non maiores laboriosam illo sequi facilis, sint sit voluptate
              reprehenderit totam hic ad eveniet a ipsum architecto dicta accusamus?
            </p>
          </div>
          <div className="flex flex-col items-center lg:w-2/12 md:w-3/12 md:mt-0 mt-4 md:ml-4">
            <ul className="w-full hidden sm:w-2/3 text-center md:w-full sm:flex flex-col md:items-center shadow-xl border border-gray-200 text-mainBlue rounded-2xl p-3">
              {datasets.map((dataset: any, index: number) => {
                return (
                  <li
                    key={index}
                    className="flex listStyleImage items-center justify-center mb-2"
                  >
                    <Link
                      to={`/dataset-info/${dataset.title}`}
                      className="flex items-center justify-center"
                    >
                      {dataset.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div
              className="cursor-pointer w-full sm:w-2/3 md:w-full mt-4 min-h-[11.5rem] md:min-h-full"
              onClick={handleClickImage}
            >
              <div ref={fullScreenImage} className="transition-all">
                <img
                  src={require(`../../base/assets/images/${imageLink[0]?.image}`)}
                  alt=""
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="select-none">
        <h2 className="my-4 font-bold">Additional datasets to explore:</h2>
        <Swiper
          modules={[A11y, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          className="swiper_center"
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            380: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {datasets?.map((dataset: any, index: number) => {
            return (
              <SwiperSlide className="p-4" key={index}>
                <Link
                  to={`/dataset-info/${dataset.title}`}
                  onClick={() => {
                    window.scroll({
                      top: 0,
                    });
                  }}
                  className="h-48 w-44 flex flex-col justify-between rounded-md p-2 hover:scale-110 cursor-pointer transition-transform border border-gray-300"
                >
                  <div className="h-28">
                    <img
                      src={require(`../../base/assets/images/${dataset.image}`)}
                      alt=""
                      className="rounded-md"
                    />
                  </div>
                  <span className="font-size-16 h-7 min-h-fit line-clamp-1">
                    {dataset.title}
                  </span>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default DatasetInfo;
