"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const rfqDefinition = {
    baseUrls: {
        production: "https://bricsonline.nseindia.com/bondsnew",
        staging: "https://bricsonlinereguat.nseindia.com/bondsnew"
    },
    apis: {
        login: (0, _1.defineApi)({
            path: "/rest/v1/login",
            method: "POST"
        })
    }
};
exports.default = rfqDefinition;
