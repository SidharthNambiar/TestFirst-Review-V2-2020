/* eslint-disable no-unused-vars */


class MyEventEmitter {
    constructor() {
        this.events = {};
    }

    addListener(event, callback) {

        if (this.events.hasOwnProperty(event)) {
            this.events[event].push(callback);
        }
        else {
            this.events[event] = [callback];
        }

    }

    emit(event, ...params) {

        if (this.events.hasOwnProperty(event)) {

            this.events[event].forEach(callback => {
                if(callback.length === 1){
                    callback(params[0])
                }
                else{
                    callback(params[0], params[1])
                }
                
            })
        }

    }

}