

var edison_pins = [
  { 
    "jumper": 17, 
    "pin": 1, 
    "name": "GP182_PWM2",
    "description": "GPIO capable of PWM output.",
    "style": {"top": "82px", "left": "591px"},
    "tags": ["gpio", "pwm"]
  },
  { 
    "jumper": 17, 
    "pin": 2, 
    "name": "NC",
    "description": "No connect",
    "style": {"left": "561px", "top": "82px"},
    "tags": ["nc"]
  },
  { 
    "jumper": 17, 
    "pin": 3, 
    "name": "NC",
    "description": "No connect",
    "style": {"left": "532px", "top": "82px"},
    "tags": ["nc"]
  },
  { 
    "jumper": 17, 
    "pin": 4, 
    "name": "VIN",
    "description": "7 to 15V input",
    "style": {"left": "504px", "top": "82px"},
    "tags": ["power"]
  },
  { 
    "jumper": 17, 
    "pin": 5, 
    "name": "GP135/UART2_TX",
    "description": "GPIO, UART2 transmit output.",
    "style": {"left": "474px", "top": "82px"},
    "tags": ["gpio", "uart", "uart2"]
  },
  { 
    "jumper": 17, 
    "pin": 6, 
    "name": "RCVR_MODE",
    "description": "Used for firmware recovery",
    "style": {"left": "445px", "top": "82px"},
    "tags": ["misc"]
  },
  { 
    "jumper": 17, 
    "pin": 7, 
    "name": "GP27/I2C6_SCL",
    "description": "GPIO or I2C6 clock line",
    "style": {"left": "417px", "top": "82px"},
    "tags": ["gpio", "i2c", "i2c6"]
  },
  { 
    "jumper": 17, 
    "pin": 8, 
    "name": "GP20/I2C1_SDA",
    "description": "GPIO or I2C1 data line",
    "style": {"left": "387px", "top": "82px"},
    "tags": ["gpio", "i2c", "i2c1"]
  },
  { 
    "jumper": 17, 
    "pin": 9, 
    "name": "GP28/I2C6_SDA",
    "description": "GPIO or I2C6 data line",
    "style": {"left": "357px", "top": "82px"},
    "tags": ["gpio", "i2c", "i2c6"]
  },
  { 
    "jumper": 17, 
    "pin": 10, 
    "name": "GP111/SSP5_FS1",
    "description": "GPIO or SPI chip select 1",
    "style": {"left": "328px", "top": "82px"},
    "tags": ["gpio", "spi"]
  },
  { 
    "jumper": 17, 
    "pin": 11, 
    "name": "GP109/SSP5_CLK",
    "description": "GPIO or SPI clock line",
    "style": {"left": "299px", "top": "82px"},
    "tags": ["gpio", "spi"]
  },
  { 
    "jumper": 17, 
    "pin": 12, 
    "name": "GP115/SSP5_TXD",
    "description": "GPIO or SPI MOSI",
    "style": {"left": "269px", "top": "82px"},
    "tags": ["gpio", "spi"]
  },
  { 
    "jumper": 17, 
    "pin": 13, 
    "name": "OSC_CLK_OUT_0",
    "description": "High speed clock output",
    "style": {"left": "240px", "top": "82px"},
    "tags": ["clock"]
  },
  { 
    "jumper": 17, 
    "pin": 14, 
    "name": "GP128/UART1_CTS",
    "description": "GPIO or UART1 clear to send input",
    "style": {"left": "211px", "top": "82px"},
    "tags": ["gpio", "uart", "uart1"]
  },
  { 
    "jumper": 18, 
    "pin": 1, 
    "name": "GP13_PWM1",
    "description": "GPIO capable of PWM output",
    "style": {"left": "591px", "top": "112px"},
    "tags": ["gpio", "pwm"]
  },
  { 
    "jumper": 18, 
    "pin": 2, 
    "name": "GP165",
    "description": "GPIO",
    "style": {"left": "561px", "top": "112px"},
    "tags": ["gpio"]
  },
  { 
    "jumper": 18, 
    "pin": 3, 
    "name": "GPI_PWRBTN_N",
    "description": "Power button input",
    "style": {"left": "532px", "top": "112px"},
    "tags": ["power"]
  },
  { 
    "jumper": 18, 
    "pin": 4, 
    "name": "MSIC_SLP_CLK2",
    "description": "32 kHz sleep clock",
    "style": {"left": "504px", "top": "112px"},
    "tags": ["clock"]
  },
  { 
    "jumper": 18, 
    "pin": 5, 
    "name": "V_VBAT_BKUP",
    "description": "RTC backup battery input",
    "style": {"left": "474px", "top": "112px"},
    "tags": ["power", "battery"]
  },
  { 
    "jumper": 18, 
    "pin": 6, 
    "name": "GP19/I2C1_SCL",
    "description": "GPIO or I2C1 clock line",
    "style": {"left": "445px", "top": "112px"},
    "tags": ["gpio", "i2c", "i2c1"]
  },
  { 
    "jumper": 18, 
    "pin": 7, 
    "name": "GP12_PWM0",
    "description": "GPIO capable of PWM output",
    "style": {"left": "417px", "top": "112px"},
    "tags": ["gpio", "pwm"]
  },
  { 
    "jumper": 18, 
    "pin": 8, 
    "name": "GP183_PWM3",
    "description": "GPIO capable of PWM output",
    "style": {"left": "387px", "top": "112px"},
    "tags": ["gpio", "pwm"]
  },
  { 
    "jumper": 18, 
    "pin": 9, 
    "name": "NC",
    "description": "No connect",
    "style": {"left": "357px", "top": "112px"},
    "tags": ["nc"]
  },
  { 
    "jumper": 18, 
    "pin": 10, 
    "name": "GP110/SSP5_FS0",
    "description": "GPIO or SPI chip select 0",
    "style": {"left": "328px", "top": "112px"},
    "tags": ["gpio", "spi"]
  },
  { 
    "jumper": 18, 
    "pin": 11, 
    "name": "GP114/SSP5_RX",
    "description": "GPIO or SPI MISO",
    "style": {"left": "299px", "top": "112px"},
    "tags": ["gpio", "spi"]
  },
  { 
    "jumper": 18, 
    "pin": 12, 
    "name": "GP129/UART1_RTS",
    "description": "GPIO or UART1 ready to send output",
    "style": {"left": "269px", "top": "112px"},
    "tags": ["gpio", "uart", "uart1"]
  },
  { 
    "jumper": 18, 
    "pin": 13, 
    "name": "GP130/UART1_RX",
    "description": "GPIO or UART1 receive line",
    "style": {"left": "240px", "top": "112px"},
    "tags": ["gpio", "uart", "uart1"]
  },
  { 
    "jumper": 18, 
    "pin": 14, 
    "name": "FW_RCVR",
    "description": "Firmware recovery. Active high on boot",
    "style": {"left": "211px", "top": "112px"},
    "tags": ["misc"]
  },
  { 
    "jumper": 19, 
    "pin": 1, 
    "name": "NC",
    "description": "No connect",
    "style": {"left": "591px", "top": "141px"},
    "tags": ["nc"]
  },
  { 
    "jumper": 19, 
    "pin": 2, 
    "name": "V_V1P80",
    "description": "System 1.8V I/O output power",
    "style": {"left": "561px", "top": "141px"},
    "tags": ["power"]
  },
  { 
    "jumper": 19, 
    "pin": 3, 
    "name": "GND",
    "description": "Ground",
    "style": {"left": "532px", "top": "141px"},
    "tags": ["power", "ground"]
  },
  { 
    "jumper": 19, 
    "pin": 4, 
    "name": "GP44/ALS_INT_N",
    "description": "GPIO or ALS interrupt input",
    "style": {"left": "504px", "top": "141px"},
    "tags": ["gpio"]
  },
  { 
    "jumper": 19, 
    "pin": 5, 
    "name": "GP46 ACCELEROMETER_INT_1",
    "description": "GPIO or accelerometer interrupt input",
    "style": {"left": "474px", "top": "141px"},
    "tags": ["gpio", "accelerometer"]
  },
  { 
    "jumper": 19, 
    "pin": 6, 
    "name": "GP48/GYRO_DRDY",
    "description": "GPIO or gyro data ready input",
    "style": {"left": "445px", "top": "141px"},
    "tags": ["gpio", "gyro"]
  },
  { 
    "jumper": 19, 
    "pin": 7, 
    "name": "RESET_OUT#",
    "description": "System reset out low",
    "style": {"left": "417px", "top": "141px"},
    "tags": ["misc", "reset"]
  },
  { 
    "jumper": 19, 
    "pin": 8, 
    "name": "GP131/UART1_TX",
    "description": "GPIO or UART1 transmit line",
    "style": {"left": "387px", "top": "141px"},
    "tags": ["gpio", "uart", "uart1"]
  },
  { 
    "jumper": 19, 
    "pin": 9, 
    "name": "GP14 AUDIO_CODEC_INT",
    "description": "GPIO or audio codec interrupt",
    "style": {"left": "357px", "top": "141px"},
    "tags": ["gpio", "audio"]
  },
  { 
    "jumper": 19, 
    "pin": 10, 
    "name": "GP40/SSP2_CLK",
    "description": "GPIO or SSP2 clock output",
    "style": {"left": "328px", "top": "141px"},
    "tags": ["gpio", "i2s"]
  },
  { 
    "jumper": 19, 
    "pin": 11, 
    "name": "GP43/SSP2_TXD",
    "description": "GPIO or SSP2 data output",
    "style": {"left": "299px", "top": "141px"},
    "tags": ["gpio", "i2s"]
  },
  { 
    "jumper": 19, 
    "pin": 12, 
    "name": "GP77/SD_CDN",
    "description": "GPIO or SD card detect (active low)",
    "style": {"left": "269px", "top": "141px"},
    "tags": ["gpio", "sd"]
  },
  { 
    "jumper": 19, 
    "pin": 13, 
    "name": "GP82/SD_DAT2",
    "description": "GPIO or SD data 2",
    "style": {"left": "240px", "top": "141px"},
    "tags": ["gpio", "sd"]
  },
  { 
    "jumper": 19, 
    "pin": 14, 
    "name": "GP83/SD_DAT3",
    "description": "GPIO or SD data 3",
    "style": {"left": "211px", "top": "141px"},
    "tags": ["gpio", "sd"]
  },
  { 
    "jumper": 20, 
    "pin": 1, 
    "name": "V_VSYS",
    "description": "System input power",
    "style": {"left": "591px", "top": "172px"},
    "tags": ["power"]
  },
  { 
    "jumper": 20, 
    "pin": 2, 
    "name": "V_V3P30",
    "description": "System 3.3V output",
    "style": {"left": "561px", "top": "170px"},
    "tags": ["power"]
  },
  { 
    "jumper": 20, 
    "pin": 3, 
    "name": "GP134/UART2_RX",
    "description": "GPIO or UART2 receive",
    "style": {"left": "532px", "top": "170px"},
    "tags": ["gpio", "uart", "uart2"]
  },
  { 
    "jumper": 20, 
    "pin": 4, 
    "name": "GP45/COMPASS_DRDY",
    "description": "GPIO or compass data ready input",
    "style": {"left": "504px", "top": "170px"},
    "tags": ["gpio", "compass"]
  },
  { 
    "jumper": 20, 
    "pin": 5, 
    "name": "GP47/ACCELEROMETER_INT_2",
    "description": "GPIO or accelerometer interrupt 2",
    "style": {"left": "474px", "top": "170px"},
    "tags": ["gpio", "accelerometer"]
  },
  { 
    "jumper": 20, 
    "pin": 6, 
    "name": "GP49/GYRO_INT",
    "description": "GPIO or gyro interrupt",
    "style": {"left": "445px", "top": "170px"},
    "tags": ["gpio", "gyro"]
  },
  { 
    "jumper": 20, 
    "pin": 7, 
    "name": "GP15",
    "description": "GPIO",
    "style": {"left": "417px", "top": "170px"},
    "tags": ["gpio"]
  },
  { 
    "jumper": 20, 
    "pin": 8, 
    "name": "GP84/SD_CLK_FB",
    "description": "GPIO or SD clock feedback",
    "style": {"left": "387px", "top": "170px"},
    "tags": ["gpio", "sd"]
  },
  { 
    "jumper": 20, 
    "pin": 9, 
    "name": "GP42/SSP2_RXD",
    "description": "GPIO or SSP2 receive data",
    "style": {"left": "357px", "top": "170px"},
    "tags": ["gpio", "i2s"]
  },
  { 
    "jumper": 20, 
    "pin": 10, 
    "name": "GP41/SSP2_FS",
    "description": "GPIO or SSP2 frame sync output",
    "style": {"left": "328px", "top": "170px"},
    "tags": ["gpio", "i2s"]
  },
  { 
    "jumper": 20, 
    "pin": 11, 
    "name": "GP78/SD_CLK",
    "description": "GPIO or SD clock",
    "style": {"left": "299px", "top": "170px"},
    "tags": ["gpio", "sd"]
  },
  { 
    "jumper": 20, 
    "pin": 12, 
    "name": "GP79/SD_CMD",
    "description": "GPIO or SD command",
    "style": {"left": "269px", "top": "170px"},
    "tags": ["gpio", "sd"]
  },
  { 
    "jumper": 20, 
    "pin": 13, 
    "name": "GP80/SD_DAT0",
    "description": "GPIO or SD data 0",
    "style": {"left": "240px", "top": "170px"},
    "tags": ["gpio", "sd"]
  },
  { 
    "jumper": 20, 
    "pin": 14, 
    "name": "GP81/SD_DAT1",
    "description": "GPIO or SD data 1",
    "style": {"left": "211px", "top": "170px"},
    "tags": ["gpio", "sd"]
  }
];

