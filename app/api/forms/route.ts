import fs from 'fs';
import path, { dirname } from 'path';

export async function GET(request: Request) {
    let models = [];

    const modelFolder = path.join(process.cwd(), '/models');

    const files = fs.readdirSync(modelFolder, {
        withFileTypes: true
    }).filter(file => file.isFile() && path.extname(file.name) === '.json' && file.name !== 'sample.json');

    for (const file of files) {
        const formData = fs.readFileSync(path.join(modelFolder, file.name), 'utf-8');
        models.push(JSON.parse(formData));
    }

    return Response.json({ models });
}