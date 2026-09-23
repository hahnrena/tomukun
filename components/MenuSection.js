import NextImage from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const Note = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  padding: 0.75rem 1rem;
  margin-bottom: 3rem;
`;

const SectionBlock = styled.div`
  margin-bottom: 4rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionHeadingRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const SectionName = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const SectionNote = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ItemCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  padding: 16px;
`;

// Only rendered when the item has an `image` set — items without one (e.g.
// the whole Noodle Bar menu) skip the image slot entirely rather than
// showing a blank box. Set `image` on an item to add one.
const ItemImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const ItemBody = styled.div`
  padding: 1.25rem 0.5rem 0.35rem;
`;

const ItemName = styled.p`
  font-size: 1.35rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const ItemKorean = styled.p`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ItemDescription = styled.p`
  margin-top: 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};
`;

const ItemPrice = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 0.25rem;
  margin-top: 1.25rem;
  padding: 0.6rem 1.1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};

  strong {
    font-size: 1.15rem;
    font-weight: 700;
  }
`;

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

// Renders a menu JSON file (see /data/menus) as a 3-per-row grid of item
// cards, matching tomukunbbq.framer.website/menu's per-item layout. Designed
// to render gracefully with no crashes and no empty layout holes if the data
// is empty or partial.
export default function MenuSection({ menu }) {
  const sections = menu?.sections ?? [];

  return (
    <Wrapper>
      {menu?.note && <Note>{menu.note}</Note>}

      {sections.length === 0 && <Empty>Menu coming soon.</Empty>}

      {sections.map((section) => (
        <SectionBlock key={section.name}>
          <SectionHeadingRow>
            <SectionName>{section.name}</SectionName>
            {section.note && <SectionNote>{section.note}</SectionNote>}
          </SectionHeadingRow>
          <ItemGrid>
            {(section.items ?? []).map((item) => (
              <ItemCard key={item.name}>
                {item.image && (
                  <ItemImageFrame>
                    <NextImage
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </ItemImageFrame>
                )}
                <ItemBody>
                  <ItemName>{item.name}</ItemName>
                  {item.korean && <ItemKorean>{item.korean}</ItemKorean>}
                  {item.description && <ItemDescription>{item.description}</ItemDescription>}
                  <ItemPrice>
                    $ <strong>{item.price != null ? item.price : 'MP'}</strong>
                  </ItemPrice>
                </ItemBody>
              </ItemCard>
            ))}
          </ItemGrid>
        </SectionBlock>
      ))}
    </Wrapper>
  );
}
