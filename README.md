# ncc test

To verify issue [ncc#610](https://github.com/vercel/ncc/issues/610)

* Check out this GitHup repo: https://github.com/tmtron/ncc-ibm-validator
* `npm install`
* `ncc run index.ts`  

```
ncc: Version 0.22.3
ncc: Compiling file index.js
ncc: Using typescript@4.0.5 (local user-provided)
   0kB  semantic-validators/dummy.js
   1kB  semantic-validators2/info.js
   1kB  semantic-validators1/dummy-ibm.js
   1kB  semantic-validators1/openapi.js
   1kB  semantic-validators/swagger.js
   1kB  semantic-validators/parameters.js
   1kB  semantic-validators/dummy-ibm.js
   1kB  .defaultsForSpectral.yaml
   2kB  semantic-validators2/walker-ibm.js
   2kB  semantic-validators2/refs.js
   2kB  semantic-validators1/discriminator.js
   2kB  semantic-validators/schema.js
   2kB  semantic-validators/operations.js
   2kB  semantic-validators/discriminator.js
   3kB  semantic-validators2/responses.js
   3kB  semantic-validators2/items-required-for-array-objects.js
   3kB  semantic-validators1/parameters.js
   4kB  semantic-validators2/security-definitions-ibm.js
   4kB  semantic-validators1/operations.js
   4kB  semantic-validators/security-definitions.js
   4kB  semantic-validators/operations-ibm.js
   5kB  semantic-validators2/walker.js
   5kB  semantic-validators2/security-ibm.js
   5kB  semantic-validators2/paths.js
   5kB  semantic-validators2/parameters-ibm.js
   5kB  semantic-validators2/operation-ids.js
   5kB  semantic-validators1/responses.js
   6kB  semantic-validators1/security-definitions-ibm.js
   6kB  semantic-validators/form-data.js
   7kB  semantic-validators2/paths-ibm.js
   7kB  semantic-validators2/operations-shared.js
   7kB  semantic-validators1/pagination-ibm.js
  19kB  semantic-validators2/schema-ibm.js
 121kB  sourcemap-register.js
2791kB  index.js
3322kB  index.js.map
3038kB  [6822ms] - ncc 0.22.3
Error: Cannot find module '../../../utils/messageCarrier'
Require stack:
- C:\Users\marti\AppData\Local\Temp\190a19e6bf9cf14adc05e3ac70a88053\semantic-validators\discriminator.js
- C:\Users\marti\AppData\Local\Temp\190a19e6bf9cf14adc05e3ac70a88053\index.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:893:15)
    at Function.Module._load (internal/modules/cjs/loader.js:743:27)
    at Module.require (internal/modules/cjs/loader.js:965:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (C:\Users\marti\AppData\Local\Temp\190a19e6bf9cf14adc05e3ac70a88053\semantic-validators\d
iscriminator.js:17:24)
    at Module._compile (internal/modules/cjs/loader.js:1076:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1097:10)
    at Module.load (internal/modules/cjs/loader.js:941:32)
    at Function.Module._load (internal/modules/cjs/loader.js:782:14)
    at Module.require (internal/modules/cjs/loader.js:965:19)

```
