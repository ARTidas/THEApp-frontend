import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    //fontFamily: "arial, verdana, sans-serif",
    color: '#333',
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  subTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 15
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    backgroundColor: '#fff',
    margin: 5,
    padding: 5
  },
  buttonInput: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    width: "90%",
    backgroundColor: '#ccc',
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  link: {
    height: 40,
    width: "90%",
    margin: 5,
    padding: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  element: {
    backgroundColor: '#ccc',
  },
  stackNavigator: {
    backgroundColor: '#ccc',
    color: '#ccc'
  },
  navigation: {
    backgroundColor: '#ccc',
    color: '#000',
    borderColor: '#fff',
    borderWidth: 1,
    padding: 5,
    justifyContent: "center",
    height: 40,
    //fontWeight: 'bold',
    justifyContent: "center",
    fontSize: 20,
  }
});
