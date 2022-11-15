class InputOutput {
    static input (message, callback) {
        Console.readLine(message, callback);
    }

    static output (message) {
        Console.print(message);
    }
    
    static close () {
        Console.close();
    }
}

module.exports = InputOutput;