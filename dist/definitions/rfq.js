"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const rfq = {
    baseUrls: {
        production: "https://bricsonline.nseindia.com/rfq",
        staging: "https://bricsonlinereguat.nseindia.com/rfqnewv27"
    },
    apis: {
        login: (0, _1.defineApi)({
            description: "This API authenticates the user and creates a session for the user in the Host System. The session is identified by an alphanumeric login key in the response.",
            path: "/rest/v1/login",
            method: "POST"
        }),
        logout: (0, _1.defineApi)({
            path: "/rest/v1/logout",
            method: "GET",
            description: "This API closes the current session in the HOST system"
        }),
        addParticipantGroup: (0, _1.defineApi)({
            path: "/rest/v1/partgrp/add",
            method: "POST",
            description: "This API allows creation of new participant group."
        }),
        updateParticipantGroup: (0, _1.defineApi)({
            path: "/rest/v1/partgrp/update",
            method: "POST",
            description: "This API allows modifying participant group. API allows changing name of existing group. API also allows adding and removal of participants from constituent participant list"
        }),
        getAllParticipantGroups: (0, _1.defineApi)({
            path: "/rest/v1/partgrp/all",
            method: "POST",
            description: "This API returns a list of all participant groups created by logged in users participant."
        }),
        addParticipantLimit: (0, _1.defineApi)({
            path: "/rest/v1/partlimit/add",
            method: "POST",
            description: "This API allows creation of new limit record."
        }),
        updateParticipantLimit: (0, _1.defineApi)({
            path: "/rest/v1/partlimit/update",
            method: "POST",
            description: "This API allows modifying an existing participant limit.",
        }),
        getAllParticipantLimits: (0, _1.defineApi)({
            path: "/rest/v1/partlimit/all",
            method: "POST",
            description: "This API returns a list of all limit records created by logged in user's participant.",
        }),
        addPortfolioLimit: (0, _1.defineApi)({
            path: "/rest/v1/portfoliolimit/add",
            method: "POST",
            description: "This API allows creation of new portfolio limit record.",
        }),
        updatePortfolioLimit: (0, _1.defineApi)({
            path: "/rest/v1/portfoliolimit/update",
            method: "POST",
            description: "This API allows modifying an existing portfolio limit record.",
        }),
        getAllPortfolioLimits: (0, _1.defineApi)({
            path: "/rest/v1/portfoliolimit/all",
            method: "POST",
            description: "This API returns a list of all portfolio limit records created by logged in user's participant.",
        }),
        updateIssueTypeSettings: (0, _1.defineApi)({
            path: "/rest/v1/partisstyp/update",
            method: "POST",
            description: "This API allows updation of issue type wise settings.",
        }),
        getAllIssueTypeSettings: (0, _1.defineApi)({
            path: "/rest/v1/partisstype/all",
            method: "GET",
            description: "This API returns a list of issue type wise settings for the participant corresponding to logged in user.",
        }),
        createRfqByIsin: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/add/isin",
            method: "POST",
            description: "This API allows creation of new RFQ for a specific ISIN.",
        }),
        updateRfqByIsin: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/update/isin",
            method: "POST",
            description: "This API allows modifying a specific ISIN RFQ.",
        }),
        getAllRfqByIsin: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/all/isin",
            method: "POST",
            description: "This API allows fetching list of specific ISIN RFQs created by the logged in participant or its broker for given input filter condition.",
        }),
        getMarketwatchRfqByIsin: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/marketwatch/isin",
            method: "POST",
            description: "This API allows fetching specific ISIN RFQs visible to the market for today.",
        }),
        addOpenRfq: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/add/open",
            method: "POST",
            description: "This API allows creation of new Open RFQ.",
        }),
        updateOpenRfq: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/update/open",
            method: "POST",
            description: "This API allows modifying an Open RFQ.",
        }),
        getAllOpenRfqs: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/all/open",
            method: "POST",
            description: "This API allows fetching open RFQs based on optional filters such as RFQ number, date, or participant code.",
        }),
        getMarketwatchOpenRfqs: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/marketwatch/open",
            method: "POST",
            description: "This API allows fetching Open RFQs visible to the market for today based on optional filters such as RFQ number, participant code, or status.",
        }),
        withdrawRfqs: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/withdraw",
            method: "POST",
            description: "This API withdraws one or more RFQs of type ISIN or Open based on RFQ numbers provided.",
        }),
        addNegotiation: (0, _1.defineApi)({
            path: "/rest/v1/negotiation/add",
            method: "POST",
            description: "This API allows creation of a new negotiation thread as a responder to an RFQ.",
        }),
        updateNegotiation: (0, _1.defineApi)({
            path: "/rest/v1/negotiation/update",
            method: "POST",
            description: "This API allows the user (either initiator or responder) to provide, revise, or withdraw a quote for a negotiation thread.",
        }),
        withdrawNegotiationQuote: (0, _1.defineApi)({
            path: "/rest/v1/negotiation/withdrawquote",
            method: "POST",
            description: "This API allows a user (initiator or responder) to withdraw quotes for one or more negotiation threads.",
        }),
        terminateNegotiationThread: (0, _1.defineApi)({
            path: "/rest/v1/negotiation/terminate",
            method: "POST",
            description: "This API allows the initiator or responder to terminate a negotiation thread.",
        }),
        acceptNegotiationQuote: (0, _1.defineApi)({
            path: "/rest/v1/negotiation/accept",
            method: "POST",
            description: "This API allows user to accept a counterparty quote or directly accept RFQ (if responder).",
        }),
        getAllNegotiations: (0, _1.defineApi)({
            path: "/rest/v1/negotiation/all",
            method: "POST",
            description: "This API returns a list of all negotiations based on input filters. Can be used by both Initiator and Responder.",
        }),
        proposeDeal: (0, _1.defineApi)({
            path: "/rest/v1/deal/propose",
            method: "POST",
            description: "This API allows user to propose consideration for a negotiated deal. It can be used by both initiator and responder of an RFQ.",
        }),
        acceptOrRejectDeal: (0, _1.defineApi)({
            path: "/rest/v1/deal/acceptreject",
            method: "POST",
            description: "This API allows user to accept or reject proposed consideration for a deal. It can be invoked by consideration proposer checker as well as counter party maker and checker users.",
        }),
        addTradeSplit: (0, _1.defineApi)({
            path: "/rest/v1/deal/tradesplit",
            method: "POST",
            description: "This API allows counter participant in a deal consideration confirmation workflow to optionally provide trade splits.",
        }),
        changeClient: (0, _1.defineApi)({
            path: "/rest/v1/deal/changeclient",
            method: "POST",
            description: "This API allows counter participant in a deal consideration confirmation workflow to optionally provide a different client code. This option is available only with participants who are registered as Brokers.",
        }),
        getAllParticipants: (0, _1.defineApi)({
            path: "/rest/v1/participants/all",
            method: "GET",
            description: "This API returns list of participants in the system.",
        }),
        getAllIsins: (0, _1.defineApi)({
            path: "/rest/v1/isins/all",
            method: "POST",
            description: "This API returns list of not matured bonds (maturity date >= current date) in the system for input filter conditions.",
        }),
        calculatePriceFromYield: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/calcprice",
            method: "POST",
            description: "This API calculates price from yield based on the given ISIN, yield type, settlement date, and accrued interest day count convention.",
        }),
        calculateYieldFromPrice: (0, _1.defineApi)({
            path: "/rest/v1/rfqmaster/calcyield",
            method: "POST",
            description: "This API calculates yield from price based on the given ISIN, yield type, settlement date, and accrued interest day count convention.",
        }),
        getMarketTimings: (0, _1.defineApi)({
            path: "/rest/v1/market/timings",
            method: "GET",
            description: "This API returns issue type wise bidding timing windows for T0 and T1 settlement types.",
        })
    },
    webhookBody: {}
};
exports.default = rfq;
