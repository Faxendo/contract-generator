import Pizzip from 'pizzip';
import Docxtemplater from 'docxtemplater';

import fs from 'fs';
import path, { dirname } from 'path';

export async function POST(request: Request) {
    const output = path.join(process.cwd(), "/output/output.docx");

    console.log(output);

    const content = fs.readFileSync(path.join(process.cwd(), '/models/contrat_shine.docx'), 'binary');
    const zip = new Pizzip(content);
    const doc = new Docxtemplater(zip);

    doc.render({
        me: {
            nomSociete: "NLTech",
            formeSociale: "SAS"
        }
    });

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        // compression: DEFLATE adds a compression step.
        // For a 50MB output document, expect 500ms additional CPU time
        compression: "DEFLATE",
    });

    fs.writeFileSync(output, buf);

    return Response.json({ message: path.join(process.cwd(), '/models/contrat_shine.docx') });
}