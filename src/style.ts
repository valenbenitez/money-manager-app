import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
    padding: 16,
    gap: 24,
  },
  text: {
    fontSize: 42,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 24,
    gap: 24,
    borderRadius: 24,
    border: '1px solid red',
    backgroundColor: '#ffffff',
    opacity: 0.5,
    borderColor: '#ffffff80',
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
