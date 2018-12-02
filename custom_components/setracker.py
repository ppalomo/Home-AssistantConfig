"""
Support for SeTracker2 platform.

For more details about this platform:
https://play.google.com/store/apps/details?id=com.tgelec.setracker
"""

DOMAIN = 'setracker'

def setup(hass, config):
    hass.states.set('hello.world', 'Paulus')

    return True