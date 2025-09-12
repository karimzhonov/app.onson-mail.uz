import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara'; // базовая тема Lara

const LaraDarkBlue = definePreset(Lara, {
    semantic: {
        primary: {
            50: '#e6f7fc',
            100: '#b3ebf7',
            200: '#80dff2',
            300: '#4dd3ed',
            400: '#26c6e9',
            500: '#0088cc', // твой основной цвет
            600: '#0077b3',
            700: '#006699',
            800: '#005580',
            900: '#004466',
            950: '#00334d',
        },
        colorScheme: {
            dark: {
                surface: {
                    0: '#0f172a',
                    50: '#1e293b',
                    100: '#334155',
                    200: '#475569',
                    300: '#64748b',
                    400: '#94a3b8',
                    500: '#cbd5e1',
                    600: '#e2e8f0',
                    700: '#f1f5f9',
                    800: '#f8fafc',
                    900: '#ffffff',
                },
                primary: {
                    color: '{primary.500}',
                    contrastColor: '#ffffff',
                    hoverColor: '{primary.400}',
                    activeColor: '{primary.600}',
                },
                highlight: {
                    background: '{primary.100}',
                    focusBackground: '{primary.200}',
                    color: '{primary.800}',
                    focusColor: '{primary.900}',
                },
            },
        },
    },
});

export default {
    preset: LaraDarkBlue,
    options: {
        darkModeSelector: '.dark',
    },
};
