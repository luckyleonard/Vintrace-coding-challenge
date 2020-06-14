import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Descriptions } from 'antd';

import api_request from '../../utils/apiHelper';
import url from '../../utils/urlList';
import BreakdownInfo from './Components/BreakdownInfo';

function WineDetail({ winesData }) {
  const { lotCode } = useParams('params');
  const [breakdownData, setBreakdownData] = useState([]);

  useEffect(() => {
    let mounted = true;

    const yearPromise = api_request({ url: url.getYearBreakdown(lotCode) });
    const varietyPromise = api_request({
      url: url.getVarietyBreakdown(lotCode),
    });
    const regionPromise = api_request({ url: url.getRegionBreakdown(lotCode) });
    const yearAndVarietyPromise = api_request({
      url: url.getYearAndVarietyBreakdown(lotCode),
    });

    if (mounted) {
      Promise.all([
        yearPromise,
        varietyPromise,
        regionPromise,
        yearAndVarietyPromise,
      ]).then((value) => {
        setBreakdownData(value.map((item) => item.data));
      });
    }
    //prevent issue with set state in an unmount component
    return () => (mounted = false);
  }, [lotCode]);

  const wineInfo = winesData.find((wine) => wine.lotCode === lotCode);
  if (!wineInfo) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <Descriptions
        title={`Wine ${lotCode} Info`}
        bordered
        style={{ marginTop: '30px' }}>
        <Descriptions.Item label='Lot Code'>
          {wineInfo.lotCode}
        </Descriptions.Item>
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
      {breakdownData.map((breakdownInfo) => {
        return (
          <BreakdownInfo
            key={breakdownInfo.breakdownType}
            breakdownInfo={breakdownInfo}
          />
        );
      })}
    </>
  );
}

export default WineDetail;
