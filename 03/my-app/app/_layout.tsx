import "../global.css"

import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

// FIX 1: Cleaned up the extra curly braces and trailing comma
const properties = [ 
  { id: "1", title: "Beautiful Apartment in the City Center", price: "$1200/month", location: "New York, NY" },
  { id: "2", title: "Cozy Cottage Near the Beach", price: "$900/month", location: "Miami, FL" },
  { id: "3", title: "Modern Loft with Stunning Views", price: "$1500/month", location: "San Francisco, CA" }
]

export default function RootLayout() {
  return (  
    <SafeAreaView>
      <View style={{ padding: 20 }}>
    
        <Text>Subscribe to our channel</Text>
        <TextInput 
          placeholder="Search city..." 
          placeholderTextColor='#9999'
          style={{
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 8,
            padding: 10,
            marginTop: 12,
          }}
        />

        <TouchableOpacity 
          onPress={() => alert('Searching')}
          style={{
            backgroundColor: "#2563EB",
            padding: 12,
            borderRadius: 8,
            marginTop: 10,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
        </TouchableOpacity>

        <FlatList 
          data={properties} 
          keyExtractor={(item) => item.id}
          // FIX 2: Correctly closed the renderItem function with ")}"
          renderItem={({ item }) => (
            <View style={{
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 8,
              padding: 10,
              marginTop: 12,
            }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
              <Text style={{ color: "#555" }}>{item.price}</Text>
              <Text style={{ color: "#555" }}>{item.location}</Text>
            </View>
          )} 
        />

      </View>
    </SafeAreaView>
  );
}