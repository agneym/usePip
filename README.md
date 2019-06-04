# usePip

<img src="https://img.shields.io/npm/v/use-pip.svg" />

A custom React hook to use [Picture in Picture](https://wicg.github.io/picture-in-picture/) mode in [supported browsers](https://caniuse.com/#feat=picture-in-picture).

## Usage:

```javascript
const { loading, error, toggle } = usePip(videoRef);
```

### Parameters:

| Parameter |        description        | required? | default |
| :-------: | :-----------------------: | :-------: | :-----: |
| videoRef  | Ref for the video element |   true    |  null   |

### Return:

|  Name   | Description |                                      Type                                      |
| :-----: | :---------: | :----------------------------------------------------------------------------: |
| loading |   boolean   |             Manages loading time for setting for detecting support             |
|  error  |   string    | Error state as described by [spec](https://wicg.github.io/picture-in-picture/) |
| toggle  |  function   |                        toggles state of PiP in document                        |
