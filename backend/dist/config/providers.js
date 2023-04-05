"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providers = void 0;
exports.providers = {
    alphavantage: {
        apiKey: 'DWTEGBWQ24FIN2EW',
        responseParser: data => data['Global Quote']['05. price'],
    },
};
//# sourceMappingURL=providers.js.map