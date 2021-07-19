import React from 'react'
import { View, Text, TextInput } from 'react-native'

const App = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Name = () => {
  return (
    <View>
      <Text>
        Hai namu{App(" samsul", "joe", "joko")}!
      </Text>

      <TextInput
        style={{
          marginTop: 20,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="Input me"
      />
    </View>
  );
}


export default Name;
