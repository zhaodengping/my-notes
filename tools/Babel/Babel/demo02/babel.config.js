const presets=[];
const plugins=[];

if(process.env['ENV']==='prod'){
    plugins.push('')
}

module.exports={presets,plugins}