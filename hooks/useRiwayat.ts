import { apiFetch } from '@/services/Api';
import { BookingTicket } from '@/types/tiket';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";

export function useRiwayat() {
    const [search, setSearch] = useState("");
    const [riwayat, setRiwayat] = useState<BookingTicket[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const fetchRiwayat = async () => {
        setLoading(true);
        const data = await SecureStore.getItemAsync('member');
        const member_id = JSON.parse(data!).member_id;
        try {
            const response = await apiFetch('home/riwayat_gabungan', {
                'member_id': member_id,
                'no_booking': search,
            });
            // console.log("useRiwayat: ", response?.data[0])
            setRiwayat(response?.data);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(String(error));
            }
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchRiwayat();
    }, []);
    
    return { riwayat, loading, error, search, setSearch, fetchRiwayat };
}