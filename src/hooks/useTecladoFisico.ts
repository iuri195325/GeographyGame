import { useEffect, useRef } from 'react';
import { Platform } from 'react-native';

// Teclado físico (apenas web). Envia 'A'..'Z', 'ENTER' ou 'BACKSPACE'.
export const useTecladoFisico = (onTecla: (tecla: string) => void, ativo: boolean) => {
    const ultimaTecla = useRef(onTecla);
    ultimaTecla.current = onTecla;

    useEffect(() => {
        if (Platform.OS !== 'web' || !ativo) return;

        const handler = (evento: KeyboardEvent) => {
            if (evento.key === 'Enter') ultimaTecla.current('ENTER');
            else if (evento.key === 'Backspace') ultimaTecla.current('BACKSPACE');
            else if (/^[a-zA-Z]$/.test(evento.key)) ultimaTecla.current(evento.key.toUpperCase());
        };

        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [ativo]);
};
