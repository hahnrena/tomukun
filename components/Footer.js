import Link from 'next/link';
import styled from 'styled-components';
import { siteInfo, concepts } from '../data/site';
import { InstagramIcon, FacebookIcon } from './icons/SocialIcons';

const Wrapper = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 4rem 2rem 2rem;
`;

const Grid = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Heading = styled.h4`
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 0.25rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.95rem;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const IconLink = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }
`;

const Bottom = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.8rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Grid>
        <Column>
          <Heading>Tomukun</Heading>
          <Text>{siteInfo.address.line1}</Text>
          <Text>{siteInfo.address.line2}</Text>
          <Text>Korean BBQ: {concepts.koreanBbq.phone}</Text>
          <Text>Noodle Bar: {concepts.noodleBar.phone}</Text>
          <StyledLink href={`mailto:${siteInfo.email}`}>{siteInfo.email}</StyledLink>
        </Column>

        <Column>
          <Heading>Hours</Heading>
          <Text>Korean BBQ: {concepts.koreanBbq.hours}</Text>
          <Text>Noodle Bar: {concepts.noodleBar.hours}</Text>
        </Column>

        <Column>
          <Heading>Explore</Heading>
          <Link href="/korean-bbq" passHref legacyBehavior>
            <StyledLink>Korean BBQ</StyledLink>
          </Link>
          <Link href="/noodle-bar" passHref legacyBehavior>
            <StyledLink>Noodle Bar</StyledLink>
          </Link>
          <Link href="/catering" passHref legacyBehavior>
            <StyledLink>Catering</StyledLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <StyledLink>About</StyledLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <StyledLink>Contact</StyledLink>
          </Link>
        </Column>

        <Column>
          <Heading>Follow</Heading>
          <IconLink href={siteInfo.social.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon />
            Instagram
          </IconLink>
          <IconLink href={concepts.koreanBbq.facebook} target="_blank" rel="noreferrer">
            <FacebookIcon />
            Facebook — Korean BBQ
          </IconLink>
          <IconLink href={concepts.noodleBar.facebook} target="_blank" rel="noreferrer">
            <FacebookIcon />
            Facebook — Noodle Bar
          </IconLink>
        </Column>
      </Grid>

      <Bottom>
        <span>© {new Date().getFullYear()} Tomukun. All rights reserved.</span>
        <span>Korean BBQ &amp; Noodle Bar — Ann Arbor, MI</span>
      </Bottom>
    </Wrapper>
  );
}
