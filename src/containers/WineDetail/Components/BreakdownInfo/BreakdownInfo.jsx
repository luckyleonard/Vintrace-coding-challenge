import React, { useState } from 'react';
import styled from 'styled-components';
import { List, Button } from 'antd';
import PropTypes from 'prop-types';

import pieSVG from '../../../../assets/images/pie-chart.svg';

const PiePic = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledButton = styled.div`
  text-align: center;
  height: 20px;
  line-height: 20px;
`;

const StyledList = styled.div`
  margin: 10px 20px;
`;

const count = 5;

function BreakdownInfo({ breakdownInfo }) {
  const [itemCount, setItemCount] = useState(count);
  const [loadingDirty, setLoadingDirty] = useState(false);

  const handleLoadMore = () => {
    setItemCount((prev) => prev + count);
    setLoadingDirty(true);
  };
  const handleLoadLess = () => {
    setItemCount((prev) => prev - count);
  };

  const loadMore =
    breakdownInfo.breakdown.length > itemCount ? (
      <StyledButton>
        <Button onClick={handleLoadMore}>Loading more</Button>
      </StyledButton>
    ) : loadingDirty ? (
      <StyledButton>
        <Button onClick={handleLoadLess}>Loading less</Button>
      </StyledButton>
    ) : null;
  //only show Loading less button after click Loading more button

  return (
    <StyledList>
      <List
        itemLayout='horizontal'
        header={<h2>{breakdownInfo.breakdownType.toUpperCase()}</h2>}
        dataSource={breakdownInfo.breakdown.slice(0, itemCount)}
        loadMore={loadMore}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<PiePic src={pieSVG} alt='pie pic' />}
              title={item.key}
              description={`${item.percentage} %`}
            />
          </List.Item>
        )}
      />
    </StyledList>
  );
}

BreakdownInfo.propTypes = {
  breakdownInfo: PropTypes.object.isRequired,
};
export default BreakdownInfo;
