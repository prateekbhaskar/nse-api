"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const rfq = {
    baseUrls: {
        production: "https://bricsonline.nseindia.com/rfq/",
        staging: "https://bricsonlinereguat.nseindia.com/rfqnewv27/"
    },
    apis: {
        login: (0, _1.defineApi)({
            path: "/rest/v1/login",
            method: "POST"
        })
    }
};
exports.default = rfq;
