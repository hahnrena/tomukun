import styled from 'styled-components';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { siteInfo, concepts } from '../data/site';

const Wrapper = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 2rem;
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

const Title = styled.h1`
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
`;

const InfoList = styled.dl`
  margin-top: 2rem;
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

const MapFrame = styled.div`
  width: 100%;
  aspect-ratio: 20 / 18;
  align-self: start;
  border: 1px solid ${({ theme }) => theme.colors.border};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    siteInfo.address.mapQuery
  )}&output=embed`;

  return (
    <Layout
      title="Contact | Tomukun — Ann Arbor, MI"
      description="Contact Tomukun Korean BBQ & Noodle Bar in Ann Arbor, MI."
    >
      <Wrapper>
        <div>
          <Eyebrow>Contact</Eyebrow>
          <Title>Visit us on E. Liberty St.</Title>

          <ContactForm />

          <InfoList>
            <InfoRow>
              <InfoLabel>Address</InfoLabel>
              <InfoValue>
                {siteInfo.address.line1}, {siteInfo.address.line2}
              </InfoValue>
            </InfoRow>
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

        <MapFrame>
          <iframe
            title="Tomukun location map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </MapFrame>
      </Wrapper>
    </Layout>
  );
}
