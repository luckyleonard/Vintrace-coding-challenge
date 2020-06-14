import React, { useState, useLayoutEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { Descriptions, Input, Button } from 'antd';
import styled from 'styled-components';

import api_request from '../../utils/apiHelper';
import url from '../../utils/urlList';
import BreakdownInfo from './Components/BreakdownInfo';

const { TextArea } = Input;

const StyledButton = styled.div`
  text-align: center;
  height: 20px;
  line-height: 20px;
`;

function WineDetail() {
  const { lotCode } = useParams('params');
  const [wineInfo, setWineInfo] = useState({});
  const [breakdownData, setBreakdownData] = useState([]);
  const [editable, setEditable] = useState(false);

  const toggleEdit = () => {
    setEditable((prev) => !prev);
  };

  const handleInfoChange = (e) => {
    const { value, name } = e.target;
    setWineInfo((prev) => ({ ...prev, [name]: value }));
  };

  useLayoutEffect(() => {
    api_request({ url: url.getWineByLot(lotCode) }).then((res) =>
      setWineInfo(res.data)
    );
  }, [lotCode]);
  //avoid the page flash

  useLayoutEffect(() => {
    const yearPromise = api_request({ url: url.getYearBreakdown(lotCode) });
    const varietyPromise = api_request({
      url: url.getVarietyBreakdown(lotCode),
    });
    const regionPromise = api_request({ url: url.getRegionBreakdown(lotCode) });
    const yearAndVarietyPromise = api_request({
      url: url.getYearAndVarietyBreakdown(lotCode),
    });

    Promise.all([
      yearPromise,
      varietyPromise,
      regionPromise,
      yearAndVarietyPromise,
    ]).then((value) => {
      setBreakdownData(value.map((item) => item.data));
    });
  }, [lotCode]);

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
          <TextArea
            name='productState'
            value={wineInfo.productState}
            onChange={handleInfoChange}
            readOnly={!editable}
            style={!editable && { outline: 'none', borderWidth: '0' }}
            autoSize
          />
        </Descriptions.Item>
        <Descriptions.Item label='Description' span={3}>
          <TextArea
            name='description'
            value={wineInfo.description}
            onChange={handleInfoChange}
            readOnly={!editable}
            style={!editable && { outline: 'none', borderWidth: '0' }}
            autoSize
          />
        </Descriptions.Item>
      </Descriptions>

      <StyledButton>
        <Button onClick={toggleEdit}>{editable ? 'Submit' : 'Edit'}</Button>
      </StyledButton>

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
