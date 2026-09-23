import styled from 'styled-components';
import Image from './Image';

const Wrapper = styled.section`
  position: relative;
  height: ${({ $short }) => ($short ? '60vh' : '92vh')};
  min-height: 420px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(10, 9, 8, 0.15) 0%, ${({ theme }) => theme.colors.overlay} 100%);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 2rem 4rem;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  color: ${({ theme }) => theme.colors.text};
  max-width: 900px;
`;

const Subtitle = styled.p`
  margin-top: 1.25rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 560px;
`;

export default function Hero({ image, alt, eyebrow, title, subtitle, short = false, children }) {
  return (
    <Wrapper $short={short}>
      <Image src={image} alt={alt} priority />
      <Overlay />
      <Content>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Content>
    </Wrapper>
  );
}
