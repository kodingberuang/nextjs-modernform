"use client";

import { useState } from "react";

export function useAuthForm(onComplete: () => void) {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onComplete();
    };

    const toggleMode = () => setIsLogin(!isLogin);
    const togglePassword = () => setShowPassword(!showPassword);

    return {
        isLogin,
        showPassword,
        handleSubmit,
        toggleMode,
        togglePassword,
    };
}
