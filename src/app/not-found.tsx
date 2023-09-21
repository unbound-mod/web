export default function NotFound() {
	return <div className='min-h-screen flex items-center justify-center gap-3'>
		<h1 className='text-3xl border-r-2 p-3 border-r-border align-top font-bold inline-block'>
			404
		</h1>
		<div className='inline-block'>
			<h2 className='text-sm font-normal leading-[49px] m-[0px]'>
				This page could not be found.
			</h2>
		</div>
	</div>;
}