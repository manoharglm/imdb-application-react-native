import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import { 
    StyleSheet,
} from 'react-native';
class WatchlistButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            watchlistButton:false,
        }
    }
    handleButton =()=>{
        this.setState(prevState => ({
            watchlistButton : !prevState.watchlistButton
        }))
    }
    render(){
        let butStyle = styles.watchlistBefore
        let buttonTitle = "Add to Watchlist"
        if(this.state.watchlistButton){
            butStyle = styles.watchlistAfter
            buttonTitle = "Added to Watchlist"
        }
        return(
            <Button onPress={this.handleButton} buttonStyle={butStyle} titleStyle={butStyle} title={buttonTitle}/>
        )
    }
}
const styles = StyleSheet.create({
    watchlistBefore:{
        backgroundColor:'transparent'
    },
    watchlistAfter:{
        backgroundColor:'gold',
        borderColor:'white',
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
