import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Image from '../components/Image';

const Section = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PortraitFrame = styled.div`
  aspect-ratio: 4 / 5;
  position: relative;
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
        title="One founder, two tables."
        short
      />

      <Section>
        <PortraitFrame>
          <Image src="/images/about-founder.jpg" alt="PLACEHOLDER — Tom Yon, founder of Tomukun" />
        </PortraitFrame>

        <div>
          <Eyebrow>Tom Yon, Founder</Eyebrow>
          {/* TODO: replace draft founder story with client-approved copy — see CLAUDE.md open question re: existing About copy */}
          <Body>
            Tom Yon, a Michigan State University economics grad, opened Tomukun Noodle Bar on
            E. Liberty St in 2010 — Ann Arbor&apos;s answer to the noodle-bar concepts he&apos;d
            seen thrive in LA and New York. The menu drew directly from his parents&apos; home
            cooking, filtered through his own upbringing as a second-generation Korean American.
          </Body>
          <Body>
            When the storefront next door opened up in 2014, Tom expanded with Tomukun Korean
            BBQ — a tabletop-grilling concept shaped by his family&apos;s own Korean BBQ
            traditions, but built with a more casual, minimalistic room than most Korean BBQ
            spots offer.
          </Body>
        </div>
      </Section>

      <Philosophy>
        <Eyebrow>Philosophy</Eyebrow>
        <Body>
          Modern, minimalistic, and unfussy — a contemporary take on Korean comfort food and
          BBQ that keeps the focus on the table, not the trend.
        </Body>
        <Note>
          Founder biography drawn from press and third-party sources; pending final review and
          approval by the client.
        </Note>
      </Philosophy>
    </Layout>
  );
}
