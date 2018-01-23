/**
 * Created by Samoy on 2017/4/21.
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
} from 'react-native';

class BadgeView extends Component {


    static defaultProps = {
        badgePosition: 'right',
        badgeIcon: null,
        badgeTextColor: 'white',
        badgeBackgroundColor: 'red',
        badgeSize: 0,
    };


    // static propTypes = {
    //     badgePosition: PropTypes.oneOf(['left', 'right']),
    //     badgeText: PropTypes.string,
    //     badgeTextColor: PropTypes.string,
    //     badgeSize: PropTypes.number,
    //     badgeBackgroundColor: PropTypes.string,
    //     parentView: PropTypes.element.isRequired,
    //     autoSize: PropTypes.bool,
    //     ...View.propTypes
    // };


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let badgeSize = this.props.badgeSize / 2.5

        let badgeView;
        if (this.props.badgeIcon) {
            badgeView = (
                <Image style={{
                    width: badgeSize,
                    height: badgeSize, alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: -badgeSize,
                    zIndex: 1
                }}
                    source={this.props.badgeIcon}>
                </Image>
            )
        } else if (this.props.badgeText && this.props.badgeText != 0) {
            badgeView = (<View style={{
                backgroundColor: this.props.badgeBackgroundColor,
                width: badgeSize,
                height: badgeSize,
                borderRadius: badgeSize,
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: -badgeSize,
                zIndex: 1
            }}>
                <Text style={{
                    color: this.props.badgeTextColor,
                    textAlign: 'center',
                    fontSize: badgeSize / 2,
                    fontWeight: 'bold',
                    margin: null
                }} numberOfLines={1}>
                    {this.props.badgeText}
                </Text>
            </View>
            )
        } else {
            badgeView = (<View />)
        }

        return (
            <View style={{
                alignItems: this.props.badgePosition === 'left' ? 'flex-start' : 'flex-end',
            }}>
                {badgeView}
                {this.props.parentView}
            </View>
        );
    }

}

const styles = StyleSheet.create({});

export default BadgeView;