import NextImage from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.section`
  max-width: 860px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const SectionImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  margin-bottom: 1.5rem;
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const Note = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.muted};
  border: 1px dashed ${({ theme }) => theme.colors.border};
  padding: 0.75rem 1rem;
  margin-bottom: 3rem;
`;

const SectionBlock = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionName = styled.h3`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1.5rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const ItemText = styled.div`
  flex: 1;
`;

const ItemName = styled.p`
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ItemDescription = styled.p`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const ItemPrice = styled.span`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  white-space: nowrap;
`;

const Empty = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  text-align: center;
`;

// Renders a menu JSON file (see /data/menus). Designed to render gracefully
// with no crashes and no empty layout holes if the data is empty or partial.
export default function MenuSection({ menu }) {
  const sections = menu?.sections ?? [];

  return (
    <Wrapper>
      {menu?.note && <Note>{menu.note}</Note>}

      {sections.length === 0 && <Empty>Menu coming soon.</Empty>}

      {sections.map((section) => (
        <SectionBlock key={section.name}>
          {section.image && (
            <SectionImageFrame>
              <NextImage
                src={section.image}
                alt={`${section.name} at Tomukun Korean BBQ`}
                fill
                sizes="(max-width: 860px) 100vw, 860px"
                style={{ objectFit: 'cover' }}
              />
            </SectionImageFrame>
          )}
          <SectionName>{section.name}</SectionName>
          {(section.items ?? []).map((item) => (
            <Item key={item.name}>
              <ItemText>
                <ItemName>{item.name}</ItemName>
                {item.description && <ItemDescription>{item.description}</ItemDescription>}
              </ItemText>
              <ItemPrice>{item.price != null ? `$${item.price}` : 'MP'}</ItemPrice>
            </Item>
          ))}
        </SectionBlock>
      ))}
    </Wrapper>
  );
}
