"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineApi = defineApi;
// Helper to define an API with strong typing
function defineApi(def) {
    return {
        ...def,
        requestContract: {},
        responseContract: {},
    };
}
