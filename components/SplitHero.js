import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from './Image';

const Wrapper = styled.section`
  position: relative;
  height: calc(100vh - 81px);
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    min-height: 90vh;
    padding: 4rem 0;
  }
`;

const BackgroundLayer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.7s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(10, 9, 8, 0.35) 0%,
    rgba(10, 9, 8, 0.45) 55%,
    rgba(10, 9, 8, 0.75) 100%
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
  max-width: 720px;
`;

const Statement = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  font-style: italic;
  line-height: 1.85;
  color: ${({ theme }) => theme.colors.text};
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonOuter = styled.a`
  display: inline-flex;
  padding: 5px;
  border: 1px solid rgba(245, 242, 236, 0.5);
  min-width: 240px;
  transition: border-color 0.25s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.text};
  }

  &:hover span,
  &:focus-visible span {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

const ButtonInner = styled.span`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(245, 242, 236, 0.5);
  padding: 1.1rem 2rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  transition: border-color 0.25s ease;
`;

// Homepage hero: full-page. Shows `defaultImage` at rest; hovering (or
// focusing) a concept's button crossfades in that concept's photo instead.
export default function SplitHero({ statement, links, defaultImage, defaultAlt }) {
  const [hovered, setHovered] = useState(null);

  return (
    <Wrapper>
      <BackgroundLayer $active={!hovered}>
        <Image src={defaultImage} alt={defaultAlt} priority />
      </BackgroundLayer>

      {links.map((link) => (
        <BackgroundLayer key={link.key} $active={hovered === link.key}>
          <Image src={link.image} alt={link.alt} />
        </BackgroundLayer>
      ))}

      <Overlay />

      <Content>
        <Statement>{statement}</Statement>

        <ButtonRow>
          {links.map((link) => (
            <Link key={link.href} href={link.href} passHref legacyBehavior>
              <ButtonOuter
                onMouseEnter={() => setHovered(link.key)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(link.key)}
                onBlur={() => setHovered(null)}
              >
                <ButtonInner>{link.label}</ButtonInner>
              </ButtonOuter>
            </Link>
          ))}
        </ButtonRow>
      </Content>
    </Wrapper>
  );
}
