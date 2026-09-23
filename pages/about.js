import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Image from '../components/Image';

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1.25rem;
`;

const Body = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.05rem;
  line-height: 1.8;

  & + & {
    margin-top: 1.25rem;
  }
`;

const Philosophy = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 0 2rem 6rem;
  text-align: center;
`;

const Note = styled.p`
  margin-top: 3rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 1.5rem;
`;

export default function AboutPage() {
  return (
    <Layout
      title="About | Tomukun — Ann Arbor, MI"
      description="The story of Tomukun founder Tom Yon and how two Korean dining concepts grew from one Ann Arbor storefront."
    >
      <Hero
        image="/images/about-founder.jpg"
        alt="PLACEHOLDER — Tomukun founder Tom Yon"
        eyebrow="About"
        title="Korean Comfort, Two Ways."
        short
      />

      <Section>
        <Body>
          Tomukun began on E. Liberty Street in 2010 with a simple idea: bring the bold, comforting flavors of Korean home cooking into a modern, casual noodle bar. The menu draws from traditional Korean flavors and family recipes, while keeping the experience approachable, unfussy, and distinctly Tomukun.
        </Body>
        <Body>
          In 2014, the restaurant expanded next door with Tomukun Korean BBQ, introducing tabletop grilling alongside the original Noodle Bar. Together, the two spaces offer different ways to experience Korean comfort food — from bowls of handmade noodles to sizzling meats shared around the table.
        </Body>
        <Body>
          Today, Tomukun remains rooted in the same idea: good food, a welcoming table, and Korean flavors made for gathering.
        </Body>
      </Section>

    </Layout>
  );
}
