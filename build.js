const fs = require('fs')
const bundler = require('luabundle')

const { requiredLibraries, outDir } = require('./config')

let output = ''

for (const library of requiredLibraries) {
    output += `local ${library.as} = require '${library.require}'\n`
}

const bundled = bundler.bundle('./src/index.lua', {
    paths: ['./src/?.lua', './src/modules/?.lua'],
    isolate: true,
})

output += bundled

fs.writeFileSync(outDir, output)
