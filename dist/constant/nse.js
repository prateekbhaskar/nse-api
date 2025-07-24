"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function defineApi(def) {
    return {
        ...def,
        requestContract: {},
        responseContract: {}
    };
}
// ✅ Final API registry
const Apis = {
    rfq: {
        urls: {
            production: "https://bricsonline.nseindia.com/rfq/",
            staging: "https://bricsonlinereguat.nseindia.com/rfqnewv27/"
        },
        apis: {
            login: defineApi({
                path: "/rest/v1/login",
                method: "POST",
            })
        }
    },
    cbrics: {
        urls: {
            production: "https://bricsonline.nseindia.com/rfq/",
            staging: "https://bricsonlinereguat.nseindia.com/rfqnewv27/"
        },
        apis: {
            push: defineApi({
                method: "POST",
                path: "login",
            })
        }
    }
};
exports.default = Apis;
const req = Apis.rfq.apis.login.requestContract.password = "123";
