class BitField {
	public bitfield: number;

	constructor(data: number = 0) {
		this.bitfield = data;
	}

	has(bit: number): boolean {
		return (this.bitfield & bit) === bit;
	}

	add(...bits: number[]) {
		let total = 0;

		for (const bit of bits) {
			total |= bit;
		}

		this.bitfield |= total;

		return this;
	}

	remove(...bits: number[]) {
		let total = 0;

		for (const bit of bits) {
			total |= bit;
		}

		this.bitfield &= ~total;

		return this;
	}
}

export default BitField;