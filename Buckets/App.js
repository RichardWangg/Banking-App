import { Button, StyleSheet, Text, View } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Header from './components/header';
import Transactions from './components/transaction';
import Menu from './components/menu';
import HeaderStyles from './styles/headerStyles';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Button title="+" onPress={() => console.log('Button pressed')} style={HeaderStyles.headerButton} />
      </View>
      <View style={styles.menu}>
        <Menu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#051221',
    paddingTop: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  main: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  menu: {
    right: 0,
    left: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
