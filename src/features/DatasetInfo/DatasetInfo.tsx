import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { A11y, Pagination } from 'swiper';
import 'swiper/css';
import { RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../base/hooks';
import { setLoading } from '../../base/redux';
import { apiService } from '../../base/services';
import { baseUrl } from '../../base/config';

const ImageSection = ({ fullScreenImage, imageUrl }: any) => {
  return (
    <div ref={fullScreenImage} className="transition-all">
      <img
        src={baseUrl + imageUrl}
        alt=""
        className="rounded-md"
        crossOrigin="anonymous"
      />
    </div>
  );
};

const HashtagSection = ({ hashtag }: any) => {
  return hashtag?.map((hashtag: any, index: number) => {
    return (
      <li key={index} className="flex listStyleImage items-center justify-center mb-2">
        <Link
          to={`/datasets/?hashtag=${hashtag}`}
          className="flex items-center justify-center"
        >
          {hashtag}
        </Link>
      </li>
    );
  });
};

const BodySection = ({ body }: any) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: body,
      }}
    ></div>
  );
};

const DatasetInfo = () => {
  const { title } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>(null);

  const fullScreenImage: RefObject<any> = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(setLoading(true));

    return () => {};
  }, []);

  useEffect(() => {
    fetchData();

    return () => {};
  }, [location.pathname]);

  const fetchData = async () => {
    try {
      const result = await apiService.get(`datasets/single/${title}`);
      if (result.status === 200) {
        setData(result.data);
        dispatch(setLoading(false));
      }
    } catch (error) {
      navigate(-1);
      dispatch(setLoading(false));
    }
  };

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
            <BodySection body={data?.body} />
          </div>
          <div className="flex flex-col items-center lg:w-2/12 md:w-3/12 md:mt-0 mt-4 md:ml-4">
            <ul className="w-full hidden sm:w-2/3 text-center md:w-full sm:flex flex-col md:items-center shadow-xl border border-gray-200 text-mainBlue rounded-2xl p-3">
              <HashtagSection hashtag={data?.hashtag} />
            </ul>
            <div
              className="cursor-pointer w-full sm:w-2/3 md:w-full mt-4 min-h-[11.5rem] md:min-h-full"
              onClick={handleClickImage}
            >
              <ImageSection imageUrl={data?.imageUrl} fullScreenImage={fullScreenImage} />
            </div>
          </div>
        </div>
      </section>
      {data?.similarDatasets?.length !== 0 && (
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
            {data?.similarDatasets?.map((dataset: any, index: number) => {
              return (
                <SwiperSlide className="p-4" key={index}>
                  <Link
                    to={`/datasets/${dataset.title}`}
                    onClick={() => {
                      window.scroll({
                        top: 0,
                      });
                    }}
                    className="h-48 w-44 flex flex-col justify-between rounded-md p-2 hover:scale-110 cursor-pointer transition-transform border border-gray-300"
                  >
                    <div className="h-[8.5rem] overflow-hidden">
                      <img
                        src={baseUrl + dataset.imageUrl}
                        alt=""
                        className="rounded-md w-full h-full"
                        crossOrigin="anonymous"
                        style={{
                          objectFit: 'contain',
                        }}
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
      )}
    </div>
  );
};

export default DatasetInfo;
