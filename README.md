# Google Flights US

A simple Chrome extension to show flight prices in USD while traveling outside of the US.

For some reason, Google Flights insists on defaulting to the local currency of the location detected by your IP address, which is a pain while traveling. This default should be updated by Google to persist location preferences across sessions, but in the meantime I've written this simple Chrome extension.

The extension simply adds `gl=US` to the query parameters for Google flights requests.