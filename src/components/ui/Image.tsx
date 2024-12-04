interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export function Image({ alt, ...props }: ImageProps) {
  return <img alt={alt} {...props} />;
}