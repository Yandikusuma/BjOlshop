import { StyleSheet, Dimensions } from 'react-native'

export const deviceWidth = Dimensions.get('window').width
export default (Stylis = StyleSheet.create({
  normalPage: {
    position: 'relative',
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
}))