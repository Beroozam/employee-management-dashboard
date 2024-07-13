import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { AppState, AppDispatch } from '@/store/store';

// Define a typed version of the useDispatch hook for use throughout the app
export const useAppDispatch: () => AppDispatch = useDispatch;
// Define a typed version of the useSelector hook for use throughout the app
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
