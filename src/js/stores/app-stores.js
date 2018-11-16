var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var state = [];
var AppStore = Object.assign({},EventEmitter.prototype,{
    emitChange:function(payload){
        state.push(payload.action.item);
        this.emit(CHANGE_EVENT, state );
    }
});

AppDispatcher.register(function(payload){
    console.log(payload);
    AppStore.emitChange(payload);
    return true;
});
module.exports = AppStore;
