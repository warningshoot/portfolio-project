import React, { useRef, useCallback, useEffect } from "react";
import style from "./Modal.module.scss";
import { animated, useSpring } from "react-spring";
import "./Modal.module.scss";

const Modal = ({ showModal, setShowModal, children }) => {
	const modalRef = useRef();

	const animation = useSpring({
		config: {
			duration: 300,
		},
		opacity: showModal ? 1 : 0,
		transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
	});

	const closeModal = (e) => {
		if (modalRef.current === e.target) {
			setShowModal(false);
		}
	};

	const keyPress = useCallback(
		(e) => {
			if (e.key === "Escape" && showModal) {
				setShowModal(false);
			}
		},
		[showModal, setShowModal]
	);

	useEffect(() => {
		document.addEventListener("keydown", keyPress);
		return () => document.removeEventListener("keydown", keyPress);
	}, [keyPress]);

	return (
		<>
			{showModal ? (
				<div className={style.modal} ref={modalRef} onClick={closeModal}>
					<animated.div style={animation}>
						<div className={style.modalWrapper}>
							<span className={style.closeModalButton}>
								<i
									className="fas fa-times"
									onClick={() => setShowModal(false)}
								></i>
							</span>
							{children}
						</div>
					</animated.div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
