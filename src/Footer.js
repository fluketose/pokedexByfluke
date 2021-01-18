import React, { Component } from 'react';
import ModalView from './ModalView';
import { fetchData } from './actions';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {

        let props = this.props
        let { searchName, searchType, dataAdd } = props.fetchReducer

        return (
            <div className="footer-bar">
                <button type="button" className="btn btn-add" onClick={() => props.fetchData(searchName, searchType, dataAdd)}>
                    <div>+</div>
                </button>
                <ModalView/> 
            </div>
        )
    }
}
// Used to add reducer's state into the props
const mapStateToProps = (state) => ({
    fetchReducer: state.fetchReducer
  })

// Used to add action (dispatch) into the props
const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

