import Image from 'next/image';

const AlbumCoverImg = ({img_path}:{img_path:string}) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 299 238"> {/* Keep the viewBox aligned with the shape's dimensions */}
      <clipPath id="clipPathId">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
d="M44 0C19.6995 0 0 19.6995 0 44V132.5C0 154.315 17.6848 172 39.5 172H45.913C64.1865 172 79 186.814 79 205.087C79 223.36 93.8135 238.174 112.087 238.174H251C275.301 238.174 295 218.474 295 194.174V44C295 19.6995 275.301 0 251 0H44Z"        />
      </clipPath>
      <foreignObject x="0" y="0" width="100%" height="100%">
        <div style={{ clipPath: "url(#clipPathId)", width: '100%', height: '100%' }}>
          <Image 
            src={img_path} 
            alt={''} 
            layout="fill" 
            className='object-cover h-full w-full' 
          />
        </div>
      </foreignObject>
    </svg>
  );
};

export default AlbumCoverImg;
