import NextImage from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

// Single wrapper around next/image so every placeholder image in the site
// inherits sizing/loading behavior and swaps to real photography with no
// component changes — just replace the file in /public/images.
export default function Image({ src, alt, fill = true, sizes = '100vw', priority = false, ...rest }) {
  return (
    <Wrapper {...rest}>
      <NextImage
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        priority={priority}
        style={{ objectFit: 'cover' }}
      />
    </Wrapper>
  );
}
