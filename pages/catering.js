import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { siteInfo, concepts } from '../data/site';

const Section = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Eyebrow = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Body = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.05rem;
  line-height: 1.8;

  & + & {
    margin-top: 1.25rem;
  }
`;

const InfoList = styled.dl`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const InfoLabel = styled.dt`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.muted};
`;

const InfoValue = styled.dd`
  margin: 0;
  color: ${({ theme }) => theme.colors.textMuted};
`;

export default function CateringPage() {
  return (
    <Layout
      title="Catering | Tomukun — Ann Arbor, MI"
      description="Bring Tomukun Korean BBQ and Noodle Bar to your next event — request catering information."
    >
      <Hero
        image="/images/hero-home.jpg"
        alt="Tomukun catering spread" 
        title="Catering"
        subtitle="Korean BBQ and Noodle Bar favorites for your next event."
        short
      />

      <Section>
        <div>
          <Eyebrow>Bring Tomukun to Your Event</Eyebrow>
          <Title>Catering</Title>
          {/* TODO: replace draft copy with client-approved catering details —
              packages, minimums, lead time, delivery vs. drop-off vs. staffed, etc. */}
          <Body>
            Whether it&apos;s an office lunch, a family gathering, or a full celebration, Tomukun
            brings the same Korean BBQ and Noodle Bar favorites you&apos;d get in the dining room —
            packed up for your event.
          </Body>
          <Body>
            Tell us a bit about what you&apos;re planning — headcount, date, and which menu you&apos;re
            interested in — and we&apos;ll follow up with options and pricing.
          </Body>

          <InfoList>
            <InfoRow>
              <InfoLabel>Phone — Korean BBQ</InfoLabel>
              <InfoValue>{concepts.koreanBbq.phone}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Phone — Noodle Bar</InfoLabel>
              <InfoValue>{concepts.noodleBar.phone}</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Email</InfoLabel>
              <InfoValue>{siteInfo.email}</InfoValue>
            </InfoRow>
          </InfoList>
        </div>

        <div>
          <Title>Request Catering Information</Title>
          <ContactForm
            source="Catering"
            messagePlaceholder="Event date, headcount, and which menu you're interested in..."
          />
        </div>
      </Section>
    </Layout>
  );
}
