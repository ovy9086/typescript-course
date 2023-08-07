import { z } from 'zod';

const FormSchema = z.object({
    name: z.string().optional().nullable(),
    age: z.number().gte(18),
    email: z.string(),
});

type FormSchemaType = z.infer<typeof FormSchema>;
const json: any = {};

const form = FormSchema.parse(json);

async function safeFetch<T extends z.Schema>(
    url: string,
    schema: T
): Promise<z.infer<T>> {
    const response = (await fetch(url)).json();
    return schema.parse(response);
}

const f = async () => {
    const x = await safeFetch('https:///asdasdsa.com', FormSchema);
};
