import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { setLoading } from '../../redux';

interface CardProps {
  title: string;
  hashtag: string[];
}

export const DatasetCard: FC<CardProps> = ({ title, hashtag }) => {
  const dispatch = useAppDispatch();
  const handleGetUp = () => {
    window.scroll({
      top: 0,
    });
  };
  return (
    <article className="article group">
      <Link
        onClick={() => {
          dispatch(setLoading(true));
          handleGetUp();
        }}
        className="block p-2"
        to={`/datasets/${title}`}
      >
        <header className="flex items-center mb-0.5" title={title}>
          <svg
            className="mr-1 text-gray-400 group-hover:text-red-500 flex-none"
            aria-hidden="true"
            focusable="false"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 25 25"
          >
            <ellipse
              cx="12.5"
              cy="5"
              fill="currentColor"
              fillOpacity="0.25"
              rx="7.5"
              ry="2"
            ></ellipse>
            <path
              d="M12.5 15C16.6421 15 20 14.1046 20 13V20C20 21.1046 16.6421 22 12.5 22C8.35786 22 5 21.1046 5 20V13C5 14.1046 8.35786 15 12.5 15Z"
              fill="currentColor"
              opacity="0.5"
            ></path>
            <path
              d="M12.5 7C16.6421 7 20 6.10457 20 5V11.5C20 12.6046 16.6421 13.5 12.5 13.5C8.35786 13.5 5 12.6046 5 11.5V5C5 6.10457 8.35786 7 12.5 7Z"
              fill="currentColor"
              opacity="0.5"
            ></path>
            <path
              d="M5.23628 12C5.08204 12.1598 5 12.8273 5 13C5 14.1046 8.35786 15 12.5 15C16.6421 15 20 14.1046 20 13C20 12.8273 19.918 12.1598 19.7637 12C18.9311 12.8626 15.9947 13.5 12.5 13.5C9.0053 13.5 6.06886 12.8626 5.23628 12Z"
              fill="currentColor"
            ></path>
          </svg>{' '}
          <h4
            className="font-mono text-md truncate text-black dark:group-hover:text-yellow-500
                    group-hover:text-red-600
					"
          >
            {title}
          </h4>
        </header>
        <div className="flex gap-x-2 ml-1">
          {hashtag?.map((hashtag: string) => {
            return (
              <div key={hashtag} className="text-gray-400">
                {hashtag}
              </div>
            );
          })}
        </div>
      </Link>
    </article>
  );
};
