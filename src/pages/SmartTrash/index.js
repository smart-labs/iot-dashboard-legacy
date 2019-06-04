import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import TrashState from "../../components/TrashState";
import Box from "../../components/Box";
import { Container } from "./styles";
import { faChartArea, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import TOKEN from "../../config/map";
import { trashName } from "../../config/knotThing";
import theme from "../../styles/theme";
import axios from "axios";
import Moment from "moment";
import io from "socket.io-client";

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

const socket = io("https://smart-trash-upe.herokuapp.com/");

export default function SmartTrash() {
  const [state, setState] = useState({ monthly: {} });
  const [door, setDoor] = useState({ monthly: {} });
  const [location] = useState({
    center: [-35.9807185, -8.238999],
    zoom: [16.3],
    marker: [-35.98067017, -8.23853006]
  });

  useEffect(async () => {
    const { data } = await axios.post(
      "https://smart-trash-upe.herokuapp.com/api/sensor/",
      {
        name: trashName,
        sensorId: 1
      }
    );
    setState(data);

    socket.emit("subscribe", data);
    socket.on("116c290e721452381", async response => {
      if (response.data.sensor_id === 1) {
        const { data } = await axios.put(
          "https://smart-trash-upe.herokuapp.com/api/sensor/update",
          {
            id: response.source,
            data: response.data
          }
        );
        setState(data);
      }
    });
  }, []);
  useEffect(async () => {
    const { data } = await axios.post(
      "https://smart-trash-upe.herokuapp.com/api/sensor/",
      {
        name: trashName,
        sensorId: 2
      }
    );
    setDoor(data);
    socket.emit("subscribe", data);

    socket.on("116c290e721452382", async response => {
      if (response.data.sensor_id === 2) {
        const { data } = await axios.put(
          "https://smart-trash-upe.herokuapp.com/api/sensor/update",
          {
            id: response.source,
            data: response.data
          }
        );
        setDoor(data);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TrashState width={"25%"} sensor={state} />
        <Box
          width={"65%"}
          color={3}
          title={"Lixeiro Cheio por mês"}
          info={{ title: "Quantidade Atual:", scale: "" }}
          sensor={state.monthly[Moment().month()]}
          icon={faChartArea}
        >
          <ResponsiveContainer width="95%" height="100%">
            <AreaChart data={state.monthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={theme[3].primaryColor}
                fill={theme[3].primaryColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        <Box
          width={"45%"}
          color={2}
          title={"Lixeiro aberto por mês"}
          info={{ title: "Quantidade Atual:", scale: "" }}
          sensor={door.monthly[Moment().month()]}
          icon={faChartArea}
        >
          <ResponsiveContainer width="95%" height="100%">
            <AreaChart data={door.monthly}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke={theme[2].primaryColor}
                fill={theme[2].primaryColor}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        <Box
          width={"45%"}
          color={4}
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
