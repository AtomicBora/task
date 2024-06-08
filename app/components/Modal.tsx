import Image from 'next/image';
import { ReactNode, useEffect, useRef, useState } from 'react';

interface ModalProps {
	isOpen: boolean;
	hasCloseBtn?: boolean;
	onClose?: () => void;
	children: React.ReactNode;
	title: string;
}

export const Modal = ({
	isOpen,
	hasCloseBtn,
	onClose,
	title,
	children
}: ModalProps) => {
	const [isModalOpen, setModalOpen] = useState(isOpen);
	const modalRef = useRef<HTMLDialogElement | null>(null);

	const handleCloseModal = () => {
		if (onClose) {
			onClose();
		}
		setModalOpen(false);
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
		if (event.key === 'Escape') {
			handleCloseModal();
		}
	};

	useEffect(() => {
		setModalOpen(isOpen);
	}, [isOpen]);

	useEffect(() => {
		const modalElement = modalRef.current;
		if (modalElement) {
			if (isModalOpen) {
				modalElement.showModal();
			} else {
				modalElement.close();
			}
		}
	}, [isModalOpen]);

	return (
		<dialog ref={modalRef} onKeyDown={handleKeyDown} className="w-full">
			<div className="flex justify-between p-6 border-b border-b-dark border-opacity-15">
				<span className="font-arboria text-2xl">{title}</span>
				<button onClick={handleCloseModal}>
					<Image
						src="/close-modal.svg"
						alt="Close button"
						width={24}
						height={24}
						className="p-1"
					/>
				</button>
			</div>
			<section className="px-[21px] text-center">{children}</section>
		</dialog>
	);
};