var descriptions = {
  gpio: "<h3>GPIO</h3><p>General purpose input/output pins. Can be programmed as an input or output. When programmed as an input a GPIO can serve as an interrupt or wake source and have programmable pullups or pulldowns. The pullup value is configurable as 2, 20, or 50 kOhm. Most GPIO pins are configured as inputs on reset until otherwise configured. When configured as outputs the pins can drive 3mA each.</p>",
  pwm: '<h3>PWM</h3><p>There are 4 available GPIO pins that can be configured as pulse-width modulated outputs. The PWM resolution is 8 bits. For more information on PWM calculations see page 17 of the <a href="https://communities.intel.com/servlet/JiveServlet/downloadBody/23158-102-4-27348/edison-module_HG_331189-002.pdf" ;="" target="_blank">Edison Hardware Guide</a></p>',
  uart1: "<h3>UART1</h3><p>UART1 includes flow control. It is 16550 compliant, has a 64-byte buffer size and supports baud rates between 300bps to 3.686 Mbps.</p>",
  uart2: "<h3>UART2</h3><p>UART2 does <strong>not</strong> support flow control. It is 16550 compliant, has a 64-byte buffer size and supports baud rates between 300bps to 3.686 Mbps.</p>",
  i2c1: "<h3>I2C1</h3><p>I2C1 connects directly to the IA cores. It is open collector.</p><p>The module has the following specs:<ul><li>Standard Mode (data rates up to 100 kbps)</li><li>Fast Mode (data rates up to 400 kbps</li><li>High-speed Mode (data rates up to 3.4 Mbps</li><li>Always I2C master.</li><li>Does not support multi-master</li><li>Supports clock stretching by slave devices</li><li>Supports both 7-bit and 10-bit addressing modes</li></ul></p>",
  i2c6: "<h3>I2C6</h3><p>I2C6 connects directly to the IA cores. It is open collector. It can also be configured as I2C8 but the initial release of the Edison does not support this.</p><p>The module has the following specs:<ul><li>Standard Mode (data rates up to 100 kbps)</li><li>Fast Mode (data rates up to 400 kbps</li><li>High-speed Mode (data rates up to 3.4 Mbps</li><li>Always I2C master.</li><li>Does not support multi-master</li><li>Supports clock stretching by slave devices</li><li>Supports both 7-bit and 10-bit addressing modes</li></ul></p>",
  spi: "<h3>SPI</h3><p>A single SPI interface is available that has two chip select pins available.<ul><li>Supports all 4 SPI modes in single-frame transfer</li><li>Supports SPH=1 and SPO=0 or 1 in multiple frame transfer.</li><li>25 MHz master mode</li><li>16.67 MHz slave mode</li></ul></p>",
  sd: "<h3>SD Interface</h3><p>SD 3.0 compliant interface. <ul><li>Host clock up to 50 MHz</li><li>Card detection with dedicated card detection signal only</li><li>Requires external level shifter for support of 2.85V devices.</li></ul></p>",
  power: '<h3>Power</h3><p>For a full description of each of the power pins see pages 19-21 in the <a href="https://communities.intel.com/servlet/JiveServlet/downloadBody/23158-102-4-27348/edison-module_HG_331189-002.pdf" target="_blank">Edison Hardware Guide</a></p>',
  misc: "<h3>Miscellaneous</h3><p>Two of these pins are used for firmware recovery while the other is a system reset output.</p>",
  clock: "<h3>Clocks</h3><p>There are two clock outputs. One is a 32 KHz sleep clock. It has a 5mA drive capability and can provide a clock signal while the Edison is in a sleep state. The other clock is a 19.2 MHz clock and the drive capability is not specified.</p>"

};