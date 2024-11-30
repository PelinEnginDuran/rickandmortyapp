import { View, StatusBar } from 'react-native';
import { MultiSelect } from '@/components/MultiSelect';
import React from 'react';


export default function Index() {
  return (
    <View className="flex-1 p-4">
      <MultiSelect
        onSelect={(characters) => {
        }}
      />

      <StatusBar barStyle="dark-content" />
    </View>
  );
}
