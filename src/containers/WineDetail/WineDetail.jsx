import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Descriptions } from 'antd';

function WineDetail({ winesData }) {
  const { lotCode } = useParams('params');

  const wineInfo = winesData.find((wine) => wine.lotCode === lotCode);
  if (!wineInfo) {
    return <Redirect to='/' />;
  }

  return (
    <Descriptions
      title={`Wine ${lotCode} Info`}
      bordered
      style={{ marginTop: '30px' }}>
      <Descriptions.Item label='Lot Code'>{wineInfo.lotCode}</Descriptions.Item>
      <Descriptions.Item label='Volume'>{`${wineInfo.volume} L`}</Descriptions.Item>
      <Descriptions.Item label='Tank Code'>
        {wineInfo.tankCode}
      </Descriptions.Item>
      <Descriptions.Item label='Owner Name'>
        {wineInfo.ownerName}
      </Descriptions.Item>
      <Descriptions.Item label='Product State' span={2}>
        {wineInfo.productState}
      </Descriptions.Item>
      <Descriptions.Item label='Description' span={3}>
        {wineInfo.description}
      </Descriptions.Item>
    </Descriptions>
  );
}

export default WineDetail;
