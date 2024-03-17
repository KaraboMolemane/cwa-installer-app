
import * as fs from 'fs';

export function readDataFromFile(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            try {
                const jsonData = JSON.parse(data);
                resolve(jsonData);
            } catch (parseError) {
                reject(parseError);
            }
        });
    });
}
