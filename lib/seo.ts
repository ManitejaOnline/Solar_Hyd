export const SITE_NAME = 'Hyderabad Solar Quotes';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example-solar-hyderabad.com';

export const BUSINESS_NAME = 'Hyderabad Solar Experts';
export const BUSINESS_WHATSAPP = '+91 8790614829';
export const BUSINESS_ADDRESS =
  'Road No. 1, Banjara Hills, Hyderabad, Telangana 500034';
export const BUSINESS_CITY = 'Hyderabad';
export const BUSINESS_REGION = 'Telangana';
export const BUSINESS_POSTAL_CODE = '500034';

export const PRIMARY_AREAS = [
  'Gachibowli',
  'Kukatpally',
  'Miyapur',
  'Kondapur',
  'Hitech City',
  'Madhapur',
  'Uppal',
  'LB Nagar',
  'Secunderabad',
  'Manikonda'
] as const;

export type PrimaryArea = (typeof PRIMARY_AREAS)[number];

