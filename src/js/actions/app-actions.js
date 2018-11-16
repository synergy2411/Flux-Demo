var AppDispatcher = require('../dispatcher/app-dispatcher');
var AppConstants = require('../constants/app-constants');

var AppActions = {
    addItem:function(item){
        AppDispatcher.handleViewAction({
            actionType:AppConstants.ADD_ITEM,
            item:item
        });
    }
};

module.exports = AppActions;