import { ServiceDefinition, defineApi } from ".";

const rfq = {
    baseUrls: {
        production: "https://bricsonline.nseindia.com/rfq",
        staging: "https://bricsonlinereguat.nseindia.com/rfqnewv27"
    },
    apis: {
        login: defineApi<{
            domain: string;
            login: string;
            password: string;
        }, {
            domain: string;
            login: string;
            status: 'S' | 'F' | 'P';
            reason?: string;
            loginKey?: string;
            firstName?: string;
            middleName?: string;
            lastName?: string;
            lastLogin?: number;
            serverTime?: number;
            broker?: boolean;
            brokerEnablementType?: 'R' | 'O';
        }>({
            description: "This API authenticates the user and creates a session for the user in the Host System. The session is identified by an alphanumeric login key in the response.",
            path: "/rest/v1/login",
            method: "POST"
        }),
        logout: defineApi<{}, { status: 'C'; }>({
            path: "/rest/v1/logout",
            method: "GET",
            description: "This API closes the current session in the HOST system"
        }),
        addParticipantGroup: defineApi<{
            name: string;
            participantList: string[];
        }, {
            name: string;
            participantList: string[];
            id: number;
        }>({
            path: "/rest/v1/partgrp/add",
            method: "POST",
            description: "This API allows creation of new participant group."
        }),
        updateParticipantGroup: defineApi<{
            name: string;
            participantList: string[];
            id: number;
        }, {
            name: string;
            participantList: string[];
            id: number;
        }>({
            path: "/rest/v1/partgrp/update",
            method: "POST",
            description: "This API allows modifying participant group. API allows changing name of existing group. API also allows adding and removal of participants from constituent participant list"
        }),
        getAllParticipantGroups: defineApi<{
            id?: number;
            name?: string;
        }, Array<{
            id: number;
            name: string;
            participantList: string[];
        }>>({
            path: "/rest/v1/partgrp/all",
            method: "POST",
            description: "This API returns a list of all participant groups created by logged in users participant."
        }),
        addParticipantLimit: defineApi<{
            limitType: 'S' | 'D' | 'C' | 'B' | 'X';
            global?: 'Y' | null;
            counterPartyCode?: string | null;
            loginId?: string | null;
            brokerCode?: string | null;
            clientCode?: string | null;
            settlementType?: 0 | 1 | null;
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            dayGrossLimitInfinity?: 'Y' | null;
            dayGrossLimit?: number | null;
        }, {
            id: number;
            limitType: 'S' | 'D' | 'C' | 'B' | 'X';
            global?: 'Y' | null;
            counterPartyCode?: string | null;
            loginId?: string | null;
            brokerCode?: string | null;
            clientCode?: string | null;
            settlementType?: 0 | 1 | null;
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            dayGrossLimitInfinity?: 'Y' | null;
            dayGrossLimit?: number | null;
            buyUtilization?: number;
            sellUtilization?: number;
            grossUtilization?: number;
        }>({
            path: "/rest/v1/partlimit/add",
            method: "POST",
            description: "This API allows creation of new limit record."
        }),
        updateParticipantLimit: defineApi<{
            id: number;
            limitType: 'S' | 'D' | 'C';
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            dayGrossLimitInfinity?: 'Y' | null;
            dayGrossLimit?: number | null;
        }, {
            id: number;
            limitType: 'S' | 'D' | 'C';
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            dayGrossLimitInfinity?: 'Y' | null;
            dayGrossLimit?: number | null;
            buyUtilization?: number;
            sellUtilization?: number;
            grossUtilization?: number;
        }>({
            path: "/rest/v1/partlimit/update",
            method: "POST",
            description: "This API allows modifying an existing participant limit.",
        }),
        getAllParticipantLimits: defineApi<{
            id?: number;
            limitType?: 'S' | 'D' | 'C' | 'B' | 'X';
            counterPartyCode?: string;
            loginId?: string;
            brokerCode?: string;
            clientCode?: string;
        }, Array<{
            id: number;
            limitType: 'S' | 'D' | 'C' | 'B' | 'X';
            global?: 'Y' | null;
            counterPartyCode?: string | null;
            loginId?: string | null;
            brokerCode?: string | null;
            clientCode?: string | null;
            settlementType?: 0 | 1 | null;
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            dayGrossLimitInfinity?: 'Y' | null;
            dayGrossLimit?: number | null;
            buyUtilization?: number;
            sellUtilization?: number;
            grossUtilization?: number;
        }>>({
            path: "/rest/v1/partlimit/all",
            method: "POST",
            description: "This API returns a list of all limit records created by logged in user's participant.",
        }),
        addPortfolioLimit: defineApi<{
            limitType: 'S' | 'I';
            global?: 'Y' | null;
            isin?: string | null;
            issuer?: string | null;
            valueType?: 'Q' | 'V';
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            dayBuyValueLimitInfinity?: 'Y' | null;
            dayBuyValueLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            daySellValueLimitInfinity?: 'Y' | null;
            daySellValueLimit?: number | null;
            basePrice?: number;
            baseYield?: number;
        }, {
            id: number;
            limitType: 'S' | 'I';
            global?: 'Y' | null;
            isin?: string | null;
            issuer?: string | null;
            valueType?: 'Q' | 'V';
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            dayBuyValueLimitInfinity?: 'Y' | null;
            dayBuyValueLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            daySellValueLimitInfinity?: 'Y' | null;
            daySellValueLimit?: number | null;
            basePrice?: number;
            baseYield?: number;
            buyUtilization?: number;
            sellUtilization?: number;
            buyValueUtilization?: number;
            sellValueUtilization?: number;
        }>({
            path: "/rest/v1/portfoliolimit/add",
            method: "POST",
            description: "This API allows creation of new portfolio limit record.",
        }),
        updatePortfolioLimit: defineApi<{
            limitType: 'S' | 'I';
            global?: 'Y' | null;
            valueType?: 'Q' | 'V';
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            dayBuyValueLimitInfinity?: 'Y' | null;
            dayBuyValueLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            daySellValueLimitInfinity?: 'Y' | null;
            daySellValueLimit?: number | null;
            basePrice?: number;
            baseYield?: number;
        }, {
            id: number;
            limitType: 'S' | 'I';
            global?: 'Y' | null;
            valueType?: 'Q' | 'V';
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            dayBuyValueLimitInfinity?: 'Y' | null;
            dayBuyValueLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            daySellValueLimitInfinity?: 'Y' | null;
            daySellValueLimit?: number | null;
            basePrice?: number;
            baseYield?: number;
            buyUtilization?: number;
            sellUtilization?: number;
            buyValueUtilization?: number;
            sellValueUtilization?: number;
        }>({
            path: "/rest/v1/portfoliolimit/update",
            method: "POST",
            description: "This API allows modifying an existing portfolio limit record.",
        }),
        getAllPortfolioLimits: defineApi<{
            id?: number;
            limitType: 'S' | 'I';
            isin?: string;
            issuer?: string;
        }, Array<{
            id: number;
            limitType: 'S' | 'I';
            global?: 'Y' | null;
            isin?: string | null;
            issuer?: string | null;
            valueType?: 'Q' | 'V';
            dayBuyLimitInfinity?: 'Y' | null;
            dayBuyLimit?: number | null;
            dayBuyValueLimitInfinity?: 'Y' | null;
            dayBuyValueLimit?: number | null;
            daySellLimitInfinity?: 'Y' | null;
            daySellLimit?: number | null;
            daySellValueLimitInfinity?: 'Y' | null;
            daySellValueLimit?: number | null;
            basePrice?: number | null;
            baseYield?: number | null;
            buyUtilization?: number;
            buyValueUtilization?: number;
            sellUtilization?: number;
            sellValueUtilization?: number;
        }>>({
            path: "/rest/v1/portfoliolimit/all",
            method: "POST",
            description: "This API returns a list of all portfolio limit records created by logged in user's participant.",
        }),
        updateIssueTypeSettings: defineApi<{
            issueCategory: 'CP' | 'CD' | 'CB' | 'SD' | 'GS';
            maxSingleTransactionValueLimit: number;
            maxStvViolationAction: 'W' | 'B';
            yieldBandType: 'D' | 'P';
            yieldLowerBand?: number | null;
            yieldUpperBand?: number | null;
            yieldViolationAction: 'W' | 'B';
            priceBandType: 'D' | 'P';
            priceLowerBand?: number | null;
            priceUpperBand?: number | null;
            priceViolationAction: 'W' | 'B';
        }, {
            issueCategory: 'CP' | 'CD' | 'CB' | 'SD' | 'GS';
            maxSingleTransactionValueLimit: number;
            maxStvViolationAction: 'W' | 'B';
            yieldBandType: 'D' | 'P';
            yieldLowerBand?: number | null;
            yieldUpperBand?: number | null;
            yieldViolationAction: 'W' | 'B';
            priceBandType: 'D' | 'P';
            priceLowerBand?: number | null;
            priceUpperBand?: number | null;
            priceViolationAction: 'W' | 'B';
        }>({
            path: "/rest/v1/partisstyp/update",
            method: "POST",
            description: "This API allows updation of issue type wise settings.",
        }),
        getAllIssueTypeSettings: defineApi<void, Array<{
            issueCategory: 'CP' | 'CD' | 'CB' | 'SD' | 'GS';
            maxSingleTransactionValueLimit: number;
            maxStvViolationAction: 'W' | 'B';
            yieldBandType: 'D' | 'P';
            yieldLowerBand?: number | null;
            yieldUpperBand?: number | null;
            yieldViolationAction: 'W' | 'B';
            priceBandType: 'D' | 'P';
            priceLowerBand?: number | null;
            priceUpperBand?: number | null;
            priceViolationAction: 'W' | 'B';
        }>>({
            path: "/rest/v1/partisstype/all",
            method: "GET",
            description: "This API returns a list of issue type wise settings for the participant corresponding to logged in user.",
        }),
        createRfqByIsin: defineApi<{
            isin: string;
            participantCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            buySell: 'B' | 'S' | 'X';
            quoteType: 'Y' | 'B';
            settlementType: 0 | 1;
            value: number;
            quantity?: number;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            valueSell?: number | null;
            quantitySell?: number | null;
            yieldTypeSell?: 'YTM' | 'YTP' | 'YTC' | null;
            yieldSell?: number | null;
            calcMethodSell?: 'M' | 'O' | null;
            priceSell?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            quoteNegotiable?: 'Y' | null;
            valueNegotiable?: 'Y' | null;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[] | null;
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
        }, Array<{
            number: string;
            isin: string;
            participantCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            clientRegType: 'I' | 'R';
            buySell: 'B' | 'S';
            quoteType: 'Y' | 'B';
            settlementType: 0 | 1;
            value: number;
            quantity: number;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            valueSell?: number | null;
            quantitySell?: number | null;
            yieldTypeSell?: 'YTM' | 'YTP' | 'YTC' | null;
            yieldSell?: number | null;
            calcMethodSell?: 'M' | 'O' | null;
            priceSell?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            quoteNegotiable?: 'Y' | null;
            valueNegotiable?: 'Y' | null;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[] | null;
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
            date: string;
            quoteTime: string;
            settlementDate: string;
            status: 'P' | 'W' | 'T';
            userLogin: string;
            tradedValue: number;
            confirmedValue: number;
        }>>({
            path: "/rest/v1/rfqmaster/add/isin",
            method: "POST",
            description: "This API allows creation of new RFQ for a specific ISIN.",
        }),
        updateRfqByIsin: defineApi<{
            number: string;
            settlementType: 0 | 1;
            value: number;
            quantity?: number;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            quoteNegotiable?: 'Y' | null;
            valueNegotiable?: 'Y' | null;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access?: 1 | 2 | 3;
            groupList?: number[] | null;
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
        }, Array<{
            number: string;
            isin: string;
            participantCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            clientRegType: 'I' | 'R';
            buySell: 'B' | 'S';
            quoteType: 'Y' | 'B';
            settlementType: 0 | 1;
            value: number;
            quantity: number;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            valueSell?: number | null;
            quantitySell?: number | null;
            yieldTypeSell?: 'YTM' | 'YTP' | 'YTC' | null;
            yieldSell?: number | null;
            calcMethodSell?: 'M' | 'O' | null;
            priceSell?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            quoteNegotiable?: 'Y' | null;
            valueNegotiable?: 'Y' | null;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[] | null;
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
            date: string;
            quoteTime: string;
            settlementDate: string;
            status: 'P' | 'W' | 'T';
            userLogin: string;
            tradedValue: number;
            confirmedValue: number;
        }>>({
            path: "/rest/v1/rfqmaster/update/isin",
            method: "POST",
            description: "This API allows modifying a specific ISIN RFQ.",
        }),
        getAllRfqByIsin: defineApi<{
            number?: string;
            date?: string; // Format: dd-MMM-yyyy
            isin?: string;
            participantCode?: string;
            clientRegType?: 'I' | 'R';
            status?: 'P' | 'W' | 'T';
        }, Array<{
            number: string;
            isin: string;
            participantCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            clientRegType: 'I' | 'R';
            buySell: 'B' | 'S';
            quoteType: 'Y' | 'B';
            settlementType: 0 | 1;
            value: number;
            quantity: number;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            valueSell?: number | null;
            quantitySell?: number | null;
            yieldTypeSell?: 'YTM' | 'YTP' | 'YTC' | null;
            yieldSell?: number | null;
            calcMethodSell?: 'M' | 'O' | null;
            priceSell?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            quoteNegotiable?: 'Y' | null;
            valueNegotiable?: 'Y' | null;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[] | null;
            participantList?: string[] | null;
            category?: string | null;
            rating?: string | null;
            remarks?: string | null;
            date: string;
            quoteTime: string;
            settlementDate: string;
            status: 'P' | 'W' | 'T';
            userLogin: string;
            tradedValue: number;
            confirmedValue: number;
        }>>({
            path: "/rest/v1/rfqmaster/all/isin",
            method: "POST",
            description: "This API allows fetching list of specific ISIN RFQs created by the logged in participant or its broker for given input filter condition.",
        }),
        getMarketwatchRfqByIsin: defineApi<{
            number?: string;
            isin?: string;
            participantCode?: string;
            status?: 'P' | 'W' | 'T';
            buySell?: 'B' | 'S';
        }, Array<{
            number: string;
            date: string;
            quoteTime: string;
            isin: string;
            buySell: 'B' | 'S';
            quoteType: 'Y' | 'B';
            settlementType: 0 | 1;
            settlementDate: string;
            value: number;
            quantity: number;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            quoteNegotiable?: 'Y' | null;
            valueNegotiable?: 'Y' | null;
            minFillValue?: number;
            valueStepSize?: number;
            dealType: 'D' | 'B';
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            category?: string | null;
            rating?: string | null;
            remarks?: string | null;
            status: 'P' | 'W' | 'T';
            clientCode: string;
            participantCode: string;
            tradedValue: number;
            confirmedValue: number;
        }>>({
            path: "/rest/v1/rfqmaster/marketwatch/isin",
            method: "POST",
            description: "This API allows fetching specific ISIN RFQs visible to the market for today.",
        }),
        addOpenRfq: defineApi<{
            scriptDesc: string;
            openIsinList?: string[];
            participantCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            buySell: 'B' | 'S' | 'X';
            quoteType: 'Y' | 'B';
            value: number;
            valueSell?: number;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[];
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
        }, {
            number: string;
            date: string;
            quoteTime: string;
            scriptDesc: string;
            openIsinList?: string[];
            participantCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            clientRegType: 'I' | 'R';
            buySell: 'B' | 'S' | 'X';
            quoteType: 'Y' | 'B';
            value: number;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[];
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
            status: 'P' | 'W' | 'T';
            userLogin: string;
            tradedValue: number;
            confirmedValue: number;
        }>({
            path: "/rest/v1/rfqmaster/add/open",
            method: "POST",
            description: "This API allows creation of new Open RFQ.",
        }),
        updateOpenRfq: defineApi<{
            number: string;
            scriptDesc: string;
            openIsinList?: string[];
            value: number;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access?: 1 | 2 | 3;
            groupList?: number[];
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
        }, {
            number: string;
            date: string;
            quoteTime: string;
            scriptDesc: string;
            openIsinList?: string[];
            participantCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            clientRegType: 'I' | 'R';
            buySell: 'B' | 'S' | 'X';
            quoteType: 'Y' | 'B';
            value: number;
            gtdFlag?: 'Y' | null;
            endTime?: string;
            minFillValue?: number;
            valueStepSize?: number;
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[];
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
            status: 'P' | 'W' | 'T';
            userLogin: string;
            tradedValue: number;
            confirmedValue: number;
        }>({
            path: "/rest/v1/rfqmaster/update/open",
            method: "POST",
            description: "This API allows modifying an Open RFQ.",
        }),
        getAllOpenRfqs: defineApi<{
            number?: string;
            date?: string;
            participantCode?: string;
        }, Array<{
            number: string;
            scriptDesc: string;
            openIsinList?: string[];
            buySell: 'B' | 'S' | 'X';
            quoteType: 'Y' | 'B';
            value: number;
            valueSell?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string | null;
            minFillValue?: number | null;
            valueStepSize?: number | null;
            dealType: 'D' | 'B';
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            groupList?: number[];
            participantList?: string[];
            category?: string;
            rating?: string;
            remarks?: string;
            status: 'P' | 'W' | 'T';
            clientCode: string;
            participantCode: string;
            userLogin: string;
            tradedValue: number;
            confirmedValue: number;
        }>>({
            path: "/rest/v1/rfqmaster/all/open",
            method: "POST",
            description: "This API allows fetching open RFQs based on optional filters such as RFQ number, date, or participant code.",
        }),
        getMarketwatchOpenRfqs: defineApi<{
            number?: string;
            participantCode?: string;
            status?: 'P' | 'W' | 'T';
        }, Array<{
            number: string;
            scriptDesc: string;
            openIsinList?: string[];
            clientCode: string;
            participantCode: string;
            buySell: 'B' | 'S' | 'X';
            quoteType: 'Y' | 'B';
            value: number;
            valueSell?: number | null;
            gtdFlag?: 'Y' | null;
            endTime?: string | null;
            minFillValue?: number | null;
            valueStepSize?: number | null;
            dealType: 'D' | 'B';
            anonymous?: 'Y' | null;
            access: 1 | 2 | 3;
            category?: string;
            rating?: string;
            remarks?: string;
            date: string;
            status: 'P' | 'W' | 'T';
            tradedValue: number;
            confirmedValue: number;
        }>>({
            path: "/rest/v1/rfqmaster/marketwatch/open",
            method: "POST",
            description: "This API allows fetching Open RFQs visible to the market for today based on optional filters such as RFQ number, participant code, or status.",
        }),
        withdrawRfqs: defineApi<Array<{
            number: string;
        }>, Array<{
            number: string;
            isin?: string;
            scriptDesc?: string;
            openIsinList?: string[];
            buySell: 'B' | 'S' | 'X';
            quoteType: 'Y' | 'B';
            settlementType?: number;
            value: number;
            quantity?: number;
            yieldType?: string;
            yield?: number;
            calcMethod?: string;
            price?: number | null;
            valueSell?: number | null;
            quantitySell?: number | null;
            yieldTypeSell?: string | null;
            yieldSell?: number | null;
            calcMethodSell?: string | null;
            priceSell?: number | null;
            gtdFlag?: string | null;
            endTime?: string | null;
            quoteNegotiable?: string;
            valueNegotiable?: string;
            minFillValue?: number | null;
            valueStepSize?: number | null;
            dealType: 'D' | 'B';
            anonymous?: string | null;
            access: 1 | 2 | 3;
            groupList?: (number | string)[] | null;
            participantList?: string[] | null;
            category?: string | null;
            rating?: string | null;
            remarks?: string | null;
            status: 'W';
            clientCode: string;
            participantCode: string;
            userLogin: string;
            tradedValue: number;
            confirmedValue: number;
        }>>({
            path: "/rest/v1/rfqmaster/withdraw",
            method: "POST",
            description: "This API withdraws one or more RFQs of type ISIN or Open based on RFQ numbers provided.",
        }),
        addNegotiation: defineApi<{
            ngRfqNumber: string;
            isin?: string;
            aeCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            buySell?: 'B' | 'S';
            settlementType: 0 | 1;
            value: number;
            quantity?: number;
            yieldType: string;
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            gtdFlag?: string | null;
            endTime?: string | null;
            remarks?: string | null;
        }, {
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: any[];
        }>({
            path: "/rest/v1/negotiation/add",
            method: "POST",
            description: "This API allows creation of a new negotiation thread as a responder to an RFQ.",
        }),
        updateNegotiation: defineApi<{
            ngId: string;
            role: 'I' | 'R';
            ngRfqNumber: string;
            aeCode: string;
            dealType: 'D' | 'B';
            clientCode: string;
            settlementType: 0 | 1;
            value: number;
            quantity?: number;
            yieldType: string;
            yield: number;
            calcMethod: 'M' | 'O';
            price?: number | null;
            gtdFlag?: string | null;
            endTime?: string | null;
            remarks?: string | null;
        }, {
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: any[];
        }>({
            path: "/rest/v1/negotiation/update",
            method: "POST",
            description: "This API allows the user (either initiator or responder) to provide, revise, or withdraw a quote for a negotiation thread.",
        }),
        withdrawNegotiationQuote: defineApi<Array<{
            rfqNumber: string;
            id: string;
            role: 'I' | 'R';
        }>, Array<{
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: any[];
        }>>({
            path: "/rest/v1/negotiation/withdrawquote",
            method: "POST",
            description: "This API allows a user (initiator or responder) to withdraw quotes for one or more negotiation threads.",
        }),
        terminateNegotiationThread: defineApi<{
            rfqNumber: string;
            id: string;
            role: 'I' | 'R';
        }, {
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: any[];
        }>({
            path: "/rest/v1/negotiation/terminate",
            method: "POST",
            description: "This API allows the initiator or responder to terminate a negotiation thread.",
        }),
        acceptNegotiationQuote: defineApi<{
            rfqNumber: string;
            acceptedValue: number;
            id?: string;
            acceptedSettlementDate?: string;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedPrice?: number;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            role?: 'I' | 'R';
        }, Array<{
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: any[];
        }>>({
            path: "/rest/v1/negotiation/accept",
            method: "POST",
            description: "This API allows user to accept a counterparty quote or directly accept RFQ (if responder).",
        }),
        getAllNegotiations: defineApi<{
            rfqNumber?: string;
            id?: string;
            date?: string;
        }, Array<{
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: any[];
        }>>({
            path: "/rest/v1/negotiation/all",
            method: "POST",
            description: "This API returns a list of all negotiations based on input filters. Can be used by both Initiator and Responder.",
        }),
        proposeDeal: defineApi<{
            ngRfqNumber: string;
            ngId: string;
            participantCode: string;
            dealType: 'D' | 'B';
            price: number;
            accruedInterest: number;
            clientCode: string;
            calcMethod: 'M' | 'O';
            consideration: number;
            putCallDate?: string;
            remarks?: string;
            tradeSplits?: Array<{
                val: number;
                qty: number;
                accInt: number;
                cons: number;
                propCust?: string;
                couCust?: string;
            }>;
            role: 'I' | 'R';
        }, {
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: Array<{
                val: number;
                qty: number;
                accInt: number;
                cons: number;
                propCust?: string;
                couCust?: string;
            }>;
        }>({
            path: "/rest/v1/deal/propose",
            method: "POST",
            description: "This API allows user to propose consideration for a negotiated deal. It can be used by both initiator and responder of an RFQ.",
        }),
        acceptOrRejectDeal: defineApi<{
            rfqNumber: string;
            id: string;
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            confirmStatus: 'PC' | 'PR';
        }, {
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initAeCode?: string;
            initDealType?: 'D' | 'B';
            initClientCode?: string;
            initClientRegType?: 'I' | 'R';
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initAccruedInterest?: number;
            initConsideration?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respAeCode?: string;
            respDealType?: 'D' | 'B';
            respClientCode?: string;
            respClientRegType?: 'I' | 'R';
            respValue?: number;
            respYieldType?: string;
            respYield?: number;
            respQuantity?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respAccruedInterest?: number;
            respConsideration?: number;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedPutCallDate?: string;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            proposedBySide?: 'I' | 'R';
            proposedTime?: string;
            confirmedPriceQuoteTime?: string;
            tradeSplits?: Array<{
                val: number;
                qty: number;
                accInt: number;
                cons: number;
                propCust?: string;
                couCust?: string;
            }>;
        }>({
            path: "/rest/v1/deal/acceptreject",
            method: "POST",
            description: "This API allows user to accept or reject proposed consideration for a deal. It can be invoked by consideration proposer checker as well as counter party maker and checker users.",
        }),
        addTradeSplit: defineApi<{
            rfqNumber: string;
            id: string;
            tradeSplits?: Array<{
                val: number;
                qty: number;
                accInt: number;
                cons: number;
                propCust?: string;
                couCust?: string;
            }>;
        }, {
            rfqNumber: string;
            id: string;
            date: string;
            isin: string;
            buySell: 'B' | 'S';
            initSettlementType?: 0 | 1;
            initSettlementDate?: string;
            initClientCode?: string;
            initAeCode?: string;
            initValue?: number;
            initQuantity?: number;
            initYieldType?: string;
            initYield?: number;
            initCalcMethod?: 'M' | 'O';
            initPrice?: number;
            initQuoteTime?: string;
            initGtdFlag?: string;
            initEndTime?: string;
            initRemarks?: string;
            initLoginId?: string;
            respSettlementType?: 0 | 1;
            respSettlementDate?: string;
            respClientCode?: string;
            respAeCode?: string;
            respValue?: number;
            respQuantity?: number;
            respYieldType?: string;
            respYield?: number;
            respCalcMethod?: 'M' | 'O';
            respPrice?: number;
            respPutCallDate?: string;
            respQuoteTime?: string;
            respGtdFlag?: string;
            respEndTime?: string;
            respRemarks?: string;
            respLoginId?: string;
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            tradeNumber?: string;
            acceptedSettlementType?: 0 | 1;
            acceptedSettlementDate?: string;
            acceptedValue?: number;
            acceptedQuantity?: number;
            acceptedYieldType?: string;
            acceptedYield?: number;
            acceptedCalcMethod?: 'M' | 'O';
            acceptedPrice?: number;
            acceptedAccruedInterest?: number;
            acceptedConsideration?: number;
            acceptedQuoteTime?: string;
            acceptedBySide?: 'I' | 'R';
            acceptedByLoginId?: string;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            confirmedPriceQuoteTime?: string;
            tradeSplits?: Array<{
                val: number;
                qty: number;
                accInt: number;
                cons: number;
                propCust?: string;
                couCust?: string;
            }>;
        }>({
            path: "/rest/v1/deal/tradesplit",
            method: "POST",
            description: "This API allows counter participant in a deal consideration confirmation workflow to optionally provide trade splits.",
        }),
        changeClient: defineApi<{
            ngRfqNumber: string;
            ngId: string;
            dealType: 'D' | 'B';
            clientCode: string;
            buySell: 'B' | 'S';
        }, {
            date: string;
            acceptedCalcMethod?: 'M' | 'O';
            tradeNumber?: string;
            initQuoteTime?: string;
            initSettlementType?: 0 | 1;
            respAeCode?: string;
            tradeSplits?: null | any;
            initSettlementDate?: string;
            initAccruedInterest?: number;
            acceptedValue?: number;
            confirmedPriceQuoteTime?: string;
            initGtdFlag?: string;
            initYield?: number;
            respClientCode?: string;
            respAccruedInterest?: number;
            confirmStatus?: 'PP' | 'PC' | 'PR' | 'CA' | 'CC' | 'CR';
            respClientRegType?: 'I' | 'U';
            id: string;
            initYieldType?: 'YTM' | 'YTP' | 'YTC';
            respPrice?: number;
            initLoginId?: string;
            respQuoteTime?: string;
            respEndTime?: string;
            acceptedBySide?: 'I' | 'R';
            respCalcMethod?: 'M' | 'O';
            initAeCode?: string;
            acceptedSettlementDate?: string;
            acceptedPrice?: number;
            respGtdFlag?: string;
            acceptedQuantity?: number;
            acceptedByLoginId?: string;
            acceptedAccruedInterest?: number;
            respConsideration?: number;
            initQuantity?: number;
            respDealType?: 'D' | 'B';
            status: 'N' | 'R' | 'A' | 'C' | 'E';
            respSettlementDate?: string;
            respValue?: number;
            initClientRegType?: 'I' | 'U';
            respLoginId?: string;
            initPrice?: number;
            initClientCode?: string;
            respYieldType?: 'YTM' | 'YTP' | 'YTC';
            acceptedYieldType?: 'YTM' | 'YTP' | 'YTC';
            acceptedSettlementType?: 0 | 1;
            acceptedConsideration?: number;
            respSettlementType?: number;
            respRemarks?: string;
            initValue?: number;
            initCalcMethod?: 'M' | 'O';
            buySell: 'B' | 'S';
            acceptedQuoteTime?: string;
            initAuId?: string;
            rfqNumber: string;
            acceptedPutCallDate?: string;
            acceptedYield?: number;
            respYield?: number;
            initConsideration?: number;
            initEndTime?: string;
            respQuantity?: number;
            isin?: string;
            initDealType?: 'D' | 'B';
            initRemarks?: string;
        }>({
            path: "/rest/v1/deal/changeclient",
            method: "POST",
            description: "This API allows counter participant in a deal consideration confirmation workflow to optionally provide a different client code. This option is available only with participants who are registered as Brokers.",
        }),
        getAllParticipants: defineApi<void, Array<{
            code: string;
            name: string;
        }>>({
            path: "/rest/v1/participants/all",
            method: "GET",
            description: "This API returns list of participants in the system.",
        }),
        getAllIsins: defineApi<{
            description?: string;
            filtIssueCategory?: 'CB' | 'CP' | 'CD' | 'SD' | 'GS';
            issuer?: string;
            filtMaturity?: '0^1' | '1^3' | '3^5' | '5^7' | '7^10' | '10^';
            filtCoupon?: '0^3' | '3^5' | '5^6' | '6^7' | '7^8' | '8^9' | '9^10' | '10^';
        }, Array<{
            symbol: string;
            description: string;
            issuer: string;
            maturityDate: string;
            couponRate: number;
            faceValue: number;
            issueCategory: 'CB' | 'CP' | 'CD' | 'SD' | 'GS';
            listed: 'Y' | 'N';
        }>>({
            path: "/rest/v1/isins/all",
            method: "POST",
            description: "This API returns list of not matured bonds (maturity date >= current date) in the system for input filter conditions.",
        }),
        calculatePriceFromYield: defineApi<{
            isin: string;
            settlementDate: string;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            yield: number;
            aiDcc: 1 | 2 | 3 | 4;
        }, {
            calcMethod: 'M' | 'O';
            putCallDate?: string;
            price: number;
            accruedInterest: number;
        }>({
            path: "/rest/v1/rfqmaster/calcprice",
            method: "POST",
            description: "This API calculates price from yield based on the given ISIN, yield type, settlement date, and accrued interest day count convention.",
        }),
        calculateYieldFromPrice: defineApi<{
            isin: string;
            settlementDate: string;
            yieldType: 'YTM' | 'YTP' | 'YTC';
            price: number;
            aiDcc: 1 | 2 | 3 | 4;
        }, {
            calcMethod: 'M' | 'O';
            putCallDate?: string;
            yield: number;
            accruedInterest: number;
        }>({
            path: "/rest/v1/rfqmaster/calcyield",
            method: "POST",
            description: "This API calculates yield from price based on the given ISIN, yield type, settlement date, and accrued interest day count convention.",
        }),
        getMarketTimings: defineApi<void, Array<{
            type: string;
            starttimeT0: number;
            starttimeT1: number;
            yieldcutoffT0: number;
            yieldcutoffT1: number;
            pricecutoffT0: number;
            pricecutoffT1: number;
        }>>({
            path: "/rest/v1/market/timings",
            method: "GET",
            description: "This API returns issue type wise bidding timing windows for T0 and T1 settlement types.",
        })
    },
    webhookBody: {} as WebhookNotificationRequest
} satisfies ServiceDefinition;

