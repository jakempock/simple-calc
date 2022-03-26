#!/bin/sh
WAD=$(base64 -w 0 doom1.wad)
CFG=$(base64 -w 0 default.cfg)
WASM=$(base64 -w 0 websockets-doom.wasm)

echo "
{
    const elemId = document.currentScript.id;
    console.log('flag: ' + fileFlag + 'elemId: ' + elemId);
    if (fileFlag[elemId] === 'wad') {
        console.log('got wad req');
        wasmcallback[elemId](base64ToUint8Array('$WAD'));
    } else if (fileFlag[elemId] === 'cfg') {
        console.log('got cfg req');
        wasmcallback[elemId](base64ToUint8Array('$CFG'));
    } else {
        console.log('got other req (assuming wasm)');
        wasmcallback[elemId](base64ToUint8Array('$WASM'));
    }
}
" > jsonp-wasm.js
