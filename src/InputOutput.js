class InputOutput {
    static input (message, callback) {
        Console.readLine(message, callback);
    }

    static output (message) {
        Console.print(message);
    }
    
}

module.exports = InputOutput;