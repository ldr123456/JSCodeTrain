class EventBus {
  constructor() {
    this.events = {}
  }
  // 实现
  on(name, cb) {
    if(!this.events[name]){
      this.events[name] = []
    }
    this.events[name].push(cb)
  }
  once(name, cb){
    const onceHandle = (...props) => {
      cb(...props)
      this.off(name, onceHandle)
    }
    this.on(name, onceHandle)
  }
  off(name, cb){
    if(!this.events[name]){
      return;
    }
    if(!cb){
      delete this.events[name]
      return;
    }
    this.events[name] = this.events[name].filter(call => call !== cb)
  }
  
  emit(name, ...props) {
    const eventHandle = this.events[name]
    if(eventHandle) {
      eventHandle.forEach(cb => cb(...props))
    }
  }
}

const event = new EventBus();
const hand1 = data => console.log('hand1',data)
const hand2 = data => console.log('hand2',data)

event.on('exp',hand1)
event.once('exp',hand2)

event.emit('exp', '你好')
event.off('exp', hand1)
event.emit('exp', '测试')

