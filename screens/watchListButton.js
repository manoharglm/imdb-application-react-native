import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { 
    StyleSheet,
    AsyncStorage
} from 'react-native';

class WatchlistButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchlistButton:false,
        }
    }

    componentDidMount(){
        // AsyncStorage.removeItem('WATCHLIST')
        this._retrieveData().then(data => {     
            console.log('data',data);
                   
            if(!data){
                this._storeData(JSON.stringify([])) 
            }else if(data.length !== 0){
                if(data.some(item => item.id === this.props.data.id)){
                    this.setState({
                        watchlistButton:true,
                    })
                }
            }
        })        
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('WATCHLIST');
            return JSON.parse(value)
        } catch (error) {
            console.log(error);
        }
    }

    _storeData = async (data) => {
        if(data){
            try {
                await AsyncStorage.setItem('WATCHLIST', data)
              } catch (error) {
                  console.log(error);
              }
        }
    }
    handleButton =(bool)=>{
        this.setState({
            watchlistButton : bool,
            // data: this.props.data
        }, () => {
            this._retrieveData().then( data => {
                let updatedData =[...data,this.props.data]
                this._storeData(JSON.stringify(updatedData)) 
            })
        })
    }
    render(){
        let butStyle = styles.watchlistBefore
        let buttonTitle = this.state.watchlistButton ? "Added to Watchlist" : "Add to Watchlist"

        return(
            <Button 
                disabledStyle={styles.watchlistAfter} 
                disabled={this.state.watchlistButton} 
                onPress={()=>this.handleButton(true)} 
                buttonStyle={butStyle} 
                titleStyle={butStyle} 
                title={buttonTitle}
            />
        )
    }
}
const styles = StyleSheet.create({
    watchlistBefore:{
        backgroundColor:'transparent'
    },
    watchlistAfter:{
        backgroundColor:'gold',
    },
})
const mapStateToProps = state => ({
    Movie: state.details.movieDetail,
})
const mapDispatchToProps = dispatch => ({
    getMovieDetail: (id) => dispatch(getMovieDetail(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(WatchlistButton);
// export default WatchlistButton;
