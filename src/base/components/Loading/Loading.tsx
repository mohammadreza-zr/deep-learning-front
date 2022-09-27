import { FC } from 'react';

export const Loading: FC = () => {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 bg-white">
      <div
        style={{ transform: 'translate(-50%, -50%)' }}
        className="relative top-1/2 left-1/2"
      >
        <svg
          style={{
            margin: 'auto',
            background: 'none',
            display: 'block',
            shapeRendering: 'auto',
          }}
          width="150px"
          height="150px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <path
            d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
            fill="#000000"
            stroke="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              dur="1s"
              repeatCount="indefinite"
              keyTimes="0;1"
              values="0 50 51;360 50 51"
            ></animateTransform>
          </path>
        </svg>
      </div>
    </div>
  );
};
