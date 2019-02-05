import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { material } from 'react-native-typography';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {CardViewWithIcon, CardViewWithImage} from 'react-native-simple-card-view';

export default class news extends Component{

    constructor() {
        super()
        this.state = {
          entries: [
            {
                title: 'News',
                content: 'this is content',
                source: require( '/Users/Kulow/react-native/KratomApp/src/assets/Untitled-1a.pngsaadvade.png')
            },

          ]
        }
      }

      _renderItem ({item, index}) {
        return (
          <CardViewWithImage
            width={ 300 }
            source = { item.source}
            title={ item.title}
            content = {item.content}
            imageWidth={'100%'}
            imageHeight={140}
            roundedImage= {false}
          />
      );}

      render() {
          return (
            <View style={styles.carousel}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    sliderWidth={450}
                    itemWidth={350}
                    removeClippedSubviews={false}
                    loop
                />
            </View>
          )
      }
}

const styles = StyleSheet.create({
    carousel: {
        flex: 1,
        backgroundColor: '#fff',
      },
})