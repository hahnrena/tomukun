import styled from 'styled-components';
import Layout from '../components/Layout';
import SplitHero from '../components/SplitHero';
import { concepts } from '../data/site';

const Statement = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 6rem 2rem;
  text-align: center;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1.5rem;
`;

const Body = styled.p`
  font-size: 1.15rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
`;

export default function Home() {
  return (
    <Layout
      title="Tomukun — Korean BBQ & Noodle Bar | Ann Arbor, MI"
      description="Tomukun brings two distinct Korean dining experiences to Ann Arbor's E. Liberty St: tabletop Korean BBQ and comfort-food Noodle Bar."
    >
      {/* TODO: replace draft statement copy with client-approved brand statement */}
      <SplitHero
        defaultImage="/images/hero-home.jpg"
        defaultAlt="Illuminated Korean signage hanging from the ceiling"
        statement="Tomukun brings two ways to gather in Ann Arbor — tabletop Korean BBQ and the noodle bar where it all started, side by side on E. Liberty St."
        links={[
          {
            key: 'korean-bbq',
            href: concepts.koreanBbq.href,
            label: concepts.koreanBbq.name,
            image: '/images/hero-korean-bbq.jpg',
            alt: 'Tomukun Korean BBQ — tabletop grilling',
          },
          {
            key: 'noodle-bar',
            href: concepts.noodleBar.href,
            label: concepts.noodleBar.name,
            image: '/images/hero-noodle-bar.jpg',
            alt: 'Tomukun Noodle Bar — ramen bowl',
          },
        ]}
      />

      <Statement>
        <Eyebrow>Our Story</Eyebrow>
        {/* TODO: replace draft copy with client-approved About/brand statement */}
        <Body>
          Tomukun started in 2010 when founder Tom Yon opened a small noodle bar on E. Liberty
          St, drawing on the comfort food he grew up with as a second-generation Korean
          American. In 2014, the space next door became Tomukun Korean BBQ — a more casual,
          modern take on tabletop grilling. Two concepts, one family table.
        </Body>
      </Statement>
    </Layout>
  );
}
