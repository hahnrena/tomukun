import { useState } from 'react';
import styled from 'styled-components';
import MenuSection from './MenuSection';
import MenuPager from './MenuPager';

const TabBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const TabButton = styled.button`
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  border-bottom: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : 'transparent')};
  color: ${({ theme, $active }) => ($active ? theme.colors.text : theme.colors.muted)};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const TABS = [
  { id: 'dinner', label: 'Dinner Menu' },
  { id: 'drinks', label: 'Drinks Menu' },
  { id: 'lunch', label: 'Lunch Menu' },
];

// Dinner renders the structured item grid. Drinks and Lunch both page through
// menu-page images (see MenuPager) with a link to the original PDF overlaid
// on top — Lunch just has a single image, so MenuPager hides the arrows.
export default function MenuTabs({
  dinnerMenu,
  drinksMenuImages,
  drinksMenuUrl,
  lunchMenuImages,
  lunchMenuUrl,
}) {
  const [activeTab, setActiveTab] = useState('dinner');

  return (
    <>
      <TabBar>
        {TABS.map((tab) => (
          <TabButton
            key={tab.id}
            type="button"
            $active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabBar>

      {activeTab === 'dinner' && <MenuSection menu={dinnerMenu} />}

      {activeTab === 'drinks' && (
        <MenuPager
          images={drinksMenuImages}
          label="drinks menu"
          pdfUrl={drinksMenuUrl}
          pdfLabel="Open the drinks menu PDF"
        />
      )}

      {activeTab === 'lunch' && (
        <MenuPager
          images={lunchMenuImages}
          label="lunch menu"
          pdfUrl={lunchMenuUrl}
          pdfLabel="Open the lunch menu PDF"
          aspectRatio="2124 / 1646"
        />
      )}
    </>
  );
}
