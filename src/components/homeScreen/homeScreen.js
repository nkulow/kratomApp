import React, {Component} from 'react';
import {StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import { material } from 'react-native-typography';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {CardViewWithIcon, CardViewWithImage} from 'react-native-simple-card-view';
import News from '/Users/Kulow/react-native/KratomApp/src/components/news/news.js';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {systemWeights } from ''
console.disableYellowBox = true;

export default class homeScreen extends Component {
      static navigationOptions = ({ navigation }) => ({
        title: 'Home',
        headerTitleStyle: {
          textAlign: 'center',
          
        },
        headerLeft: (   
          <Icon 
            onPress={() => navigation.openDrawer()}
            name = 'bars'
            style = {styles.barIcon}
            size = {28}        
          />   
          
        ),
      })

      
      constructor() {
        super()
        this.state = {
          entries: [
            {title: 'Bali', strain:() => this.props.navigation.navigate('bali')},
            {title: 'Maeng Da'},
            {title: 'Red Vein Thai'},
            {title: 'Red Vein Kali'},
            {title: 'Red Indo'},
            {title: 'Green Indo'},
            {title: 'Super Indo'},

          ],
        }
      }

      _renderItem ({item, index}) {
        return (
          <CardViewWithImage
            width={ 200 }
            source = { require('/Users/Kulow/react-native/KratomApp/src/assets/is-kratom-safe.jpg')}
            title={ item.title}
            imageWidth={'100%'}
            imageHeight={120}
            onPress={item.strain}
            roundedImage= {false}
          />
      );}
      get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ 
                backgroundColor: '#fff',
                height: 30,
                paddingTop: 0,
                paddingBottom: 0,
                flexDirection: 'row'
              }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }
    render() {
      return (
       
      <View style={styles.container}>
        <Text style={styles.subtitle}>Popular Strains</Text>
        
          <View style={styles.carousel}>
            <Carousel
            ref={(c) => { this._carousel = c; }}
            data={this.state.entries}
            renderItem={this._renderItem}
            onSnapToItem={(index) => this.setState({ activeSlide: index }) }
            sliderWidth={450}
            itemWidth={200}
            removeClippedSubviews={false}
            loop
          />
        </View>
        <View style={styles.pagnation_1}>
          { this.pagination }
        </View>

        <View style={styles.news} >
          <Text style={styles.subtitle}>News and Discussion</Text>

          {/* News component with snap-carousel and cards with an image. */}
          <News/>
          
        </View>

        <View style={styles.learnKratom}>
          <TouchableOpacity 
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.props.navigation.navigate('info')}
          >
            <Text style={styles.learnKratomText}>Learn about Kratom</Text>
          </TouchableOpacity>
        </View>  
      </View>
    
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //justifyContent: 'space-between',
      backgroundColor: 'white',
      paddingTop: 10,
    },
    title: {
      ...material.headline,
      //...systemWeights.light,
    },
    carousel: {
      flex: 1,
      backgroundColor: '#fff',
      
      
    },
    subtitle: {
      ...material.headline,
     // ...systemWeights.light,
      paddingLeft: 8
    },
    pagnation_1: {
     // flex: 1,
    },
    news: {
      flex: 2.4
    },
    barIcon: {
      width: 60,
      height: 40,
      paddingLeft: 8,
      color: '#AFE290',
      marginTop: 15
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#AFE290'
  },
  learnKratom:{
    justifyContent: 'center',
    alignItems: 'center',
    //position: 'absolute',
    bottom: 10
  },
  learnKratomText: {
    color: 'white'
  },

  });
