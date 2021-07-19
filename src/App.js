import React from 'react'
import { View, Text, TextInput } from 'react-native'

const App = (firstName, secondName, thirdName) => {
  return firstName + " " + secondName + " " + thirdName;
}

const Hewan = (props) => {
  return (
    <View>
      <Text > Ini hewan {props.namahewan}</Text>
    </View>
  )

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

      <Hewan namahewan="gajah" />
      <Hewan namahewan=" props " />
      <Hewan namahewan="kuda" />

    </View>

  );
}


export default Name;
