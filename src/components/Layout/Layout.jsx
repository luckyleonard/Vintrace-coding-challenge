import React from 'react';
import styled from 'styled-components';
import { Layout, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';

import vintraceLogo from '../../assets/images/Vintrace_logo.png';

const { Header, Content, Footer } = Layout;

const Logo = styled.img`
  height: 40px;

  vertical-align: baseline;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

function PageLayout({ children, searchInput, handleSearchChange }) {
  const match = useRouteMatch({ path: '/', exact: true });

  return (
    <Layout>
      {match && (
        <Header>
          <StyledHeader>
            <Link to='/' style={{ height: '40px' }}>
              <Logo alt='Vintrace' src={vintraceLogo} />
            </Link>
            <Input.Search
              placeholder='Search Wines'
              value={searchInput}
              onChange={handleSearchChange}
              style={{ margin: '10px 20px' }}
            />
            <Avatar size={40} icon={<UserOutlined />} />
          </StyledHeader>
        </Header>
      )}
      <Content>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        Developed by Leonard(DI ZHU) @Email:
        <a href='mailto:dzhu31@hotmail.com'>dzhu31@hotmail.com</a>
      </Footer>
    </Layout>
  );
}
export default PageLayout;
