<!-- The README.md is automatically generated based on api.yaml and docs/*.md for easy viewing on GitHub and NPM. If you need to modify, please view the source file -->

# LcapVideoFlv FLV Video Streaming Player

- [Example](#example)
    - [Basic Usage](#Basic Usage)
-[API]()
    - [Props/Attrs](#propsattrs)

**Media**

FLV video streaming player

## Example
### Basic Usage

``` html
<lcap-video-flv 
    src="https://static-kubevue.s3.amazonaws.com/tutorial/%E5%AD%A6%E4%B9%A0%E4%B8%AD%E5%BF%83%E8%A7%86%E9%A2%91/%E4%B8%93%E9%A2%98%E8%AF%BE%E7%A8%8B/%E4%B8%93%E9%A2%98%E8%AF%BE%E7%A8%8B%EF%BC%9AAPI%E7%AE%A1%E7%90%86%E6%A8%A1%E5%9D%97.mp4"
    type="mp4" 
></lcap-video-flv>
```

## API
### Props/Attrs

| Prop/Attr | Type | Options | Default | Description |
| --------- | ---- | ------- | ------- | ----------- |
| src | string | | | Video stream address |
| type | string | `'flv'` ()<br/>`'mp4'` () | `'flv'` | Video encoding format |
| autoplay | boolean | | `false` | Whether to play automatically |
| isLive | boolean | | `false` | Whether to live stream |
| hasVideo | boolean | | `true` | Is there a video |
| hasAudio | boolean | | `true` | Whether there is audio |
| cors | boolean | | `true` | Whether to support third-party video services |
| withCredentials | boolean | | `false` | Whether to pass login credentials to the third-party video service |
| config | object | | | flv.js Other configurations |

