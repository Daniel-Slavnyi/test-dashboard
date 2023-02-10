import React from 'react';

import { ReactComponent as Dashboard } from '../../icons/dashboard.svg';
import { ReactComponent as Product } from '../../icons/product.svg';
import { ReactComponent as Customers } from '../../icons/customers.svg';
import { ReactComponent as Income } from '../../icons/income.svg';
import { ReactComponent as Promote } from '../../icons/promote.svg';
import { ReactComponent as Help } from '../../icons/help.svg';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import {
  Box,
  Header,
  LinkEl,
  LogoText,
  LogoTextSpan,
  NavEl,
} from './AppBar.styled';

const navItems = [
  {
    href: 'dashboard',
    text: 'Dashboard',
    icon: <Dashboard style={{ marginRight: '16px' }} />,
  },
  {
    href: 'product',
    text: 'Product',
    icon: <Product style={{ marginRight: '16px' }} />,
  },
  {
    href: 'customers',
    text: 'Customers',
    icon: <Customers style={{ marginRight: '16px' }} />,
  },
  {
    href: 'income',
    text: 'Income',
    icon: <Income style={{ marginRight: '16px' }} />,
  },
  {
    href: 'promote',
    text: 'Promote',
    icon: <Promote style={{ marginRight: '16px' }} />,
  },
  {
    href: 'help',
    text: 'Help',
    icon: <Help style={{ marginRight: '16px' }} />,
  },
];

export default function AppBar() {
  return (
    <Header>
      <Box>
        <Logo />
        <LogoText>
          Dashboard <LogoTextSpan>v.01</LogoTextSpan>
        </LogoText>
      </Box>
      <NavEl>
        {navItems.map(({ href, text, icon }) => (
          <LinkEl to={href} key={href}>
            {icon}
            {text}
          </LinkEl>
        ))}
      </NavEl>
    </Header>
  );
}
