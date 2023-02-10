import styled from '@emotion/styled/macro';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 36px 28px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 67px;
`;

export const LogoText = styled.p`
  font-weight: 600;
  font-size: 26px;
  line-height: calc(39 / 26);
  letter-spacing: 0.01em;
  margin: 0;
`;

export const LogoTextSpan = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: calc(15 / 10);
  letter-spacing: -0.01em;
  color: #838383;
`;

export const NavEl = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const LinkEl = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 11px 8px 11px 11px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.5s ease;

  &.active {
    background-color: #5932ea;
    color: white;
    fill: white;
    stroke: white;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    background-color: #5932ea;
    color: white;
    fill: white;
    stroke: white;
  }
`;
