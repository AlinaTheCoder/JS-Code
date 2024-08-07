class RemoteControl {
    powerOn() {
      console.log('TV is now ON');
    }
  
    powerOff() {
      console.log('TV is now OFF');
    }
  
    setChannel(channel) {
      console.log(`Channel set to ${channel}`);
    }
  }
  
  const myRemote = new RemoteControl();
  myRemote.powerOn();      // Output: TV is now ON
  myRemote.setChannel(5);  // Output: Channel set to 5
  