import React, { Component } from 'react';
import { Text, View, StyleSheet,StatusBar,Image,ImageBackground} from 'react-native';
export default class Logo extends Component {
	render() {
		return(
			<View style={styles.container}>
				 <Image
            style={{resizeMode: 'center', tintColor: 'white'}}
          	source={require('../Images/Logo.png')}/>  
        		<Text style={styles.logoText}>
          		{this.props.type}
          	</Text>
      </View>
		)
	}
}
const styles = StyleSheet.create({
  container: {
   flexGrow: 1,
   backgroundColor: '#18163E',
   alignItems :'center',
   justifyContent : 'center',
  },
  logoText : {
    marginVertical: 30,
    fontSize: 30,
    color : 'rgba(255, 255, 255, 0.7)'
  },
});