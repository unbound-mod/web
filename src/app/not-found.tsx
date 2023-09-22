export default function NotFound() {
	return <div className='absolute top-1/2 left-1/2 mr-[-50%] -translate-x-1/2 -transform-y-1/2'>
		<div className='flex flex-grow items-center justify-center gap-3'>
			<h1 className='text-3xl border-r-2 p-3 border-r-border align-top font-bold inline-block'>
				404
			</h1>
			<div className='inline-block'>
				<h2 className='text-sm font-normal m-0'>
					This page could not be found.
				</h2>
			</div>
		</div>
	</div>;
}