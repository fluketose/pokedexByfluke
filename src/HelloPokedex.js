import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardView from './CardView';
import { fetchData, removeDataLis } from './actions';

class HelloPokedex extends Component {
    render() {

        let props = this.props
        let { dataAdd } = props.fetchReducer

        return (
            <div className="body-hello">
                <div className="row">
                    {
                        dataAdd && dataAdd.length > 0 ? (
                            dataAdd.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <CardView
                                        key={index}
                                        id={item.id}
                                        name={item.name}
                                        imageUrl={item.imageUrl}
                                        hp={item.hp}
                                        strength={item.strength}
                                        weaknesses={item.weaknesses}
                                        happiness={item.happiness}
                                        status="REMOVE"
                                        onClick={() => props.removeDataLis(dataAdd, item.id)}
                                    />
                                </div>
                            ))
                        )
                            : null
                    }
                </div>
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
    fetchData,
    removeDataLis
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloPokedex);
