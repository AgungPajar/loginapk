import MyButton from '@/components/MyButton';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
  const router = useRouter();

  // fungsi untuk menavigasi ke halaman login
  const onLoginPress = () => {
    router.navigate('/login');
  };

  // fungsi untuk menavigasi ke halaman register
  const onRegisterPress = () => {
    router.navigate('/signup');
  };

  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>Selamat Datang!</Text>
      <View style={Styles.buttonContainer}>
        <MyButton title="Login" onPress={onLoginPress} />
        <MyButton title="Register" onPress={onRegisterPress} />
      </View>
    </View>
  )
}

// Styling CSS
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '$333333',
  },
  buttonContainer: {
    gap: 20,
  },
})

export default Index;