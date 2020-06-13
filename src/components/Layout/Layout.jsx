import React from 'react';
import styled from 'styled-components';
import { Layout, Input, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import vintraceLogo from '../../assets/images/Vintrace_logo.png';

const { Header, Content, Footer } = Layout;

const Logo = styled.img`
  height: 37px;
  margin-right: 20 px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

function PageLayout({ children }) {
  return (
    <Layout>
      <Header>
        <StyledHeader>
          <Logo alt='Vintrace' src={vintraceLogo} />
          <Input.Search placeholder='Search Wines' />
          <Avatar size={37} icon={<UserOutlined />} />
        </StyledHeader>
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: 'center' }}>
        Developed by Leonard(DI ZHU) @Email:
        <a href='mailto:dzhu31@hotmail.com'>dzhu31@hotmail.com</a>
      </Footer>
    </Layout>
  );
}
export default PageLayout;
