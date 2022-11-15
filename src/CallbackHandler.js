let instance = null;

class CallbackHandler {
    constructor() {
        if (instance) {
            return instance;
        }

        this._callbackHandler = null;
        this._callbackList = [];

        instance = this;
    }

    createCallbackHandler() {
        this._callbackHandler = this.makeCallbackHandler();
    }

    getCallbackHandler() {
        return this._callbackHandler;
    }

    addCallback(...callbackList) {
        callbackList.forEach((callback) => {
            this._callbackList.push(callback);
        });
    }

    getCallbackList() {
        return this._callbackList;
    }

    *makeCallbackHandler() {
        const callbackList = this.getCallbackList();
        for (let index = 0; index < callbackList.length; index++) {
            yield callbackList[index];
        }
    }

    getNextCallback() {
        const callbackHandler = this.getCallbackHandler();

        let callbackResult = callbackHandler.next();
        if (callbackResult.done) {
            return null;
        }

        return callbackResult.value;
    }
}

module.exports = CallbackHandler;
