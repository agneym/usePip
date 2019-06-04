# usePip

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
