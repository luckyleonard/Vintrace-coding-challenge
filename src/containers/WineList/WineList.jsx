import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import winePic from '../../assets/images/wine.svg';

const StyledItem = styled.div`
  background: #adc9ad;
  border: 1px solid #fff;
`;

function WineList({ winesData }) {
  return (
    <List
      itemLayout='horizontal'
      dataSource={winesData}
      renderItem={(item) => (
        <StyledItem>
          <Link to={`/wine/${item.lotCode}`}>
            <List.Item>
              <List.Item.Meta
                avatar={winePic}
                title={item.lotCode}
                description={
                  item.description ? item.description : 'No description'
                }
              />
            </List.Item>
          </Link>
        </StyledItem>
      )}
    />
  );
}

export default WineList;
