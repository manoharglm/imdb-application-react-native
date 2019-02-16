import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';



class CastCard extends Component {
    state = {}
    render() {
        console.log(this.props.data)
        return (

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    {this.props.data.map(data => {
                        return  <View style={styles.card} key={data.id}>
                            <Image style={{ width: 150, height: 200, borderRadius: 5 }} source={{ uri: `https://image.tmdb.org/t/p/w200/${data['profile_path']}` }} />
                             <Text style={styles.baseText}> {data.name} </Text>
                             <Text style={styles.subText}> {data.character} </Text>
                        </View>
                    })}
                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    card: {
        width: 150,
        borderRadius: 5,
        margin: 10,
        color: 'white',
        backgroundColor: '#282828'
    },
    baseText: {
        padding: 3,
        color: 'white',
        fontSize: 16,
        height: 40
    },
    subText: {
        padding: 3,
        color: 'gray',
        fontSize: 16,
        height: 40
    },
    text:{
         padding: 10,
        color: 'white',
        fontSize: 16,
    }
});

export default CastCard;