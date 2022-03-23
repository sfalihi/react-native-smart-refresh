import React from 'react';
import {
    View,
    requireNativeComponent,
    StyleSheet,
    Platform
} from 'react-native';
const RNSmartRefresh = requireNativeComponent('RNSmartRefreshView');
const RNSmartRefreshHeader = requireNativeComponent('RNRefreshHeader');

export class SmartRefresh extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        style:Platform.OS==='android'?{flex:1}:{position:'absolute',left:0,top:0,right:0},
        onRefresh:()=>{},
        onChangeOffset:()=>{},
        refreshing:false,
    }
    render() {
        const {children} = this.props;
        if(Platform.OS=='android'){
            return (
                <View
                    style={{flex:1,overflow:'hidden'}}
                >
                    <RNSmartRefresh
                        {...this.props}
                    >
                        {children}
                    </RNSmartRefresh>
                </View>
            )
        }
        return (
            <RNSmartRefresh
                {...this.props}
            >
                {children}
            </RNSmartRefresh>
        );
    }
}
export class SmartRefreshHeader extends React.PureComponent{
    constructor(props) {
        super(props);
    }
    render() {
        const {children,style} = this.props;
        return (
            <RNSmartRefreshHeader>
                   <View
                    style={StyleSheet.compose({height:100},style)}
                   >
                       {children}
                   </View>
            </RNSmartRefreshHeader>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})
