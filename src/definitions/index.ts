export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiContract<Req = any, Res = any> {
    description?: string;
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
    webhookBody?: any;
}

// Helper to define an API with strong typing
export function defineApi<Req, Res>(
    def: Omit<ApiContract<Req, Res>, 'requestContract' | 'responseContract'>
): ApiContract<Req, Res> {
    return {
        ...def,
        requestContract: {} as Req,
        responseContract: {} as Res,
    };
}
