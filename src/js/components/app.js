var React = require('react');
var ReactDOM = require('react-dom');
var AppActions = require('../actions/app-actions');
var AppStore = require('../stores/app-stores');


var App = React.createClass({
    getInitialState : function(){
        return {
            items : []
        }
    },
    handleClick: function () {
        AppActions.addItem('Item to add');
    },
    render: function () {
        var that = this;
        AppStore.on("change", function(updatedState){
            that.setState({
                items : updatedState
            })
        })
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
                <ul>
                    {this.state.items.map((item, index)=>{
                        return <li key ={index}> {item} </li>
                    })}
                </ul>
            </div>
        );
    }
});
module.exports = App;