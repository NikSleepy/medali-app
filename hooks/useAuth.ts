import * as SecureStore from 'expo-secure-store';
import { useState } from "react";
import { apiFetch } from "../services/Api";

export function useAuth() {

    const [ loading, setLoading ] = useState<boolean>(false);

    async function login(phone: string, password: string) {
        setLoading(true);

        try {
            const res = await apiFetch('auth/sign_in', {
                'phone': phone,
                'password': password,
            });
            if (res?.errors) {
                console.log("login error: ", res?.errors);
            } else {
                console.log('masuk store')
                await SecureStore.setItemAsync('member', JSON.stringify(res?.data?.session));
            }
            setLoading(false);
            return res;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    async function logout() {
        setLoading(true);
        try {
            await SecureStore.deleteItemAsync('member');
            console.log("logout");
            setLoading(false);
            return true;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    }

    async function register() {
        setLoading(true);
        try {
            
        } catch (error) {
            
        }
    }

    return {
        loading,
        login,
        logout,
        register,
    }
}