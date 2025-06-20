# ESLint Config

[![stars](https://img.shields.io/github/stars/haiiro2gou/eslint-config?logo=github)](https://github.com/haiiro2gou/eslint-config/stargazers)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg)](https://gitmoji.carloscuesta.me/)
[![NPM Downloads](https://img.shields.io/npm/dw/%40haiiro2gou%2Feslint-config?label=Downloads)](https://www.npmjs.com/package/%40haiiro2gou/eslint-config)

# Installation

```bash
npm install --save-dev @haiiro2gou/eslint-config
```
# Usage
Create a `eslint.config.js` file in your project root with the following content:
```javascript
import { essentials, node, typescript } from "@haiiro2gou/eslint-config";

export default [
    ...essentials,
    ...node,
    ...typescript,
];
```

If you want to use the config with TypeScript, make sure to install the necessary dependencies.
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

### License

This repository is licensed under [MIT License](LICENSE).

### Contact

**Discord: haiiro2gou**  
**X(Twitter): [@blanoir3298](https://x.com/blanoir3298)**  
**Youtube: [はいいろ](https://www.youtube.com/@haiiro2gou)**
