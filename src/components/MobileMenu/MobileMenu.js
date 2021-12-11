/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import Dialog, { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, COLORS, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  const Overlay = styled(DialogOverlay)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(96, 100, 108, 0.8); ;
  `;

  const Content = styled(DialogContent)`
    background: white;
    height: 100%;
    width: 80%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    position: relative;
    margin-left: auto;
  `;

  const NavWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    a {
      padding-bottom: 1.4rem;
      font-size: 18px;
      text-decoration: none;
      color: ${COLORS.gray[900]};
      font-weight: ${WEIGHTS.medium};
    }
  `;

  const Footer = styled.footer`
    display: flex;
    flex-direction: column;

    a {
      padding-bottom: 1rem;
      text-decoration: none;
      font-size: 14px;
      color: ${COLORS.gray[700]};
      font-weight: ${WEIGHTS.normal};
    }
  `;

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <Icon
          onClick={onDismiss}
          id="close"
          style={{ alignSelf: "flex-end" }}
        />
        <NavWrapper>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavWrapper>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;
