import React from 'react';
import styled from 'styled-components';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import wineSVG from '../../assets/images/wine.svg';
import PropTypes from 'prop-types';

const StyledListItem = styled.div`
  background: #adc9ad;
  border: 1px solid #fff;
`;

const WinePic = styled.img`
  width: 40px;
  height: 40px;
`;

function WineList({ winesData, searchInput }) {
  let listData = winesData.filter(
    (wine) =>
      (wine.lotCode &&
        wine.lotCode.toLowerCase().includes(searchInput.toLowerCase())) ||
      (wine.description &&
        wine.description.toLowerCase().includes(searchInput.toLowerCase()))
  );

  return (
    <List
      itemLayout='horizontal'
      dataSource={listData}
      renderItem={(item) => (
        <StyledListItem>
          <Link to={`/wine/${item.lotCode}`}>
            <List.Item>
              <List.Item.Meta
                avatar={<WinePic src={wineSVG} alt='wine pic' />}
                title={item.lotCode}
                description={
                  item.description ? item.description : 'No description'
                }
              />
            </List.Item>
          </Link>
        </StyledListItem>
      )}
    />
  );
}

WineList.propTypes = {
  winesData: PropTypes.array.isRequired,
  searchInput: PropTypes.string,
};
export default WineList;
