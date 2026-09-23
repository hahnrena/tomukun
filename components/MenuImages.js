import NextImage from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const ImageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 5;
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

// Renders photographed/scanned menu pages directly (see /data/menus/images.js),
// full-frame and uncropped (object-fit: contain), rather than the structured
// JSON menu in MenuSection. Renders gracefully with no crash / no empty gap
// when the images list is still empty.
export default function MenuImages({ images = [] }) {
  if (images.length === 0) {
    return (
      <Wrapper>
        <Empty>Menu coming soon.</Empty>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <ImageList>
        {images.map(({ src, alt }) => (
          <Frame key={src}>
            <NextImage
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 900px) 100vw, 900px"
              style={{ objectFit: 'contain' }}
            />
          </Frame>
        ))}
      </ImageList>
    </Wrapper>
  );
}
