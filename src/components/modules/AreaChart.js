import React from 'react';
import Card from './Card';
import theme from '../../styles/theme';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const AreaChartModule = ({
  title,
  description,
  width,
  color,
  sensorId,
  sensorValue,
  monthly,
}) => {
  return (
    <Card
      width={width}
      color={color}
      title={title}
      description={description}
      scale=""
      sensorId={sensorId}
      quantityCurrent={sensorValue}
      icon={faChartArea}
    >
      <ResponsiveContainer width="95%" height="100%">
        <AreaChart data={monthly}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke={theme[color].primaryColor}
            fill={theme[color].primaryColor}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default AreaChartModule;
