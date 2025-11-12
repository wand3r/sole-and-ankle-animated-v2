import React from "react";
import styled, { keyframes } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Filler />
          <Nav>
            <NavLink href="/sale" index={0}>
              Sale
            </NavLink>
            <NavLink href="/new" index={1}>
              New&nbsp;Releases
            </NavLink>
            <NavLink href="/men" index={2}>
              Men
            </NavLink>
            <NavLink href="/women" index={3}>
              Women
            </NavLink>
            <NavLink href="/kids" index={4}>
              Kids
            </NavLink>
            <NavLink href="/collections" index={5}>
              Collections
            </NavLink>
          </Nav>
          <Footer>
            <SubLink href="/terms">Terms and Conditions</SubLink>
            <SubLink href="/privacy">Privacy Policy</SubLink>
            <SubLink href="/contact">Contact Us</SubLink>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;

const contentSlidIn = keyframes`
	from {
		transform: translateX(100%);
	}

	to {
		transform: translateX(0);
	}
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  animation: ${contentSlidIn} 400ms cubic-bezier(0.12, 0.88, 0.56, 0.96) both;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
  animation: ${fadeIn} 300ms ease 300ms both;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  animation: ${fadeIn} 300ms ease ${(props) => 300 + 50 * props.index}ms both;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  animation: ${fadeIn} 300ms ease 300ms both;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
