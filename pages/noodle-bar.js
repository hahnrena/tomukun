import styled from 'styled-components';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import CTAButton from '../components/CTAButton';
import { siteInfo, concepts } from '../data/site';
import menuData from '../data/menus/noodle-bar.json';

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
`;

const InfoSection = styled.section`
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
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

export default function NoodleBarPage() {
  return (
    <Layout
      title="Noodle Bar | Tomukun — Ann Arbor, MI"
      description="Tomukun Noodle Bar: Ann Arbor's original ramen and noodle comfort food, open since 2010."
    >
      <Hero
        image="/images/hero-noodle-bar.jpg"
        alt="Tomukun Noodle Bar ramen bowl"
        eyebrow="Tomukun"
        title="Noodle Bar"
        subtitle="Comfort noodles, Ann Arbor's original."
      />

      <Intro>
        <Body>
          Where Tomukun started in 2010. A neighborhood noodle bar serving comforting bowls of ramen, jajangmyun, and other Asian-inspired favorites, made for quick lunches, casual dinners, and everything in between. A warm space centered around bold flavors, generous bowls, and the simple comfort of noodles.
        </Body>

        <CTARow>
          <CTAButton href={concepts.noodleBar.orderUrl} target="_blank" rel="noopener noreferrer">
            Order Now
          </CTAButton>
        </CTARow>
      </Intro>

      <MenuSection menu={menuData} />

      <InfoSection>
        <Card>
          <CardHeading>Hours &amp; Location</CardHeading>
          <CardText>{concepts.noodleBar.hours}.</CardText>
          <CardText style={{ marginTop: '1rem' }}>
            {siteInfo.address.line1}, {siteInfo.address.line2}
          </CardText>
          <CardText style={{ marginTop: '0.5rem' }}>
            Adjacent to Tomukun Korean BBQ on E. Liberty St.
          </CardText>
        </Card>
      </InfoSection>
    </Layout>
  );
}
