import React from 'react';
import styled from 'styled-components';
import { Layout, Input, Avatar, Button } from 'antd';
import { UserOutlined, LeftOutlined } from '@ant-design/icons';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

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
  const history = useHistory();
  return (
    <Layout>
      {match ? (
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
      ) : (
        <Button
          type='primary'
          icon={<LeftOutlined />}
          onClick={() => history.goBack()}>
          Go Back
        </Button>
      )}
      <Content>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        Developed by Leonard(DI ZHU) @Email:
        <a href='mailto:dzhu31@hotmail.com'>dzhu31@hotmail.com</a>
        <div>
          Icons made by{' '}
          <a
            href='https://www.flaticon.com/authors/pixel-perfect'
            title='Pixel perfect'>
            Pixel perfect
          </a>{' '}
          &
          <a href='http://www.freepik.com/' title='Freepik'>
            Freepik{' '}
          </a>
          from{' '}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </div>
      </Footer>
    </Layout>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  searchInput: PropTypes.string,
  handleSearchChange: PropTypes.func,
};
export default PageLayout;
