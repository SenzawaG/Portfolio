'use client'
import { useEffect, useState } from "react";
import { _links, beenMade, beenPartOf } from "./data";
import Link from "next/link";

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
		<div className={`backdrop-blur-sm bg-opacity-50 fixed inset-0 h-full w-full duration-500 bg-black ${popup === -1 ? ' opacity-0 z-[-1]' : 'opacity-100 z-[997]'}`}></div>
		<div className={`z-[999] fixed inset-0 h-[100svh] flex justify-center items-center duration-500 ${popup === -1 ? 'translate-y-[-100svh]' : ''}`}>
			<div className="fixed inset-0 h-full w-full" onClick={() => {setPopup(-1)}}></div>
			<div className="z-[998] w-full md:w-[40%] bg-lampblack p-6 md:p-8 rounded-2xl">
				<h1 className="text-3xl md:text-4xl pt-6 pb-8">
					<span className="border-b-4 pb-1 border-gray-400">
						{item?.name}
					</span>
				</h1>
				<p className="text-gray-200 mb-3">
					{item?.desc}
				</p>
				{item?.imageUrl 
					? <div className="w-full md:w-[45%] aspect-video bg-white rounded-xl inline-block" />
					: <div className="mt-12"/>
				}
				<div className="mt-4 mb-1">
					{item?.link && <Link className="text-black rounded-full px-5 py-2 text-sm bg-gray-200 duration-200 hover:bg-white" href={item.link} target="_blank">
						Visit {item.name}
					</Link>}
				</div>
			</div>
		</div>
	</>
}