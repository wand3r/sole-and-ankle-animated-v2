import styled from "styled-components";
import { COLORS, WEIGHTS } from "../../constants";

export function NavLink({ href, children }) {
  return (
    <NavLinkWrapper href={href}>
      <NavText>{children}</NavText>
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

  &:first-of-type {
    color: var(--color-secondary);
  }

  &::after {
    content: "";
    display: block;
    background: var(--color-secondary);
    height: 2px;
    transform: translateY(10px);
    opacity: 0;
    transition: transform 200ms ease, opacity 200ms ease;
  }

  &:hover::after {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const NavText = styled.span``;
