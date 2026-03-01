import { mkdir, appendFile } from 'fs/promises';
import path from 'path';

export type LeadPayload = {
  name?: string;
  phone: string;
  area?: string;
  billRange?: string;
  propertyType?: string;
  timeline?: string;
  notes?: string;
  ip?: string | null;
  userAgent?: string | null;
  createdAt: string;
};

const DATA_DIR = path.join(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.jsonl');

export async function storeLeadLocally(lead: LeadPayload) {
  try {
    await mkdir(DATA_DIR, { recursive: true });
    const line = JSON.stringify(lead) + '\n';
    await appendFile(LEADS_FILE, line, { encoding: 'utf8' });
  } catch (error) {
    console.error('Error storing lead locally', error);
  }
}

