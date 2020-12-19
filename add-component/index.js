const fs = require('fs');
const camelize = require('./camelize');
const path = require('path');
const componentPath = path.resolve(__dirname, 'src', 'components');
const listPath = path.resolve(__dirname, 'src', 'components-list.js');
/**
 * @todo add renameComponent and deleteComponent
 */
const name = {
    kebab: process.argv[2],
    get class() {
        const camel = camelize(this.kebab);
        const firstLetter = camel[0];
        const cls = camel.replace(firstLetter, firstLetter.toUpperCase());

        return cls;
    }
};

const withSlot = process.argv[3] === 'true';

const baseView = `<div class="${name.kebab}">
    ${withSlot ? '<!-- ko template: { nodes: $componentTemplateNodes, data: slotContext } --><!-- /ko -->' : ''}
</div>`;

const baseModel = `define([], function() {
    function ${name.class}(params) {
        ${withSlot ? 'this.slotContext = params.slotContext;' : ''}
        ko.track(this);
    }

    return ${name.class};
});
`;

const componentDir = `${componentPath}/${name.kebab}`;

fs.mkdir(componentDir, (err) => {
    if (err) throw err;
    console.log(`${componentDir} directory created`);

    fs.writeFile(`${componentDir}/${name.kebab}.html`, baseView, function (err) {
        if (err) throw err;
        console.log(`${name.kebab}.html created`);
    
        fs.writeFile(`${componentDir}/${name.kebab}.js`, baseModel, function(err) {
            if (err) throw err;
            console.log(`${name.kebab}.js created`);

            fs.readFile(listPath, 'utf8', (err, data) => {
                if (err) throw err;
                const insertI = data.search(/\];/);
                const tab = '    '
                const toInsert = `${tab}\'${name.kebab}\',\n${tab}`;
                const inserted = data.slice(0, insertI) + toInsert + data.slice(insertI);
                fs.writeFile(listPath, inserted, (err) => {
                    if (err) throw err;

                    console.log(`${name.kebab} has been written to components-list`);
                });
            });
        });
    }); 
});
