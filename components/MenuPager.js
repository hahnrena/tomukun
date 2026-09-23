import { useState } from 'react';
import NextImage from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 2rem 5rem;
`;

const Stage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Frame = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
`;

const TopBar = styled.p`
  margin: 0 0 1rem;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const NavButton = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
  height: 2.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 50%;
  background: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, opacity 0.2s ease;

  &:hover:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const PageCount = styled.span`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(6px);
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

// Pages through a list of menu-page images one at a time, with prev/next
// arrows overlaid on the image and an optional "full document" link shown
// above it, instead of embedding a PDF. Renders gracefully with no crash if
// the images list is empty.
export default function MenuPager({
  images = [],
  label = 'menu',
  pdfUrl,
  pdfLabel = 'Open the PDF',
  aspectRatio = '3 / 4',
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) {
    return (
      <Wrapper>
        <Empty>Menu coming soon.</Empty>
      </Wrapper>
    );
  }

  const current = images[Math.min(index, images.length - 1)];

  return (
    <Wrapper>
      {pdfUrl && (
        <TopBar>
          Prefer the full document?{' '}
          <a href={pdfUrl} target="_blank" rel="noreferrer">
            {pdfLabel}
          </a>
        </TopBar>
      )}

      <Stage>
        {images.length > 1 && (
          <NavButton
            type="button"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
            aria-label={`Previous page of ${label}`}
          >
            ‹
          </NavButton>
        )}

        <Frame $aspectRatio={aspectRatio}>
          <NextImage
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            style={{ objectFit: 'contain' }}
          />

          {images.length > 1 && (
            <PageCount>
              {index + 1} / {images.length}
            </PageCount>
          )}
        </Frame>

        {images.length > 1 && (
          <NavButton
            type="button"
            onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))}
            disabled={index === images.length - 1}
            aria-label={`Next page of ${label}`}
          >
            ›
          </NavButton>
        )}
      </Stage>
    </Wrapper>
  );
}
