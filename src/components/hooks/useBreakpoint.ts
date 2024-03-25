import { useMediaQuery } from '~/components/hooks/useMediaQuery';
import resolveConfig from 'tailwindcss/resolveConfig';
import Tailwind from '../../../tailwind.config';

const Config = resolveConfig(Tailwind);
const breakpoints = Config.theme!.screens!;

function useBreakpoint(breakpoint: keyof typeof breakpoints) {
	return useMediaQuery(`(min-width: ${breakpoints[breakpoint]})`);
}

export default useBreakpoint;