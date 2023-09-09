# Hardhat Dependency Injector
Copy compiled Solidity bytecode directly from the NPM dependencies.

Based on the [Hardhat Dependency Compiler](https://github.com/ItsNickBarry/hardhat-dependency-compiler)
by [Nick Barry](https://github.com/ItsNickBarry)

## Problem / Motivation
Some Solidity npm packages provide already compiled smart contracts;
some of these packages don't provide Solidity sources (for example Uniswap smart contracts);
in many cases sources are not required, compiled versions are enough (for example in tests);
in some cases already compiled contracts are required (for example when deploying Uniswap v2
infrastructure for testing purposes the exact match of the bytecode is required, which is possible to achieve
only when using already compiled contracts)

## Installation

```bash
npm install --save-dev hardhat-dependency-injector
# or
yarn add --dev hardhat-dependency-injector
```

## Usage
Load plugin in the Hardhat config:

```javascript
require("hardhat-dependency-injector");
```

Add configuration under the `dependencyInjector` key:

| option  | description                                  | default |
|---------|----------------------------------------------|---------|
| `paths` | `Array` of compiled dependency paths to copy | `[]`    |

```javascript
dependencyInjector: {
    paths: [
        "@uniswap/v3-core/artifacts/contracts",
        "@uniswap/v3-periphery/artifacts/contracts",
    ],
}
```

## Contributing
Please see the [Contribution Guide](./CONTRIBUTING.md) document to get understanding on how to report issues,
contribute to the source code, fix bugs, introduce new features, etc.

(c) 2023 Basil Gorin
