export interface ISumbmitTokenProps {
	title: string;
	content: string;
	placeholder: string;
	buttonText: string;
}

export function SumbmitToken({
	buttonText,
	content,
	placeholder,
	title
}: ISumbmitTokenProps) {
	return (
		<div className="bg-dark rounded-[15px] relative">
			<div className="flex flex-col items-center text-center text-white pb-20 pt-[26px]">
				<span className="font-arboria font-medium text-[31px] leading-[38.53px] text-pretty pb-4">
					{title}
				</span>
				<p className="opacity-70 text-[13px] leading-[18.2px] text-pretty">
					{content}
				</p>
			</div>
			<div className="bg-white py-4 px-[11px] rounded-[9.14px] absolute -bottom-[30px] right-[10px] left-[10px]">
				<form>
					<div className="bg-gray rounded-[28.34px] flex flex-row items-center justify-between py-[2px] pr-[2px]">
						{/* <form
						action={(formData) => {
							'use server';
							console.log(formData.get('token'));
						}}
					> */}
						<input
							type="text"
							name="token"
							required
							placeholder={placeholder}
                            className="flex-grow-1 bg-gray rounded-s-[28.34px] pl-4 outline-none text-[13px] font-normal"
						/>
						<button
							type="submit"
							className="bg-orange-primary text-white font-medium text-[13px] p-[9.14px] rounded-[28.34px]"
						>
							{buttonText}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
