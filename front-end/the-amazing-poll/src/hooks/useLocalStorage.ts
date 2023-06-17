import { useState } from 'react';

export default function useLocalStorage(key: any, defaultValue: any) {
    const [value, setValue] = useState(() => {
        const storedData = localStorage.getItem(key)
        
        return storedData ? JSON.parse(storedData) : defaultValue
    })

    const setLocalStorageValue = (newValue: any) => {
        localStorage.setItem(key, JSON.stringify(newValue))

        setValue(newValue)
    }

    return [
        value,
        setLocalStorageValue
    ]
}
