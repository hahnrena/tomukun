import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import CTAButton from '../components/CTAButton';
import ReservationWidget from '../components/ReservationWidget';
import { siteInfo, concepts } from '../data/site';
import menuData from '../data/menus/korean-bbq.json';

const Intro = styled.section`
  max-width: 760px;
  margin: 0 auto;
  padding: 5rem 2rem 2rem;
  text-align: center;
`;

const Body = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.8;
  margin-top: 1.5rem;
`;

const CTARow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2.5rem;
  flex-wrap: wrap;
`;

const InfoSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem;
`;

const CardHeading = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
  line-height: 1.7;
`;

const HappyHourBadge = styled.p`
  margin-top: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export default function KoreanBbqPage() {
  return (
    <Layout
      title="Korean BBQ | Tomukun — Ann Arbor, MI"
      description="Tabletop Korean BBQ in Ann Arbor: grill-your-own bulgogi, galbi, and spicy pork, banchan, Dolsot Bibimbop, and a full bar."
    >
      <Hero
        image="/images/hero-korean-bbq.jpg"
        alt="PLACEHOLDER — Korean BBQ tabletop grilling"
        eyebrow="Tomukun"
        title="Korean BBQ"
        subtitle="Tabletop grilling, done casual."
      />

      <Intro>
        {/* TODO: replace draft copy with client-approved concept description */}
        <Body>
          Grill your own marinated meats tableside — bulgogi, galbi, spicy pork — with a server
          to help along the way. Round it out with banchan, rice bowls, stews, and our signature
          sizzling Dolsot Bibimbop, plus Asian draft beer and cocktails from the full bar. Modern,
          dark-wood dining that&apos;s a lot more casual than traditional Korean BBQ.
        </Body>

        <CTARow>
          <CTAButton href={concepts.koreanBbq.orderUrl} target="_blank" rel="noopener noreferrer">
            Order Now
          </CTAButton>
          <CTAButton variant="outline" href="#reserve">
            Reserve a Table
          </CTAButton>
        </CTARow>
      </Intro>

      <MenuSection menu={menuData} />

      <InfoSection id="reserve">
        <Card>
          <CardHeading>Hours &amp; Happy Hour</CardHeading>
          <CardText>Open daily, 11:30 AM – 9:30 PM.</CardText>
          <HappyHourBadge>
            Happy Hour: {siteInfo.happyHour.days}, {siteInfo.happyHour.time} —{' '}
            {siteInfo.happyHour.detail}.{' '}
            {!siteInfo.happyHour.verified && '(Unconfirmed — verify with client before publishing.)'}
          </HappyHourBadge>
          <CardText style={{ marginTop: '1.5rem' }}>
            {siteInfo.address.line1}, {siteInfo.address.line2}
          </CardText>
        </Card>

        <ReservationWidget />
      </InfoSection>
    </Layout>
  );
}
