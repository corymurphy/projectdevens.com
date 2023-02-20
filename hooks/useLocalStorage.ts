import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState(() => {
        if (typeof localStorage !== "undefined") {
            const jsonValue = localStorage.getItem(key);
            if (jsonValue != null) return JSON.parse(jsonValue);
        }

        return initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
}
