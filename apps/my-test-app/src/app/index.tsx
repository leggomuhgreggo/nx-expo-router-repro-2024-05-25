import { View, Text, StyleSheet } from 'react-native';

import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home page</Text>
      <Link href="/">Go to dank page</Link>
      <Link href="/ddsfsdfdf">Go to dank page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
});
