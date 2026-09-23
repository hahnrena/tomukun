import styled, { css } from 'styled-components';

const base = css`
  display: inline-block;
  padding: 0.9rem 2rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  transition: background 0.2s ease, color 0.2s ease, opacity 0.2s ease;
`;

const Solid = styled.a`
  ${base}
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};

  &:hover {
    background: ${({ theme }) => theme.colors.accentMuted};
  }
`;

const Outline = styled.a`
  ${base}
  background: transparent;
  color: ${({ theme }) => theme.colors.accent};

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const Disabled = styled(Outline)`
  opacity: 0.55;
  cursor: not-allowed;

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

// variant: "solid" | "outline" | "disabled"
// `disabled` renders a real CTA visually but blocks navigation/submission —
// used for "Order Now" until online ordering is wired up.
export default function CTAButton({ variant = 'solid', disabled = false, children, ...rest }) {
  if (disabled) {
    return (
      <Disabled href="#" aria-disabled="true" onClick={(e) => e.preventDefault()} {...rest}>
        {children}
      </Disabled>
    );
  }

  const Component = variant === 'outline' ? Outline : Solid;
  return <Component {...rest}>{children}</Component>;
}
