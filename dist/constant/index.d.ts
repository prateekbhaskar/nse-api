export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export interface ApiContract<Req = any, Res = any> {
    method: HttpMethod;
    path: string;
    requestContract: Req;
    responseContract: Res;
}
export interface ServiceDefinition {
    baseUrls: {
        production: string;
        staging: string;
    };
    apis: Record<string, ApiContract<any, any>>;
}
export declare function defineApi<Req, Res>(def: Omit<ApiContract<Req, Res>, 'requestContract' | 'responseContract'>): ApiContract<Req, Res>;
