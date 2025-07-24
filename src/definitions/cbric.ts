import { ServiceDefinition, defineApi } from ".";

const rfqDefinition = {
    baseUrls: {
        production: "https://bricsonline.nseindia.com/bondsnew",
        staging: "https://bricsonlinereguat.nseindia.com/bondsnew"
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
            path: "/rest/v1/login",
            method: "POST"
        })
    }
} satisfies ServiceDefinition;

export default rfqDefinition;
