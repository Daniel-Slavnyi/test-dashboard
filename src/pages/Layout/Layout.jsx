import AppBar from 'components/AppBar/AppBar';
import { Box } from 'pages/Layout.styled';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box>
      <AppBar />
      <Outlet />
    </Box>
  );
}
