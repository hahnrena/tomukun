import Link from 'next/link';
import NextImage from 'next/image';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileNav, closeMobileNav } from '../store/slices/uiSlice';

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  background: ${({ theme }) => theme.colors.navBackground};
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorder};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1rem 1.25rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    inset: 0 0 0 auto;
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    width: 80%;
    max-width: 320px;
    background: ${({ theme }) => theme.colors.surface};
    transform: translateX(${({ $open }) => ($open ? '0' : '100%')});
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled.a`
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${({ theme }) => theme.colors.navTextMuted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.navText};
  }

  /* Mobile drawer keeps the dark surface, so links go back to light text. */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    color: ${({ theme }) => theme.colors.textMuted};

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  /* Dark on the light bar; light when the dark drawer is open behind it. */
  color: ${({ theme, $open }) => ($open ? theme.colors.text : theme.colors.navText)};
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    z-index: 101;
  }
`;

export default function Nav() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.ui.mobileNavOpen);

  return (
    <Bar>
      <Link href="/" passHref legacyBehavior>
        <Logo>
          <NextImage src="/brand/tomukun-logo.svg" alt="Tomukun" width={160} height={57} priority />
        </Logo>
      </Link>

      <Links $open={open}>
        <li>
          <Link href="/korean-bbq" passHref legacyBehavior>
            <NavLink onClick={() => dispatch(closeMobileNav())}>Korean BBQ</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/noodle-bar" passHref legacyBehavior>
            <NavLink onClick={() => dispatch(closeMobileNav())}>Noodle Bar</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/catering" passHref legacyBehavior>
            <NavLink onClick={() => dispatch(closeMobileNav())}>Catering</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/about" passHref legacyBehavior>
            <NavLink onClick={() => dispatch(closeMobileNav())}>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref legacyBehavior>
            <NavLink onClick={() => dispatch(closeMobileNav())}>Contact</NavLink>
          </Link>
        </li>
      </Links>

      <MenuToggle
        $open={open}
        onClick={() => dispatch(toggleMobileNav())}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        {open ? '✕' : '☰'}
      </MenuToggle>
    </Bar>
  );
}
