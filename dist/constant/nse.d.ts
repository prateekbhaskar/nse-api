type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
interface ApiContract<Req = any, Res = any> {
    method: HttpMethod;
    path: string;
    requestContract: Req;
    responseContract: Res;
}
interface PushRequest {
    username: string;
    password: string;
}
interface PushResponse {
    token: string;
}
declare const Apis: {
    readonly rfq: {
        readonly urls: {
            readonly production: "https://bricsonline.nseindia.com/rfq/";
            readonly staging: "https://bricsonlinereguat.nseindia.com/rfqnewv27/";
        };
        readonly apis: {
            readonly login: ApiContract<{
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
    readonly cbrics: {
        readonly urls: {
            readonly production: "https://bricsonline.nseindia.com/rfq/";
            readonly staging: "https://bricsonlinereguat.nseindia.com/rfqnewv27/";
        };
        readonly apis: {
            readonly push: ApiContract<PushRequest, PushResponse>;
        };
    };
};
export default Apis;
