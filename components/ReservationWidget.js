import styled from 'styled-components';
import { concepts } from '../data/site';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem;
`;

const Heading = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const ReserveButton = styled.a`
  display: inline-block;
  padding: 0.9rem 2rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accentMuted};
  }
`;

// Links out to Tomukun Korean BBQ's real OpenTable listing — a functional
// reservation flow (unlike "Order Now"), per CLAUDE.md constraints.
export default function ReservationWidget() {
  return (
    <Wrapper>
      <Heading>Reserve a Table</Heading>
      <Text>Book online through OpenTable.</Text>
      <ReserveButton href={concepts.koreanBbq.openTableUrl} target="_blank" rel="noreferrer">
        Reserve on OpenTable
      </ReserveButton>
    </Wrapper>
  );
}
