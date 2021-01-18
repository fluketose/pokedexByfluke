import React, { Component } from 'react';
import Modal from 'react-modal';
import CardView from './CardView';
import { fetchData, isCloseModal } from './actions';
import { connect } from 'react-redux';

import iconSearch from '../src/search.png';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '880px',
        height: '600px',
    }
};

class ModalView extends Component {
    render() {

        let props = this.props
        let { searchName, searchType, dataAdd } = props.fetchReducer

        return (
            <Modal
                isOpen={props.fetchReducer.modalStatus}
                onRequestClose={() => props.isCloseModal()}
                style={customStyles}
            >
                <div className="row" style={{ paddingBottom: 10 }}>
                    <div className="col-6">
                        <div className="inner-addon right-addon">
                            <img src={iconSearch} width="40" height="40" />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Find Pokemon Name"
                                value={props.fetchReducer.searchName}
                                onChange={(event) => props.fetchData(event.target.value, searchType, dataAdd)}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="inner-addon right-addon">
                            <img src={iconSearch} width="40" height="40" />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Find Pokemon Type"
                                value={props.fetchReducer.searchType}
                                onChange={(event) => props.fetchData(searchName, event.target.value, dataAdd)}
                            />
                        </div>
                    </div>
                </div>
                <div className="style-modal">
                    <div className="row">
                        {
                            props.fetchReducer.dataList && props.fetchReducer.dataList.length > 0 ? (
                                props.fetchReducer.dataList.map((item, index) => (
                                    <CardView
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        imageUrl={item.imageUrl}
                                        hp={item.hp}
                                        strength={item.strength}
                                        weaknesses={item.weaknesses}
                                        happiness={item.happiness}
                                        status="ADD"
                                        onClick={() => props.fetchData(searchName, searchType, dataAdd, item.id)}
                                    />
                                ))
                            )
                                : (
                                    <div className="mt-3">
                                        <div>Not Items</div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </Modal>
        )
    }
}

// Used to add reducer's state into the props
const mapStateToProps = (state) => ({
    fetchReducer: state.fetchReducer
})

// Used to add action (dispatch) into the props
const mapDispatchToProps = {
    fetchData,
    isCloseModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalView);