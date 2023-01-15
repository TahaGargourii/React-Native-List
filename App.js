import React from "react";
import { Animated, View, Text, StyleSheet } from "react-native";

const App = () => {
  const textPosition = new Animated.Value(0);
  Animated.loop(
    Animated.timing(textPosition, {
      toValue: 3,
      duration: 20000,
      useNativeDriver: true
    }),
    { iterations: -1 }
  ).start(() => {
    textPosition.setValue(0);
  });
  return (
    <View>
      <Animated.Text
        style={{
          transform: [
            {
              translateY: textPosition.interpolate({
                inputRange: [0, 1],
                outputRange: [900, 10]
              })
            }
          ]
        }}
      >
        <View style={styles.container}>   
        <Text style={styles.title}> Last 20 years F1 champions </Text>
        <Text style= {styles.Text}>2022	Netherlands Max Verstappen	
2021	Netherlands Max Verstappen	
2020	United Kingdom Lewis Hamilton	
2019	United Kingdom Lewis Hamilton	
2018	United Kingdom Lewis Hamilton	
2017	United Kingdom Lewis Hamilton	
2016	Germany Nico Rosberg	
2015	United Kingdom Lewis Hamilton	
2014	United Kingdom Lewis Hamilton	
2013	Germany Sebastian Vettel	
2012	Germany Sebastian Vettel	
2011	Germany Sebastian Vettel	
2010	Germany Sebastian Vettel	
2009	United Kingdom Jenson Button	
2008	United Kingdom Lewis Hamilton	
2007	Finland Kimi Räikkönen	
2006	Spain Fernando Alonso	
2005	Spain Fernando Alonso	
2004	Germany Michael Schumacher	
2003	Germany Michael Schumacher	
2002	Germany Michael Schumacher	
2001	Germany Michael Schumacher	
2000	Germany Michael Schumacher	
</Text>
</View>
      </Animated.Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // ...

  Text: {
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 12,
    lineHeight : 27,
  },
  container:{
    
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 40
  },

  title:{
    textAlign: 'center',
    fontWeight: 'bold',

  }
});


export default App;