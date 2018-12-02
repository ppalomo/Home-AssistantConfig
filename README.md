# Home-AssistantConfig
This is my Home Assistant configuration. It is installed on a Raspberry Pi 3.

# <a name="menu">Menu</a>
* [Devices](#devices)
* [Floorplan](#floorplan)

## <a name="devices">Devices</a>

| [Go to Menu](#menu) |

These are the devices I use:

| Device  | Type | Quantity | Connection | Home Assistant | Notes |
| ------------- | ------------- |:---: | ------------- | ------------- | ------------- |
| [Echo Dot (3rd gen.)](https://www.amazon.es/gp/product/B0792H8GHP/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1) | Alexa | 1 | Wi-Fi | [Alexa / Amazon Echo](http://collingwood.me.uk/blog/index.php/hass-io-and-alexa/) | Used to control Home Assistant within Alexa |
| [Nest Thermostat (3rd gen.)](https://www.amazon.es/Nest-Learning-Thermostat-3rd-gen/dp/B0182JP94W/ref=sr_1_5?ie=UTF8&qid=1543752200&sr=8-5&keywords=nest) | Climate | 1 | Wi-Fi | [Nest](https://www.home-assistant.io/components/nest/) | Used to control the thermostat |
| [Xiaomi Aqara Gateway v.2](https://www.gearbest.com/living-appliances/pp_344667.html?wid=1433363) | Hub | 1 | Wi-Fi | [Xiaomi Gateway (Aqara)](https://www.home-assistant.io/components/xiaomi_aqara/) | Used to control all Xiaomi sensors |
| [Xiaomi Aqara Temperature Humidity Sensor](https://www.gearbest.com/access-control/pp_626702.html?wid=1433363) | Sensor | 1 | Zigbee | - | - |
| [Xiaomi Aqara Smart Motion Sensor](https://www.gearbest.com/smart-home-controls/pp_009661787808.html?wid=1433363) | Sensor | 1 | Zigbee | - | - |
| [Teckin Smart Plug](https://www.amazon.es/Inteligente-Inal%C3%A1mbrico-Interruptor-Compatible-Asistente/dp/B07CDCYLQ6/ref=sr_1_2?ie=UTF8&qid=1543752032&sr=8-2&keywords=teckin) | Plug | 2 | Wi-Fi | [Tuya](https://www.home-assistant.io/components/tuya/) | - |
| [Osram Smart Plug](https://www.amazon.es/gp/product/B074PZLX2P/ref=oh_aui_detailpage_o08_s00?ie=UTF8&psc=1) | Plug | 2 | Zigbee | - | - |
| [Geekbes Smart Power Strip](https://www.amazon.es/gp/product/B078W23BW9/ref=oh_aui_detailpage_o02_s00?ie=UTF8&psc=1) | Plug | 1 | Wi-Fi | [Tuya](https://www.home-assistant.io/components/tuya/) | - |
| [Koogeek Wi-Fi Smart Power Strip](https://www.amazon.es/gp/product/B07HP4F47Q/ref=oh_aui_detailpage_o00_s00?ie=UTF8&psc=1) | Plug | 1 | Wi-Fi | [Tuya](https://www.home-assistant.io/components/tuya/) | - |
| [Broadlink RM pro+](https://www.amazon.es/gp/product/B07CNP9MGS/ref=oh_aui_detailpage_o03_s00?ie=UTF8&psc=1) | Other | 1 | Wi-Fi | [Broadlink RM Switch](https://www.home-assistant.io/components/switch.broadlink/) | Used to control television and some ambient lights |


## <a name="floorplan">Floorplan</a>

| [Go to Menu](#menu) |

## Useful links

* [Installing Hass.io](https://www.home-assistant.io/hassio/installation/)
* How to integrate Alexa with Home Assistant using [Haaska](http://collingwood.me.uk/blog/index.php/hass-io-and-alexa/)
