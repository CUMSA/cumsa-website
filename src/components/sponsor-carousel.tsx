import { getPlatinumSponsors, getGoldSponsors } from "@/data/sponsors";
import Link from "next/link"
import Image from "next/image"

const platinumSponsors = getPlatinumSponsors();
const goldSponsors = getGoldSponsors();
const n = (platinumSponsors.length > 0 ? 1 : 0) + (goldSponsors.length > 0 ? 1 : 0);

export default function SponsorCarousel() {
	return (
		<>
			{n > 0 && (
				<div className="backdrop-blur-xl bg-slate-950/50 border-t border-border py-6 px-[5%]">
					<div className={`mx-auto grid grid-cols-${n} gap-8`}>

						{/* Platinum Sponsors */}
						{platinumSponsors.length > 0 && (
							<div>
								<h3 className="text-lg font-semibold text-foreground mb-6">Platinum Sponsors</h3>
								<div className="relative overflow-hidden">
									<div className="flex space-x-8 animate-scroll">
										{/* Duplicate sponsors for seamless loop */}
										{[...platinumSponsors, ...platinumSponsors, ...platinumSponsors].map((sponsor, index) => (
											<Link
												key={`${sponsor.id}-${index}`}
												href={`/sponsors/${sponsor.slug}`}
												className="flex-shrink-0"
												title={sponsor.name}
											>
												<div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-32 h-20 flex items-center justify-center">
													<Image
														src={sponsor.picture}
														alt={sponsor.name}
														width={100}
														height={60}
														className="object-contain max-w-full max-h-full"
													/>
												</div>
											</Link>
										))}
									</div>
								</div>
							</div>
						)}

						{/* Gold Sponsors */}
						{goldSponsors.length > 0 && (
							<div>
								<h3 className="text-lg font-semibold text-foreground mb-6">Gold Sponsors</h3>
								<div className="relative overflow-hidden">
									<div className="flex space-x-8 animate-scroll">
										{/* Duplicate sponsors for seamless loop */}
										{[...goldSponsors, ...goldSponsors, ...goldSponsors].map((sponsor, index) => (
											<Link
												key={`${sponsor.id}-${index}`}
												href={`/sponsors/${sponsor.slug}`}
												className="flex-shrink-0"
												title={sponsor.name}
											>
												<div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-32 h-20 flex items-center justify-center">
													<Image
														src={sponsor.picture}
														alt={sponsor.name}
														width={100}
														height={60}
														className="object-contain max-w-full max-h-full"
													/>
												</div>
											</Link>
										))}
									</div>
								</div>
							</div>
						)}

					</div>
				</div>
			)}
		</>
	);
}
