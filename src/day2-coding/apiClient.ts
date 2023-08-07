import fetch from 'cross-fetch';
import { z } from 'zod';

export const CATS_URL = 'https://cat-fact.herokuapp.com/';

export function createClient(options: { baseUrl: string }) {
    return new ApiClient(options.baseUrl);
}

// export type CatFact = {
//   type: string;
//   text: string;
//   deleted: boolean;
//   fact: {
//     text: string;
//   };
// };

export const CatFactSchema = z.object({
    type: z.string(),
    text: z.string(),
    deleted: z.boolean(),
    fact: z
        .object({
            text: z.string(),
        })
        .optional(),
});

export type CatFact = z.infer<typeof CatFactSchema>;

export const SearchSchema = z.object({
    data: z.array(CatFactSchema),
});

type ApiRequest = { method: 'GET'; path: string } | { method: 'POST'; path: string; body: any };
type ApiResponse<T> = { result: 'ok'; data: T } | { result: 'error'; code: number; msg?: string };

export const Paths = {
    Facts: 'facts/',
    Search: 'search/',
} as const;

class ApiClient {
    constructor(readonly baseUrl: string) {}

    async execute<T extends z.ZodTypeAny>(request: ApiRequest, parser: T): Promise<ApiResponse<z.infer<T>>> {
        const { method, path } = request;
        try {
            let body;
            if (method === 'POST') {
                body = request.body;
            }
            const resp = await fetch(this.baseUrl + path, {
                method: method,
                body,
            });
            if (resp.status === 200) {
                const parsed = parser.parse(await resp.json());
                return { result: 'ok', data: parsed };
            } else {
                const body = await resp.json();
                const msg =
                    !!body && typeof body === 'object' && 'msg' in body && typeof body.msg === 'string'
                        ? body.msg
                        : undefined;
                return { result: 'error', code: resp.status, msg };
            }
        } catch (e) {
            let msg = undefined;
            if (!!e && typeof e === 'object' && 'message' in e) {
                if (typeof e.message === 'string') {
                    msg = e.message;
                }
            }
            return { result: 'error', code: 0, msg };
        }
    }
}

//Type Narrowing
function extractErrorMsg(e: unknown): string | undefined {
    if (e === null) {
        return undefined;
    } else if (typeof e === 'string') {
        return e;
    } else if (typeof e === 'object') {
        if ('msg' in e) {
            return extractErrorMsg(e.msg);
        } else if ('message' in e) {
            return extractErrorMsg(e.message);
        }
    }
}
