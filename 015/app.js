const EventEmitter = require("events");
const myEmitter = new EventEmitter();

const logDBconnection = () => {
  console.log("DB connected");
};

myEmitter.addListener("connected", logDBconnection);
myEmitter.emit("connected");
myEmitter.removeListener("connected", logDBconnection);
myEmitter.emit("connected");
myEmitter.on("message", (data) => console.log("Полученные данные: ", data));
myEmitter.prependListener("message", (data) =>
  console.log("А эти данные должны вывестись раньше: ", data)
);

myEmitter.emit("message", "Привет, получи моё сообщение!");
myEmitter.once("off", () => console.log("Я вызвался один раз и не больше"));
myEmitter.emit("off");
myEmitter.emit("off");
myEmitter.setMaxListeners(1);
console.log(myEmitter.listenerCount("message"));
console.log(myEmitter.listenerCount("off"));
console.log(myEmitter.listeners("message"));
console.log(myEmitter.eventNames());

myEmitter.on("error", (error) => console.log(`Произошла ошибка: ${error.message}`));
myEmitter.emit("error", new Error("BOOOM"));

const target = new EventTarget();
const logTarget = () => console.log("Connected to target");
target.addEventListener("connected", logTarget);
target.dispatchEvent(new Event("connected"));
