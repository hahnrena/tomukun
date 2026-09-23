import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { siteInfo } from '../data/site';

const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 2rem;
`;

const Heading = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const Fallback = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 0.9rem;
`;

const Notice = styled.p`
  margin-top: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: 0.75rem;
`;

const { openTableRestaurantId } = siteInfo.reservations;
const isConfigured = openTableRestaurantId && openTableRestaurantId !== 'PLACEHOLDER-RID';

// Embeds OpenTable's standard reservation widget. Functional once a real
// Restaurant ID is supplied — see data/site.js `reservations.openTableRestaurantId`.
// TODO: confirm OpenTable as final provider and swap in the real Restaurant ID.
export default function ReservationWidget() {
  const containerRef = useRef(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    if (!isConfigured || !containerRef.current) return undefined;

    const script = document.createElement('script');
    script.src = `https://www.opentable.com/widget/reservation/loader?rid=${encodeURIComponent(
      openTableRestaurantId
    )}&type=standard&theme=standard&color=1&dark=true&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website`;
    script.async = true;
    script.onerror = () => setLoadFailed(true);
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) containerRef.current.innerHTML = '';
    };
  }, []);

  if (!isConfigured || loadFailed) {
    return (
      <Wrapper>
        <Heading>Reserve a Table</Heading>
        <Fallback>
          Online booking isn&apos;t connected yet. Please call {siteInfo.phone} to reserve.
        </Fallback>
        <Notice>
          TODO: this widget renders a live OpenTable calendar once a real Restaurant ID is
          added to <code>data/site.js</code>.
        </Notice>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Heading>Reserve a Table</Heading>
      <div id="opentable-reservation-widget" ref={containerRef} />
    </Wrapper>
  );
}
