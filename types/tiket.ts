export type BookingTicket = {
  agen_asal: string;
  agen_tujuan: string;

  canRating: number;
  countRating: string;

  diskon: string;
  fee: string;

  full_waktu_berangkat: string; // "2026-02-24 17:45:00"
  full_waktu_tiba: string;      // "2026-02-25 05:45:00"

  is_pp: string;

  keberangkatan_id: string;
  kode_rute: string;

  kota_asal: string;
  kota_tujuan: string;

  nama_kelas: string;

  no_booking: string;
  nohp_kontak: string;

  order_id: string;

  payment_status_id: string;
  status_id: string;

  status_pnp: string;

  tgl_berangkat: string;        // "2026-02-24"

  totalNominal: string;

  waktu_keberangkatan: string;  // "17:45"
  waktu_tiba: string;           // "5:45"
};