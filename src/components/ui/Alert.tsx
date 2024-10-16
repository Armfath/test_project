import Image, { StaticImageData } from 'next/image';

type AlertProps = {
  src: StaticImageData;
  title: string;
  description: React.ReactNode;
};

const Alert = ({ src, title, description }: AlertProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-24 h-24 mb-6">
        <Image src={src} alt="icon" width={96} height={96} />
      </div>

      <h1 className="text-2xl mb-8 font-semibold text-gray-800">{title}</h1>
      <div className="text-gray-600 text-center">{description}</div>
    </div>
  );
};

export { Alert };