export interface WebhookNotificationRequest {
    rfqList?: RfqMaster[];
    negotiationList?: Negotiation[];
}

export interface RfqMaster {
    number: string;
    isin: string;
    buySell: "B" | "S";
    quoteType: string;
    settlementType: number;
    value: number;
    quantity: number;
    yieldType: string;
    yield: number;
    calcMethod: "M" | "O";
    price: number;
    gtdFlag: string | null;
    endTime: string | null; // format: "HH:mm"
    quoteNegotiable: "Y" | "N";
    valueNegotiable: "Y" | "N";
    minFillValue: number;
    valueStepSize: number;
    dealType: "D" | "B";
    anonymous: "Y" | "N";
    access: number;
    groupList: string[];
    participantList: string[];
    category: string;
    rating: string;
    remarks: string;
    status: string;
    participantCode: string;
    userLogin: string;
    tradedValue: number;
    confirmedValue: number;
}
export interface Negotiation {
    ngRfqNumber: string;
    id: string;
    date: string; // format: "dd-MMM-yyyy"
    isin: string;
    buySell: "B" | "S";
    initSettlementType: number;
    initSettlementDate: string;
    initClientCode: string;
    initAeCode: string;
    initValue: number;
    initQuantity: number;
    initYieldType: string;
    initYield: number;
    initCalcMethod: "M" | "O";
    initPrice: number;
    initQuoteTime: string;
    initGtdFlag: string;
    initEndTime: string | null;
    initRemarks: string | null;
    initLoginId: string | null;
    respSettlementType: number;
    respSettlementDate: string;
    respClientCode: string;
    respAeCode: string;
    respValue: number;
    respQuantity: number;
    respYieldType: string;
    respYield: number;
    respCalcMethod: "M" | "O";
    respPrice: number;
    respPutCallDate: string | null;
    respQuoteTime: string;
    respGtdFlag: string;
    respEndTime: string | null;
    respRemarks: string | null;
    respLoginId: string;
    status: string;
}

export default rfq;
