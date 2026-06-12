import { apiFetch } from '@/services/Api';
import { BookingTicket } from '@/types/tiket';
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";

export function useRiwayat() {
    const [search, setSearch] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [riwayat, setRiwayat] = useState<BookingTicket[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const fetchRiwayat = async () => {
        setLoading(true);
        try {
            const raw = await SecureStore.getItemAsync('member');

            // Guard: user belum login
            if (!raw) {
                setIsLoggedIn(false);
                return;
            }

            const member_id = JSON.parse(raw).member_id;
            setIsLoggedIn(true);

            const response = await apiFetch('home/riwayat_gabungan', {
                'member_id': member_id,
                'no_booking': search,
            });
            setRiwayat(response?.data ?? []);
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
    
    return { riwayat, loading, error, search, isLoggedIn, setSearch, fetchRiwayat };
}