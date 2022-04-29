import { useEffect, useRef, useReducer } from 'react';

interface State<T> {
  data?: T;
  error?: Error;
  status?: string;
}

type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: 'FETCHING' }
  | { type: 'FETCHED'; payload: T }
  | { type: 'FETCH_ERROR'; payload: Error };

export const useFetch = <T = unknown>(url: string): State<T> => {
  const cache = useRef<Cache<T>>({});

  const initialState: State<T> = {
    status: 'idle',
    error: undefined,
    data: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'FETCHING':
        return { ...initialState, status: 'fetching' };
      case 'FETCHED':
        return { ...initialState, status: 'fetched', data: action.payload };
      case 'FETCH_ERROR':
        return { ...initialState, status: 'error', error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: 'FETCHING' });

      if (cache.current[url]) {
        dispatch({ type: 'FETCHED', payload: cache.current[url] });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: 'FETCHED', payload: data });
        } catch (error: any) {
          if (cancelRequest) return;
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return state;
};
