import csv from 'async-csv'
import { promises as fs } from "fs";

export async function readcsv(path) {
    const csvString = await fs.readFile(path, 'utf-8');
    const rows = await csv.parse(csvString, { columns: true });
    return rows
}