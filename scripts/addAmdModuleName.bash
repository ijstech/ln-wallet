#!/bin/bash

sed -i '1i /// <amd-module name="@ijstech/ln-wallet/webln-inf.ts" />' src/webln-inf.ts
sed -i '1i /// <amd-module name="@ijstech/ln-wallet/webln.ts" />' src/webln.ts
