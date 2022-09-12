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
    <Link
      to={`/card/${title}`}
      className="flex flex-col sm:flex-row overflow-hidden rounded-2xl shadow-lg myShadow border border-black p-2 my-4"
    >
      <div className="min-w-[12%] flex items-center justify-center">
        <img
          src={photos.Logo}
          alt=""
          className="min-h-32 min-w-32 overflow-hidden rounded-md"
        />
      </div>
      <div className="w-full sm:w-10/12 sm:ml-4">
        <div className="font-bold">{title}</div>
        <div className="my-2">{description}</div>
        <div className="flex gap-2 justify-start items-center">
          {hashtag?.map((tag, index) => {
            return (
              <span key={index} className={tag.isOk ? 'Tag' : 'text-mainBlue'}>
                {tag.text}
              </span>
            );
          })}
        </div>
      </div>
    </Link>
  );
};
