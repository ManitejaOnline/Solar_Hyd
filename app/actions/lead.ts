"use server";

import { storeLeadLocally } from '../../lib/lead-storage';

type LeadFormState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
};

const PHONE_REGEX = /^[0-9+\-\s]{8,15}$/;

export async function submitLead(
  prevState: LeadFormState | null,
  formData: FormData
): Promise<LeadFormState> {
  const honeypot = formData.get('company')?.toString().trim();
  if (honeypot) {
    return { ok: true, message: 'Thank you.' };
  }

  const name = formData.get('name')?.toString().trim() || '';
  const phone = formData.get('phone')?.toString().trim() || '';
  const area = formData.get('area')?.toString().trim() || '';
  const billRange = formData.get('billRange')?.toString().trim() || '';
  const propertyType = formData.get('propertyType')?.toString().trim() || '';
  const timeline = formData.get('timeline')?.toString().trim() || '';
  const notes = formData.get('notes')?.toString().trim() || '';

  const fieldErrors: Record<string, string> = {};

  if (!phone) {
    fieldErrors.phone = 'Phone number is required.';
  } else if (!PHONE_REGEX.test(phone)) {
    fieldErrors.phone = 'Enter a valid phone number.';
  }

  if (name && name.length < 2) {
    fieldErrors.name = 'Enter a valid name.';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: 'Please correct the highlighted fields.',
      fieldErrors
    };
  }

  const now = new Date().toISOString();

  await storeLeadLocally({
    name: name || undefined,
    phone,
    area: area || undefined,
    billRange: billRange || undefined,
    propertyType: propertyType || undefined,
    timeline: timeline || undefined,
    notes: notes || undefined,
    ip: null,
    userAgent: null,
    createdAt: now
  });

  return {
    ok: true,
    message:
      'Thank you. A solar expert will reach out shortly with your customised quote.'
  };
}

