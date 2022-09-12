import { FC } from 'react';
import { Link } from 'react-router-dom';
import { photos } from '../../assets';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  hashtag: any[];
}

export const DatasetCard: FC<CardProps> = ({ title, description, image, hashtag }) => {
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row overflow-hidden rounded-2xl shadow-lg myShadow border border-black p-2 my-4">
      <div className="min-w-[11%] w-[7.1rem] h-28 flex items-center justify-center">
        <img
          src={require(`../../assets/images/${image}`)}
          alt=""
          className="min-h-32 min-w-32 w-full overflow-hidden rounded-md"
        />
      </div>
      <div className="flex flex-col items-start justify-center w-full sm:w-10/12 sm:ml-4">
        <Link to={`/dataset-info/${title}`} className="font-bold pt-[0.2rem]">
          {title}
        </Link>
        <div className="my-2 line-clamp-2 h-12">{description}</div>
        <div className="flex gap-x-2 justify-start items-center">
          {hashtag?.map((tag, index) => {
            return (
              <span key={index} className="text-mainBlue hover:Tag px-3 cursor-pointer">
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
