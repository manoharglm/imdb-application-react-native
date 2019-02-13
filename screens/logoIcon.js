import React from 'react';
import {  View ,Image} from 'react-native';


export default class App extends React.Component {
    render() {
        return (
                 < Image
                 style = {
                     {
                         width: 100,
                         height: 50,
                         marginTop:-25
                     }
                 }
                 source = {
                     {
                         uri: 'https://londonfeministfilmfestival.files.wordpress.com/2017/05/imdb-logo.png'
                     }
                 }
                 />
        );
    }
}

