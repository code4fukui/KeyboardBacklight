const filters = [{
  vendorId: 0x05ac,
  usage: 0x0f,
  usagePage: 0xff00,
}];

export class KeyboardBacklight {
  static async create() {
    const kb = new KeyboardBacklight();
    kb.init();
    return kb;
  }
  isConnected() {
    return this.device != null;
  }
  async init() {
    const devices = await navigator.hid.getDevices({ filters });
    if (devices.length > 0) {
      await this.initDevice(devices[0]);
    }
  }
  async initDevice(device) {
    this.device = device;
    if (!this.device.opened) {
      await this.device.open();
    }
    window.addEventListener("onbeforeunload", async () => {
      this.close();
    });
  }
  async connect() {
    const devices = await navigator.hid.requestDevice({ filters });
    try {
      if (devices.length > 0) {
        await this.initDevice(devices[0]);
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    return false;
  }
  async close() {
    await this.device.close();
    this.device = null;
  }
  async backlight(b) {
    if (!this.isConnected()) {
      return;
    }
    const value = typeof b == "boolean" ? (b ? 255 : 0) : b;
    await this.device.sendFeatureReport(1, new Uint32Array([value, 0]));
  }
}
