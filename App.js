// App.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

const App = () => {
  const [point1, setPoint1] = useState({ x: 0, y: 0, z: 0 });
  const [point2, setPoint2] = useState({ x: 0, y: 0, z: 0 });
  const [distance, setDistance] = useState(null);

  const calculateDistance = () => {
    const dx = point2.x - point1.x;
    const dy = point2.y - point1.y;
    const dz = point2.z - point1.z;

    const dist = Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    setDistance(dist);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calcular Distância em 3D</Text>

      <View style={{ marginVertical: 10 }}>
        <Text>Ponto 1:</Text>
        <TextInput
          placeholder="X"
          keyboardType="numeric"
          onChangeText={(text) => setPoint1({ ...point1, x: parseFloat(text) || 0 })}
        />
        <TextInput
          placeholder="Y"
          keyboardType="numeric"
          onChangeText={(text) => setPoint1({ ...point1, y: parseFloat(text) || 0 })}
        />
        <TextInput
          placeholder="Z"
          keyboardType="numeric"
          onChangeText={(text) => setPoint1({ ...point1, z: parseFloat(text) || 0 })}
        />
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>Ponto 2:</Text>
        <TextInput
          placeholder="X"
          keyboardType="numeric"
          onChangeText={(text) => setPoint2({ ...point2, x: parseFloat(text) || 0 })}
        />
        <TextInput
          placeholder="Y"
          keyboardType="numeric"
          onChangeText={(text) => setPoint2({ ...point2, y: parseFloat(text) || 0 })}
        />
        <TextInput
          placeholder="Z"
          keyboardType="numeric"
          onChangeText={(text) => setPoint2({ ...point2, z: parseFloat(text) || 0 })}
        />
      </View>

      <Button title="Calcular Distância" onPress={calculateDistance} />

      {distance !== null && (
        <Text style={{ marginTop: 20 }}>
          A distância entre os pontos é: {distance.toFixed(2)}
        </Text>
      )}
    </View>
  );
};

export default App;
