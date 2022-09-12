import { Link, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { datasets } from '../../base/data/datasets';

import { A11y, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const DatasetInfo = () => {
  const { title } = useParams();

  return (
    <div>
      <section className="">
        <h1 className="mb-4 font-bold">{title}</h1>
        <div className="flex flex-col md:flex-row md:items-start md:justify-center mb-8">
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
          <div className="md:w-3/12 md:mt-0 mt-4 md:ml-4">
            <ul className="w-full sm:w-2/3 text-center md:w-full flex flex-col md:items-center shadow-xl border border-gray-200 text-mainBlue rounded-2xl p-3">
              {datasets.map((dataset: any) => {
                return (
                  <li className="flex listStyleImage items-center justify-center mb-2">
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
          </div>
        </div>
      </section>
      <section className="select-none pb-4">
        <h2 className="my-4">Additional datasets to explore:</h2>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {datasets?.map((dataset: any) => {
            return (
              <SwiperSlide>
                <div className="h-40">
                  <img
                    src={require(`../../base/assets/images/${dataset.image}`)}
                    alt=""
                    className="rounded-md max-h-24"
                  />{' '}
                  <Link to={`/dataset-info/${dataset.title}`}>{dataset.title}</Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default DatasetInfo;
