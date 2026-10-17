import { WHATSAPP_NUMBER } from '../config';

export const waLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const GENERIC_MESSAGE = 'Olá! Vim pelo site da QZ EPIs e gostaria de mais informações.';
