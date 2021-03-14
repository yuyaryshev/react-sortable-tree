"use strict";
exports.__esModule = true;
var addons_1 = require("@storybook/addons");
var create_1 = require("@storybook/theming/create");
addons_1.addons.setConfig({
    theme: create_1.create({
        base: 'light',
        brandTitle: 'React Sortable Tree',
        brandUrl: 'https://github.com/frontend-collective/react-sortable-tree',
        gridCellSize: 12,
    }),
});
//# sourceMappingURL=manager.js.map