import React from "react";
import { Animated, View, Text } from "react-native";

const App = () => {
  const textPosition = new Animated.Value(0);
  Animated.loop(
    Animated.timing(textPosition, {
      toValue: 3,
      duration: 15000,
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
        <Text>2022	Netherlands Max Verstappen	Red Bull	Red Bull	Honda
2021	Netherlands Max Verstappen	Red Bull	Mercedes	Mercedes
2020	United Kingdom Lewis Hamilton	Mercedes	Mercedes	Mercedes
2019	United Kingdom Lewis Hamilton	Mercedes	Mercedes	Mercedes
2018	United Kingdom Lewis Hamilton	Mercedes	Mercedes	Mercedes
2017	United Kingdom Lewis Hamilton	Mercedes	Mercedes	Mercedes
2016	Germany Nico Rosberg	Mercedes	Mercedes	Mercedes
2015	United Kingdom Lewis Hamilton	Mercedes	Mercedes	Mercedes
2014	United Kingdom Lewis Hamilton	Mercedes	Mercedes	Mercedes
2013	Germany Sebastian Vettel	Red Bull	Red Bull	Renault
2012	Germany Sebastian Vettel	Red Bull	Red Bull	Renault
2011	Germany Sebastian Vettel	Red Bull	Red Bull	Renault
2010	Germany Sebastian Vettel	Red Bull	Red Bull	Renault
2009	United Kingdom Jenson Button	Brawn	Brawn	Mercedes
2008	United Kingdom Lewis Hamilton	McLaren	Ferrari	Ferrari
2007	Finland Kimi Räikkönen	Ferrari	Ferrari	Ferrari
2006	Spain Fernando Alonso	Renault	Renault	Renault
2005	Spain Fernando Alonso	Renault	Renault	Renault
2004	Germany Michael Schumacher	Ferrari	Ferrari	Ferrari
2003	Germany Michael Schumacher	Ferrari	Ferrari	Ferrari
2002	Germany Michael Schumacher	Ferrari	Ferrari	Ferrari
2001	Germany Michael Schumacher	Ferrari	Ferrari	Ferrari
2000	Germany Michael Schumacher	Ferrari	Ferrari	Ferrari
1999	Finland Mika Häkkinen	McLaren	Ferrari	Ferrari
1998	Finland Mika Häkkinen	McLaren	McLaren	Mercedes
1997	Canada Jacques Villeneuve	Williams	Williams	Renault
1996	United Kingdom Damon Hill	Williams	Williams	Renault
1995	Germany Michael Schumacher	Benetton	Benetton	Renault
1994	Germany Michael Schumacher	Benetton	Williams	Renault
1993	France Alain Prost	Williams	Williams	Renault
1992	United Kingdom Nigel Mansell	Williams	Williams	Renault
1991	Brazil Ayrton Senna	McLaren	McLaren	Honda
1990	Brazil Ayrton Senna	McLaren	McLaren	Honda
1989	France Alain Prost	McLaren	McLaren	Honda
1988	Brazil Ayrton Senna	McLaren	McLaren	Honda
1987	Brazil Nelson Piquet	Williams	Williams	Honda
1986	France Alain Prost	McLaren	Williams	Honda
1985	France Alain Prost	McLaren	McLaren	TAG
1984	Austria Niki Lauda	McLaren	McLaren	TAG
1983	Brazil Nelson Piquet	Brabham	Ferrari	Ferrari
1982	Finland Keke Rosberg	Williams	Ferrari	Ferrari
1981	Brazil Nelson Piquet	Brabham	Williams	Ford
1980	Australia Alan Jones	Williams	Williams	Ford
1979	South Africa Jody Scheckter	Ferrari	Ferrari	Ferrari
1978	United States Mario Andretti	Team Lotus	Team Lotus	Ford
1977	Austria Niki Lauda	Ferrari	Ferrari	Ferrari
1976	United Kingdom James Hunt	McLaren	Ferrari	Ferrari
1975	Austria Niki Lauda	Ferrari	Ferrari	Ferrari
1974	Brazil Emerson Fittipaldi	McLaren	McLaren	Ford
1973	United Kingdom Jackie Stewart	Tyrrell	Team Lotus	Ford
1972	Brazil Emerson Fittipaldi	Team Lotus	Team Lotus	Ford
1971	United Kingdom Jackie Stewart	Tyrrell	Tyrrell	Ford
1970	Austria Jochen Rindt	Team Lotus	Team Lotus	Ford
1969	United Kingdom Jackie Stewart	Matra	Matra	Ford
1968	United Kingdom Graham Hill	Team Lotus	Team Lotus	Ford
1967	New Zealand Denny Hulme	Brabham	Brabham	Repco
1966	Australia Jack Brabham	Brabham	Brabham	Repco
1965	United Kingdom Jim Clark	Team Lotus	Team Lotus	Climax
1964	United Kingdom John Surtees	Ferrari	Ferrari	Ferrari
1963	United Kingdom Jim Clark	Team Lotus	Team Lotus	BRM
1962	United Kingdom Graham Hill	BRM	BRM	BRM
1961	United States Phil Hill	Ferrari	Ferrari	Ferrari
1960	Australia Jack Brabham	Cooper-Climax	Cooper-Climax	Maserati
1959	Australia Jack Brabham	Cooper-Climax	Cooper-Climax	Climax
1958	United Kingdom Mike Hawthorn	Ferrari	Vanwall	Vanwall
1957	Argentina Juan Manuel Fangio	Maserati		
1956	Argentina Juan Manuel Fangio	Ferrari		
1955	Argentina Juan Manuel Fangio	Mercedes		
1954	Argentina Juan Manuel Fangio	Mercedes		
1953	Italy Alberto Ascari	Ferrari		
1952	Italy Alberto Ascari	Ferrari		
1951	Argentina Juan Manuel Fangio	Alfa Romeo		
1950	Italy Nino Farina	Alfa Romeo</Text>
      </Animated.Text>
    </View>
  );
};

export default App;