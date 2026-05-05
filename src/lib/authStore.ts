
import {create } from 'zustand'

type authStoreType = {
    user: string| null;
    isAuthenticated: boolean;
    error: string | null;
    isLoading: boolean;

    signup: (name: string, email: string, password: string) => Promise<void>;
    signin: (email: string, password: string) => Promise<void>;
}

const Backend_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const authStore = create<authStoreType>((set)=>({
    user: null,
    isAuthenticated: false,
    error: null,
    isLoading: false,

    signup: async (name, email, password)=>{
        set({isLoading: true, error: null});
        try {
            const response = await fetch(`${Backend_URL}/auth/register`, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({name, email, password})
            });
            if(!response.ok){
                const data = await response.json();
                return;
                throw new Error(data.message || "Signup failed");
            
            }
            set({isAuthenticated: false, isLoading: false})
        } catch (error) {
            const err = error instanceof Error ? error.message : "Error on signup";
            set({error: err, isLoading: false});
            console.log(err);
            throw error;
        }
    },

    signin: async (email, password) => {
        set({isLoading: true, error: null});
        try {
            const res = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password}),
                credentials: "include",
            })
            if(!res.ok){
                const data = await res.json();
                
                throw new Error(data.message || "Signup failed");
            }
            set({isAuthenticated: true, isLoading: false, error: null});
        } catch (error) {
            const err = error instanceof Error ? error.message : "Error in signin"
            console.log(err);
            set({isLoading: false, error: err});
            throw error;
        }
    }


}))