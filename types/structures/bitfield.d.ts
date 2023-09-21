import type { BitField } from '~/structures';

export interface BitFieldOptions {
	/**
	 * If you `set` an index that is out-of-bounds, the bitfield
	 * will automatically grow so that the bitfield is big enough
	 * to contain the given index, up to the given size (in bit).
	 *
	 * If you want the Bitfield to grow indefinitely, pass `Infinity`.
	 *
	 * @default 0.
	 */
	grow?: number;
}