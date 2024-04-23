import type { FC } from "react";

interface DummyImageProps {
  src: string;
  alt?: string;
}

const DummyImage: FC<DummyImageProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
};

export default DummyImage;
