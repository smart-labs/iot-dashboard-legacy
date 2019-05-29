import React, { useState } from "react";
import Header from "../../components/Header";
import TrashState from "../../components/TrashState";
import Box from "../../components/Box";
import { Container } from "./styles";
import {
  faTemperatureLow,
  faTint,
  faSmog,
  faMapMarkedAlt
} from "@fortawesome/free-solid-svg-icons";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import TOKEN from "../../config/map";
import theme from "../../styles/theme";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Map = ReactMapboxGl({
  accessToken: TOKEN
});

export default function SmartTrash() {
  const [state] = useState({
    id: 1,
    value: 0,
    data: [
      { temp: 23 },
      { temp: 30 },
      { temp: 45 },
      { temp: 36 },
      { temp: 25 },
      { temp: 25 },
      { temp: 25 }
    ]
  });
  const [temperature] = useState({ id: 1, value: 27 });
  const [humility] = useState({ id: 1, value: 32 });
  const [co2] = useState({ id: 1, value: 300 });
  const [location] = useState({
    center: [-35.9807185, -8.238999],
    zoom: [16.3],
    marker: [-35.98067017, -8.23853006]
  });

  return (
    <>
      <Header />
      <Container>
        <TrashState width={"25%"} sensor={state} />
        <Box
          width={"65%"}
          color={2}
          title={"Sensor de Temperatura"}
          info={{ title: "Temperatura:", scale: "°C" }}
          sensor={temperature}
          icon={faTemperatureLow}
        >
          <ResponsiveContainer width="95%" height="100%">
            <AreaChart data={state.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="temp"
                stroke={theme[2].primaryColor}
                fill={theme[2].primaryColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Box
          width={"45%"}
          color={3}
          title={"Sensor de Umidade"}
          info={{ title: "Umidade:", scale: "%" }}
          sensor={humility}
          icon={faTint}
        >
          <ResponsiveContainer width="90%" height="100%">
            <AreaChart data={state.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="temp"
                stroke={theme[3].primaryColor}
                fill={theme[3].primaryColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
        <Box
          width={"45%"}
          color={4}
          title={"Dióxido de Carbono Sensor"}
          info={{ title: "CO2:", scale: "" }}
          sensor={co2}
          icon={faSmog}
        >
          <ResponsiveContainer width="90%" height="100%">
            <AreaChart data={state.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="temp"
                stroke={theme[4].primaryColor}
                fill={theme[4].primaryColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        <Box
          width={"92%"}
          color={5}
          title={"Localização"}
          info={{ title: "", scale: "" }}
          sensor={{ id: "", value: "" }}
          icon={faMapMarkedAlt}
        >
          <Map
            style="mapbox://styles/mapbox/dark-v9"
            zoom={location.zoom}
            center={location.center}
            containerStyle={{
              height: "100%",
              width: "100%"
            }}
          >
            <Layer
              type="symbol"
              id="marker"
              layout={{ "icon-image": "marker-15" }}
              title="Ok"
            >
              <Feature coordinates={location.marker} />
            </Layer>
          </Map>
        </Box>
      </Container>
    </>
  );
}
