import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import initials from 'initials';
import contrast from 'contrast';
import PlaceHolderImage from './PlaceHolderImage';
// from https://flatuicolors.com/
const defaultColors = [
  '#2ecc71', // emerald
  '#3498db', // peter river
  '#8e44ad', // wisteria
  '#e67e22', // carrot
  '#e74c3c', // alizarin
  '#1abc9c', // turquoise
  '#2c3e50', // midnight blue
];

function sumChars(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }

  return sum;
}

export default class UserAvatar extends Component {

  render() {
    let {
      src,
      name,
      color,
      textColor = '#fff',
      colors = defaultColors,
      fontDecrease,
      size,
      style,
      borderColor,
      borderWidth,
      placeHolder,
      defaultName = ' ',
      defaultSource = require('./avatar_default.png'),
      radius,
    } = this.props; 

    if (!fontDecrease) fontDecrease = 2.5;

    // if (!name && !src) throw new Error('Avatar requires a name or url source');
    if (!name) {
      name = defaultName
    }

    if(typeof size !== 'number') size = parseInt(size);

    let abbr = initials(name);
    if(!abbr) abbr = defaultName;

    if(isNaN(radius)) radius = 0.5
    
    if(!placeHolder) placeHolder = defaultSource

    const borderRadius = size * radius;

    const imageStyle = {
      borderRadius,
      borderColor: 'transparent',
      borderWidth: 0,
    };

    const innerStyle = {
      borderRadius,
      borderWidth: 1,
      borderColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center'
    };

    if (size) {
      imageStyle.width = innerStyle.width = size;
      imageStyle.height = innerStyle.height = size;
    }

    if (borderWidth) {
      imageStyle.borderColor = innerStyle.borderColor = borderColor
      imageStyle.borderWidth = innerStyle.borderWidth = borderWidth
    }

    let inner, classes;
    if (src) {

      const props = {
        style: imageStyle,
        source: src,
        placeHolder: placeHolder,
      }

      inner = React.createElement( this.props.component || PlaceHolderImage, props )

    } else {
      let background;
      if (color) {
        background = color;
      } else {
        // pick a deterministic color from the list
        let i = sumChars(name) % colors.length;
        background = colors[i];
      }

      innerStyle.backgroundColor = background;

      inner = <Text style={{ fontSize: size / fontDecrease, color: textColor }}>{abbr}</Text>
    }

    return (
      <View>
        <View style={[innerStyle, style]}>
          {inner}
        </View>
      </View>
    )
  }
}
