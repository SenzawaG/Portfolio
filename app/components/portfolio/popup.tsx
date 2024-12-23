'use client'
import { useEffect, useState } from "react";
import { _links, beenMade, beenPartOf } from "./data";

export default function PopupPortfolio ({popup, setPopup, mode}: {popup:number, setPopup: Function, mode:'beenMade'|'beenPartOf'}) {
	const [item, setItem] = useState<_links|undefined>(undefined)
	useEffect(() => {
		if (popup !== -1) {
			if (mode === 'beenMade') {
				setItem(beenMade[popup])
			} else {
				setItem(beenPartOf[popup])
			}
		}
		else {
			setItem(undefined)
		}
	}, [popup])

	return <>
		{/* <div className={`backdrop-blur-sm bg-opacity-50 fixed inset-0 h-full w-full duration-500 bg-black ${popup === -1 ? ' opacity-0 z-[-1]' : 'opacity-100 z-[997]'}`}></div>
		<div className={`z-[999] fixed inset-0 h-[100svh] flex justify-center items-center duration-500 ${popup === -1 ? 'translate-y-[-100svh]' : ''}`}>
			<div className="fixed inset-0 h-full w-full" onClick={() => {setPopup(-1)}}></div>
			<div className="z-[998] w-full md:w-[80%] bg-lampblack p-6 md:p-8 rounded-xl">
				<button className="absolute top-4 right-4" onClick={() => {setPopup(-1)}}>
					<i className="bi bi-x"/>
				</button>
				<h1 className="text-3xl md:text-4xl pt-6 pb-8">
					<span className="border-b-4 pb-1 border-gray-400">
						{item?.name}
					</span>
				</h1>
				<p className="text-gray-200">
					{item?.desc}
				</p>
				<div className="w-full md:w-[50%] aspect-video mb-1 mr-3 inline-block" />
			</div>
		</div> */}
	</>
}