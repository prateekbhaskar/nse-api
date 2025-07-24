declare const rfqDefinition: {
    baseUrls: {
        production: string;
        staging: string;
    };
    apis: {
        login: import(".").ApiContract<{
            domain: string;
            login: string;
            password: string;
        }, {
            domain: string;
            login: string;
            status: "S" | "F" | "P";
            reason?: string;
            loginKey?: string;
            firstName?: string;
            middleName?: string;
            lastName?: string;
            lastLogin?: number;
            serverTime?: number;
            broker?: boolean;
            brokerEnablementType?: "R" | "O";
        }>;
    };
};
export default rfqDefinition;
