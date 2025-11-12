import styled from "styled-components";
import { WEIGHTS } from "../../constants";

export function NavLink({ href, children }) {
  return (
    <NavLinkWrapper href={href}>
      <div>
        {children}
        <HoveredText>{children}</HoveredText>
      </div>
    </NavLinkWrapper>
  );
}

const NavLinkWrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: clip;

  &:first-of-type {
    color: var(--color-secondary);
  }

  & > * {
    will-change: transform;
    transition: transform 600ms ease;
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover > * {
      transition: transform 300ms ease;
      transform: translateY(-100%);
    }
  }
`;

const HoveredText = styled.span`
  position: absolute;
  transform: translateY(100%);
  inset: 0;
  font-weight: ${WEIGHTS.bold};
`;
