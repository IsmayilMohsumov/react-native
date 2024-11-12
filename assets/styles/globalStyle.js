import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    height: 60, // Set height to ensure there's enough space for title and icon
    position: 'relative', // Make the container a reference for absolute positioning
    paddingRight: 10, // Optional: Add some padding on the right for icon space
  },
  messageIcon: {
    position: 'absolute',
    right: 10,
    top: '20%',
    transform: [{translateY: -12}],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f1a4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default globalStyle;
