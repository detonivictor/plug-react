import {renderHook} from '@testing-library/react-hooks';
import croct from '@croct/plug';
import {useCroct} from './useCroct';
import {CroctContext} from '../CroctProvider';

describe('useCroct', () => {
    it('should fail if used out of the <Provider/> component', () => {
        const {result} = renderHook(() => useCroct());

        expect(result.error?.message).toBe('useCroct() can only be used in the context of a <Provider> component.');
    });

    it('should return the Plug instance', () => {
        const {result} = renderHook(() => useCroct(), {
            wrapper: ({children}) => (<CroctContext.Provider value={croct}>{children}</CroctContext.Provider>),
        });

        expect(result.current).toBe(croct);
    });
});
