# lua-template
CS:GO LUA template with modules support

## Installing dependencies
You must install all the dependencies before running it.
```
npm install
```

## Usage
To use, do
```
npm run start
```

## Adding cloud dependencies
By default, cloud dependencies can not be bundled together, so to get around that, you must specify what cloud dependencies you use in config.json  
Example:
```
{
    "outDir": "./dist/your_script",
    "requiredLibraries": [
        {
            "require": "ffi",
            "as": "ffi"
        },
        {
            "require": "gamesense/entity",
            "as": "entity"
        }
    ]
}
```
