import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Cat from './assets/cat.png'


const CoreComponen = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 300, height: 300 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
      <View>
      <Image
      source={Cat}
      style= {{width:300,height:300}}
      />
      </View>
      
      <Image
      source={Cat}
      style= {{width:300,height:300}}
      /><Image
      source={Cat}
      style= {{width:300,height:300}}
      /><Image
      source={Cat}
      style= {{width:300,height:300}}
      />
    </ScrollView>
  );
}

export default CoreComponen;