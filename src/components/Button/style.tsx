import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 44,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  blackContainer: {
    height: '35%',
    backgroundColor: 'white',
  },
  fillText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 17,
  },
  unfillText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  fillButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 4,
    width: 200,
    marginTop: 20,
  },
  unfillButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 3,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    height: 40,
    width: 200,
    marginTop: 10,
    marginBottom: 20,
  },
});
export default styles;
